function getRouter() {
  return import('@/router').then((res) => res.default)
}

export function goAccount() {
  getRouter().then((router) => {
    router.push('/accounts')
  })
}
