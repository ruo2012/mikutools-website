(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{2436:function(t,e,l){"use strict";l.r(e);var n=l(813),o=l(58),c=l.n(o),r={name:"LeaveMessage",head:function(){return{title:this.title}},data:function(){return{title:"留言反馈 - ".concat("MikuTools"),msg:"",contact:"",loading:!1,msgType:"问题反馈",url:""}},methods:{submit:function(){var t=this;if(!c.a.isEmail(this.contact))return this.$notify.error({title:"提交失败",message:"请输入正确的联系方式"}),!1;c.a.isLength(this.msg,{min:15})?(this.loading=!0,this.$axios.post("".concat(this.$store.state.vip?"/user/vip_leave_message":"/leave_message"),{content:Object(n.a)(this.msg),type:this.msgType,contact:this.contact,url:this.url}).then((function(){t.$notify.success({title:"提交成功",message:"感谢您的反馈，我们已收到你的留言，作者会即时查看"}),t.loading=!1})).catch((function(){t.$notify.error({title:"提交失败",message:"留言失败，如果多次出现错误请发邮件联系：imiku.me@gmail.com"}),t.loading=!1}))):this.$notify.error({title:"提交失败",message:"请输入留言信息，且不少于15个字"})}}},m=l(5),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"leave-message"},[l("nya-container",{attrs:{title:"留言反馈"}},[l("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"请选择留言类型"},model:{value:t.msgType,callback:function(e){t.msgType=e},expression:"msgType"}},[l("el-option",{attrs:{label:"问题反馈",value:"问题反馈"}}),t._v(" "),l("el-option",{attrs:{label:"功能建议",value:"功能建议"}}),t._v(" "),l("el-option",{attrs:{label:"其他",value:"其他"}}),t._v(" "),l("el-option",{attrs:{label:"商务合作",value:"商务合作"}})],1),t._v(" "),l("el-input",{staticClass:"mb-15",attrs:{placeholder:"输入你的邮箱（用于接收回复信息）",autofocus:""},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),t._v(" "),l("el-input",{staticClass:"mb-15",attrs:{placeholder:"输入视频地址（可选）",autofocus:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),l("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入留言信息，如果是问题反馈必须输入复现步骤，否则无视留言。支持 markdown",autofocus:""},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),t._v(" "),l("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("\n            "+t._s(t.loading?"提交中":"提交留言")+"\n        ")])],1),t._v(" "),l("nya-container",{attrs:{title:"留言须知"}},[l("ul",{staticClass:"nya-list"},[l("li",{staticClass:"shake"},[l("b",[t._v("提问前请仔细阅读 "),l("nuxt-link",{attrs:{to:"/docs"}},[t._v("常见问题")])],1)]),t._v(" "),l("li",[l("b",[t._v("任何无法使用的问题请留下详细的信息，如视频链接等，请输入问题的重现步骤，否则无视留言。")])]),t._v(" "),l("li",[t._v("你的所有留言都会被即时推送到作者会查看，但不一定会回复")]),t._v(" "),l("li",[t._v("请不要使用任何APP程序")]),t._v(" "),l("li",[t._v("所有样式，无法使用等问题请更换浏览器后重试")]),t._v(" "),l("li",[t._v("如果你的留言包含视频、文件、图片等信息，请通过邮件发送给作者：imiku.me@gmail.com")])])])],1)}),[],!1,null,null,null);e.default=component.exports},813:function(t,e,l){"use strict";var n=l(847),o=l.n(n),c=l(806),r=l.n(c);l(802);e.a=function(content){return o()(content,{breaks:!0,highlight:function(code){return r.a.highlightAuto(code).value}})}}}]);