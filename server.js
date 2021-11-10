(()=>{var e={2:(e,t,n)=>{"use strict";const r=require("react");var a=n.n(r);const s=require("react-router-dom"),c=require("@babel/runtime/helpers/classCallCheck");var i=n.n(c);const l=require("@babel/runtime/helpers/createClass");var o=n.n(l);const u=require("@babel/runtime/helpers/inherits");var m=n.n(u);const d=require("@babel/runtime/helpers/possibleConstructorReturn");var p=n.n(d);const f=require("@babel/runtime/helpers/getPrototypeOf");var h=n.n(f);const v=require("@babel/runtime/helpers/assertThisInitialized");var y=n.n(v);const g=require("@babel/runtime/helpers/defineProperty");var b=n.n(g);const E=function(e){m()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function c(e){var t;return i()(this,c),t=r.call(this,e),b()(y()(t),"showMsg1",(function(){if(t.state.messages)return a().createElement("p",null,t.state.messages[0]);console.log(t.state.messages)})),b()(y()(t),"showMsg2",(function(){if(t.state.messages2)return a().createElement("p",null,t.state.messages2[0]);console.log(t.state.messages2)})),t.state={messages:void 0,messages2:void 0,cond:void 0,value:""},t.onChange=t.onChange.bind(y()(t)),t.add=t.add.bind(y()(t)),t}return o()(c,[{key:"add",value:function(){this.props.onButtonClick(this.state.value),this.setState({value:""})}},{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"wrap_enter"},this.showMsg1(),this.showMsg2(),a().createElement("form",{action:"/signup/signin",method:"POST",className:"wrap_formEnter"},a().createElement("h2",{className:"form__title"},"Login to your account"),a().createElement("p",{className:"form__paragraph"},"Don't have an account?"," ",a().createElement(s.NavLink,{to:"/registration",className:"form__link"},"Register")),a().createElement("label",{htmlFor:"email",className:"form__label"},"Your email"),a().createElement("input",{type:"mail",name:"email",id:"email",placeholder:"email@site.com",className:"form__input"}),a().createElement("label",{htmlFor:"password",className:"form__label"},"Password"),a().createElement("input",{type:"password",name:"password",placeholder:"●●●●●●●●●●●●●●",className:"form__input",value:this.state.value,onChange:this.onChange}),a().createElement("div",{className:"form__container"},a().createElement("div",{className:"input-control-wrapper"},a().createElement("input",{type:"checkbox",name:"remember",id:"remember",className:"form__checkbox"}),a().createElement("label",{className:"form__label",htmlFor:"remember"},"Remember me")),a().createElement(s.NavLink,{to:"/registration",className:"form__password"},"Forgot password?")),a().createElement("button",{type:"submit",className:"form__button",disabled:!this.state.value,onClick:this.add},"Login now"))))}}]),c}(a().Component);const N=function(e){m()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function c(){var e;return i()(this,c),e=r.call(this),b()(y()(e),"showSuccess",(function(){if(e.state.msg)return a().createElement("p",{className:"wrap_msg"},e.state.msg.map((function(e){return a().createElement("p",{className:"txt_msg"},e)})))})),e.state={msg:void 0},e}return o()(c,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.state.msg&&"Регистрация завершена успешно, можете войти"==e.state.msg[0]?window.location.replace("/enter"):console.log(e.state.msg)}),1500)}},{key:"render",value:function(){return a().createElement("div",{className:"wrap_reg"},a().createElement("p",{className:"reg"},this.showSuccess(),a().createElement("form",{action:"/signup/signin",method:"POST",className:"wrap_signup"},a().createElement("h2",{className:"form__title"},"Registration"),a().createElement("p",{className:"form__paragraph"},"Already Registered?",a().createElement(s.NavLink,{to:"/",className:"form__link"},"Log in")),a().createElement("label",{htmlFor:"email",className:"form__label"},"Your email"),a().createElement("input",{type:"mail",name:"email",id:"email",placeholder:"email@site.com",className:"form__input"}),a().createElement("label",{htmlFor:"password",className:"form__label"},"Password"),a().createElement("input",{type:"password",name:"password",placeholder:"●●●●●●●●●●●●●●",className:"form__input",value:this.state.value,onChange:this.onChange}),a().createElement("div",{className:"form__container"},a().createElement("div",{className:"input-control-wrapper"},a().createElement("input",{type:"checkbox",name:"remember",id:"remember",className:"form__checkbox"}),a().createElement("label",{className:"form__label",htmlFor:"remember"},"Remember me"))),a().createElement("button",{type:"submit",className:"form__button",disabled:!this.state.value,onClick:this.add},"Register now"))))}}]),c}(a().Component),w=require("@babel/runtime/helpers/toConsumableArray");var _=n.n(w);const x=require("@babel/runtime/helpers/asyncToGenerator");var T=n.n(x);const I=require("@babel/runtime/regenerator");var k=n.n(I);const C=require("axios");var A=n.n(C);function S(){return D.apply(this,arguments)}function D(){return(D=T()(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A().get("https://adminrosee.herokuapp.com/api/profile").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}S().then((function(e){return e})).catch((function(e){return console.log(e)})),a().Component;const R=function(e){m()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function c(){var e;return i()(this,c),e=r.call(this),b()(y()(e),"handleClick",(function(t){var n=t.target.value;if(e.state.deleted.includes(n)){var r=e.state.deleted.indexOf(n);e.state.deleted.splice(r,1),console.log(e.state.deleted),e.detected.current.value,e.state.deleted}else e.setState({deleted:[].concat(_()(e.state.deleted),[n])}),setTimeout((function(){console.log(e.state.deleted),e.detected.current.value,e.state.deleted}),250)})),b()(y()(e),"userData",(function(){return e.state.info&&e.state.genry&&0==e.state.genry.length?a().createElement("div",{className:"wrap_userData"},a().createElement(s.Route,{exact:!0,path:"/profile"},e.state.info.map((function(e,t){return a().createElement("div",{className:"userInfo",style:{display:"yes"==e.cancel?"none":"grid"}},a().createElement("div",{className:"infoBlock1"},a().createElement("input",{type:"checkbox",name:"check",className:"eachCheck",value:e._id}),a().createElement("p",{className:"credentials userIndex"},t+1),a().createElement("p",{className:"credentials usName"},"no"==e.cancel?e.username:null),a().createElement("p",{className:"credentials usAdd"},"no"==e.cancel?e.useraddress:null),a().createElement("p",{className:"credentials usTime"},"no"==e.cancel?e.timestamp:null),a().createElement("p",{className:"credentials usPay"},"no"==e.cancel?e.typeOfPayment:null),a().createElement("p",{className:"credentials usPhone"},"no"==e.cancel?e.userphone:null),a().createElement("p",{className:"credentials usMail"},"no"==e.cancel?e.email:null)),a().createElement("div",{className:"infoBlock2"},a().createElement("form",{action:"/profile/"+e._id,method:"POST"},a().createElement("textarea",{className:"areas",name:"textData"},e.adminComment),a().createElement("button",{type:"submit",className:"buttonChange"},"Изменить"))))}))),a().createElement(s.Route,{exact:!0,path:"/profile/canceled"},e.state.info.map((function(t,n){return a().createElement("div",{className:"userInfo",style:{display:"no"==t.cancel?"none":"grid"}},a().createElement("div",{className:"infoBlock1"},a().createElement("input",{type:"checkbox",name:"check",className:"eachCheck",value:t._id,onChange:e.handleClick}),a().createElement("p",{className:"credentials userIndex"},n+1),a().createElement("p",{className:"credentials usName"},"yes"==t.cancel?t.username:null),a().createElement("p",{className:"credentials usAdd"},"yes"==t.cancel?t.useraddress:null),a().createElement("p",{className:"credentials usTime"},"yes"==t.cancel?t.timestamp:null),a().createElement("p",{className:"credentials usPay"},"yes"==t.cancel?t.typeOfPayment:null),a().createElement("p",{className:"credentials usPhone"},"yes"==t.cancel?t.userphone:null),a().createElement("p",{className:"credentials usMail"},"yes"==t.cancel?t.email:null)),a().createElement("div",{className:"infoBlock2"},a().createElement("form",{action:"/profile/"+t._id,method:"POST"},a().createElement("textarea",{className:"areas",name:"textData"},t.adminComment),a().createElement("button",{type:"submit",className:"buttonChange"},"Изменить"))))})))):a().createElement("div",{className:"wrap_userData"},a().createElement(s.Route,{exact:!0,path:"/profile"},e.state.genry.map((function(e,t){return a().createElement("div",{className:"userInfo",style:{display:"yes"==e.cancel?"none":"grid"}},a().createElement("div",{className:"infoBlock1"},a().createElement("input",{type:"checkbox",name:"check",className:"eachCheck"}),a().createElement("p",{className:"credentials userIndex"},t+1),a().createElement("p",{className:"credentials usName"},"no"==e.cancel?e.username:null),a().createElement("p",{className:"credentials usAdd"},"no"==e.cancel?e.useraddress:null),a().createElement("p",{className:"credentials usTime"},"no"==e.cancel?e.timestamp:null),a().createElement("p",{className:"credentials usPay"},"no"==e.cancel?e.typeOfPayment:null),a().createElement("p",{className:"credentials usPhone"},"no"==e.cancel?e.userphone:null),a().createElement("p",{className:"credentials usMail"},"no"==e.cancel?e.email:null)),a().createElement("div",{className:"infoBlock2"},a().createElement("form",{action:"/profile/"+e._id,method:"POST"},a().createElement("input",{className:"areasDouble",id:"ars",name:"textData",placeholder:e.adminComment}),a().createElement("button",{type:"submit",className:"buttonChange"},"Изменить"))))}))),a().createElement(s.Route,{exact:!0,path:"/profile/cancel"},e.state.genry.map((function(e,t){return a().createElement("div",{className:"userInfo",style:{display:"no"==e.cancel?"none":"grid"}},a().createElement("div",{className:"infoBlock1"},a().createElement("input",{type:"checkbox",name:"check",className:"eachCheck"}),a().createElement("p",{className:"credentials userIndex"},t+1),a().createElement("p",{className:"credentials usName"},"yes"==e.cancel?e.username:null),a().createElement("p",{className:"credentials usAdd"},"yes"==e.cancel?e.useraddress:null),a().createElement("p",{className:"credentials usTime"},"yes"==e.cancel?e.timestamp:null),a().createElement("p",{className:"credentials usPay"},"yes"==e.cancel?e.typeOfPayment:null),a().createElement("p",{className:"credentials usPhone"},"yes"==e.cancel?e.userphone:null),a().createElement("p",{className:"credentials usMail"},"yes"==e.cancel?e.email:null)),a().createElement("div",{className:"infoBlock2"},a().createElement("form",{action:"/profile/"+e._id,method:"POST"},a().createElement("input",{className:"areasDouble",id:"ars",name:"textData",placeholder:e.adminComment}),a().createElement("button",{type:"submit",className:"buttonChange"},"Изменить"))))}))))})),b()(y()(e),"indicate",(function(){var t=e.inp1.current.value.split("");if(e.state.info){e.setState({grey:[]});var n=e.state.info.filter((function(e){var n;for(n=0;n<3;n++)return e.username.split("")[n].toLowerCase()==t[n].toLowerCase()})),r=e.state.info.filter((function(e){var n;for(n=0;n<3;n++)return e.email.split("")[n]==t[n]})),a=e.state.info.filter((function(e){var n;for(n=0;n<3;n++)return e.typeOfPayment.split("")[n].toLowerCase()==t[n].toLowerCase()}));e.setState({genry:n.length>0?n:r.length>0?r:a.length>0?a:window.__INITIAL_DATA__}),setTimeout((function(){console.log(e.state.genry)}),100)}})),b()(y()(e),"subDelete",(function(){e.subscribes.current.classList.contains("subAdd")&&e.subscribes.current.classList.remove("subAdd")})),b()(y()(e),"subAdd",(function(){e.subscribes.current.classList.contains("subAdd")||e.subscribes.current.classList.add("subAdd")})),e.state={info:void 0,genry:[],deleted:[]},e.inp1=a().createRef(),e.inp=a().createRef(),e.subscribes=a().createRef(),e.unsubscribes=a().createRef(),e.detected=a().createRef(),e}return o()(c,[{key:"render",value:function(){return a().createElement("div",{className:"wrap_profile"},a().createElement("div",{className:"profile"},a().createElement("div",{className:"header"},a().createElement(s.NavLink,{to:"/profile",className:"subscribe",onClick:this.subDelete,ref:this.subscribes}," Подписки "),a().createElement(s.NavLink,{to:"/profile/canceled",className:"unsubscribe",activeClassName:"actSub",onClick:this.subAdd,ref:this.unsubscribes}," Отписались "),a().createElement("a",{href:"/profile/logout",id:"exit"},"Выйти"),a().createElement("input",{type:"text",name:"search",className:"searchForm",ref:this.inp1}),a().createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjQ5OTggMjIuODY4NEwxNi44NjM0IDE3LjIzMjFNMTYuODYzNCAxNy4yMzIxQzE4LjQ5MjIgMTUuNjAzMyAxOS40OTk2IDEzLjM1MzIgMTkuNDk5NiAxMC44Njc3QzE5LjQ5OTYgNS44OTY4NiAxNS40Njk5IDEuODY3MTkgMTAuNDk5MSAxLjg2NzE5QzUuNTI4MjEgMS44NjcxOSAxLjQ5ODU0IDUuODk2ODYgMS40OTg1NCAxMC44Njc3QzEuNDk4NTQgMTUuODM4NiA1LjUyODIxIDE5Ljg2ODMgMTAuNDk5MSAxOS44NjgzQzEyLjk4NDUgMTkuODY4MyAxNS4yMzQ2IDE4Ljg2MDggMTYuODYzNCAxNy4yMzIxWiIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjIuMjUwMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",id:"searchImg",onClick:this.indicate}),a().createElement(s.Route,{exact:!0,path:"/profile"},a().createElement("a",{href:"/postpone",id:"postpone"},"Отложить"),a().createElement("a",{href:"/unsubscribe",id:"unsubscribe2"},"Отписать")),a().createElement(s.Route,{exact:!0,path:"/profile/canceled"},a().createElement("form",{action:"/profile/delete",method:"POST"},a().createElement("input",{type:"hidden",name:"del",value:this.state.deleted,ref:this.detected}),a().createElement("button",{type:"submit",id:"postpone2"},"Удалить")),a().createElement("a",{href:"/unsubscribe",id:"unsubscribe3"},"Отправить ссылку на подписку")),a().createElement("a",{href:"/table",id:"table"},"Экспорт в xslx")),this.userData()))}}]),c}(a().Component),O=[{path:["/","/enter"],exact:!0,component:E},{path:["/registration","/signup"],exact:!0,component:N},{path:["/profile","/profile/canceled"],exact:!0,component:R,fetchInitialData:function(){return S()}}];const P=function(e){m()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function c(){return i()(this,c),r.apply(this,arguments)}return o()(c,[{key:"render",value:function(){return a().createElement("div",{className:"main_wrap"},a().createElement(s.Switch,null,O.map((function(e,t){return a().createElement(s.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),c}(a().Component);var M=n(127),L=n.n(M);const j=require("react-dom/server"),q=require("cookie-parser");var B=n.n(q);const z=require("body-parser");var U=n.n(z);const Y=require("serialize-javascript");var F=n.n(Y);const Q=require("express-validator");var H=n.n(Q),Z=n(619),G=n.n(Z);const W=require("express-session");var J=n.n(W);const V=require("passport");var K=n.n(V);const X=require("connect-flash");var $=n.n(X);const ee=require("cors");var te=n.n(ee),ne=n(127).Router();ne.get("/",(function(e,t,n){if(!e.isAuthenticated())return n();t.redirect("/profile")}),(function(e,t){var n=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(N,null)));t.send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundle.js\' defer><\/script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 '.concat(n,"\n              </div>\n            </body>\n        </html>"))}));const re=ne;var ae=n(936),se=n.n(ae),ce=n(888).Strategy,ie=L().Router();n(201),K().serializeUser((function(e,t){t(null,e.id)})),K().deserializeUser((function(e,t){se().findById(e,(function(e,n){t(e,n)}))})),ie.get("/",(function(e,t,n){if(!e.isAuthenticated())return n();t.redirect("/profile")}),(function(e,t,n){var r=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(N,null)));t.send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Вход</title>\n                <link rel="stylesheet" type="text/css" href="main.css">\n                  <meta name="viewport" content="width=device-width, initial-scale=1">\n                    <script src=\'bundle.js\' defer><\/script>\n                      </head>\n                    <body>\n                   <div id="app">\n                 '.concat(r,"\n              </div>\n            </body>\n        </html>"))})),ie.post("/",(function(e,t,n){var r=e.body,c=r.email,i=r.password;e.checkBody("email","Неправильный Email").isEmail(),e.checkBody("password","Минимально число символов - 5").isLength({min:5});var l=e.validationErrors();if(l){console.log(l);var o=l.map((function(e){return e.msg})),u=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(N,null)));return t.send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundle.js\' defer><\/script>\n                       <script>window.__INITIAL_DATA__= '.concat(F()(o),'<\/script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 ').concat(u,"\n              </div>\n            </body>\n        </html>"))}se().findOne({email:c},(function(r,l){if(r)return n(r);if(l){e.isAuthenticated();var o=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(N,null)));return t.send('<!DOCTYPE html>\n         <html>\n             <head>\n               <title>Проверка кода</title>\n                    <link rel="stylesheet" type="text/css" href="main.css">\n                      <meta name="viewport" content="width=device-width, initial-scale=1">\n                        <script src=\'bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(F()(["Такой Email уже используется"]),'<\/script>\n                        </head>\n                      <body>\n                    <div id="app">\n                  ').concat(o,"\n               </div>\n             </body>\n         </html>")),n(null,!1)}var u=new(se())({email:c,password:i});se().createUser(u,(function(e,t){if(e)throw e;console.log(t)}));var m=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(N,null)));t.send('<!DOCTYPE html>\n      <html>\n          <head>\n            <title>Проверка кода</title>\n                 <link rel="stylesheet" type="text/css" href="main.css">\n                   <meta name="viewport" content="width=device-width, initial-scale=1">\n                     <script src=\'bundle.js\' defer><\/script>\n                     <script>window.__INITIAL_DATA__= '.concat(F()(["Регистрация завершена успешно, можете войти"]),'<\/script>\n                     </head>\n                   <body>\n                 <div id="app">\n               ').concat(m,"\n            </div>\n          </body>\n      </html>"))}))})),K().use("local.signin",new ce({usernameField:"email",passwordField:"password",passReqToCallback:!0},(function(e,t,n,r){se().findOne({email:t},(function(t,a){return t?(console.log(t),r(t)):a?void se().comparePassword(n,a.password,(function(t,n){if(t)throw t;return n?r(null,a):(e.flash("error","Неверный пароль"),r(null,!1))})):(e.flash("errors","Не найдено пользователей. Ошибка в почте"),r(null,!1))}))}))),ie.post("/signin",K().authenticate("local.signin",{successRedirect:"/profile",failureRedirect:"/enter",passReqToCallback:!0}));const le=ie;var oe=L().Router();n(201);var ue=G().createConnection(process.env.CUSTOMERS,{useNewUrlParser:!0,useUnifiedTopology:!0,useCreateIndex:!0},(function(){console.log("CUSTOMERS DB connected!")})).model("User",new(G().Schema)({username:{type:String,required:!0},userphone:{type:String,required:!0},email:{type:String,required:!0},timestamp:{type:String},adminComment:{type:String},password:{type:String,required:!0},useraddress:{type:String,required:!0},typeOfPayment:{type:String,required:!0},typeOfSkin:{type:String},comments:{type:String},letter:{type:String}}));function me(e,t,n){if(e.isAuthenticated())return n();t.redirect("/")}oe.get(["/","/canceled"],me,function(){var e=T()(k().mark((function e(t,n,r){var c,i,l;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.find();case 2:return c=e.sent,i=t.isAuthenticated(),l=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(R,null))),e.abrupt("return",n.send('<!DOCTYPE html>\n          <html>\n              <head>\n                <title>Проверка кода</title>\n                     <link rel="stylesheet" type="text/css" href="../main.css">\n                       <meta name="viewport" content="width=device-width, initial-scale=1">\n                         <script src=\'/bundle.js\' defer><\/script>\n                         <script>window.__INITIAL_DATA__ = '.concat(F()(c),"<\/script>\n                         <script>window.__INITIAL_STATE__ = ").concat(F()(i),'<\/script>\n                         </head>\n                       <body>\n                     <div id="app">\n                   ').concat(l,"\n                </div>\n              </body>\n          </html>")));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),oe.get("/logout",me,(function(e,t,n){e.logout(),t.redirect("/")})),oe.post("/delete",function(){var e=T()(k().mark((function e(t,n){var r,a,s;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.body.del,a=r.split(","),s=0;case 3:if(!(s<a.length)){e.next=11;break}return e.next=6,ue.findById(a[s]);case 6:e.sent.delete();case 8:s++,e.next=3;break;case 11:n.redirect("/profile/canceled");case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),oe.post("/:id",function(){var e=T()(k().mark((function e(t,n){var r,a;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.id,e.next=3,ue.findById(r);case 3:(a=e.sent).adminComment=t.body.textData,a.save(),console.log(a),n.redirect("/profile");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());const de=oe;var pe=L().Router();pe.get("/",(function(e,t,n){if(!e.isAuthenticated())return n();t.redirect("/profile")}),(function(e,t){var n=e.flash("error"),r=e.flash("errors"),c=e.isAuthenticated(),i=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(E,null)));t.send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundle.js\' defer><\/script>\n                       <script>window.__INITIAL_DATA__ = '.concat(F()(n),"<\/script>\n                       <script>window.__INITIAL_INFO__ = ").concat(F()(r),"<\/script>\n                       <script>window.__INITIAL_STATE__ = ").concat(F()(c),'<\/script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 ').concat(i,"\n              </div>\n            </body>\n        </html>"))}));const fe=pe;var he=L().Router();he.get("/profile",(function(e,t,n){if(e.isAuthenticated())return n();t.redirect("/")}),(function(e,t,n){t.send("hello")}));const ve=he;var ye=L()(),ge=process.env.MONGODB_URI;process.env.PORT,n(201),G().connect(ge||process.env.CONNECT,{useNewUrlParser:!0,useUnifiedTopology:!0,useCreateIndex:!0},(function(){console.log("Connection with database accountGW completed")})),ye.use((function(e,t,n){t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t.setHeader("Pragma","no-cache"),t.setHeader("Expires","0"),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),n()})),ye.use(L().static("public")),ye.use(U().json()),ye.use(U().urlencoded({extended:!1})),ye.use(L().urlencoded({extended:!1})),ye.use(te()()),ye.use(H()()),ye.use(B()()),ye.use(J()({secret:"mysecret",resave:!1,saveUnitialized:!1})),ye.use($()()),ye.use(K().initialize()),ye.use(K().session()),ye.use("/registration",re),ye.use("/signup",le),ye.use("/profile",de),ye.use("/enter",fe),ye.use("/api",ve),ye.get("/",(function(e,t,n){if(!e.isAuthenticated())return n();t.redirect("/profile")}),(function(e,t,n){var r=e.isAuthenticated(),c=(0,j.renderToString)(a().createElement(s.StaticRouter,null,a().createElement(E,null)));t.send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>Проверка кода</title>\n                   <link rel="stylesheet" type="text/css" href="main.css">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                       <script src=\'bundle.js\' defer><\/script>\n                       <script>window.__INITIAL_STATE__ = '.concat(F()(r),'<\/script>\n                       </head>\n                     <body>\n                   <div id="app">\n                 ').concat(c,"\n              </div>\n            </body>\n        </html>"))})),ye.get("*",(function(e,t,n){var r=O.find((function(t){return(0,s.matchPath)(e.url,t)}))||{};(r.fetchInitialData?r.fetchInitialData(e.path):Promise.resolve()).then((function(n){var r={data:n},c=(0,j.renderToString)(a().createElement(s.StaticRouter,{location:e.url,context:r},a().createElement(P,{data:n}))),i='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>collab</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(F()(n),'<\/script>\n                            <title>COLLAB</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     ').concat(c,"\n                   </div>\n                </body>\n            </html>");return t.send(i)})).catch(n)})),ye.use((function(e,t,n){var r=new Error("Noooo");r.status=404,n(r)})),ye.listen(8080,(function(){console.log("connected!")}))},936:(e,t,n)=>{var r=n(619),a=r.Schema,s=n(773),c=new a({email:{type:String,required:!0},password:{type:String,required:!0}});e.exports=r.model("User",c),e.exports.createUser=function(e,t){var r=n(773);r.genSalt(10,(function(n,a){r.hash(e.password,a,(function(n,r){e.password=r,e.save(t)}))}))},e.exports.comparePassword=function(e,t,n){s.compare(e,t,(function(e,t){if(e)throw e;n(null,t)}))}},346:e=>{"use strict";e.exports=require("babel-regenerator-runtime")},773:e=>{"use strict";e.exports=require("bcryptjs")},201:e=>{"use strict";e.exports=require("dotenv/config")},127:e=>{"use strict";e.exports=require("express")},619:e=>{"use strict";e.exports=require("mongoose")},888:e=>{"use strict";e.exports=require("passport-local")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(346),n(2)})();