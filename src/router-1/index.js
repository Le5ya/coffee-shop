import Vue from 'vue'
import VueRouter from 'vue-router'

import FirstView from '../views/FirstView'
import SecondView from '../views/SecondView'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: FirstView
        },
        {
            path: '/second',
            component: SecondView
        }
    ]
})

export default router