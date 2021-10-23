<template>
  <div class="container-fluid">
    <nav-bar></nav-bar>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>
