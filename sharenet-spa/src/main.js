import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import router from './router';
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS
import './index.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)      // Use the router
  .use(vuetify)     // Use Vuetify
  .mount('#app'); 