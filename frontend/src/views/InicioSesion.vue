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
        title: "Sign in",
        button_label: "Login",
        redirect_label: "Still not registered?",
        path: "/signup",
        link_text: "Do it here!",
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