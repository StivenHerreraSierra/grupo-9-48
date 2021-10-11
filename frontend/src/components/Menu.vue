<template>
  <v-navigation-drawer app expand-on-hover permanent dark>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="content.user.picture"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{ content.user.username }}</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in content.items"
        :key="item.title"
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="option">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
        <div class="pa-2 mb-4">
          <v-btn block to="/logout">
            Exit
          </v-btn>
        </div>
      </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    content: Object,
  },
};
</script>

<style>
.option {
    font-size: 15px !important;
    font-weight: normal !important;
}
</style>