<script setup>
import {ref, computed, watch} from 'vue'



</script>

<template>
   <div class="w-full flex py-14 pl-24">
        <div class="w-[500px] ">
            <div class="flex items-start justify-between">
                <div class="">
                    <h3 class="text-4xl pb-2 font-semibold text-colorPrimary">
                        Expenses
                    </h3>
                    <span class="text-base opacity-40 font-normal text-colorSecondary ">
                        01 - 25 March, 2020
                    </span>
                </div>
                <div class="flex items-center">
                    <div class="flex relative">
                        <img width="30px" height="30px" class="relative top-0 -left-12 z-30" src="../images/person-3.png">
                        <img width="30px" height="30px" class="absolute top-0 -left-6 z-20" src="../images/person-2.png">
                        <img width="30px" height="30px" class=" absolute top-0 right-0 z-10" src="../images/person-1.png">
                    </div>
                    <img class="ml-2.5 border-2 border-gray-300 rounded-full w-6 h-6 p-1" src="../svg/plus.svg">
                </div>
            </div>
        </div>
   </div>
   

</template>


<style scoped>


</style>
