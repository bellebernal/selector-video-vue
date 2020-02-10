(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,u=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/selector-video-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"13e3":function(t,e,a){},1505:function(t,e,a){},"3bd3":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var r=a("13e3"),n=a.n(r);n.a},6131:function(t,e,a){"use strict";var r=a("3bd3"),n=a.n(r);n.a},6364:function(t,e,a){t.exports=a.p+"img/library-logo.7cd6dfa2.svg"},"675d":function(t,e,a){t.exports=a.p+"img/video-logo.dc48869c.svg"},7011:function(t,e,a){"use strict";var r=a("1505"),n=a.n(r);n.a},cd49:function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:"",elevation:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v("Video")]),r("span",{staticClass:"font-weight-light"},[t._v("SELECTOR")])]),r("v-spacer"),r("v-spacer"),r("v-img",{attrs:{src:a("675d")}}),r("v-img",{attrs:{src:a("6364")}})],1),r("v-content",[r("Selector",{attrs:{selectorData:t.selectorData}})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"",id:"layout_row"}},[t._l(t.selectorData,function(e){return a("v-flex",{key:e.id,attrs:{xs8:"",sm4:"",md3:"",lg3:"",xl2:""}},[a("v-card",{staticClass:"ma-3",attrs:{elevation:"15"}},[a("v-layout",{staticClass:"text-left",attrs:{column:"","fill-height":""}},[a("v-img",{staticClass:"orange--text",attrs:{video:e,"fill-height":"",src:e.thumbnail}}),a("v-card-title",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("v-card-text",[a("span",{staticClass:"text--primary"},[a("div",[t._v(t._s(e.description))]),a("p"),a("div",[t._v("Duration: "+t._s(e.info))])])]),a("v-card-actions",[a("v-btn",{staticClass:"card-action",on:{click:function(a){return t.addToPlayer(e)}}},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-play")]),a("span",{attrs:{id:"play"}},[t._v("play")])],1)],1)],1)],1)],1)}),a("Player",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!hide"}],key:t.componentKey,attrs:{active:t.active}})],2)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{key:t.componentKey,staticClass:"video-player",attrs:{id:"player"}},[a("div",{staticClass:"player-container"},[a("div",{staticClass:"close-button",attrs:{id:"close"}},[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.close()}}},[t._v("far fa-window-close")])],1),a("video",{attrs:{controls:"",frameborder:"5",allow:"autoplay;encrypted-media",allowfullscreen:""}},t._l(t.active,function(t){return a("source",{key:t.id,attrs:{src:t.url,type:"video/"+t.type+";codecs="+t.codecs}})}),0)])])},l=[],d={name:"Player",props:["active"],data(){return{componentKey:0}},methods:{close(){this.componentKey+=1,document.getElementById("close").addEventListener("click",()=>{document.getElementById("player").style.display="none"})}}},p=d,u=(a("6131"),a("2877")),v=a("6544"),f=a.n(v),h=a("132d"),y=Object(u["a"])(p,c,l,!1,null,null,null),m=y.exports;f()(y,{VIcon:h["a"]});var b={name:"Selector",components:{Player:m},props:["selectorData"],data(){return{active:[],componentKey:0}},computed:{hide(){return 0===this.active.length}},methods:{addToPlayer(t){this.componentKey++,this.active=[],this.active=t.files,this.$emit("update-video",this.active)}}},g=b,w=(a("7011"),a("8336")),_=a("b0af"),x=a("99d9"),O=a("0e8f"),C=a("adda"),V=a("a722"),D=Object(u["a"])(g,s,i,!1,null,null,null),P=D.exports;f()(D,{VBtn:w["a"],VCard:_["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VFlex:O["a"],VIcon:h["a"],VImg:C["a"],VLayout:V["a"]});var j=a("bc3a"),k=a.n(j),E=a("59ca");const S={apiKey:"AIzaSyAzhYuONm41KLqw7Bed4-OPax2DkQQsFh0",authDomain:"videos-db.firebaseapp.com",databaseURL:"https://videos-db.firebaseio.com",projectId:"videos-db",storageBucket:"videos-db.appspot.com",messagingSenderId:"119171243284",appId:"1:119171243284:web:60b3210e49e55a2a5ab601"};E["initializeApp"](S);var I=r["a"].extend({name:"App",components:{Selector:P},data(){return{videos:[],selectorData:[],videoData:[],playerData:[]}},methods:{},mounted(){k.a.get(S.databaseURL+"/screens.json").then(t=>{this.videos=t.data,this.selectorData=this.videos[0].config.views,this.videos.forEach(t=>{this.videoData.push(t.config.views)})}).then(()=>{const t=this.videoData;t.forEach((e,a)=>{t.hasOwnProperty(a)&&!isNaN(parseInt(a,10))&&e.filter(t=>{const e=t.id;e.includes("Player")&&this.playerData.push(t)})})}).then(()=>{const t=this.playerData;this.selectorData.forEach(e=>{e["files"],t.forEach(t=>{t.id.includes(e.id)&&(e["files"]=t.files)})})})}}),T=I,K=(a("5c0b"),a("7496")),A=a("40dc"),B=a("a75b"),L=a("2fa4"),$=a("2a7f"),M=Object(u["a"])(T,n,o,!1,null,null,null),N=M.exports;f()(M,{VApp:K["a"],VAppBar:A["a"],VContent:B["a"],VImg:C["a"],VSpacer:L["a"],VToolbarTitle:$["a"]});var z=a("f309");a("15f5");r["a"].use(z["a"]);var R=new z["a"]({icons:{iconfont:"fa"}}),F=a("750b");r["a"].config.productionTip=!1,r["a"].use(F["a"]),new r["a"]({vuetify:R,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.dcf81dd5.js.map