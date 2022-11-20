import Vue from 'vue'
import Router from 'vue-router'
import DaVincisLock from '@/components/DaVincisLock'
import BachelorsOfPisa from '@/components/BachelorsOfPisa'
import CleverMerchant from '@/components/CleverMerchant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/daVincisLock',
      name: 'DaVincisLock',
      component: DaVincisLock
    },
    {
      path: '/bachelorsOfPisa',
      name: 'BachelorsOfPisa',
      component: BachelorsOfPisa
    },
    {
      path: '/cleverMerchant',
      name: 'CleverMerchant',
      component: CleverMerchant
    }
  ]
})
