(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{2482:function(t,e,n){"use strict";n.r(e);n(367);var r=n(781),o={name:"TikTokVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:"",loading:!1,form:{url:""},regex:r.a}},methods:{download:function(){var t=this;if(this.loading)return!1;r.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(r.a.http)[0],this.$axios.post("/tiktok_video_downloader",{url:this.form.url}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tiktok_video_downloader"},[n("nya-container",{attrs:{title:"TikTok 无水印视频下载"}},[n("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[n("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),t._v(" "),n("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[n("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"http://vt.tiktok.com/JR7wUN/"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download(e))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1)],1)],1),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{title:"获取成功"}},[n("a",{attrs:{href:t.results,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.results)+"\n        ")])])],1)}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";e.a={http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}}}]);