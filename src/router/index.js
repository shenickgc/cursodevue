import Vue from 'vue'
import VueRouter from 'vue-router'
import  main from '@/views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: main
  },
    {
    path: '/user-detail/:name',
    name: 'userdetail',
    component: () => import(/* webpackChunkName: "about" */ '@/views/userDetail.vue'),
    props:  true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '@/views/admin.vue'),
    meta: {
      requiresAuthAdmin: true,
    },
    props:  true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//interceptor de rutas
router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuthAdmin)
  let userHasLogin = true
  if (rutaProtegida &&  !userHasLogin) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
