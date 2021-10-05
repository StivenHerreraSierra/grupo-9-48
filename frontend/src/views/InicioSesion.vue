<template>
  <Background>
    <Formulario :text="value" v-on:submit="login"></Formulario>
  </Background>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Background from "../components/Background.vue";
import { validateUser } from "../services/User.service";

export default {
  components: {
    Formulario,
    Background,
  },
  data() {
    return {
      value: {
        title: "Sign in",
        button_label: "Login",
        redirect_label: "Still not registered?",
        path: "/signup",
        link_text: "Do it here!",
        errorMessage: "",
      },
    };
  },
  methods: {
    login(user) {
      validateUser(user)
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