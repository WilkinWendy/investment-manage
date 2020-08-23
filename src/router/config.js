import {
  LayoutAuth,
  LayoutDefault,
  LayoutChat,
  RouteWrapper
} from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: ''
    },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        meta: {
          title: 'Welcome',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/pages/welcome/Index.vue')
      },
      {
        path: '/portfolios',
        name: 'Portfolios',
        meta: {
          title: 'Portfolios',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/pages/portfolio/Index.vue')
      },
      {
        path: '/strategies',
        name: 'Strategies',
        meta: {
          title: 'Strategies',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/pages/strategy/Index.vue')
      },
      {
        path: '/algorithms',
        name: 'Agorithms',
        meta: {
          title: 'Agorithms',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/pages/algorithm/Index.vue')
      },
      {
        path: '/accounts',
        name: 'accounts',
        meta: {
          title: 'My Accounts',
          group: 'apps',
          icon: 'mdi-view-dashboard'
        },
        component: () => import('@/views/pages/welcome/Index.vue')
      }
    ]
  }
]
