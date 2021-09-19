<template>
  <Formulario :text="value" v-on:submit="showReply"></Formulario>
</template>

<script>
import Formulario from '../components/Formulario.vue'

export default {
  components: {
    Formulario,
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
    }
  },
  methods:{
    showReply(value) {
      console.log(value);
    },
  }
};
</script>

<style>

</style>