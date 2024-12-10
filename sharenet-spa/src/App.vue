<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="blue">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo center">Sharenet SPA</a>
        <!-- Navbar Links (Visible on large screens, hidden on mobile) -->
        <ul class="right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><router-link to="/venues">Venues</router-link></li>
        </ul>
        <!-- Mobile Hamburger Button (Hidden on large screens) -->
        <div class="mobile-menu-button hide-on-large">
          <button @click="toggleMenu">☰</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
}
</script>


<style scoped>
/* Default navbar styles */
nav {
  background-color: #42a5f5; /* Blue background */
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-wrapper .brand-logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.nav-wrapper .right {
  display: flex;
  justify-content: flex-end;
}

.nav-wrapper .right li {
  margin-left: 20px;
}

/* Mobile menu button, hidden by default on large screens */
.mobile-menu-button {
  display: none;
}

@media (max-width: 768px) {
  /* Show the hamburger button on mobile screens */
  .mobile-menu-button {
    display: block;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }

  /* Navbar links hide on mobile by default */
  .nav-wrapper .right {
    display: none;
    width: 100%;
    text-align: center;
    flex-direction: column;
  }

  /* Show the menu when clicked */
  .nav-wrapper .right.show {
    display: flex;
  }

  /* Adjust links for mobile */
  .nav-wrapper .right li {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
</style>
