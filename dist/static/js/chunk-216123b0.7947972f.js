(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216123b0"],{"0fd9":function(t,e,a){"use strict";a("4b85");var r=a("a026"),n=a("d9f7"),i=a("80d2");const o=["sm","md","lg","xl"],s=["start","end","center"];function l(t,e){return o.reduce((a,r)=>(a[t+Object(i["D"])(r)]=e(),a),{})}const d=t=>[...s,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:d})),c=t=>[...s,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:c})),p=t=>[...s,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:p})),h={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,a){let r=m[t];if(null!=a){if(e){const a=e.replace(t,"");r+="-"+a}return r+="-"+a,r.toLowerCase()}}const b=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:c},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:a,children:r}){let i="";for(const n in e)i+=String(e[n]);let o=b.get(i);if(!o){let t;for(t in o=[],h)h[t].forEach(a=>{const r=e[a],n=v(t,a,r);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(i,o)}return t(e.tag,Object(n["a"])(a,{staticClass:"row",class:o}),r)}})},4795:function(t,e,a){var r=a("23e7"),n=a("da84"),i=a("342f"),o=[].slice,s=/MSIE .\./.test(i),l=function(t){return function(e,a){var r=arguments.length>2,n=r?o.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,a)}};r({global:!0,bind:!0,forced:s},{setTimeout:l(n.setTimeout),setInterval:l(n.setInterval)})},5326:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"page-login",attrs:{"fill-height":""}},[a("v-row",[a("v-col",[a("v-card",{staticClass:"pa-3 page-login__card",attrs:{tile:""}},[a("v-card-title",[a("img",{attrs:{src:"/static/m.png",alt:"Vue Material Admin",width:"55"}}),a("h1",{staticClass:"primary--text display-1"},[t._v(" Chiron Trading ")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"my-10",attrs:{"lazy-validation":""},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-text-field",{attrs:{"append-icon":"person",autocomplete:"off",name:"login",label:"Login",placeholder:"Username or Email",type:"text",required:"",rules:t.formRule.username},model:{value:t.fromModel.username,callback:function(e){t.$set(t.fromModel,"username",e)},expression:"fromModel.username"}}),a("v-text-field",{attrs:{"append-icon":"lock",autocomplete:"off",name:"password",label:"Password",placeholder:"Password",type:"password",rules:t.formRule.password,required:""},model:{value:t.fromModel.password,callback:function(e){t.$set(t.fromModel,"password",e)},expression:"fromModel.password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{large:"",tile:"",color:"primary",loading:t.loading},on:{click:t.login}},[t._v(" Login ")])],1)],1)],1)],1)],1)},n=[],i=(a("4795"),{name:"PageLogin",data:function(){return{loading:!1,formValid:!1,fromModel:{username:"",password:""},formRule:{username:[function(t){return!!t||"Username is required"}],password:[function(t){return!!t||"Password is required"}]},socialIcons:["mdi-google","mdi-twitter","mdi-facebook"]}},computed:{prefix:function(){return""}},methods:{login:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,setTimeout((function(){t.$router.push("/dashboard")}),1e3))},handleSocialLogin:function(){}}}),o=i,s=(a("55d9"),a("2877")),l=a("6544"),d=a.n(l),u=a("8336"),c=a("b0af"),f=a("99d9"),p=a("62ad"),g=a("a523"),h=a("58df"),m=a("7e2b"),v=a("3206"),b=Object(h["a"])(m["a"],Object(v["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),y=a("0fd9"),w=a("2fa4"),V=a("8654"),j=Object(s["a"])(o,r,n,!1,null,"7eb9ef03",null);e["default"]=j.exports;d()(j,{VBtn:u["a"],VCard:c["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:p["a"],VContainer:g["a"],VForm:b,VRow:y["a"],VSpacer:w["a"],VTextField:V["a"]})},"55d9":function(t,e,a){"use strict";var r=a("9e86"),n=a.n(r);n.a},"62ad":function(t,e,a){"use strict";a("4b85");var r=a("a026"),n=a("d9f7"),i=a("80d2");const o=["sm","md","lg","xl"],s=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(i["D"])(e)]={type:[String,Number],default:null},t),{}))(),d=(()=>o.reduce((t,e)=>(t["order"+Object(i["D"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(d)};function c(t,e,a){let r=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");r+="-"+a}return"col"!==t||""!==a&&!0!==a?(r+="-"+a,r.toLowerCase()):r.toLowerCase()}}const f=new Map;e["a"]=r["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:r,parent:i}){let o="";for(const n in e)o+=String(e[n]);let s=f.get(o);if(!s){let t;for(t in s=[],u)u[t].forEach(a=>{const r=e[a],n=c(t,a,r);n&&s.push(n)});const a=s.some(t=>t.startsWith("col-"));s.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(o,s)}return t(e.tag,Object(n["a"])(a,{class:s}),r)}})},"9e86":function(t,e,a){}}]);
//# sourceMappingURL=chunk-216123b0.7947972f.js.map