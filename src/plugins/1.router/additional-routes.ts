import type { RouteRecordRaw } from 'vue-router/auto'
// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    name: 'index',
    redirect: (to) => {
      // TODO: Get type from backend
      const userData = useCookie<Record<string, unknown> | null | undefined>(
        'userData'
      )
      const userRole = userData.value?.role

      if (userRole === 'DOCTOR') return { name: 'patients' }
      if (userRole === 'PSYCHOLOGIST') return { name: 'patients' }
      if (userRole === 'ADMIN') return { name: 'patients' }

      return { name: 'login', query: to.query }
    },
  },
  {
    path: '/pages/user-profile',
    name: 'pages-user-profile',
    redirect: () => ({
      name: 'pages-user-profile-tab',
      params: { tab: 'profile' },
    }),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    redirect: () => ({
      name: 'pages-account-settings-tab',
      params: { tab: 'account' },
    }),
  },
]

export const routes: RouteRecordRaw[] = [
  // Email filter
  {
    path: '/apps/email/filter/:filter',
    name: 'apps-email-filter',
    component: () => import('@/pages/apps/email/index.vue'),
    meta: {
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },

  // Email label
  {
    path: '/apps/email/label/:label',
    name: 'apps-email-label',
    component: () => import('@/pages/apps/email/index.vue'),
    meta: {
      // contentClass: 'email-application',
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },
  },

  {
    path: '/dashboards/logistics',
    name: 'dashboards-logistics',
    component: () => import('@/pages/apps/logistics/dashboard.vue'),
  },
  {
    path: '/dashboards/academy',
    name: 'dashboards-academy',
    component: () => import('@/pages/apps/academy/dashboard.vue'),
  },
  {
    path: '/apps/ecommerce/dashboard',
    name: 'apps-ecommerce-dashboard',
    component: () => import('@/pages/dashboards/ecommerce.vue'),
  },
]
