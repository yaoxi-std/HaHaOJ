(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1754:function(t,s,e){},"4bfb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.loaded?e("div",{staticClass:"q-pa-md text-black"},[e("div",{staticClass:"text-h4"},[t._v("比赛ID :"),e("span",[t._v(t._s(t.contest.id))])]),e("div",{staticClass:"q-mt-lg"},[e("div",{staticClass:"desc"},[t._v(" 是否创建公开赛 ")]),e("div",{staticClass:"q-gutter-md q-mt-sm"},[e("q-radio",{attrs:{val:!1,label:"不公开",color:"Orange",dense:""},model:{value:t.contest.is_public,callback:function(s){t.$set(t.contest,"is_public",s)},expression:"contest.is_public"}}),e("q-radio",{attrs:{val:!0,label:"公开",color:"cyan",dense:""},model:{value:t.contest.is_public,callback:function(s){t.$set(t.contest,"is_public",s)},expression:"contest.is_public"}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.update(["is_public"],[t.contest.is_public])}}},[t._v(" 确认修改 ")])],1),t.contest.is_public?t._e():e("div",{staticClass:"row q-mt-md"},[t._m(0),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"输入比赛密码",type:"password",password:""},model:{value:t.contest.password,callback:function(s){t.$set(t.contest,"password",s)},expression:"contest.password"}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.update(["is_public","password"],[t.contest.is_public,t.contest.password])}}},[t._v(" 确认修改 ")])],1),e("q-separator",{staticClass:"q-mt-md"})],1),e("div",{staticClass:"desc q-mt-md"},[t._v(" 赛制 ")]),e("div",{staticClass:"q-gutter-md q-mt-sm"},[e("q-radio",{attrs:{val:"OI",label:"OI",color:"Orange",dense:"",disable:""},model:{value:t.contest.format,callback:function(s){t.$set(t.contest,"format",s)},expression:"contest.format"}}),e("q-radio",{attrs:{val:"ACM",label:"ACM",color:"cyan",dense:"",disable:""},model:{value:t.contest.format,callback:function(s){t.$set(t.contest,"format",s)},expression:"contest.format"}})],1),e("q-separator",{staticClass:"q-mt-md"}),e("div",{staticClass:"desc q-mt-md"},[t._v(" 比赛信息 ")]),e("div",{staticClass:"row q-mt-md"},[t._m(1),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"输入作者"},model:{value:t.contest.author,callback:function(s){t.$set(t.contest,"author",s)},expression:"contest.author"}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.update(["author"],[t.contest.author])}}},[t._v(" 确认修改 ")])],1),e("q-separator",{staticClass:"q-mt-md"}),e("div",{staticClass:"row q-mt-md"},[t._m(2),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"输入标题"},model:{value:t.contest.title,callback:function(s){t.$set(t.contest,"title",s)},expression:"contest.title"}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.update(["title"],[t.contest.title])}}},[t._v(" 确认修改 ")])],1),e("q-separator",{staticClass:"q-mt-md"}),e("div",{staticClass:"row q-mt-md"},[t._m(3),e("Input",{staticStyle:{width:"600px"},attrs:{type:"textarea",placeholder:"输入比赛描述",autosize:{minRows:4,maxRows:6}},model:{value:t.contest.desc,callback:function(s){t.$set(t.contest,"desc",s)},expression:"contest.desc"}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.update(["`desc`"],[t.contest.desc])}}},[t._v(" 确认修改 ")])],1),e("q-separator",{staticClass:"q-mt-md"}),e("div",{staticClass:"row q-mt-md"},[t._m(4),e("DatePicker",{attrs:{value:t.contest.begin,format:"yyyy-MM-dd HH:mm:ss",type:"datetime"},on:{"on-change":t.beginChange}})],1),e("div",{staticClass:"row q-mt-md"},[t._m(5),e("DatePicker",{attrs:{value:t.contest.end,format:"yyyy-MM-dd HH:mm:ss",type:"datetime"},on:{"on-change":t.endChange}}),e("Button",{staticClass:"q-ml-md",attrs:{type:"primary",ghost:""},on:{click:function(s){return t.updateTime()}}},[t._v(" 确认修改 ")])],1),e("q-separator",{staticClass:"q-mt-md"})],1):t._e()},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),e("strong",[t._v("比赛密码")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),e("strong",[t._v("作者")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),e("strong",[t._v("比赛标题")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("strong",[t._v("比赛描述")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),e("strong",[t._v("开始时间")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),e("strong",[t._v("结束时间")])])}],i={name:"newContest",data:function(){return{contest:{id:0,is_public:!1,password:"",format:"OI",title:"",author:"super_admin",desc:"",begin:"",end:"",status:"Pending"},begin:"",end:"",loaded:!1}},methods:{beginChange:function(t){this.begin=t,this.contest.begin=new Date(t)},endChange:function(t){this.end=t,this.contest.end=new Date(t)},updateTime:function(){""!=this.begin&&""!=this.end?this.update(["begin","end"],[this.begin,this.end]):""!=this.begin?this.update(["begin"],[this.begin]):""!=this.end&&this.update(["end"],[this.end])},validate:function(){return 0==this.contest.is_public&&""==this.contest.password?"密码不能为空":""==this.contest.author?"作者不能为空":""==this.contest.title?"标题不能为空":this.contest.end<=this.contest.begin?"考试结束时间必须晚于开始时间":""},update:function(t,s){var e=this,a=this.validate();if(""==a){var n=new FormData;n.set("id",this.contest.id);for(var i={},o=0;o<t.length;o++)i[t[o]]=s[o];n.set("update",JSON.stringify(i)),this.$req.post("updateContest",n).then((function(t){void 0==t.errno&&e.$notify("success","修改成功")}))}else this.$notify("error",a)}},mounted:function(){var t=this;void 0==this.$route.params.id?this.$router.push({name:"contestManage"}):(this.contest.id=this.$route.params.id,this.$req.get("getContestInfo",{id:this.contest.id}).then((function(s){void 0==s.errno&&(t.contest=s.contest,t.loaded=!0)})))}},o=i,c=(e("8bd8"),e("2877")),r=e("3786"),l=e("eb85"),d=e("eebe"),u=e.n(d),m=Object(c["a"])(o,a,n,!1,null,"c6e80d4c",null);s["default"]=m.exports;u()(m,"components",{QRadio:r["a"],QSeparator:l["a"]})},"8bd8":function(t,s,e){"use strict";var a=e("1754"),n=e.n(a);n.a}}]);