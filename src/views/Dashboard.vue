<template>
  <div class="relative antialiased bg-gray-100">
    <navbar />
    <router-view />
  </div>
</template>
<script>
// import MainScreen from '../components/MainScreen.vue';
import navbar from '../components/Dashboard/AdminNavbar.vue'
export default {
  name: 'Home',
  components: {
    // sidebar,
    navbar,
  }
}
</script>
