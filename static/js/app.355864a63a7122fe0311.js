webpackJsonp([1],{Kn4H:function(e,n){},NHnr:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=s("7+uW"),i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("ul",[n("li",[n("router-link",{attrs:{to:{name:"DaVincisLock"}}},[this._v("다빈치의 자물쇠")])],1),this._v(" "),n("li",[n("router-link",{attrs:{to:{name:"BachelorsOfPisa"}}},[this._v("피사의 학사")])],1)]),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(e){s("Kn4H")},"data-v-2bed443e",null).exports,a=s("/ocq"),o=s("pFYg"),u=s.n(o),w=s("BO1k"),q=s.n(w),c={name:"DaVincisLock",data:function(){return{title:"<< 다섯 자리 숫자 중복 가능한 야구게임 >>",description1:"추천은 정답 후보 중 하나를 임의로 선택한 값으로, 힌트를 얻기 위한 최적의 값은 아닙니다.",description2:"게임에 추천 값을 입력하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.",description3:"다른 값을 입력하려면 추천칸에 작성하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.",candidates:[]}},created:function(){this.onReset()},methods:{onReset:function(){this.candidates=[{num:12340,count:1e5,rate:1e-4,strike:"",ball:""}]},onClick:function(e){this.candidates.splice(e+1);var n=this.solution();this.candidates.push({num:this.pad(n.candidateNum),count:n.candidatesCount,strike:"",ball:""})},pad:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(void 0===e)return"오류";for(e=e.toString();e.length<n;)e="0"+e;return e},strToArr:function(e){for(var n=[],s=0;s<e.length;s++)n.push(e.charAt(s));return n},isAvailable:function(e){var n=this,s=function(s){var t=Number(s.strike),i=Number(s.ball),r=0,a=n.strToArr(n.pad(s.num)),o=n.strToArr(n.pad(e)),u=n.strToArr(n.pad(e)),w=a.map(function(e,n){return{n:e,c:o[n]}}),c=!0,d=!1,l=void 0;try{for(var v,p=q()(w);!(c=(v=p.next()).done);c=!0){var h=v.value;if(0===t&&0===i&&o.includes(h.n))return{v:!1};o.includes(h.n)&&(h.n===h.c?r++:0);var f=u.indexOf(h.n);-1!==f&&u.splice(f,1)}}catch(e){d=!0,l=e}finally{try{!c&&p.return&&p.return()}finally{if(d)throw l}}return u.length!==5-(t+i)?{v:!1}:t!==r?{v:!1}:void 0},t=!0,i=!1,r=void 0;try{for(var a,o=q()(this.candidates);!(t=(a=o.next()).done);t=!0){var w=s(a.value);if("object"===(void 0===w?"undefined":u()(w)))return w.v}}catch(e){i=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(i)throw r}}return!0},solution:function(){for(var e=[],n=0,s=0;s<1e5;s++)this.isAvailable(s)&&(n++,e.push(s));return{candidatesCount:n,candidateNum:e[Math.floor(Math.random()*(e.length-1))]}}}},d={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("div",{staticClass:"desc"},[e._v(e._s(e.title))]),e._v(" "),s("div",{staticClass:"desc"},[e._v(e._s(e.description1))]),e._v(" "),s("div",{staticClass:"desc"},[e._v(e._s(e.description2))]),e._v(" "),s("div",{staticClass:"desc"},[e._v(e._s(e.description3))]),e._v(" "),s("button",{on:{click:function(n){return e.onReset()}}},[e._v("리셋")]),e._v(" "),s("table",{staticStyle:{width:"50%"}},[e._m(0),e._v(" "),s("tbody",e._l(e.candidates,function(n,t){return s("tr",{key:t},[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.num,expression:"candidate.num"}],attrs:{type:"text"},domProps:{value:n.num},on:{input:function(s){s.target.composing||e.$set(n,"num",s.target.value)}}})]),e._v(" "),s("td",[e._v(e._s(n.count))]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.strike,expression:"candidate.strike"}],attrs:{type:"text"},domProps:{value:n.strike},on:{input:function(s){s.target.composing||e.$set(n,"strike",s.target.value)}}})]),e._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.ball,expression:"candidate.ball"}],attrs:{type:"text"},domProps:{value:n.ball},on:{input:function(s){s.target.composing||e.$set(n,"ball",s.target.value)}}})]),e._v(" "),s("td",[s("button",{on:{click:function(n){return e.onClick(t)}}},[e._v("확인")])])])}),0)])])},staticRenderFns:[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("thead",[s("th",[e._v("추천")]),e._v(" "),s("th",[e._v("정답 후보(개)")]),e._v(" "),s("th",[e._v("Strike")]),e._v(" "),s("th",[e._v("Ball")]),e._v(" "),s("th",[e._v("확인")])])}]};var l=s("VU/8")(c,d,!1,function(e){s("p2So")},"data-v-05abcf3e",null).exports,v=s("RdYR"),p=s.n(v),h={name:"BachelorsOfPisa",data:function(){return{answer:"",question:"",description1:"없는 문제가 있을 수 있습니다.",items:[],selectedItems:[]}},created:function(){this.items=p.a,this.selectedItems=p.a},methods:{updateItems:function(){var e=this;this.selectedItems=this.items,this.answer&&(this.selectedItems=this.selectedItems.filter(function(n){return n.answer.includes(e.answer)})),this.question&&(this.selectedItems=this.selectedItems.filter(function(n){return n.question.includes(e.question)}))},onInputAnswer:function(e){this.answer=e.target.value,this.updateItems()},onInputQuestion:function(e){this.question=e.target.value,this.updateItems()}}},f={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("div",{staticClass:"desc"},[e._v(e._s(e.description1))]),e._v(" "),s("div",[e._v("\n    정답 검색 "),s("input",{attrs:{type:"text"},domProps:{value:e.answer},on:{input:e.onInputAnswer}}),e._v("\n    문제 검색 "),s("input",{attrs:{type:"text"},domProps:{value:e.question},on:{input:e.onInputQuestion}})]),e._v(" "),s("table",{staticStyle:{width:"50%"}},[e._m(0),e._v(" "),s("tbody",e._l(e.selectedItems,function(n,t){return s("tr",{key:t},[s("td",[e._v(e._s(n.answer))]),e._v(" "),s("td",[e._v(e._s(n.question))])])}),0)])])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("thead",[n("th",{staticStyle:{width:"20%"}},[this._v("정답")]),this._v(" "),n("th",{staticStyle:{width:"80%"}},[this._v("문제")])])}]};var m=s("VU/8")(h,f,!1,function(e){s("iV8c")},"data-v-4c5ecbd0",null).exports;t.a.use(a.a);var _=new a.a({routes:[{path:"/daVincisLock",name:"DaVincisLock",component:l},{path:"bachelorsOfPisa",name:"BachelorsOfPisa",component:m}]});t.a.config.productionTip=!1,new t.a({el:"#app",router:_,components:{App:r},template:"<App/>"})},RdYR:function(e,n){e.exports=[{answer:"이반 1세",question:"1328년 킵차크 칸국에 의해 블라디미르 대공으로 임명된 모스크바 대공은 누구인가?"},{answer:"카를 4세",question:'1356년 제국의 체제를 견고하게 정립한 "금인칙서"를 발표한 황제는 누구인가?'},{answer:"메디치 가문",question:"1434년부터 1492년까지 피렌체를 지배한 가문은 어디인가?"},{answer:"장미 전쟁",question:"15세기 후반 영국에서 에 요크 가문과 랭커스터 가문 사이에 일어난 내란은 무엇인가?"},{answer:"메르카토르 도법",question:"16세기 전통적인 프톨레마이오스 지도 제작법에서 탈피하여 제작된 세계지도에서 사용된 투영 방식은 무엇인가?"},{answer:"앙드로마크",question:"17세기 유럽의 가장 대표적인 고전주의 비극은 무엇인가?"},{answer:"원형 포탄",question:"17세기 전함에서 먼 거리에 있는 적함의 선체를 공격하기 위해 제작된 포탄은 무엇인가?"},{answer:"사슬탄",question:"17세기 전함에서 적함의 돛대를 공격하기 위해 제작된 포탄은 무엇인가?"},{answer:"포도탄",question:"17세기 전함에서 적함의 선원들을 공격하기 위해 제작된 포탄은 무엇인가?"},{answer:"선회포",question:"17세기 전함에서 회전이 가능해 큰 이동각을 확보할 수 있었던 화포는 무엇인가?"},{answer:"영국 국회의사당",question:"18세기부터 19세기 사이 고딕 복고 양식으로 지어진 건축물은 무엇인가?"},{answer:"파리 판테온",question:"18세기부터 19세기 초까지 신고전주의를 대표하는 건축물은 무엇인가?"},{answer:"달팽이",question:"1년 365일 먹지 않고 잠만 자도 살 수 있는 동물은 무엇인가?"},{answer:"수아송 전투",question:"486년 클로비스가 프랑크족을 이끌고 로마를 물리치면서 프랑크 왕국의 기반을 쌓을 수 있었던 전투는 무엇인가?"},{answer:"북위 66 33 이상",question:"6월 22일에 백야 현상을 목격할 수 있는 지역은 어디인가?"},{answer:"아바스 왕조",question:"750년 우마이야 왕조가 다마스쿠스에서 멸망한 뒤 새로 수립된 왕조는 무엇인가?"},{answer:"파뉘르주",question:"가르강튀아와 팡타크뤼엘 중 프랑스 문학작품 중 가장 전형적인 시민이라 일컬어지는 인물은?"},{answer:"윙크한다",question:"개구리는 음식을 삼킬 때 무엇은 원하는가?"},{answer:"동서 방향",question:"경위선에서 위선은 어느 방향을 가리키는가?"},{answer:"청동기 시대",question:"고대 그리스의 에게 문명은 어느 시대의 문명인가?"},{answer:"지중해 동부",question:"고대 도시 페트라는 지중해의 어느 곳에 위치했는가?"},{answer:"생쥐를 발견하면 공격할 준비를 한다",question:"고양이가 꼬리와 몸을 일직선으로 만드는 행동은 무슨 의미인가?"},{answer:"고대 바빌론 성",question:"공중정원이 있었다는 고대의 도시는 어디인가?"},{answer:"타르튀프",question:"괴테가 그 도입부는 최대이자 최고의 프롤로그다 라고 칭찬한 몰리에르의 작품은 무엇인가?"},{answer:"이노켄티우스 3세",question:"교황청의 권력이 전성기를 이뤘을 때 재위 중이던 교황은 누구인가?"},{answer:"비잔틴",question:"궁륭과 반원형 아치는 어떤 건축 양식의 특징인가?"},{answer:"말",question:"귀를 움직일 수 있는 동물은 무엇인가?"},{answer:"원반 던지는 사람 조각상",question:"그리스 조각가 미론의 대표작은 무엇인가?"},{answer:"도리포로스 상",question:"그리스 조각가 폴리클레이토스의 대표작은 무엇인가?"},{answer:"보카치오",question:"그리스어로 10일이란 의미의 데카메론을 쓴 인물은 누구인가?"},{answer:"테오도시우스",question:"기원전 395년 로마제국을 동, 서로 나눠 두 아들에게 분할해 통치하게 한 황제는 누구인가?"},{answer:"키루스",question:"기원전 6세기 페르시아인들을 통합하고 아케메네스 제국을 세운 인물은 누구인가?"},{answer:"동짓날",question:"남위 30도인 지역에서 낮이 가장 긴 날은 언제인가?"},{answer:"튤립",question:"네덜란드에서 가장 유명한 꽃은 무엇인가?"},{answer:"고딕 양식",question:"노트르담 대성당은 어느 건축 양식에 속하는가?"},{answer:"도리아 양식",question:"다음 주범 양식 중 견고하고 심플한 모양으로 남성에 비유되는 것은 무엇인가?"},{answer:"두견새",question:'다음 중 "동물 건축가"라고 할 수 없는 새는 무엇인가?'},{answer:"쿠에네오 사우르스",question:"다음 중 가장 오래된 비행 생물은 무엇인가?"},{answer:"아치형 구조",question:"다음 중 고대 로마 공중 목욕탕의 건축 구조는 무엇인가?"},{answer:"4분할 첨두 아치형 리브롤트",question:"다음 중 고딕 양식의 돔 구조는 무엇인가?"},{answer:"아마존 분지",question:"다음 중 광대한 퇴적평야로 약 6000만년 전에 생성된 것으로 추정되는 평원은 어디인가?"},{answer:"킹디드 혹은 낙관주의",question:"다음 중 낙천주의와 비관주의를 주제로 한 볼테르의 대표작은 무엇인가?"},{answer:"로마 판테온",question:"다음 중 돔의 직경이 가장 큰 고대 건축물은 무엇인가?"},{answer:"빌라... /토리노?",question:"다음 중 르네상스 시기의 건축물과 설계자가 잘못 연결된 것은 무엇인가?"},{answer:"치첸이사",question:"다음 중 마야 문명에 속하는 유적은 무엇인가?"},{answer:"길가메시 서사시",question:"다음 중 메소포타미아의 서사시에 속하는 것은 무엇인가?"},{answer:"산 마르코 광장",question:"다음 중 바로크 양식의 광장이 아닌 것은 무엇인가?"},{answer:"십자",question:"다음 중 배추는 어느"},{answer:"범아일여",question:"다음 중 브라만교에서 중심이 되는 사상은 무엇인가?"},{answer:"제우스 신상",question:"다음 중 세계 7대 불가사의가 아닌 것은 무엇인가?"},{answer:"베니스의 상인",question:"다음 중 셰익스피어의 4대 비극이 아닌 작품은 무엇인가?"},{answer:"이탈리아",question:"다음 중 아펜니노 반도에 위치한 국가는 어디인가?"},{answer:"바르셀로나",question:"다음 중 아프리카 희망봉 지역의 기후와 비슷한 곳은 어디인가?"},{answer:"파나마 운하는",question:"다음 중 운하와 해협에 대한 설명으로 틀린 것은 무엇인가?"},{answer:"사르가소 해",question:"다음 중 유일하게 해안선이 없는 바다는 어디인가?"},{answer:"지구의 공전",question:"다음 중 지구에 사계절 변화가 있는 원인은 무엇인가?"},{answer:"토성",question:"다음 중 지구에서 가장 먼 행성은 무엇인가?"},{answer:"제노바",question:"다음 중 지중해 연안에 위치한 도시는 어디인가?"},{answer:"바다코끼리",question:"다음 중 큰 상아가 특징인 바다생물은 무엇인가?"},{answer:"토르투가 섬",question:"다음 중 해적들의 낙원이라고 불린 섬은 어디인가?"},{answer:"일리아스",question:"다음 중 호메로스의 위대한 서사시는 무엇인가?"},{answer:"서에서 동으로",question:"달의 공전 방향은 어떻게 되는가?"},{answer:"말로",question:"대학제사파의 대표적인 인물로 포스터스 박사를 쓴 작가는 누구인가?"},{answer:"마르세유",question:"대항해의길 게임에서 프랑스의 수도는 어디인가?"},{answer:"미스 사라 샘슨",question:"독일어로 된 최초의 시민 비극은 무엇인가?"},{answer:"오스만 해협",question:"두 개의 대륙 사이에 위치한 해협은 어디인가?"},{answer:"혀로 붙인다",question:"딱따구리가 나무를 쪼는 도중 안쪽에 있는 벌레가 있는 것을 보았다. 이 벌레를 어떻게 끄집어낼까?"},{answer:"네르비-안토니우스 왕조",question:"로마 제국 초기 오현제의 통치 하에 최전성기를 누린 시대는 언제인가?"},{answer:"티베르 강",question:"로마 제국의 뿌리가 된 강은 어디인가?"},{answer:"리어왕",question:"로마 침략 이전 영국을 배경으로 사회 전반의 문제를 광범위하게 다룬 셰익스피어의 비극은 무엇인가?"},{answer:"카이사르",question:"로마의 1인 지배자가 되어 각종 개혁사업을 추진했으나 브루투스에게 암살당한 인물은 누구인가?"},{answer:"성 베드로 대성당",question:"르네상스와 바로크 양식이 접목된 라틴 십자가 모양의 건축물은 무엇인가?"},{answer:"초서",question:"리시더스의 저자는 누구인가?"},{answer:"태노치티틀란",question:"멕시코시티 지하의 폐허는 고대 아즈텍 제국의 어느 도시였는가?"},{answer:"부인 학교",question:"몰리에르가 처음으로 파리에서 공연한 대작 희극은 무엇인가?"},{answer:"성경, 구약",question:"밀턴의 시 투사 삼손은 어디서 소재를 얻었는가?"},{answer:"자기 체중의 절반",question:"박새가 하루 동안 먹는 벌레의 양은 어떻게 되는가?"},{answer:"비잔틴 제국",question:"반달 왕국을 멸망시킨 나라는 어디인가?"},{answer:"아테네의 타이먼",question:"배금주의로 타락한 아테네의 모습을 묘사한 셰익스피어의 작품은 무엇인가?"},{answer:"스칸디나비아 반도",question:"북해와 발트해 사이에 위치한 반도는 무엇인가?"},{answer:"나방",question:"불을 향해 달려들어 죽음을 자초하는 동물은 무엇인가?"},{answer:"콘스탄티누스",question:"사두정치를 청산하고 로마 전체의 지배자가 되어 수도를 비잔틴으로 이전한 황제는 누구인가?"},{answer:"루소",question:"사회계약론을 저술한 인물은 누구인가?"},{answer:"상현달은 오후, 하현달은 오전",question:"삭망월 동안 낮에도 달을 볼 수 있는 날은 언제인가?"},{answer:"서고트 왕국",question:"서고트족이 415년 건설한 게르만 부족 국가는 무엇인가?"},{answer:"비잔틴 제국",question:"성 소피아 대성당은 어느 제국의 통치 시기에 건설되었는가?"},{answer:"메시아",question:"성당이나 교회에서 부르는 할렐루야 노래는 헨델의 어떤 오라토리오에서 나온 것인가?"},{answer:"마젤란 해협",question:"세계에서 가장 굴곡진 해협은 어디인가?"},{answer:"칭장 고원",question:"세계에서 가장 높은 고원은 무엇인가?"},{answer:"발트해",question:"세계에서 가장 염도가 낮은 바다는 어디인가?"},{answer:"아마존강",question:"세계에서 가장 큰 강은 무엇인가?"},{answer:"멕시코 난류",question:"세계에서 가장 큰 난류는 무엇인가?"},{answer:"콩고 분지",question:"세계에서 가장 큰 분지는 어디인가?"},{answer:"갠지스-브라",question:"세계에서 가장 큰 삼각주는 어디인가?"},{answer:"카스피해",question:"세계에서 가장 큰 염호는 무엇인가?"},{answer:"룹알할리 사막",question:"세계에서 가장 큰 유동사막은 어디인가?"},{answer:"서풍 표류",question:"세계에서 가장 큰 해류는 무엇인가?"},{answer:"브라질 고원",question:"세계에서 면적이 가낭 넓은 고원은 무엇인가?"},{answer:"말레이 제도",question:"세계에서 면적이 가장 넓은 제도는 무엇인가?"},{answer:"드레이크 해협",question:"세계에서 수심이 가장 깊은 해협은 어디인가?"},{answer:"에트나 화산",question:"세계에서 화산 활동이 가장 오래된 화산은 무엇인가?"},{answer:"헨리 4세",question:"셰익스피어 작품 중 폴스태프가 가장 먼저 등장한 작품은 무엇인가?"},{answer:"권력욕과 야심 충족",question:"셰익스피어의 비극에서 맥베스가 국왕을 죽인 목적은 무엇인가"},{answer:"드렁허리",question:"수컷은 안 낳고 암컷만 낳는 동물은 무엇인가?"},{answer:"로마 공화국",question:"스파르타쿠스의 반란은 어디서 일어났는가?"},{answer:"말발굽 아치",question:"스페인 알함브라 궁전의 사자의 정원 복도에 사용된 건축 양식은 무엇인가?"},{answer:"이슬람 건축물",question:"스페인 중세 건축물은 어떤 양식의 영향을 받았는가?"},{answer:"바티칸",question:"시스티나 성당은 어디에 위치해 있는가?"},{answer:"부알로",question:"시의 예술의 저자는 누구인가?"},{answer:"베아트리체",question:"신곡에서 단테에게 천국을 안내한 인물은 누구인가?"},{answer:"옥타비아누스",question:"아우구스투스라는 칭호를 받은 인물은 누구인가?"},{answer:"에렉테움 신전",question:"아크로폴리스에서 여인상 기둥을 사용하는 건축물은 무엇인가?"},{answer:"테세우스 개혁",question:"아티카 지역을 아테네를 중심으로 통합한 개혁은 무엇인가?"},{answer:"에스파냐",question:"알함브라 궁전이 있는 국가는 어디인가?"},{answer:"에드워드 티치",question:"앤 여왕의 복수 호는 당초 누구의 지휘함선이었나?"},{answer:"섬광주기가 길고 선수미선과 근접한 등대",question:"야간에 등대 불빛을 이용해 방위를 정하고자 할 때 우선적으로 확인해야 할 것은 무엇인가?"},{answer:"북해",question:"영국 동부 해안에 인접한 바다는 무엇인가?"},{answer:"권리장전",question:"영국 입헌군주제의 초석이 된 자료는 무엇인가"},{answer:"아킬레우스의 분노",question:"영웅 서사시인 일리아스는 어떤 내용으로 시작하는가?"},{answer:"산호해",question:"오스트레일리아 북동쪽 인근에 위치하며 그레이트 배리어 리프 등으로 유명한 바다는 무엇인가?"},{answer:"베토벤",question:"우리에게 익숙한 음악 환락송의 작곡가는 누구인가?"},{answer:"입 양쪽에 주머니가 있다",question:"원숭이는 왜 그렇게 빨리 먹을까?"},{answer:"네부카드네자로 2세",question:"유대 왕국을 무너뜨리고 신 바빌로니아 제국을 부흥시킨 국왕은 누구인가?"},{answer:"다뉴브강",question:"유럽에서 가장 많은 나라를 지나는 강은 어디인가?"},{answer:"신들의 계보",question:"유럽의 고대 문학 중 최초로 우주의 탄생과 신들의 기원을 정리한 작품은 무엇인가?"},{answer:"사르데냐",question:"유명한 역사유적지 바루미니의 누라게는 어느 섬에 있는가?"},{answer:"프레임 구조",question:"이탈리아 인문주의 작가 보카치오가 <데카메론>에서 사용한 플롯 구조는 무엇인가?"},{answer:"아소카",question:"인도에서 처음으로 통일제국을 세운 마우리아 왕조의 왕은 누구인가?"},{answer:"코펜하겐",question:"인어공주 상이 위치한 국가는 어디인가?"},{answer:"헥토르, 아킬레우스",question:"일리아스에 등장하는 두 영웅은 누구인가?"},{answer:"금당, 오종탑",question:"일본 호류지의 두가지 주요 건축물은 무엇인가?"},{answer:"비타민 C",question:"잇몸 출혈은 어떤 영양소가 부족하기 때문인가?"},{answer:"북아일랜드",question:"자이언트 코즈웨이는 어느 나라에 있는가?"},{answer:"꼬리",question:"잠자리는 무엇을 이용해 물 위를 스쳐 가는가?"},{answer:"24시간",question:"장보고는 시간을 세는 단위로 갱을 사용했다. 10갱은 몇 시간인가?"},{answer:"완도",question:"장보고의 고향으로 알려진 곳은 어디인가?"},{answer:"다리우스",question:"전국에 역을 세우고 수사에서 사르디스까지 이르는 2703km의 왕의 대로를 만든 페르시아 국왕은 누구인가?"},{answer:"디오클레티아누스",question:'전제군주정을 수립하고 "사두정치"를 실시한 로마의 황제는 누구인가?'},{answer:"한니발",question:"제 2차 포에니 전쟁에서 알프스 산을 넘어 로마를 침공한 카르타고의 장군은 누구인가?"},{answer:"아몬",question:"종교개혁을 단행한 아멘호테프 4세가 숭배를 금지시킨 신은 무엇인가?"},{answer:"아텐",question:"종교개혁을 실시한 이집트 파라오 아멘호테프 4세가 숭배한 유일신은 무엇인가?"},{answer:"기사 문학",question:"중세 특유의 문학 사조는 무엇인가?"},{answer:"파틀랭 선생",question:"중세 프랑스 운문 희극으로 변호사를 주인공으로 한 작품은 무엇인가?"},{answer:"형이상학",question:"중세에 유행했으며 단테가 신곡에서 사용한 서술 방식은 무엇인가?"},{answer:"태양 시운동",question:"지구를 기준으로 하여 관측한 태양의 겉보기운동은 무엇인가?"},{answer:"성 소피아 대성당",question:"지금의 이스탄불에 위치한 비잔틴 건축의 대표 건축물은 무엇인가?"},{answer:"적도, 그리니치 자오선",question:"지리 좌표의 기준선은 무엇인가?"},{answer:"사성제",question:"초기 불교의 주요 이론은 무엇인가?"},{answer:"마야인",question:"초목을 태운 재로 퇴비를 만드는 경작법을 발명한 인류는 누구인가?"},{answer:"람세스 2세",question:"카데시 전투에서 세계 최초의 평화조약을 맺은 이집트의 파라오는 누구인가?"},{answer:"우마이야 왕조",question:"칼리파 세습제의 기반을 마련한 무아위야 1세가 세운 왕조는 무엇인가?"},{answer:"존 라캄",question:"캘리코 잭이라는 별명을 가진 해적은 누구인가?"},{answer:"연속적인 구형 나선형",question:"태양 , 달과 행성의 주기 운동 궤적은 어떤 형태를 띄는가?"},{answer:"적도, 동쪽, 1년",question:"태양 주기 운동의 궤도, 운동 방향과 주기로 바른 것은 무엇인가?"},{answer:"춘분점",question:"태양이 천적도의 남쪽에서 천적도의 북쪽으로 이동할 때 통과하게 되는 황적의 교차점을 무엇이라 하는가?"},{answer:"공상 소설",question:"토머스 모어가 쓴 유토피아는 어떤 소설인가?"},{answer:"군주제 시대",question:"파리 개선문의 주요 건축 양식은 로마 어느 시대에 속하는가?"},{answer:"밀로의 비너스",question:"파리 루브르 박물관의 3대 소장품에 속하는 것은 무엇인가?"},{answer:"카르타고",question:"페니키아인들은 기원전 12세기부터 식민지를 개척하기 시작했는데 그 중 가장 유명한 식민지는 어디인가?"},{answer:"원래 깃털 아래 자리잡은 새로운 깃털이 모두 자라면 원래 깃털이 빠진다",question:"펭귄의 털갈이 방식은 무엇인가?"},{answer:"이집트",question:"피라미드와 스핑크스가 위치한 국가는 어디인가?"},{answer:"젋은 음악가를 지도하는 것을 좋아한다.",question:"하이든이 파파 하이든 이라고 불린 이유는 무엇인가?"},{answer:"해도 내 경계선 길이",question:"해도에서 도폭이 의미하는 것은 무엇인가?"},{answer:"조타수",question:"해적선에서 심판을 보거나 전리품을 나눠주는 역할은 누가 담당하는가?"},{answer:"옥스퍼드 조례",question:"헨리 3세에게 몽포르 등 개혁파 귀족 등이 승인하도록 요구한 국정 개혁안은 무엇인가?"},{answer:"조개 껍데기",question:"호주 시드니의 오페라 하우스는 어떤 동물의 모습을 본뜬 것인가?"},{answer:"강선",question:"화약총 부품 중 탄환이 총신에서 나갈 때 정해진 방향을 향해 회전하도록 힘을 유지시켜주는 장치는 무엇인가?"},{answer:"아흐모세 1세",question:"힉소스인을 몰아내고 고대 이집트 제18왕조를 세운 파라오는 누구인가?"},{answer:"흑해",question:"다음 중 다뉴브강은 어디 바다로 흘러가는가?"},{answer:"댄스 언어",question:"꿀벌은 꿀을 채집하고 돌아와서 어떤 방법으로 꿀의 위치와 거리, 수량을 알려줄까?"},{answer:"나폴레옹",question:"베토벤은 한 인물을 위해 영웅교향곡을 썼으나, 그가 스스로 황제에 올랐다는 소식을 듣고 격노한 베토벤은 악보의 앞장을 찢어버린다. 그 인물은 누구인가?"},{answer:"라블레",question:"16세기 프랑스 인문주의 작가로 평민의 삶을 주로 다룬 인물은 누구인가?"},{answer:"카데시 전투",question:"람세스 2세가 다스리던 이집트가 히타이트와 치른 전투는 무엇인가?"},{answer:"이슬람 건축물",question:"산 마르코 광장의 베네치아 총독부 복도는 어떤 양식의 영향을 받았는가?"}]},iV8c:function(e,n){},p2So:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.355864a63a7122fe0311.js.map