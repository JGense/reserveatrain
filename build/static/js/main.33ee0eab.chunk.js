(this.webpackJsonpreserveatrain=this.webpackJsonpreserveatrain||[]).push([[0],{111:function(e,a,t){e.exports=t(142)},116:function(e,a,t){},139:function(e,a,t){},142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=(t(116),t(10)),i=t(51),m=t(39),s=t(192),u=t(187),p=t(185),d=t(7),g=t(84),E=t(85),b=t(94),v=t(182),h=t(87),f=t.n(h),y=t(200),x=t(95),w=Object(E.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}}));function j(e){var a=w();return r.a.createElement(v.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"90vh"},component:"main",className:a.root},r.a.createElement(v.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{className:a.avatar},r.a.createElement(f.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Woooooooops !"),r.a.createElement("h3",null,"You must be logged in to access this feature"))))}var N=t(201),O=t(194),S=t(93),k=t(17),I=t(193),C=Object(E.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},bookingForm:{marginTop:e.spacing(3)},arrivalStation:{marginTop:e.spacing(1)},dateInputs:{marginTop:e.spacing(3)},submitBtn:{marginTop:e.spacing(3)}}}));function D(e){var a=C(),t=r.a.useState({departureStation:"",arrivalStation:""}),n=Object(o.a)(t,2),l=n[0],c=n[1],i=r.a.useState(Date.now),m=Object(o.a)(i,2),s=m[0],u=m[1],E=r.a.useState(Date.now()),h=Object(o.a)(E,2),f=h[0],y=h[1],w=function(e){return function(a){c(Object(g.a)({},l,Object(d.a)({},e,a.target.value)))}};return e.isLog?r.a.createElement(v.a,{container:!0,spacing:4,direction:"row",alignItems:"center",justify:"center",style:{minHeight:"90vh",margin:"0",width:"100%"}},r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(b.a,{className:a.paper},r.a.createElement(x.a,{component:"h3",variant:"h5"},"What is your journey?"),r.a.createElement("form",{className:a.bookingForm},r.a.createElement(N.a,{fullWidth:!0},r.a.createElement(O.a,{value:l.departureStation,onChange:w("departureStation"),id:"departureStationInput",label:"Departure station",variant:"outlined",size:"small"}),r.a.createElement(O.a,{value:l.arrivalStation,className:a.arrivalStation,onChange:w("arrivalStation"),id:"arrivalStationInput",label:"Arrival station",variant:"outlined",size:"small"}),r.a.createElement(k.a,{utils:S.a},r.a.createElement(v.a,{container:!0,justify:"space-around",className:a.dateInputs},r.a.createElement(I.a,{margin:"normal",id:"date-picker-dialog",label:"Departure date",format:"MM/dd/yyyy",value:s,onChange:function(e){u(e)},KeyboardButtonProps:{"aria-label":"change date"},fullWidth:!0}),r.a.createElement(I.a,{margin:"normal",id:"date-picker-dialog",label:"Arrival date",format:"MM/dd/yyyy",value:f,onChange:function(e){y(e)},KeyboardButtonProps:{"aria-label":"change date"},fullWidth:!0})))),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submitBtn},"BOOK")))),r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(b.a,{className:a.paper},"xs=3"))):r.a.createElement(j,null)}var W=t(62),L=t.n(W),T=t(189),q=t(190),A=t(198),B=t(188),H=t(195),z=t(89),G=t.n(z),P=t(90),Y=t.n(P),F=t(199),J=t(197),M=t(88),K=t.n(M);function R(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(B.a,{color:"inherit",href:"https://www.linkedin.com/in/jimmy-gense-98b5a8145/"},"Jimmy Gense")," ",(new Date).getFullYear(),".")}var _=Object(E.a)((function(e){return{root:{height:"94vh"},image:{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/03/05/23/02/blur-1239439_960_720.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function U(e){var a=_(),t=Object(n.useState)(""),l=Object(o.a)(t,2),c=l[0],i=l[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(!1),E=Object(o.a)(g,2),h=E[0],f=E[1],w=function(e,a){"clickaway"!==a&&f(!1)};return e.isLog?r.a.createElement(v.a,{container:!0,component:"main",className:a.root},r.a.createElement(T.a,null),r.a.createElement(v.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(v.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{className:a.avatar},r.a.createElement(Y.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Welcome"),r.a.createElement("h3",null,"You are already logged in ! Go booking now !"),r.a.createElement(H.a,{mt:5},r.a.createElement(R,null))))):r.a.createElement(v.a,{container:!0,component:"main",className:a.root},r.a.createElement(T.a,null),r.a.createElement(v.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(v.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{className:a.avatar},r.a.createElement(G.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(a){var t;return L.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),t=!1,n.prev=2,n.next=5,L.a.awrap(K.a.post("https://reqres.in/api/login",{email:c,password:u},{headers:{"Content-Type":"application/json"}}));case 5:200===n.sent.status&&(t=!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),console.dir(n.t0),f(!0);case 13:t&&e.setIsLog(!0);case 14:case"end":return n.stop()}}),null,null,[[2,9]])}},r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return i(e.target.value)}}),r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return d(e.target.value)}}),r.a.createElement(q.a,{control:r.a.createElement(A.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:!0},r.a.createElement(B.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(v.a,{item:!0},r.a.createElement(B.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(H.a,{mt:5},r.a.createElement(R,null))),r.a.createElement(F.a,{open:h,autoHideDuration:6e3,onClose:w,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(J.a,{onClose:w,severity:"error"},"An error occurred during login")))))}var V=t(2),Q=t(196),X=t(191),Z=t(91),$=t.n(Z);function ee(e){var a=e.children,t=e.value,n=e.index,l=Object(V.a)(e,["children","value","index"]);return r.a.createElement(x.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(H.a,{p:3},a))}function ae(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var te=Object(E.a)((function(e){return{root:{flexGrow:1},paper:{margin:e.spacing(4,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{backgroundColor:e.palette.secondary.main,width:e.spacing(7),height:e.spacing(7)},euroIcon:{width:e.spacing(7),height:e.spacing(7)},reductionInput:{margin:e.spacing(1),lineHeight:1.334}}}));function ne(e){var a=te(),t=r.a.useState(0),n=Object(o.a)(t,2),l=n[0],c=n[1];return e.isLog?r.a.createElement(v.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"90vh"},component:"main",className:a.root},r.a.createElement(v.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement(Q.a,{value:l,onChange:function(e,a){c(a)},"aria-label":"simple tabs example"},r.a.createElement(X.a,Object.assign({label:"Profile"},ae(0))),r.a.createElement(X.a,Object.assign({label:"Discount code"},ae(1)))),r.a.createElement(ee,{value:l,index:0},r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{className:a.avatar},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"})),r.a.createElement(x.a,{component:"h1",variant:"h5"},"John DOE"),r.a.createElement("h4",null,'This is your profile. You can change your reduction code in the "Discount code" tab'))),r.a.createElement(ee,{value:l,index:1},r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{className:a.euroIcon},r.a.createElement($.a,null)),r.a.createElement(O.a,{id:"outlined-basic",label:"Reduction code",variant:"outlined",size:"small",className:a.reductionInput}),r.a.createElement("h4",null,"This is your discount code view. You can change it or add one if you don't have yet !"))))):r.a.createElement(j,null)}t(139);c.a.render(r.a.createElement((function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(i.b,{className:"menu-button",to:"/"},"Home")),r.a.createElement(p.a,null,r.a.createElement(i.b,{className:"menu-button",to:"/booking"},"Booking")),r.a.createElement(p.a,null,r.a.createElement(i.b,{className:"menu-button",to:"/account"},"Account")))),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(U,{setIsLog:l,isLog:t})),r.a.createElement(m.a,{exact:!0,path:"/booking"},r.a.createElement(D,{isLog:t})),r.a.createElement(m.a,{exact:!0,path:"/account"},r.a.createElement(ne,{isLog:t})))))}),null),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.33ee0eab.chunk.js.map