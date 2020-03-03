<template>
  <v-snackbar
    v-model="snackbar.show"
    :timeout="timeout"
    top
    right
    color="success"
  >
    {{ snackbar.text }}
    <v-btn color="black" text dark @click="snackbar.show = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      timeout: 3000
    };
  },
  computed: {
    snackbar() {
      return this.$store.getters.snackbar;
    }
  }
};
</script>

<style></style>
