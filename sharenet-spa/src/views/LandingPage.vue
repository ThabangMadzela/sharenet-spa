<template>
  <div class="p-4">
    
    <!-- Table Component -->
    <SpotPricesTable />
  
    <div class="flex justify-center gap-4 mt-6">
      <router-link to="/contact" class="bg-blue-500 text-white px-4 py-2 rounded">
        Contact Us
      </router-link>
      <router-link to="/venues" class="bg-blue-500 text-white px-4 py-2 rounded">
        Venues
      </router-link>
    </div>
  </div>
</template>

<script>
import SpotPricesTable from '../components/SpotPricesTable.vue';

export default {
  components: { SpotPricesTable },
};
</script>" 

<style scoped>
  h1 {
    margin-top: 0; /* Remove any margin from top */
    margin-left: 0; /* Ensure it stays on the left side */
  }
</style>