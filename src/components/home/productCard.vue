<template>
  <div class="card max-w-[350px] border-2 border-light-blue rounded-lg p-7 relative">
    <!-- like -->
    <div class="like w-10 h-10 border border-light-blue rounded-full text-xl text-yellow flex items-center justify-center
    absolute right-3 top-3">
      <i class="fa-regular fa-heart"></i>
    </div>
    <!-- image-div -->
    <div class="image-div mb-7">
      <img src="../../assets/images/p1.png" alt="product">
    </div>
    <!-- content -->
    <div class="content">
      <!-- top -->
      <div class="top flex items-center gap-4">
        <!-- stars -->
        <div class="stars flex items-center text-yellow">
          <i class="fa-solid fa-star" v-for="i in 4" :key="i"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p class="rating">(123)</p>
      </div>
      <!-- description -->
      <p class="desc my-2 text-primary font-semibold text-[15px]">
        SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting
      </p>
      <!-- bottom -->
      <div class="bottom flex items-center justify-between">
        <!-- price -->
        <p class="price text-3xl text-primary font-semibold">
          $12.56
        </p>
        <!-- cart -->
        <div class="cart border border-light-blue rounded-lg p-3 w-12 h-12 flex items-center justify-center text-brand-green text-xl">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>