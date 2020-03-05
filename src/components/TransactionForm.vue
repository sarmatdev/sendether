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
                v-model="address"
                :error-messages="addressError"
                required
                @input="$v.address.$touch()"
                @blur="$v.address.$touch()"
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
                v-model="amount"
                :error-messages="amountError"
                required
                @input="$v.amount.$touch()"
                @blur="$v.amount.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>
          {{ balance }}
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
                min="21000"
                step="1000"
                label="Gas Limit"
                v-model="gasLimit"
                :error-messages="gasLimitError"
                required
                @input="$v.gasLimit.$touch()"
                @blur="$v.gasLimit.$touch()"
              ></v-text-field>
              <v-text-field
                type="number"
                outlined
                min="1"
                step="1"
                label="Gas Price"
                v-model="gasPrice"
                :error-messages="gasPriceError"
                required
                @input="$v.gasPrice.$touch()"
                @blur="$v.gasPrice.$touch()"
              ></v-text-field>
            </v-card-text>
          </div>
        </v-expand-transition>
        <v-card-actions>
          <v-btn
            block
            @click="sendTransaction"
            :disabled="formIsValid"
            color="success"
            >Send</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-form>
</template>

<script>
import Loading from '../components/UI/Loading';
import Web3 from 'web3';
import { required, minValue } from 'vuelidate/lib/validators';
export default {
  components: {
    Loading
  },
  data: () => ({
    show: false,
    maxAmount: '',
    address: '',
    amount: '',
    gasPrice: 1,
    gasLimit: 21000
  }),
  validations: {
    address: {
      required
    },
    amount: {
      required
    },
    gasPrice: {
      required,
      minValue: minValue(1)
    },
    gasLimit: {
      required,
      minValue: minValue(21000)
    }
  },
  methods: {
    sendTransaction() {
      this.$store.dispatch('sendEther', {
        address: this.address,
        amount: this.amount,
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit
      });
    },
    useWholeBalance() {
      this.amount = this.balance - this.fee;
    }
  },
  computed: {
    addressError() {
      const errors = [];
      if (!this.$v.address.$dirty) return errors;
      !this.$v.address.required && errors.push('Address is required.');
      !this.addressValid && errors.push('Address not valid');
      return errors;
    },
    amountError() {
      const errors = [];
      if (!this.$v.amount.$dirty) return errors;
      !this.$v.amount.required && errors.push('Amount is required.');
      this.amount <= 0 && errors.push('Amount must be more than 0');
      this.amount > this.balance &&
        errors.push(`Amount must be less or equal ${this.balance}`);
      return errors;
    },
    formIsValid() {
      return !this.$v.$invalid &&
        this.addressError.length == 0 &&
        this.amountError.length == 0
        ? false
        : true;
    },
    gasPriceError() {
      const errors = [];
      if (!this.$v.gasPrice.$dirty) return errors;
      !this.$v.gasPrice.required && errors.push('Gas price is required.');
      !this.$v.gasPrice.minValue &&
        errors.push('Gas price must be greater than or equal 1');
      return errors;
    },
    gasLimitError() {
      const errors = [];
      if (!this.$v.gasLimit.$dirty) return errors;
      !this.$v.gasLimit.required && errors.push('Gas limit is required.');
      !this.$v.gasLimit.minValue &&
        errors.push('Gas limit must be greater than or equal 21000');
      return errors;
    },
    fee() {
      return Web3.utils.fromWei(`${this.gasLimit * this.gasPrice}`, 'Gwei');
    },
    addressValid() {
      return Web3.utils.isAddress(this.address);
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
