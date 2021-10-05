<template>
  <Background>
    <Formulario :text="value" v-on:submit="createUser"></Formulario>
  </Background>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Background from "../components/Background.vue";

import { insertUser } from "../services/User.service";

export default {
  components: {
    Formulario,
    Background,
  },
  data() {
    return {
      value: {
        title: "Sign up",
        button_label: "Register",
        redirect_label: "Do you already have an account?",
        path: "/login",
        link_text: "Sign in here!",
        errorMessage: "",
      },
    };
  },
  methods: {
    createUser(user) {
      insertUser(user)
        .then(() => {
          sessionStorage.setItem("username", user.username);
          this.$router.push("/user/admin");
        })
        .catch((err) => (this.value.errorMessage = err.response.data.message));
    },
  },
  mounted() {
    if (sessionStorage.getItem("username") != null) this.$router.go(1);
  },
};
</script>

<style>
</style>