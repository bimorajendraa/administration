<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <h1 class="title">About Page</h1>
      <!-- Content goes here -->
    </div>
  </div>
</template>

<script>
import AppNavbar from "./AppNavbar.vue";
export default {
  name: "AboutPage",
  components: {
    AppNavbar,
  },
};
</script>