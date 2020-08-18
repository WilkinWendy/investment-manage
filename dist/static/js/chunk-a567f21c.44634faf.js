(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a567f21c"],{1681:function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var a=i("480e"),s=i("4ad4"),n=i("b848"),o=i("75eb"),l=i("e707"),r=i("e4d3"),c=i("21be"),h=i("f2e7"),d=i("a293"),u=i("58df"),p=i("d9bd"),v=i("80d2");const g=Object(u["a"])(s["a"],n["a"],o["a"],l["a"],r["a"],c["a"],h["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(v["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"8adc":function(t,e,i){},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),n=i("a691"),o=i("50c4"),l=i("7b0b"),r=i("65f0"),c=i("8418"),h=i("1dde"),d=i("ae40"),u=h("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,g=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u||!p},{splice:function(t,e){var i,a,h,d,u,p,b=l(this),x=o(b.length),w=s(t,x),C=arguments.length;if(0===C?i=a=0:1===C?(i=0,a=x-w):(i=C-2,a=g(v(n(e),0),x-w)),x+i-a>f)throw TypeError(m);for(h=r(b,a),d=0;d<a;d++)u=w+d,u in b&&c(h,d,b[u]);if(h.length=a,i<a){for(d=w;d<x-a;d++)u=d+a,p=d+i,u in b?b[p]=b[u]:delete b[p];for(d=x;d>x-a+i;d--)delete b[d-1]}else if(i>a)for(d=x-a;d>w;d--)u=d+a-1,p=d+i-1,u in b?b[p]=b[u]:delete b[p];for(d=0;d<i;d++)b[d+w]=arguments[d+2];return b.length=x-a+i,h}})},a844:function(t,e,i){"use strict";i("1681");var a=i("8654"),s=i("58df");const n=Object(s["a"])(a["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...a["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c975:function(t,e,i){"use strict";var a=i("23e7"),s=i("4d64").indexOf,n=i("a640"),o=i("ae40"),l=[].indexOf,r=!!l&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),h=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:r||!c||!h},{indexOf:function(t){return r?l.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},cc20:function(t,e,i){"use strict";i("8adc");var a=i("58df"),s=i("0789"),n=i("9d26"),o=i("a9ad"),l=i("4e82"),r=i("7560"),c=i("f2e7"),h=i("1c87"),d=i("af2b"),u=i("d9bd");e["a"]=Object(a["a"])(o["a"],d["a"],h["a"],r["a"],Object(l["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:a}=this.generateRouteLink();a.attrs={...a.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex},a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);const s=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(s,a),e)}})},ebf0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"mail"},[a("v-app-bar",{staticClass:"mail-toolbar",attrs:{fixed:"",app:"",text:"",dark:"",color:"indigo","clipped-left":""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:t.toggleDrawer}}),a("v-avatar",{staticClass:"hidden-sm-and-down"},[a("img",{attrs:{src:i("00ef"),alt:"Vue Material Mail"}})]),a("v-toolbar-title",{staticClass:"ml-0 pl-3"},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("Mail")])]),a("v-spacer"),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{"solo-inverted":"","prepend-icon":"search","hide-details":"",label:"What are you looking for?"}}),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("notifications")])],1),a("v-menu",{attrs:{"offset-y":"",origin:"center center","nudge-bottom":10,transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{slot:"activator",icon:"",large:"",text:""},slot:"activator"},i),[a("v-avatar",{attrs:{size:"32px"}},[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/1.jpg"}})])],1)]}}])},[a("v-list",{staticClass:"pa-0"},t._l(t.items,(function(e,i){return a("v-list-item",{key:i,attrs:{to:e.href?null:{name:e.name},href:e.href,ripple:"ripple",disabled:e.disabled,target:e.target,rel:"noopener"},on:{click:e.click}},[e.icon?a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),a("v-navigation-drawer",{staticClass:"mail-drawer",attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"layout column pa-3"},[a("v-btn",{attrs:{large:"",block:"",color:"red",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v(" + COMPOSE")])],1),a("v-list",{staticClass:"mail-list",attrs:{dense:""}},[t._l(t.menus,(function(e){return[e.heading?a("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[e.heading?a("v-subheader",[t._v(" "+t._s(e.heading)+" ")]):t._e(),a("v-divider")],1)],1):a("v-list-item",{key:e.text,attrs:{to:e.to}},[e.icon?a("v-list-item-action",[a("v-icon",{attrs:{color:e.iconColor,small:e.iconSize}},[t._v(t._s(e.icon))])],1):t._e(),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)]}))],2)],1),a("v-content",[a("transition",[a("router-view")],1)],1),a("v-dialog",{attrs:{"max-width":"640px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("compose")],1)],1)},s=[],n=(i("c975"),i("a434"),i("7e82")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{attrs:{color:"primary",dark:""}},[i("v-icon",{attrs:{color:"white"}},[t._v("arrow_back")]),i("v-toolbar-title",[t._v("Compose")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"white"}},[t._v("send")])],1)],1),i("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs2:""}},[i("v-subheader",[t._v("To")])],1),i("v-flex",{staticClass:"text-xs-right",attrs:{xs10:""}},[i("v-chip",[i("v-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/92.jpg"}})]),t._v(" Trevor Hansen ")],1),i("v-chip",[i("v-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/91.jpg"}})]),t._v(" Alex Nelson ")],1)],1),i("v-divider"),i("v-flex",{attrs:{xs2:""}},[i("v-subheader",[t._v("CC")])],1),i("v-flex",{staticClass:"text-xs-right",attrs:{xs10:""}},[i("v-chip",[i("v-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/92.jpg"}})]),t._v(" John Doe ")],1)],1),i("v-flex",{attrs:{xs12:""}},[i("v-divider"),i("v-text-field",{attrs:{label:"Subject",value:"Plans for the weekend","single-line":"","full-width":"","hide-details":""}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-divider"),i("v-textarea",{attrs:{label:"Message",counter:"",max:"120","full-width":"","multi-line":"","single-line":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1)],1)],1)},l=[],r={data:function(){return{title:"Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa"}}},c=r,h=i("2877"),d=i("6544"),u=i.n(d),p=i("8212"),v=i("8336"),g=i("b0af"),f=i("cc20"),m=i("a523"),b=i("ce7e"),x=i("0e8f"),w=i("132d"),C=i("a722"),k=i("2fa4"),y=i("e0c7"),_=i("8654"),V=i("a844"),S=i("71d9"),O=i("2a7f"),$=Object(h["a"])(c,o,l,!1,null,null,null),A=$.exports;u()($,{VAvatar:p["a"],VBtn:v["a"],VCard:g["a"],VChip:f["a"],VContainer:m["a"],VDivider:b["a"],VFlex:x["a"],VIcon:w["a"],VLayout:C["a"],VSpacer:k["a"],VSubheader:y["a"],VTextField:_["a"],VTextarea:V["a"],VToolbar:S["a"],VToolbarTitle:O["b"]});var I={components:{Compose:A},props:{source:String},data:function(){return{selected:[2],dialog:null,drawer:null,replayDialog:null,menus:n["a"],items:[{icon:"account_circle",href:"#",title:"Profile",click:function(t){console.log(t)}},{icon:"settings",href:"#",title:"Settings",click:function(t){console.log(t)}},{icon:"fullscreen_exit",href:"#",title:"Logout",click:function(t){console.log(t)}}],mailActions:[{href:"#",title:"Delete",click:function(t){console.log(t)}},{href:"Mark as read",title:"Mark as read",click:function(t){console.log(t)}},{href:"Spam",title:"Spam",click:function(t){console.log(t)}}]}},created:function(){var t=this;this.$on("MAIL_REPLY_DIALOG_CLOSE",(function(){t.replayDialog=!1})),window.AppMail=this},methods:{handleClick:function(t){console.log(t)},goBack:function(){this.$router.go(-1)},toggleDrawer:function(){this.drawer=!this.drawer},toggle:function(t){var e=this.selected.indexOf(t);e>-1?this.selected.splice(e,1):this.selected.push(t)}}},B=I,T=i("7496"),E=i("40dc"),D=i("5bc1"),L=i("a75b"),M=i("169a"),j=i("8860"),F=i("da13"),G=i("1800"),H=i("5d23"),z=i("e449"),N=i("f774"),P=Object(h["a"])(B,a,s,!1,null,"2ee0f7cc",null);e["default"]=P.exports;u()(P,{VApp:T["a"],VAppBar:E["a"],VAppBarNavIcon:D["a"],VAvatar:p["a"],VBtn:v["a"],VContent:L["a"],VDialog:M["a"],VDivider:b["a"],VFlex:x["a"],VIcon:w["a"],VLayout:C["a"],VList:j["a"],VListItem:F["a"],VListItemAction:G["a"],VListItemContent:H["b"],VListItemTitle:H["d"],VMenu:z["a"],VNavigationDrawer:N["a"],VSpacer:k["a"],VSubheader:y["a"],VTextField:_["a"],VToolbarTitle:O["b"]})}}]);
//# sourceMappingURL=chunk-a567f21c.44634faf.js.map