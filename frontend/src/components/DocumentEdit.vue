<template>
  <div>
    <v-row dense class="d-flex justify-center align-self-center">
      <v-col cols="10">
        <v-text-field
          dense
          outlined
          color="white"
          dark
          background-color="rgb(48, 41, 41)"
          value="Documento 1"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-self-center">
        <v-btn depressed tile color="primary">Rename</v-btn>
        <v-btn depressed tile color="error">Delete</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
</style>