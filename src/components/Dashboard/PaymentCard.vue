<template>
  <div class="bg-greyish p-6 rounded-xl">
    <div class="flex justify-between items-start">
      <div class="flex flex-col">
        <p class="text-xs md:text-md text-gray-300 tracking-wide">
          {{name}}
        </p>
        <h3 class="mt-1 text-lg text-blue-500 font-bold">$ {{amount}}</h3>
        <span class="mt-1 text-xs text-gray-400"
        >Last Transaction {{lastUsed}} Hours ago</span
        >
      </div>
      <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
        <img
            :src="imageUrl"
            alt="icon"
            class="w-auto h-8 md:h-6 xl:h-8 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentCard",
  props: {
    name: String,
    amount: Number,
    lastUsed: Number,
    imageUrl: String,

  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>