import { createStore } from 'vuex';

// Create a mock store with predefined items
export function createMockStore() {
  return createStore({
    state: {
      items: ['Mock Item 1', 'Mock Item 2', 'Mock Item 3'], // Predefined items
      singleDate: null, // Mock single date
      dates: null, // Mock date range
    },
    mutations: {
      ADD_ITEM(state, item: string) {
        state.items.push(item); // Add item to mock items array
      },
      RESET_ITEMS(state) {
        state.items = []; // Reset mock items
      },
      SET_SINGLE_DATE(state, date: string | null) {
        state.singleDate = date; // Set mock single date
      },
      RESET_SINGLE_DATE(state) {
        state.singleDate = null; // Reset mock single date
      },
      SET_DATE_RANGE(state, dates: [string | null, string | null] | null) {
        state.dates = dates; // Set mock date range
      },
      RESET_DATE_RANGE(state) {
        state.dates = null; // Reset mock date range
      },
    },
    actions: {
      addItem({ commit }, item: string) {
        commit('ADD_ITEM', item); // Trigger ADD_ITEM mutation
      },
      resetItems({ commit }) {
        commit('RESET_ITEMS'); // Trigger RESET_ITEMS mutation
      },
      setSingleDate({ commit }, date: string | null) {
        commit('SET_SINGLE_DATE', date); // Trigger SET_SINGLE_DATE mutation
      },
      resetSingleDate({ commit }) {
        commit('RESET_SINGLE_DATE'); // Trigger RESET_SINGLE_DATE mutation
      },
      setDateRange({ commit }, dates: [string | null, string | null] | null) {
        commit('SET_DATE_RANGE', dates); // Trigger SET_DATE_RANGE mutation
      },
      resetDateRange({ commit }) {
        commit('RESET_DATE_RANGE'); // Trigger RESET_DATE_RANGE mutation
      },
    },
  });
}
