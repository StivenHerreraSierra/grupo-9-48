<template>
  <v-container fluid id="account">
    <Menu :content="menu_content"></Menu>
    <v-container>
      <h1>Settings</h1>
      <v-container fluid class="mb-5 rounded-3" id="settings-container">
        <h3 class="text-center">User</h3>
        <hr />
        <user-settings />
      </v-container>
      <v-container fluid class="mb-5 rounded-3" id="settings-container">
        <h3>Documents</h3>
        <document-edit />
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Menu from "../components/Menu.vue";
import DocumentEdit from "../components/DocumentEdit.vue";
import UserSettings from "../components/UserSettings.vue";
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
          image:
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          name: "User",
        },
        items: [
          {
            title: "Uploaded documents",
            icon: "mdi-file",
            path: "/user/admin",
          },
          {
            title: "Upload document",
            icon: "mdi-upload",
            path: "/user/admin",
          },
          {
            title: "Admin panel",
            icon: "mdi-view-dashboard-outline",
            path: "/user/admin",
          },
        ],
      },
    };
  },
};
</script>

<style scope>
#account {
  background-color: #343a40;
  height: 100%;
}
h1 {
  color: white;
}
#settings-container {
  background-color: dimgrey;
  border-radius: 10px;
}
</style>