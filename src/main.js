import './main.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import AboutPage from './pages/about.vue'
import MembersPage from './pages/members.vue'
import RoadmapPage from './pages/roadmap.vue'
import PackagesCollectionPage from './pages/packages-collection.vue'
import OTPlessErlangPage from './pages/otpless-erlang.vue'
import BEAMPackagesPage from './pages/beam-packages.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/members',
            name: 'members',
            component: MembersPage
        },
        {
            path: '/roadmap',
            name: 'roadmap',
            component: RoadmapPage
        },
        {
            path: '/packages-collection',
            name: 'packages-collection',
            component: PackagesCollectionPage
        },
        {
            path: '/otpless-erlang',
            name: 'otpless-erlang',
            component: OTPlessErlangPage
        },
        {
            path: '/beam-packages',
            name: 'beam-packages',
            component: BEAMPackagesPage
        }
    ]
})

let app = createApp(App)
app.use(router)
app.mount('#app')
