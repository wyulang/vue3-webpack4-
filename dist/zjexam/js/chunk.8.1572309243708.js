(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{288:function(t,e,s){"use strict";function l(t,e,s,l,a,i,n,r){var c,o="function"==typeof t?t.options:t;if(e&&(o.render=e,o.staticRenderFns=s,o._compiled=!0),l&&(o.functional=!0),i&&(o._scopeId="data-v-"+i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},o._ssrRegister=c):a&&(c=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(o.functional){o._injectStyles=c;var u=o.render;o.render=function(t,e){return c.call(e),u(t,e)}}else{var v=o.beforeCreate;o.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:o}}s.d(e,"a",function(){return l})},289:function(t,e,s){"use strict";var l=s(1),a=s(125).filter;l({target:"Array",proto:!0,forced:!s(126)("filter")},{filter:function(t,e){return a(this,t,1<arguments.length?e:void 0)}})},290:function(t,e,s){var l=s(1),a=s(7);l({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:s(186)})},291:function(t,e,s){var l=s(1),a=s(4),i=s(14),n=s(47).f,r=s(7),c=a(function(){n(1)});l({target:"Object",stat:!0,forced:!r||c,sham:!r},{getOwnPropertyDescriptor:function(t,e){return n(i(t),e)}})},292:function(t,e,s){var l=s(1),a=s(7),c=s(185),o=s(14),u=s(47),v=s(73);l({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){for(var e,s,l=o(t),a=u.f,i=c(l),n={},r=0;i.length>r;)void 0!==(s=a(l,e=i[r++]))&&v(n,e,s);return n}})},293:function(t,e,s){var l=s(7),a=s(9).f,i=Function.prototype,n=i.toString,r=/^\s*function ([^ (]*)/;!l||"name"in i||a(i,"name",{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(t){return""}}})},294:function(t,e,s){"use strict";var l=s(1),a=s(125).map;l({target:"Array",proto:!0,forced:!s(126)("map")},{map:function(t,e){return a(this,t,1<arguments.length?e:void 0)}})},299:function(t,e,s){"use strict";var l=s(1),a=s(48),i=s(15),n=s(4),r=s(76),c=[].sort,o=[1,2,3],u=n(function(){o.sort(void 0)}),v=n(function(){o.sort(null)}),f=r("sort");l({target:"Array",proto:!0,forced:u||!v||f},{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),a(t))}})},307:function(t,e,s){},308:function(t,e,s){},361:function(t,e,s){"use strict";var l=s(307);s.n(l).a},362:function(t,e,s){"use strict";var l=s(308);s.n(l).a},424:function(t,e,s){"use strict";s.r(e);function l(){var s=this,t=s.$createElement,l=s._self._c||t;return l("div",{staticClass:"w-all"},[l("div",{staticClass:"w-all school-top"}),l("div",{staticClass:"w-all flex jc-c ai-c h-60 sha-b"},s._l(s.menuList,function(t,e){return l("div",{key:e,staticClass:"shcool-nav",class:{active:s.nav==e},on:{click:function(t){return s.setNav(e)}}},[s._v(s._s(t))])}),0),l("div",{staticClass:"w-1200 m-auto mb25"},[l("div",{staticClass:"w-all flex  ai-c h-70 bb-c mb15",class:[6,7,8].includes(s.nav)?"jc-s":"jc-b"},[l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("搜索：")]),l("el-input",{staticClass:"w-200",attrs:{size:"small",multiple:"",placeholder:s.placeholder},model:{value:s.query.name,callback:function(t){s.$set(s.query,"name",t)},expression:"query.name"}})],1),l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("地区：")]),l("el-select",{attrs:{multiple:"",clearable:"",size:"small",placeholder:"全部"},on:{change:s.changeSerch},model:{value:s.query.city,callback:function(t){s.$set(s.query,"city",t)},expression:"query.city"}},s._l(s.areaList,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),[1,6,7,8].includes(s.nav)?s._e():l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("级别：")]),l("el-select",{attrs:{multiple:"",clearable:"",size:"small",placeholder:"全部"},on:{change:s.changeSerch},model:{value:s.query.level,callback:function(t){s.$set(s.query,"level",t)},expression:"query.level"}},s._l(s.leaveList,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),1==s.nav?l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("类别：")]),l("el-select",{attrs:{multiple:"",clearable:"",size:"small",placeholder:"全部"},on:{change:s.changeSerch},model:{value:s.query.abtype,callback:function(t){s.$set(s.query,"abtype",t)},expression:"query.abtype"}},[l("el-option",{attrs:{label:"A",value:"A"}}),l("el-option",{attrs:{label:"B",value:"B"}})],1)],1):s._e(),1==s.nav?l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("类别：")]),l("el-select",{attrs:{multiple:"",clearable:"",size:"small",placeholder:"全部"},on:{change:s.changeSerch},model:{value:s.query.colleges,callback:function(t){s.$set(s.query,"colleges",t)},expression:"query.colleges"}},[l("el-option",{attrs:{label:"一流大学建设高校",value:"一流大学建设高校"}}),l("el-option",{attrs:{label:"一流学科建设高校",value:"一流学科建设高校"}})],1)],1):s._e(),1!=s.nav?l("div",{staticClass:"flex ai-c",class:{mr20:[6,7,8].includes(s.nav)}},[l("div",[s._v("主管部门：")]),l("el-select",{attrs:{multiple:"",clearable:"",size:"small",placeholder:"全部"},on:{change:s.changeSerch},model:{value:s.query.department,callback:function(t){s.$set(s.query,"department",t)},expression:"query.department"}},s._l(s.departmentList,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1):s._e()]),0==s.nav&&s.list.length?l("div",{staticClass:"w-all flex jc-b fw"},s._l(s.list,function(e,t){return l("div",{key:t,staticClass:"hand w23 h-100 sha-6 ra-3 mb10 flex fd-c pp10",attrs:{title:e.colleges&&e.colleges.collegesName||""},on:{click:function(t){return s.href(e.colleges.site)}}},[l("span",{staticClass:"w-all"},[s._v(s._s((e.colleges&&e.colleges.collegesName||"").replace(/\（.+|\(.+/g,"")))]),l("div",{staticClass:"flex-1 flex jc-s ai-c"},s._l(e.color,function(t,e){return l("div",{key:e,staticClass:"h-20 lh-20 mr5 fc-fff ra-3 fs-12 pl3 pr3",style:{"background-color":t.color}},[s._v(s._s(t.value))])}),0),l("div",{staticClass:"flex jc-b"},[l("span",[s._v(s._s(e.colleges&&e.colleges.department))]),l("span",[s._v(s._s(e.colleges&&e.colleges.province))])])])}),0):s._e(),1==s.nav&&s.list.length?l("table",{staticClass:"school-table"},[s._m(0),l("tbody",s._l(s.list,function(t,e){return l("tr",{key:e},[l("td",[s._v(s._s(t.id))]),l("td",[s._v(s._s(t.collegeName))]),l("td",[l("div",{staticClass:"h-all w-all flex"},["A"==t.topType?l("span",{staticClass:"w-25 h-25 fc-fff ra-3 lh-25 centent",staticStyle:{"background-color":"#e4007f"}},[s._v(s._s(t.topType?t.topType:"-"))]):"B"==t.topType?l("span",{staticClass:"w-25 fc-fff h-25 ra-3 lh-25 centent",staticStyle:{"background-color":"#ff8600"}},[s._v(s._s(t.topType?t.topType:"-"))]):l("span",{staticClass:"w-25 h-25 ra-3 lh-25 centent"},[s._v(s._s(t.topType?t.topType:"-"))])])]),l("td",[s._v(s._s(t.topMajorNum))]),l("td",[s._v(s._s(t.collegeProvince))]),l("td",[s._v(s._s(t.topTypeString))]),l("td",{staticStyle:{"text-align":"left"}},[s._v(s._s(t.topMajorName))])])}),0)]):s._e(),[2,3,4,5].includes(s.nav)&&s.list.length?l("table",{staticClass:"school-table"},[l("thead",[l("tr",[l("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[s._v("院校名称")]),l("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[s._v("院校级别")]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v("所在地区")]),l("td",{staticClass:"wb-10"},[s._v("主管部门")]),l("td",{staticClass:"wb-10"},[s._v(s._s([,,"邱均平排名","软科排名","武书连排名","校友会排名"][s.nav]))])])]),l("tbody",s._l(s.list,function(t,e){return l("tr",{key:e},[l("td",{staticStyle:{"text-align":"left"}},[s._v(s._s(t.universityName&&t.universityName.replace(/\（.+|\(.+/g,"")))]),l("td",[l("div",{staticClass:"flex-1 flex jc-s ai-c"},s._l(t.color,function(t,e){return l("div",{key:e,staticClass:"h-20 lh-20 mr5 fc-fff ra-3 fs-12 pl3 pr3",style:{"background-color":t.color}},[s._v(s._s(t.value))])}),0)]),l("td",{staticStyle:{"text-align":"left"}},[s._v(s._s(["北京","上海","重庆","天津"].includes(t.provinces)?t.provinces:t.provinces+t.city))]),l("td",[s._v(s._s(t.department))]),l("td",[s._v(s._s(t[[,,"qjRanking","rkRanking","wsRanking","xyhRanking"][s.nav]]))])])}),0)]):s._e(),[6,7,8].includes(s.nav)&&s.list.length?l("table",{staticClass:"school-table"},[s._m(1),l("tbody",s._l(s.list,function(t,e){return l("tr",{key:e},[l("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[s._v(s._s(t.universityName))]),l("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[l("div",{staticClass:"flex-1 flex jc-s ai-c"},s._l(t.color,function(t,e){return l("div",{key:e,staticClass:"h-20 lh-20 mr5 fc-fff ra-3 fs-12 pl3 pr3",style:{"background-color":t.color}},[s._v(s._s(t.value))])}),0)]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v(s._s(["北京","上海","重庆","天津"].includes(t.province)?t.province:t.province+t.city))]),l("td",{staticClass:"wb-10"},[s._v(s._s(t.ranking))]),l("td",{staticClass:"wb-10"},[s._v(s._s(t.department?t.department:"-"))])])}),0)]):s._e(),[9,10].includes(s.nav)&&s.list.length?l("table",{staticClass:"school-table"},[l("thead",[l("tr",[l("td",{staticClass:"wb-10"},[s._v("学科")]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v("院校名称")]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v("院校级别")]),9==s.nav?l("td",{staticClass:"wb-10"},[s._v("评估结果")]):s._e(),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v("所在地区")]),l("td",{staticClass:"wb-10"},[s._v("主管部门")])])]),l("tbody",s._l(s.list,function(t,e){return l("tr",{key:e},[l("td",{staticClass:"wb-10"},[s._v(s._s(t.professional))]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v(s._s(t.universityName))]),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[l("div",{staticClass:"flex-1 flex jc-s ai-c"},s._l(t.color,function(t,e){return l("div",{key:e,staticClass:"h-20 lh-20 mr5 fc-fff ra-3 fs-12 pl3 pr3",style:{"background-color":t.color}},[s._v(s._s(t.value))])}),0)]),9==s.nav?l("td",{staticClass:"wb-10"},[s._v(s._s(t.estimate))]):s._e(),l("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[s._v(s._s(["北京","上海","重庆","天津"].includes(t.provinces)?t.provinces:t.provinces+t.city))]),l("td",{staticClass:"wb-10"},[s._v(s._s(t.department))])])}),0)]):s._e(),s.list.length?s._e():l("div",{staticClass:"h-250 w-all flex ai-c jc-c"},[s._m(2)]),l("spinner")],1)])}l._withStripped=!0;s(32),s(289),s(183),s(75),s(26),s(294),s(299),s(133),s(293),s(290),s(31),s(291),s(292),s(127),s(17),s(187),s(49),s(78),s(77),s(33),s(184),s(34),s(130);function a(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner spinner--circle-8",style:t.styles},[s("div",{staticClass:"spinner-inner",style:t.innerStyles},[t._m(0)])])}var i=s(74);a._withStripped=!0;var n={props:{size:{default:"40px"}},computed:{innerStyles:function(){return{transform:"scale("+parseInt(this.size)/44+")"}},styles:function(){return{width:this.size,height:this.size}}}},r=(s(361),s(288)),c=Object(r.a)(n,a,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ball-container"},[s("div",{staticClass:"contener_mixte"},[s("div",{staticClass:"ballcolor ball_1"},[t._v(" ")])]),s("div",{staticClass:"contener_mixte"},[s("div",{staticClass:"ballcolor ball_2"},[t._v(" ")])]),s("div",{staticClass:"contener_mixte"},[s("div",{staticClass:"ballcolor ball_3"},[t._v(" ")])]),s("div",{staticClass:"contener_mixte"},[s("div",{staticClass:"ballcolor ball_4"},[t._v(" ")])])])}],!1,null,"9133ee04",null);c.options.__file="src/component/spinner.vue";c.exports;function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,l)}return s}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={data:function(){return{nav:0,query:{which:"",department:[],placeholder:"请输入您的心仪院校",city:[],level:[],name:"",abtype:[],colleges:[]},menuList:["院校网站详情","双一流院校详情","邱均平排行","软科排行","武书连排行","校友会排行","独立院校排行","民办院校排行","高职高专院校排行","学科专业排行","软科学科排行"],areaList:[],baseLeaveList:[],leaveList:[],departmentList:[],schoolList:[],list:[],collegesList:[]}},methods:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(s,!0).forEach(function(t){u(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},Object(i.mapActions)(["getArea","getCollegesLevel","getDepartment","getRankList","getTopCollege"]),{changeSerch:function(){this.serchData()},serchData:function(){var e=this;[9,10].includes(this.nav)?this.placeholder="请输入您的心仪专业":this.placeholder="请输入您的心仪院校";var t,s,l,a=this.$loading(this.$store.state.loadObj),i={};if(t=this.query.department.length?this.query.department:this.departmentList.map(function(t){return t.value}),s=this.query.level.length?this.query.level:this.leaveList.map(function(t){return t.value}),l=this.query.city.length?this.query.city:this.areaList.map(function(t){return t.value}),i={department:t.toString(),areaId:l.toString(),collegesLevelId:s.toString(),level:s.toString()},this.query.name&&(i.name=this.query.name),1==this.nav&&this.collegesList.length){a&&a.close(),this.list=this.collegesList,this.query.name&&(this.list=this.list.filter(function(t){return t.collegeName.includes(e.query.name)})),this.query.colleges.length&&(this.list=this.list.filter(function(t){return e.query.colleges.includes(t.topTypeString)})),this.query.abtype.length&&(this.list=this.list.filter(function(t){return e.query.abtype.includes(t.topType)}));var n=this.areaList.filter(function(t){return e.query.city.includes(t.value)}).map(function(t){return t.label});return this.query.city.length&&(this.list=this.list.filter(function(t){return n.includes(t.collegeProvince)})),!1}0==this.nav?(delete i.level,this.getCheck()&&(i={type:this.nav})):1==this.nav?i={}:2==this.nav?(delete i.collegesLevelId,i.which="QJP"):3==this.nav?(delete i.collegesLevelId,i.which="RK"):4==this.nav?(delete i.collegesLevelId,i.which="WS"):5==this.nav?(delete i.collegesLevelId,i.which="XYH"):[6,7,8].includes(this.nav)?(delete i.collegesLevelId,delete i.level):9==this.nav?delete i.collegesLevelId:10==this.nav&&(delete i.collegesLevelId,i.which="RKXK"),i.type=this.nav,this.getRankList(i).then(function(t){a.close(),e.list=t,0==e.nav?e.list.forEach(function(t){t.color=e.setRankColor(t.colleges)}):1==e.nav?e.collegesList=t:2==e.nav?(e.list=e.list.filter(function(t){return parseInt(t.qjRanking||0)}),e.list.forEach(function(t){t.color=e.setRankColor(t)})):3==e.nav?(e.list=e.list.filter(function(t){return parseInt(t.rkRanking||0)}).sort(function(t,e){return parseInt(t.rkRanking||0)-parseInt(e.rkRanking||0)}),e.list.forEach(function(t){t.color=e.setRankColor(t)})):4==e.nav?(e.list=e.list.filter(function(t){return parseInt(t.wsRanking||0)}).sort(function(t,e){return parseInt(t.wsRanking||0)-parseInt(e.wsRanking||0)}),e.list.forEach(function(t){t.color=e.setRankColor(t)})):5==e.nav?(e.list=e.list.filter(function(t){return parseInt(t.xyhRanking||0)}).sort(function(t,e){return parseInt(t.xyhRanking||0)-parseInt(e.xyhRanking||0)}),e.list.forEach(function(t){t.color=e.setRankColor(t)})):[6,7,8,9,10].includes(e.nav)&&e.list.forEach(function(t){t.color=e.setRankColor(t)})})},getCheck:function(){var t=!0;for(var e in this.query)if(this.query[e].length&&"placeholder"!=e){t=!1;break}return t},setNav:function(t){var e=this;this.list=[{provinces:"",city:"",province:""}],this.query={which:"",department:[],city:[],level:[],name:"",abtype:[],colleges:[]},this.$router.push({name:"school",query:{type:t}}),this.setLevel(t),this.nav=parseInt(t),this.getDepartment(this.nav).then(function(t){e.departmentList=t.map(function(t){return{label:t,value:t}}),setTimeout(function(){e.serchData(e.nav)},200)})},setRankColor:function(t){var e=[];return t.isToo&&"0"!=t.isToo&&e.push({value:"211",color:"#fb989d"}),t.isNef&&"0"!=t.isNef&&e.push({value:"985",color:"#f6846c"}),t.isSyl&&"0"!=t.isSyl&&e.push({value:"双一流",color:"#91d7cd"}),"公办"==t.type&&e.push({value:"公办",color:"#bbdcc9"}),"民办学校"==t.type&&e.push({value:"民办",color:"#d7ac4d"}),"独立学院"==t.type&&e.push({value:"独立",color:"#3ea5ce"}),"中外合作办学"==t.type&&e.push({value:"中外",color:"#6d8285"}),"高职"==t.level?e.push({value:"高职",color:"#8f81be"}):"高职高专"==t.level?e.push({value:"中外",color:"#8f81be"}):"独立"==t.level?e.push({value:"独立",color:"#3ea5ce"}):"民办"==t.level?e.push({value:"民办",color:"#d7ac4d"}):e.push({value:"本科",color:"#bcdcc5"}),e},setLevel:function(t){this.leaveList=[];var e=this.nav;null!=t&&(e=t),this.leaveList=0==e?this.baseLeaveList:[{label:"985院校",value:"985"},{label:"211院校",value:"211"},{label:"双一流院校",value:"syl"},{label:"普通本科",value:"not"}]}}),created:function(){var e=this;this.nav=parseInt(this.$route.query.type||0),Promise.all([this.getArea(),this.getCollegesLevel(),this.getDepartment(this.nav)]).then(function(t){e.areaList=t[0].map(function(t){return{label:t.areaName,value:t.id}}),e.baseLeaveList=t[1].map(function(t){return{label:t.levelName,value:t.id}}),e.departmentList=t[2].map(function(t){return{label:t,value:t}}),e.setLevel(),e.serchData()})},watch:{"query.name":function(){this.changeSerch()}}},f=(s(362),Object(r.a)(v,l,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",{staticClass:"w-70"},[t._v("序号")]),s("td",[t._v("学校名称")]),s("td",{staticClass:"w-70"},[t._v("类别")]),s("td",[t._v("学科建设数量")]),s("td",{staticClass:"w-100"},[t._v("省市")]),s("td",[t._v("类型")]),s("td",{staticClass:"wb-30"},[t._v("双一流建设学科")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[t._v("院校名称")]),s("td",{staticClass:"wb-20",staticStyle:{"text-align":"left"}},[t._v("院校级别")]),s("td",{staticClass:"wb-10",staticStyle:{"text-align":"left"}},[t._v("所在地区")]),s("td",{staticClass:"wb-10"},[t._v("排名")]),s("td",{staticClass:"wb-10"},[t._v("主管部门")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex fd-c jc-c ai-c"},[e("i",{staticClass:"iconfont iconnotes fs-60 fc-ddd"}),e("span",{staticClass:"fs-18 mt10"},[this._v("没有找到符合您筛选条件的学校，请仔细检查您的筛选条件，重新搜索查询")])])}],!1,null,"5eb4d992",null));f.options.__file="src/client/zjexam/pages/school/index.vue";e.default=f.exports}}]);