<script setup>
import {ref, computed, watch} from 'vue'
import ExpenseProfile from './ExpenseProfile.vue';
import PercentageBar from './PercentageBar.vue';
import ItemComponent from './ItemComponent.vue';
import ExpenseTracker from './ExpenseTracker.vue';
import SaveCard from './SaveCard.vue';


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
        <div class="ml-24 bg-lightGray pl-12 pr-12 py-14 rounded-tr-xl rounded-br-xl">
            <!--- ExpenseTracker start ---->
            <ExpenseTracker/>
            <!--- ExpenseTracker end ---->
            
            <!--- Save card start ---->
            <SaveCard/>
             <!--- Save card end ---->

        </div>
   </div>
   

</template>


<style scoped>


</style>
