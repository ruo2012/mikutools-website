(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{2423:function(t,n,e){"use strict";e.r(n);e(56);var r,l=e(13);r=e(1999);var o={name:"Html2pdf",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",html:"",loading:!1}},methods:{handleChange:function(t){var n=this,e=t.target.files;if(!e.length)return!1;var r=e[0],o=new FileReader;o.readAsText(r),o.addEventListener("load",Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.html=o.result;case 1:case"end":return t.stop()}}),t)}))),!1)},transfrom:function(){var t=this;if(this.loading)return!1;this.loading=!0,r().from(this.html).save().then((function(){t.loading=!1})).catch((function(n){t.loading=!1,t.$notify.error({title:"转换失败",message:n})}))}}},c=e(5),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"html2pdf"},[e("nya-container",{attrs:{title:"HTML转PDF"}},[e("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            请选择要转换的 HTML 文件\n        ")]),t._v(" "),e("el-input",{attrs:{type:"file",accept:"text/*",disabled:t.loading,placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(n){return t.handleChange(n)}},model:{value:t.n,callback:function(n){t.n=n},expression:"n"}},[e("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.transfrom},slot:"append"},[t._v("\n                "+t._s(t.loading?"处理中":"开始转换")+"\n            ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);