// export default defineNuxtRouteMiddleware((to) => {
//   if (to.path !== "/") {
//     setPageLayout("default");
//   } else setPageLayout("main");
// });

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return
  }

  return navigateTo('/')
})
