(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"static/js/"+({}[e]||e)+"."+{"chunk-4b30a11e":"64417d0d","chunk-792ae9db":"015a8e0e","chunk-7a427a48":"094c5d68","chunk-acc41928":"98200eba","chunk-0d8fc9f6":"e5c9d9e4","chunk-2d0da316":"4915f56f","chunk-2d0df0b5":"b17f4793","chunk-1f40bf3a":"70d562ae","chunk-2d0ac99c":"8779f13a","chunk-2d0d6b03":"3a3bb64b","chunk-60617dcf":"1a9ec3b1","chunk-c6b5ce94":"12faf75d","chunk-bc477bf6":"3820f4a3"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4b30a11e":1,"chunk-792ae9db":1,"chunk-7a427a48":1,"chunk-acc41928":1,"chunk-0d8fc9f6":1,"chunk-1f40bf3a":1,"chunk-60617dcf":1,"chunk-c6b5ce94":1,"chunk-bc477bf6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-4b30a11e":"96c9f575","chunk-792ae9db":"cc697b87","chunk-7a427a48":"f650315d","chunk-acc41928":"eba13cad","chunk-0d8fc9f6":"883a4e61","chunk-2d0da316":"31d6cfe0","chunk-2d0df0b5":"31d6cfe0","chunk-1f40bf3a":"4d383424","chunk-2d0ac99c":"31d6cfe0","chunk-2d0d6b03":"31d6cfe0","chunk-60617dcf":"4d383424","chunk-c6b5ce94":"f444c2a5","chunk-bc477bf6":"480e224b"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e6e":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));n("96cf");var a=n("1da1"),r={account:!0,"account-developer":!1,"account-investor":!0,profile:!0,logout:!0,login:!1,home:!0,ranking:!0,"portfolio-list_released":!0,"portfolio-detail":!0,"portfolio-fee":!0,"portfolio-buy":!0,"strategy-list_released":!0,"strategy-detail":!0,"strategy-fee":!0,"strategy-buy":!0,"algorithm-list_released":!0,"algorithm-detail":!0,"algorithm-fee":!0,"algorithm-buy":!0,"algorithm-release_strategy":!0,"development-list_to_manage":!1,"development-edit":!1,"development-release_algorithm":!1,"development-release_strategy":!1},o={account:!1,"account-developer":!1,"account-investor":!1,profile:!1,logout:!1,login:!0,home:!0,ranking:!0,"portfolio-list_released":!0,"portfolio-detail":!0,"portfolio-fee":!0,"portfolio-buy":!1,"strategy-list_released":!0,"strategy-detail":!0,"strategy-fee":!0,"strategy-buy":!1,"algorithm-list_released":!0,"algorithm-detail":!0,"algorithm-fee":!0,"algorithm-buy":!1,"algorithm-release_strategy":!1,"development-list_to_manage":!1,"development-edit":!1,"development-release_algorithm":!1,"development-release_strategy":!1},i={account:!0,"account-developer":!0,"account-investor":!1,profile:!0,logout:!0,login:!1,home:!0,ranking:!0,"portfolio-list_released":!0,"portfolio-detail":!0,"portfolio-fee":!0,"portfolio-buy":!1,"strategy-list_released":!0,"strategy-detail":!0,"strategy-fee":!0,"strategy-buy":!1,"algorithm-list_released":!0,"algorithm-detail":!0,"algorithm-fee":!0,"algorithm-buy":!1,"algorithm-release_strategy":!1,"development-list_to_manage":!0,"development-edit":!0,"development-release_algorithm":!0,"development-release_strategy":!0},c=n("a026");function s(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].prototype.$vlf.getItem("userinfo");case 2:t=e.sent,n=t&&t.role,console.log("userinfo.role",n),a={investor:r,provider:i},n?(console.log("权限设置为了",n),window.authConfig=a[n]):window.authConfig=o;case 7:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].prototype.$vlf.setItem("userinfo",{role:t});case 2:return e.next=4,s();case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},"2a74":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var a=n("bba4"),r=n.n(a),o=n("d307"),i={};o.keys().forEach((function(e){if("./index.js"!==e){var t=r()(e.replace(/(\.\/|\.js)/g,""));i[t]=o(e)["default"]}})),t["default"]=i},"2d76":function(e,t,n){"use strict";var a=n("8728"),r=n.n(a);r.a},"2f93":function(e,t,n){"use strict";var a=n("e070"),r=n.n(a);r.a},3265:function(e,t,n){},"49cd":function(e,t,n){},"4a1e":function(e,t,n){e.exports=n.p+"static/img/man_4.0e5e3823.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var a=n("1da1"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),o=n("a18c"),i=n("2f62"),c=n("2a74"),s=n("bfa9"),l=new s["a"]({key:"vma",storage:window.localStorage,modules:["app"]});r["a"].use(i["a"]);var u=new i["a"].Store({modules:c["default"],plugins:[l.plugin]}),d=u,p=n("9483");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("f309");r["a"].use(f["a"]);var m=new f["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),h=n("00d0"),v=n.n(h),g=n("a002"),b=n.n(g);console.log("vlf"),r["a"].use(v.a,b.a);n("ad18");var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:!0}},[n("router-view"),n("v-navigation-drawer",{staticClass:"setting-drawer",attrs:{temporary:"",right:"","hide-overlay":"",fixed:""},model:{value:e.rightDrawer,callback:function(t){e.rightDrawer=t},expression:"rightDrawer"}},[n("theme-settings")],1)],1)},y=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"themeSetting"},[n("v-toolbar",{attrs:{color:"primary"}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v("Theme Settings")])],1),n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-subheader",{staticClass:"px-1 my-2"},[e._v("Color Option")]),n("div",{staticClass:"color-option"},[n("v-layout",{attrs:{wrap:""}},e._l(e.themeColorOptions,(function(t,a){return n("label",{key:a,staticClass:"color-option--label flex xs6 pa-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.themeColor,expression:"themeColor"}],attrs:{type:"radio",name:"color"},domProps:{value:t.key,checked:e._q(e.themeColor,t.key)},on:{change:function(n){e.themeColor=t.key}}}),n("span",{staticClass:"color-option--item bg"},[n("span",{staticClass:"overlay"},[n("span",{staticClass:"material-icons"},[e._v("check")])]),n("span",{staticClass:"color-option--item--header sideNav",class:t.value.sideNav}),n("span",{staticClass:"color-option--item--header mainNav",class:t.value.mainNav}),n("span",{staticClass:"sideMenu",class:t.value.sideMenu})])])})),0)],1),n("div",{staticClass:"theme-options"},[n("v-subheader",{staticClass:"px-1 my-2"},[e._v("Sidebar Option")]),n("v-divider"),n("div",{staticClass:"my-3"},[n("v-btn-toggle",{model:{value:e.sideBarOption,callback:function(t){e.sideBarOption=t},expression:"sideBarOption"}},[n("v-btn",{attrs:{text:"",value:"dark"}},[e._v("Dark")]),n("v-btn",{attrs:{text:"",value:"light"}},[e._v("Light")])],1)],1)],1)],1)],1)],1)],1)},_=[],C=n("c0a4"),x=n.n(C),V={data:function(){return{themeColor:"indigo",sideBarOption:"light",colors:x.a}},computed:{themeColorOptions:function(){return[{key:"blue",value:{sideNav:"blue",mainNav:"blue",sideMenu:"white"}},{key:"teal",value:{sideNav:"teal",mainNav:"teal",sideMenu:"white"}},{key:"red",value:{sideNav:"red",mainNav:"red",sideMenu:"white"}},{key:"orange",value:{sideNav:"orange",mainNav:"orange",sideMenu:"white"}},{key:"purple",value:{sideNav:"purple",mainNav:"purple",sideMenu:"white"}},{key:"indigo",value:{sideNav:"indigo",mainNav:"indigo",sideMenu:"white"}},{key:"cyan",value:{sideNav:"cyan",mainNav:"cyan",sideMenu:"white"}},{key:"pink",value:{sideNav:"pink",mainNav:"pink",sideMenu:"white"}},{key:"green",value:{sideNav:"green",mainNav:"green",sideMenu:"white"}}]}},watch:{themeColor:{handler:function(e){console.log(x.a),this.$vuetify.theme.themes.light.primary=this.colors[e].base},immediate:!0},sideBarOption:{handler:function(e){this.$vuetify.theme.dark="dark"===e},immediate:!0},updateTheme:function(){}}},N=V,O=(n("e4aa"),n("2877")),L=n("6544"),S=n.n(L),j=n("8336"),F=n("a609"),T=n("a523"),E=n("ce7e"),A=n("0e8f"),M=n("a722"),D=n("e0c7"),P=n("71d9"),$=n("2a7f"),B=Object(O["a"])(N,w,_,!1,null,"54473209",null),I=B.exports;S()(B,{VBtn:j["a"],VBtnToggle:F["a"],VContainer:T["a"],VDivider:E["a"],VFlex:A["a"],VLayout:M["a"],VSubheader:D["a"],VToolbar:P["a"],VToolbarTitle:$["b"]});var R={components:{ThemeSettings:I},data:function(){return{rightDrawer:!1}},mounted:function(){},created:function(){},methods:{openThemeSettings:function(){this.$vuetify.goTo(0),this.rightDrawer=!this.rightDrawer}},computed:{}},K=R,q=(n("748a"),n("7496")),z=n("f774"),H=Object(O["a"])(K,k,y,!1,null,"25c0557a",null),J=H.exports;S()(H,{VApp:q["a"],VNavigationDrawer:z["a"]});n("5363");var U=n("8f94"),Q=n.n(U),W=(n("a7be"),n("1e6e"));function Y(e){return e&&window.authConfig[e]}function Z(e){console.log("install permission"),e.prototype.hasPermission=Y,e.directive("permission",{inserted:function(e,t){var n=t.value;Y(n)?console.log("".concat(n),!0):e.remove()}})}function G(e){e.use(Z)}function X(){return ee.apply(this,arguments)}function ee(){return ee=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(W["a"])();case 2:t=new r["a"]({router:o["default"],store:d,vuetify:m,render:function(e){return e(J)}}),t.$mount("#app");case 4:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}r["a"].use(G),r["a"].use(Q.a),r["a"].config.productionTip=!1,X()},"6dec":function(e,t,n){},"748a":function(e,t,n){"use strict";var a=n("49cd"),r=n.n(a);r.a},8728:function(e,t,n){},"8a47":function(e,t,n){"use strict";var a=n("3265"),r=n.n(a);r.a},a18c:function(e,t,n){"use strict";n.r(t);n("99af");var a=n("a026"),r=n("8c4f"),o=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"layout-auth primary"},[n("v-main",[n("router-view",{key:e.$route.path})],1)],1)}),i=[],c={data:function(){return{}},methods:{}},s=c,l=(n("8a47"),n("2877")),u=n("6544"),d=n.n(u),p=n("7496"),f=n("f6c4"),m=Object(l["a"])(s,o,i,!1,null,"11bab45c",null),h=m.exports;d()(m,{VApp:p["a"],VMain:f["a"]});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app dashboard",attrs:{id:"inspire"}},[n("app-toolbar",{staticClass:"app--toolbar",on:{"side-icon-click":e.handleDrawerVisiable}}),n("v-main",[n("div",{staticClass:"page-wrapper"},[n("router-view")],1),n("v-footer",{staticClass:"pa-3 app--footer",attrs:{height:"auto"}},[n("span",[e._v(e._s(e.roleTip))]),n("v-spacer"),n("span",[e._v("QuantFen © "+e._s((new Date).getFullYear()))])],1)],1)],1)},g=[],b=(n("96cf"),n("1da1")),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[a("img",{staticClass:"logo",attrs:{src:n("e6e0")}}),a("v-tabs",e._l(e.computeMenu,(function(t,n){return a("v-tab",{directives:[{name:"permission",rawName:"v-permission",value:t.meta.permissionKey,expression:"item.meta.permissionKey"}],key:n,on:{click:function(n){return e.$router.push(t.path)}}},[e._v(" "+e._s(t.meta.title)+" ")])})),1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.handleFullScreen()}}},[a("v-icon",[e._v("fullscreen")])],1),a("v-menu",{staticClass:"elelvation-1",attrs:{"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{slot:"activator",icon:"",text:""},slot:"activator"},n),[a("v-badge",{attrs:{color:"red",overlap:""}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[e._v("3")]),a("v-icon",{attrs:{medium:""}},[e._v("notifications")])],1)],1)]}}])},[a("notification-list")],1),a("v-menu",{attrs:{"offset-y":"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{slot:"activator",icon:"",large:"",text:""},slot:"activator"},r),[a("v-avatar",{attrs:{size:"30px"}},[a("img",{attrs:{src:n("4a1e"),alt:"Michael Wang"}})])],1)]}}])},[a("v-list",{staticClass:"pa-0"},e._l(e.profileMenus,(function(t,n){return a("v-list-item",{directives:[{name:"permission",rawName:"v-permission",value:t.permisstionKey,expression:"item.permisstionKey"}],key:n,attrs:{to:t.href?null:{name:t.name},href:t.href,ripple:"ripple",disabled:t.disabled,target:t.target,rel:"noopener"},on:{click:t.click}},[t.icon?a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1):e._e(),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)],1)},y=[],w=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{tile:""}},[n("v-card-title",[e._v(" Notification ")]),n("v-divider"),n("v-card-text",{staticClass:"pa-0"},[n("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[e._l(e.items,(function(t,a){return[t.header?n("v-subheader",{key:t.header},[e._v(" "+e._s(t.header)+" ")]):t.divider?n("v-divider",{key:a}):n("v-list-item",{key:t.title,on:{click:e.handleClick}},[n("v-list-item-avatar",{attrs:{color:t.color}},[n("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.title)}})],1),n("v-list-item-action",{staticClass:"caption"},[e._v(" "+e._s(t.timeLabel)+" ")])],1)]}))],2),n("v-divider"),n("v-btn",{staticClass:"ma-0",attrs:{block:"",text:""}},[e._v("All")]),n("v-divider")],1)],1)}),_=[],C=[{title:"New user registered",color:"light-green",icon:"account_circle",timeLabel:"Just now"},{divider:!0,inset:!0},{title:"New order received",color:"light-blue",icon:"shopping_cart",timeLabel:"2 min ago"},{divider:!0,inset:!0},{title:"New payment made",color:"cyan",icon:"payment",timeLabel:"24 min ago"},{divider:!0,inset:!0},{title:"New message from Michael",color:"red",icon:"email",timeLabel:"1 hour ago"}],x={data:function(){return{items:C}},methods:{handleClick:function(e){console.log(e)}}},V=x,N=n("8336"),O=n("b0af"),L=n("99d9"),S=n("ce7e"),j=n("132d"),F=n("8860"),T=n("da13"),E=n("1800"),A=n("8270"),M=n("5d23"),D=n("e0c7"),P=Object(l["a"])(V,w,_,!1,null,null,null),$=P.exports;function B(){return Promise.resolve().then(n.bind(null,"a18c")).then((function(e){return e["default"]}))}function I(){B().then((function(e){e.push("/accounts")}))}d()(P,{VBtn:N["a"],VCard:O["a"],VCardText:L["b"],VCardTitle:L["c"],VDivider:S["a"],VIcon:j["a"],VList:F["a"],VListItem:T["a"],VListItemAction:E["a"],VListItemAvatar:A["a"],VListItemContent:M["a"],VListItemSubtitle:M["b"],VSubheader:D["a"]});var R=n("1e6e"),K=(n("ac1f"),n("5319"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e[Math.floor(Math.random()*e.length)]}),q=function(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},z=function(){var e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,a=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?a.call(e):n.call(t)},H={randomElement:K,toggleFullScreen:z,kebab:q},J={name:"AppToolbar",components:{NotificationList:$},data:function(){return{profileMenus:[{icon:"settings",href:"#",title:"Account",click:this.handleAccounts,permisstionKey:"account"},{icon:"fullscreen_exit",href:"#",title:"Logout",click:this.handleLogut,permisstionKey:"logout"},{icon:"fullscreen_exit",href:"#",title:"Login",click:this.handleLogin,permisstionKey:"login"}]}},computed:{toolbarColor:function(){return this.$vuetify.options.extra.mainNav},computeMenu:function(){return he[0].children.filter((function(e){return!e.meta.hidden}))}},methods:{handleDrawerToggle:function(){this.$emit("side-icon-click")},handleFullScreen:function(){H.toggleFullScreen()},handleLogut:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(R["b"])("");case 2:e.$router.push("/auth/login");case 3:case"end":return t.stop()}}),t)})))()},handleLogin:function(){this.$router.push("/auth/login")},handleAccounts:function(){I()}},created:function(){}},U=J,Q=(n("2f93"),n("40dc")),W=n("8212"),Y=n("4ca6"),Z=n("e449"),G=n("2fa4"),X=n("71a3"),ee=n("fe57"),te=n("2a7f"),ne=Object(l["a"])(U,k,y,!1,null,"eef2203a",null),ae=ne.exports;d()(ne,{VAppBar:Q["a"],VAvatar:W["a"],VBadge:Y["a"],VBtn:N["a"],VIcon:j["a"],VList:F["a"],VListItem:T["a"],VListItemAction:E["a"],VListItemContent:M["a"],VListItemTitle:M["c"],VMenu:Z["a"],VSpacer:G["a"],VTab:X["a"],VTabs:ee["a"],VToolbarItems:te["a"]});var re={name:"LayoutDefault",components:{AppToolbar:ae},data:function(){return{showDrawer:!0,roleTip:""}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$vlf.getItem("userinfo");case 2:n=t.sent,e.roleTip=n.role;case 4:case"end":return t.stop()}}),t)})))()},methods:{handleDrawerVisiable:function(){this.showDrawer=!this.showDrawer}},created:function(){}},oe=re,ie=(n("2d76"),n("553a")),ce=Object(l["a"])(oe,v,g,!1,null,"2ad3d150",null),se=ce.exports;d()(ce,{VApp:p["a"],VFooter:ie["a"],VMain:f["a"],VSpacer:G["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},ue=[],de={name:"RouteWrapper"},pe=de,fe=Object(l["a"])(pe,le,ue,!1,null,null,null),me=(fe.exports,[{path:"*",component:function(){return n.e("chunk-792ae9db").then(n.bind(null,"d31a"))}},{path:"/auth",component:h,meta:{title:"Login"},redirect:"/auth/login",hidden:!0,children:[{path:"login",name:"login",meta:{title:"Login"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-c6b5ce94")]).then(n.bind(null,"5326"))}}]},{path:"/404",name:"404",meta:{title:"Not Found"},component:function(){return n.e("chunk-792ae9db").then(n.bind(null,"d31a"))}},{path:"/500",name:"500",meta:{title:"Server Error"},component:function(){return n.e("chunk-bc477bf6").then(n.bind(null,"2609"))}}]),he=[{path:"/",component:se,meta:{title:"Home",group:"apps",icon:""},redirect:"/home",children:[{path:"/home",name:"Home",meta:{title:"Home",group:"apps",icon:"mdi-view-dashboard",permissionKey:"home"},component:function(){return n.e("chunk-4b30a11e").then(n.bind(null,"1ee1"))}},{path:"/rankings",name:"Ranking",meta:{title:"Ranking",group:"apps",icon:"mdi-view-dashboard",permissionKey:"ranking"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-0d8fc9f6"),n.e("chunk-2d0df0b5")]).then(n.bind(null,"87dd"))}},{path:"/portfolios",name:"Portfolios",meta:{title:"Portfolios",group:"apps",icon:"mdi-view-dashboard",permissionKey:"portfolio-list_released"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-60617dcf")]).then(n.bind(null,"f111"))}},{path:"/strategies",name:"Strategies",meta:{title:"Strategies",group:"apps",icon:"mdi-view-dashboard",permissionKey:"strategy-list_released"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-1f40bf3a"),n.e("chunk-2d0d6b03")]).then(n.bind(null,"742b"))}},{path:"/algorithms",name:"Agorithms",meta:{title:"Agorithms",group:"apps",icon:"mdi-view-dashboard",permissionKey:"algorithm-list_released"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-1f40bf3a"),n.e("chunk-2d0ac99c")]).then(n.bind(null,"19db"))}},{path:"/develop",name:"Develop",meta:{title:"Develop",group:"apps",icon:"mdi-view-dashboard",permissionKey:"development-list_to_manage"},component:function(){return n.e("chunk-7a427a48").then(n.bind(null,"dc87"))}},{path:"/accounts",name:"accounts",meta:{hidden:!0,title:"My Accounts",group:"apps",icon:"mdi-view-dashboard"},component:function(){return Promise.all([n.e("chunk-acc41928"),n.e("chunk-0d8fc9f6"),n.e("chunk-2d0da316")]).then(n.bind(null,"6b0d"))}}]}],ve=n("323e"),ge=n.n(ve),be=(n("a5d8"),me.concat(he));a["a"].use(r["a"]);var ke=new r["a"]({mode:"hash",linkActiveClass:"active",routes:be});ke.beforeEach((function(e,t,n){ge.a.start(),n()})),ke.afterEach((function(){ge.a.done()}));t["default"]=ke},ad18:function(e,t,n){},d307:function(e,t,n){var a={"./app.js":"d9cd","./index.js":"2a74"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="d307"},d9cd:function(e,t,n){"use strict";n.r(t);var a=n("c0a4"),r=n.n(a),o={mode:"light",themeColor:"pink"},i={getThemeColor:function(e){return r.a[e.themeColor].base}},c={},s={setThemeColor:function(e,t){e.themeColor=t}};t["default"]={namespace:!0,state:o,getters:i,actions:c,mutations:s}},e070:function(e,t,n){},e4aa:function(e,t,n){"use strict";var a=n("6dec"),r=n.n(a);r.a},e6e0:function(e,t,n){e.exports=n.p+"static/img/QuantFen01.8708adf0.png"}});
//# sourceMappingURL=app.abc456cf.js.map