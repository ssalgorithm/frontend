<template>
  <v-app-bar
      app
      color="deep-purple lighten-3"
      dense
      dark
    >
      <!-- <div class="d-flex align-center">
       <p>ssalgorithm</p>
      </div> -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title @click="route_home()">Ssalgorithm</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon @click="login()">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods:{
        route_home(){
        this.$router.push("/");
        },
        login(){
        console.log("login");
        this.$router.push("/user");
        }
    }

}
</script>

<style>

</style>