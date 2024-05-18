<template>
   <footer class="footer p-10">
      <div class="container">
         <div class="abouts flex justify-center flex-col xs:flex-row  items-center gap-3 pb-6">
            <div class="logo mb-5 xs:mb-0">
               <img src="../assets/images/logo.svg" alt="logo">
            </div>
            <div class="menu flex">
               <ul class="flex flex-col lg:flex-row gap-5">
               <li v-for="link in footerMenu" class="flex uppercase">
                  <router-link :to="link.route" class="link border-r border-r-secondary px-3 text-[8px] s:text-[10px] x:text-sm text-secondary">{{ link.name }}</router-link>
               </li>
            </ul>
            </div>
         </div>
         <hr>
         <div class="navigate flex justify-between pt-5">
            <div class="icons flex gap-6">
               <a href="#" class="text-brand-green"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="text-brand-green"><i class="fa-brands fa-facebook"></i></a>
            </div>

            <div class="text">
               <h3 class="text-secondary text-sm">All Rights reserved</h3>
            </div>
         </div>
      </div>
   </footer>
</template>

<script>
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
}
</script>


<style>
   a.router-link-exact-active {
      color: #359740;
      font-weight: 500;
   }

   .footer .container .abouts ul li:last-child .link {
      border-right: none;
   }
</style>