<template>
  <div class="p-4 md:p-12">
  <div class="grid grid-cols-3 gap-4 sm:px-5">
    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">

      <div class="flex justify-between items-center">
        <h2 class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider pl-1">
          Banks
        </h2>
        <a href="#"
            class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
            @click="this.$store.commit('toggleAddCategory')">+</a>
      </div>
      <div class="space-y-3">
        <div class="bg-greyish p-6 rounded-xl mt-6">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">
                ICICI Bank Canada
              </p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-1 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="https://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png"
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
                Scotia Bank
              </p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-1 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="https://play-lh.googleusercontent.com/GZXkzHxbRYGnehTg0ehjslPj4ummxV-oQklcE1Ba7hmq4zvBKfy2bR7zWEMOWqlcK6k"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>

        <div class="px-2">
          <div class="max-w-md mx-auto bg-blue-400 rounded-lg overflow-hidden md:max-w-sm">
            <div class="md:flex">
              <div class="w-full p-4">
                <div class="flex justify-between items-center text-white"> <span class="text-3xl font-bold">12,290 <small class="text-sm font-light">USD</small></span> <i class="fa fa-chevron-circle-up fa-2x text-gray-300"></i> </div>
                <div class="flex justify-between items-center mt-10">
                  <div class="flex flex-row"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> </div>
                  <div class="flex flex-row"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> </div>
                  <div class="flex flex-row"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"> </div>
                  <div class="flex flex-row"> <span class="text-white text-lg mr-1 font-bold">4</span> <span class="text-white text-lg mr-1 font-bold">8</span> <span class="text-white text-lg mr-1 font-bold">9</span> <span class="text-white text-lg mr-1 font-bold">0</span> </div>
                </div>
                <div class="mt-8 flex justify-between items-center text-white">
                  <div class="flex flex-col"> <span class="font-bold text-gray-300 text-sm">Family</span> <span class="font-bold">Oscar Hosam</span> </div>
                  <div class="flex flex-col"> <span class="font-bold text-gray-300 text-sm">Expires</span> <span class="font-bold">01/21</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-greyish p-6 rounded-xl">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">
                HSBC Bank
              </p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
              <span class="mt-1 text-xs text-gray-400"
              >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                  src="https://icons.veryicon.com/png/o/business/online-payment/hsbc.png"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">

      <div class="flex justify-between items-center">
        <h2 class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider pl-1">
          Cards
        </h2>
        <a href="#"
           class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
           @click="this.$store.commit('toggleAddCategory')">+</a>
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
                  src="/../assets/svg/food.svg"
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
                  src="/../assets/svg/food.svg"
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
                  src="/../assets/svg/food.svg"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">

      <div class="flex justify-between items-center">
        <h2 class="text-xs md:text-sm text-gray-400 font-bold tracking-wide md:tracking-wider pl-1">
          Online Payments
        </h2>
        <a href="#"
           class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
           @click="this.$store.commit('toggleAddCategory')">+</a>
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
                  src="/../assets/svg/food.svg"
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
                  src="/../assets/svg/food.svg"
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
                  src="../assets/svg/food.svg"
                  alt="icon"
                  class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Payments",
  components: {}
}
</script>

<style scoped>

</style>