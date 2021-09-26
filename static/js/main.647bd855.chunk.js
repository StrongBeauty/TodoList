(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{104:function(t,e,a){},105:function(t,e,a){},128:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),l=a.n(i);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(105);var r,c,s=a(171),d=a(172),u=a(173),m=a(164),f=a(130),p=a(167),b=a(175),g=a(176),v=a(174),k=a(17),h=a(25),E=a(80),C=a.n(E).a.create(Object(h.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}})),j=function(){return C.get("todo-lists")},O=function(t){return C.post("todo-lists",{title:t})},T=function(t){return C.delete("todo-lists/".concat(t))},y=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},I=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},x=function(t){return C.post("auth/login",t)},F=function(){return C.delete("auth/login")},L=function(){return C.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var P=function(t,e){t.messages.length?e(U({error:t.messages[0]})):e(U({error:"Some error occurred"})),e(J({status:"failed"}))},z=function(t,e){e(U({error:t.message?t.message:"Some error occurred"})),e(J({status:"failed"}))},N=a(26),D=Object(N.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),M=D.reducer,q=D.actions.setIsLoggedInAC,B=Object(N.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),H=B.reducer,R=B.actions,U=R.setAppErrorAC,J=R.setAppStatusAC,K=R.setAppInitializedAC,W=Object(N.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(h.a)(Object(h.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),V=W.reducer,Y=W.actions,$=Y.removeTodolistAC,_=Y.addTodolistAC,G=Y.changeTodolistTitleAC,Q=Y.changeTodolistFilterAC,X=Y.changeTodolistEntityStatusAC,Z=Y.setTodolistsAC,tt=Object(N.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(h.a)(Object(h.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(_,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase($,(function(t,e){delete t[e.payload.id]})),t.addCase(Z,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),et=tt.reducer,at=tt.actions,nt=at.removeTaskAC,ot=at.addTaskAC,it=at.updateTaskAC,lt=at.setTasksAC,rt=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var l=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);S(a,t,l).then((function(o){if(0===o.data.resultCode){var i=it({taskId:t,model:e,todolistId:a});n(i)}else P(o.data,n)})).catch((function(t){z(t,n)}))}else console.warn("task not found in the state")}},ct=a(168),st=a(129),dt=a(44),ut=a(177),mt=a(165),ft=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var l=Object(n.useState)(""),r=Object(dt.a)(l,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(dt.a)(d,2),f=u[0],p=u[1],b=function(){""!==c.trim()?(e(c),s("")):p("Title is required")};return o.a.createElement("div",null,o.a.createElement(ut.a,{variant:"outlined",disabled:i,error:!!f,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==f&&p(null),13===t.charCode&&b()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:b,disabled:i},o.a.createElement(mt.a,null)))})),pt=a(87),bt=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(dt.a)(e,2),i=a[0],l=a[1],r=Object(n.useState)(t.value),c=Object(dt.a)(r,2),s=c[0],d=c[1];return i?o.a.createElement(ut.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){l(!0),d(t.value)}},t.value)})),gt=a(166),vt=a(179),kt=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},o.a.createElement(vt.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(bt,{value:t.task.title,onChange:i}),o.a.createElement(m.a,{onClick:e},o.a.createElement(gt.a,null)))})),ht=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(pt.a)(t,["demo"]);console.log("Todolist called");var l=Object(k.b)();Object(n.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(J({status:"loading"})),I(t).then((function(a){var n=a.data.items;e(lt({tasks:n,todolistId:t})),e(J({status:"succeeded"}))}))});l(e)}}),[]);var c=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(bt,{value:i.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(gt.a,null))),o.a.createElement(ft,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,b.map((function(t){return o.a.createElement(kt,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(p.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default"},"All"),o.a.createElement(p.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary"},"Active"),o.a.createElement(p.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),Et=a(13),Ct=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.todolists})),l=Object(k.c)((function(t){return t.tasks})),r=Object(k.c)((function(t){return t.auth.isLoggedIn})),c=Object(k.b)();Object(n.useEffect)((function(){if(!a&&r){var t=function(t){t(J({status:"loading"})),j().then((function(e){t(Z({todolists:e.data})),t(J({status:"succeeded"}))})).catch((function(e){z(e,t)}))};c(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){A(e,t).then((function(n){var o=nt({taskId:t,todolistId:e});a(o)}))}}(t,e);c(a)}),[]),d=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(J({status:"loading"})),w(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=ot({task:e});a(n),a(J({status:"succeeded"}))}else P(t.data,a)})).catch((function(t){z(t,a)}))}}(t,e);c(a)}),[]),u=Object(n.useCallback)((function(t,e,a){var n=rt(t,{status:e},a);c(n)}),[]),m=Object(n.useCallback)((function(t,e,a){var n=rt(t,{title:e},a);c(n)}),[]),f=Object(n.useCallback)((function(t,e){var a=Q({id:e,filter:t});c(a)}),[]),p=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(J({status:"loading"})),t(X({id:e,status:"loading"})),T(e).then((function(a){t($({id:e})),t(J({status:"succeeded"}))}))});c(a)}),[]),b=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){y(t,e).then((function(n){a(G({id:t,title:e}))}))}}(t,e);c(a)}),[]),g=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(J({status:"loading"})),O(t).then((function(t){e(_({todolist:t.data.data.item})),e(J({status:"succeeded"}))}))}}(t);c(e)}),[c]);return r?o.a.createElement(o.a.Fragment,null,o.a.createElement(ct.a,{container:!0,style:{padding:"20px"}},o.a.createElement(ft,{addItem:g})),o.a.createElement(ct.a,{container:!0,spacing:3},i.map((function(t){var e=l[t.id];return o.a.createElement(ct.a,{item:!0,key:t.id},o.a.createElement(st.a,{style:{padding:"10px"}},o.a.createElement(ht,{todolist:t,tasks:e,removeTask:s,changeFilter:f,addTask:d,changeTaskStatus:u,removeTodolist:p,changeTaskTitle:m,changeTodolistTitle:b,demo:a})))})))):o.a.createElement(Et.a,{to:"/login"})},jt=a(181),Ot=a(178);function Tt(t){return o.a.createElement(Ot.a,Object.assign({elevation:6,variant:"filled"},t))}function yt(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),a=function(t,a){"clickaway"!==a&&e(U({error:null}))},n=null!==t;return o.a.createElement(jt.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(Tt,{onClose:a,severity:"error"},t))}var It=a(51),At=a(182),wt=a(163),St=a(169),xt=a(170),Ft=a(86),Lt=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.auth.isLoggedIn})),a=Object(Ft.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(J({status:"loading"})),x(a).then((function(e){0===e.data.resultCode?(t(q({value:!0})),t(J({status:"succeeded"}))):P(e.data,t)})).catch((function(e){z(e,t)}))}))}});return e?o.a.createElement(Et.a,{to:"/"}):o.a.createElement(ct.a,{container:!0,justify:"center"},o.a.createElement(ct.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(At.a,null,o.a.createElement(wt.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(St.a,null,o.a.createElement(ut.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(ut.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(xt.a,{label:"Remember me",control:o.a.createElement(vt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Pt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(k.c)((function(t){return t.app.status})),l=Object(k.c)((function(t){return t.app.isInitialized})),r=Object(k.c)((function(t){return t.auth.isLoggedIn})),c=Object(k.b)();Object(n.useEffect)((function(){c((function(t){L().then((function(e){0===e.data.resultCode&&t(q({value:!0})),t(K({isInitialized:!0}))}))}))}),[]);var h=Object(n.useCallback)((function(){c((function(t){t(J({status:"loading"})),F().then((function(e){0===e.data.resultCode?(t(q({value:!1})),t(J({status:"succeeded"}))):P(e.data,t)})).catch((function(e){z(e,t)}))}))}),[]);return l?o.a.createElement(It.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(yt,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(v.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),r&&o.a.createElement(p.a,{color:"inherit",onClick:h},"Log out")),"loading"===i&&o.a.createElement(b.a,null)),o.a.createElement(g.a,{fixed:!0},o.a.createElement(Et.b,{exact:!0,path:"/",render:function(){return o.a.createElement(Ct,{demo:a})}}),o.a.createElement(Et.b,{path:"/login",render:function(){return o.a.createElement(Lt,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},zt=a(52),Nt=a(46),Dt=Object(zt.b)({tasks:et,todolists:V,app:H,auth:M}),Mt=Object(N.a)({reducer:Dt,middleware:function(t){return t().prepend(Nt.a)}});window.store=Mt,l.a.render(o.a.createElement(k.a,{store:Mt},o.a.createElement(Pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},99:function(t,e,a){t.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.647bd855.chunk.js.map