<script setup>
import router from '../router/router';

const login = () => {
    router.push('/Customers')
}


</script>

<template>
    <div class="bg-black pt-16 pb-44 mx-20 ">
        <!--- profile start---->
        <div class="relative w-28">
            <img class="w-16 h-16 " src="../images/Profile.png" alt="profile png">
            <span class="absolute z-10 rounded-full -top-5 right-8 w-8 h-8 bg-colorCarcol text-white font-semibold text-sm grid place-items-center">
                4
            </span>
        </div>
        <h3 class="pt-3 pb-1 font-semibold text-3xl text-white">
            Samantha
        </h3>
        <p class="text-base font-normal text-white opacity-40">
            samantha@email.com
        </p>
        <!--- profile end---->

        <!--- main sidebar start ---->
       <div class="mt-20 space-y-5">
            <router-link to="/Dashboard" class="text-white opacity-30 text-2xl font-semibold block">
                Dashboard
            </router-link>

            <router-link to="/" class="text-white opacity-95 text-2xl font-semibold block ">
                Expenses
            </router-link>

            <router-link to="/Wallets" class="text-white opacity-30 text-2xl font-semibold block">
                Wallets
            </router-link>

            <router-link to="/Summary" class="text-white opacity-30 text-2xl font-semibold block">
                Summary
            </router-link>

            <router-link to="/Accounts" class="text-white opacity-30 text-2xl font-semibold block">
                Accounts
            </router-link>

            <router-link to="/Settings" class="text-white opacity-30 text-2xl font-semibold block">
                Settings
            </router-link>
       </div>
       <!--- main sidebar start ---->
    </div>

</template>


<style scoped>

</style>
