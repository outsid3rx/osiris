export const logOutAction = () => {
  localStorage.removeItem('auth-token')
  window.location.reload()
}
