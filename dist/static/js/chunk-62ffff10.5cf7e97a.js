(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ffff10"],{"2abd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"fill-height pa-0 chat-drawer-container",attrs:{fluid:""}},[t.$vuetify.breakpoint.smAndDown?[i("v-layout",{attrs:{column:""}},[t.showSidebar?i("v-flex",{staticClass:"white",attrs:{sm12:""}},[i("chat-contact-list")],1):t._e(),t.showWindow?i("v-flex",{attrs:{sm12:""}},[i("chat-contact-profile")],1):t._e()],1)]:[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"chat-contact--sidebar white",attrs:{cols:"3"}},[i("chat-contact-list")],1),i("v-col",{attrs:{cols:"9"}},[i("chat-contact-profile")],1)],1)]],2)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-contact"},[i("v-text-field",{attrs:{solo:"",clearable:"","prepend-inner-icon":"search","hide-details":"",label:"Search"},on:{input:t.handleSearch}}),i("vue-perfect-scrollbar",{staticClass:"chat-history--scrollbar"},[i("v-divider"),i("v-list",{staticClass:"chat-contact--list",attrs:{"two-line":""}},[i("v-subheader",[t._v("Contacts")]),t._l(t.users,(function(e,a){return[i("v-divider",{key:a}),i("v-list-item",{key:e.name+a,attrs:{to:t.contactRoute(e.uuid)}},[i("v-list-item-avatar",{attrs:{color:"primary"}},[e.avatar?i("img",{attrs:{src:e.avatar}}):i("span",{staticClass:"white--text headline"},[t._v(t._s(t.firstLetter(e.name)))])]),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))]),i("v-list-item-subtitle",[t._v(t._s(e.jobTitle))])],1),i("v-list-item-action",[i("v-circle",{attrs:{dot:"",small:"",color:t.userStatusColor(e)}})],1)],1)]}))],2)],1)],1)},r=[],o=(i("4de4"),i("b0c0"),i("2ca0"),i("c24f")),c=i("428a"),l=i("9d63"),u=i.n(l),d={components:{VuePerfectScrollbar:u.a,VCircle:c["a"]},data:function(){return{users:Object(o["b"])()}},computed:{},methods:{contactRoute:function(t){return"/chat/contact/"+t},firstLetter:function(t){return t.charAt(0)},userStatusColor:function(t){return t.active?"green":"grey"},handleSearch:function(t){t.length>3&&this.users.filter((function(e){var i=e.name.toLowerCase();return!0===i.startsWith(t)}))}}},v=d,h=i("2877"),m=i("6544"),f=i.n(m),p=i("ce7e"),b=i("8860"),w=i("da13"),g=i("1800"),T=i("8270"),C=i("5d23"),_=i("e0c7"),x=i("8654"),V=Object(h["a"])(v,n,r,!1,null,null,null),y=V.exports;f()(V,{VDivider:p["a"],VList:b["a"],VListItem:w["a"],VListItemAction:g["a"],VListItemAvatar:T["a"],VListItemContent:C["b"],VListItemSubtitle:C["c"],VListItemTitle:C["d"],VSubheader:_["a"],VTextField:x["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{text:""}},[a("v-responsive",{attrs:{height:"380",src:i("d084")}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("v-avatar",{staticClass:"mx-5",attrs:{size:"200"}},[a("img",{attrs:{src:t.user.avatar,alt:t.user.name}})]),a("h1",{staticClass:"white--text"},[t._v(t._s(t.user.name))])],1)],1),a("v-card-text",{staticClass:"pa-0"},[a("v-layout",{staticClass:"grey lighten-4 pa-3 ma-0",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("div",{staticClass:"layout column justify-center align-center"},[a("v-btn",{attrs:{icon:"",outlined:"",color:"indigo"}},[a("v-icon",[t._v("fa fa-facebook")])],1),a("h3",{staticClass:"indigo--text"},[t._v("100+")])],1)]),a("v-flex",{attrs:{xs4:""}},[a("div",{staticClass:"layout column justify-center align-center"},[a("v-btn",{attrs:{icon:"",outlined:"",color:"pink"}},[a("v-icon",[t._v("fa fa-instagram")])],1),a("h3",{staticClass:"pink--text"},[t._v("200+")])],1)]),a("v-flex",{attrs:{xs4:""}},[a("div",{staticClass:"layout column justify-center align-center"},[a("v-btn",{attrs:{icon:"",outlined:"",color:"blue"}},[a("v-icon",[t._v("fa fa-twitter")])],1),a("h3",{staticClass:"blue--text"},[t._v("50+")])],1)])],1),a("v-tabs",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("v-tab",{attrs:{ripple:"",href:"#tab-1"}},[t._v(" Profile ")]),a("v-tab",{attrs:{ripple:"",href:"#tab-2"}},[t._v(" Activity ")]),a("v-tabs-items",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("v-tab-item",{attrs:{value:"tab-1"}},[a("v-card",{attrs:{text:""}},[a("v-card-text",[a("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[a("v-list-item",{attrs:{href:"#"}},[a("v-list-item-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("work")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.jobTitle))]),a("v-list-item-subtitle",[t._v("Job Title")])],1),a("v-list-item-action")],1),a("v-divider",{attrs:{inset:""}}),a("v-list-item",{attrs:{href:"#"}},[a("v-list-item-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("phone")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.phone))]),a("v-list-item-subtitle",[t._v("Mobile")])],1),a("v-list-item-action",[a("v-icon",[t._v("chat")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-item",{attrs:{href:"#"}},[a("v-list-item-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mail")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.email))]),a("v-list-item-subtitle",[t._v("Personal")])],1)],1),a("v-divider",{attrs:{inset:""}}),a("v-list-item",{attrs:{href:"#"}},[a("v-list-item-action",[a("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.address.street))]),a("v-list-item-subtitle",[t._v(t._s(t.user.address.city)+", "+t._s(t.user.address.state)+" "+t._s(t.user.address.zipcode))])],1)],1)],1)],1)],1)],1),a("v-tab-item",{attrs:{value:"tab-2"}})],1)],1)],1)],1)},S=[],I={data:function(){return{chat:null,selectedTab:null}},computed:{user:function(){var t={name:"Chat",avatar:""},e=Object(o["c"])(this.$route.params.uuid);return Object.assign(t,e)}}},j=I,k=i("8212"),A=i("8336"),G=i("b0af"),$=i("99d9"),W=i("0e8f"),E=i("132d"),O=i("a722"),B=i("6b53"),P=i("71a3"),R=i("c671"),D=i("fe57"),H=i("aac8"),z=Object(h["a"])(j,L,S,!1,null,null,null),F=z.exports;f()(z,{VAvatar:k["a"],VBtn:A["a"],VCard:G["a"],VCardText:$["b"],VDivider:p["a"],VFlex:W["a"],VIcon:E["a"],VLayout:O["a"],VList:b["a"],VListItem:w["a"],VListItemAction:g["a"],VListItemContent:C["b"],VListItemSubtitle:C["c"],VListItemTitle:C["d"],VResponsive:B["a"],VTab:P["a"],VTabItem:R["a"],VTabs:D["a"],VTabsItems:H["a"]});var J={components:{ChatContactList:y,ChatContactProfile:F},data:function(){return{chat:null,selectedTab:null}},computed:{showSidebar:function(){return void 0===this.$route.params.uuid},showWindow:function(){return void 0!==this.$route.params.uuid}}},M=J,q=i("62ad"),K=i("a523"),N=i("0fd9"),Q=Object(h["a"])(M,a,s,!1,null,null,null);e["default"]=Q.exports;f()(Q,{VCol:q["a"],VContainer:K["a"],VFlex:W["a"],VLayout:O["a"],VRow:N["a"]})},"2ca0":function(t,e,i){"use strict";var a=i("23e7"),s=i("06cf").f,n=i("50c4"),r=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),u="".startsWith,d=Math.min,v=c("startsWith"),h=!l&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!h&&!v},{startsWith:function(t){var e=String(o(this));r(t);var i=n(d(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return u?u.call(e,a,i):e.slice(i,i+a.length)===a}})},"44e7":function(t,e,i){var a=i("861d"),s=i("c6b6"),n=i("b622"),r=n("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"5a34":function(t,e,i){var a=i("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},ab13:function(t,e,i){var a=i("b622"),s=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,"/./"[t](e)}catch(a){}}return!1}},c671:function(t,e,i){"use strict";var a=i("9d65"),s=i("4e82"),n=i("c3f0"),r=i("80d2"),o=i("58df");const c=Object(o["a"])(a["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));var l=c.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}});e["a"]=l.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=l.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},d084:function(t,e,i){t.exports=i.p+"static/img/4.343d413d.jpg"}}]);
//# sourceMappingURL=chunk-62ffff10.5cf7e97a.js.map