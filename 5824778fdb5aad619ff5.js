(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{2478:function(t,e,n){"use strict";n.r(e);n(367);var r=n(781),o={name:"TedVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:"",loading:!1,form:{url:""},regex:r.a}},methods:{download:function(){var t=this;if(this.loading)return!1;r.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(r.a.http)[0],this.$axios.post("/ted_video_downloader",{url:this.form.url}).then((function(e){t.loading=!1,e.data.data.length?t.results=e.data.data:t.$notify.error({title:"解析失败",message:"未获取到视频地址"})})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ted_video_downloader"},[n("nya-container",{attrs:{title:"TED 视频下载"}},[n("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[n("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),t._v(" "),n("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[n("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"https://www.ted.com/talks/sirena_huang_dazzles_on_violin?language=zh-cn#t-3649"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download(e))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1)],1)],1),t._v(" "),t.results.length?n("nya-container",{attrs:{title:"获取成功"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            标题："+t._s(t.results[0].title)+"\n        ")]),t._v(" "),t._l(t.results[0].downloads.nativeDownloads,(function(e,r){return n("p",{key:r,staticStyle:{margin:"7px 0"}},[n("span",[t._v(t._s(r)+"：")]),t._v(" "),n("a",{attrs:{href:e,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n                "+t._s(e)+"\n            ")])])})),t._v(" "),n("table",{staticClass:"nya-table mt-15",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v("字幕")]),t._v(" "),n("th",[t._v("低画质")]),t._v(" "),n("th",[t._v("高画质")])])]),t._v(" "),n("tbody",t._l(t.results[0].downloads.subtitledDownloads,(function(e,r){return n("tr",{key:r},[n("td",[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),n("td",[n("a",{attrs:{href:e.low,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            "+t._s(e.low)+"\n                        ")])]),t._v(" "),n("td",[n("a",{attrs:{href:e.high,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                            "+t._s(e.high)+"\n                        ")])])])})),0)])],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";e.a={http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}}}]);