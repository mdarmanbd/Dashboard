
import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue';
import Home from '../components/Home.vue';
import Accounts from '../components/Accounts.vue';
import Dashboard from '../components/Dashboard.vue';
import Settings from '../components/Settings.vue';
import Summary from '../components/Summary.vue';
import Wallets from '../components/Wallets.vue';



const routes = [
    {
        path:'/',
        component:Home
    },

    {
        path:'/accounts',
        component:Accounts
    },

    {
        path:'/dashboard',
        component:Dashboard
    },

    {
        path:'/settings',
        component:Settings
    },

    {
        path:'/summary',
        component:Summary
    },

    {
        path:'/wallets',
        component:Wallets
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next)=>{
//     if(to.meta.requiresAuthentication){
//         const isAuthenticationParse = JSON.parse(localStorage.getItem('isAuthentication'))
//         const isAuthentication = ref(isAuthenticationParse)
//         if(isAuthentication.value){
//             next()
//         }else{
//             next('/')
//         }
//     }else{
//         next()
//     }
// })



export default router