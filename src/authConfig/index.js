import investor from './investor.js'
import notLogin from './notLogin.js'
import provider from './provider.js'
import Vue from 'vue'
export { investor, notLogin, provider }

export async function setCurrentUserToGlodal() {
  // 读取当前角色名，初始化角色权限配置到全局
  var userinfo = await Vue.prototype.$vlf.getItem('userinfo')
  var roleName = userinfo && userinfo.role
  console.log('userinfo.role', roleName)
  var userMap = {
    investor: investor,
    provider: provider
  }
  if (roleName) {
    console.log('权限设置为了', roleName)
    window.authConfig = userMap[roleName]
  } else {
    window.authConfig = notLogin
  }
}

export async function setRole(roleName) {
  await Vue.prototype.$vlf.setItem('userinfo', { role: roleName })
  await setCurrentUserToGlodal()
}
