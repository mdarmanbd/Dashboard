<script setup>


</script>

<template>
    <!---- grocery start  ---->
    <div class="flex justify-between items-center border-b border-b-gray-300 pb-1.5">
        <h3 class="text-lg font-normal font-avenir text-black">
            Today
        </h3>
        <img class="cursor-pointer" src="../svg/threeDot.svg">
    </div>

    <div class="pt-6 mb-12">
        <div class="flex items-start justify-between">
            <div class="flex items-start">
                <div class="w-12 h-12 bg-blue-500 rounded-full grid place-items-center">
                    <img src="../svg/shoping.svg" alt="shoping svg">
                </div>
                <div class="block ml-4">
                    <h5 class="text-base text-black font-normal">
                        Grocery
                    </h5>
                    <p class="text-sm font-normal text-gray-800 opacity-40">
                        5:12 pm 
                        <span class="before-dot">
                            Belaja di pasar
                        </span>
                    </p>
                </div>
            </div>
            <h4 class="text-base font-semibold text-black">
                -326.800
            </h4>
        </div>
        <div class="flex items-start justify-between mt-6">
            <div class="flex items-start">
                <div class="w-12 h-12 bg-purple-500 rounded-full grid place-items-center">
                    <img src="../svg/bus.svg" alt="bus svg">
                </div>
                <div class="block ml-4">
                    <h5 class="text-base text-black font-normal">
                        Transportation
                    </h5>
                    <p class="text-sm font-normal text-gray-800 opacity-40">
                        5:12 pm 
                        <span class="before-dot">
                            Naki bus umum
                        </span>
                    </p>
                </div>
            </div>
            <h4 class="text-base font-semibold text-black">
                -15.000
            </h4>
        </div>
        <div class="flex items-start justify-between mt-6">
            <div class="flex items-start">
                <div class="w-12 h-12 bg-orange-500 rounded-full grid place-items-center">
                    <img src="../svg/home.svg" alt="home svg">
                </div>
                <div class="block ml-4">
                    <h5 class="text-base text-black font-normal">
                        Housing
                    </h5>
                    <p class="text-sm font-normal text-gray-800 opacity-40">
                        5:12 pm 
                        <span class="before-dot">
                            Bayar Listrik
                        </span>
                    </p>
                </div>
            </div>
            <h4 class="text-base font-semibold text-black">
                -185.750
            </h4>
        </div>
    </div>
    <!---- grocery end  ---->
    
    <!---- food & drink start  ---->
    <div class="flex justify-between items-center border-b border-b-gray-300 pb-1.5">
        <h3 class="text-lg font-normal font-avenir text-black">
            Monday, 23 March 2020
        </h3>
        <img class="cursor-pointer" src="../svg/threeDot.svg">
    </div>

    <div class="flex items-start justify-between mt-6">
        <div class="flex items-start">
            <div class="w-12 h-12 bg-red-500 rounded-full grid place-items-center">
                <img src="../svg/drink.svg" alt="drink svg">
            </div>
            <div class="block ml-4">
                <h5 class="text-base text-black font-normal">
                    Food and Drink
                </h5>
                <p class="text-sm font-normal text-gray-800 opacity-40">
                    5:12 pm 
                    <span class="before-dot">
                        Makan Steak
                    </span>
                </p>
            </div>
        </div>
        <h4 class="text-base font-semibold text-black">
            -156.000
        </h4>
    </div>

    <div class="flex items-start justify-between mt-6">
        <div class="flex items-start">
            <div class="w-12 h-12 bg-green-500 rounded-full grid place-items-center">
                <img src="../svg/play.svg" alt="play svg">
            </div>
            <div class="block ml-4">
                <h5 class="text-base text-black font-normal">
                    Entertainment
                </h5>
                <p class="text-sm font-normal text-gray-800 opacity-40">
                    5:12 pm 
                    <span class="before-dot">
                        Nonton Bioskop
                    </span>
                </p>
            </div>
        </div>
        <h4 class="text-base font-semibold text-black">
            -35.200
        </h4>
    </div>
    <!---- food & drink start  ---->
</template>


<style scoped>
.before-dot{
    position: relative;
    margin-left: 15px
}
.before-dot::before {
    content: "";
    position: absolute;
    top: 8px;
    left: -12px;
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: gray; 
    border-radius: 50%;
    z-index: 1;
}
</style>
