<template>
  <section class="products">
    <div class="container">
      <!-- btns -->
      <div class="btns">
        <button class="btn py-5 px-4 border-2 border-light-blue rounded-lg uppercase text-sm text-primary">fruits</button>
      </div>

      <!-- product-wrapper -->
      <div class="product-wrapper">
        <!-- card -->
        <productCard />
      </div>
    </div>
  </section>
</template>

<script>
import productCard from './productCard.vue';

export default {
  components: {
    productCard
  }
}
</script>