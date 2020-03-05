<template>
  <v-row justify="start">
    <v-col cols="12">
      <div class="headline pb-4">Address: {{ account.address }}</div>
      <v-btn color="success" @click="copyAddress(account.address)"
        >Copy Address</v-btn
      >
      <div class="headline pb-4">Private Key: {{ account.privateKey }}</div>
      <v-btn color="success" @click="copyLink(account.privateKey)"
        >Copy Private Key</v-btn
      >
    </v-col>
  </v-row>
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

<style></style>
