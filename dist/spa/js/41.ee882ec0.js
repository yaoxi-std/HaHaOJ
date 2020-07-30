(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{daa6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-lg"},[i("Row",{staticClass:"q-mt-md"},[i("span",{staticStyle:{"font-size":"15px",color:"black"}},[t._v(" 用户名 "),i("Input",{staticStyle:{width:"200px","margin-left":"2px"},attrs:{placeholder:"Search By username"},on:{"on-enter":t.search},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),i("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"info",shape:"circle",icon:"ios-search"},on:{click:t.search}},[t._v("查找")]),i("Page",{staticStyle:{float:"right"},attrs:{total:t.total,"page-size":t.page_size,"show-total":"","show-elevator":""},on:{"on-change":t.changePage}}),i("div",{staticStyle:{clear:"both"}})],1),i("br"),i("Table",{attrs:{border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.row;return[i("div",{staticClass:"q-gutter-xs"},[i("Button",{attrs:{type:"primary"},on:{click:function(e){return t.modifyUserInfo(s)}}},[t._v(" 修改信息 ")]),i("Button",{attrs:{type:"warning"},on:{click:function(e){return t.forPrivilege(s)}}},[t._v(" 添加管理员权限 ")]),i("Button",{attrs:{type:"error"},on:{click:function(e){return t.deleteUser(s)}}},[t._v(" 删除 ")])],1)]}}])}),(16384&t.$store.state.user.privilege)>0?i("Modal",{attrs:{title:"用户权限",width:"800px"},on:{"on-ok":t.updatePrivilege},model:{value:t.privilegeModal,callback:function(e){t.privilegeModal=e},expression:"privilegeModal"}},[i("CheckboxGroup",{staticClass:"q-gutter-md",model:{value:t.had_pri_list,callback:function(e){t.had_pri_list=e},expression:"had_pri_list"}},t._l(t.pri_value_list,(function(e,s){return i("Checkbox",{key:s,attrs:{label:e,border:""}},[i("span",{staticStyle:{color:"black"}},[t._v(t._s(t.pri_desc_list[s])+" ")])])})),1)],1):t._e()],1)},r=[],a={name:"userIndex",data:function(){return{columns:[{title:"标号",key:"id",width:70,align:"center"},{title:"用户名",key:"username"},{title:"创建时间",key:"created_at"},{title:"学校",key:"school"},{title:"邮箱",key:"email"},{title:"用户身份",key:"status",width:120,align:"center"},{width:400,title:"操作",slot:"action"}],data:[],page_size:50,total:0,username:"",privilegeModal:!1,choose_row:null,pri_desc_list:[],pri_value_list:[],had_pri_list:[]}},methods:{changePage:function(t){var e=(t-1)*this.page_size+1,i=t*this.page_size;this.getUsers(e,i)},search:function(){this.getUsers(1,this.page_size)},getUsers:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.page_size,s={l:e,r:i};this.username=this.username.trim(),""!=this.username&&(s["username"]=this.username),this.$req.get("getUsers",s).then((function(e){void 0==e.errno&&(t.data=e.data,t.total=e.total)}))},modifyUserInfo:function(t){this.$notify("error","暂未实现")},deleteUser:function(t){this.$notify("error","暂未实现")},forPrivilege:function(t){var e=this;this.$req.get("getPrivileges",{id:t.id}).then((function(i){void 0==i.errno&&(e.pri_desc_list=i.pri_desc_list,e.pri_value_list=i.pri_value_list,e.had_pri_list=i.had_pri_list,e.choose_row=t,e.privilegeModal=!0)}))},updatePrivilege:function(){var t=this;this.$q.dialog({dark:!0,title:"确认框",message:'你确定要修改 <strong style="font-size:18px;color:red">'+this.choose_row.username+"</strong>的权限吗",cancel:!0,persistent:!0,html:!0}).onOk((function(){var e=new FormData;e.set("id",t.choose_row.id),e.set("privileges",JSON.stringify(t.had_pri_list)),t.$req.post("updatePrivileges",e).then((function(e){void 0==e.errno&&(t.choose_row.status=e.status,t.$notify("success","修改用户权限成功"))}))}))}},mounted:function(){var t=this;setTimeout((function(){t.getUsers()}),300)}},o=a,n=i("2877"),l=Object(n["a"])(o,s,r,!1,null,"6ccf32ca",null);e["default"]=l.exports}}]);