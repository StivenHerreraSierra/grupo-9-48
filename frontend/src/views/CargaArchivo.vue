<template>
  <v-container fluid class="dark-background white--text">
    <Menu :content="menu_content"></Menu>
    <v-row class="justify-center">
      <v-col lg="6">
        <DocumentChooserForm
          v-on:addDocument="insertDocument"
        ></DocumentChooserForm>
      </v-col>
    </v-row>

    <Snackbar :info="info"></Snackbar>
  </v-container>
</template>

<script>
import DocumentChooserForm from "../components/DocumentChooserForm.vue";
import Menu from "../components/Menu.vue";
import Snackbar from "../components/Snackbar.vue";
import { insertDocument } from "../services/Document.service";
import { getUser } from '../services/User.service';

export default {
  components: {
    DocumentChooserForm,
    Menu,
    Snackbar,
  },
  data() {
    return {
      menu_content: {
        user: {
          picture: null,
          name: "User",
        },
        items: [
          {
            title: "Uploaded documents",
            icon: "mdi-file",
            path: "/user/admin",
          },
          {
            title: "Settings",
            icon: "mdi-cog-outline",
            path: "/user/settings",
          },
        ],
      },

      info: {
        snackbar: false,
        timeout: 2000,
        text: "",
      },
    };
  },
  methods: {
    insertDocument(document) {
      const username = sessionStorage.getItem("username");

      insertDocument(username, document)
        .then((response) => (this.info.text = response.data))
        .catch((err) => (this.info.text = err.response.data.message))
        .finally(() => (this.info.snackbar = true));
    },
  },
  created() {
    const username = sessionStorage.getItem("username");
    this.menu_content.user.username = username;

    getUser(username)
      .then((response) => {
        const picture = response.data.picture;
        this.menu_content.user.picture =
          picture == "picture" ? `/${username}/${picture}` : picture;
      })
      .catch((err) => console.error(err.message));

    this.username = username;
  },
};
</script>

<style scoped>
.dark-background {
  background-color: #1c1f20;
}
.container {
  height: 100%;
}
</style>