<template>
  <Background>
    <Formulario :text="value" v-on:submit="showReply"></Formulario>
  </Background>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Background from "../components/Background.vue";

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
      },
    };
  },
  methods: {
    showReply(value) {
      console.log(value);
    },
  },
};
</script>

<style>
</style>