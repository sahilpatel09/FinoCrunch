<template>
  <div class="p-4 md:p-12">
    <h2 class="text-gray-100 sm:pl-1 pl-4 text-2xl font-sans">Transactions</h2>
    <TransactionsCol />

    <PopUp v-if="this.$store.state.addTransactionOpen" class="fade-in">
      <div class="flex justify-between items-center">
        <h2 class="text-gray-300 font-semibold">Add a Transaction</h2>
        <a
          href="#"
          class="px-4 py-0.5 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
          @click="this.$store.commit('toggleAddTransaction')"
          >X</a
        >
      </div>

      <div class="flex flex-col space-y-3 text-gray-400">
        <div class="flex justify-evenly gap-2 mt-2">
          <button
            class="bg-indigo-900 px-4 py-2 rounded font-bold w-full"
            @click="setIncome"
            :class="{ buttonColor: txnDetails.type_income }"
          >
            INCOME
          </button>

          <button
            class="bg-indigo-900 px-4 py-2 rounded font-bold w-full"
            @click="setExpense"
            :class="{ buttonColor: txnDetails.type_expense }"
          >
            EXPENSE
          </button>
        </div>

        <label class="sr-only">Note</label>
        <input
          type="text"
          class="bg-greyish rounded p-2"
          placeholder="Note"
          v-model="txnDetails.note"
        />

        <label class="sr-only">Date</label>
        <input
          type="date"
          class="bg-greyish rounded p-2"
          :placeholder="txnDetails.date"
          v-model="txnDetails.date"
        />

        <label class="sr-only">Category</label>
        <select
          id="categories"
          class="bg-greyish rounded p-2"
          v-model="txnDetails.category"
        >
          <option>Select Category</option>
          <option>Food</option>
          <option>Grocery</option>
          <option>Fuel</option>
        </select>

        <label class="sr-only">Payment Type</label>
        <select
          id="payment_type"
          class="bg-greyish rounded p-2"
          v-model="txnDetails.payment_type"
        >
          <option>Select Payment Type</option>
          <option>Cash</option>
          <option>Card</option>
          <option>UPI</option>
          <option>PayPal</option>
        </select>

        <label class="sr-only">Note</label>
        <input
          type="number"
          class="bg-greyish rounded p-2"
          placeholder="Amount"
          v-model="txnDetails.amount"
        />
        <a href="#" class="bg-indigo-900 py-2 rounded text-center"
          >Add Transaction</a
        >
      </div>
    </PopUp>

    <!--############################################################-->

    <!--    Category Popup -->

    <PopUp v-if="this.$store.state.addCategoryOpen" class="fade-in">
      <div class="flex justify-between items-center">
        <h2 class="text-gray-300 font-semibold">Add a Category</h2>
        <a
          href="#"
          class="px-4 py-0.5 text-lg text-white rounded xuppercase tracking-wider font-semibold bg-gray-800 text-gray-300"
          @click="this.$store.commit('toggleAddCategory')"
          >X</a
        >
      </div>

      <div class="flex flex-col space-y-3 text-gray-400">
        <label class="sr-only">Category Name</label>
        <input
          type="text"
          class="bg-greyish rounded p-2"
          v-model="txnCategory.categoryName"
        />

        <div class="flex justify-between gap-4">
          <img :src="txnCategory.iconUrl" alt="" class="w-10" />
          <label class="sr-only">Payment Type</label>

          <select
            id="payment_type"
            class="w-full bg-greyish rounded p-2"
            v-model="txnCategory.options"
          >
            <option>Select Payment Type</option>
            <option>Items</option>
            <option>Food</option>
            <option>Cloths</option>
            <option>Food</option>
          </select>
        </div>

        <a @click="insertCategory" class="bg-indigo-900 py-2 rounded text-center"
          >Add New Category</a
        >
      </div>
    </PopUp>

  </div>
</template>

<script>
import {supabase} from "@/supabase/supabase";
import TransactionsCol from "@/components/Dashboard/TransactionsCol";
import PopUp from "@/components/Dashboard/PopUp";

export default {
  name: "Transactions",
  components: { PopUp, TransactionsCol },
  data() {
    return {
      txnDate: new Date().getDate(),
      txnDetails: {
        type: "income",
        type_income: false,
        type_expense: false,
        note: "Birthday",
        date: String(
          new Date().getFullYear() +
            "-" +
            (new Date().getDate() < 10 ? "0" : "") +
            new Date().getMonth() +
            "-" +
            (new Date().getDate() < 10 ? "0" : "") +
            new Date().getDate()
        ),
        category: "Food",
        payment_type: "Cash",
        amount: 560,
      },
      txnCategory: {
        name: "Category Name",
        iconUrl:
          "data:image/jpeg;base64,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",
      },
    };
  },
  mounted(){

  },
  methods: {
    setIncome() {
      this.txnDetails.type = "income";
      this.txnDetails.type_income = true;
      this.txnDetails.type_expense = false;
    },
    setExpense() {
      this.txnDetails.type = "expense";
      this.txnDetails.type_income = false;
      this.txnDetails.type_expense = true;
    },
    async insertCategory(){

      try{
        const { data, error } = await supabase
            .from('category')
            .insert([
              { name: 'The Shire', category_icon_url: "554", budget: 450, user_id: this.$store.currentUser.id }
            ])
        if(error){
          throw error;
        }else{
          console.log(data);
        }

      }catch(error){
        console.log(error.message)
      }

    },

  },
  computed: {
    Today() {
      return String(
        new Date().getFullYear() +
          "-" +
          new Date().getMonth() +
          "-" +
          new Date().getDate()
      );
    },
  },
};
</script>

<style scoped>
.buttonColor {
  background-color: #42b983;
  color: white;
}
</style>
