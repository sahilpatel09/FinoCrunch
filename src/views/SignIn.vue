<template>
  <div class="flex flex-row items-center justify-center">
    <div class="container bg-slate-800 w-96 m-12 flex flex-col items-center shadow-2xl pt-4 pb-4">
      <img src="../assets/logo-dark.png" alt="" class="w-40 mt-4">
      <h2 class="font-serif text-4xl antialiased font-bold">FinoCrunch</h2>
      <p class="text-md text-slate-50">Record Everything important.</p>
      
      <button class="mt-4 border-2 border-sky-500 px-8 py-2 flex flex-row items-center gap-2 rounded w-64">
        <img src="https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png" class="">
        <span>Continue with Google</span>
      </button>

      <button class="mt-1 border-2 border-slate-500 px-8 py-2 flex flex-row items-center gap-2 w-64">
        <img src="https://www.evernote.com/redesign/OpenID/img/apple-logo_20.svg" class="">
        <span>Continue with Apple</span>
      </button>

      <div class="flex flex-row gap-x-2 items-center justify-center mt-4">
        <div class="w-24 h-0.5 bg-indigo-100">
        </div>
        <div class="text-sm">
          or
        </div>
        <div class="w-24 h-0.5 bg-indigo-100">
        </div>
      </div>

      <input type="email" name="email" class="w-64 border-2 p-2 rounded mt-4" placeholder="Email address or username" />
      <button class="bg-indigo-500 text-white w-64 p-2 mt-2 rounded">Continue</button>

      <div class="mt-1 px-4 py-2 flex flex-row items-center gap-2 w-64">
        <input type="checkbox" name="rememberme">
        <span>Remember me for 30 days</span>
      </div>

      <p class="text-black text-sm text-center">
        Don't have an account?
        <br>
        <span class="text-indigo">
          <a href="/">Create an account.</a>
        </span>

      </p>
      



    </div>
  </div>

  <!-- <form @submit.prevent="send()" method="get" accept-charset="utf-8">
    <input type="email" name="" placeholder="Email" v-model="email"><br>
    <input type="passwords" name="" placeholder="passwords" v-model="password"><br>
    <input type="submit" name="">  
    </form> -->
</template>

<script>
export default {

  name: 'SignIn',
  components : {

  },
  methods: {
    send() {
      console.log(this.email, this.password)
    }
  },

  data () {
    return {
      email: "",
      password: "",

    }
  }
}
</script>

<style lang="css" scoped>
.mainBox {
  background:grey;
}
</style>