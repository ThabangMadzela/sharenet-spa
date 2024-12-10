<template>
  <div class="flex justify-center p-4">
  
    <!-- Card container for table with rounded edges and shadow -->
    <div class="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl" >
      <h1 class="text-3xl font-semibold text-gray-800 mb-4">Spot Prices</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full text-left border-collapse border border-gray-300 sm:table">
          <thead>
            <tr>
              <!-- First Row (shaded grey and bold) -->
              <th class="border border-gray-300 px-4 py-2 font-bold bg-gray-200">Full Name</th>
              <th class="border border-gray-300 px-4 py-2 font-bold bg-gray-200">Price</th>
              <th class="border border-gray-300 px-4 py-2 font-bold bg-gray-200">Move</th>
              <th class="border border-gray-300 px-4 py-2 font-bold bg-gray-200">Percentage Move</th>
              <th class="border border-gray-300 px-4 py-2 font-bold bg-gray-200">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(spot, index) in spotPrices" :key="index">
              <!-- First Column (shaded grey and bold) -->
              <td class="border border-gray-300 px-4 py-2 font-bold bg-gray-100">{{ spot.fullName || 'N/A' }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ spot.price !== undefined ? spot.price.toFixed(2) : 'N/A' }}</td>
              <td class="border border-gray-300 px-4 py-2" :class="{'text-red-500': spot.move < 0, 'text-green-500': spot.move >= 0}">
                {{ spot.move !== undefined ? spot.move.toFixed(2) : 'N/A' }}
              </td>
              <td class="border border-gray-300 px-4 py-2" :class="{'text-red-500': spot.pmove < 0, 'text-green-500': spot.pmove >= 0}">
                {{ spot.pmove !== undefined ? spot.pmove.toFixed(2) : 'N/A' }}
              </td>
              <td class="border border-gray-300 px-4 py-2">{{ spot.datetime || 'N/A' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      spotPrices: [],
      sortBy: '',
    };
  },
  computed: {
    sortedData() {
      if (!this.sortBy) return this.spotPrices;
      return [...this.spotPrices].sort((a, b) =>
        a[this.sortBy] > b[this.sortBy] ? 1 : -1
      );
    },
  },
  methods: {
  async fetchSpotPrices() {
  try {
    const response = await axios.get('https://api.sharenet.co.za/api/v1/px2/spots');
    if (response.data && response.data.spots) {
      this.spotPrices = response.data.spots
        .filter(spot => typeof spot.price === 'number' && typeof spot.move === 'number' && typeof spot.pmove === 'number')
        .slice(0, 5);
    } else {
      console.error('Unexpected response structure:', response.data);
    }
  } catch (error) {
    console.error('Failed to fetch spot prices:', error);
  }
},

    sortTable(column) {
      this.sortBy = column;
    },
  },
  mounted() {
    this.fetchSpotPrices();
  },
};
</script>


<style scoped>
  /* Ensures that the table remains scrollable and doesn't overflow the viewport for specific screen widths */
  @media (max-width: 816px) {
    .overflow-x-auto {
      -webkit-overflow-scrolling: touch;
    }
  }
  
  /* Make the table scrollable for smaller screens (below 414px) */
  @media (max-width: 414px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
    th, td {
      min-width: 150px; /* Ensure columns are still readable on very small screens */
    }
  }

  /* Center the table inside a card with shadow and rounded edges */
 

  /* Responsive Table Styling */
  .table-responsive {
    overflow-x: auto;
  }

  /* Styling the card with some space around */
  .card-container {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  /* Ensure padding around content inside card */
  .card-container .overflow-x-auto {
    padding: 20px;
  }
</style>
