<script setup>
import {ref, computed, watch} from 'vue'
import ExpenseProfile from './ExpenseProfile.vue';
import PercentageBar from './PercentageBar.vue';
import ItemComponent from './ItemComponent.vue';
import ExpenseTracker from './ExpenseTracker.vue';



</script>

<template>
   <div class="w-full flex pl-24">
        <div class="w-[500px] py-14">
            <!---- expense profile start ---->
            <ExpenseProfile/>
            <!---- expense profile end ---->

            <!--- percentage bar start --->
            <PercentageBar/>
             <!--- percentage bar end --->

            <!--- Item component ---->
            <ItemComponent/>
            <!--- Item component end ---->
        </div>
        <div class=" ">
             <!--- ExpenseTracker start ---->
            <ExpenseTracker/>
              <!--- ExpenseTracker end ---->
        </div>
   </div>
   

</template>


<style scoped>


</style>
