<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <h1 class="title pb-4">
          Send Ethereum to anyone, even if they don't have a wallet! Just follow
          to simple steps below👇🏻
        </h1>
        <div class="headline pb-4">
          1. Send Ethereum to the address: %address_name%
        </div>
        <div class="headline pb-4">
          2. Share the link with anyone: %link_name%
        </div>
        <h2 class="display-1 indigo--text">Toss a Ethereum to your Witcher!</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Web3 from 'web3';
const web3 = new Web3(
  'https://ropsten.infura.io/v3/9c85a82e358f46d389135967ceeeea82'
);
export default {
  name: 'Address',
  data() {
    return {
      address: '',
      privateKey: '',
      balance: ''
    }
  },
  async created() {
    const account = await web3.eth.accounts.createAccount()

    console.log(account)
  },
};
</script>

<style></style>
