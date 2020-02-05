/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1970:function(t,e,r){"use strict";var o=r(896);r.n(o).a},1971:function(t,e,r){(e=r(10)(!1)).push([t.i,".color img{border-radius:.25rem}.color .pickr{display:inline-block}.color .pickr button{width:1.25rem;height:1.25rem;border:.0625rem solid #dcdfe6}.color .img-colors .img-color div:not(.nya-subtitle){padding:.625rem;display:inline-block;color:#fff;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}.color .img-colors .img-palette{margin-top:.9375rem}.color .img-colors .img-palette ul{padding:0;margin:0}.color .img-colors .img-palette li{margin:0;display:inline-block;font-size:1rem;box-sizing:border-box;padding:.625rem;text-align:center;color:#fff;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}@media (max-width:850px){.color .img-colors .img-palette li{width:30%}}.color .preview{font-size:0}.color .preview img{width:18.75rem;max-width:100%}.color .copy,.color .img-palette li,.color .nya-list li{cursor:pointer}",""]),t.exports=e},2373:function(t,e,r){"use strict";r.r(e);r(56);var o=r(13),n=(r(109),r(110),r(31),r(1966)),c=r.n(n),l=(r(830),function(image){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=image.width,this.height=this.canvas.height=image.height,this.context.drawImage(image,0,0,this.width,this.height)});l.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},l.prototype.update=function(t){this.context.putImageData(t,0,0)},l.prototype.getPixelCount=function(){return this.width*this.height},l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},l.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var h=function(){};if(h.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},h.prototype.getPalette=function(t,e,r){(void 0===e||e<2||e>256)&&(e=10),(void 0===r||r<1)&&(r=10);for(var o,n,g,b,image=new l(t),c=image.getImageData().data,h=image.getPixelCount(),f=[],i=0;i<h;i+=r)n=c[(o=4*i)+0],g=c[o+1],b=c[o+2],c[o+3]>=125&&(n>250&&g>250&&b>250||f.push([n,g,b]));var v=d.quantize(f,e),m=v?v.palette():null;return image.removeCanvas(),m},h.prototype.getColorFromUrl=function(t,e,r){var o=document.createElement("img"),n=this;o.addEventListener("load",(function(){var c=n.getPalette(o,5,r)[0];e(c,t)})),o.src=t},h.prototype.getImageData=function(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var r=new Array(i),i=0;i<t.length;i++)r[i]=String.fromCharCode(t[i]);var data=r.join(""),o=window.btoa(data);e("data:image/png;base64,"+o)}},r.send()},h.prototype.getColorAsync=function(t,e,r){var o=this;this.getImageData(t,(function(t){var n=document.createElement("img");n.addEventListener("load",(function(){var t=o.getPalette(n,5,r)[0];e(t,this)})),n.src=t}))},!f)var f={map:function(t,e){var r={};return e?t.map((function(t,i){return r.index=i,e.call(r,t)})):t.slice()},naturalOrder:function(a,b){return a<b?-1:a>b?1:0},sum:function(t,e){var r={};return t.reduce(e?function(p,t,i){return r.index=i,p+e.call(r,t)}:function(p,t){return p+t},0)},max:function(t,e){return Math.max.apply(null,e?f.map(t,e):t)}};var v,d=function(){var t=5,e=8-t,r=1e3,o=.75;function n(e,g,b){return(e<<2*t)+(g<<t)+b}function c(t){var e=[],r=!1;function o(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||o(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||o(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||o(),e}}}function l(t,e,r,o,n,c,l){this.r1=t,this.r2=e,this.g1=r,this.g2=o,this.b1=n,this.b2=c,this.histo=l}function h(){this.vboxes=new c((function(a,b){return f.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())}))}function v(t,e){if(e.count()){var r=e.r2-e.r1+1,o=e.g2-e.g1+1,c=e.b2-e.b1+1,l=f.max([r,o,c]);if(1==e.count())return[e.copy()];var i,h,v,d,m=0,w=[],y=[];if(l==r)for(i=e.r1;i<=e.r2;i++){for(d=0,h=e.g1;h<=e.g2;h++)for(v=e.b1;v<=e.b2;v++)d+=t[n(i,h,v)]||0;m+=d,w[i]=m}else if(l==o)for(i=e.g1;i<=e.g2;i++){for(d=0,h=e.r1;h<=e.r2;h++)for(v=e.b1;v<=e.b2;v++)d+=t[n(h,i,v)]||0;m+=d,w[i]=m}else for(i=e.b1;i<=e.b2;i++){for(d=0,h=e.r1;h<=e.r2;h++)for(v=e.g1;v<=e.g2;v++)d+=t[n(h,v,i)]||0;m+=d,w[i]=m}return w.forEach((function(t,i){y[i]=m-t})),C(l==r?"r":l==o?"g":"b")}function C(t){var r,o,n,c,l,h=t+"1",f=t+"2",v=0;for(i=e[h];i<=e[f];i++)if(w[i]>m/2){for(n=e.copy(),c=e.copy(),l=(r=i-e[h])<=(o=e[f]-i)?Math.min(e[f]-1,~~(i+o/2)):Math.max(e[h],~~(i-1-r/2));!w[l];)l++;for(v=y[l];!v&&w[l-1];)v=y[--l];return n[f]=l,c[h]=n[f]+1,[n,c]}}}return l.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var e=this.histo;if(!this._count_set||t){var i,r,o,c=0;for(i=this.r1;i<=this.r2;i++)for(r=this.g1;r<=this.g2;r++)for(o=this.b1;o<=this.b2;o++)c+=e[n(i,r,o)]||0;this._count=c,this._count_set=!0}return this._count},copy:function(){return new l(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var r=this.histo;if(!this._avg||e){var o,i,c,l,h=0,f=1<<8-t,v=0,d=0,m=0;for(i=this.r1;i<=this.r2;i++)for(c=this.g1;c<=this.g2;c++)for(l=this.b1;l<=this.b2;l++)h+=o=r[n(i,c,l)]||0,v+=o*(i+.5)*f,d+=o*(c+.5)*f,m+=o*(l+.5)*f;this._avg=h?[~~(v/h),~~(d/h),~~(m/h)]:[~~(f*(this.r1+this.r2+1)/2),~~(f*(this.g1+this.g2+1)/2),~~(f*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var r=t[0]>>e,o=t[1]>>e,n=t[2]>>e;return r>=this.r1&&r<=this.r2&&o>=this.g1&&o<=this.g2&&n>=this.b1&&n<=this.b2}},h.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,i=0;i<e.size();i++)if(e.peek(i).vbox.contains(t))return e.peek(i).color;return this.nearest(t)},nearest:function(t){for(var e,r,o,n=this.vboxes,i=0;i<n.size();i++)((r=Math.sqrt(Math.pow(t[0]-n.peek(i).color[0],2)+Math.pow(t[1]-n.peek(i).color[1],2)+Math.pow(t[2]-n.peek(i).color[2],2)))<e||void 0===e)&&(e=r,o=n.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort((function(a,b){return f.naturalOrder(f.sum(a.color),f.sum(b.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,o=t[r].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(d,m){if(!d.length||m<2||m>256)return!1;var w=function(r){var o,c,l,h,f=new Array(1<<3*t);return r.forEach((function(t){c=t[0]>>e,l=t[1]>>e,h=t[2]>>e,o=n(c,l,h),f[o]=(f[o]||0)+1})),f}(d);w.forEach((function(){0}));var y=function(t,r){var o,n,c,h=1e6,f=0,v=1e6,d=0,m=1e6,w=0;return t.forEach((function(t){o=t[0]>>e,n=t[1]>>e,c=t[2]>>e,o<h?h=o:o>f&&(f=o),n<v?v=n:n>d&&(d=n),c<m?m=c:c>w&&(w=c)})),new l(h,f,v,d,m,w,r)}(d,w),C=new c((function(a,b){return f.naturalOrder(a.count(),b.count())}));function x(t,e){for(var o,n=1,c=0;c<r;)if((o=t.pop()).count()){var l=v(w,o),h=l[0],f=l[1];if(!h)return;if(t.push(h),f&&(t.push(f),n++),n>=e)return;if(c++>r)return}else t.push(o),c++}C.push(y),x(C,o*m);for(var _=new c((function(a,b){return f.naturalOrder(a.count()*a.volume(),b.count()*b.volume())}));C.size();)_.push(C.pop());x(_,m-_.size());for(var k=new h;_.size();)k.push(_.pop());return k}}}(),m=h;r(1967);v=r(1969);var w={name:"Color",head:function(){return this.$store.state.currentTool.head},data:function(){return{color:"#249ffd",filename:null,preview:"",imgColor:{color:"",palette:""},loading:!1,colorthief:new m,pickr:null}},computed:{handleColor:function(){var t=c()(this.color);return{"RGB(A)":t.toString("rgb").toUpperCase(),HEX6:t.toHexString().toUpperCase(),HEX8:t.toHex8String().toUpperCase(),"HSL(A)":t.toString("hsl").toUpperCase(),"HSV(A)":t.toString("hsv").toUpperCase()}}},mounted:function(){this.initPickr()},methods:{initPickr:function(){var t=this;this.pickr=v.create({el:this.$refs.colorPicker,theme:"classic",default:this.color,components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!0,cmyk:!0,input:!0,clear:!0,save:!0}}}),this.pickr.on("save",(function(e){t.color=e?e.toRGBA().toString(2):""}))},copyColor:function(t){var e=this;this.$copyText(t).then((function(){e.$message.success("复制成功")}),(function(){e.$message.error("复制失败，请手动选择复制")}))},reset:function(){this.color="#249ffd",this.pickr.setColor("#249ffd"),this.preview="",this.imgColor={color:"",palette:""},this.colorthief=new m},handleChange:function(t){var e=this;if(this.loading)return!1;var r=t.target.files;if(!r.length)return!1;var n=r[0];this.loading=!0,this.reset();var l=new FileReader;l.readAsDataURL(n),l.addEventListener("load",Object(o.a)(regeneratorRuntime.mark((function t(){var img;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preview=l.result,(img=new Image).onload=function(){var t=e.colorthief.getPalette(img).map((function(t){return c()("rgb(".concat(t.toString(),")")).toHexString()})),r=c()("rgb(".concat(e.colorthief.getColor(img).toString(),")")).toHexString();e.imgColor.palette=t,e.imgColor.color=r,e.color=r,e.pickr.setColor(r),e.loading=!1},img.src=e.preview;case 4:case"end":return t.stop()}}),t)}))),!1)}}},y=(r(1970),r(5)),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"color"},[r("nya-container",{attrs:{title:"颜色转换"}},[r("el-tooltip",{attrs:{effect:"dark",content:"选择颜色",placement:"right"}},[r("div",{staticStyle:{display:"inline-block"}},[r("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n                    颜色选择器\n                ")]),t._v(" "),r("div",{ref:"colorPicker"})])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"nya-subtitle"},[t._v("\n            提取图片主色\n        ")]),t._v(" "),r("el-input",{staticClass:"mb-15",attrs:{type:"file",placeholder:t.filename?t.filename.replace(/C:\\fakepath\\/,""):"点击这里上传文件",accept:"image/*",clearable:""},on:{clear:t.reset},nativeOn:{change:function(e){return t.handleChange(e)}},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t._v(" "),t.preview?r("div",{staticClass:"preview"},[r("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                预览\n            ")]),t._v(" "),r("img",{attrs:{src:t.preview,alt:"preview"}})]):t._e(),t._v(" "),t.preview?r("div",{staticClass:"img-colors"},[r("div",{staticClass:"img-color"},[r("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                    主色\n                ")]),t._v(" "),r("el-tooltip",{staticClass:"copy",attrs:{effect:"dark",content:"复制主色",placement:"bottom"}},[r("div",{style:{"background-color":t.imgColor.color},on:{click:function(e){return t.copyColor(t.imgColor.color)}}},[t._v("\n                        "+t._s(t.imgColor.color)+"\n                    ")])])],1),t._v(" "),r("div",{staticClass:"img-palette"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                    调色盘\n                ")]),t._v(" "),r("ul",t._l(t.imgColor.palette,(function(e,o){return r("el-tooltip",{key:o,attrs:{effect:"dark",content:"复制 HEX 值",placement:"bottom"}},[r("li",{style:{"background-color":e},on:{click:function(r){return t.copyColor(e)}}},[t._v("\n                            "+t._s(e)+"\n                        ")])])})),1)])]):t._e()],1),t._v(" "),r("nya-container",{attrs:{title:"结果"}},[r("ul",{staticClass:"nya-list"},t._l(t.handleColor,(function(e,o){return r("li",{key:o,on:{click:function(r){return t.copyColor(e)}}},[r("el-tooltip",{attrs:{effect:"dark",content:"点击复制："+o,placement:"right"}},[r("div",{staticStyle:{display:"inline-block"}},[r("b",[t._v(t._s(o)+"：")]),r("span",[t._v(t._s(e))])])])],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,r){var content=r(1971);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("6511c69d",content,!0,{sourceMap:!1})}}]);