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
        <!-- <div class="headline pa-4">
          Or use them manually using the address and private key
        </div> -->
        <div v-if="link.show" class="headline pb-4">
          Explore transaction:
          <a
            :href="`https://ropsten.etherscan.io/tx/${link.hash}`"
            target="_blank"
            >https://ropsten.etherscan.io/tx/{{ link.hash }}</a
          >
        </div>
        <v-row>
          <v-col cols="12">
            <div class="headline pb-4">Address: {{ account.address }}</div>
            <div class="headline pb-4">
              Private Key: {{ account.privateKey }}
            </div>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TransactionForm from '../components/TransactionForm';
export default {
  components: { TransactionForm },
  data() {
    return {};
  },
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
