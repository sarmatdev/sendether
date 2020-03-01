<template>
  <v-form>
    <v-layout column justify-center align-center>
      <v-card width="430px">
        <v-card-title>Send Ethers Directly</v-card-title>
        <v-card-text>
          <v-text-field
            type="text"
            hint="Be careful when specifying the address!"
            label="Wallet Address"
            v-model="tranaction.address"
          ></v-text-field>
          <v-text-field
            type="number"
            outlined
            min="0"
            step="0.1"
            label="Amount"
            v-model="tranaction.amount"
          ></v-text-field>
          <!-- <v-card-subtitle class="pa-0">Choose Transaction speed</v-card-subtitle>
              <v-radio-group v-model="speed">
                <v-row>
                  <v-col cols="12" xs="4" sm="4" md="4">
                    <v-radio
                      label="Fastest"
                      color="info"
                      value="21000"
                    ></v-radio>
                  </v-col>
                  <v-col cols="12" xs="4" sm="4" md="4">
                    <v-radio
                      label="Fast"
                      color="green"
                      value="warning"
                    ></v-radio>
                  </v-col>
                  <v-col cols="12" xs="4" sm="4" md="4">
                    <v-radio label="Slow" color="error" value="error"></v-radio>
                  </v-col>
                </v-row>
              </v-radio-group> -->
          Transacion fee is {{ fee }} ETH
        </v-card-text>
        <v-card-text>
          <div class="subtitle-1">You also can customize your transaction!</div>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                type="number"
                outlined
                min="0"
                label="Gas Limit"
                v-model="tranaction.gasLimit"
              ></v-text-field>
              <v-text-field
                type="number"
                outlined
                min="0"
                step="1000"
                label="Gas Price"
                v-model="tranaction.gasPrice"
              ></v-text-field>
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-card-actions>
          <v-btn block @click="sendTransaction" color="success">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    show: false,
    // speed: '',
    tranaction: {
      address: '',
      amount: '',
      gasPrice: 1,
      gasLimit: 21000
    }
  }),
  methods: {
    sendTransaction() {
      this.$store.dispatch('sendEther', this.tranaction)
    }
  },
  computed: {
    fee() {
      return (this.tranaction.gasPrice * this.tranaction.gasLimit) / 100000000;
    }
  }
};
</script>

<style></style>
