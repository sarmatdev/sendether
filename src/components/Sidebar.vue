<template>
    <v-navigation-drawer v-model="drawer" right absolute temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Create push</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>My pushes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  }
};
</script>

<style></style>
