import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Default Vuex store
import vuetify from './plugins/vuetify';
import { createMockStore } from '../tests/mockStore';

const app = createApp(App);

if (import.meta.env.VITE_USE_MOCK_STORE === 'true') {
  const mockStore = createMockStore(); // Use mock store with predefined items
  app.use(mockStore);
} else {
  app.use(store); // Use the actual Vuex store
}

app.use(vuetify).mount('#app');
