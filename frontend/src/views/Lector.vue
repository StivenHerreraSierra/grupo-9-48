<template>
  <v-container fluid class="contenedores-lector pa-0 mt-0" id="lector">
    <Menu :content="menu_content" v-if="isUser"></Menu>
    <v-container class="contenedores-lector">
      <v-row class="contenedores-lector">
        <v-col cols="9">
          <iframe :src="documentURL" width="100%" height="100%"></iframe>
        </v-col>
        <v-col cols="3">
          <v-form class="my-2 d-flex align-center">
            <v-text-field
              dense
              outlined
              background-color="white"
              hide-details
              placeholder="Search word"
              color="black"
            ></v-text-field>
            <v-btn height="40" class="pa-0" depressed color="primary">
              <v-icon center> mdi-magnify </v-icon></v-btn
            >
          </v-form>
          <v-img
            width="auto"
            height="auto"
            src="https://picsum.photos/350/165?random"
          ></v-img>
          <p class="my-2" id="contenedorBuscador">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sed maxime natus non quibusdam alias ullam numquam
            placeat dolores aliquam error consectetur, doloribus, est sit
            deserunt earum autem repudiandae eius. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum veritatis quae harum nihil
            adipisci officiis. Voluptas quasi provident voluptate, facere cum
            commodi velit. Quasi similique soluta laudantium aliquam pariatur
            illo!
          </p>
        </v-col>
      </v-row>
    </v-container>
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
      isUser: this.$route.path.includes("user"),
      documentURL: "",
    };
  },
  mounted() {
    if (this.isUser) {
      this.documentURL = "http://www.africau.edu/images/default/sample.pdf";
    } else {
      this.documentURL = localStorage.getItem("demoURL");
      localStorage.removeItem("demoURL");
    }
  },
};
</script>


<style scope>
.contenedores-lector {
  height: 100%;
}
#lector {
  background-color: #343a40;
}
#contenedorBuscador {
  color: white;
  text-align: justify;
}
</style>