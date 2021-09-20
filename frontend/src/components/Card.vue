<template>
<v-hover v-slot="{ hover }">
  <v-card class="mx-auto" color="grey lighten-4" max-width="600" height="250px">
    <v-img :aspect-ratio="16 / 9" :src="document.image" height="250px">
      <v-expand-transition>
        <div
          v-if="hover"
          class="
            d-flex
            transition-fast-in-fast-out
            black
            darken-2
            v-card--reveal
            white--text
            flex-column
            align-start
            justify-space-between
            pa-2
          "
          style="height: 100%;"
        >
          <p class="text-h6">{{ document.title }}</p>
          <p>Last open<br />{{ document.last_open }}</p>
        </div>
      </v-expand-transition>
    </v-img>
  </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    document: Object,
  },
};
</script>

<style>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>