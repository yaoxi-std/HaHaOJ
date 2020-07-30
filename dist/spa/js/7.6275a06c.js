(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{1502:function(t,e,a){},3712:function(t,e,a){},"80cc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"q-pa-lg",staticStyle:{width:"1700px"}},[a("br"),(4096&t.$store.state.user.privilege)>0?a("div",[a("CheckboxGroup",{model:{value:t.rejudgeList,callback:function(e){t.rejudgeList=e},expression:"rejudgeList"}},t._l(t.labels,(function(e,n){return a("Checkbox",{key:n,attrs:{label:e,border:""}},[t._v(" "+t._s(t.titles[n])+" ")])})),1),a("Button",{staticClass:"q-mt-md",attrs:{type:"warning"},on:{click:t.rejudge}},[t._v(" Rejudge ")])],1):t._e(),a("br"),a("br"),a("Row",[a("div",{staticStyle:{float:"left"}},[a("div",{staticStyle:{"font-size":"15px",color:"black"}},[t._v("\n          Problem "),a("Input",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"search like A"},on:{"on-enter":t.search},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}}),t._v("\n          Author "),a("Input",{staticStyle:{width:"150px","margin-right":"20px"},on:{"on-enter":t.search},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),t._v("\n          Lang\n          "),a("Select",{staticStyle:{width:"150px","margin-right":"20px"},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},t._l(t.langList,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label))])})),1),t._v("\n          Status\n          "),a("Select",{staticStyle:{width:"200px"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.statusList,(function(e){return a("Option",{key:e.value,class:e.label,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1),a("Button",{staticStyle:{"margin-left":"20px"},attrs:{loading:t.sloading,type:"info",shape:"circle",icon:"ios-search"},on:{click:t.search}},[t._v("查找")]),a("Button",{staticStyle:{"margin-left":"20px"},attrs:{loading:t.floading,type:"error",shape:"circle"},on:{click:t.fresh}},[t._v("刷新")])],1)]),a("Page",{staticStyle:{float:"right"},attrs:{total:t.tot,"page-size":t.siz,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}})],1),a("br"),a("div",{staticClass:"submissiontable"},[a("Table",{attrs:{columns:t.columns,data:t.data,"row-class-name":t.rowClassName},scopedSlots:t._u([{key:"run_id",fn:function(e){var n=e.row;return[a("span",[t._v(" "+t._s(n.run_id))])]}},{key:"author",fn:function(e){var a=e.row;return[t._v("\n          "+t._s(a.author)+"\n        ")]}},{key:"status",fn:function(e){var n=e.row;return[a("span",{class:n.status},[t._v(" "+t._s(n.status)+" ")])]}},{key:"problem",fn:function(t){var e=t.row;return[a("q-btn",{attrs:{flat:"",label:e.label,color:"primary","no-caps":""}})]}},{key:"action",fn:function(e){var n=e.row;return[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.lookCode(n)}}},[t._v(" 查看 ")])]}}])})],1)],1)])},l=[],s={data:function(){return{rejudgeList:[],columns:[{title:"Run ID",slot:"run_id",align:"center",width:70},{title:"Author",slot:"author",align:"center",width:250},{title:"Status",slot:"status",align:"center",width:200},{title:"Score",key:"score",align:"center"},{title:"Problem",slot:"problem",align:"center"},{title:"Time(MS)",key:"time",align:"center"},{title:"Memory(MB)",key:"memory",align:"center"},{title:"Length",key:"length",align:"center"},{title:"Lang",key:"lang",align:"center"},{title:"SubmitTime",key:"submitTime",align:"center",width:200},{title:"Action",slot:"action",align:"center"}],tot:0,siz:50,label:"",author:"",langList:[{value:"All",label:"All"},{value:"C11",label:"C11"},{value:"C++11",label:"C++11"},{value:"C++14",label:"C++14"},{value:"C++17",label:"C++17"},{value:"Python2",label:"Python2"},{value:"Python3",label:"Python3"},{value:"Java",label:"Java"}],lang:"All",statusList:[{value:"All",label:"All"},{value:"Queueing",label:"Queueing"},{value:"Running",label:"Running"},{value:"Accepted",label:"Accepted"},{value:"WrongAnswer",label:"WrongAnswer"},{value:"CompileError",label:"CompileError"},{value:"RuntimeError",label:"RuntimeError"},{value:"TimeLimitExceeded",label:"TimeLimitExceeded"},{value:"MemoryLimitExceeded",label:"MemoryLimitExceeded"},{value:"OutputLimitExceeded",label:"OutputLimitExceeded"},{value:"SystemError",label:"SystemError"}],status:"All",loaded:!1,sloading:!1,floading:!1,data:[],contest_id:0,labels:[],titles:[]}},methods:{rejudge:function(){var t=this;0!=this.rejudgeList.length?this.$q.dialog({dark:!0,title:"确认框",message:"你确定要重测吗",cancel:!0,persistent:!0}).onOk((function(){var e=new FormData;e.set("id",t.contest_id),e.set("labels",JSON.stringify(t.rejudgeList)),t.$req.post("rejudge",e).then((function(e){e&&t.$notify("success","正在重测")}))})):this.$notify("error","请选择重测的问题")},get_rules:function(){var t={};"All"!=this.lang&&(t.lang=this.lang),"All"!=this.status&&(t.status=this.status);var e=this.label.trim();return""!=e&&(t.label=e),e=this.author.trim(),""!=e&&(t.author=e),t},changePage:function(t){var e=(t-1)*this.siz+1,a=e+this.siz-1;this.searchCsubmissions(e,a,this.get_rules())},search:function(){var t=this;this.sloading=!0,setTimeout((function(){t.searchCsubmissions(1,50,t.get_rules())}),600)},fresh:function(){var t=this;this.floading=!0,setTimeout((function(){t.searchCsubmissions(1,50,t.get_rules())}),600)},searchCsubmissions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=new FormData;l.set("id",this.contest_id),l.set("l",e),l.set("r",a),l.set("rules",JSON.stringify(n)),this.$req.post("forCsubmissions",l).then((function(e){void 0==e.errno&&(t.data=e.data,t.tot=e.total,t.loaded=!0),t.floading=t.sloading=!1}))},rowClassName:function(t,e){return t.author==this.$store.state.user.username?"myRow":""},lookCode:function(t){var e=this.$router.resolve({name:"contestCode",params:{contest_id:this.contest_id,run_id:t.run_id}});window.open(e.href,"_blank")}},mounted:function(){var t=this;this.contest_id=this.$route.params.id,this.contest_id?(this.$req.get("forCproblemTitles",{id:this.contest_id}).then((function(e){void 0==e.errno&&(t.labels=e.labels,t.titles=e.titles)})),this.searchCsubmissions()):this.$router.push({name:"contestManage"})}},i=s,r=(a("95be"),a("ce1f"),a("2877")),o=a("9c40"),u=a("eebe"),c=a.n(u),d=Object(r["a"])(i,n,l,!1,null,"2f8307ce",null);e["default"]=d.exports;c()(d,"components",{QBtn:o["a"]})},"95be":function(t,e,a){"use strict";var n=a("3712"),l=a.n(n);l.a},ce1f:function(t,e,a){"use strict";var n=a("1502"),l=a.n(n);l.a}}]);