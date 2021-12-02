import Vue from 'vue'
import VueRouter from 'vue-router'
import WarningPage from '@/views/warningPage'
import EfficiencyPage from '../views/transformEfficiencyPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/warningPage',
    component: WarningPage
  },
  {
    path: '/transformEfficiencyPage',
    component: EfficiencyPage
  }
]

const router = new VueRouter({
  routes
})

export default router
