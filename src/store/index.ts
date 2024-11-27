import { createStore } from 'vuex';

export default createStore({
  state: {
    items: [] as string[], // List of items
    singleDate: null as string | null, // Single date
    dates: null as [string | null, string | null] | null, // Date range
  },
  mutations: {
    ADD_ITEM(state, item: string) {
      state.items.push(item);
    },
    RESET_ITEMS(state) {
      state.items = [];
    },
    SET_SINGLE_DATE(state, date: string | null) {
      state.singleDate = date;
    },
    RESET_SINGLE_DATE(state) {
      state.singleDate = null;
    },
    SET_DATE_RANGE(state, dates: [string | null, string | null] | null) {
      state.dates = dates;
    },
    RESET_DATE_RANGE(state) {
      state.dates = null;
    },
  },
  actions: {
    addItem({ commit }, item: string) {
      commit('ADD_ITEM', item);
    },
    resetItems({ commit }) {
      commit('RESET_ITEMS');
    },
    setSingleDate({ commit }, date: string | null) {
      commit('SET_SINGLE_DATE', date);
    },
    resetSingleDate({ commit }) {
      commit('RESET_SINGLE_DATE');
    },
    setDateRange({ commit }, dates: [string | null, string | null] | null) {
      commit('SET_DATE_RANGE', dates);
    },
    resetDateRange({ commit }) {
      commit('RESET_DATE_RANGE');
    },
  },
});
