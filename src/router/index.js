import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PosVue from '../views/Pos.vue'
import AddOrdersVue from '../views/pos/AddOrders.vue'
import InvoicesVue from '../views/pos/Invoices.vue'
import ManageCategoryVue from '../views/pos/ManageCategory.vue'
import ManageProductsVue from '../views/pos/ManageProducts.vue'
import ManageSettingsVue from '../views/pos/ManageSettings.vue'
import OngoingOrdersVue from '../views/pos/OngoingOrders.vue'
import PendingOrdersVue from '../views/pos/PendingOrders.vue'
import BusinessMenuVue from '../views/pos/BusinessMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Blank
    {
      path: '/',
      redirect: 'home'
    },
    //POS
    {
      path: '/pos',
      name: 'pos',
      component: PosVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/add-order',
      name: 'add-order',
      component: AddOrdersVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/invoices',
      name: 'invoices',
      component: InvoicesVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/manage-category',
      name: 'manage-category',
      component: ManageCategoryVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/manage-product',
      name: 'manage-product',
      component: ManageProductsVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/manage-settings',
      name: 'manage-settings',
      component: ManageSettingsVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/ongoing-order',
      name: 'ongoing-order',
      component: OngoingOrdersVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/pending-order',
      name: 'pending-order',
      component: PendingOrdersVue,
      meta:{
        needAuth:true
      }
    },
    {
      path: '/pos/front/:id',
      name: 'business-menu',
      component: BusinessMenuVue,
      meta:{
        needAuth:false
      }
    },
    

    



    //Authentications
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
