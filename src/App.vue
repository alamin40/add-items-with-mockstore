<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>My Vue Application</h1>

        <!-- AddList Component -->
        <AddList />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import AddList from './components/AddList.vue';
export default defineComponent({
  name: 'App',
  components: {
    AddList,
    },
});
</script>

<style scoped>
/* App-specific styles can go here */
</style>
