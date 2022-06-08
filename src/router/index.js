import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/manage',
    name: 'Customer',
    meta: { title: '顾客中心', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/customer/manage',
        name: 'CustomerManage',
        component: () => import('@/views/customer/customerManage/index'),
        meta: { title: '顾客管理' }
      },
      {
        path: '/customer/group/manage',
        name: 'CustomerGroupManage',
        component: () => import('@/views/customer/customerGroupManage/index'),
        meta: { title: '客群管理' }
      },
      {
        path: '/customer/tag/manage',
        name: 'CustomerTagManage',
        component: () => import('@/views/customer/customerTagManage/index'),
        meta: { title: '标签管理' }
      },
      {
        path: '/customer/tag/type/manage',
        name: 'CustomerTagTypeManage',
        component: () => import('@/views/customer/customerTagTypeManage/index'),
        meta: { title: '标签分类管理' }
      }
    ]
  },
  {
    path: '/marketing',
    component: Layout,
    name: 'Marketing',
    children: [{
      path: '/marketing/center',
      name: 'MarketingCenter',
      component: () => import('@/views/marketing/index'),
      meta: { title: '营销中心', icon: 'dashboard' }
    }]
  },
  {
    path: '/equity',
    component: Layout,
    name: 'Equity',
    children: [{
      path: '/equity/center',
      name: 'EquityCenter',
      component: () => import('@/views/equity/index'),
      meta: { title: '权益中心', icon: 'dashboard' }
    }]
  },
  {
    path: '/data',
    component: Layout,
    name: 'Data',
    children: [{
      path: '/data/center',
      name: 'DataCenter',
      component: () => import('@/views/data/index'),
      meta: { title: '数据分析', icon: 'dashboard' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
