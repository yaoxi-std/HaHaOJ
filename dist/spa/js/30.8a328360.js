(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"8be9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loaded?i("div",[i("show-post",{attrs:{post_id:t.puzzle_id}})],1):t._e()},o=[],a=i("0320"),r={components:{showPost:a["a"]},data:function(){return{puzzle_id:0,contest_id:0,label:"",loaded:!1}},mounted:function(){var t=this;void 0!=this.$route.params.puzzle_id&&void 0!=this.$route.params.id&&void 0!=this.$route.params.label||this.$router.push({name:"home"}),this.puzzle_id=this.$route.params.puzzle_id,this.contest_id=this.$route.params.id,this.label=this.$route.params.label,this.$req.get("checkExistTeam",{id:this.contest_id}).then((function(e){void 0==e.errno?t.loaded=!0:t.$router.push({name:"home"})}))}},n=r,d=i("2877"),u=Object(d["a"])(n,s,o,!1,null,"07956f59",null);e["default"]=u.exports}}]);