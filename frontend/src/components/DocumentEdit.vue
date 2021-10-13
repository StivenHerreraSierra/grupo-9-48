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
          v-model="documentName"
          hide-details
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-self-center">
        <v-btn depressed tile color="primary" v-on:click="updateDocument()"
          >Rename</v-btn
        >
        <v-btn depressed tile color="error" v-on:click="deleteDocument()"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    documentName: String,
  },
  methods: {
    deleteDocument() {
      this.$emit("deleteDocument", this.documentName);
    },
    updateDocument() {
      this.$emit("deleteDocument", "Test");
    },
  },
};
</script>

<style scoped>
</style>