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
        v-model="title"
        :rules="rules"
      ></v-text-field>
      <v-file-input
        dark
        accept=".pdf"
        label="Choose a file"
        v-model="file"
        required
      ></v-file-input>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :loading="loading" color="blue-grey" class="ma-2 white--text" @click="send">
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </v-card-actions>

    <Snackbar :info="snackData"></Snackbar>
  </v-card>
</template>

<script>
import Snackbar from "../components/Snackbar.vue";

export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      title: "",
      file: null,
      loading: false,
      snackData: {
        snackbar: false,
        text: "",
        timeout: 2000,
      },
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    };
  },
  methods:{
    send() {
      if(this.checkInputs()) {
        const document = new FormData();
        document.append("title", this.title);
        document.append("file", this.file);
        document.append("date", new Date().toISOString());

        this.$emit("addDocument", document);
      }
    },

    checkInputs() {
      if(!this.file || !this.title || this.title.length < 3) {
        this.snackData.text = "Please fill all fields.";
        this.snackData.snackbar = true;

        return false;
      }

      return true;
    }
  }
};
</script>

<style scope>
.dark-background {
  background-color: #1c1f20 !important;
}
</style>