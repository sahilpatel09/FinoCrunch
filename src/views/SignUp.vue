<template>
  <div v-if="loadingLoader">
    <Loader />
  </div>
  <div v-else-if="loadingRedirect">
    <RedirectLoader />
  </div>
  <div v-else
    class="flex flex-row items-center justify-center bg-gray-800 text-gray-100 h-screen fade-in"
  >
    <div class="">
      <div
        class="flex flex-col rounded items-center justify-center px-16 py-14 sm:shadow-2xl sm:rounded bg-gray-900"
      >
        <img src="../assets/logo-dark.png" alt="" class="w-32 mt-4" />
        <h2 class="font-serif text-4xl antialiased font-bold">FinoCrunch</h2>
        <p class="text-md text-slate-50">Record Everything important.</p>
        <div class="w-24 h-0.5 bg-indigo-100 mt-2"></div>
        <h4 class="font-semibold my-1">SIGN UP</h4>
        <div class="w-24 h-0.5 bg-indigo-100"></div>

<!--        <button-->
<!--          class="mt-4 border-2 border-sky-500 px-8 py-2 flex flex-row items-center gap-2 rounded w-64 md:hover:bg-gray-100 md:ease-in md:duration-300"-->
<!--        >-->
<!--          <img src="../assets/images/google-18.png" alt="..." />-->
<!--          <span>Continue with Google</span>-->
<!--        </button>-->

        <!--       <button class="mt-1 border-2 border-slate-900 px-8 py-2 flex flex-row items-center gap-2 w-64">
        <img src="https://www.evernote.com/redesign/OpenID/img/apple-logo_20.svg" class="">
        <span>Continue with Apple</span>
      </button> -->

<!--        <div class="flex flex-row gap-x-2 items-center justify-center mt-4">-->
<!--          <div class="w-24 h-0.5 bg-indigo-100"></div>-->
<!--          <div class="text-sm">or</div>-->
<!--          <div class="w-24 h-0.5 bg-indigo-100"></div>-->
<!--        </div>-->
        <p class="text-red-400 my-0.5" v-if="error">{{ error }}</p>
        <form
          @submit.prevent="signUp"
          accept-charset="utf-8"
          class="flex flex-col"
        >
          <input
              type="text"
              name="name"
              class="w-64 border-2 p-2 rounded mt-4 bg-gray-800"
              placeholder="Full Name"
              v-model="user.name"
          />

          <input
            type="email"
            name="email"
            class="w-64 border-2 p-2 rounded mt-1 bg-gray-800"
            placeholder="Email address or username"
            v-model="user.email"
          />
          <input
            type="password"
            name="password"
            class="w-64 border-2 p-2 rounded mt-1 bg-gray-800"
            placeholder="Password"
            v-model="user.password"
          />

          <button
            class="bg-indigo-500 text-white w-64 p-2 mt-2 rounded md:hover:bg-indigo-600 md:ease-in md:duration-300"
          >
            Continue
          </button>
        </form>

        <p class="text-black text-sm text-center mt-2 text-gray-400">
          Already have an account?
          <br />
          <span class="text-indigo">
            <a href="/login">Sign in to your account.</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase/supabase";
import Loader from "@/components/Loader";
import RedirectLoader from "@/components/RedirectLoader";

export default {
  name: "SignUp",
  components: {RedirectLoader, Loader},
  data() {
    return {
      error: "",
      loadingLoader: true,
      loadingRedirect: false,
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {

    setTimeout(() => {

      const user = supabase.auth.user();
      if(user){
        this.$store.currentUser = user
        this.loadingLoader = false
        this.loadingRedirect = true
        setTimeout(()=>{
          this.$router.push('/admin')
        },2000);

      }else{
        this.loadingLoader = false
        this.loadingRedirect = false

      }

    }, 1500);



  }
  ,
  created() {
    const user = supabase.auth.user();
    if(user){
      this.$store.commit('addUniversalUser', user);
      this.$router.push('/admin')
    }
  }
  ,
  methods: {
    async signUp() {
      this.loadingLoader = true
      try {

        const { user, error } = await supabase.auth.signUp({
          email: this.user.email,
          password: this.user.password,
        },{data: { name: this.user.name }} );

        if (user) {
          console.log(user);
          this.loadingLoader = false
          this.loadingRedirect = true

          setTimeout(()=>{
            this.$router.push('/admin')
          },2000);

        }

        if (error) throw error;
      } catch (error) {
        this.loadingLoader = false
        this.error = error.message;
      }
    },
  },
};
</script>
