(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/logo.2c69f090.png"},44:function(e,t,a){e.exports=a(85)},49:function(e,t,a){},50:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(5),c=a.n(o),l=(a(49),a(43)),i=a(12),u=(a(50),a(8)),s=a(21),d=(a(57),a(38)),m=a.n(d),v=function(e){var t=e.onChange,a=e.defaultValue,n=e.usedCategories;return r.a.createElement(m.a,{isMulti:!0,isClearable:!1,options:n,defaultValue:a,onChange:function(e){return t(e)}})},f=a(40),g=function(e){var t=e.saveEvent,a=e.usedCategories,o=Object(n.useState)({date:(new Date).toString(),categories:[]}),c=Object(i.a)(o,2),l=c[0],d=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement("div",{className:"dates"},r.a.createElement(s.a,{onChange:function(e){return d(function(t){return Object(u.a)({},t,{date:e?e.toString():null})})},selected:l.date?new Date(l.date):null,placeholderText:"C'\xe9tait quand ?",dateFormat:"d MMM YYYY",withPortal:!0}),r.a.createElement(s.a,{onChange:function(e){if(e){var t=new Date(l.date),a=new Date(e),n=new Date(t.getFullYear(),t.getMonth(),t.getDate(),a.getHours(),a.getMinutes());d(function(e){return Object(u.a)({},e,{date:n})})}},selected:l.date?new Date(l.date):null,placeholderText:"Heure de d\xe9but",showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:5,dateFormat:"HH:mm",timeFormat:"HH:mm",timeCaption:"Time",withPortal:!0}),r.a.createElement("div",{className:"duration"},r.a.createElement(f.a,{onChange:function(e){return d(function(t){return Object(u.a)({},t,{duration:e})})},options:Array(11).fill().map(function(e,t){var a=5*(t+1);return{label:"".concat(a," minutes"),value:a}}),placeholder:"Dur\xe9e",isClearable:!0,styles:{input:function(e){return Object(u.a)({},e)},container:function(e){return Object(u.a)({},e,{width:"100%"})}}}))),r.a.createElement(v,{defaultValue:l.categories,onChange:function(e){return d(function(t){return Object(u.a)({},t,{categories:e})})},usedCategories:a}),r.a.createElement("button",null,"Valider"))},h=function(e){var t,a=e.events,n=e.removeEvent;return r.a.createElement("div",{className:"events"},a.sort(function(e,t){return new Date(e.date)-new Date(t.date)}).reverse().map(function(e,a){var o=new Date(e.date),c="".concat(o.getDate()).concat(o.getMonth()).concat(o.getYear()),l=c!==t?"".concat("".concat(o.getDate()).padStart(2,0),"/").concat("".concat(o.getMonth()+1).padStart(2,0)):null;return t=c,r.a.createElement("div",{key:a},l&&r.a.createElement("div",{className:"day"},l),r.a.createElement("div",{className:"event"},r.a.createElement("div",{style:{marginRight:15}},"".concat(o.getHours()).padStart(2,0),"h","".concat(o.getMinutes()).padStart(2,0)),r.a.createElement("div",{style:{width:"70%"}},e.categories.map(function(e){return e.label}).join(", ")),r.a.createElement("div",null,e.duration&&e.duration.label),r.a.createElement("div",{className:"delete",onClick:function(){window.confirm("Supprimer l'\xe9v\xe8nement ?")&&n(a)}},"\xd7")))}))},w=a(41),p=a.n(w),E=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("events"))||[]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=function(e){var t=[],a=new Map,n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var i=c.value;a.has(i.value)||(a.set(i.value,!0),t.push({value:i.value,label:i.label}))}}catch(u){r=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return t}(a.map(function(e){return e.categories}).flat());return Object(n.useEffect)(function(){localStorage.setItem("events",JSON.stringify(a))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement("img",{src:p.a,width:"28",height:"28",alt:"logo"}),"Ma\xebl")),r.a.createElement(g,{saveEvent:function(e){return o([].concat(Object(l.a)(a),[e]))},usedCategories:c}),r.a.createElement(h,{events:a,removeEvent:function(e){return o(function(e,t){return e.slice(0,t).concat(e.slice(t+1))}(a,e))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.104e508b.chunk.js.map