<template>
  <v-app>
    <Nav-bar></Nav-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
  methods:{
    route_home(){
      this.$router.push("/");
    },
    login(){
      console.log("login");
      this.$router.push("/user");
    }
  }
};
</script>
