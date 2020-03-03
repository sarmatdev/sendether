<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <v-row align="baseline" justify="center">
          <div class="headline pb-4">
            Your balance — {{ account.balance }} ETH
          </div>
          <v-btn icon color="red" @click="updateBalance">
            <v-icon class="">mdi-cached</v-icon>
          </v-btn>
        </v-row>
        <TransactionForm />
        <WalletData :account="account" />
        <div v-if="link.show" class="headline pb-4">
          Explore transaction:
          <a
            :href="`https://ropsten.etherscan.io/tx/${link.hash}`"
            target="_blank"
            >https://ropsten.etherscan.io/tx/{{ link.hash }}</a
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TransactionForm from '../components/TransactionForm';
import WalletData from '../components/WalletData';
export default {
  components: { TransactionForm, WalletData },
  created() {
    this.$store.dispatch('createAccount');
  },
  methods: {
    updateBalance() {
      this.$store.dispatch('updateBalance');
    }
  },
  computed: {
    account() {
      return this.$store.getters.account;
    },
    link() {
      return this.$store.getters.link;
    }
  }
};
</script>

<style>
.headline {
  word-wrap: break-word;
}
.animation {
  animation: loader 1s infinite;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
