(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{2502:function(t,e,n){"use strict";n.r(e);n(367);var r=n(781),l={name:"YoutubeVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:[],loading:!1,form:{url:""},regex:r.a}},methods:{copy:function(t){var e=this;this.$copyText(t).then((function(){e.$message.success("复制成功")}),(function(){e.$message.error("复制失败，请手动选择复制")}))},handleFileSize:function(t){return 0===t?"未知":(t=(t/1024/1024).toFixed(2))<1024?"".concat(t,"MB"):"".concat((t/1024).toFixed(2),"GB")},download:function(){var t=this;if(this.loading)return!1;r.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(r.a.http)[0],this.$axios.post("/youtube_video_downloader",{url:this.form.url}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},o=n(5),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"youtube_video_downloader"},[n("nya-container",{attrs:{title:"YouTube 视频下载"}},[n("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[n("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),t._v(" "),n("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[n("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"https://www.youtube.com/watch?v=BEULybZnLO8"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download(e))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1)],1)],1),t._v(" "),t.results.length?n("nya-container",{attrs:{title:"获取视频信息成功"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.results}},[n("el-table-column",{attrs:{prop:"format",label:"类型",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ext",label:"格式",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.ext))])]}}],null,!1,3275587055)}),t._v(" "),n("el-table-column",{attrs:{prop:"filesize",label:"大小",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.handleFileSize(e.row.filesize)))])]}}],null,!1,750809165)}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"分辨率",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.asr?n("span",[t._v("\n                        "+t._s(e.row.asr/1e3)+" kHz\n                    ")]):n("span",[t._v("\n                        "+t._s(e.row.width+"x"+e.row.height+" ("+e.row.fps+"fps)")+"\n                    ")])]}}],null,!1,3712881993)}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"下载"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{type:"primary",href:e.row.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                        下载\n                    ")]),t._v(" "),n("el-link",{attrs:{type:"info"},on:{click:function(n){return t.copy(e.row.url)}}},[t._v("\n                        复制\n                    ")])]}}],null,!1,557635593)})],1)],1):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[t._v("地区限制和版权视频将无法下载")])]),t._v(" "),n("li",[t._v("本站不提供音视频合并服务，请自行合并转换")])])])],1)}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";e.a={http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}}}]);