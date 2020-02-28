<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <h1 class="title pb-4">
          Send Ethereum to anyone, even if they don't have a wallet! Just follow
          to simple steps below👇🏻
        </h1>
        <div class="headline pb-4">
          1. Send Ethereum to the address:
          <span id="toCopy">{{ address }}</span>
        </div>
        <qrcode-vue :value="address" size="200" class="pb-4" level="H"></qrcode-vue>
        <v-btn color="success" @click="copy()">Copy</v-btn>
        <div class="headline pt-4 pb-4">
          2. Share the link with anyone:
          <a :href="link">{{ link }}</a>
        </div>
        <div class="headline pb-4"></div>
        <h2 class="display-1 indigo--text">Toss a Ethereum to your Witcher!</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import Web3 from 'web3';
const web3 = new Web3(
  'https://ropsten.infura.io/v3/9c85a82e358f46d389135967ceeeea82'
);
export default {
  components: {
    QrcodeVue
  },
  name: 'Address',
  data() {
    return {
      address: '',
      privateKey: '',
      link: ''
    };
  },
  async created() {
    const wallet = await web3.eth.accounts.create();
    this.address = wallet.address;
    this.privateKey = wallet.privateKey;
    this.link = `${window.origin}/#${wallet.privateKey}`;
  },
  methods: {
    copy() {
      let elm = document.querySelector('#toCopy');

      if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('Copy');
      }
    }
  }
};
</script>

<style>
.headline {
  word-wrap: break-word;
}
.span {
  background-color: aqua;
}
</style>
