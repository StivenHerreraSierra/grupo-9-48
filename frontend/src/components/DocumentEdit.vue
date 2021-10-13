<template>
  <div>
    <v-row dense class="d-flex justify-center align-self-center">
      <v-col cols="10">
        <v-text-field
          dense
          outlined
          color="white"
          dark
          background-color="rgb(48, 41, 41)"
          v-model="documentTxtField"
          hide-details
          :readonly="!editBtn.flag"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-self-center">
        <v-btn
          depressed
          :block="editBtn.flag"
          tile
          :color="editBtn.color"
          v-on:click="updateDocument()"
          >{{ editBtn.title }}</v-btn
        >
        <v-btn
          depressed
          tile
          color="error"
          v-on:click="deleteDocument()"
          v-if="!editBtn.flag"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    documentName: String,
    updateDocumentName: Boolean,
  },
  data() {
    return {
      editBtn: {
        flag: false,
        title: "Rename",
        color: "primary",
      },
      documentTxtField: this.documentName,
    };
  },
  methods: {
    deleteDocument() {
      this.$emit("deleteDocument", this.documentTxtField);
    },
    updateDocument() {
      this.editBtn.flag = !this.editBtn.flag;
      if (this.editBtn.flag) {
        this.editBtn.title = "Save";
        this.editBtn.color = "success";
      } else {
        this.editBtn.title = "Rename";
        this.editBtn.color = "primary";
        if (this.documentName != this.documentTxtField)
          this.$emit(
            "updateDocument",
            this.documentName,
            this.documentTxtField
          );
      }
    },
  },
  watch: {
    updateDocumentName: function () {
      this.documentTxtField = this.documentName;
    },
  },
};
</script>

<style scoped>
</style>