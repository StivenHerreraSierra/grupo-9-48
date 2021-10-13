<template>
  <v-snackbar v-model="info.snackbar" :timeout="info.timeout">
    {{ info.text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
v-snackbar {
    text-align: center !important;
}
</style>