(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439ac523"],{"0fd9":function(t,e,a){"use strict";a("4b85");var s=a("a026"),i=a("d9f7"),o=a("80d2");const r=["sm","md","lg","xl"],n=["start","end","center"];function l(t,e){return r.reduce((a,s)=>(a[t+Object(o["D"])(s)]=e(),a),{})}const c=t=>[...n,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...n,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...n,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,a){let s=b[t];if(null!=a){if(e){const a=e.replace(t,"");s+="-"+a}return s+="-"+a,s.toLowerCase()}}const w=new Map;e["a"]=s["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:a,children:s}){let o="";for(const i in e)o+=String(e[i]);let r=w.get(o);if(!r){let t;for(t in r=[],g)g[t].forEach(a=>{const s=e[a],i=f(t,a,s);i&&r.push(i)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),w.set(o,r)}return t(e.tag,Object(i["a"])(a,{staticClass:"row",class:r}),s)}})},"629d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Mini Chart")])],1),a("v-col",{attrs:{cols:"3"}},[a("mini-chart",{attrs:{title:"Monthly Sales","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":t.color.blue.base,type:"bar"}})],1),a("v-col",{attrs:{cols:"3"}},[a("mini-chart",{attrs:{title:"Daily Visit","sub-title":"20%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":t.color.green.base,type:"area"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-card",[a("v-card-text",[a("div",{staticClass:"layout row ma-0 align-center justify-space-between"},[a("div",{staticClass:"text-box"},[a("div",{staticClass:"subheading pb-2"},[t._v("Bounce Rate")]),a("span",{staticClass:"grey--text"},[t._v(" -10% "),a("v-icon",{attrs:{small:"",color:"green"}},[t._v("trending_down")])],1)]),a("div",{staticClass:"chart"},[a("v-progress-circular",{attrs:{size:60,width:5,rotate:360,value:10,color:"success"}},[t._v("10")])],1)])])],1)],1),a("v-col",{attrs:{cols:"3"}},[a("mini-chart",{attrs:{"sub-title":"10%",icon:"trending_down",data:t.dataset.monthVisit,"chart-color":t.color.red.base,type:"line"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Box Chart")])],1),a("v-col",{attrs:{cols:"4"}},[a("box-chart",{attrs:{title:"Page views","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":[t.color.blue.darken1],type:"area"}})],1),a("v-col",{attrs:{cols:"4"}},[a("box-chart",{attrs:{title:"Monthly Sales","sub-title":"10%",icon:"trending_up","card-color":"pink",data:t.dataset.monthVisit,"chart-color":[t.color.pink.lighten2],type:"bar"}})],1),a("v-col",{attrs:{cols:"4"}},[a("box-chart",{attrs:{"card-color":"indigo",title:"Page views","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":[t.color.shades.white],type:"line"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-subheader",[t._v("Complex Chart")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{dark:"",color:"green"}},[a("v-card-title",[a("div",{staticClass:"layout row ma-0"},[a("div",{staticClass:"subheading"},[t._v("Today")]),a("v-spacer"),a("div",{staticClass:"caption"},[a("v-icon",[t._v("trending_up")]),t._v("20%")],1)],1)]),a("v-responsive",{staticClass:"white--text"},[a("e-chart",{ref:"chart",attrs:{"path-option":[["dataset.source",t.dataset.stackData],["grid.bottom","10%"],["grid.top","5%"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","bar"],["series[0].barGap","-100%"],["series[0].itemStyle.normal.color","rgba(0,0,0,0.1)"],["series[0].barWidth","50%"],["series[1].barWidth","50%"],["series[1].type","bar"],["series[1].itemStyle.normal.color",t.color.shades.white]],height:"200px",width:"100%"}})],1),a("v-card-text",{staticClass:"white"},[a("div",{staticClass:"layout row align-center ma-0"},[a("div",{staticClass:"grey--text"},[a("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),a("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),a("v-spacer"),a("div",{},[a("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("10")])],1)],1)])],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"elevation-0 box-shadow",attrs:{dark:"",color:"pink"}},[a("v-card-title",[a("div",{staticClass:"layout row ma-0"},[a("div",{staticClass:"subheading"},[t._v("Today")]),a("v-spacer"),a("div",{staticClass:"caption"},[a("v-icon",[t._v("trending_up")]),t._v("20%")],1)],1)]),a("v-responsive",{staticClass:"white--text"},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["color",[t.color.pink.lighten2]],["grid.left","0"],["grid.bottom","0"],["grid.right","0"],["xAxis.show",!1],["yAxis.show",!1]],height:"200px",width:"100%"}})],1),a("v-card-text",{staticClass:"white"},[a("div",{staticClass:"layout row align-center ma-0"},[a("div",{staticClass:"grey--text"},[a("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),a("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),a("v-spacer"),a("div",{},[a("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("10")])],1)],1)])],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{attrs:{color:"blue darken-1",dark:""}},[a("v-card-title",[a("div",{staticClass:"layout row ma-0"},[a("div",{staticClass:"subheading"},[t._v("Today")]),a("v-spacer"),a("div",{staticClass:"caption"},[a("v-icon",[t._v("trending_up")]),t._v("20%")],1)],1)]),a("v-responsive",[a("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["color",[t.color.blue.base]],["xAxis.show",!1],["xAxis.boundaryGap",!1],["grid.left","0"],["grid.bottom","0"],["grid.right","0"],["yAxis.show",!1],["series[0].areaStyle",{}],["series[0].smooth",!0]],height:"200px",width:"100%"}})],1),a("v-card-text",{staticClass:"white"},[a("div",{staticClass:"layout row align-center ma-0"},[a("div",{staticClass:"grey--text"},[a("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),a("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),a("v-spacer"),a("div",{},[a("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("10")])],1)],1)])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-widget",{attrs:{title:"Analysis - Donut"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.campaign],["color",[t.color.amber.base,t.color.indigo.base,t.color.pink.base,t.color.green.base,t.color.teal.base,t.color.purple.base]],["legend.orient","horizontal"],["legend.y","bottom"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","pie"],["series[0].avoidLabelOverlap",!0],["series[0].radius",["50%","70%"]]],height:"350px",width:"100%"}})],1)])],1),a("v-col",{attrs:{cols:"6"}},[a("v-widget",{attrs:{title:"Analysis - Pie"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.campaign],["color",[t.color.lightBlue.base,t.color.indigo.base,t.color.pink.base,t.color.green.base,t.color.cyan.base,t.color.teal.base]],["legend.orient","horizontal"],["legend.y","bottom"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","pie"]],height:"350px",width:"100%"}})],1)])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-tabs",{on:{change:t.handleTabChange},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("v-tab",{attrs:{ripple:"",href:"#tab-1"}},[t._v("Sales")]),a("v-tab",{attrs:{ripple:"",href:"#tab-2"}},[t._v("Visit")]),a("v-tabs-items",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("v-tab-item",{staticClass:"d-block",attrs:{value:"tab-1"}},[a("e-chart",{attrs:{"path-option":[["color",[t.color.lightBlue.base,t.color.purple.base]],["dataset.source",t.dataset.monthVisit],["series[0].type","bar"],["series[1].type","bar"]],height:"350px",width:"100%"}})],1),a("v-tab-item",{attrs:{value:"tab-2"}},[a("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["series[0].type","line"]],height:"350px",width:"100%"}})],1)],1)],1)],1)],1)],1)],1)},i=[],o=a("1cc5"),r=a("c638"),n=a("c0a4"),l=a.n(n),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{tile:""}},[a("v-card-text",[a("div",{staticClass:"layout row ma-0 align-center justify-space-between"},[a("div",{staticClass:"text-box"},[a("div",{staticClass:"subheading pb-2"},[t._v(t._s(t.title))]),a("span",{staticClass:"grey--text"},[t._v(t._s(t.subTitle)+" "),a("v-icon",{attrs:{small:"",color:t.iconColor}},[t._v(t._s(t.icon))])],1)]),a("div",{staticClass:"chart"},[a("e-chart",{attrs:{"path-option":t.computeChartOption,height:"68px",width:"100%"}})],1)])])],1)},d=[],u={components:{EChart:o["a"]},props:{title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:"success"},type:{type:String,default:"line"},chartColor:{type:String,default:""},data:{type:Array,default:function(){return[]}}},data:function(){return{defaultOption:[["dataset.source",this.data],["xAxis.show",!1],["yAxis.show",!1],["color",[this.chartColor]]]}},watch:{type:{deep:!0,handler:function(t){switch(t){case"bar":this.defaultOption.push(["series[0].type","bar"]);break;case"area":this.defaultOption.push(["series[0].type","line"]),this.defaultOption.push(["series[0].areaStyle",{}]);break;default:break}return this.defaultOption}}},computed:{computeChartOption:function(){return this.defaultOption}}},h=u,p=a("2877"),v=a("6544"),g=a.n(v),b=a("b0af"),f=a("99d9"),w=a("132d"),y=Object(p["a"])(h,c,d,!1,null,null,null),m=y.exports;g()(y,{VCard:b["a"],VCardText:f["b"],VIcon:w["a"]});var C=a("153c"),x=a("129e"),T={components:{BoxChart:C["a"],MiniChart:m,EChart:o["a"],VWidget:x["a"]},data:function(){return{selectedTab:"tab-1",option:null,dataset:{sinData:r["a"],monthVisit:r["e"],campaign:r["c"],location:r["d"],stackData:r["b"]},color:l.a}},created:function(){console.log(this.$refs.chart)},methods:{handleTabChange:function(){window.dispatchEvent(new Event("resize"))}}},_=T,S=a("62ad"),V=a("a523"),k=a("490a"),O=a("6b53"),j=a("0fd9"),A=a("2fa4"),B=a("e0c7"),G=a("71a3"),E=a("c671"),M=a("fe57"),I=a("aac8"),D=Object(p["a"])(_,s,i,!1,null,null,null);e["default"]=D.exports;g()(D,{VCard:b["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:S["a"],VContainer:V["a"],VIcon:w["a"],VProgressCircular:k["a"],VResponsive:O["a"],VRow:j["a"],VSpacer:A["a"],VSubheader:B["a"],VTab:G["a"],VTabItem:E["a"],VTabs:M["a"],VTabsItems:I["a"]})},"62ad":function(t,e,a){"use strict";a("4b85");var s=a("a026"),i=a("d9f7"),o=a("80d2");const r=["sm","md","lg","xl"],n=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>r.reduce((t,e)=>(t["offset"+Object(o["D"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>r.reduce((t,e)=>(t["order"+Object(o["D"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(n),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,a){let s=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");s+="-"+a}return"col"!==t||""!==a&&!0!==a?(s+="-"+a,s.toLowerCase()):s.toLowerCase()}}const h=new Map;e["a"]=s["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:s,parent:o}){let r="";for(const i in e)r+=String(e[i]);let n=h.get(r);if(!n){let t;for(t in n=[],d)d[t].forEach(a=>{const s=e[a],i=u(t,a,s);i&&n.push(i)});const a=n.some(t=>t.startsWith("col-"));n.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(r,n)}return t(e.tag,Object(i["a"])(a,{class:n}),s)}})},c671:function(t,e,a){"use strict";var s=a("9d65"),i=a("4e82"),o=a("c3f0"),r=a("80d2"),n=a("58df");const l=Object(n["a"])(s["a"],Object(i["a"])("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-439ac523.ba91de7c.js.map