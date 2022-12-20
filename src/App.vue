<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple lighten-3"
      dark
    >
      <div class="d-flex align-center">
       <p>ssalgorithm</p>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
