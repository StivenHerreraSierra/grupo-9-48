<template>
  <v-app>
    <v-app-bar app color="#263238" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Learning partner"
          class="shrink mr-2"
          contain
          :src="require('./assets/image/icon.png')"
          transition="scale-transition"
          width="40"
        />
        <h1>Learning Partner</h1>
      </div>

      <v-spacer></v-spacer>

      <router-link  class="text-decoration-none white--text font-weight-black" to="/about" exact>
        <span class="mr-2">About us</span>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
