(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{L6id:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("oBZk"),r=t("ZZ/e"),c=t("gIcY"),s=t("Ip0R"),a=function(){function l(){this.successFactor=0,this.fieldGlass=0,this.ariba=0,this.qualtrics=0,this.concur=0,this.leonardo=0,this.success=["Beach","Sometimes casual but sometimes preppy","Go out and have drinks with friends","My own storefront","Between other tasks","Tea"],this.field=["Amusement park","Sometimes casual but sometimes preppy","Go out and have drinks with friends","An art studio","Whenever the inspiration hits","Coffee"],this.ari=["Stay in","Video game","An office","Early morning","Water"],this.qual=["Road trip","Relax on the couch","In my bed","Late at night","Tea"],this.conc=["Spend time outdoors","Wherever the work takes me","Whenever the inspiration hits","Coffee"],this.leo=["Cultural","Black white and grey","Reading","Anywhere with WiFi","Early morning","Water"],this.cardList=[],this.cardList.push({title:"What\u2019s your favorite kind of vacation?",choices:["Beach","Amusement Park","Stay in","Exotic","Cultural"],checked:""}),this.cardList.push({title:"What\u2019s your favorite food?",choices:["Burger","Soup","Smoothie","Pasta","Steak","I love to try new foods"],checked:""}),this.cardList.push({title:"What\u2019s your favorite color?",choices:["Blue","Redk","Teal","Black","White","Purple"],checked:""}),this.cardList.push({title:"How would you describe your style?",choices:["Tons of colors","The styles vary, but everything is neat and organized ","Black white and grey","Sometimes casual but sometimes preppy"],checked:""}),this.cardList.push({title:"What do you do to relax?",choices:["Spend time outdoors","Relax on the couch","Go out and have drinks with friends","Reading","Video game"],checked:""}),this.cardList.push({title:"What\u2019s your ideal workspace?",choices:["Anywhere with WiFi","An art studio","Wherever the work takes me","An office","My own storefront","In my bed"],checked:""}),this.cardList.push({title:"When do you get the most done?",choices:["Early morning","Late at night","Between other tasks","Whenever the inspiration hits"],checked:""}),this.cardList.push({title:"What\u2019s your go-to beverage?",choices:["Water","Coffee","Tea"],checked:""})}return l.prototype.submit=function(){var l;for(var n in this.cardList){if(""==this.cardList[n].checked)return void alert("Please make sure you select all the choices to see the result");this.success.includes(this.cardList[n].checked)?this.successFactor+=1:this.field.includes(this.cardList[n].checked)?this.fieldGlass+=1:this.ari.includes(this.cardList[n].checked)?this.ariba+=1:this.qual.includes(this.cardList[n].checked)?this.qualtrics+=1:this.conc.includes(this.cardList[n].checked)?this.concur+=1:this.leo.includes(this.cardList[n].checked)&&(this.leonardo+=1)}var t=Math.max(this.successFactor,this.fieldGlass,this.ariba,this.qualtrics,this.concur,this.leonardo);console.log("hi",t),t==this.successFactor?l="Success Factor":t==this.fieldGlass?l="Field Glass":t==this.ariba?l="Ariba":t==this.qualtrics?l="Qualtrics":t==this.concur?l="Concur":t==this.leonardo&&(l="Leonardo"),alert("you are "+l)},l}(),h=e.qb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{text-align:center;color:#fff}ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:linear-gradient(#00B9F2,#019CE0,#0C7ECF)}.submit[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function b(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(1,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(3,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(4,0,["",""])),(l()(),e.sb(5,0,null,0,3,"ion-radio",[["value","3"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,8)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,8)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.parent.context.$implicit.checked=l.parent.context.$implicit.choices[2])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(7,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(8,16384,null,0,r.Hb,[e.k],null,null)],(function(l,n){l(n,7,0,"3")}),(function(l,n){l(n,4,0,n.parent.context.$implicit.choices[2])}))}function d(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(1,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(3,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(4,0,["",""])),(l()(),e.sb(5,0,null,0,3,"ion-radio",[["value","4"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,8)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,8)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.parent.context.$implicit.checked=l.parent.context.$implicit.choices[3])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(7,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(8,16384,null,0,r.Hb,[e.k],null,null)],(function(l,n){l(n,7,0,"4")}),(function(l,n){l(n,4,0,n.parent.context.$implicit.choices[3])}))}function f(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(1,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(3,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(4,0,["",""])),(l()(),e.sb(5,0,null,0,3,"ion-radio",[["value","5"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,8)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,8)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.parent.context.$implicit.checked=l.parent.context.$implicit.choices[4])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(7,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(8,16384,null,0,r.Hb,[e.k],null,null)],(function(l,n){l(n,7,0,"5")}),(function(l,n){l(n,4,0,n.parent.context.$implicit.choices[4])}))}function p(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(1,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(3,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(4,0,["",""])),(l()(),e.sb(5,0,null,0,3,"ion-radio",[["value","6"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,8)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,8)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.parent.context.$implicit.checked=l.parent.context.$implicit.choices[5])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(7,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(8,16384,null,0,r.Hb,[e.k],null,null)],(function(l,n){l(n,7,0,"6")}),(function(l,n){l(n,4,0,n.parent.context.$implicit.choices[5])}))}function k(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,40,"ion-card",[],null,null,null,o.u,o.c)),e.rb(1,49152,null,0,r.j,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,4,"ion-card-header",[],null,null,null,o.s,o.e)),e.rb(3,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(l()(),e.sb(4,0,null,0,2,"ion-card-title",[],null,null,null,o.t,o.f)),e.rb(5,49152,null,0,r.n,[e.h,e.k,e.z],null,null),(l()(),e.Hb(6,0,["",""])),(l()(),e.sb(7,0,null,0,33,"ion-card-content",[],null,null,null,o.r,o.d)),e.rb(8,49152,null,0,r.k,[e.h,e.k,e.z],null,null),(l()(),e.sb(9,0,null,0,31,"ion-list",[],null,null,null,o.z,o.k)),e.rb(10,49152,null,0,r.L,[e.h,e.k,e.z],null,null),(l()(),e.sb(11,0,null,0,29,"ion-radio-group",[["name","auto"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,14)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Db(l,14)._handleChangeEvent(t.target)&&u),u}),o.A,o.m)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Ib]),e.rb(13,49152,null,0,r.Y,[e.h,e.k,e.z],{name:[0,"name"]},null),e.rb(14,16384,null,0,r.Ib,[e.k],null,null),(l()(),e.sb(15,0,null,0,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(16,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(17,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(18,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(19,0,["",""])),(l()(),e.sb(20,0,null,0,3,"ion-radio",[["value","1"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,23)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,23)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.context.$implicit.checked=l.context.$implicit.choices[0])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(22,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(23,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.sb(24,0,null,0,8,"ion-item",[],null,null,null,o.x,o.i)),e.rb(25,49152,null,0,r.E,[e.h,e.k,e.z],null,null),(l()(),e.sb(26,0,null,0,2,"ion-label",[],null,null,null,o.y,o.j)),e.rb(27,49152,null,0,r.K,[e.h,e.k,e.z],null,null),(l()(),e.Hb(28,0,[""," "])),(l()(),e.sb(29,0,null,0,3,"ion-radio",[["value","2"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,32)._handleBlurEvent(t.target)&&u),"ionSelect"===n&&(u=!1!==e.Db(l,32)._handleIonSelect(t.target)&&u),"ionSelect"===n&&(u=!1!==(l.context.$implicit.checked=l.context.$implicit.choices[1])&&u),u}),o.B,o.l)),e.Eb(5120,null,c.b,(function(l){return[l]}),[r.Hb]),e.rb(31,49152,null,0,r.X,[e.h,e.k,e.z],{value:[0,"value"]},null),e.rb(32,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.hb(16777216,null,0,1,null,b)),e.rb(34,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,d)),e.rb(36,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,f)),e.rb(38,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,p)),e.rb(40,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,13,0,"auto"),l(n,22,0,"1"),l(n,31,0,"2"),l(n,34,0,null!=n.context.$implicit.choices[2]),l(n,36,0,null!=n.context.$implicit.choices[3]),l(n,38,0,null!=n.context.$implicit.choices[4]),l(n,40,0,null!=n.context.$implicit.choices[5])}),(function(l,n){l(n,6,0,n.context.$implicit.title),l(n,19,0,n.context.$implicit.choices[0]),l(n,28,0,n.context.$implicit.choices[1])}))}function m(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,6,"ion-header",[],null,null,null,o.w,o.h)),e.rb(1,49152,null,0,r.y,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.D,o.o)),e.rb(3,49152,null,0,r.zb,[e.h,e.k,e.z],null,null),(l()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,o.C,o.n)),e.rb(5,49152,null,0,r.xb,[e.h,e.k,e.z],null,null),(l()(),e.Hb(-1,0,[" SAP personaliy quiz, which sap product are you? "])),(l()(),e.sb(7,0,null,null,8,"ion-content",[],null,null,null,o.v,o.g)),e.rb(8,49152,null,0,r.r,[e.h,e.k,e.z],null,null),(l()(),e.sb(9,0,null,0,6,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,k)),e.rb(11,278528,null,0,s.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(12,0,null,null,3,"div",[["class","submit"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.submit()&&e),e}),o.q,o.b)),e.rb(14,49152,null,0,r.h,[e.h,e.k,e.z],null,null),(l()(),e.Hb(-1,0,[" Submit "]))],(function(l,n){l(n,11,0,n.component.cardList)}),null)}function v(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,1,"app-home",[],null,null,null,m,h)),e.rb(1,49152,null,0,a,[],null,null)],null,null)}var g=e.ob("app-home",a,v,{},{},[]),B=t("ZYCi");t.d(n,"HomePageModuleNgFactory",(function(){return y}));var y=e.pb(u,[],(function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[i.a,g]],[3,e.j],e.x]),e.Bb(4608,s.k,s.j,[e.u,[2,s.q]]),e.Bb(4608,c.d,c.d,[]),e.Bb(4608,r.a,r.a,[e.z,e.g]),e.Bb(4608,r.Db,r.Db,[r.a,e.j,e.q]),e.Bb(4608,r.Gb,r.Gb,[r.a,e.j,e.q]),e.Bb(1073742336,s.b,s.b,[]),e.Bb(1073742336,c.c,c.c,[]),e.Bb(1073742336,c.a,c.a,[]),e.Bb(1073742336,r.Bb,r.Bb,[]),e.Bb(1073742336,B.n,B.n,[[2,B.s],[2,B.m]]),e.Bb(1073742336,u,u,[]),e.Bb(1024,B.k,(function(){return[[{path:"",component:a}]]}),[])])}))},gIcY:function(l,n,t){"use strict";t("mrSG");var e=t("CcnG");t("ZYjt"),t("6blF"),t("isby"),t("67Y/"),t("McSo"),t("0/uQ"),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return c}));var u=new e.p("NgValueAccessor"),i=function(){function l(){this._accessors=[]}return l.prototype.add=function(l,n){this._accessors.push([l,n])},l.prototype.remove=function(l){for(var n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===l)return void this._accessors.splice(n,1)},l.prototype.select=function(l){var n=this;this._accessors.forEach((function(t){n._isSameGroup(t,l)&&t[1]!==l&&t[1].fireUncheck(l.value)}))},l.prototype._isSameGroup=function(l,n){return!!l[0].control&&l[0]._parent===n._control._parent&&l[1].name===n.name},l}(),o=new e.p("NgFormSelectorWarning"),r=function(){return function(){}}(),c=function(){function l(){}var n;return n=l,l.withConfig=function(l){return{ngModule:n,providers:[{provide:o,useValue:l.warnOnDeprecatedNgFormSelector}]}},l}()}}]);