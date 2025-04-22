export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo("/account/login");
  }
})

const isAuthenticated = (): boolean => {
  return false;
}

