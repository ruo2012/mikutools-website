(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{2381:function(t,e,n){"use strict";n.r(e);n(109),n(110),n(31),n(220);var r="解码失败核对你的信息",o=function(code){if(code>255)code%=255;else if(code<1)for(;code<1;)code+=255;return code},c={v1:{encode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",code="";if(!t)return code;var n=encodeURIComponent(t).split("%"),r=!!e,c=this.passwdTable(e),l=0,v=function(code){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=code;if(t&&r){var n=l%c.length;e=code+c[n],l++}var v=parseInt(2800,16)+o(e);return String.fromCharCode(v)};n.forEach((function(t,e){if(t){var n=t.split("");e>0&&(code+=v(parseInt(n.shift()+n.shift(),16))),n.forEach((function(t){code+=v(t.charCodeAt())}))}}));var d=1,h=code[0].charCodeAt()-parseInt(2800,16)+d,f=code[0].charCodeAt()-parseInt(2800,16)-1,C=code[0].charCodeAt()-parseInt(2800,16)-2,w=r?f:C,y=code[0].charCodeAt()%code.length;return code=code.slice(0,y+1)+v(h,!1)+v(w,!1)+code.slice(y+1)},decode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",code="";if(t.length<3)return r;var n=!!e,c=this.passwdTable(e),l=0,v=function(t){var e=t.charCodeAt()-parseInt(2800,16);if(n){var r=l%c.length;e=t.charCodeAt()-parseInt(2800,16)-c[r],l++}return o(e).toString(16)},d=t.split("");d.forEach((function(t){t&&(code+="%"+v(t))}));var h="";try{h=decodeURIComponent(code)}catch(t){h=r}return h},passwdTable:function(t){var e=[];if(!t)return e;var n=btoa(t).split(""),r=btoa(t.split("").reverse().join("")).split("");return n.forEach((function(t,n){var o=r[n].charCodeAt();e.push(Math.floor((t.charCodeAt()+o)%(o/2)*2))})),e}}},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c.v1.encode(t,e)},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",code="";if(t.length<3)return code;var n=t.split(""),l=n[0].charCodeAt()%(n.length-2);if(l+2>=n.length)return r;var v=o(n[l+1].charCodeAt()-n[0].charCodeAt());if(!Object.prototype.hasOwnProperty.call(c,"v".concat(v)))return r;var d=1==o(n[0].charCodeAt()-n[l+2].charCodeAt()),h=n.slice(0,l+1).concat(n.slice(l+3)).join("");return c["v".concat(v)].decode(h,d?e:"")},d={name:"Sot1Encrypt",head:function(){return this.$store.state.currentTool.head},data:function(){return{value:"",passwd:"",type:!1}},computed:{result:function(){return this.type?v(this.value,this.passwd):l(this.value,this.passwd)}},methods:{}},h=n(5),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sot1_encrypt"},[n("nya-container",{attrs:{title:"盲人摸象加解密"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            请输入待加解密字符\n        ")]),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"⣨⢿⢙⣦⢘⢯⣤⢸⢀⣤⢸⢪⣤⢾⢋⣩⣦⣥⢭⢐",autofocus:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"建议密码不少于4个字符",autofocus:""},model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}}),t._v(" "),n("el-switch",{attrs:{"active-text":"解密","inactive-text":"加密"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.result,expression:"result"}],attrs:{title:"转换结果"}},[n("nya-copy",[n("div",{domProps:{textContent:t._s(t.result)}})])],1),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("该转码输出字符与其他普遍方法并不一致")]),t._v(" "),n("li",[t._v("加密后数据体积约为原数据三倍大小，拉丁字母系显示空间约和原数据一致")]),t._v(" "),n("li",[n("b",[t._v("Sot1 v1 版本使用加密方式可能有点粗糙，请误加密重要数据")])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);