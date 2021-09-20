<template>
  <v-layout class="dark-background white--text">
    <Menu :content="menu_content"></Menu>

    <v-container fluid>
      <h1>Your documents</h1>
      <v-container class="mb-6" fluid>
        <v-layout align-center justify-space-between>
          <h2>Recents</h2>
          <hr class="separador" />
        </v-layout>

        <v-row>
          <v-col v-for="n in 5" :key="n">
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
          <v-col v-for="n in 24" :key="n" cols="3">
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

export default {
  components: {
    Menu,
    Card,
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

      document: {
        image: "https://www.dliflc.edu/wp-content/uploads/2018/11/book.jpg",
        title: "Document",
        last_open: "Today",
      },

      searched_title: "",
      marker: true,
    };
  },
  methods: {
    search() {
      console.log("Buscando:", this.searched_title);
    },
    clearField() {
      this.searched_title = "";
    },
  },
};
</script>

<style>
h1 {
  font-size: 40px !important;
  font-weight: normal;
}
h2 {
  font-size: 28px !important;
  font-weight: normal;
}
.container {
  margin: 0;
  width: 100% !important;
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