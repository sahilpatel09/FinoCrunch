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
          class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
          @click="this.$store.commit('toggleAddCategory')"
          >+</a
        >
      </div>

      <div class="space-y-3" v-if="categories">

        <div class="bg-greyish p-6 rounded-xl mt-6" v-for="category in categories" :key="category.id">
          <div class="flex justify-between items-start">
            <div class="flex flex-col">
              <p class="text-xs text-gray-300 tracking-wide">
                {{ category.name }}
              </p>
              <h3 class="mt-1 text-lg text-blue-500 font-bold">$ {{ category.budget }}</h3>
              <span class="mt-4 text-xs text-gray-400"
                >Last Transaction 3 Hours ago</span
              >
            </div>
            <div class="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
              <img
                :src="category.category_icon_url"
                alt="icon"
                class="w-auto h-8 md:h-6 xl:h-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <!--Starting of Loader Animation-->
      <div v-else class="flex justify-center items-center h-full">
        <div class="w-24 h-24 border-l-2 border-gray-200 rounded-full animate-spin"></div>
      </div>
      <!-- End of Loader Animation-->
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
            class="px-4 py-2 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
            @click="this.$store.commit('toggleAddTransaction')"
            >+</a
          >
        </div>
        <ul class="overflow-x-auto">
          <li
            class="w-full py-3 flex justify-between text-sm text-gray-300 font-semibold bg-gray-800 rounded-b-md mb-2"
            v-for="record in records"
            :key="record.ledger_id"
          >
            <p class="px-4 text-gray-400">{{record.note}}</p>
            <p class="px-4 font-semibold">{{ theDate(record.created_at) }}</p>
            <p class="px-4 text-blue-600">Grocery</p>
            <p class="px-4 bg-gray-800">Card</p>
            <p class="px-4 text-gray-100">$ {{ record.amount}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {supabase} from "@/supabase/supabase";

export default {
  name: "TransactionsCol",
  data(){
    return {
      categories: null,
      records: null
    }
  }
,
  props: {

  },
  mounted() {
    this.fetchCategories();
    this.fetchRecords();

  }
  ,
  methods: {
    theDate(value){
      if (value) {
        const options = { //weekday: 'long',
          year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(value)
        date = date.toLocaleDateString("en-US", options)
        return date
      }
    },

    async fetchCategories(){
      try{
        const { data, error } = await supabase
            .from('category')
            .select()
        if(error){
          throw error;
        }else{
          this.categories = data;
        }
      }catch(error){
        console.log(error.message)
      }

    },

    async fetchRecords(){
      try{
        const { data, error } = await supabase
            .from('ledger')
            .select();
        if(error){
          throw error;
        }else{
          console.log(data)
          this.records = data;
        }
      }catch(error){
        console.log(error.message)
      }

    }


  }
};
</script>

<style scoped></style>
