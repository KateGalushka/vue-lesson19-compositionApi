import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import GiftsView from '../views/GiftsView.vue'
import DividerView from '../views/DividerView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/friends',
        name: 'friends',
        component: FriendsView,
    },
    {
        path: '/gifts',
        name: 'gifts',
        component: GiftsView,
    },
    {
        path: '/divider',
        name: 'divider',
        component: DividerView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
