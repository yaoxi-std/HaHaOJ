(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"360f":function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}]},[e("div",{staticStyle:{margin:"10px 20px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:n.content,expression:"content"}]},[e("code",{class:n.lang})])])])},a=[],o={data:function(){return{loaded:!1,lang:"C++",run_id:0,contest_id:"",content:""}},mounted:function(){var n=this;void 0!=this.$route.params.run_id&&void 0!=this.$route.params.contest_id&&(this.run_id=this.$route.params.run_id,this.contest_id=this.$route.params.contest_id,this.$req.get("showCsubmission",{run_id:this.run_id,id:this.contest_id}).then((function(t){void 0==t.errno&&(t=t.info,n.content="run_id: "+n.run_id+"\nlabel: "+t.label+"\nAuthor: "+t.author+"\nLanguage: "+t.lang+"\nStatus: "+t.status+"\nTime: "+t.time+"\nMemory: "+t.memory+"\nCode Length: "+t.length+"\nsubmit time: "+t.created_at+"\ncompile_info: \n"+t.compile_info+"\n********************************************\n\n"+t.code,"C11"==t.lang?n.lang="C":"Python"==t.lang.substr(0,6)?n.lang="Pyhton":"Java"==t.lang&&(n.lang="Java")),n.loaded=!0})))}},s=o,r=e("2877"),d=Object(r["a"])(s,i,a,!1,null,"bb86b7ac",null);t["default"]=d.exports}}]);