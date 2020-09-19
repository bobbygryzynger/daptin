(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"37f3":function(e,t,n){"use strict";var a=n("5d40"),o=n.n(a);o.a},"5d40":function(e,t,n){},caf4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page-container",[n("q-header",{staticClass:"bg-white text-black",attrs:{elevated:""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"12"},[n("q-bar",[n("q-btn-group",{attrs:{flat:""}},[n("q-btn",{attrs:{flat:"",label:"File"}},[n("q-menu",[n("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.newDocument()}}},[n("q-item-section",[e._v("New")])],1),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.$router.push("/apps/files")}}},[n("q-item-section",[e._v("Open")])],1),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.saveDocument()}}},[n("q-item-section",[e._v("Save spreadsheet")])],1),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.saveDocument()}}},[n("q-item-section",[e._v("Export")]),n("q-menu",[n("q-list",[n("q-item",[e._v("To xlsx")])],1)],1)],1),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){return e.window.print()}}},[n("q-item-section",[e._v("Print")])],1)],1)],1)],1),n("q-btn",{attrs:{flat:"",label:"Edit"}}),n("q-btn",{attrs:{flat:"",label:"Format"}}),n("q-btn",{attrs:{flat:"",label:"Data"}}),n("q-btn",{attrs:{flat:"",label:"Help"}})],1)],1)],1)]),n("div",{staticClass:"row"})]),n("q-page",[n("div",{staticStyle:{margin:"0px",padding:"0px",position:"absolute",width:"100%",height:"100%",left:"0px",top:"-25px",bottom:"0"},attrs:{id:"luckysheet"}}),n("q-dialog",{model:{value:e.newNameDialog,callback:function(t){e.newNameDialog=t},expression:"newNameDialog"}},[n("q-card",{staticStyle:{"min-width":"400px"}},[n("q-card-section",[n("q-input",{attrs:{label:"New file name"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{label:"Cancel"},on:{click:function(t){e.newNameDialog=!1}}}),n("q-btn",{attrs:{label:"Create"},on:{click:function(t){return e.newDocument()}}})],1)],1)],1)],1)],1)},o=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("9523")),i=n.n(c),s=(n("6b54"),n("06db"),n("28a5"),n("a481"),n("2f62"));function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){var a;return function(){var o=this,c=arguments,i=function(){a=null,n||e.apply(o,c)},s=n&&!a;clearTimeout(a),a=setTimeout(i,t),s&&e.apply(o,c)}}function d(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))}function m(e){return decodeURIComponent(atob(e).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}var p={name:"SpreadsheetEditorApp",data:function(){return l(l({file:null},Object(s["c"])(["decodedAuthToken"])),{},{saveDebounced:null,contents:"",loading:!0,newNameDialog:!1,newName:null,document:null,containerId:"id-"+(new Date).getMilliseconds(),screenWidth:(window.screen.width<1200?window.screen.width:1200)+"px"})},watch:{contents:function(e,t){this.loading||(null===this.saveDebounced&&(this.saveDebounced=u(this.saveDocument,3e3,!0)),this.saveDebounced())}},methods:l({loadEditor:function(){var e=this;setTimeout((function(){console.log("Create sheet");var t={container:"luckysheet",showinfobar:!1,title:e.document?e.document.document_name:"New document",userInfo:e.decodedAuthToken.email};if(console.log("l",luckysheet),luckysheet.destroy(),e.contents.length>0)try{console.log("set string data",e.contents);var n=e.contents;n&&(n=JSON.parse(n)),n&&(t.data=n),console.log("set sheet data",n),luckysheet.create(t)}catch(a){console.log("Failed to parse data",a),luckysheet.create(t)}else luckysheet.create(t);setInterval((function(){e.loading=!1;var t=luckysheet.getluckysheetfile();t=t.map((function(e){return console.log("Get grid data for sheet",e),e.celldata=luckysheet.getGridData(e.data),e}));var n=JSON.stringify(t);e.contents=n,window.localStorage.setItem("d",n)}),1e4)}),300)},saveDocumentState:function(){var e=this,t=luckysheet.getluckysheetfile();t=t.map((function(e){return console.log("Get grid data for sheet",e),e.celldata=luckysheet.getGridData(e.data),e})),e.contents=JSON.stringify(t),window.localStorage.setItem("d",e.contents)},newDocument:function(){var e=this;if(this.newNameDialog)if(this.newName){var t=null;t=this.newName,this.document={document_name:t,document_extension:"html",mime_type:"text/html",document_path:"/"},this.file={contents:e.contents,name:t,type:"text/json"},this.newName=null,this.newNameDialog=!1,this.document.document_content=[this.file]}else this.$q.notify({message:"Please enter a name"});else this.newNameDialog=!0},saveDocument:function(){var e=this;console.log("save document",this.document,this.contents),this.document?(this.document.tableName="document",this.document.document_content[0].contents="data:text/html,"+d(this.contents),this.document.reference_id?e.updateRow(e.document).then((function(e){console.log("Document saved",e)})).catch((function(t){console.log("errer",t),e.$q.notify({message:"We are offline, changes are not being stored"})})):e.createRow(e.document).then((function(t){e.document=t.data,console.log("Spreadsheet created",t),e.$router.push("/apps/spreadsheet/"+e.document.reference_id)})).catch((function(t){console.log("eror",t),e.$q.notify({message:"We are offline, changes are not being stored"})}))):this.newNameDialog=!0}},Object(s["b"])(["loadData","updateRow","createRow"])),mounted:function(){var e=this,t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","/statics/luckysheet/plugins/js/plugin.js"),document.getElementsByTagName("head")[0].appendChild(t);var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src","/statics/luckysheet/luckysheet.umd.js"),document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){console.log("lucky loaded"),e.containerId="id-"+(new Date).getMilliseconds();var t=e.$route.params.documentId;if(console.log("Mounted FilesApp",e.containerId,e.$route.params.documentId),"new"===t)return e.file={contents:"",name:"New file.html"},e.contents=e.file.contents,void e.loadEditor();e.loadData({tableName:"document",params:{query:JSON.stringify([{column:"reference_id",operator:"is",value:t}]),included_relations:"document_content"}}).then((function(t){console.log("Loaded document",t.data),e.document=t.data[0],e.file=e.document.document_content[0],e.contents=m(e.file.contents),e.loadEditor()}))}}},f=p,h=(n("37f3"),n("2877")),g=n("09e3"),b=n("e359"),w=n("d847"),v=n("e7a9"),y=n("9c40"),k=n("4e73"),q=n("1c1c"),D=n("66e5"),N=n("4074"),O=n("9989"),j=n("24e8"),x=n("f09f"),_=n("a370"),C=n("27f9"),S=n("4b7e"),Q=n("7f67"),I=n("eebe"),E=n.n(I),P=Object(h["a"])(f,a,o,!1,null,null,null);t["default"]=P.exports;E()(P,"components",{QPageContainer:g["a"],QHeader:b["a"],QBar:w["a"],QBtnGroup:v["a"],QBtn:y["a"],QMenu:k["a"],QList:q["a"],QItem:D["a"],QItemSection:N["a"],QPage:O["a"],QDialog:j["a"],QCard:x["a"],QCardSection:_["a"],QInput:C["a"],QCardActions:S["a"]}),E()(P,"directives",{ClosePopup:Q["a"]})}}]);