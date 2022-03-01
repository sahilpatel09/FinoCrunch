<template>
  <div
      class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            px-4
            xl:p-0
            gap-4
            xl:gap-6
          "
  >
    <div
        class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between"
    >
      <h2
          class="
                text-xs
                md:text-sm
                text-gray-700
                font-bold
                tracking-wide
                md:tracking-wider
              "
      >
        Expenses By Category
      </h2>
      <a href="#" class="text-xs text-gray-800 font-semibold uppercase"
      >More</a
      >
    </div>
    <div class="bg-white p-6 rounded-xl border border-gray-50">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <p class="text-xs text-gray-600 tracking-wide">
            Foods & Beverages
          </p>
          <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
          <span class="mt-4 text-xs text-gray-500"
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
    <div class="bg-white p-6 rounded-xl border border-gray-50">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <p class="text-xs text-gray-600 tracking-wide">Groceries</p>
          <h3 class="mt-1 text-lg text-green-500 font-bold">$ 8,918</h3>
          <span class="mt-4 text-xs text-gray-500"
          >Last Transaction 3 Days ago</span
          >
        </div>
        <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
          <img
              src="../../assets/svg/grocery.svg"
              alt="icon"
              class="w-auto h-8 md:h-6 xl:h-8 object-cover"
          />
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl border border-gray-50">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <p class="text-xs text-gray-600 tracking-wide">Public Transportation</p>
          <h3 class="mt-1 text-lg text-yellow-500 font-bold">$ 1,223</h3>
          <span class="mt-4 text-xs text-gray-600"
          >Last Transaction 4 Days ago</span
          >
        </div>
        <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
          <img
              src="../../assets/svg/bus.svg"
              alt="icon"
              class="w-auto h-8 md:h-6 xl:h-8 object-cover"
          />
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl border border-gray-50">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <p class="text-xs text-gray-600 tracking-wide">
            Trip & Holiday
          </p>
          <h3 class="mt-1 text-lg text-indigo-500 font-bold">$ 5,918</h3>
          <span class="mt-4 text-xs text-gray-500"
          >Last Transaction 1 Month ago</span
          >
        </div>
        <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
          <img
              src="../../assets/svg/holiday.svg"
              alt="icon"
              class="w-auto h-8 md:h-6 xl:h-8 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesCards"
}
</script>

<style scoped>

</style>