<template>
<!--  <Spinner v-if="loading"/>-->
  <div class="relative antialiased bg-gray-800 in-down">
    <navbar name="this.$store.currentUser.name"/>
    <router-view />
  </div>
</template>
<script>
// import MainScreen from '../components/MainScreen.vue';
import navbar from "../components/Dashboard/AdminNavbar.vue";
//import Spinner from "@/components/Loader";
//import {supabase} from "@/supabase/supabase";
export default {
  name: "Home",
  data() {
    return{
      //loading: false,
      user: null,
    }
  },
  created() {
    // this.user = this.$store.currentUser
    // if(this.user){
    //   this.loading = false
    // }
  }

,
  components: {
    //Spinner,
    // sidebar,
    navbar,
  },
};
</script>
<style>


</style>