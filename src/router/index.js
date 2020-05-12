import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '@/components/login/AppLogin'
import AppHome from '@/components/AppHome'
import AppWelcome from '@/components/AppWelcome'
import AppUsers from '@/components/users/AppUsers'
import AppRights from '@/components/rights/AppRights'
import AppRoles from '@/components/rights/AppRoles'
import AppGoodsList from '@/components/goods/AppGoodsList'
import AppGoodsAdd from '@/components/goods/AppGoodsAdd'
import AppGoodsEdit from '@/components/goods/AppGoodsEdit'
import AppGoodsParams from '@/components/goods/AppGoodsParams'
import AppGoodsCategories from '@/components/goods/AppGoodsCategories'
import AppGoodsOrders from '@/components/orders/AppGoodsOrders'
import AppReports from '@/components/reports/AppReports'

// 单独引用 message
import { Message } from 'element-ui'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: AppHome,
      children: [
        {
          path: '/',
          name: 'welcome',
          component: AppWelcome
        },
        {
          path: '/users',
          name: 'users',
          component: AppUsers
        },
        {
          path: '/rights',
          name: 'rights',
          component: AppRights
        },
        {
          path: '/roles',
          name: 'roles',
          component: AppRoles
        },
        {
          path: '/goods',
          name: 'goods',
          component: AppGoodsList
        },
        {
          path: '/goodsadd',
          name: 'goodsadd',
          component: AppGoodsAdd
        },
        {
          path: '/goodsedit/:id',
          name: 'goodsedit',
          component: AppGoodsEdit
        },
        {
          path: '/categories',
          name: 'categories',
          component: AppGoodsCategories

        },
        {
          path: '/params',
          name: 'params',
          component: AppGoodsParams
        },
        {
          path: '/orders',
          name: 'orders',
          component: AppGoodsOrders
        },
        {
          path: '/reports',
          name: 'reports',
          component: AppReports
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    },
  ]
})

// 添加路由守卫（前置拦截器） （只要页面跳转）
router.beforeEach((to, from, next) => {
  if(to.name === 'login'){
    next() // 指定后续工作
  }else{
    // 其它情况 必须验证token
    let token = localStorage.getItem('token')
    if(!token){ // trur 没有登陆 token = null
      // this.$message.warning('请先登录') 
      Message.warning('请先登录') 
      // 跳转登录
      router.push({
        name: 'login'
      })
      //this.$message.warning('请先登录')
         
    }
  }
  next()
})


export default router
