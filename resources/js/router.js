import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: '/rns/',
    routes: [
        {
            path: '/main',
            name: 'main',
            component: () => import(/*webpackChunkName:"Main"*/'./components/Main'),
        },
        {
            path: '/programmer',
            name: 'programmer',
            component: () => import(/*webpackChunkName:"Programmer"*/'./components/Programmer'),
        },
        {
            path: '/system',
            name: 'system',
            component: () => import(/*webpackChunkName:"SystemName"*/'./components/SystemName'),
        },
        {
            path: '/requestor',
            name: 'requestor',
            component: () => import(/*webpackChunkName:"Requestor"*/'./components/Requestor'),
        },
        {
            path: '/type',
            name: 'type',
            component: () => import(/*webpackChunkName:"Type"*/'./components/Type'),
        },
        {
            path: '/kind',
            name: 'kind',
            component: () => import(/*webpackChunkName:"Kind"*/'./components/Kind'),
        },
        {
            path: '/error/:status_code?',
            name: 'error',
            component: () => import(/*webpackChunkName:"Error"*/'./template/Error'),
        },
    ],
});
