<template>
  <!-- <header> -->
  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- </header> -->
  <TheNavbar />
  <Transition name="fade">
    <RouterView />
  </Transition>
  <TheFooter />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheNavbar, TheFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>