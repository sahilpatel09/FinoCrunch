<template>
  <div
    class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6"
  >
    <div class="md:col-span-2 xl:col-span-3 bg-gray-900 p-6 rounded-2xl">
      <div class="flex flex-col space-y-6 md:h-full md:justify-between">
        <div class="flex justify-between">
          <span
            class="text-xs text-gray-500 font-semibold uppercase tracking-wider"
          >
            <span class="text-white font-serif">Sahil Patel</span>
            <br />
            <br />
            <span class="font-mono text-gray-300">Main Accounts</span>
          </span>
          <span
            class="text-xs text-gray-400 font-semibold uppercase tracking-wider"
          >
            Available Funds
          </span>
        </div>
        <div class="flex gap-2 md:gap-4 justify-between items-center">
          <div class="flex flex-col space-y-4">
            <h2 class="text-gray-400 font-bold tracking-widest leading-tight">
              Checking Account
            </h2>
            <div class="flex items-center gap-4">
              <p class="text-lg text-gray-500 tracking-wider">**** **** *112</p>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
          <h2
            class="text-lg md:text-xl xl:text-3xl text-gray-500 font-black tracking-wider"
          >
            <span class="md:text-xl">$</span>
            16,817.45
          </h2>
        </div>
        <div class="flex gap-2 md:gap-4 justify-between items-center">
          <div class="flex flex-col space-y-4">
            <h2 class="text-gray-400 font-bold tracking-widest leading-tight">
              Savings Account
            </h2>
            <div class="flex items-center gap-4">
              <p class="text-lg text-gray-500 tracking-wider">**** **** *321</p>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
          <h2
            class="text-lg md:text-xl xl:text-3xl text-gray-500 font-black tracking-wider"
          >
            <span class="md:text-xl">$</span>
            92,817.45
          </h2>
        </div>

        <div class="flex gap-2 md:gap-4">
          <a
            href="#"
            class="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800"
          >
            Transfer Money
          </a>
          <a
            href="#"
            class="bg-gray-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider transition duration-500 font-semibold hover:bg-blue-600 hover:text-white"
          >
            Link Account
          </a>
        </div>
      </div>
    </div>

    <div
      class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between"
    >
      <div class="flex flex-col">
        <p class="text-white text-4xl font-bold">Networth</p>

        <div
          v-for="index in 3"
          :key="index"
          class="flex gap-2 md:gap-4 justify-between items-center py-2 px-4 mt-2 rounded"
        >
          <div class="flex flex-col space-y-4">
            <h2 class="text-white font-bold tracking-widest leading-tight">
              All Bank Accounts
            </h2>
          </div>
          <h2
            class="text-lg md:text-xl xl:text-3xl text-white font-black tracking-wider"
          >
            <span class="md:text-xl">$</span>
            92,817.45
          </h2>
        </div>

        <!--        <p-->
        <!--            class="-->
        <!--                  mt-1-->
        <!--                  text-xs-->
        <!--                  md:text-sm-->
        <!--                  text-gray-50-->
        <!--                  font-light-->
        <!--                  leading-tight-->
        <!--                  max-w-sm-->
        <!--                "-->
        <!--        >-->
        <!--          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio-->
        <!--          soluta saepe consequuntur facilis ab a. Molestiae ad saepe-->
        <!--          assumenda praesentium rem dolore? Exercitationem, neque-->
        <!--          obcaecati?-->
        <!--        </p>-->
      </div>
      <div class="flex justify-between items-end mt-2">
        <a
          href="#"
          class="bg-blue-800 px-4 py-2 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
        >
          Know More About Your Wealth
        </a>
        <!--        <img-->
        <!--            src="assets/calendar.png"-->
        <!--            alt="calendar"-->
        <!--            class="w-auto h-24 object-cover"-->
        <!--        />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionsCol",
};
</script>

<style scoped></style>
