(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{309:function(t,e,n){var content=n(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("eb0eb802",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";var r=n(309),o=n.n(r);e.default=o.a},344:function(t,e,n){(e=n(4)(!1)).push([t.i,".gear_2kW3h{width:80vw;max-width:500px;height:80vw;max-height:500px}.text_12Z2w{text-align:center;font-size:1.5rem;color:#09f;opacity:0;transition:opacity .4s ease}@media screen and (min-width:600px){.text_12Z2w{font-size:2.5rem}}.text_12Z2w.show_2p5pd{opacity:1}",""]),e.locals={gear:"gear_2kW3h",text:"text_12Z2w",show:"show_2p5pd"},t.exports=e},350:function(t,e,n){"use strict";n.r(e);n(11),n(59);var r=n(15),o=n(171),l=n(342),c=n.n(l),h={props:{path:{type:Object,default:function(){return{}}}},data:function(){return{instance:null}},mounted:function(){var t=this,e=this.$refs.svg;this.instance=new c.a(e,{start:"autostart",type:"scenario-sync"},(function(){t.$emit("complete")}))}},f=n(8),m=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._b({ref:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 20 20"}},"svg",this.$attrs,!1),[this._t("filters"),this._v(" "),e("path",this._b({attrs:{d:"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32 l 0 -0.1z M10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}},"path",this.path,!1),[this._t("pathAnimations")],2)],2)}),[],!1,null,null,null).exports,d={components:{Layout:o.a,GearPath:m},data:function(){return{showText:!1}},computed:{pathAttrs:function(){return{"data-delay":10,"data-duration":100,fill:"none",stroke:"#d2b316"}}},methods:{onCompleteGearPathAnimation:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showText=!0,e.next=3,new Promise((function(t){return setTimeout(t,1300)}));case 3:t.$router.push({path:"top"});case 4:case"end":return e.stop()}}),e)})))()}},head:function(){return{link:[{rel:"preload",href:"/assets/img/flyer/bg.jpg",as:"image"},{rel:"preload",href:"/assets/img/flyer/colis.png",as:"image"},{rel:"preload",href:"/assets/img/flyer/dia.png",as:"image"},{rel:"preload",href:"/assets/img/flyer/jozefin.png",as:"image"},{rel:"preload",href:"/assets/img/flyer/tina.png",as:"image"},{rel:"preload",href:"/assets/img/flyer/fine.png",as:"image"},{rel:"preload",href:"/assets/img/top.jpg",as:"image"}]}}},w=n(343),y=n(26),x=n.n(y),v=n(112);var _=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Layout",[n("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[n("GearPath",{class:t.$style.gear,attrs:{path:t.pathAttrs},on:{complete:t.onCompleteGearPathAnimation}}),t._v(" "),n("p",{class:[t.$style.text,t.showText&&t.$style.show]},[t._v("\n        Presented by 戦挙管理委員会\n      ")])],1)],1)],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=_.exports;x()(_,{VLayout:v.a})}}]);