<template>
  <v-container>
    <!-- Header -->
    <h1>Simple List with Add Feature</h1>

    <!-- Add List Section -->
    <v-container class="mb-4">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="newItem"
            label="Enter Item"
            placeholder="Type something..."
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn color="primary" @click="addItem">Add Item</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h4>List of Items:</h4>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title data-testid="add-list-item-title">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- Single Date Picker Section -->
    <v-container class="mb-4">
      <v-row>
        <v-col cols="12" sm="6">
          <v-date-picker
            :model-value="singleDate"
            @update:model-value="setSingleDate"
            label="Select a Date"
            id="single-date-picker"
            :day-labels="{ '15': '15' }"
            data-testid="single-date-picker"
          ></v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
          <h4>Selected Single Date:</h4>
          <p data-testid="selected-date-text">{{ singleDate || 'No date selected' }}</p>
          <v-btn color="blue" @click="resetSingleDate" data-testid="reset-date-btn">Reset Date</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Date Range Picker Section -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-date-picker
            :model-value="dates"
            @update:model-value="setDateRange"
            multiple="range"
            label="Select Date Range"
            data-testid="date-range-picker"
            :day-labels="{ '11': '11', '20': '20' }"
          >
          </v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
          <h4>Selected Range Dates:</h4>
          <p>
            Start: <span data-testid="selected-start-date">{{ startDateFormatted }}</span>, 
            End: <span data-testid="selected-end-date">{{ endDateFormatted }}</span>
          </p>
          <v-btn color="error" @click="resetDateRange" data-testid="reset-range-btn">Reset Range</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();

// Access Vuex state
const items = computed(() => store.state.items);
const singleDate = computed(() => store.state.singleDate);
const dates = computed(() => store.state.dates);

// Dispatch actions to update Vuex state
const newItem = ref<string>('');
const addItem = () => {
  if (newItem.value.trim()) {
    store.dispatch('addItem', newItem.value);
    newItem.value = ''; // Clear the input after adding
  }
};

const resetItems = () => store.dispatch('resetItems');
const setSingleDate = (date: string | null) => store.dispatch('setSingleDate', date);
const resetSingleDate = () => store.dispatch('resetSingleDate');
const setDateRange = (dates: [string | null, string | null] | null) =>
  store.dispatch('setDateRange', dates);
const resetDateRange = () => store.dispatch('resetDateRange');

// Computed properties for formatted dates
const startDateFormatted = computed(() => {
  if (!dates.value || !dates.value[0]) return 'No Start Date';
  return new Date(dates.value[0]).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

const endDateFormatted = computed(() => {
  if (!dates.value || dates.value.length === 0) {
    return 'No End Date'; // Handle empty range
  }

  // Extract the end date (last date in the array) if it exists
  const endDate = dates.value.length > 1 ? dates.value[dates.value.length - 1] : null;

  // Format the end date for display
  const formatDate = (date: string | null) => {
    return date
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'No End Date';
  };

  return formatDate(endDate); // Return only the formatted end date
});
</script>






<style scoped>
/* Optional custom styles */
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 2rem;
}
</style>
