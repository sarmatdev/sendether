<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <v-row align="baseline" justify="center">
          <v-col cols="12"></v-col>
          <div class="headline pb-4">
            Your balance — {{ account.balance }} ETH
          </div>
          <v-btn icon color="red" @click="updateBalance">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-row>
        <TransactionForm />
        <div class="headline pa-4">
          Or use them manually using the address and private key
        </div>
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
      this.$store.dispatch('updateBalance');
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
