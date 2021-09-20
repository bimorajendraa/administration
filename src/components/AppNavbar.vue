<template>
  <b-navbar class="has-background-light" style="margin-bottom: 16px;">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/ekskul.png" alt="Ekskul Logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>