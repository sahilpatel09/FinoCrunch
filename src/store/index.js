import { createStore } from "vuex";

export default createStore({
  state: {
    addTransactionOpen: false,
    addCategoryOpen: false,
  },
  mutations: {
    toggleAddTransaction(state) {
      state.addTransactionOpen = !state.addTransactionOpen;
    },
    toggleAddCategory(state) {
      state.addCategoryOpen = !state.addCategoryOpen;
    },
  },
  actions: {},
  modules: {},
});
