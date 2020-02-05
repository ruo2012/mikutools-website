(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{2396:function(t,e,n){"use strict";n.r(e);n(370),n(72);var r={name:"BtSearch",head:function(){return this.$store.state.currentTool.head},data:function(){return{keyword:"",api:"種子搜",data:[],loading:!1,apiList:[],sort:"",pagination:{total:0,current:1},init:!1}},computed:{currentApi:function(){var t=this;return this.apiList.filter((function(e){return e.name===t.api}))[0]}},watch:{api:function(){this.sort=this.currentApi.paths[0],this.search(1)}},mounted:function(){this.getApi()},methods:{getKey:function(t){return"preset"===t?"默认":"time"===t?"时间":"size"===t?"大小":"hot"===t?"人气":void 0},search:function(t){var e=this;if(this.loading)return!1;this.keyword?(this.loading=!0,this.data=[],this.pagination.current=t,this.$axios.post("/bt_search",{source:this.api,page:t,keyword:this.keyword,sort:this.sort}).then((function(t){e.init=!0,t.data.data.length&&(e.pagination.total=e.pagination.current+1),e.loading=!1,e.data=t.data.data})).catch((function(t){e.loading=!1,e.$notify.error({title:"搜索失败",message:t})}))):this.$notify.error({title:"搜索失败",message:"请输入关键词"})},doCopy:function(text){var t=this;this.$copyText(text).then((function(){t.$message.success("复制成功")}),(function(){t.$message.error("复制失败")}))},getApi:function(){var t=this;this.$axios.get("/bt_search").then((function(e){t.apiList=e.data.data,t.sort=t.currentApi.paths[0]})).catch((function(e){t.$notify.error({title:"获取磁力接口失败",message:e})}))}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bt_search"},[n("nya-container",{attrs:{title:"磁力搜索"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            关键词\n        ")]),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"lovelive",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(1)}},model:{value:t.keyword,callback:function(e){t.keyword="string"==typeof e?e.trim():e},expression:"keyword"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:function(e){return t.search(1)}},slot:"append"},[t._v("\n                "+t._s(t.loading?"搜索中":"开始搜索")+"\n            ")])],1),t._v(" "),n("div",{staticClass:"nya-subtitle"},[t._v("\n            选择磁力接口\n        ")]),t._v(" "),n("el-select",{staticClass:"full-width mb-15",model:{value:t.api,callback:function(e){t.api=e},expression:"api"}},t._l(t.apiList,(function(t){return n("el-option",{key:t.name,attrs:{value:t.name,label:t.name}})})),1),t._v(" "),t.apiList.length&&t.currentApi.paths.length>1?n("div",{staticClass:"nya-subtitle"},[t._v("\n            选择排序方式\n        ")]):t._e(),t._v(" "),t.apiList.length&&t.currentApi.paths.length>1?n("el-select",{staticClass:"full-width",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},t._l(t.currentApi.paths,(function(e,r){return n("el-option",{key:r,attrs:{value:e,label:t.getKey(e)}})})),1):t._e()],1),t._v(" "),t.data.length||t.init?n("nya-container",{attrs:{title:"搜索结果"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,border:""}},[t.currentApi.col.name?n("el-table-column",{attrs:{prop:"name",label:"文件名","min-width":"200"}}):t._e(),t._v(" "),t.currentApi.col.date?n("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}):t._e(),t._v(" "),t.currentApi.col.size?n("el-table-column",{attrs:{prop:"size",label:"文件大小",width:"100"}}):t._e(),t._v(" "),t.currentApi.col.hot?n("el-table-column",{attrs:{prop:"hot",label:"人气",width:"50"}}):t._e(),t._v(" "),t.currentApi.col.magnet?n("el-table-column",{attrs:{prop:"magnet",label:"链接",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.doCopy(e.row.magnet)}}},[t._v("\n                        复制\n                    ")]),t._v(" "),n("el-link",{attrs:{type:"primary",href:e.row.magnet}},[t._v("\n                        下载\n                    ")])]}}],null,!1,1748661644)}):t._e()],1),t._v(" "),n("nya-pagination",{directives:[{name:"show",rawName:"v-show",value:!(t.loading||!t.data.length&&1===t.pagination.current),expression:"!loading && (data.length ? true : pagination.current !== 1)"}],attrs:{total:t.pagination.total,current:t.pagination.current,"range-before":"1","range-after":"1",order:"is-centered","per-page":"1","aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){return t.$set(t.pagination,"current",e)},change:t.search}})],1):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("如果发现某个接口无法使用可尝试更换接口")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);