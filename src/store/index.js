import { createStore } from "vuex";

export default createStore({
  state: {
    addTransactionOpen: false,
    addCategoryOpen: false,
    currentUser: "",
  },
  mutations: {
    toggleAddTransaction(state) {
      state.addTransactionOpen = !state.addTransactionOpen;
    },
    toggleAddCategory(state) {
      state.addCategoryOpen = !state.addCategoryOpen;
    },
    addUniversalUser(state, user){
      state.currentUser = user;

    },

  },
  actions: {},
  modules: {},
});
