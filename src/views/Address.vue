<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <h1 class="title pb-4">
          You have some ethers!
        </h1>
        <div class="headline pb-4">Your balance — {{ balance }} ETH</div>
        <div class="headline pb-4">
          To withdraw, use the following private key and address.
        </div>
        <div class="headline pb-4">Address: {{ address }}</div>
        <div class="headline pb-4">Private Key: {{ privateKey }}</div>
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
  data() {
    return {
      address: '',
      privateKey: '',
      balance: ''
    };
  },
  async created() {
    const account = await web3.eth.accounts.privateKeyToAccount(
      window.location.hash.substring(1)
    );
    this.address = account.address;
    this.privateKey = account.privateKey;
    this.balance = web3.utils.fromWei(
      await web3.eth.getBalance(account.address),
      'ether'
    );
  }
};
</script>

<style></style>
