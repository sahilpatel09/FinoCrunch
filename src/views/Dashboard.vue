<template>
  <div v-if="loading" class="relative antialiased bg-gray-800 in-down">
    <navbar name="user"/>
    <router-view />
  </div>
  <Spinner v-else/>
</template>
<script>
// import MainScreen from '../components/MainScreen.vue';
import navbar from "../components/Dashboard/AdminNavbar.vue";
import Spinner from "@/components/Loader";
export default {
  name: "Home",
  data() {
    return{
      loading: true,
      user: this.$store.currentUser
    }
  },
  beforeCreate() {
    console.log(this.$store.currentUser)
    if(this.$store.currentUser){
      this.loading = true
    }
  },
  created() {


  },
  components: {
    Spinner,
    // sidebar,
    navbar,
  },
};
</script>
<style>


</style>