<template>
  <div>
    <v-alert
      dark
      dense
      type="error"
      transition="scale-transition"
      origin="center center"
      v-if="documentDuplicated != ''"
    >
      Title {{ documentDuplicated }} is already in use</v-alert
    >
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
          :error-messages="documentDuplicated"
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
          v-if="checkDocumentName"
          >{{ editBtn.title }}</v-btn
        >
        <v-btn
          depressed
          tile
          color="error"
          v-on:click="deleteDocument()"
          v-if="!editBtn.flag && checkDocumentName"
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
      checkDocumentName: true,
      documentDuplicated: "",
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
        if (this.documentName != this.documentTxtField) {
          this.$emit(
            "updateDocument",
            this.documentName,
            this.documentTxtField
          );
          this.checkDocumentName = !this.checkDocumentName;
          setTimeout(() => {
            if (!this.updateDocumentName) {
              this.editBtn.flag = true;
              this.editBtn.title = "Save";
              this.editBtn.color = "success";
              this.documentDuplicated = this.documentTxtField;
            }
            this.checkDocumentName = !this.checkDocumentName;
          }, 200);

          setTimeout(() => (this.documentDuplicated = ""), 1500);
        }
      }
    },
  },
  watch: {
    documentName: function () {
      this.documentTxtField = this.documentName;
    },
  },
};
</script>

<style scoped>
</style>