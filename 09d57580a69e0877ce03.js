(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{2408:function(e,n,t){"use strict";t.r(n);t(31),t(56);var o,r=t(13),l=t(784);o=t(852).fabric;var c={name:"Cyberpunk2077",data:function(){return{n:null,src:{logo_en:"/images/cyberpunk_2077_logo.png",logo_en_2:"/images/cyberpunk_2077_logo_2.png",logo_en_shadow:"/images/cyberpunk_2077_logo_shadow.png",logo_cn:"/images/cyberpunk_2077_logo_cn.png"},style:"logo_en",logo:null,backgroundImage:null,canvas:null}},head:function(){return this.$store.state.currentTool.head},watch:{style:function(){this.n&&this.renderCanvas()}},mounted:function(){this.canvas=new o.Canvas(this.$refs.canvas)},methods:{handleChange:function(e){var n=this,t=e.target.files;if(!t.length)return!1;var o=t[0],l=new FileReader;l.readAsDataURL(o),l.addEventListener("load",Object(r.a)(regeneratorRuntime.mark((function e(){var image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(image=new Image).onload=function(){n.backgroundImage=image,n.$nextTick(n.renderCanvas)},image.src=l.result;case 3:case"end":return e.stop()}}),e)}))),!1)},renderCanvas:function(){var e=this;this.canvas.clear();var image=this.backgroundImage,n=this.$refs.box.offsetWidth,t=1;image.width>n?(this.canvas.setWidth(n),this.canvas.setHeight(n/image.width*image.height),t=n/image.width):(this.canvas.setWidth(image.width),this.canvas.setHeight(image.height)),this.getLogo().then((function(){var t=image.width/2/e.logo.width;image.width>n&&(t=n/2/e.logo.width);var r=new o.Image(e.logo,{scaleX:t,scaleY:t,left:0,top:0});e.canvas.add(r),r.centerH(),e.canvas.renderAll()}));var r=new o.Image(image,{scaleX:t,scaleY:t,left:0,top:0,selectable:!1});this.canvas.setBackgroundImage(r)},getLogo:function(){var e=this;return new Promise((function(n,t){var image=new Image;image.onload=function(){e.logo=image,n(image)},image.onerror=t,image.src=e.src[e.style]}))},save:function(){if(!this.n)return!1;this.canvas.lowerCanvasEl.toBlob((function(e){Object(l.a)(URL.createObjectURL(e),"Cyberpunk_2077.png")}))}}},v=t(5),component=Object(v.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"cyberpunk2077"},[t("nya-container",{attrs:{title:"Cyberpunk 2077 图片制作"}},[t("div",{staticClass:"nya-subtitle"},[e._v("\n            请选择要制作的图片\n        ")]),e._v(" "),t("el-input",{attrs:{type:"file",accept:"image/*",placeholder:e.n?e.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(n){return e.handleChange(n)}},model:{value:e.n,callback:function(n){e.n=n},expression:"n"}},[t("el-button",{attrs:{slot:"append"},on:{click:e.save},slot:"append"},[e._v("\n                下载\n            ")])],1),e._v(" "),t("div",{staticClass:"nya-subtitle mt-15"},[e._v("\n            选择 Logo 样式\n        ")]),e._v(" "),t("el-radio-group",{model:{value:e.style,callback:function(n){e.style=n},expression:"style"}},[t("el-radio",{attrs:{label:"logo_en"}},[e._v("\n                英文\n            ")]),e._v(" "),t("el-radio",{attrs:{label:"logo_en_2"}},[e._v("\n                英文2\n            ")]),e._v(" "),t("el-radio",{attrs:{label:"logo_en_shadow"}},[e._v("\n                英文带阴影\n            ")]),e._v(" "),t("el-radio",{attrs:{label:"logo_cn"}},[e._v("\n                中文\n            ")])],1)],1),e._v(" "),t("nya-container",{directives:[{name:"show",rawName:"v-show",value:e.n,expression:"n"}],attrs:{title:"预览"}},[t("div",{ref:"box",staticClass:"box"},[t("canvas",{ref:"canvas"})])])],1)}),[],!1,null,null,null);n.default=component.exports},784:function(e,n,t){"use strict";n.a=function(e,n){var a=document.createElement("a");a.href=e,a.download=n,a.click()}},853:function(e,n){},854:function(e,n){},855:function(e,n){}}]);