(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0556":function(t,e,a){},"0afb":function(t,e,a){},"114e":function(t,e,a){},1850:function(t,e,a){"use strict";var n=a("c87e"),i=a.n(n);i.a},2361:function(t,e,a){"use strict";var n=a("b828"),i=a.n(n);i.a},"25e3":function(t,e,a){},"2c57":function(t,e,a){},"3c67":function(t,e,a){"use strict";var n=a("0afb"),i=a.n(n);i.a},"3fef":function(t,e,a){"use strict";var n=a("6bbf"),i=a.n(n);i.a},4334:function(t,e,a){"use strict";var n=a("0556"),i=a.n(n);i.a},"474c":function(t,e,a){},"4c2c":function(t,e,a){"use strict";var n=a("25e3"),i=a.n(n);i.a},"4f65":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("main",[a("router-view")],1),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("nav",{staticClass:"light-blue"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo left",attrs:{to:{name:"home"}}},[t._v("Chops")]),a("ul",{staticClass:"right"},[a("li",[a("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),a("li",[a("router-link",{attrs:{to:"/citation"}},[t._v("Citations")])],1),t.user?t._e():a("li",[a("router-link",{attrs:{to:{name:"Signup"}}},[t._v("Signup")])],1),t.user?t._e():a("li",[a("router-link",{attrs:{to:{name:"Login"}}},[t._v("Login")])],1),t.user?a("li",[a("a",[t._v(t._s(t.user.email))])]):t._e(),t.user?a("li",[a("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()])],1)])])},o=[],l=a("8aa5"),c=a.n(l),u={name:"Navbar",data:function(){return{user:null}},methods:{logout:function(){var t=this;c.a.auth().signOut().then((function(){t.$router.push({name:"Login"})}))}},created:function(){var t=this;c.a.auth().onAuthStateChanged((function(e){t.user=e||null}))}},d=u,f=a("2877"),p=Object(f["a"])(d,r,o,!1,null,"057e0938",null),m=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"light-blue",attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("span",{staticClass:"span"},[t._v("© Chops Inc.")])])])}],_={name:"Footer"},g=_,b=(a("7c31"),Object(f["a"])(g,v,h,!1,null,"1752ec5b",null)),w=b.exports,C={name:"Login",data:function(){return{}},components:{Navbar:m,Footer:w},created:function(){}},x=C,y=(a("6d7d"),Object(f["a"])(x,i,s,!1,null,"633168e8",null)),T=y.exports,O=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h4",{staticClass:"center"},[t._v("Welcome to Chops!")]),a("div",{staticClass:"center"},[t._v("\n      Type in the school, professor, or area of research to find academic researchers.\n    ")]),a("Searchbar")],1)},j=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchbar-p"},[a("div",{staticClass:"searchbar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),a("button",{on:{click:t.getResults}},[t._v("Search")])])])},k=[],E=a("bc3a"),S=a.n(E),P={data:function(){return{input:null,data:[]}},methods:{getResults:function(){var t=this;S.a.get("http://127.0.0.1:8000/academics").then((function(e){var a=e.data,n=[];for(var i in a)n.push(i);t.data=n,t.$router.push({name:"Results",params:{data:a}})}))}}},I=P,N=(a("1850"),Object(f["a"])(I,D,k,!1,null,"1d0ada7f",null)),z=N.exports,A={name:"home",data:function(){return{search:null}},components:{Searchbar:z}},L=A,R=(a("d8ed"),Object(f["a"])(L,$,j,!1,null,"35461d68",null)),M=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container citation my-5"},[t._m(0),a("table",{staticClass:"table my-5"},[t._m(1),a("tbody",t._l(t.info,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.collaborators))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.date))])])})),0)])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"}),n("div",{staticClass:"col"},[n("img",{staticStyle:{"max-width":"200px"},attrs:{src:a("6540")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("Collaborators")]),a("td",[t._v("Title")]),a("td",[t._v("Date")])])])}],U={data:function(){return{info:null}},mounted:function(){var t=this;S.a.get("http://django-env.zectunjjvb.us-west-2.elasticbeanstalk.com/citations").then((function(e){return t.info=e.data})).catch((function(e){return t.info=e}))}},W=U,B=Object(f["a"])(W,J,F,!1,null,null,null),V=B.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup container"},[a("form",{staticClass:"card-panel",on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[a("h2",{staticClass:"center"},[t._v("\n            Sign up\n        ")]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"Alias"}},[t._v("Alias:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.alias,expression:"alias"}],attrs:{type:"text",name:"alias"},domProps:{value:t.alias},on:{input:function(e){e.target.composing||(t.alias=e.target.value)}}})]),t.feedback?a("p",{staticClass:"red-text center"},[t._v(t._s(t.feedback))]):t._e(),t._m(0)])])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field center"},[a("button",{staticClass:"btn light-blue"},[t._v("Sign up")])])}],K=a("3666"),q=a.n(K),G=a("59ca"),H=(a("e71f"),a("ee68"),{apiKey:"AIzaSyDnAYhR3_C6dZaZFWBdFJTrtPxc03T9--U",authDomain:"chops-frontend-b113c.firebaseapp.com",databaseURL:"https://chops-frontend-b113c.firebaseio.com",projectId:"chops-frontend-b113c",storageBucket:"chops-frontend-b113c.appspot.com",messagingSenderId:"728188777376",appId:"1:728188777376:web:8a487ad5d3961314c46ac5",measurementId:"G-DCZK7ET9D2"}),Q=G["initializeApp"](H),X=Q.firestore(),tt={name:"Signup",data:function(){return{email:null,password:null,alias:null,feedback:null,slug:null}},methods:{signup:function(){var t=this;if(this.alias&&this.email&&this.password){this.slug=q()(this.alias,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0});var e=X.collection("users").doc(this.slug);e.get().then((function(a){a.exists?t.feedback="This alias already exists":(c.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(a){e.set({alias:t.alias,geolocation:null,user_id:a.user.uid})})).then((function(){t.$router.push({name:"home"})})).catch((function(e){t.feedback=e.message})),t.feedback="You may use this alias")}))}else this.feedback="You must enter all fields."}}},et=tt,at=(a("3fef"),Object(f["a"])(et,Y,Z,!1,null,null,null)),nt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login container"},[a("form",{staticClass:"card-panel",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h2",{staticClass:"center"},[t._v("Login")]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.feedback?a("p",{staticClass:"red-text center"},[t._v(t._s(t.feedback))]):t._e(),t._m(0)])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field center"},[a("button",{staticClass:"btn light-blue"},[t._v("Login")])])}],rt={name:"Login",data:function(){return{email:null,password:null,feedback:null}},methods:{login:function(){var t=this;this.email&&this.password?(this.feedback=null,c.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){t.$router.push({name:"home"})})).catch((function(e){t.feedback=e.message}))):this.feedback="Please fill in all fields"}}},ot=rt,lt=(a("c89c"),Object(f["a"])(ot,it,st,!1,null,"1eadcc92",null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",t._l(t.data,(function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:{name:"Result",params:{person:e}}}},[t._v("\n                "+t._s(e)+"\n            ")])],1)})),0)])},dt=[],ft={data:function(){return{}},props:["data"],components:{}},pt=ft,mt=(a("4c2c"),Object(f["a"])(pt,ut,dt,!1,null,"23c09cff",null)),vt=mt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v(t._s(t.person))])])},_t=[],gt={methods:{},props:["person"]},bt=gt,wt=(a("7ddd"),Object(f["a"])(bt,ht,_t,!1,null,"2811dc66",null)),Ct=wt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"profile"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s2",attrs:{id:"info"}},[a("ProfInfo")],1),a("div",{staticClass:"col s10",attrs:{id:"visualization"}},[a("Visualization")],1),a("div",{staticClass:"col s12",attrs:{id:"citation"}},[a("Citation")],1)])])},yt=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Professor Name")]),t._l(t.profInfo,(function(e,n){return a("div",{key:n},[a("label",{staticClass:"field-name"},[t._v(t._s(n)+":")]),a("label",{staticClass:"field-value"},[t._v(" "+t._s(e)+" ")])])}))],2)},Ot=[],$t={data:function(){return{profInfo:{School:"CSUN",Department:"Computer Science","Area of Interest":"Artificial Inteligence","number of citations":20,"Most Recent":"01-01-2019"}}}},jt=$t,Dt=(a("2361"),Object(f["a"])(jt,Tt,Ot,!1,null,"dd1c7db4",null)),kt=Dt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"visualization"}},[a("div",[a("word-cloud")],1),a("div",[a("timeline")],1)])},St=[],Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"visualization"}},[a("cloud",{attrs:{data:t.words,fontSizeMapper:t.fontSizeMapper}})],1)},It=[],Nt=(a("a69f"),a("e230")),zt=a.n(Nt),At={name:"word-cloud",data:function(){return{words:[{text:"Vue",value:1e3},{text:"js",value:200},{text:"Jorge",value:8e3},{text:"very cool",value:1e6},{text:"lunch",value:100}],fontSizeMapper:function(t){return 2*Math.log2(t.value)}}},components:{Cloud:zt.a}},Lt=At,Rt=(a("4334"),Object(f["a"])(Lt,Pt,It,!1,null,null,null)),Mt=Rt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"timeline"}},[a("apexchart",{attrs:{type:"rangeBar",height:"350",options:t.chartOptions,series:t.series}})],1)},Ft=[],Ut=a("e122"),Wt={name:"timeline",el:"#timeline",components:{ApexCharts:Ut["a"]},data:function(){return{series:[{name:"Bob",data:[{x:"Design",y:[new Date("2019-03-02").getTime(),new Date("2019-03-03").getTime()]},{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-04").getTime()]},{x:"Test",y:[new Date("2019-03-04").getTime(),new Date("2019-03-07").getTime()]},{x:"Deployment",y:[new Date("2019-03-11").getTime(),new Date("2019-03-12").getTime()]}]},{name:"Joe",data:[{x:"Design",y:[new Date("2019-03-01").getTime(),new Date("2019-03-02").getTime()]},{x:"Code",y:[new Date("2019-03-03").getTime(),new Date("2019-03-07").getTime()]},{x:"Test",y:[new Date("2019-03-06").getTime(),new Date("2019-03-09").getTime()]},{x:"Deployment",y:[new Date("2019-03-10").getTime(),new Date("2019-03-11").getTime()]}]}],chartOptions:{plotOptions:{bar:{horizontal:!0}},yaxis:{min:new Date("2019-03-01").getTime(),max:new Date("2019-03-14").getTime()},xaxis:{type:"datetime"},fill:{type:"gradient",gradient:{shade:"light",type:"vertical",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}}}}}},Bt=Wt,Vt=Object(f["a"])(Bt,Jt,Ft,!1,null,null,null),Yt=Vt.exports,Zt={name:"visualization",components:{WordCloud:Mt,Timeline:Yt}},Kt=Zt,qt=Object(f["a"])(Kt,Et,St,!1,null,null,null),Gt=qt.exports,Ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h4",[t._v("Citations")]),a("table",{staticClass:"highlight"},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Item Name")]),a("th",[t._v("Item Price")])])]),a("tbody",[a("tr",[a("td",[t._v("Natan")]),a("td",[t._v("Eclair")]),a("td",[t._v("$0.87")])]),a("tr",[a("td",[t._v("Jorge")]),a("td",[t._v("Jellybean")]),a("td",[t._v("$3.76")])]),a("tr",[a("td",[t._v("Roee")]),a("td",[t._v("Lollipop")]),a("td",[t._v("$7.00")])])])])])}],Xt=(a("f346"),{}),te=Object(f["a"])(Xt,Ht,Qt,!1,null,"0d04b825",null),ee=te.exports,ae={name:"profile",components:{ProfInfo:kt,Visualization:Gt,Citation:ee}},ne=ae,ie=(a("3c67"),Object(f["a"])(ne,xt,yt,!1,null,"11e88c08",null)),se=ie.exports;n["a"].use(O["a"]);var re=[{path:"/",name:"home",component:M},{path:"/citation",name:"citation",component:V},{path:"/profile",name:"profile",component:se},{path:"/signup",name:"Signup",component:nt},{path:"/login",name:"Login",component:ct},{path:"/results",name:"Results",component:vt,props:!0},{path:"/result",name:"Result",component:Ct,props:!0}],oe=new O["a"]({mode:"history",base:"/",routes:re});oe.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.requiresAuth}))){var n=c.a.auth().currentUser;n?a():a({name:"Login"})}else a()}));var le=oe;n["a"].config.productionTip=!1;var ce=null;c.a.auth().onAuthStateChanged((function(){ce||(ce=new n["a"]({router:le,render:function(t){return t(T)}}).$mount("#app"))}))},6540:function(t,e,a){t.exports=a.p+"img/samplewordcloud.5744e25b.png"},"6bbf":function(t,e,a){},"6d7d":function(t,e,a){"use strict";var n=a("2c57"),i=a.n(n);i.a},"7c31":function(t,e,a){"use strict";var n=a("474c"),i=a.n(n);i.a},"7ddd":function(t,e,a){"use strict";var n=a("4f65"),i=a.n(n);i.a},af24:function(t,e,a){},b205:function(t,e,a){},b828:function(t,e,a){},c87e:function(t,e,a){},c89c:function(t,e,a){"use strict";var n=a("114e"),i=a.n(n);i.a},d8ed:function(t,e,a){"use strict";var n=a("b205"),i=a.n(n);i.a},f346:function(t,e,a){"use strict";var n=a("af24"),i=a.n(n);i.a}});
//# sourceMappingURL=app.a67e7c82.js.map