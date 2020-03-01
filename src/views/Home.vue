<template>
  <div>
    <Address v-if="$route.hash" />
    <Send v-if="!$route.hash" />
  </div>
</template>

<script>
import Address from './Address';
import Send from './Send';
export default {
  name: 'Home',
  components: {
    Address,
    Send
  }
};
</script>

<style></style>
