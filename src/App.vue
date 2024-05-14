<template>
  <!-- <header> -->
  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- </header> -->
  <TheNavbar />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>