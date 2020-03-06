<template>
  <v-layout column justify-center align-center>
    <v-card width="450px" elevation="10" shaped>
      <v-card-title>Or transfer money manually using wallet data</v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <div class="headline pb-4">Address: {{ account.address }}</div>
        <v-btn color="info" rounded @click="copyAddress(account.address)"
          >Copy Address<v-icon>mdi-content-copy</v-icon></v-btn
        >
        <div class="headline pb-4">Private Key: {{ account.privateKey }}</div>
        <v-btn color="info" rounded @click="copyLink(account.privateKey)"
          >Copy Private Key<v-icon>mdi-content-copy</v-icon></v-btn
        >
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: ['account'],
  methods: {
    copyAddress(address) {
      this.$clipboard(address);
      this.$store.commit('setSnackbar', {
        text: 'Address copied!',
        show: true,
        color: 'success'
      });
    },
    copyLink(key) {
      this.$clipboard(key);
      this.$store.commit('setSnackbar', {
        text: 'Private Key copied!',
        show: true,
        color: 'success'
      });
    }
  }
};
</script>

<style scoped>
.v-card__title {
  word-break: normal;
}
</style>
