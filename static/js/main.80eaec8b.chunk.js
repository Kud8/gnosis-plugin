(this["webpackJsonpgnosis-plugin"]=this["webpackJsonpgnosis-plugin"]||[]).push([[0],{203:function(e,t){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a,c,s=n(0),i=n.n(s),l=n(18),o=n.n(l),r=n(50),d=n(43),j=n(95),b=n.n(j),u=n(97),O=n.n(u),h=n(98),m=n(149),f=n(150),x=Object(r.createGlobalStyle)(a||(a=Object(h.a)(["\n    html {\n        height: 100%\n    }\n\n    body {\n       height: 100%;\n       margin: 0px;\n       padding: 0px;\n    }\n\n    #root {\n        height: 100%;\n        padding-right: 0.5rem;\n    }\n\n    .MuiFormControl-root,\n    .MuiInputBase-root {\n        width: 100% !important;\n    }\n\n    @font-face {\n        font-family: 'Averta';\n        src: local('Averta'), local('Averta Bold'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n    }\n"])),m.a,f.a),g=n(44),p=n(140),v=n(287),w=(n(228),n(11)),y=function(e){var t=e.isModalOpened,n=e.onClose,a=e.style,c=Object(s.useState)(null),i=Object(g.a)(c,2),l=i[0],o=i[1],r=Object(s.useState)(null),j=Object(g.a)(r,2),b=j[0],O=j[1],h=Object(s.useState)(null),m=Object(g.a)(h,2),f=m[0],x=m[1],y=Object(s.useState)(!1),C=Object(g.a)(y,2),N=C[0],S=C[1],A=Object(s.useState)(!1),E=Object(g.a)(A,2),B=E[0],_=E[1];return Object(s.useEffect)((function(){var e,t,n,a;B&&(e="Owner added",t="success",n="Owner with address ".concat((a=b)?"".concat(a.slice(0,6),"-").concat(a.slice(a.length-4)):""," successfully added"),u.store.addNotification({title:e,message:n,type:t,insert:"top",container:"top-center",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}}))}),[B]),t?Object(w.jsx)(p.a,{open:t,onClose:n,style:a,children:Object(w.jsxs)("div",{className:"new-owner-modal",children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("div",{children:"Add new owner"}),Object(w.jsx)("div",{className:"close-button",onClick:n,children:"X"})]}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)(v.a,{className:"input",name:"ownerName",placeholder:"Owner name",type:"text",value:l,onChange:function(e){o(e.target.value)}}),Object(w.jsx)(v.a,{className:"input",name:"ownerAddress",placeholder:"Owner address",type:"text",value:b,onChange:function(e){O(e.target.value)}}),Object(w.jsx)(v.a,{className:"input",name:"ownerWeight",placeholder:"Owner weight",type:"number",value:f,onChange:function(e){x(+e.target.value)}})]}),Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)(d.Button,{size:"lg",color:"primary",onClick:function(){S(!0),setTimeout((function(){S(!1),_(!0)}),2e3)},disabled:N,children:N?"Pending...":"Add"})})]})}):null},C=n(123),N=n(120),S=n(121),A=n(124),E=n(118),B=n(117),_=n(122),k=(n(229),[{address:"0xb79EbAa162f92A3E5B8E0CE3446e8b4a4E5C0A4B",weight:2},{address:"0xCE7470bbC1ab5FE2EdD3c4df8B136b8ba4686348",weight:3},{address:"0xF48dD0A23E0B8953F3b1b11931cD32D04127D822",weight:4}]),M=function(e){var t=e.isModalOpened,n=e.onClose,a=e.style;return t?Object(w.jsx)(p.a,{open:t,onClose:n,style:a,children:Object(w.jsxs)("div",{className:"polity-modal",children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("div",{children:"Polity"}),Object(w.jsx)("div",{className:"close-button",onClick:n,children:"X"})]}),Object(w.jsx)("div",{className:"content",children:Object(w.jsx)(C.a,{component:N.a,children:Object(w.jsxs)(S.a,{"aria-label":"simple table",children:[Object(w.jsx)(A.a,{children:Object(w.jsxs)(E.a,{children:[Object(w.jsx)(B.a,{align:"left",children:"\u2116"}),Object(w.jsx)(B.a,{align:"left",children:"Address"}),Object(w.jsx)(B.a,{align:"left",children:"Weight"})]})}),Object(w.jsx)(_.a,{children:k.map((function(e,t){return Object(w.jsxs)(E.a,{children:[Object(w.jsx)(B.a,{align:"left",children:t+1}),Object(w.jsx)(B.a,{align:"left",children:e.address}),Object(w.jsx)(B.a,{align:"left",children:e.weight})]},e.address)}))})]})})})]})}):null},D=(n(230),r.default.div(c||(c=Object(h.a)(["\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"])))),z={top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%"},F=function(){var e=Object(j.useSafeAppsSDK)().safe,t=Object(s.useState)(!1),n=Object(g.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!1),l=Object(g.a)(i,2),o=l[0],r=l[1];return console.log(e),Object(w.jsxs)(D,{className:"app",children:[Object(w.jsx)(d.Button,{size:"lg",color:"primary",onClick:function(){c(!0)},className:"button",children:"Add new owner"}),Object(w.jsx)(d.Button,{size:"lg",color:"primary",onClick:function(){r(!0)},className:"button",children:"See polity"}),Object(w.jsx)(y,{isModalOpened:a,onClose:function(){c(!1)},style:z}),Object(w.jsx)(M,{isModalOpened:o,onClose:function(){r(!1)},style:z})]})};n(231);o.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsxs)(r.ThemeProvider,{theme:d.theme,children:[Object(w.jsx)(x,{}),Object(w.jsxs)(b.a,{loader:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(d.Title,{size:"md",children:"Waiting for Safe..."}),Object(w.jsx)(d.Loader,{size:"md"})]}),children:[Object(w.jsx)(O.a,{}),Object(w.jsx)(F,{})]})]})}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.80eaec8b.chunk.js.map