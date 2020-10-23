import Vue from "vue";
import VueRouter from "vue-router"
import home from "../views/home.vue"
import client from "../views/client.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/client',
        name: 'client',
        component: client
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router