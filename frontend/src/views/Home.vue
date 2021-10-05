<template>
  <Background>
    <v-container
      fluid
      class="d-flex flex-column align-center ma-15 pa-10"
      id="home-container"
    >
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-sheet
            class="d-flex justify-center align-center mb-10"
            color="black"
            dark
            elevation="1"
            height="100"
            width="300"
            ><h2>Welcome</h2></v-sheet
          ></v-col
        >
        <v-col cols="6" class="d-flex justify-start align-center">
          <v-btn block color="secondary" :to="loginPath">Sign in</v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-btn block color="secondary" :to="demoPath">Test it!</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </Background>
</template>

<script>
import Background from "../components/Background.vue";

export default {
  name: "Home",

  components: {
    Background,
  },
  data() {
    return {
      loginPath: "/login",
      demoPath: "/demo",
    };
  },  
  beforeMount() {
    if (sessionStorage.getItem("username") != null) {
    sessionStorage.clear();
    location.reload();
    }
  },
};
</script>

<style scope>
</style>
