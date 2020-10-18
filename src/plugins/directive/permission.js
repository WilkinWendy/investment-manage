export function install(Vue) {
    Vue.directive('permission', {
        inserted: function (el, binding, vnode) {
            var permissionKey = binding.value
            if (!!window.authConfig[permissionKey]) {
                //do nothing
            }
            else {
                el.remove()
            }
        }
    })
}