(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{2354:function(t,e,n){"use strict";var o=n(985);n.n(o).a},2355:function(t,e,n){(e=n(10)(!1)).push([t.i,".verify_mail .verify-box{display:flex;min-height:25rem;justify-content:center;flex-direction:column;align-items:center}.verify_mail .title.is-info{color:#249ffd}.verify_mail .title.is-success{color:#57c880}.verify_mail .title.is-danger{color:#ef476f}",""]),t.exports=e},2509:function(t,e,n){"use strict";n.r(e);n(71);var o=n(58),r=n.n(o),c={name:"VerifyMail",head:function(){return{titleTemplate:"验证邮箱 - %s"}},data:function(){return{text:"验证中，请稍后",stats:"info"}},computed:{query:function(){return JSON.parse(atob(this.$route.query.p))}},mounted:function(){var t=this.query,e=t.id,n=t.mail,o=t.sign,c=t.aff,l=void 0===c?"undefined":c;e&&n&&o&&l&&r.a.isMongoId(e)&&r.a.isEmail(n)&&r.a.isJWT(o)&&("undefined"===l||r.a.isMongoId(l))?this.verify():(this.$notify.error({title:"验证失败",message:"无效的参数"}),this.$router.replace("/"))},methods:{verify:function(){var t=this;this.$store.commit("loadingComponent",!0);var e=this.query,n=e.id,o=e.mail,r=e.sign,c=e.aff;this.$axios.post("/user/verify_mail/verify",{id:n,mail:o,sign:r,aff:"undefined"===c?void 0:c}).then((function(){t.$notify.success({title:"邮件发送成功",message:"欢迎使用 MikuTools"}),t.text="验证成功，欢迎使用 MikuTools",t.stats="success",t.$store.commit("loadingComponent",!1),t.$store.commit("SET_STORE",{key:"aff",value:"undefined"})})).catch((function(e){t.$notify.error({title:"验证失败",message:e}),t.stats="danger",t.text="验证失败："+e,t.$store.commit("loadingComponent",!1)}))},reVerify:function(){var t=this;this.text="邮件发送中，请耐心等待",this.stats="info",this.$store.commit("loadingComponent",!0);var e=this.query.mail;this.$axios.post("/user/verify_mail",{mail:e}).then((function(){t.$notify.success({title:"邮件发送成功",message:"请查看邮箱，如果未收到可查看垃圾箱"}),t.text="邮件发送成功，请查看邮箱，如果未收到可查看垃圾箱",t.stats="success",t.$store.commit("loadingComponent",!1)})).catch((function(e){t.$notify.error({title:"邮件发送失败",message:e}),t.stats="danger",t.text="邮件发送失败：".concat(e),t.$store.commit("loadingComponent",!1)}))}}},l=(n(2354),n(5)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verify_mail"},[n("nya-container",{attrs:{title:"验证邮箱"}},[n("div",{staticClass:"verify-box"},[n("h1",{staticClass:"title",class:"is-"+t.stats},[t._v("\n                "+t._s(t.text)+"\n            ")]),t._v(" "),"danger"===t.stats?n("button",{staticClass:"nya-btn",attrs:{type:"button"},on:{click:t.reVerify}},[t._v("\n                重新获取邮件\n            ")]):t._e()])])],1)}),[],!1,null,null,null);e.default=component.exports},985:function(t,e,n){var content=n(2355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("e2853cfa",content,!0,{sourceMap:!1})}}]);