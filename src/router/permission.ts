import type { Router } from 'vue-router'

async function getToken() {
  return 'new token'
}

export function setupPageGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = 'token'
    if (!token) {
      try {
        const newToken = await getToken()
        // update token
        if (to.path === '/500') {
          next({ name: 'root' })
        }
        else {
          next()
        }
      }
      catch (error) {
        // error redirect to 500 page
        if (to.path !== '/500') {
          next({ name: '500' })
        }
        else {
          next()
        }
      }
    }
    else {
      next()
    }
  })
}
