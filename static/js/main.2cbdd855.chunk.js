(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/logo.2c69f090.png"},25:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},31:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(30),a(4)),u=a(3),i=(a(31),a(1)),s=a(21),m=a.n(s),f=[{value:"head",label:"\ud83e\udd31\ud83c\udffbT\xe9t\xe9e"},{value:"urine",label:"\ud83e\uddfb Pipi"},{value:"stools",label:"\ud83d\udca9Caca"},{value:"bath",label:"\ud83d\udec1Bain"},{value:"sleep",label:"\ud83d\ude34Dodo"},{value:"baby_bottle",label:"\ud83c\udf7cBiberon"}],v=f.map(function(e){return e.value}),d=function(e){var t=e.onChange,a=e.defaultValue,n=e.userCategories;return r.a.createElement(m.a,{isMulti:!0,isClearable:!1,options:[].concat(f,Object(l.a)(n)),defaultValue:a,onChange:function(e){return t(e)},theme:function(e){return Object(i.a)({},e,{borderRadius:4,colors:Object(i.a)({},e.colors,{neutral20:"#cfeeff",neutral30:"#cfeeff",primary:"#cfeeff"})})}})},g=function(e){var t=e.selected,a=e.onChange,c=t?{year:t.getFullYear(),month:t.getMonth(),day:t.getDate(),hours:t.getHours(),minutes:t.getMinutes()}:{},o=Object(n.useState)(c),l=Object(u.a)(o,2),s=l[0],m=l[1];Object(n.useEffect)(function(){JSON.stringify(c)!==JSON.stringify(s)&&a(new Date(s.year,s.month,s.day,s.hours,s.minutes))});var f=(new Date).getFullYear(),v=Array(3).fill().map(function(e,t){var a=f-2+t;return r.a.createElement("option",{value:a,key:a},a)}),d=Array(12).fill().map(function(e,t){var a=t+1;return r.a.createElement("option",{value:a,key:a},"".concat(a).padStart(2,0))}),g=Array(31).fill().map(function(e,t){var a=t+1;return r.a.createElement("option",{value:a,key:a},"".concat(t+1).padStart(2,0))}),p=Array(24).fill().map(function(e,t){return r.a.createElement("option",{value:t,key:t},"".concat(t).padStart(2,0))}),b=Array(59).fill().map(function(e,t){var a=t+1;return r.a.createElement("option",{value:a,key:a},"".concat(a).padStart(2,0))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dates"},r.a.createElement("select",{value:s.day||"",onChange:function(e){e.persist(),m(function(t){return Object(i.a)({},t,{day:parseInt(e.target.value)})})}},g),r.a.createElement("div",{className:"separator"},"/"),r.a.createElement("select",{value:s.month?s.month+1:"",onChange:function(e){e.persist(),m(function(t){return Object(i.a)({},t,{month:parseInt(e.target.value)})})}},d),r.a.createElement("div",{className:"separator"},"/"),r.a.createElement("select",{value:s.year||"",onChange:function(e){e.persist(),m(function(t){return Object(i.a)({},t,{year:parseInt(e.target.value)})})}},v)),r.a.createElement("div",{className:"dates",style:{marginTop:10}},r.a.createElement("select",{value:s.hours||"",onChange:function(e){e.persist(),m(function(t){return Object(i.a)({},t,{hours:parseInt(e.target.value)})})}},p),r.a.createElement("div",{className:"separator"},"h"),r.a.createElement("select",{value:s.minutes||"",onChange:function(e){e.persist(),m(function(t){return Object(i.a)({},t,{minutes:parseInt(e.target.value)})})}},b),r.a.createElement("div",{className:"separator"},"min")))},p=function(e){var t=e.selected,a=e.onChange,c=Object(n.useState)({hours:t?Math.floor(t/60):0,minutes:t?t%60:0}),o=Object(u.a)(c,2),l=o[0],s=o[1];Object(n.useEffect)(function(){var e=60*l.hours+l.minutes;t!==e&&a(e)});var m=Array(24).fill().map(function(e,t){return r.a.createElement("option",{value:t,key:t},"".concat(t).padStart(2,0))}),f=Array(12).fill().map(function(e,t){var a=5*t;return r.a.createElement("option",{value:a,key:a},"".concat(a).padStart(2,0))});return r.a.createElement("div",{className:"dates"},r.a.createElement("select",{value:l.hours||"",onChange:function(e){e.persist(),s(function(t){return Object(i.a)({},t,{hours:parseInt(e.target.value)})})}},m),r.a.createElement("div",{className:"separator"},"h"),r.a.createElement("select",{value:l.minutes||"",onChange:function(e){e.persist(),s(function(t){return Object(i.a)({},t,{minutes:parseInt(e.target.value)})})}},f),r.a.createElement("div",{className:"separator"},"min"))},b=function(e){var t=e.onChange,a=e.defaultValue,c=Object(n.useState)(a),o=Object(u.a)(c,2),i=o[0],s=o[1];return Object(n.useEffect)(function(e){t(i)}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:i.includes("left"),onChange:function(e){e.persist(),s(function(t){return e.target.checked?[].concat(Object(l.a)(t),["left"]):t.filter(function(e){return"left"!==e})})}}),"Boob gauche"),"\xa0\xa0\xa0",r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:i.includes("right"),onChange:function(e){e.persist(),s(function(t){return e.target.checked?[].concat(Object(l.a)(t),["right"]):t.filter(function(e){return"right"!==e})})}}),"Boob droit"))},h=function(e){var t=e.saveEvent,a=e.userCategories,c=Object(n.useState)({date:(new Date).toString(),categories:[],boobs:[]}),o=Object(u.a)(c,2),l=o[0],s=o[1],m=Object(n.useState)(!1),f=Object(u.a)(m,2),v=f[0],h=f[1],E=l.date?new Date(l.date):new Date,y=l.categories.includes("head");return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement("label",null,r.a.createElement("strong",null,"\xc9v\xe8nement")),r.a.createElement(d,{defaultValue:l.categories,onChange:function(e){return s(function(t){return Object(i.a)({},t,{categories:e.map(function(e){return e.value}),boobs:e.includes("head")?[]:l.boobs})})},userCategories:a}),y&&r.a.createElement(b,{defaultValue:l.boobs,onChange:function(e){return s(function(t){return Object(i.a)({},t,{boobs:e})})}}),r.a.createElement("label",null,r.a.createElement("strong",null,"Dur\xe9e")),r.a.createElement("div",{className:"duration"},r.a.createElement(p,{onChange:function(e){return s(function(t){return Object(i.a)({},t,{duration:e})})},selected:l.duration})),r.a.createElement("label",null,r.a.createElement("strong",null,"Date"),"\xa0","".concat("".concat(E.getDate()).padStart(2,0),"/").concat("".concat(E.getMonth()+1).padStart(2,0),"/").concat(E.getFullYear(),"\n          ").concat("".concat(E.getHours()).padStart(2,0),"h").concat("".concat(E.getMinutes()).padStart(2,0)),"\xa0",r.a.createElement("small",null,r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),h(!v)}},"Changer"))),v&&r.a.createElement(g,{onChange:function(e){return s(function(t){return Object(i.a)({},t,{date:e?e.toString():null})})},selected:l.date?new Date(l.date):null}),r.a.createElement("button",{style:{marginTop:20}},"Cr\xe9er un \xe9v\xe8nement"))},E={left:"Boob gauche",right:"Boob droit"},y=function(e){var t,a=e.events,n=e.removeEvent;return r.a.createElement("div",{className:"events"},a.sort(function(e,t){return new Date(e.date)-new Date(t.date)}).reverse().map(function(e,a){var c=new Date(e.date),o="".concat(c.getDate()).concat(c.getMonth()).concat(c.getYear()),l=o!==t?"".concat("".concat(c.getDate()).padStart(2,0),"/").concat("".concat(c.getMonth()+1).padStart(2,0)):null;return t=o,r.a.createElement("div",{key:a},l&&r.a.createElement("div",{className:"day"},l),r.a.createElement("div",{className:"event"},r.a.createElement("div",{style:{marginRight:15,flex:"none",width:60}},r.a.createElement("div",{className:"date"},"".concat(c.getHours()).padStart(2,0),"h","".concat(c.getMinutes()).padStart(2,0)),r.a.createElement("small",{style:{color:"#999"}},function(e){if(e){var t=e.value||e,a=Math.floor(t/60),n=t%60,r="";return a&&(r="".concat(a,"h")),n&&(r+="".concat(n,"min")),"".concat(r)}}(e.duration))),r.a.createElement("div",{className:"categories"},e.categories.map(function(t){var a=t;return f.map(function(e){return e.value}).includes(t)&&(a=f.filter(function(e){return e.value===t})[0].label),"head"===t&&e.boobs&&e.boobs.length>0&&(a+=" (".concat(e.boobs.map(function(e){return E[e]}).join(", "),")")),a}).join(", ")),r.a.createElement("div",{className:"delete",onClick:function(){window.confirm("Supprimer l'\xe9v\xe8nement ?")&&n(a)}},"\xd7")))}))},O=a(23),j=a.n(O),S=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("events"))||[]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=function(e){var t=[],a=new Map,n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var u=o.value;a.has(u.value)||(a.set(u.value,!0),t.push({value:u.value,label:u.label}))}}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return t}(a.map(function(e){return e.categories}).flat()).filter(function(e){return!v.includes(e.value)});return Object(n.useEffect)(function(){localStorage.setItem("events",JSON.stringify(a))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement("img",{src:j.a,width:"28",height:"28",alt:"logo"}),"Ma\xebl")),r.a.createElement(h,{saveEvent:function(e){return c([].concat(Object(l.a)(a),[e]))},userCategories:o}),r.a.createElement(y,{events:a,removeEvent:function(e){return c(function(e,t){return e.slice(0,t).concat(e.slice(t+1))}(a,e))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.2cbdd855.chunk.js.map