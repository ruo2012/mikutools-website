(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{2425:function(t,e,n){"use strict";n.r(e);var r=n(838),o=n(1150),l={name:"IdcardGenerator",head:function(){return this.$store.state.currentTool.head},data:function(){return{config:{name:"初音未来",sex:"女",nation:"VOCALOID",year:"2007",mon:"8",day:"31",org:"Crypton Future Media",validTerm:"2007.08.31-3000.02.31",addr:"日本北海道札幌市中央区",idn:"393939393939393939",avatar:""},n:null,results:"",file:"",smmsdata:null,loading:!1}},methods:{generator:function(){var t=this;this.loading=!0,this.results="",this.$axios.post("/idcard_generator",this.config).then((function(e){t.loading=!1,t.results="data:image/png;base64,"+e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"生成失败",message:e})}))},getId:function(){this.config.idn=o.a.makeID()},handleFile:function(t){var e=t.target.files;if(!e.length)return!1;var n=e[0];n.size/1024/1024>5?(this.n="",this.$notify.error({title:"生成失败",message:"请选择大小在5M以内的图片作为头像"})):this.file=n},uploadImg:function(){var t=this;return["name","sex","nation","year","mon","day","org","validTerm","addr","idn"].filter((function(e){return!t.config[e]})).length?(this.$notify.error({title:"生成失败",message:"请输入正确的参数"}),!1):this.file?!this.loading&&(this.results="",this.smmsdata=null,this.loading=!0,void r.a.upload(this,this.file).then((function(e){t.smmsdata=e.data.data,t.config.avatar=t.smmsdata,t.generator()})).catch((function(e){t.$notify.error({title:"上传图片失败",message:e}),t.loading=!1}))):(this.$notify.error({title:"生成失败",message:"请选择头像"}),!1)}}},c=n(5),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"idcard_generator"},[n("nya-container",{attrs:{title:"身份证生成"}},[n("el-input",{staticClass:"mb-15",attrs:{placeholder:"姓名",clearable:""},model:{value:t.config.name,callback:function(e){t.$set(t.config,"name","string"==typeof e?e.trim():e)},expression:"config.name"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"性别",clearable:""},model:{value:t.config.sex,callback:function(e){t.$set(t.config,"sex","string"==typeof e?e.trim():e)},expression:"config.sex"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"民族",clearable:""},model:{value:t.config.nation,callback:function(e){t.$set(t.config,"nation","string"==typeof e?e.trim():e)},expression:"config.nation"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"出生日期（年）",clearable:""},model:{value:t.config.year,callback:function(e){t.$set(t.config,"year","string"==typeof e?e.trim():e)},expression:"config.year"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"出生日期（月）",clearable:""},model:{value:t.config.mon,callback:function(e){t.$set(t.config,"mon","string"==typeof e?e.trim():e)},expression:"config.mon"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"出生日期（日）",clearable:""},model:{value:t.config.day,callback:function(e){t.$set(t.config,"day","string"==typeof e?e.trim():e)},expression:"config.day"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"签发机关",clearable:""},model:{value:t.config.org,callback:function(e){t.$set(t.config,"org","string"==typeof e?e.trim():e)},expression:"config.org"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"有效期限",clearable:""},model:{value:t.config.validTerm,callback:function(e){t.$set(t.config,"validTerm","string"==typeof e?e.trim():e)},expression:"config.validTerm"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"出生地点",clearable:""},model:{value:t.config.addr,callback:function(e){t.$set(t.config,"addr","string"==typeof e?e.trim():e)},expression:"config.addr"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"身份证号码",clearable:""},model:{value:t.config.idn,callback:function(e){t.$set(t.config,"idn","string"==typeof e?e.trim():e)},expression:"config.idn"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.getId},slot:"append"},[t._v("\n                随机生成\n            ")])],1),t._v(" "),n("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            请选择身份证头像\n        ")]),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{type:"file",accept:"image/*",placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(e){return t.handleFile(e)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.uploadImg}},[t._v("\n            "+t._s(t.loading?"生成中":"生成身份证")+"\n        ")])],1),t._v(" "),t.results?n("nya-container",{attrs:{title:"生成成功"}},[n("img",{attrs:{src:t.results,alt:"results"}})]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("代码已开源在："),n("a",{attrs:{href:"https://github.com/Ice-Hazymoon/idcard_generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Ice-Hazymoon/idcard_generator")]),t._v("，欢迎star")]),t._v(" "),n("li",[t._v("生成时间可能较长，请耐心等待")]),t._v(" "),n("li",[n("b",[t._v("免责声明：本工具生成的身份证仅供娱乐使用，禁止打印、传播或用于非法用途。若因使用本工具生成的图片而产生任何问题和纠纷，本网站不承担任何直接或间接的责任！")])]),t._v(" "),n("li",[t._v("在线抠图工具："),n("a",{attrs:{href:"https://burner.bonanza.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://burner.bonanza.com")]),t._v("、"),n("a",{attrs:{href:"https://www.gaoding.com/koutu",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.gaoding.com/koutu")]),t._v("、"),n("a",{attrs:{href:"https://www.remove.bg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.remove.bg/")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},838:function(t,e,n){"use strict";n(31);e.a={upload:function(t,e){return new Promise((function(n,r){var o=new FormData;o.append("image",e),t.$axios.post("/upload_image",o).then(n).catch(r)}))}}}}]);