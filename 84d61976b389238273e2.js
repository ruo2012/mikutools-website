(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{2030:function(t,n,o){"use strict";var e=o(919);o.n(e).a},2031:function(t,n,o){(n=o(10)(!1)).push([t.i,".json_editor .jsonEditor{height:37.5rem}",""]),t.exports=n},2432:function(t,n,o){"use strict";o.r(n);o(2025);var e,r=o(918);e=o(2028);var c={name:"JsonEditor",head:function(){return this.$store.state.currentTool.head},data:function(){return{JSONEditor:null}},mounted:function(){this.init()},methods:{init:function(){this.JSONEditor=new e(this.$refs.jsonEditor,{mode:"code",modes:["text","code","tree","form","view"]},{Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"})},download:function(){Object(r.a)(this.JSONEditor.getText(),"main.json")}}},l=(o(2030),o(5)),component=Object(l.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"json_editor"},[n("div",{ref:"jsonEditor",staticClass:"jsonEditor"}),this._v(" "),n("button",{staticClass:"nya-btn mt-15",on:{click:this.download}},[this._v("\n        下载 JSON 文件\n    ")])])}),[],!1,null,null,null);n.default=component.exports},918:function(t,n,o){"use strict";n.a=function(content,t){var n=document.createElement("a");n.download=t,n.style.display="none";var o=new Blob([content]);n.href=URL.createObjectURL(o),n.click()}},919:function(t,n,o){var content=o(2031);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("9cc93ec2",content,!0,{sourceMap:!1})}}]);