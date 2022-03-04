<template>
    <div class="flex justify-between items-center">
      <h2
          class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider pl-1"
      >
        {{title}}
      </h2>
      <a
          href="#"
          class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
          @click="this.$store.commit('toggleAddCategory')"
      >+</a
      >
    </div>

    <div class="space-y-3">
      <div class="bg-greyish p-6 rounded-xl mt-6">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <p class="text-xs text-gray-300 tracking-wide">
              Foods & Beverages
            </p>
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
            <p class="text-xs text-gray-300 tracking-wide">
              Foods & Beverages
            </p>
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
            <p class="text-xs text-gray-300 tracking-wide">
              Foods & Beverages
            </p>
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
</template>

<script>
export default {
  name: "VerticalCards",
  data(){
    return {
      title: this.cardTitle
    }
  },
  props: {
    cardTitle: String
  }
}
</script>

<style scoped>

</style>