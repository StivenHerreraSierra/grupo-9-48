<template>
  <v-container fluid class="contenedores-lector pa-0 mt-0" id="lector">
    <Menu :content="menu_content" v-if="isUser"></Menu>
    <v-container class="contenedores-lector">
      <v-row class="contenedores-lector">
        <v-col cols="9">
          <iframe :src="documentURL" width="100%" height="100%"></iframe>
        </v-col>
        <v-col cols="3">
          <v-form
            class="my-2 d-flex align-center"
            @submit.prevent
            lazy-validation
            v-model="valid"
            ref="form"
          >
            <v-text-field
              dense
              outlined
              background-color="white"
              hide-details
              placeholder="Search word"
              color="black"
              v-model="input"
              required
            ></v-text-field>
            <v-btn
              height="40"
              class="pa-0"
              depressed
              color="primary"
              @click="search"
            >
              <v-icon center> mdi-magnify </v-icon></v-btn
            >
          </v-form>
          <v-progress-circular
            indeterminate
            color="white"
            v-if="loading"
            class="circular-loader"
          ></v-progress-circular>
          <h2 class="white--text text-capitalize">{{ word }}</h2>
          <v-img
            width="auto"
            height="auto"
            :src="wordImage"
            v-if="wordImage"
          ></v-img>
          <p class="my-2" id="contenedorBuscador">
            {{ meaning }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Menu from "../components/Menu.vue";
import { getDefinition } from "../services/Dictionary.service";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      loading: false,
      valid: true,
      menu_content: {
        user: {
          image:
            "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          name: "User",
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
      isUser: false,
      documentURL: "",
      input: "",
      word: "",
      wordImage: "",
      meaning: "",
    };
  },
  mounted() {
    this.isUser = sessionStorage.getItem("username") != null ? true : false;
    if (this.isUser) {
      this.documentURL = "http://www.africau.edu/images/default/sample.pdf";
    } else {
      this.documentURL = sessionStorage.getItem("demoURL");
    }
  },
  methods: {
    search() {
      if (!this.input) {
        console.error("Input is empty.");
        return;
      }

      this.word = this.input;
      this.loading = true;
      getDefinition(this.input)
        .then((response) => {
          const definitions = response.data.definitions;
          this.wordImage = definitions[0].image_url;
          this.meaning = definitions[0].definition;
        })
        .catch((err) => {
          this.meaning = err;
        })
        .finally(() => this.loading = false);
    },
  },
  beforeRouteEnter(to, from, next) {
    if (to.path.includes("user") && sessionStorage.getItem("username") == null)
      next("/404");
    else next();
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
#contenedorBuscador::first-letter {
  text-transform: capitalize;
}
.circular-loader {
  min-width: 100%;
}
</style>