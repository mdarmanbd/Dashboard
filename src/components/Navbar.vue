<script setup>


const login = () => {

}


</script>

<template>
    <header class="hidden md:block bg-white shadow-lg border-b sticky top-0 z-50">
        <nav class="w-full lg:w-[1250px] m-auto flex items-center py-3">
            <div class="pl-2 lg:pl-0 flex items-center float-start">
                <img class="bg-colorBase p-0.5 rounded" src="../svg/panda.svg">
                <h4 class="text-lg font-medium text-colorBase ml-2">foodpanda</h4>
            </div>
            <div class="ml-auto flex items-center">
                <img src="../svg/location.svg">
                <p class="text-gray-700 text-base font-normal">
                    New address 
                    <span class=" text-colorBase text-base font-normal">
                        Select your address
                    </span>
                </p>
            </div>
            <div class="ml-auto flex space-x-5">
                <button @click="login()" class=" transition duration-300 ease-in-out hover:translate-y-1 bg-transparent border border-colorBase rounded px-2.5 py-1 text-colorBase text-sm font-normal">
                    Log in
                </button>
                <button class="bg-colorBase border rounded px-2.5 py-1 text-white text-sm font-normal transition duration-300 ease-in-out hover:translate-y-1 ">
                    Sign up
                </button>
                <div class="pr-2">
                    <img class="w-7" src="../svg/shoppingBag.svg">
                </div>
            </div>
        </nav>
    </header>
    <!-- responsive navbar -->
    <div class="md:hidden bg-white w-full shadow border-b">
        <div class="px-2 py-2 flex items-center">
            <div>
                <img class="w-6" src="../svg/location.svg">
            </div>
            <div class="flex items-center ml-auto">
                <img class="bg-colorBase p-0.5 rounded w-6" src="../svg/panda.svg">
                <h4 class="text-lg font-medium text-colorBase ml-2">foodpanda</h4>
            </div>
            <div class="ml-auto">
                <img class="w-6 " src="../svg/shoppingBag.svg">
            </div>
        </div>
        <div class="flex items-center justify-center py-2 pb-3">
            <img src="../svg/location.svg">
            <p class="text-sm text-colorBase font-medium ml-1">
                Select your address
            </p>
        </div>  
    </div>

</template>


<style scoped>

</style>
