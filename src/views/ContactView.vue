<template>
   <section class="contact px-2">
      <div class="container flex justify-around items-center h-[546px]  py-2 rounded-2xl bg-none lg:bg-[url('../assets/images/contactbg.png')] bg-no-repeat bg-cover bg-center">
         <div class="left hidden xl:flex flex-col px-8">
            
               <h1 class="text-5xl font-semibold">Contact Us</h1>
               <p class="w-60 font-light text-[#1F2533] mb-[157px] mt-[15px]">Send for us your request and we will get in touch with you as soon as possible</p>
            
            <div class="bottom">
               <div class="card1 flex items-center gap-3 mb-[20px]">
                  <img src="../assets/images/phoneIcon.png" alt="#">
                  <h3>+380 98 782 82 23</h3>
               </div>
               <div class="card2 flex items-center gap-3">
                  <img src="../assets/images/email.png" alt="#">
                  <h3>mailmail.@gmail.com</h3>
               </div> 
            </div>
         </div>
         <!-- for right background -- bg-[url('../assets/images/contactbg.png')] bg-no-repeat bg-cover -->
         <div class="right flex flex-col justify-start items-start h-[439px] w-[536px] mx-auto px-8 py-3 rounded-3xl border-4 border-light-blue bg-white  lg:border-0" >
            <div class="mobile flex flex-col xl:hidden">
               <h1 class="text-3xl font-semibold xs:text-4xl">Contact Us</h1>
               <p class="w-full max-w-96 font-light text-[#1F2533] mt-4 mb-3 hidden xs:block ">Send for us your request and we will get in touch with you as soon as possible</p>
               <div class="img flex gap-2 mb-2">
                  <img class="w-10" src="../assets/images/phoneIcon.png" alt="#">
               <img class="w-10" src="../assets/images/email.png" alt="#">
               </div>
            </div>
            <label for="name">
               Name
            </label>
            <input type="text" id="name" placeholder="Name" class="w-full max-w-96 h-[2.5rem] border border-light-blue outline-none  mb-5 px-4 rounded-md "> 

            <label for="email">
               Email
            </label>
            <input type="text" id="email" placeholder="Email" class="w-full max-w-96 h-[2.5rem] border border-light-blue outline-none  mb-5 px-4 rounded-md">  
            <label for="textarea">
               Message
            </label>
             <textarea id="textarea" placeholder="Your Message" class="w-full max-w-96 h-[7rem] border border-light-blue outline-none  mb-3 resize-none px-4 rounded-md"></textarea>
             <div class="bottom flex items-center gap-5 mt-4">
               <button class="bg-[#359740] py-2 px-3 text-[10px] rounded-lg text-white transition hover:bg-[#2BB159] x:text-[16px] s:px-6 " >Send Request</button>
               <p class="w-[150px] text-[#70737C] text-[10px] hidden s:block x:text-[13px] xs:w-[222px]">By sending request you agree to out Pivacy&Policy</p>
             </div>
         </div>
      </div>
   </section>
 </template>
 

 <script>
 export default {
   
 }
</script>


