<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <h1 class="title pb-4">
          You have some ethers!
        </h1>
        <v-row align="baseline" justify="center">
          <v-col cols="12"></v-col>
            <div class="headline pb-4">
              Your balance — {{ account.balance }} ETH
            </div>
            <v-btn icon color="red" @click="updateBalance">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
        </v-row>
        <div class="headline pb-4">
          To withdraw, use the following private key and address or type your
          Ehtereum wallet here and push send!
        </div>
        <TransactionForm />
        <div class="headline pb-4">Address: {{ account.address }}</div>
        <div class="headline pb-4">Private Key: {{ account.privateKey }}</div>
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
      this.$store.dispatch('updateBalance')
    }
  },
  computed: {
    account() {
      return this.$store.getters.account;
    }
  }
};
</script>

<style>
.headline {
  word-wrap: break-word;
}
</style>
