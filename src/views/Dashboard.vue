<template>
  <div v-if="loading" class="relative antialiased bg-gray-800">
    <navbar />
    <router-view />
  </div>

  <Spinner v-else/>
</template>
<script>
// import MainScreen from '../components/MainScreen.vue';
import navbar from "../components/Dashboard/AdminNavbar.vue";
import Spinner from "@/components/Spinner";
export default {
  name: "Home",
  data() {
    return{
      loading: false,
    }
  },
  components: {
    Spinner,
    // sidebar,
    navbar,
  },
};
</script>
