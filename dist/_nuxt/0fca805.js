(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(t,e,n){t.exports=n.p+"img/next-capital-logo.091abb6.png"},355:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var script={name:"VueLoading",data:()=>({isLoading:!1,options:{bg:"#41b883ad",icon:"fas fa-spinner",size:"3",icon_color:"#ffffff",slot:null}}),methods:{changeStatus(t){this.isLoading=t},changeIsLoadingOptions(t){Object.keys(this.options).forEach((e=>{t[e]&&(this.options[e]=t[e])}))}}};function o(template,style,script,t,e,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);const d="function"==typeof script?script.options:script;let v;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=v):style&&(v=o?function(t){style.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),v)if(d.functional){const t=d.render;d.render=function(e,n){return v.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,v):[v]}return script}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function l(t){return(t,style)=>function(t,e){const n=r?e.media||"default":t,style=d[n]||(d[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);let code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===c&&(c=document.head||document.getElementsByTagName("head")[0]),c.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const t=style.ids.size-1,e=document.createTextNode(code),n=style.element.childNodes;n[t]&&style.element.removeChild(n[t]),n.length?style.element.insertBefore(e,n[t]):style.element.appendChild(e)}}}(t,style)}let c;const d={};var v=o({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading",style:"background-color: "+t.options.bg+";"},[t.options.slot?[n("div",{domProps:{innerHTML:t._s(t.options.slot)}})]:[n("i",{staticClass:"fa-spin",class:t.options.icon+" fa-"+t.options.size+"x",style:"color: "+t.options.icon_color}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Loading...")])]],2)},staticRenderFns:[]},(function(t){t&&t("data-v-4a0f5a62_0",{source:".loading[data-v-4a0f5a62]{position:fixed;left:0;top:0;right:0;bottom:0;height:100vh;z-index:99999!important;width:100%;display:flex;align-items:center;justify-content:center}.loading i[data-v-4a0f5a62]{position:absolute;opacity:1}",map:void 0,media:void 0})}),script,"data-v-4a0f5a62",false,undefined,!1,l,void 0,void 0),h={install(t,e){const n=t.extend(v);t.prototype.$isLoading=t=>{o.changeStatus(t)},t.prototype.$changeIsLoadingOptions=t=>{o.changeIsLoadingOptions(t)};const o=new n({data:()=>({isLoading:!1})}).$mount();document.body.appendChild(o.$el),e&&Object.keys(e).forEach((t=>{e[t]&&(o.options[t]=e[t])}))}}},363:function(t,e,n){n(364)},364:function(t,e,n){"use strict";var o=n(12),r=n(27),l=n(15),c=n(44),d=n(22),v=n(135),h=n(34),m=n(67),f=n(172),_=n(245),y=n(23),C=n(45),I=y("replace"),w=TypeError,x=l("".indexOf),D=l("".replace),S=l("".slice),L=Math.max,N=function(t,e,n){return n>t.length?-1:""===e?n:x(t,e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,l,y,T,$,k,A,R,O=c(this),E=0,M=0,P="";if(null!=t){if((n=v(t))&&(o=h(c(f(t))),!~x(o,"g")))throw w("`.replaceAll` does not allow non-global regexes");if(l=m(t,I))return r(l,t,O,e);if(C&&n)return D(h(O),t,e)}for(y=h(O),T=h(t),($=d(e))||(e=h(e)),k=T.length,A=L(1,k),E=N(y,T,0);-1!==E;)R=$?h(e(T,E,y)):_(T,y,E,[],void 0,e),P+=S(y,M,E)+R,M=E+k,E=N(y,T,E+A);return M<y.length&&(P+=S(y,M)),P}})},372:function(t,e,n){"use strict";n.r(e),n.d(e,"checkPID",(function(){return v}));n(16),n(3),n(1),n(28);var o=[function(){var t=this,e=t._self._c;return e("head",[e("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=edge"}}),t._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),e("title",[t._v("ลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์")]),t._v(" "),e("link",{attrs:{href:"../assets/css/bootstrap.min.css",rel:"stylesheet"}}),t._v(" "),e("link",{attrs:{href:"../assets/css/styles.min.css",rel:"stylesheet"}})])},function(){var t=this,e=t._self._c;return e("header",{staticClass:"p-2 bg-blue"},[e("h1",{staticClass:"text-white text-center m-0"},[t._v("\r\n            ลงทะเบียนรับ"),e("br"),t._v(" "),e("small",{staticClass:"md-font-size"},[t._v("ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์")])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center my-5"},[t("img",{attrs:{src:n(354),width:"197"}})])}],r=n(26),l=(n(66),n(11),n(21),n(363),n(4),n(9)),c=n(355);l.default.use(c.a,{bg:"rgb(255 255 255 / 60%)"});var d={data:function(){return{idCard:"",validData:!1,apiPostOtp:"http://172.20.1.154:9292/rest/v2/short-urls",customerInfo:{idCard:"",firstName:"",lastName:"",mobileNumber:"",contractModels:[]},consentApproved:[],validDataText:"กรุณากรอกข้อมูลให้ครบถ้วน",idcardValid:!1,yearInput:"",listYaer:[],dayInput:"",monthInput:"",daysInMonthResponse:[],classIsValid:"material-textfield",classDayInput:"material-textfield",classMonthInput:"material-textfield",classYearInput:"material-textfield",monthNamesThai:[{name:"มกราคม",value:1},{name:"กุมภาพันธ์",value:2},{name:"มีนาคม",value:3},{name:"เมษายน",value:4},{name:"พฤษภาคม",value:5},{name:"มิถุนายน",value:6},{name:"กรกฎาคม",value:7},{name:"สิงหาคม",value:8},{name:"กันยายน",value:9},{name:"ตุลาคม",value:10},{name:"พฤษจิกายน",value:11},{name:"ธันวาคม",value:12}]}},mounted:function(){this.cuurentDate(),this.consentApproved=JSON.parse(localStorage.getItem("listConsentIsApproved"))},created:function(){},methods:{yaerChange:function(){this.dayInput="",this.monthInput=""},getDaysInMonth:function(t){this.dayInput="";for(var e=new Date(this.yearInput,t,0).getDate(),n=1;n<=e;n++)this.daysInMonthResponse.push(n)},cuurentDate:function(){for(var t=(new Date).getFullYear(),e=[],n=this.year-75;n<=t;n++)e.push(n);this.listYaer=e},getCustomerInfo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.$axios,e.$isLoading(!0),r={idCard:e.idCard.replaceAll("-","")},n.next=5,o.$post("https://uat-apirpt.nextcapital.co.th/APIEtax/api/contractControllers/details",r).then((function(t){e.customerInfo=t,localStorage.setItem("customerInfoModel",JSON.stringify(t)),e.$isLoading(!1),window.location="./otp"})).catch((function(t){console.log(t),e.validDataText="ไม่พบข้อมูล",e.validData=!0,e.$isLoading(!1)}));case 5:case"end":return n.stop()}}),n)})))()},goToPage:function(){""===this.idCard&&(this.classIsValid="valid-input",this.validData=!0),""===this.yearInput&&(this.classYearInput="valid-input",this.validData=!0),""===this.monthInput&&(this.classMonthInput="valid-input",this.validData=!0),""===this.dayInput&&(this.classDayInput="valid-input",this.validData=!0),""!==this.idCard&&""!==this.yearInput&&""!==this.monthInput&&""!==this.dayInput&&this.getCustomerInfo(this)},idCardPattern:function(t){void 0!==t.key&&(this.idCard=function(data,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return data=data.replace(/-/g,""),t.forEach((function(t,e){data.length>=t-1&&(data=data.substr(0,t-1)+"-"+data.substr(t-1,data.length-1))})),data.substr(0,e)}(this.idCard,[2,7,13,16],17).replace(/[^0-9-]+/g,""))}}};function v(t){var e=!1;if(13===t.length){for(var n=0,i=0;i<12;i++)n+=parseFloat(t.charAt(i))*(13-i);var o=(11-n%11)%10,r=t.charAt(12);e=o===parseFloat(r)}return e}var h=d,m=n(38),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("html",{attrs:{lang:"en"}},[t._m(0),t._v(" "),e("body",[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"container",staticStyle:{"min-height":"calc(100vh - 60vh)"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 offset-md-4"},[e("p",{staticClass:"mb-4"},[t._v("กรุณากรอกข้อมูลผู้ทำสัญญา")]),t._v(" "),e("div",{class:t.classIsValid},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.idCard,expression:"idCard"}],staticClass:"w-100",attrs:{placeholder:"",type:"text",id:"idCard",name:"idCard"},domProps:{value:t.idCard},on:{keyup:function(e){return t.idCardPattern(e)},input:function(e){e.target.composing||(t.idCard=e.target.value)}}}),t._v(" "),e("label",[t._v("เลขบัตรประชาชน")])])])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-4 offset-md-4"},[e("p",{staticClass:"mb-2 text-blue"},[t._v("กรุณาระบุวันเดือนปีเกิด")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("div",{class:t.classYearInput,staticStyle:{width:"30%"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.yearInput,expression:"yearInput"}],staticClass:"w-100",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.yearInput=e.target.multiple?n:n[0]},function(e){return t.yaerChange()}]}},[e("option",{attrs:{placeholder:" ",value:"",selected:"",disabled:""}},[t._v("ระบุปี")]),t._v(" "),t._l(t.listYaer,(function(n){return e("option",{key:n,domProps:{value:n}},[t._v(t._s(n))])}))],2),t._v(" "),e("label",[t._v("ปี ค.ศ.")])]),t._v(" "),e("div",{class:t.classMonthInput,staticStyle:{width:"45%"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.monthInput,expression:"monthInput"}],staticClass:"w-100",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.monthInput=e.target.multiple?n:n[0]},function(e){return t.getDaysInMonth(e.target.value)}]}},[e("option",{attrs:{placeholder:" ",value:"",selected:"",disabled:""}},[t._v("ระบุเดือน")]),t._v(" "),t._l(t.monthNamesThai,(function(n){return e("option",{key:n.value,domProps:{value:n.value}},[t._v(t._s(n.name))])}))],2),t._v(" "),e("label",[t._v("เดือน")])]),t._v(" "),e("div",{class:t.classDayInput,staticStyle:{width:"20%"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dayInput,expression:"dayInput"}],staticClass:"w-100",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.dayInput=e.target.multiple?n:n[0]}}},[e("option",{attrs:{placeholder:" ",value:"",selected:"",disabled:""}},[t._v("ระบุวัน")]),t._v(" "),t._l(t.daysInMonthResponse,(function(n){return e("option",{key:n,domProps:{value:n}},[t._v(t._s(n))])}))],2),t._v(" "),e("label",[t._v("วัน")])])])])])]),t._v(" "),e("div",{staticClass:"bg-white p-3 text-center"},[t.validData?e("p",{staticClass:"text-red",attrs:{id:"allData"}},[t._v(t._s(this.validDataText))]):t._e(),t._v(" "),e("button",{staticClass:"btn text-white",attrs:{type:"button",id:"acceptBtn"},on:{click:function(e){return t.goToPage()}}},[t._v("\r\n            ถัดไป\r\n        ")])])])])}),o,!1,null,null,null);e.default=component.exports}}]);