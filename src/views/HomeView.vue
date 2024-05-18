<template>
  <main>
    <HeroSection />
    <ProductSection />
  </main>
</template>


<script>
import HeroSection from '../components/home/HeroSection.vue';
import ProductSection from '../components/home/ProductsSection.vue';
export default {
  components: {
    HeroSection,
    ProductSection,
  }
}
</script>
