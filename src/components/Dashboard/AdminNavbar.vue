<template>
  <nav class="p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto">
    <div class="hidden lg:flex lg:justify-between lg:items-center">
      <a href="#" class="flex items-start gap-2 group">
        <div
          class="bg-blue-600 text-white p-2 rounded-md group-hover:bg-blue-800"
        >
          <img src="../../assets/logo-white.png" alt="" class="w-6" />
        </div>
        <p class="text-sm font-light text-gray-300">
          <span class="uppercase">Dashboard</span>
          <span class="text-sm block font-bold tracking-widest">
            FinoCrunch
          </span>
        </p>
      </a>
      <ul class="flex items-center space-x-4 text-sm font-semibold">
        <li>
          <a
            href="#"
            class="px-2 xl:px-4 py-2 text-gray-100 rounded-md hover:bg-gray-300 hover:text-gray-800"
            @click="logit">My Account</a
          >
        </li>
        <li class="relative">
          <a
            v-on:click="txnOpen = !txnOpen"
            class="px-2 xl:px-4 py-2 text-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-800 flex gap-2 items-center"
          >
            Data
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 stroke-current stroke-2 text-gray-100 hover:text-gray-800 transform duration-500 ease-in-out"
              :class="txnOpen ? 'rotate-90' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <ul
            class="absolute top-10 left-0 bg-white p-4 rounded-md shadow overflow-hidden w-64 transition duration-300"
            :class="{ hidden: txnOpen }"
          >
            <li>
              <a
                href="#"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Budget
              </a>
            </li>
            <li>
              <a
                href="#"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Payments
              </a>
            </li>
            <li>
              <a
                href="#"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Transactions
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="payments"
            class="px-2 xl:px-4 py-2 text-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-800"
            >Payments
          </a>
        </li>
        <li>
          <a
            href="#"
            class="px-2 xl:px-4 py-2 text-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-800"
            >Offers</a
          >
        </li>
      </ul>
      <ul class="flex space-x-2 xl:space-x-4 text-sm font-semibold">
        <li>
          <a href="#">
            <div class="p-2 rounded hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 stroke-current text-gray-300 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="p-2 rounded hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 stroke-current text-gray-300 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="p-2 rounded hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 stroke-current text-gray-300 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
          </a>
        </li>
      </ul>
      <ul class="flex items-center gap-6">
        <li>
          <a
            href="#"
            class="text-sm font-sans text-gray-200 font-semibold tracking-wider"
          >
            {{ name }}
          </a>
        </li>
        <li>
          <a href="#" @click="logout">
            <div class="p-2 rounded hover:bg-gray-200 transition duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 stroke-current text-gray-300 hover:text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="lg:hidden relative flex justify-between w-full">
      <a href="#" class="flex items-start gap-2 group">
        <div
          class="bg-blue-600 text-white p-3 rounded-md group-hover:bg-blue-800"
        >
          <img class="w-6" src="../../assets/logo-white.png" />
        </div>
        <p class="text-sm font-light text-gray-300">
          <span class="uppercase"> Dashboard </span>

          <span class="text-sm block font-bold tracking-widest">
            FinoCrunch
          </span>
        </p>
      </a>

      <button
        @click="menuOpen = !menuOpen"
        type="button"
        class="bg-gray-200 p-3 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition duration-300"
          :class="{ hidden: !menuOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition duration-300"
          :class="{ hidden: menuOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        class="absolute top-14 left-0 right-0 w-full bg-white rounded-md border"
        :class="{ hidden: menuOpen }"
      >
        <ul class="p-4">
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              My Account
            </a>
          </li>
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Transactions
            </a>
          </li>
          <li class="px-4 py-2 hover:bg-gray-200 hover:text-gray-800">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Cards
            </a>
          </li>
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Offers
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {supabase} from "@/supabase/supabase";

export default {
  name: "AdminNavbar",
  data() {
    return {
      user: this.$store.currentUser,
      txnOpen: true,
      menuOpen: true,
    };
  },
  props: {
    name: String,
  },
  methods: {
    logit(){
      console.log(this.$store.currentUser)
    },

    async logout(){
      try {
        const { error } = await supabase.auth.signOut();
        if (error){
          throw error
        }else{
          this.$router.push('/')
        }
      }
      catch(error){
        console.log(error.message)
      }


    }

  }
};
</script>

<style>
.bgColor {
  background-color: rgb(31, 41, 55);
}
</style>
