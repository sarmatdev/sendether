<template>
  <div v-if="link.show" class="headline pb-4">
    Explore transaction:
    <a :href="`https://ropsten.etherscan.io/tx/${link.hash}`" target="_blank"
      >https://ropsten.etherscan.io/tx/{{ link.hash }}</a
    >
  </div>
</template>

<script>
export default {
  computed: {
    link() {
      return this.$store.getters.link;
    }
  }
};
</script>

<style></style>
