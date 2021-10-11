<template>
  <v-container fluid class="d-flex justify-space-around align-center">
    <v-col class="d-flex flex-column align-center" cols="3">
      <v-img
        id="userImage"
        :src="userPicture"
        height="200"
        width="200"
        class="mb-3"
      ></v-img>
      <v-text-field
        dense
        outlined
        color="black"
        background-color="white"
        v-if="!changeImgeBtn.flag"
        v-model="userPicture"
      >
      </v-text-field>
      <v-btn
        rounded
        small
        v-on:click="changeImage()"
        :disabled="!usernameReadOnly"
      >
        <v-icon left> {{ changeImgeBtn.icon }} </v-icon
        >{{ changeImgeBtn.title }}</v-btn
      >
    </v-col>
    <v-col class="d-flex flex-column align-center" cols="7">
      <v-form>
        <v-text-field
          dense
          outlined
          color="black"
          background-color="white"
          :readonly="usernameReadOnly"
          v-model="userText"
          :error-messages="errorMessage"
        ></v-text-field>
        <v-container fluid class="d-flex justify-space-between">
          <v-btn
            small
            color="primary"
            :disabled="usernameReadOnly"
            v-on:click="saveUser()"
          >
            <v-icon left> mdi-content-save </v-icon>Save</v-btn
          >
          <v-btn
            small
            color="success"
            v-on:click="usernameReadOnly = !usernameReadOnly"
            :disabled="!usernameReadOnly || !changeImgeBtn.flag"
          >
            <v-icon left> mdi-pencil </v-icon>Edit</v-btn
          ></v-container
        >
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
import { getUser, updateUser } from "../services/User.service";

export default {
  data() {
    return {
      usernameReadOnly: true,
      userText: "",
      userPicture: "",
      errorMessage: "",
      changeImgeBtn: {
        flag: true,
        icon: "mdi-camera",
        title: "Change image",
      },
    };
  },
  methods: {
    saveUser() {
      if (this.userText.length < 1) {
        this.errorMessage = "Invalid username";
        setTimeout(() => (this.errorMessage = ""), 1500);
        return;
      }
      const actualUsername = sessionStorage.getItem("username");
      if (actualUsername != this.userText) {
        updateUser(actualUsername, { username: this.userText })
          .then((response) => {
            sessionStorage.setItem("username", response.data.username);
            this.usernameReadOnly = !this.usernameReadOnly;
            this.$emit("usernameUpdated");
          })
          .catch((err) => (this.errorMessage = err.response.data.message));
        setTimeout(() => (this.errorMessage = ""), 1500);
      } else this.usernameReadOnly = !this.usernameReadOnly;
    },
    changeImage() {
      this.changeImgeBtn.flag = !this.changeImgeBtn.flag;
      if (this.changeImgeBtn.flag) {
        const actualUsername = sessionStorage.getItem("username");
        updateUser(actualUsername, { picture: this.userPicture });
        this.changeImgeBtn.icon = "mdi-camera";
        this.changeImgeBtn.title = "Change image";
      } else {
        this.changeImgeBtn.icon = "mdi-content-save";
        this.changeImgeBtn.title = "Save image";
      }
    },
  },
  mounted() {
    getUser(sessionStorage.getItem("username"))
      .then((response) => {
        this.userText = response.data.username;
        this.userPicture = response.data.picture;
      })
      .catch((err) => console.error(err.response.data.message));
  },
};
</script>

<style scope>
#userImage {
  border-radius: 50%;
}
</style>