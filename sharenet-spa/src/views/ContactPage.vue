<template>
  <div class="p-8 max-w-4xl mx-auto">

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

    <!-- Contact Information -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Our Address</h3>
      <p class="text-gray-600">
        301, 3rd Floor Imperial Terraces<br>
        Tyger Waterfront<br>
        Carl Cronje Drive<br>
        Bellville, Cape Town<br>
        7530
      </p>
    </div>

    <div class="mb-8">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
      <p class="text-gray-600">(021) 700 4800<br>
      +27 21 700 4800 (International)</p>
    </div>

    <div class="mb-8">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Email</h3>
      <p class="text-gray-600">support@sharenet.co.za</p>
    </div>
    
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.982797838213!2d18.611653625717906!3d-33.87688530935641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sin!4v1733566418287!5m2!1sen!2sin"
      class="w-full h-96 border-2 rounded-lg mb-6"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    
    <div class="flex justify-center mt-6">
      <router-link to="/" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Back to Home
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

