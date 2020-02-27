<template>
  <div>
    <Address />
  </div>
</template>

<script>
import Address from './Address';
export default {
  name: 'Home',
  components: {
    Address
  },
  data() {
    return {};
  },
  methods: {}
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
