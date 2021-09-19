<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent dark>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="content.user.image"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{ content.user.name }}</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
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
        <div class="pa-2">
          <v-icon large v-if="mini">mdi-exit-to-app</v-icon>
          <v-btn block v-if="!mini">
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
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>

<style>
.option {
    font-size: 15px !important;
    font-weight: normal !important;
}
</style>