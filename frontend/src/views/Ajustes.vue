<template>
  <v-container fluid id="account">
    <Menu :content="menu_content"></Menu>
    <v-container>
      <h1>Settings</h1>
      <v-container fluid class="mb-5 rounded-3" id="settings-container">
        <h3 class="text-center">User</h3>
        <hr />
        <UserSettings v-on:usernameUpdated="checkUsername"></UserSettings>
      </v-container>
      <v-container fluid class="mb-5 rounded-3" id="settings-container">
        <h3>Documents</h3>
        <div v-for="document in documents" :key="document.title">
          <DocumentEdit :documentName="document.title"></DocumentEdit>
        </div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Menu from "../components/Menu.vue";
import DocumentEdit from "../components/DocumentEdit.vue";
import UserSettings from "../components/UserSettings.vue";
import { getUser } from "../services/User.service";

import { getAllDocuments, updateOwner } from "../services/Document.service";

export default {
  components: {
    Menu,
    UserSettings,
    DocumentEdit,
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
            title: "Admin panel",
            icon: "mdi-view-dashboard-outline",
            path: "/user/admin",
          },
        ],
      },
      username: "",
      documents: [],
    };
  },
  methods: {
    checkUsername() {
      const newUsername = sessionStorage.getItem("username");
      updateOwner(this.username, { owner: newUsername })
        .then((res) => (this.username = res.data.owner))
        .catch((err) => console.log(err));
    },
  },
  watch: {
    username: function () {
      getAllDocuments(this.username)
        .then((response) => (this.documents = response.data))
        .catch((empty) => (this.documents = empty.response.data));
    },
  },
  mounted() {
    const username = sessionStorage.getItem("username");
    this.menu_content.user.username = username;

    getUser(username)
      .then((response) => this.menu_content.user.picture = response.data.picture ? response.data.picture : "../assets/image/user.png")
      .catch((err) => console.error(err.message));

    this.username = username;
  },
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("username") == null) next("/404");
    else next();
  },
};
</script>

<style scope>
#account {
  background-color: #343a40;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
h1 {
  color: white;
}
#settings-container {
  background-color: dimgrey;
  border-radius: 10px;
}
</style>