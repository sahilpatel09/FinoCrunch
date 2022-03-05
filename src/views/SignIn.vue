<template>
  <div
    class="flex flex-row items-center justify-center bg-gray-800 text-gray-300 h-full"
  >
    <div class="">
      <div
        class="flex flex-col rounded items-center justify-center px-16 py-14 sm:shadow-2xl bg-gray-900"
      >
        <img src="../assets/logo-dark.png" alt="" class="w-32 mt-4" />
        <h2 class="font-serif text-4xl antialiased font-bold">FinoCrunch</h2>
        <p class="text-md text-slate-50">Record Everything important.</p>
        <div class="w-24 h-0.5 bg-indigo-100 mt-2"></div>
        <h4 class="font-semibold my-1">SIGN IN</h4>
        <div class="w-24 h-0.5 bg-indigo-100"></div>
        <button
          class="mt-4 border-2 border-sky-500 px-8 py-2 flex flex-row items-center gap-2 rounded w-64 md:hover:bg-gray-100 md:ease-in md:duration-300"
        @click="googleSignIn">
          <img src="../assets/images/google-18.png" alt="..." />
          <span>Continue with Google</span>
        </button>

        <!--       <button class="mt-1 border-2 border-slate-900 px-8 py-2 flex flex-row items-center gap-2 w-64">
        <img src="https://www.evernote.com/redesign/OpenID/img/apple-logo_20.svg" class="">
        <span>Continue with Apple</span>
      </button> -->

        <div class="flex flex-row gap-x-2 items-center justify-center mt-4">
          <div class="w-24 h-0.5 bg-indigo-100"></div>
          <div class="text-sm">or</div>
          <div class="w-24 h-0.5 bg-indigo-100"></div>
        </div>
        <p class="text-red-400 my-0.5" v-if="error">{{ error }}</p>
        <form
          @submit.prevent="signIn"
          accept-charset="utf-8"
          class="flex flex-col"
        >
          <input
            type="email"
            name="email"
            class="w-64 border-2 p-2 rounded mt-4 bg-gray-800"
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
            Log in
          </button>
        </form>

        <div class="mt-1 px-4 py-2 flex flex-row items-center gap-2 w-64">
          <input type="checkbox" name="rememberme" />
          <span>Remember me for 30 days</span>
        </div>

        <p class="text-black text-sm text-center text-gray-400">
          Don't have an account?
          <br />
          <span class="text-indigo">
            <a href="/register">Create an account.</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "@/supabase/supabase";

export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      error: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async googleSignIn(){



      try {
        const { user, error } = await supabase.auth.signIn({
          provider: 'google'
        }, {redirectTo: "https://froagwnelyuxuuksukmr.supabase.co/auth/v1/authorize?provider=google&redirect_to=http://localhost:8080/admin"});

        if (user) {
          console.log(user);
          this.$router.push("/admin");
        }

        if (error) throw error;
      } catch (error) {
        this.error = error.message;
      }










    },
    async signIn() {
      try {
        const { user, error } = await supabase.auth.signIn({
          email: this.user.email,
          password: this.user.password,
        });

        if (user) {
          console.log(user);
          this.$router.push("/admin");
        }

        if (error) throw error;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>
