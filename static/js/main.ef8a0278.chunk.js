(this["webpackJsonpvideo-to-embed-url"]=this["webpackJsonpvideo-to-embed-url"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=(n(9),n(1)),u=function(e){var t=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i.exec(e);return t?"https://www.youtube".concat(t[2]||"",".com/embed/").concat(t[4]):e};n(10);var i=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),m=i[0],s=i[1],b=Object(a.useCallback)((function(e){var t=e.target.value;c(t)}),[c]),d=Object(a.useCallback)((function(){s(u(n))}),[n,s]);return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Video url to embed url"),o.a.createElement("p",null,"Youtube, Facebook, Vimeo"),o.a.createElement("form",{action:"#"},o.a.createElement("input",{type:"text",onChange:b,value:n}),o.a.createElement("button",{onClick:d},"Get embed url"),m&&o.a.createElement("div",null,o.a.createElement("h2",null,"Your embed url:"),o.a.createElement("p",null,m)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ef8a0278.chunk.js.map