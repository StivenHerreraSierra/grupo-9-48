<template>
  <background>
    <v-container id="contenedor-demo">
      <v-row dense class="d-flex justify-center align-self-center">
        <v-col cols="8">
          <v-text-field
            dense
            outlined
            color="white"
            dark
            background-color="rgb(48, 41, 41)"
            hide-details
            placeholder="Introduce URL"
            v-model="url"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-self-center">
          <v-btn
            depressed
            :disabled="checkURL()"
            v-on:click="saveURL()"
            :to="readerPath"
            tile
            block
            color="primary"
            >Upload document<v-icon right dark>
              mdi-cloud-upload
            </v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </background>
</template>

<script>
import Background from "../components/Background.vue";

export default {
  components: {
    Background,
  },
  data() {
    return {
      url: "",
      readerPath: "demo/reader",
    };
  },
  methods: {
    checkURL() {
      return this.url.length <= 0;
    },
    saveURL() {
      localStorage.setItem("demoURL", this.url);
    },
    checkPreviousURL() {
      console.log(localStorage.getItem("demoURL"));
    },
  },
  mounted() {
    let previousURL = localStorage.getItem("demoURL");
    if (previousURL != null) {
      localStorage.removeItem("demoURL");
    }
  },
};
</script>

<style scope>
#contenedor-demo {
  margin-top: 15%;
}
</style>