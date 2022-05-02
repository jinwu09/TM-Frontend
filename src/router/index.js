import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PosVue from '../views/Pos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{
        needAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        needAuth: false
      }
    },
     {
      path: '/pos',
      name: 'pos',
      component: PosVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        needAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(store.isAuthenticated && !to.meta.needAuth){
    next({name: 'login'})
  }else if(!store.isAuthenticated && to.meta.needAuth){
    next({name: 'pos'})
  }else{
    next()
  }
})

export default router
