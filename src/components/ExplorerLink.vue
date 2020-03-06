<template>
  <v-scroll-y-transition>
    <div v-if="link.show" class="headline pb-4">
      Explore transaction:
      <a :href="`https://etherscan.io/tx/${link.hash}`" target="_blank"
        >www.etherscan.io/tx/{{ link.hash }}</a
      >
    </div>
  </v-scroll-y-transition>
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
