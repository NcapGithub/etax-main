(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{353:function(t,e,n){t.exports=n.p+"img/signature-icon.f603aaf.png"},365:function(t,e,n){t.exports=n.p+"img/success-icon.03ba6df.png"},373:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(66),n(1),n(4),{data:function(){return{mobileNumber:"0909499157",contractModel:[],customerInfoModel:{},consentIsApproved:[],correlationId:"",contractNumber:[]}},mounted:function(){this.customerInfoModel=JSON.parse(localStorage.getItem("customerInfoModel")),this.contractModel=this.customerInfoModel.contractModels,this.consentIsApproved=JSON.parse(localStorage.getItem("listConsentIsApproved")),this.correlationId=this.randomString(8),this.setContractData()},methods:{randomString:function(t){for(var e="",n=Math.floor(Date.now()/1e3),i=0;i<t;i++){var r=Math.floor(62*Math.random()),o=r+=r>9?r<36?55:61:48;e+=String.fromCharCode(o)}return n+"_"+e},setContractData:function(){var t=this;this.contractModel.forEach((function(a){var e=a.applicationNumber;t.contractNumber.push(e)}))},postRegister:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$axios,o=[],e.consentIsApproved.forEach((function(t){e.contractModel.forEach((function(a){var n={correlationId:e.correlationId,consentType:t.consentType,consentVersion:1,citizenId:e.customerInfoModel.idCard,consentItemId:t.consentItemId,consentItemDescription:t.consentItemDescription,answer:"Y",status:"active",isReported:"N",EappNo:a.applicationNumber,AgreementNo:a.agreementNumber};o.push(n)}))})),console.log("listRequest",o),n.next=6,r.$post("https://uat-apirpt.nextcapital.co.th/APIEtax/api/EApplication/user-consent",o).then((function(t){console.log("response",t)})).catch((function(t){console.log(t)}));case 6:case"end":return n.stop()}}),n)})))()}}}),c=n(38),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("html",{attrs:{lang:"en"}},[t._m(0),t._v(" "),e("body",{staticClass:"bg-white-grey"},[t._m(1),t._v(" "),e("div",{staticClass:"mt-5 text-center text-dark-grey"},[e("img",{staticStyle:{"max-width":"60px"},attrs:{src:n(365)}}),t._v(" "),e("p",{staticClass:"xl-font-size mt-4"},[t._v("\r\n            ใบแจ้งหนี้ ใบเสร็จ และ ใบกำกับภาษี"),e("br"),t._v("\r\n            จะถูกส่งให้ท่าน"),e("br"),t._v(" "),t._m(2),t._v(t._s(t.mobileNumber)),e("br"),t._v("\r\n            โดยจะผลวันถัดไป\r\n        ")]),t._v(" "),e("p",{staticClass:"xl-font-size mt-4"},[t._v("สัญญาดังต่อไปนี้")]),t._v(" "),e("div",{staticClass:"card mx-auto mt-3 border-0 text-start",staticStyle:{"max-width":"500px"}},[e("ul",{staticClass:"list-group"},t._l(t.contractNumber,(function(r){return e("li",{staticClass:"list-group-item p-0"},[e("a",{staticClass:"d-block py-3 px-4 lg-font-size",attrs:{href:"#"}},[e("img",{staticClass:"me-2",attrs:{src:n(353),width:"25"}}),t._v("\r\n                        เลขที่สัญญา "+t._s(r)+"\r\n                    ")])])})),0)]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t._self._c;return e("head",[e("meta",{attrs:{charset:"UTF-8"}}),t._v(" "),e("meta",{attrs:{"http-equiv":"X-UA-Compatible",content:"IE=edge"}}),t._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),e("title",[t._v("ลงทะเบียนสำเร็จ - ลงทะเบียนรับ ใบแจ้งหนี้/ใบเสร็จ/ใบกำกับภาษีอิเล็กทรอนิคส์")]),t._v(" "),e("link",{attrs:{href:"../assets/css/bootstrap.min.css",rel:"stylesheet"}}),t._v(" "),e("link",{attrs:{href:"../assets/css/styles.min.css",rel:"stylesheet"}})])},function(){var t=this._self._c;return t("header",{staticClass:"p-4 bg-blue"},[t("h1",{staticClass:"text-white text-center m-0"},[this._v("\r\n            ลงทะเบียนสำเร็จ\r\n        ")])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-blue"},[e("b",[t._v("ช่องทาง : SMS")]),t._v("  หมายเลข  ")])},function(){var t=this._self._c;return t("div",{staticClass:"text-center mt-4"},[t("a",{staticClass:"btn text-white mx-auto mb-5",attrs:{href:"/",type:"submit",id:"confirmBtn"}},[this._v("\r\n                กลับหน้าหลัก\r\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);