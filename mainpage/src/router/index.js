import Vue from 'vue'
import VueRouter from 'vue-router'
import WarningPage from '@/views/warningPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/warningPage',
    component: WarningPage
  }
]

const router = new VueRouter({
  routes
})

export default router
