<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 md10 class="text-center">
        <h1 class="title pb-4">
          Send Ethereum to anyone! Recipient can spend, transfer and exchange
          coins without wallet.
        </h1>
        <div class="headline pb-4">
          1. Send Ethereum to the address:
          <span id="toCopy">{{ wallet.address }}</span>
        </div>
        <qrcode-vue
          :value="wallet.address"
          size="200"
          class="pb-4"
          level="H"
        ></qrcode-vue>
        <v-btn color="success" @click="copy()">Copy</v-btn>
        <div class="headline pt-4 pb-4">
          2. Share the link with anyone:
          <a :href="wallet.link">{{ wallet.link }}</a>
        </div>
        <div class="headline pb-4"></div>
        <h2 class="display-1 indigo--text">Toss a Ethereum to your Witcher!</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
  components: {
    QrcodeVue
  },
  name: 'Address',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('createWallet');
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
  },
  computed: {
    wallet() {
      return this.$store.getters.wallet;
    }
  }
};
</script>

<style>
.headline {
  word-wrap: break-word;
}
</style>
