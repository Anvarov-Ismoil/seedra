<template>
  <header class="header py-3">
    <div class="container flex items-center justify-between">

      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="logo">
        </router-link>
      </div>

      <!-- nav -->
      <nav class="navbar flex items-center justify-center">

        <!-- menu -->
        <ul class="menu hidden lg:flex items-center justify-center">
          <li v-for="link in menuArray" :key="link">
            <router-link :to="link.route"
              class="link text-sm uppercase px-4 border-r border-r-secondary text-secondary">
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
            <a href="#"
              class="text-brand-green border border-light-blue xs:border-none rounded-full w-10 h-10 xs:w-auto xs:h-auto flex items-center justify-center">
              <i class="fa-regular fa-heart"></i>
            </a>
            <a href="#"
              class="text-brand-green border border-light-blue xs:border-none rounded-full w-10 h-10 xs:w-auto xs:h-auto flex items-center justify-center">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>

          <!-- burger -->
          <div @click="toggleMenu"
            class="burger flex items-center justify-center lg:hidden border border-light-blue xs:border-none rounded-full w-10 h-10 xs:w-auto xs:h-auto">
            <i v-if="!isMenuOpen" class="fa-solid fa-bars-staggered text-xl text-secondary"></i>
            <i v-else class="fa-solid fa-xmark text-3xl text-white relative z-10"></i>
          </div>
        </div>
      </nav>

      <!-- mobile-menu -->
      <Transition name="fade">
        <div class="mobile-menu bg-black/80 w-full h-screen fixed left-0 top-0 flex items-start justify-center"
          v-show="isMenuOpen">
          <ul class="menu flex flex-col items-center justify-center gap-5 pt-40">
            <li v-for="link in menuArray" :key="link">
              <router-link :to="link.route" class="link text-sm uppercase px-4 text-white">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    checkWindowWidth() {
      window.addEventListener("resize", () => {
        let windowWidth = window.innerWidth
        if (windowWidth > 1023) {
          this.isMenuOpen = false
        }
      })
    }
  },
  mounted() {
    this.checkWindowWidth()
  }
}
</script>

<style scoped>
.header .container .menu li:last-child .link {
  border-right: none;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>