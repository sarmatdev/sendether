<template>
  <div>
    <Sidebar/>
    <Address v-if="$route.hash" />
    <Send v-if="!$route.hash" />
  </div>
</template>

<script>
import Address from './Address';
import Send from './Send';
import Sidebar from '../components/Sidebar';
export default {
  name: 'Home',
  components: {
    Address,
    Send,
    Sidebar
  }
};
</script>

<style></style>
