<template>
  <v-container
    class="mx-auto transition-swing contenedor rounded-lg flat pa-10 dark"
  >
    <h2 class="text-center white--text text-h3 mb-4">Sign in</h2>
    <v-form
      v-model="valid"
      lazy-validation
      class="d-flex flex-column justify-space-between"
      id="form"
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
        <v-btn bottom block id="btn" depressed color="primary"> Login </v-btn>
        <p class="white--text">Still not registered? <RouterLink to="/singup">Do it here!</RouterLink></p>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
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
    };
  },
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