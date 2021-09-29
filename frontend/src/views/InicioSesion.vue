<template>
  <Background>
    <Formulario :text="value" v-on:submit="login"></Formulario>
  </Background>
</template>

<script>
import Formulario from '../components/Formulario.vue';
import Background from '../components/Background.vue';
import { getUser } from '../services/User.service';

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
    login(user) {
      console.log(user);
      getUser()
        .then((response) => {
          console.log(response.data);
         }
        );
    },
  }
};
</script>

<style>

</style>