webpackJsonp([1],{A5vV:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"DaVincisLock"}}},[this._v("다빈치의 자물쇠")])],1)]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(t){n("A5vV")},"data-v-75701562",null).exports,o=n("/ocq"),s=n("pFYg"),c=n.n(s),u=n("BO1k"),d=n.n(u),l={name:"DaVincisLock",data:function(){return{title:"<< 다섯 자리 숫자 중복 가능한 야구게임 >>",description1:"추천은 정답 후보 중 하나를 임의로 선택한 값으로, 힌트를 얻기 위한 최적의 값은 아닙니다.",description2:"게임에 추천 값을 입력하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.",description3:"다른 값을 입력하려면 추천칸에 작성하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.",candidates:[]}},created:function(){this.onReset()},methods:{onReset:function(){this.candidates=[{num:12340,count:1e5,rate:1e-4,strike:"",ball:""}]},onClick:function(t){this.candidates.splice(t+1);var e=this.solution();this.candidates.push({num:this.pad(e.candidateNum),count:e.candidatesCount,strike:"",ball:""})},pad:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(void 0===t)return"오류";for(t=t.toString();t.length<e;)t="0"+t;return t},strToArr:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charAt(n));return e},isAvailable:function(t){var e=this,n=function(n){var i=Number(n.strike),r=Number(n.ball),a=0,o=e.strToArr(e.pad(n.num)),s=e.strToArr(e.pad(t)),c=e.strToArr(e.pad(t)),u=o.map(function(t,e){return{n:t,c:s[e]}}),l=!0,v=!1,p=void 0;try{for(var f,m=d()(u);!(l=(f=m.next()).done);l=!0){var _=f.value;if(0===i&&0===r&&s.includes(_.n))return{v:!1};s.includes(_.n)&&(_.n===_.c?a++:0);var h=c.indexOf(_.n);-1!==h&&c.splice(h,1)}}catch(t){v=!0,p=t}finally{try{!l&&m.return&&m.return()}finally{if(v)throw p}}return c.length!==5-(i+r)?{v:!1}:i!==a?{v:!1}:void 0},i=!0,r=!1,a=void 0;try{for(var o,s=d()(this.candidates);!(i=(o=s.next()).done);i=!0){var u=n(o.value);if("object"===(void 0===u?"undefined":c()(u)))return u.v}}catch(t){r=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return!0},solution:function(){for(var t=[],e=0,n=0;n<1e5;n++)this.isAvailable(n)&&(e++,t.push(n));return{candidatesCount:e,candidateNum:t[Math.floor(Math.random()*(t.length-1))]}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"desc"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(t.description1))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(t.description2))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(t.description3))]),t._v(" "),n("button",{on:{click:function(e){return t.onReset()}}},[t._v("리셋")]),t._v(" "),n("table",{staticStyle:{width:"50%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.candidates,function(e,i){return n("tr",{key:i},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"candidate.num"}],attrs:{type:"text"},domProps:{value:e.num},on:{input:function(n){n.target.composing||t.$set(e,"num",n.target.value)}}})]),t._v(" "),n("td",[t._v(t._s(e.count))]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.strike,expression:"candidate.strike"}],attrs:{type:"text"},domProps:{value:e.strike},on:{input:function(n){n.target.composing||t.$set(e,"strike",n.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.ball,expression:"candidate.ball"}],attrs:{type:"text"},domProps:{value:e.ball},on:{input:function(n){n.target.composing||t.$set(e,"ball",n.target.value)}}})]),t._v(" "),n("td",[n("button",{on:{click:function(e){return t.onClick(i)}}},[t._v("확인")])])])}),0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("추천")]),t._v(" "),n("th",[t._v("정답 후보(개)")]),t._v(" "),n("th",[t._v("Strike")]),t._v(" "),n("th",[t._v("Ball")]),t._v(" "),n("th",[t._v("확인")])])}]};var p=n("VU/8")(l,v,!1,function(t){n("p2So")},"data-v-05abcf3e",null).exports;i.a.use(o.a);var f=new o.a({routes:[{path:"/daVincisLock",name:"DaVincisLock",component:p}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},p2So:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.43b77fadf1a43da3b018.js.map