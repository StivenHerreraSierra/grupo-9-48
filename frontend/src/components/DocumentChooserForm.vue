<template>
  <v-card class="dark-background pa-4">
    <v-card-title class="white--text">
      <h2>Upload a new file</h2>
    </v-card-title>
    <v-form class="w-50">
      <v-text-field
        dark
        prepend-icon="mdi-file-outline"
        label="File name"
        clearable
        required
      ></v-text-field>
      <v-file-input
        dark
        accept=".pdf"
        label="Choose a file"
        required
      ></v-file-input>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :loading="loading" color="blue-grey" class="ma-2 white--text">
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scope>
.dark-background {
  background-color: #1c1f20 !important;
}
</style>