(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1979:function(t,e,r){"use strict";var n=r(900);r.n(n).a},1980:function(t,e,r){(e=r(10)(!1)).push([t.i,".javsearch .list{display:flex;justify-content:space-around;flex-wrap:wrap;margin:0;padding:0}.javsearch .list li{display:inline-block;width:9.375rem;max-width:50%;margin:0 0 1.25rem;padding:0 .625rem;cursor:pointer}.javsearch .list li div{margin:.5rem 0}.javsearch .list li img{width:100%;border-radius:.25rem}.javsearch .list li .info{font-size:.875rem}.javsearch .list li .info .name{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.javsearch .list li .info .highlight{color:var(--theme)}@media (max-width:600px){.javsearch .list li{width:7.5rem}.javsearch .list li .info{font-size:.875rem}}@media (max-width:410px){.javsearch .list li{width:11.25rem}}@media (max-width:350px){.javsearch .list li{width:9.375rem}}.javsearch h2{margin-bottom:1.875rem;box-sizing:border-box;padding:0 1.25rem}.javsearch .jav-view .card .poster img{width:100%}.javsearch .jav-view .card .title{font-size:1.25rem;font-weight:700;margin-bottom:.9375rem}.javsearch .jav-view .card .x{margin-top:.9375rem}.javsearch .jav-view .card .x .content .name{font-weight:700}.javsearch .jav-view .card .bt-list{width:100%;margin-top:.9375rem}.javsearch .jav-view .card .sample-waterfall ul{margin:0;padding:0;text-align:center}.javsearch .jav-view .card .sample-waterfall li{cursor:pointer;list-style:none;display:inline-block;font-size:0;padding:.3125rem;margin:0;width:6.25rem}.javsearch .jav-view .card .sample-waterfall img{width:100%;height:6.25rem;-o-object-fit:cover;object-fit:cover}.javsearch .jav-view .card .avatar-waterfall ul{margin:0;padding:0;display:flex;justify-content:space-around;flex-wrap:wrap}.javsearch .jav-view .card .avatar-waterfall li{display:inline-block;padding:.625rem;box-sizing:border-box;margin:0}.javsearch .jav-view .card .avatar-waterfall li .avatar{width:6.25rem;border-radius:50%;overflow:hidden}.javsearch .jav-view .card .avatar-waterfall li .avatar img{width:100%;height:6.25rem;-o-object-fit:cover;object-fit:cover}.javsearch .jav-view .card .avatar-waterfall li .name{text-align:center;margin-top:.625rem;padding:0 .625rem}.javsearch .jav-view .btn{cursor:pointer;border-top:.0625rem solid #616161;text-align:center;height:2.5rem}.javsearch .jav-view .btn,.javsearch .view-loading{display:flex;align-items:center;justify-content:center}.javsearch .view-loading{z-index:999;position:fixed;left:0;top:0;width:100%;height:100%;background-color:hsla(0,0%,100%,.8)}",""]),t.exports=e},2411:function(t,e,r){"use strict";r.r(e);r(800),r(1976);var n={name:"Javsearch",head:function(){return this.$store.state.currentTool.head},components:{Viewer:r(2364).a},data:function(){return{keyword:"",results:"",type:"ce",source:"jp",page:1,loading:!1,loadingView:!1,viewInfoDialog:!1,viewData:{},viewerOptions:{navbar:!0,button:!0,title:!1,toolbar:!0,tooltip:!0,movable:!1,zoomable:!1,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,keyboard:!0}}},computed:{pass:function(){return!0}},watch:{page:function(){this.getInfo(!0)}},methods:{copy:function(text){var t=this;this.$copyText(text).then((function(){t.$message.success("复制成功")}),(function(){t.$message.error("复制失败，请手动选择复制")}))},getInfo:function(t){var e=this,r=t?this.results.keyword:this.keyword;if(this.loading)return!1;r?(t||(this.page=1),this.loading=!0,this.results="",this.$axios.post("/javsearch",{keyword:r,page:this.page,type:this.type,source:this.source}).then((function(t){e.loading=!1,e.results=t.data.data,e.results.pageNum=Math.ceil(t.data.data.total/30),e.results.keyword=r})).catch((function(t){e.loading=!1,e.$notify.error({title:"查询失败",message:t})}))):this.$notify.error({title:"查询失败",message:"请输入正确的车牌号码"})},view:function(t){var e=this;this.loadingView=!0,this.viewData={},this.$axios.post("/javsearch/info",{id:t.link,source:this.source}).then((function(t){e.loadingView=!1,e.viewData=t.data.data,e.viewInfoDialog=!0})).catch((function(t){e.loadingView=!1,e.$notify.error({title:"查询信息失败",message:t})}))}}},l=(r(1979),r(5)),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"javsearch"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingView,expression:"loadingView"}],staticClass:"view-loading"},[r("nya-loading")],1),t._v(" "),r("el-dialog",{staticClass:"jav-view",attrs:{visible:t.viewInfoDialog,width:"650px",center:"",fullscreen:t.$store.state.isMobile.any},on:{"update:visible":function(e){t.viewInfoDialog=e}}},[t.viewData.title?r("div",{staticClass:"card"},[r("div",{staticClass:"info"},[r("div",{staticClass:"poster"},[r("img",{attrs:{src:""+t.$store.state.env.proxy+t.viewData.cover,alt:"poster"}})]),t._v(" "),r("div",{staticClass:"x"},[r("div",{staticClass:"title"},[t._v("\n                        "+t._s(t.viewData.title)+"\n                    ")]),t._v(" "),r("div",{staticClass:"content"},[r("ul",{staticClass:"nya-list"},t._l(t.viewData.info,(function(e,n){return r("li",{key:n},[r("span",{staticClass:"name"},[t._v(t._s(e.name)+"：")]),t._v(" "),r("span",{staticClass:"con"},[t._v(t._s(e.content))])])})),0)])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.viewData.actor.length,expression:"viewData.actor.length"}],staticClass:"avatar-waterfall"},[r("div",{staticClass:"title"},[t._v("\n                    演员：\n                ")]),t._v(" "),r("ul",t._l(t.viewData.actor,(function(e,n){return r("li",{key:n},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:""+t.$store.state.env.proxy+e.avatar,alt:"avatar"}})]),t._v(" "),r("div",{staticClass:"name"},[t._v("\n                            "+t._s(e.name)+"\n                        ")])])})),0)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.viewData.preview.length,expression:"viewData.preview.length"}],staticClass:"sample-waterfall"},[r("div",{staticClass:"title"},[t._v("\n                    预览图：\n                ")]),t._v(" "),r("viewer",{attrs:{options:t.viewerOptions}},[r("ul",t._l(t.viewData.preview,(function(e,n){return r("li",{key:n,attrs:{title:"点击查看大图"}},[r("img",{attrs:{src:""+t.$store.state.env.proxy+e}})])})),0)])],1),t._v(" "),r("div",{staticClass:"bt-list"},[r("div",{staticClass:"title"},[t._v("\n                    磁力链接：\n                ")]),t._v(" "),t.viewData.magent.length?r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.viewData.magent}},[r("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),r("el-table-column",{attrs:{width:"100",prop:"date",label:"日期"}}),t._v(" "),r("el-table-column",{attrs:{width:"100",prop:"size",label:"大小"}}),t._v(" "),r("el-table-column",{attrs:{width:"100",prop:"size",label:"下载"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-link",{attrs:{type:"primary"},on:{click:function(r){return t.copy(e.row.link)}}},[t._v("\n                                复制\n                            ")]),t._v(" "),r("el-link",{attrs:{href:e.row.link,target:"_blank",rel:"noopener noreferrer",type:"primary"}},[t._v("\n                                下载\n                            ")])]}}],null,!1,776394027)})],1):r("p",[t._v("\n                    暂无磁力，请自行到"),r("nuxt-link",{attrs:{to:"/bt_search"}},[t._v("\n                        /bt_search\n                    ")]),t._v("进行搜索\n                ")],1)],1)]):t._e(),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.viewInfoDialog=!1}}},[t._v("关 闭")])],1)]),t._v(" "),r("nya-container",{attrs:{title:"AV搜索"}},[r("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入番号\n        ")]),t._v(" "),r("el-input",{staticClass:"mb-15",attrs:{placeholder:"S-cute",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getInfo()}},model:{value:t.keyword,callback:function(e){t.keyword="string"==typeof e?e.trim():e},expression:"keyword"}},[r("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:function(e){return t.getInfo()}},slot:"append"},[t._v("\n                "+t._s(t.loading?"查询中":"开始查询")+"\n            ")])],1),t._v(" "),r("div",{staticClass:"mb-15"},[r("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n                选择查询类型\n            ")]),t._v(" "),r("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[r("el-radio",{attrs:{label:"ce"}},[t._v("\n                    有码\n                ")]),t._v(" "),r("el-radio",{attrs:{label:"uc"}},[t._v("\n                    无码\n                ")])],1)],1),t._v(" "),r("div",{staticClass:"mb-15"},[r("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n                选择查询资源\n            ")]),t._v(" "),r("el-radio-group",{model:{value:t.source,callback:function(e){t.source=e},expression:"source"}},[r("el-radio",{attrs:{label:"jp"}},[t._v("\n                    日本\n                ")]),t._v(" "),r("el-radio",{attrs:{label:"us"}},[t._v("\n                    欧美\n                ")])],1)],1)],1),t._v(" "),t.results?r("nya-container",{attrs:{title:"查询成功"}},[r("h2",[t._v("共 "+t._s(t.results.pageNum)+" 页，当前为第 "+t._s(t.page)+" 页")]),t._v(" "),r("ul",{staticClass:"list"},t._l(t.results.list,(function(e,n){return r("li",{key:n,on:{click:function(r){return t.view(e)}}},[r("img",{attrs:{src:""+t.$store.state.env.proxy+e.cover,alt:"poster"}}),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"name"},[r("b",[t._v("标题：")]),t._v(t._s(e.title)+"\n                    ")]),t._v(" "),r("div",{staticClass:"date"},[r("b",[t._v("日期：")]),t._v(t._s(e.date)+"\n                    ")]),t._v(" "),r("div",{staticClass:"id"},[r("b",[t._v("番号：")]),t._v(" "),r("span",{staticClass:"highlight"},[t._v(t._s(e.id))])])])])})),0),t._v(" "),r("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"","current-page":t.page,"page-size":1,layout:"prev, pager, next",total:t.results.pageNum},on:{"current-change":function(e){return t.page=e}}})],1):t._e(),t._v(" "),r("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.pass,expression:"pass"}],attrs:{title:"说明"}},[r("ul",{staticClass:"nya-list"},[r("li",[r("b",[t._v("使用前请阅读以下说明，不要无脑使用")])]),t._v(" "),r("li",[t._v("请不要使用"),r("b",[t._v("简体字")]),t._v("进行查询，部分小众作品和社团作品无法查询")]),t._v(" "),r("li",[t._v("如搜寻《番号》，格式请按照【STAR-433】或【STAR433】搜寻")]),t._v(" "),r("li",[t._v("如搜寻《女优》，请尝试按照维基百科使用繁体中文名或是日文名、罗马音，如【水菜丽】请改成【みづなれい】搜寻")]),t._v(" "),r("li",[t._v("如搜寻《影片标题》，请尝试缩短字数，并优先使用【日文】搜寻")])])])],1)}),[],!1,null,null,null);e.default=o.exports},900:function(t,e,r){var content=r(1980);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("34b6617f",content,!0,{sourceMap:!1})}}]);