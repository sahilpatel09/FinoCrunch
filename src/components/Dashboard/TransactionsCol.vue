<template>
  <div
    class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6 mt-4"
  >
    <div class="md:col-span-2 xl:col-span-2 bg-gray-900 p-6 rounded-2xl">
      <div class="flex justify-between items-center">
      <h2
          class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider pl-1"
      >
        Expenses By Category
      </h2>
      <a
          href="#"
          class="
                  px-4
                  py-2
                  text-lg
                  text-white
                  rounded
                  xuppercase
                  tracking-wider
                  font-semibold
                  bg-gray-800
                  text-gray-300
                "
          @click="this.$store.commit('toggleAddCategory')"
      >+</a
      >
      </div>


      <div class="space-y-3">
        <div class="bg-greyish p-6 rounded-xl mt-6">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">Foods & Beverages</p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-4 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="../../assets/svg/food.svg"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>


        <div class="bg-greyish p-6 rounded-xl">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">Foods & Beverages</p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-4 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="../../assets/svg/food.svg"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>

        <div class="bg-greyish p-6 rounded-xl">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">Foods & Beverages</p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-4 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="../../assets/svg/food.svg"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>

      </div>



<!--      <div class="flex flex-col space-y-6 md:h-full md:justify-between">-->
<!--        <div class="flex justify-between">-->
<!--          <span-->
<!--            class="text-xs text-gray-500 font-semibold uppercase tracking-wider"-->
<!--          >-->
<!--            <span class="text-white font-serif">Sahil Patel</span>-->
<!--            <br />-->
<!--            <br />-->
<!--            <span class="font-mono text-gray-300">Main Accounts</span>-->
<!--          </span>-->
<!--          <span-->
<!--            class="text-xs text-gray-400 font-semibold uppercase tracking-wider"-->
<!--          >-->
<!--            Available Funds-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="flex gap-2 md:gap-4 justify-between items-center">-->
<!--          <div class="flex flex-col space-y-4">-->
<!--            <h2 class="text-gray-400 font-bold tracking-widest leading-tight">-->
<!--              Checking Account-->
<!--            </h2>-->
<!--            <div class="flex items-center gap-4">-->
<!--              <p class="text-lg text-gray-500 tracking-wider">**** **** *112</p>-->
<!--              <svg-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--                class="w-4 h-4"-->
<!--                fill="none"-->
<!--                viewBox="0 0 24 24"-->
<!--                stroke="currentColor"-->
<!--              >-->
<!--                <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M17 8l4 4m0 0l-4 4m4-4H3"-->
<!--                />-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--          <h2-->
<!--            class="text-lg md:text-xl xl:text-3xl text-gray-500 font-black tracking-wider"-->
<!--          >-->
<!--            <span class="md:text-xl">$</span>-->
<!--            16,817.45-->
<!--          </h2>-->
<!--        </div>-->
<!--        <div class="flex gap-2 md:gap-4 justify-between items-center">-->
<!--          <div class="flex flex-col space-y-4">-->
<!--            <h2 class="text-gray-400 font-bold tracking-widest leading-tight">-->
<!--              Savings Account-->
<!--            </h2>-->
<!--            <div class="flex items-center gap-4">-->
<!--              <p class="text-lg text-gray-500 tracking-wider">**** **** *321</p>-->
<!--              <svg-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--                class="w-4 h-4"-->
<!--                fill="none"-->
<!--                viewBox="0 0 24 24"-->
<!--                stroke="currentColor"-->
<!--              >-->
<!--                <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M17 8l4 4m0 0l-4 4m4-4H3"-->
<!--                />-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--          <h2-->
<!--            class="text-lg md:text-xl xl:text-3xl text-gray-500 font-black tracking-wider"-->
<!--          >-->
<!--            <span class="md:text-xl">$</span>-->
<!--            92,817.45-->
<!--          </h2>-->
<!--        </div>-->

<!--        <div class="flex gap-2 md:gap-4">-->
<!--          <a-->
<!--            href="#"-->
<!--            class="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800"-->
<!--          >-->
<!--            Transfer Money-->
<!--          </a>-->
<!--          <a-->
<!--            href="#"-->
<!--            class="bg-gray-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider transition duration-500 font-semibold hover:bg-blue-600 hover:text-white"-->
<!--          >-->
<!--            Link Account-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div
      class="col-span-3 xl:col-span-3 rounded-2xl flex flex-col justify-between"
    >
      <div
          class="col-span-3 p-6 rounded-xl flex flex-col space-y-6 bg-gray-900"
      >
        <div class="flex justify-between items-center">
          <h2
              class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider"
          >
            Latest Transactions
          </h2>
          <a
              href="#"
              class="
                  px-4
                  py-2
                  text-lg
                  text-white
                  rounded
                  xuppercase
                  tracking-wider
                  font-semibold
                  bg-gray-800
                  text-gray-300
                "
              @click="this.$store.commit('toggleAddTransaction')"
          >+</a
          >
        </div>
        <ul class="overflow-x-auto">
          <li
              class="w-full py-3 flex justify-between text-sm text-gray-300 font-semibold bg-gray-800 rounded-b-md mb-2"
              v-for="index in 10"
              :key="index"
          >
            <p class="px-4 text-gray-400">Shopping</p>
            <p class="px-4 font-semibold">26th January, 2020</p>
            <p class="px-4 text-blue-600">Grocery</p>
            <p class="px-4 bg-gray-800">Card</p>
            <p class="px-4 text-gray-100">$45</p>
          </li>
        </ul>
      </div>

<!--      <div class="flex flex-col">-->
<!--        <p class="text-white text-4xl font-bold">Networth</p>-->

<!--        <div-->
<!--          v-for="index in 3"-->
<!--          :key="index"-->
<!--          class="flex gap-2 md:gap-4 justify-between items-center py-2 px-4 mt-2 rounded"-->
<!--        >-->
<!--          <div class="flex flex-col space-y-4">-->
<!--            <h2 class="text-white font-bold tracking-widest leading-tight">-->
<!--              All Bank Accounts-->
<!--            </h2>-->
<!--          </div>-->
<!--          <h2-->
<!--            class="text-lg md:text-xl xl:text-3xl text-white font-black tracking-wider"-->
<!--          >-->
<!--            <span class="md:text-xl">$</span>-->
<!--            92,817.45-->
<!--          </h2>-->
<!--        </div>-->

<!--        &lt;!&ndash;        <p&ndash;&gt;-->
<!--        &lt;!&ndash;            class="&ndash;&gt;-->
<!--        &lt;!&ndash;                  mt-1&ndash;&gt;-->
<!--        &lt;!&ndash;                  text-xs&ndash;&gt;-->
<!--        &lt;!&ndash;                  md:text-sm&ndash;&gt;-->
<!--        &lt;!&ndash;                  text-gray-50&ndash;&gt;-->
<!--        &lt;!&ndash;                  font-light&ndash;&gt;-->
<!--        &lt;!&ndash;                  leading-tight&ndash;&gt;-->
<!--        &lt;!&ndash;                  max-w-sm&ndash;&gt;-->
<!--        &lt;!&ndash;                "&ndash;&gt;-->
<!--        &lt;!&ndash;        >&ndash;&gt;-->
<!--        &lt;!&ndash;          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio&ndash;&gt;-->
<!--        &lt;!&ndash;          soluta saepe consequuntur facilis ab a. Molestiae ad saepe&ndash;&gt;-->
<!--        &lt;!&ndash;          assumenda praesentium rem dolore? Exercitationem, neque&ndash;&gt;-->
<!--        &lt;!&ndash;          obcaecati?&ndash;&gt;-->
<!--        &lt;!&ndash;        </p>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="flex justify-between items-end mt-2">-->
<!--        <a-->
<!--          href="#"-->
<!--          class="bg-blue-800 px-4 py-2 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"-->
<!--        >-->
<!--          Know More About Your Wealth-->
<!--        </a>-->
<!--        &lt;!&ndash;        <img&ndash;&gt;-->
<!--        &lt;!&ndash;            src="assets/calendar.png"&ndash;&gt;-->
<!--        &lt;!&ndash;            alt="calendar"&ndash;&gt;-->
<!--        &lt;!&ndash;            class="w-auto h-24 object-cover"&ndash;&gt;-->
<!--        &lt;!&ndash;        />&ndash;&gt;-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionsCol",
};
</script>

<style scoped></style>
