<template>
  <div class="p-4">
    
    <VenuesTable />
    <div class="flex justify-center mt-6">
      <router-link to="/" class="bg-blue-500 text-white px-4 py-2 rounded">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
import VenuesTable from '../components/VenuesTable.vue';

export default {
  components: { VenuesTable },
};
</script>"

<style scoped>
  h1 {
    margin-top: 2; /* Remove any margin from top */
    margin-left: 2; /* Ensure it stays on the left side */
  }
</style>
