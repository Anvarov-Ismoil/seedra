<template>
  <header class="header py-3">
    <div class="container flex items-center justify-between">

      <!-- logo -->
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="logo">
      </div>

      <!-- nav -->
      <nav class="navbar flex items-center justify-center">

        <!-- menu -->
        <ul class="menu hidden lg:flex items-center justify-center">
          <li v-for="link in menuArray" :key="link">
            <router-link :to="link.route" class="link text-sm uppercase px-4 border-r border-r-secondary text-secondary">
              {{ link.name }}
            </router-link>
          </li>
        </ul>

        <!-- actions -->
        <div class="actions flex items-center justify-center gap-5">
          <!-- socials -->
          <div class="socials hidden lg:flex items-center justify-center gap-2">
            <a href="#" class="text-secondary"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="text-secondary"><i class="fa-brands fa-facebook"></i></a>
          </div>

          <!-- search -->
          <form class="border border-[#efefef] rounded-full px-5 overflow-hidden hidden xs:block">
            <i class="fa-solid fa-magnifying-glass text-secondary"></i>
            <input type="text" placeholder="Search" class="p-3 outline-none">
          </form>

          <!-- action-div -->
          <div class="action-div flex items-center justify-center gap-2">
            <a href="#" class="text-brand-green"><i class="fa-regular fa-heart"></i></a>
            <a href="#" class="text-brand-green"><i class="fa-solid fa-cart-shopping"></i></a>
          </div>
          
          <!-- burger -->
          <div class="burger block lg:hidden">
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuArray: [
        {
          name: 'all products',
          route: '/products'
        },
        {
          name: 'about seedra',
          route: '/about'
        },
        {
          name: 'our blog',
          route: '/blog'
        },
        {
          name: 'contacts',
          route: '/contacts'
        },
      ]
    }
  },
}
</script>

<style scoped>
.header .container .menu li:last-child .link {
  border-right: none;
}
</style>