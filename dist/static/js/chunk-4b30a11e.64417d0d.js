(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b30a11e"],{"0465":function(t,s,i){t.exports=i.p+"static/img/about.18605593.webp"},"143e":function(t,s,i){t.exports=i.p+"static/img/3.5c9680cd.webp"},"1ee1":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"the-home-box"},[e("v-parallax",{attrs:{height:"800",src:i("f679")}},[e("span",{staticClass:"intro"},[t._v(" Trade with your "),e("br"),t._v(" customized "),e("br"),t._v(" Algorithm with QuantFen ")]),e("span",{staticClass:"intro2"},[t._v(" Easy & low cost, first customised algorithmic trading analytics platform for retail users ")]),e("a",{staticClass:"gocontact",attrs:{href:"mailto:ChironCapital@hotmail.com",target:"_self","data-content":"ChironCapital@hotmail.com","data-type":"mail"}},[e("span",[t._v("Get in Touch")])])]),e("div",{staticClass:"section2"},[e("h4",{staticClass:"titletext"},[t._v("Algorithms")]),e("h5",{staticClass:"subtitletext"},[t._v(" Customized algorithm strategies for retail investors, fitting your financial position and market view ")]),t._m(0),e("div",{staticClass:"imgs"},t._l(t.imgitems,(function(s,i){return e("div",{key:i,staticClass:"img-item"},[e("img",{staticClass:"img",attrs:{src:s.imgsrc,alt:""}}),e("div",{staticClass:"imgintro"},[t._v(t._s(s.desp))])])})),0)]),e("div",{staticClass:"about"},[t._m(1),e("div",{staticClass:"img-area"},[e("img",{staticClass:"img",attrs:{src:i("0465"),alt:""}})])])],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"ul-list"},[i("li",{staticClass:"ul-list-item"},[i("span",[t._v("Easy, trendy and high-tech algos")])]),i("li",{staticClass:"ul-list-item"},[i("span",[t._v("Equity, FX and Cryptocurrency")])]),i("li",{staticClass:"ul-list-item"},[i("span",[t._v("Customized to your positions and market views")])]),i("li",{staticClass:"ul-list-item"},[i("span",[t._v("Easy use of algo training based on your customization")])]),i("li",{staticClass:"ul-list-item"},[i("span",[t._v("User-friendly visualisation of algo performance")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"about-intro"},[i("div",{staticClass:"about-title"},[t._v(" About Us ")]),i("div",{staticClass:"about-subtitle"},[t._v(" Algorithmic Trading Strategy Analytic Platform ")]),i("div",{staticClass:"about-desp"},[t._v(" QuantFen assists retail investors with customized algorithmic analytic into the huge untapped market with a recipe to success. Our methods have been tried and tested by major expert analysts and investment bankers, approving our successful formula. With professional background credibility, QuantFen is here to ensure that your financial present and future are on the path to success. "),i("br"),t._v(" In 2020, we opened our doors to become the first customized algorithmic trading strategy analytic platform for retail investors with unsurpassed service. We hold ourselves to the highest standards in everything we do. ")])])}],r={name:"PageDashboard",data:function(){return{imgitems:[{imgsrc:i("7191"),desp:"Low Risk Strategies"},{imgsrc:i("6181"),desp:"High Return Strategies"},{imgsrc:i("143e"),desp:"Advanced Trading Strategies"},{imgsrc:i("2552"),desp:"CryptoCurrency Trading Strategies"}]}}},n=r,o=(i("533f"),i("2877")),l=i("6544"),c=i.n(l),h=(i("94aa"),i("a026")),d=h["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),p=i("58df");const u=Object(p["a"])(d);var m=u.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const s={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},i=t("div",{staticClass:"v-parallax__image-container"},[t("img",s)]),e=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[i,e])}}),g=Object(o["a"])(n,e,a,!1,null,"6a9f1ae4",null);s["default"]=g.exports;c()(g,{VParallax:m})},2552:function(t,s,i){t.exports=i.p+"static/img/4.f993b3ab.webp"},"533f":function(t,s,i){"use strict";var e=i("d69e"),a=i.n(e);a.a},6181:function(t,s,i){t.exports=i.p+"static/img/2.ae544748.webp"},7191:function(t,s,i){t.exports=i.p+"static/img/1.f993b3ab.webp"},"94aa":function(t,s,i){},d69e:function(t,s,i){},f679:function(t,s,i){t.exports=i.p+"static/img/homebg.666b3d4d.webp"}}]);
//# sourceMappingURL=chunk-4b30a11e.64417d0d.js.map