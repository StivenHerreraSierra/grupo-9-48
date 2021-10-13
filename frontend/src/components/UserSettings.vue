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
      <v-file-input
        accept="image/*"
        dense
        outlined
        color="black"
        background-color="white"
        v-if="!changeImageBtn.flag"
        v-model="newUserPicture"
        class="d-flex align-self-stretch"
      >
      </v-file-input>
      <v-row dense class="d-flex justify-center align-self-auto">
        <v-col cols="2" class="d-flex justify-center align-self-auto">
          <v-btn
            rounded
            block
            small
            v-on:click="changeImage()"
            :disabled="
              !usernameReadOnly ||
              (newUserPicture == null && !changeImageBtn.flag)
            "
            class="mr-2"
            :color="changeImageBtn.color"
          >
            <v-icon left> {{ changeImageBtn.icon }} </v-icon
            >{{ changeImageBtn.title }}</v-btn
          >
          <v-btn
            rounded
            block
            small
            v-on:click="cancelChangeImage()"
            v-if="!changeImageBtn.flag"
            color="error"
          >
            <v-icon left> mdi-close </v-icon>Cancel</v-btn
          >
        </v-col>
      </v-row>
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
            :disabled="!usernameReadOnly || !changeImageBtn.flag"
          >
            <v-icon left> mdi-pencil </v-icon>Edit</v-btn
          ></v-container
        >
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
import {
  getUser,
  updateUser,
  updateUserPicture,
} from "../services/User.service";

export default {
  data() {
    return {
      usernameReadOnly: true,
      userText: "",
      userPicture: "",
      newUserPicture: null,
      errorMessage: "",
      changeImageBtn: {
        flag: true,
        icon: "mdi-camera",
        title: "Change image",
        color: "normal",
      },
    };
  },
  methods: {
    saveUser() {
      if (this.userText.length < 5) {
        this.errorMessage = "Min 5 characters";
        setTimeout(() => (this.errorMessage = ""), 1500);
        return;
      }
      const actualUsername = sessionStorage.getItem("username");
      if (actualUsername != this.userText) {
        let userPicture = this.userPicture;
        if (userPicture.startsWith(`/${actualUsername}`))
          userPicture = userPicture.replace(actualUsername, this.userText);
        const user = {
          username: this.userText,
          picture: userPicture,
        };

        updateUser(actualUsername, user)
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
      this.changeImageBtn.flag = !this.changeImageBtn.flag;
      if (this.changeImageBtn.flag) {
        const actualUsername = sessionStorage.getItem("username");
        this.userPicture = "";
        const user = new FormData();
        user.append("picture", this.newUserPicture);
        updateUserPicture(actualUsername, user)
          .then(() => location.reload())
          .catch((err) => console.log(err));
      } else {
        this.changeImageBtn.icon = "mdi-content-save";
        this.changeImageBtn.title = "Save image";
        this.changeImageBtn.color = "primary";
      }
    },
    cancelChangeImage() {
      this.changeImageBtn.flag = !this.changeImageBtn.flag;
      if (this.changeImageBtn.flag) {
        this.changeImageBtn.icon = "mdi-camera";
        this.changeImageBtn.title = "Change image";
        this.changeImageBtn.color = "normal";
      } else {
        this.changeImageBtn.icon = "mdi-content-save";
        this.changeImageBtn.title = "Save image";
        this.changeImageBtn.color = "primary";
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