(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{bad7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.site?r("file-browser",{attrs:{site:e.site},on:{close:function(t){return e.$router.back()}}}):e._e()],1)},o=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),c=r.n(a),i=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"SiteFileBrowserPage",methods:l(l({},Object(i["b"])(["loadData","getTableSchema","createRow","deleteRow","updateRow","executeAction","loadOneData"])),{},{refresh:function(){var e=this,t=e.$route.params.siteId;this.loadData({tableName:"site",params:{query:JSON.stringify([{column:"reference_id",operator:"is",value:t}]),included_relations:"cloud_store_id"}}).then((function(t){console.log("Site data loaded",t),e.site=t.data[0]}))}}),data:function(){return l({text:"",site:null},Object(i["d"])([]))},mounted:function(){console.log("Site page scope",this,window.screen.availWidth),this.refresh()},computed:l(l({fileDrawerWidth:function(){return window.screen.availWidth}},Object(i["c"])(["selectedTable"])),Object(i["d"])([])),watch:{}},d=u,f=r("2877"),b=Object(f["a"])(d,n,o,!1,null,null,null);t["default"]=b.exports}}]);