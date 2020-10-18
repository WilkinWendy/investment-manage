function hasPermission(permissionKey) {
  return permissionKey && window.authConfig[permissionKey]
}

export default function install(Vue) {
  console.log('install permission')
  Vue.prototype.hasPermission = hasPermission
  Vue.directive('permission', {
    inserted: function(el, binding) {
      var permissionKey = binding.value
      // 只有key存在且配置为true才认为有权限
      if (hasPermission(permissionKey)) {
        console.log(`${permissionKey}`, true)
        //do nothing
      } else {
        el.remove()
      }
    }
  })
}
