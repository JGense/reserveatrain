(this.webpackJsonpreserveatrain=this.webpackJsonpreserveatrain||[]).push([[0],{110:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(87),t(18)),m=t(39),i=t(27),s=t(160),u=t(161),p=t(159),g=t(64),d=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function E(e){d();return e.isLog?r.a.createElement("h1",null,"I'm logged"):r.a.createElement("h1",null,"I'm not logged")}var b=t(47),h=t.n(b),v=t(168),f=t(156),y=t(162),x=t(157),w=t(165),j=t(154),k=t(114),N=t(163),O=t(155),C=t(66),S=t.n(C),I=t(67),A=t.n(I),L=t(69),q=t(167),D=t(164),G=t(65),W=t.n(G);function J(){return r.a.createElement(L.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://www.linkedin.com/in/jimmy-gense-98b5a8145/"},"Jimmy Gense")," ",(new Date).getFullYear(),".")}var T=Object(g.a)((function(e){return{root:{height:"94vh"},image:{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/03/05/23/02/blur-1239439_960_720.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(e){var a=T(),t=Object(n.useState)(""),c=Object(o.a)(t,2),l=c[0],m=c[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],g=s[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),b=E[0],C=E[1],I=Object(n.useState)(!1),G=Object(o.a)(I,2),z=G[0],B=G[1],F=function(e,a){"clickaway"!==a&&C(!1)};return z?r.a.createElement(O.a,{container:!0,component:"main",className:a.root},r.a.createElement(f.a,null),r.a.createElement(O.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(O.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(v.a,{className:a.avatar},r.a.createElement(A.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Welcome"),r.a.createElement("h3",null,"You are already logged in ! Go booking now !"),r.a.createElement(N.a,{mt:5},r.a.createElement(J,null))))):r.a.createElement(O.a,{container:!0,component:"main",className:a.root},r.a.createElement(f.a,null),r.a.createElement(O.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(O.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(v.a,{className:a.avatar},r.a.createElement(S.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(a){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),t=!1,n.prev=2,n.next=5,h.a.awrap(W.a.post("https://reqres.in/api/login",{email:l,password:u},{headers:{"Content-Type":"application/json"}}));case 5:200===n.sent.status&&(t=!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),console.dir(n.t0),C(!0);case 13:t&&(B(!0),e.setIsLog(!0));case 14:case"end":return n.stop()}}),null,null,[[2,9]])}},r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return m(e.target.value)}}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return g(e.target.value)}}),r.a.createElement(x.a,{control:r.a.createElement(w.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(j.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(O.a,{item:!0},r.a.createElement(j.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(N.a,{mt:5},r.a.createElement(J,null))),r.a.createElement(q.a,{open:b,autoHideDuration:6e3,onClose:F,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(D.a,{onClose:F,severity:"error"},"An error occurred during login")))))}var B=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function F(e){var a=B();return e.isLog?r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement(k.a,{className:a.paper},"ACCOUNT"))):r.a.createElement("h1",null,"I'm not logged")}t(110);l.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(m.b,{className:"menu-button",to:"/"},"Accueil")),r.a.createElement(p.a,null,r.a.createElement(m.b,{className:"menu-button",to:"/booking"},"Booking")),r.a.createElement(p.a,null,r.a.createElement(m.b,{className:"menu-button",to:"/account"},"Account")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(z,{setIsLog:c})),r.a.createElement(i.a,{exact:!0,path:"/booking"},r.a.createElement(E,{isLog:t})),r.a.createElement(i.a,{exact:!0,path:"/account"},r.a.createElement(F,{isLog:t})))))}),null),document.getElementById("root"))},82:function(e,a,t){e.exports=t(113)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.956cbc97.chunk.js.map