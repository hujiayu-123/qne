import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home',
        component: () => import(/* webpackChunkName: "index" */ '../views/reception/index.vue'),
        children: [
            {
                path: 'home',
                meta: {
                    title: '去哪儿-首页'
                },
                component: () => import(/* webpackChunkName: "home" */ '../views/reception/home.vue')
            },
            {
                path: 'sales',
                meta: {
                    title: '去哪儿-去旅行'
                },
                component: () => import(/* webpackChunkName: "sales" */ '../views/reception/sales.vue')
            },
            {
                path: 'detail',
                meta: {
                    title: '去哪儿-详情'
                },
                component: () => import(/* webpackChunkName: "detail" */ '../views/reception/detail.vue')
            },
            {
                path: 'userInfo',
                redirect: '/userInfo/user',
                component: () => import(/* webpackChunkName: "userInfo" */ '../views/reception/userInfo/index.vue'),
                children: [
                    {
                        path: 'user',
                        meta: {
                            title: '去哪儿-用户中心-我的信息'
                        },
                        component: () => import(/* webpackChunkName: "user" */ '../views/reception/userInfo/user.vue')
                    },
                    {
                        path: 'avatar',
                        meta: {
                            title: '去哪儿-用户中心-我的头像'
                        },
                        component: () => import(/* webpackChunkName: "avatar" */ '../views/reception/userInfo/avatar.vue')
                    },
                    {
                        path: 'security',
                        meta: {
                            title: '去哪儿-用户中心-账号安全'
                        },
                        component: () => import(/* webpackChunkName: "security" */ '../views/reception/userInfo/security.vue')
                    },
                    {
                        path: 'sns',
                        meta: {
                            title: '去哪儿-用户中心-绑定设置'
                        },
                        component: () => import(/* webpackChunkName: "sns" */ '../views/reception/userInfo/sns.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/orderCenter',
        name: 'orderCenter',
        redirect: '/orderCenter/order',
        component: () => import(/* webpackChunkName: "orderCenter" */ '../views/orderCenter/index.vue'),
        children: [
            {
                path: 'order',
                meta: {
                    title: '订单中心-我的订单'
                },
                component: () => import(/* webpackChunkName: "order" */ '../views/orderCenter/order.vue')
            },
            {
                path: 'footprint',
                meta: {
                    title: '订单中心-我的足迹'
                },
                component: () => import(/* webpackChunkName: "footprint" */ '../views/orderCenter/footprint.vue')
            },
            {
                path: 'collection',
                meta: {
                    title: '订单中心-我的收藏'
                },
                component: () => import(/* webpackChunkName: "collection" */ '../views/orderCenter/collection.vue')
            },
            {
                path: 'evaluate',
                meta: {
                    title: '订单中心-我的点评'
                },
                component: () => import(/* webpackChunkName: "evaluate" */ '../views/orderCenter/evaluate.vue')
            },
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/home',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/index.vue'),
        children: [
            {
                path: 'home',
                meta: {
                    title: '管理中心'
                },
                component: () => import(/* webpackChunkName: "home" */ '../views/admin/home.vue')
            },
            {
                path: 'release',
                meta: {
                    title: '管理中心-发布'
                },
                component: () => import(/* webpackChunkName: "release" */ '../views/admin/release.vue')
            },
            {
                path: 'travelList',
                meta: {
                    title: '管理中心-旅游列表'
                },
                component: () => import(/* webpackChunkName: "travelList" */ '../views/admin/travelList.vue')
            },
            {
                path: 'userList',
                meta: {
                    title: '管理中心-用户列表'
                },
                component: () => import(/* webpackChunkName: "userList" */ '../views/admin/userList.vue')
            }
        ]
    },
    {
        path: '/visualizationDetail',
        name: 'visualizationDetail',
        meta: {
            title: '去哪儿-可视化展示'
        },
        component: () => import(/* webpackChunkName: "visualizationDetail" */ '../views/admin/visualizationDetail.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '去哪儿-登录'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '去哪儿-注册'
        },
        component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
    },
    {
        path: '/reset',
        name: 'reset',
        meta: {
            title: '去哪儿-重置'
        },
        component: () => import(/* webpackChunkName: "reset" */ '../views/reset.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default router