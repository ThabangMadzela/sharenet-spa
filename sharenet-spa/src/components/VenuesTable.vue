<template>
  <div class="section">
    <h1 class="text-3xl font-semibold text-gray-800 mb-4">Venues and Workshops</h1>
    
    
    <!-- Loop through the venues -->
    <div v-for="venue in venues" :key="venue.id" class="venue-card card">
      <div class="card-content">
        <span class="card-title">{{ venue.name }}</span>
        <p>{{ venue.location }}</p>

        <!-- Filter toggle for this venue -->
        <div class="filter-toggle">
          <label>
            <input
              type="checkbox"
              :checked="venue.showOnlyAvailable"
              @change="toggleFilter(venue)"
            />
            <span>Show only workshops with available seats</span>
          </label>
        </div>
        
        <!-- Workshop dates table -->
        <table class="striped border border-gray-400">
          <thead>
            <tr>
              <th>Date</th>
              <th>Seats Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through the workshop dates of the venue -->
            <tr v-for="date in getFilteredWorkshops(venue)" :key="date.id">
              <td>{{ date.date }}</td>
              <td>{{ date.seatsAvailable }}</td>
              <td>
                <!-- Only show 'Book' button if seats are available -->
                <button
                  v-if="date.seatsAvailable > 0"
                  class="px-4 py-2 border border-blue-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200"
                  @click="bookWorkshop(venue.id, date.id)"
                >
                  Book Now
                </button>
                <span v-else class="red-text">Sold Out</span>
              </td>
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
  name: 'VenuesPage',
  data() {
    return {
      venues: [], // Array to store venue data
    };
  },
  methods: {
    // Fetch venue data from the API
    async fetchVenues() {
      try {
        const response = await axios.get('https://nodeserver-jdlrw54s.b4a.run/venues');
        this.venues = response.data.map(venue => ({
          ...venue,
          showOnlyAvailable: false, // Default: show all workshops
        }));
      } catch (error) {
        console.error('Error fetching venue data:', error);
      }
    },

    // Get workshops based on the filter for a specific venue
    getFilteredWorkshops(venue) {
      // If showOnlyAvailable is true, filter the workshops to show only those with available seats
      if (venue.showOnlyAvailable) {
        return venue.workshops.filter(workshop => workshop.seatsAvailable > 0);
      }
      return venue.workshops; // Return all workshops if the filter is not active
    },

    // Toggle the filter for a specific venue
    toggleFilter(venue) {
      venue.showOnlyAvailable = !venue.showOnlyAvailable;
    },

    // Book a workshop date
    async bookWorkshop(venueId, workshopId) {
      try {
        const response = await axios.post('https://nodeserver-jdlrw54s.b4a.run/book', {
          venueId,
          workshopId,
        });

        if (response.data.success) {
          // Update the workshop's seat availability
          const venue = this.venues.find(v => v.id === venueId);
          const workshop = venue.workshops.find(w => w.id === workshopId);
          workshop.seatsAvailable -= 1; // Decrease available seats

          alert('Booking successful!');
        } else {
          alert('Booking failed. Try again later.');
        }
      } catch (error) {
        console.error('Error booking workshop:', error);
        alert('Booking failed. Try again later.');
      }
    },
  },
  mounted() {
    this.fetchVenues(); // Fetch venues data when the component mounts
  },
};
</script>


<style scoped>
/* Main Section */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Header */
.center-align {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

/* Venue Card */
.venue-card {
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.venue-card .card-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #2c3e50;
}

.venue-card .card-content {
  padding: 20px;
}

/* Filter Toggle */
.filter-toggle {
  margin-top: 15px;
  font-size: 1rem;
  color: #555;
}

.filter-toggle label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-toggle input {
  margin-right: 10px;
  accent-color: #3498db;
}

/* Table Styles */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: #fafafa;
}

table th, table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

table tr:hover {
  background-color: #f1f1f1;
}





.red-text {
  color: #e74c3c;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section {
    padding: 15px;
  }

  .venue-card .card-title {
    font-size: 1.4rem;
  }

  table th, table td {
    padding: 10px;
    font-size: 0.9rem;
  }

  button {
    padding: 8px 15px;
  }
}
</style>"                     in assest the stlyes i have global.css"body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
  }
  
  h1, h2, h3, h4 {
    color: #1565c0;
  }
  
  .container {
    margin-top: 50px;
  }
  
  footer {
    background-color: #1976d2;
  }
  
  .card {
    margin-bottom: 20px;
  }