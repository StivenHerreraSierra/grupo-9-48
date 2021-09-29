<template>
  <v-container fluid class="d-flex justify-space-around align-center">
    <v-col class="d-flex flex-column align-center" cols="3">
      <v-img
        id="userImage"
        src="https://picsum.photos/350/165?random"
        height="200"
        width="200"
        class="mb-3"
      ></v-img>
      <v-btn rounded small>
        <v-icon left> mdi-camera </v-icon>Change image</v-btn
      >
    </v-col>
    <v-col class="d-flex flex-column align-center" cols="7">
      <v-form>
        <v-text-field
          dense
          outlined
          color="black"
          background-color="white"
          readonly
          :value="username"
        ></v-text-field>
        <v-container fluid class="d-flex justify-space-between">
          <v-btn small color="primary">
            <v-icon left> mdi-content-save </v-icon>Save</v-btn
          >
          <v-btn small color="success">
            <v-icon left> mdi-pencil </v-icon>Edit</v-btn
          ></v-container
        >
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    username: String
  }
};
</script>

<style scope>
#userImage {
  border-radius: 50%;
}
</style>