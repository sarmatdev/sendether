<template>
  <div>
    <Snackbar/>
    <Address v-if="$route.hash" />
    <Send v-if="!$route.hash" />
  </div>
</template>

<script>
import Address from './Address';
import Send from './Send';
import Snackbar from '../components/UI/Snackbar'
export default {
  name: 'Home',
  components: {
    Address,
    Send,
    Snackbar
  }
};
</script>

<style></style>
