<template>
  <v-row align="baseline" justify="center">
    <div class="headline pb-4">Your balance — {{ balance }} ETH</div>
    <v-btn icon color="red" @click="updateBalance">
      <v-icon class="custom-loader">mdi-cached</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.getters.account.balance;
    }
  },
  methods: {
    updateBalance() {
      this.$store.dispatch('updateBalance');
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
