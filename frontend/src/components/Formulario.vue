<template>
  <v-container
    class="mx-auto transition-swing contenedor rounded-lg flat pa-10 dark"
  >
    <h2 class="text-center white--text text-h3 mb-4">{{ text.title }}</h2>
    <v-form
      v-model="valid"
      lazy-validation
      class="d-flex flex-column justify-space-between"
      id="form"
      @submit.prevent="submit"
    >
      <div>
        <v-text-field
          v-model="name"
          :rules="inputRules"
          label="Username"
          hint="At least 5 characters"
          required
          outlined
          clearable
          dark
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="inputRules"
          :type="show ? 'text' : 'password'"
          label="Password"
          hint="At least 5 characters"
          outlined
          @click:append="show = !show"
          required
          clearable
          dark
        ></v-text-field>
      </div>

      <div>
        <v-btn bottom block id="btn" depressed color="primary" type="submit"> {{ text.button_label }} </v-btn>
        <p class="white--text">
          {{ text.redirect_label }}
          <RouterLink :to="text.path">{{ text.link_text }}</RouterLink>
        </p>
      </div>
    </v-form>

    <Snackbar :info="snack_text"></Snackbar>
  </v-container>
</template>

<script>
import Snackbar from './Snackbar.vue'

export default {
  components: {
    Snackbar,
  },
  props: {
    text: Object,
  },
  data() {
    return {
      valid: false,
      name: "",
      password: "",
      show: false,
      inputRules: [
        (v) => !!v || "Field is required",
        (v) => v.length >= 5 || "Min 5 characters",
      ],
      snack_text: {
        snackbar: false,
        text: "",
        timeout: 2000,
      },
    };
  },
  methods: {
    submit() {
      this.valid = this.checkForm();

      if(!this.valid) return;

      const input = {
        name: this.name,
        password: this.password,
      }

      this.$emit("submit", input)
    },
    checkForm() {
      if(this.name && this.password && this.name.length >= 5 && this.password.length >= 5) {
        return true;
      }

      if(!this.name) this.snack_text.text = "Username is required.";
      else if(!this.password) this.snack_text.text = "Password is required.";
      else if(this.name.length < 5) this.snack_text.text = "The username must be at least 5 characters long.";
      else if(this.password.length < 5) this.snack_text.text = "The password must be at least 5 characters long.";

      this.snack_text.snackbar = true;
    }
  }
};
</script>

<style>
.contenedor {
  background-color: #212529;
  z-index: 2;
  width: 40%;
  height: 80vh;
}

#form {
  min-height: 80%;
}
</style>