<template>
  <v-row justify="start">
    <v-col cols="12">
      <div class="headline pb-4">Address: {{ account.address }}</div>
      <div class="headline pb-4">Private Key: {{ account.privateKey }}</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['account']
};
</script>

<style></style>
