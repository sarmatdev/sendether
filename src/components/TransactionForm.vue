<template>
  <v-form>
    <v-layout column justify-center align-center>
      <v-card width="430px">
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
            label="Amount"
            v-model="tranaction.amount"
          ></v-text-field>
          Transacion fee is — {{ fee }} ETh
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
                step="1000"
                label="Gas Price"
                v-model="tranaction.gasPrice"
              ></v-text-field>
              <v-text-field
                type="number"
                outlined
                min="0"
                label="Gas Limit"
                v-model="tranaction.gasLimit"
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
    tranaction: {
      address: '',
      amount: '',
      gasPrice: 21000,
      gasLimit: 1
    }
  }),
  methods: {
    sendTransaction() {
      console.log(this.tranaction);
    }
  },
  computed: {
    fee() {
      return (this.tranaction.gasPrice * this.tranaction.gasLimit) / 1000000000;
    }
  }
};
</script>

<style></style>
