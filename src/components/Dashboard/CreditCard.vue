<template>
  <div class="">
    <div
      class="mt-2 max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden md:max-w-sm">
      <div class="md:flex">
        <div class="w-full p-4">
          <div class="flex justify-between items-center text-white">
            <span class="text-3xl font-bold"
              >12,290 <small class="text-sm font-light">USD</small></span>
            <i class="fa fa-chevron-circle-up fa-2x text-gray-300"></i>
          </div>
          <div class="flex justify-between items-center mt-5">
            <div class="flex flex-row">
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
            </div>
            <div class="flex flex-row">
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
            </div>
            <div class="flex flex-row">
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
              <img class="w-4 h-4" src="../../assets/dot.png" />
            </div>
            <div class="flex flex-row">
              <span class="text-white text-lg mr-1 font-bold">{{one}}</span>
              <span class="text-white text-lg mr-1 font-bold">{{two}}</span>
              <span class="text-white text-lg mr-1 font-bold">{{three}}</span>
              <span class="text-white text-lg mr-1 font-bold">{{four}}</span>
            </div>
          </div>
          <div class="mt-6 flex justify-between items-center text-white">
            <div class="flex flex-col">
              <span class="font-bold text-gray-300 text-sm">Family</span>
              <span class="font-bold">Oscar Hosam</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-300 text-sm">Expires</span>
              <span class="font-bold">01/21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  props: {
    lastDigits: String
  },
  data(){
    return {
      one: this.lastDigits[0],
      two: this.lastDigits[1],
      three: this.lastDigits[2],
      four: this.lastDigits[3],
    }
  }, created() {
    console.log(this.lastDigis)
  }
};
</script>

<style scoped></style>
