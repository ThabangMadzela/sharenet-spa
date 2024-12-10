import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ContactPage from '../views/ContactPage.vue';
import VenuesPage from '../views/VenuesPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/contact', component: ContactPage },
  { path: '/venues', component: VenuesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
