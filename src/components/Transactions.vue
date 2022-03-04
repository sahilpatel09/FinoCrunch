<template>
  <div class="p-4 md:p-12">
    <TransactionsCol/>
    <PopUp v-if="this.$store.state.addTransactionOpen" class="fade-in">
      <div class="flex justify-between items-center">
        <h2 class="text-gray-300 font-semibold">Add a Transaction</h2>
        <a href="#" class="
                  px-4
                  py-0.5
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
        >X</a>
      </div>

      <div class="flex flex-col space-y-3 text-gray-400">

        <div class="flex justify-evenly gap-2 mt-2">
          <button class="bg-indigo-900 px-4 py-2 rounded font-bold w-full" @click="setIncome" :class="{ buttonColor : txnDetails.type_income }">
            INCOME
          </button>

          <button class="bg-indigo-900 px-4 py-2 rounded font-bold w-full" @click="setExpense" :class="{ buttonColor : txnDetails.type_expense }">
            EXPENSE
          </button>

        </div>


        <label class="sr-only">Note</label>
        <input type="text" class="bg-greyish rounded p-2" placeholder="Note" v-model="txnDetails.note"/>

        <label class="sr-only">Date</label>
        <input type="date" class="bg-greyish rounded p-2" :placeholder="txnDetails.date" v-model="txnDetails.date"/>

        <label class="sr-only">Category</label>
        <select id="categories" class="bg-greyish rounded p-2" v-model="txnDetails.category">
          <option>Select Category</option>
          <option>Food</option>
          <option>Grocery</option>
          <option>Fuel</option>
        </select>

        <label class="sr-only">Payment Type</label>
        <select id="payment_type" class="bg-greyish rounded p-2" v-model="txnDetails.payment_type">
          <option>Select Payment Type</option>
          <option>Cash</option>
          <option>Card</option>
          <option>UPI</option>
          <option>PayPal</option>
        </select>

        <label class="sr-only">Note</label>
        <input type="number" class="bg-greyish rounded p-2" placeholder="Amount" v-model="txnDetails.amount"/>
        <a href="#" class="bg-indigo-900 py-2 rounded text-center">Add Transaction</a>

      </div>



    </PopUp>

<!--############################################################-->

    <PopUp v-if="this.$store.state.addCategoryOpen" class="fade-in">

      <div class="flex justify-between items-center">
        <h2 class="text-gray-300 font-semibold">Add a Category</h2>
        <a href="#" class="
                  px-4
                  py-0.5
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
        >X</a>
      </div>

      <div class="flex flex-col space-y-3 text-gray-400">

        <label class="sr-only">Category Name</label>
        <input type="text" class="bg-greyish rounded p-2" v-model="txnCategory.name"/>

        <div class="flex justify-between gap-4">
          <img :src="txnCategory.iconUrl" alt="" class="w-10">
          <label class="sr-only">Payment Type</label>
          <select id="payment_type" class="w-full bg-greyish rounded p-2" v-model="txnDetails.payment_type">
            <option>Select Payment Type</option>
            <option>Cash</option>
            <option>Card</option>
            <option>UPI</option>
            <option>PayPal</option>
          </select>
        </div>


        <a href="#" class="bg-indigo-900 py-2 rounded text-center">Add New Category</a>

      </div>



    </PopUp>
  </div>
</template>

<script>

import TransactionsCol from "@/components/Dashboard/TransactionsCol";
import PopUp from "@/components/Dashboard/PopUp";
export default {
  name: "Transactions",
  components: {PopUp, TransactionsCol},
  data(){
    return{
      txnDate: new Date().getDate(),
      txnDetails: {
        type: "income",
        type_income: false,
        type_expense: false,
        note: "Birthday",
        date: String(new Date().getFullYear() + "-" + (new Date().getDate() < 10 ? '0' : '') + new Date().getMonth() +"-" + (new Date().getDate() < 10 ? '0' : '') + new Date().getDate()) ,
        category: "Food",
        payment_type: "Cash",
        amount: 560,
      },
      txnCategory: {
        name: "Category Name",
        iconUrl: "https://cdn-icons.flaticon.com/png/512/1078/premium/1078403.png?token=exp=1646397723~hmac=e5c0f53fdb3817c1fa87a8078876ee94"
      }

    }
  },
  methods: {
    setIncome() {
      this.txnDetails.type = "income"
      this.txnDetails.type_income = true
      this.txnDetails.type_expense = false
    },
    setExpense() {
      this.txnDetails.type = "expense"
      this.txnDetails.type_income = false
      this.txnDetails.type_expense = true
    },
  },
  computed: {
    Today() {
      return String(new Date().getFullYear() + "-" +new Date().getMonth() +"-" +new Date().getDate());
    },
  },
};
</script>

<style scoped>
.buttonColor {
  background-color: #42b983;
  color: white;
}
.fade-in {
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>
