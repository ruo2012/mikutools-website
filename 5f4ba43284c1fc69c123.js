(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{2417:function(t,e,l){"use strict";l.r(e);var n=l(1082),r=l.n(n),o=l(806),h=l.n(o),c=(l(802),l(58)),d=l.n(c),_={name:"GetHtml",head:function(){return this.$store.state.currentTool.head},data:function(){return{url:"",beautify:!1,results:"",loading:!1}},computed:{html:function(){return this.beautify?h.a.highlight("html",r.a.html(this.results.html,{indent_size:"4",indent_char:" ",max_preserve_newlines:"5",preserve_newlines:!0,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"0",indent_inner_html:!1,comma_first:!1,e4x:!0,indent_empty_lines:!1,indent_level:0})).value:h.a.highlight("html",this.results.html).value}},methods:{getHtml:function(){var t=this;if(this.loading)return!1;d.a.isIP(this.url)||d.a.isURL(this.url)?(this.loading=!0,this.results="",this.$axios.post("/get_html",{url:this.url,headers:{}}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"获取失败",message:e})}))):this.$notify.error({title:"获取失败",message:"请输入正确的链接"})}}},m=l(5),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"get_html"},[l("nya-container",{attrs:{title:"网页源码获取"}},[l("div",{staticClass:"nya-subtitle"},[t._v("\n            输入垃圾名称查询\n        ")]),t._v(" "),l("el-input",{staticClass:"mb-15",attrs:{placeholder:t.$store.state.env.url,autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getHtml(e)}},model:{value:t.url,callback:function(e){t.url="string"==typeof e?e.trim():e},expression:"url"}},[l("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.getHtml},slot:"append"},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),l("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n            格式化代码\n        ")]),t._v(" "),l("el-switch",{model:{value:t.beautify,callback:function(e){t.beautify=e},expression:"beautify"}})],1),t._v(" "),t.results?l("nya-container",{attrs:{title:"获取成功"}},[l("h2",[t._v("媒体资源")]),t._v(" "),t.results.media.length?t._l(t.results.media,(function(e,n){return l("p",{key:n},[l("span",[t._v("类型："+t._s(e.type))]),t._v(" "),l("a",{attrs:{href:e.src,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.src))])])})):l("div",[t._v("\n            暂无\n        ")]),t._v(" "),l("h2",[t._v("代码")]),t._v(" "),l("nya-copy",{attrs:{copy:t.results.html}},[l("div",{domProps:{innerHTML:t._s(t.html)}})])],2):t._e(),t._v(" "),l("nya-container",{attrs:{title:"说明"}},[l("ul",{staticClass:"nya-list"},[l("li",[t._v("主要用于手机端浏览器无法查看源码的情况下使用")]),t._v(" "),l("li",[t._v("暂时只支持HTML的格式化")])])])],1)}),[],!1,null,null,null);e.default=component.exports},802:function(t,e,l){var content=l(814);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("03962918",content,!0,{sourceMap:!1})},814:function(t,e,l){(e=l(10)(!1)).push([t.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}",""]),t.exports=e}}]);