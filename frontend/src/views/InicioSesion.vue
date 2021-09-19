<template>
  <Background>
    <Formulario :text="value" v-on:submit="showReply"></Formulario>
  </Background>
</template>

<script>
import Formulario from '../components/Formulario.vue';
import Background from '../components/Background.vue';

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