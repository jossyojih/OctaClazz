(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[49],{1117:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t(0),c=t.n(r),s=t(272),o=t(906),i=t(910),l=t(900),m=t(901),u=t(280),p=t(42),d=t(915),b=t(37),f=t(23),E=t(4),g=t(907),j=t(918),h=t(872),O=t(79),v=t(916),N=t.n(v),z=Object(s.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var x=function(e){var a=e.className,t=Object(b.a)(e,["className"]),n=z();return c.a.createElement(g.a,Object.assign({alignItems:"center",container:!0,justify:"space-between",spacing:3,className:Object(E.a)(n.root,a)},t),c.a.createElement(g.a,{item:!0},c.a.createElement(j.a,{separator:c.a.createElement(N.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(h.a,{variant:"body1",color:"inherit",to:"/app",component:f.a},"Dashboard"),c.a.createElement(h.a,{variant:"body1",color:"inherit"},"Moon quiz")),c.a.createElement(O.a,{variant:"h3",color:"textPrimary"},"All moon quizzes available are listed here!")))},y=t(1106),k=t(886),q=t(112),w=t.n(q),Y=Object(s.a)((function(e){return{root:{},media:{height:200,backgroundColor:e.palette.background.dark,width:"100%"},lesson:{fontSize:"20px",textAlign:"center",padding:"3px",paddingTop:"0px"},subject:{textAlign:"center",fontSize:"30px",width:"100%"}}}));var M=function(e){var a=e.course,t=e.className,n=Object(b.a)(e,["course","className"]),r=Y();return c.a.createElement(l.a,Object.assign({className:Object(E.a)(r.root,t)},n),c.a.createElement(i.a,{p:2},c.a.createElement("img",{className:r.media,alt:"courses",src:"/static/images/moonQuiz/selection.jpg"}),c.a.createElement(i.a,{display:"flex",mt:2},c.a.createElement(g.a,{className:r.subject,color:"textPrimary"},a.coursename))),c.a.createElement(i.a,{className:r.lesson},c.a.createElement(O.a,{color:"primary",variant:"h3"},"Quiz name: ",a.name)),c.a.createElement(i.a,{className:r.lesson},"start time: ",w()(a.starttime).format("YYYY-MM-DD HH:mm")),c.a.createElement(i.a,{className:r.lesson},"end time: ",w()(a.endtime).format("YYYY-MM-DD HH:mm")),c.a.createElement(i.a,{className:r.lesson},"Rewards: VN"," "+a.rewardsvn,", \xa0 ",a.rewardsfreeze+" streak freeze"),c.a.createElement(i.a,{className:r.lesson},"Lecturer:  ",a.lecturer.username),c.a.createElement(i.a,{className:r.lesson},"Goal number of questions:  ",a.goalnum),c.a.createElement(k.a,null),c.a.createElement(i.a,{py:2,pl:2,pr:3,display:"flex",style:{textAlign:"center"}},c.a.createElement(h.a,{color:"textPrimary",component:f.a,to:"/app/assessments/moonquiz/test/"+a._id,variant:"h4",style:{width:"100%"}},"Start quiz")))},S=Object(s.a)((function(e){return{root:{}}}));var C=function(e){var a=e.className,t=e.courses,s=Object(b.a)(e,["className","courses"]),o=S(),l=Object(r.useState)(1),m=Object(n.a)(l,2),u=m[0],p=m[1],d=parseInt(t.length/6)+1,f=function(e,a){return e.slice(6*(a-1),6*(a-1)+6)}(t,u);return c.a.createElement("div",Object.assign({className:Object(E.a)(o.root,a)},s),c.a.createElement(g.a,{container:!0,spacing:3},f.map((function(e){return c.a.createElement(g.a,{item:!0,key:e._id,md:4,sm:6,xs:12},c.a.createElement(M,{course:e}))}))),c.a.createElement(i.a,{mt:6,display:"flex",justifyContent:"center"},c.a.createElement(y.a,{component:"div",count:d,onChange:function(e,a){p(a)},page:u})))},D=t(46),H=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=H(),a=Object(d.a)(),t=Object(r.useState)([]),s=Object(n.a)(t,2),b=s[0],f=s[1],E=Object(r.useCallback)((function(){p.a.get(D.a+"assessments/moonquiz/list").then((function(e){a.current&&f(e.data.quizzes)}))}),[a]);return Object(r.useEffect)((function(){E()}),[E]),c.a.createElement(u.a,{className:e.root,title:"Moon quiz Page"},c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(x,null),c.a.createElement(i.a,{mt:6},0!==b.length&&c.a.createElement(C,{courses:b}),0===b.length&&c.a.createElement(l.a,null,c.a.createElement(m.a,{title:"Moon quiz don't exist."})))))}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}}}]);
//# sourceMappingURL=49.c4bce1a3.chunk.js.map