import investor from './investor.js'
import notLogin from './notLogin.js'
import provider from './provider.js'

export { investor, notLogin, provider }

export function setCurrentUserToGlodal(roleName) {
  var userMap = {
    investor: investor,
    provider: provider
  }
  if (roleName) {
    window.authConfig = userMap[roleName]
  } else {
    window.authConfig = notLogin
  }
}
