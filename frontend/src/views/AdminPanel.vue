<template>
  <v-container>
    <Menu :content="menu_content"></Menu>
    <v-container><h1>Panel Admin</h1></v-container>
  </v-container>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  components: {
    Menu,
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
            path: "/user/settings",
          },
          {
            title: "Upload document",
            icon: "mdi-upload",
            path: "/user/settings",
          },
          {
            title: "Settings",
            icon: "mdi-cog-outline",
            path: "/user/settings",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>