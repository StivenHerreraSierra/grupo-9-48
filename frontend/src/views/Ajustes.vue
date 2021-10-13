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
          <DocumentEdit
            :documentName="document.title"
            v-on:deleteDocument="deleteDocument"
            v-on:updateDocument="updateDocument"
            :updateDocumentName="updateDocumentList"
          ></DocumentEdit>
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

import {
  getAllDocuments,
  updateDocumentsInfo,
  updateOwner,
} from "../services/Document.service";

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
      updateDocumentList: false,
    };
  },
  methods: {
    checkUsername() {
      const newUsername = sessionStorage.getItem("username");

      this.documents = this.documents.map((document) => {
        let fileName = document.file.substring(this.username.length + 1);
        document.file = `/${newUsername}${fileName}`;
        return document;
      });

      const newOwnerData = {
        owner: newUsername,
        documents: this.documents,
      };

      updateOwner(this.username, newOwnerData)
        .then((res) => (this.username = res.data.owner))
        .catch((err) => console.log(err));
    },
    deleteDocument(documentName) {
      const confirm = window.confirm(
        "Are you sure that you want to delete this document?"
      );
      if (confirm) {
        const index = this.documents.findIndex((x) => x.title == documentName);
        const fileDeleted = this.documents[index].file;
        this.documents = this.documents.filter((x) => x.title != documentName);
        this.sendDocumentInfo(fileDeleted);
      }
    },
    updateDocument(documentName, newDocumentName) {
      let index = this.documents.findIndex(
        (document) => document.title == newDocumentName
      );
      if (index != -1)
        window.alert(`Title ${newDocumentName} is already in use`);
      else {
        index = this.documents.findIndex(
          (document) => document.title == documentName
        );
        this.documents[index].title = newDocumentName;
        this.sendDocumentInfo();
      }
      this.updateDocumentList = !this.updateDocumentList;
    },
    sendDocumentInfo(fileDeleted = "") {
      const documentsInfo = {
        documents: this.documents,
        fileDeleted: fileDeleted,
      };
      updateDocumentsInfo(this.username, documentsInfo);
    },
  },
  watch: {
    username: function () {
      getAllDocuments(this.username)
        .then((response) => (this.documents = response.data))
        .catch((empty) => (this.documents = empty.response.data));
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
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("username") == null) next("/404");
    else next();
  },
};
</script>

<style scoped>
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