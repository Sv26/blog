(this["webpackJsonpreact-hooks-blog"]=this["webpackJsonpreact-hooks-blog"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(24),a=c.n(o),i=(c(30),c(4)),l=c(12),r=c(2);var j=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{id:"nav",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/create-post",children:"Create Post"})})]})})},b=c(16),d=c(22);c(41);d.a.initializeApp({apiKey:"AIzaSyDxspPGdXqUqisgvlVzIvDyxKDK6Wdb5gw",authDomain:"react-hooks-blog-50c4c.firebaseapp.com",projectId:"react-hooks-blog-50c4c",storageBucket:"react-hooks-blog-50c4c.appspot.com",messagingSenderId:"106501813723",appId:"1:106501813723:web:07147f189ae1ccea0c63fe"});var h=d.a.firestore();var O=function(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),c=t[0],n=t[1],o=Object(i.f)().postId;return Object(s.useEffect)((function(){h.collection("posts").doc(o).get().then((function(e){console.log("snapshot",e.data()),n(e.data())}))}),[]),Object(r.jsxs)("div",{className:"post-detail",children:[Object(r.jsx)("h1",{children:c.title}),Object(r.jsx)("p",{children:c.content})]})},u=c(17);var p=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){h.collection("posts").get().then((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));console.log("posts",t),n(t)}))}),[]),Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("h1",{children:"Tech Blog"}),Object(r.jsx)("div",{id:"blog-by",children:"Shubham"}),c.map((function(e,t){return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)(l.b,{to:"/post/".concat(e.id),children:Object(r.jsx)("h3",{children:e.title})}),Object(r.jsx)("p",{children:e.subTitle})]},"post-".concat(t))}))]})};function x(e){var t=Object(s.useState)(e),c=Object(b.a)(t,2),n=c[0],o=c[1];return{value:n,onChange:function(e){o(e.target.value)}}}var f=function(){var e=x(""),t=x(""),c=x("");return Object(r.jsxs)("div",{className:"create-post",children:[Object(r.jsx)("h1",{children:"Create Post"}),Object(r.jsxs)("form",{onSubmit:function(s){s.preventDefault(),console.log("title",e),console.log("subTitle",t),console.log("content",c),h.collection("posts").add({title:e.value,content:c.value,subTitle:t.value,createdAt:new Date})},children:[Object(r.jsxs)("div",{className:"form-field",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",Object(u.a)({},e))]}),Object(r.jsxs)("div",{className:"form-field",children:[Object(r.jsx)("label",{children:"Sub Title"}),Object(r.jsx)("input",Object(u.a)({},t))]}),Object(r.jsxs)("div",{className:"form-field",children:[Object(r.jsx)("label",{children:"Content"}),Object(r.jsx)("textarea",Object(u.a)({},c))]}),Object(r.jsx)("button",{className:"create-post-btn",children:"Create Post"})]})]})};var v=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(r.jsx)(i.a,{exact:!0,path:"/post/:postId",component:O}),Object(r.jsx)(i.a,{exact:!0,path:"/create-post",component:f})]})]})};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(v,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a66bbcd0.chunk.js.map