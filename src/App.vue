<template>
  <!-- <header> -->
  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- </header> -->
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheNavbar , TheFooter
  }
}
</script>