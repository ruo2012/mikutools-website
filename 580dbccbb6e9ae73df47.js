(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2446:function(e,t,n){"use strict";n.r(t);var o={name:"MobileTelSegment",head:function(){return this.$store.state.currentTool.head},data:function(){return{phonenumber:"",results:"",loading:!1}},methods:{getLocation:function(){var e=this;if(this.loading)return!1;/([0-9]|-)+/.test(this.phonenumber)?(this.loading=!0,this.results="",this.$axios.post("/mobile_tel_segment",{phonenumber:this.phonenumber}).then((function(t){e.loading=!1,e.results=t.data.data})).catch((function(t){e.loading=!1,e.$notify.error({title:"查询失败",message:t})}))):this.$notify.error({title:"查询失败",message:"请输入手机号"})}}},r=n(5),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile_tel_segment"},[n("nya-container",{attrs:{title:"号码归属地查询"}},[n("div",{staticClass:"nya-subtitle"},[e._v("\n            请输入手机号码\n        ")]),e._v(" "),n("el-input",{attrs:{placeholder:"17687777777",autofocus:"",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getLocation(t)}},model:{value:e.phonenumber,callback:function(t){e.phonenumber="string"==typeof t?t.trim():t},expression:"phonenumber"}},[n("el-button",{attrs:{slot:"append",loading:e.loading},on:{click:e.getLocation},slot:"append"},[e._v("\n                "+e._s(e.loading?"查询中":"开始查询")+"\n            ")])],1)],1),e._v(" "),e.results.city?n("nya-container",{attrs:{title:"查询成功"}},[n("ul",{staticClass:"nya-list"},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.results.province,expression:"results.province"}]},[e._v("\n                归属地："+e._s(e.results.province)+e._s(e.results.city)+"\n            ")]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.results.areacode,expression:"results.areacode"}]},[e._v("\n                区号："+e._s(e.results.areacode)+"\n            ")]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.results.company,expression:"results.company"}]},[e._v("\n                运营商："+e._s(e.results.company)+"\n            ")]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.results.zip,expression:"results.zip"}]},[e._v("\n                邮政编码："+e._s(e.results.zip)+"\n            ")])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);