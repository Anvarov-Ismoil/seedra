<template>
   <footer class="footer py-10">
      <div class="container">
         <div class="abouts pb-2 md:pb-6 border-b border-brand-green/20">
            <div class="menu flex items-start md:items-center justify-center flex-wrap gap-5 xl:gap-[70px]">
               <!-- first -->
               <ul class="flex flex-col sm:flex-row flex-grow md:flex-grow-0 justify-center gap-5 md:gap-0">
                  <li v-for="link in firstMenu">
                     <router-link :to="link.route"
                        class="link lg:border-r border-r-secondary px-2 md:px-5 lg:px-7 text-[8px] s:text-[10px] x:text-sm text-secondary uppercase">
                        {{ link.name }}
                     </router-link>
                  </li>
               </ul>
               <!-- logo -->
               <div class="logo flex items-center justify-center sm:mb-5 lg:mb-0 -order-1 lg:order-none w-full lg:w-auto">
                  <router-link to="/">
                     <img src="../assets/images/logo.svg" alt="logo">
                  </router-link>
               </div>
               <!-- last -->
               <ul class="flex flex-col sm:flex-row flex-grow md:flex-grow-0 justify-center gap-5 md:gap-0">
                  <li v-for="link in lastMenu">
                     <router-link :to="link.route"
                        class="link lg:border-r border-r-secondary px-2 md:px-5 lg:px-7 text-[8px] s:text-[10px] x:text-sm text-secondary uppercase">
                        {{ link.name }}
                     </router-link>
                  </li>
               </ul>
            </div>
         </div>
         <!-- <hr> -->
         <div class="navigate flex justify-between pt-5">
            <div class="icons flex gap-6">
               <a href="#" class="text-brand-green"><i class="fa-brands fa-instagram"></i></a>
               <a href="#" class="text-brand-green"><i class="fa-brands fa-facebook"></i></a>
            </div>

            <div class="text">
               <h3 class="text-secondary text-sm">&copy; All Rights reserved.</h3>
            </div>
         </div>
      </div>
   </footer>
</template>

<script>
import logo from '@/assets/images/logo.svg';

export default {
   data() {
      return {
         footerMenu: [
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
            // {
            //   name: logo,
            //   route: '/' 
            // },
            {
               name: 'Terms&Conditions',
               route: '/term'
            },
            {
               name: 'Privacy Policy',
               route: '/privacy'
            }
         ]
      }
   },
   computed: {
      firstMenu() {
         return this.footerMenu.slice(0, 3)
      },
      lastMenu() {
         return this.footerMenu.slice(3, 5)
      },
   }
}
</script>


<style scoped>


.footer .container .abouts ul li:last-child .link {
   border-right: none;
}
</style>