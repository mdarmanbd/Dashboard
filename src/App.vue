<script setup>
  import Sidebar from './components/Sidebar.vue';
  
</script>

<template>
      <section class="flex w-full bg-black">
        <aside class="w-[384px] bg-black ">
          <Sidebar></Sidebar>
        </aside> 
       
        <main class="w-full min-h-screen my-5 mr-5 rounded-xl bg-white">
          <RouterView></RouterView>
        </main>
      </section>
    
   

 

 
</template>

<style scoped>

</style>
