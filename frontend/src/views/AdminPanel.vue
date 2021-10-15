<template>
  <v-layout class="dark-background white--text">
    <Menu :content="menu_content"></Menu>

    <v-container fluid class="main-container">
      <h1>Your documents</h1>
      <v-container class="mb-6" fluid>
        <v-layout align-center justify-space-between>
          <h2>Recents</h2>
          <hr class="separador" />
        </v-layout>

        <v-row>
          <v-col v-for="document in lastDocuments" :key="document.title">
            <Card :document="document"></Card>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid>
        <v-layout align-center justify-space-between>
          <h2>All</h2>
          <hr class="separador" />
        </v-layout>

        <v-row no-gutters justify="end">
          <v-col cols="4">
            <v-text-field
              v-model="searched_title"
              append-icon="mdi-send"
              filled
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Document title"
              type="text"
              @click:append="search"
              @click:clear="clearField"
              dark
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="document in documents" :key="document.title" cols="3">
            <Card :document="document"></Card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script>
import Menu from "../components/Menu.vue";
import Card from "../components/Card.vue";
import { getAllDocuments } from "../services/Document.service";
import { getDocumentsByTitle } from "../services/Document.service";
import { getLastDocuments } from "../services/Document.service";
import { getUser } from "../services/User.service";

export default {
  components: {
    Menu,
    Card,
  },
  data() {
    return {
      menu_content: {
        user: {
          picture: null,
          username: "User",
        },
        items: [
          {
            title: "Upload document",
            icon: "mdi-upload",
            path: "/documents/upload",
          },
          {
            title: "Settings",
            icon: "mdi-cog-outline",
            path: "/user/settings",
          },
        ],
      },

      documents: [],
      lastDocuments: [],

      searched_title: "",
      marker: true,
    };
  },
  methods: {
    search() {
      const username = this.menu_content.user.username;

      if (this.searched_title) {
        getDocumentsByTitle(username, this.searched_title)
          .then((response) => (this.documents = response.data))
          .catch((err) => console.error(err.message));
      } else {
        getAllDocuments(username)
          .then((response) => (this.documents = response.data))
          .catch((err) => console.log(err));
      }
    },
    clearField() {
      this.searched_title = "";
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

    getAllDocuments(username)
      .then((response) => (this.documents = response.data))
      .catch((err) => console.log(err));

    getLastDocuments(username)
      .then((response) => this.lastDocuments = response.data)
      .catch((err) => console.error(err.message));
  },
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("username") == null) next("/404");
    else next();
  },
};
</script>

<style scoped>
h1 {
  font-size: 40px !important;
  font-weight: normal;
}
h2 {
  font-size: 28px !important;
  font-weight: normal;
}
.main-container {
  margin: 0;
  min-height: calc(100vh - 40px);
}
.dark-background {
  background-color: #1c1f20;
}
.separador {
  width: 90%;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
}
</style>