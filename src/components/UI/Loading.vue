<template>
  <v-row v-if="loading" align="center" justify="center">
    <v-row justify="center">
      <v-overlay absolute>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-row>
  </v-row>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style></style>
