import Vue from 'vue'
import Router from 'vue-router'
import DaVincisLock from '@/components/DaVincisLock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/daVincisLock',
      name: 'DaVincisLock',
      component: DaVincisLock
    }
  ]
})
