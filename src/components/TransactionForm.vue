<template>
  <v-form>
    <v-layout column justify-center align-center>
      <v-card width="430px">
        <Loading v-if="loading" />
        <v-card-title>Send Ethers Directly</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                type="text"
                hint="Be careful when specifying the address!"
                label="Wallet Address"
                v-model="transaction.address"
                :error-messages="error"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                type="number"
                outlined
                min="0"
                step="0.1"
                label="Amount"
                v-model="transaction.amount"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn @click="useWholeBalance">Use whole Balance</v-btn>
            </v-col>
          </v-row>
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
                v-model="transaction.gasLimit"
              ></v-text-field>
              <v-text-field
                type="number"
                outlined
                min="0"
                step="1"
                label="Gas Price"
                v-model="transaction.gasPrice"
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
import Loading from '../components/UI/Loading';
import Web3 from 'web3';
export default {
  components: {
    Loading
  },
  data: () => ({
    show: false,
    error: [],
    transaction: {
      address: '',
      amount: '',
      gasPrice: 1,
      gasLimit: 21000
    }
  }),
  methods: {
    sendTransaction() {
      if (Web3.utils.isAddress(this.transaction.address)) {
        this.error = [];
        this.$store.dispatch('sendEther', this.transaction);
      } else {
        this.error.push('This address not valid for Ethereum!');
      }
    },
    useWholeBalance() {
      this.transaction.amount = this.balance - this.fee;
      console.log(this.transaction.amount);
    }
  },
  computed: {
    fee() {
      return Web3.utils.fromWei(
        `${this.transaction.gasLimit * this.transaction.gasPrice}`,
        'Gwei'
      );
    },
    loading() {
      return this.$store.getters.loading;
    },
    balance() {
      return this.$store.getters.account.balance;
    }
  }
};
</script>

<style></style>
