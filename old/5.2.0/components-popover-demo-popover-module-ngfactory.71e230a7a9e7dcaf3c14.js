(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+27S":function(n,l){n.exports='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n\n'},"/F8h":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoPopoverTriggersCustomComponent {}\n"},"0mei":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoPopoverCustomContentComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},"1Cmi":function(n,l){n.exports='<p>\n  <span popover="Hello there! I was triggered manually"\n        triggers="" #pop="bs-popover">\n  This text has attached popover\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n'},"3kBA":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoPopoverAdaptivePositionComponent {}\n"},"6R1N":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoPopoverBasicComponent {}\n"},"8Cki":function(n,l){n.exports='<div class="row">\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="I will hide on blur"\n            triggers="mouseenter:mouseleave">\n      Hover over me!\n    </button>\n  </div>\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="Double click one more time"\n            triggers="dblclick">\n      Double click me!\n    </button>\n  </div>\n  <div class="col-md-3">\n    <input type="text"\n           class="form-control"\n           placeholder="Show popover on input change"\n           popover="I will hide on blur"\n           triggers="keypress:focusout">\n  </div>\n</div>\n'},"8wZH":function(n,l){n.exports='<div class="row panel" style="position: relative; overflow: hidden;">\n  <div class="card-block panel-body">\n    <button type="button" class="btn btn-danger"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Default popover\n    </button>\n    <button type="button" class="btn btn-success"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n            container="body">\n      Popover appended to body\n    </button>\n  </div>\n</div>\n'},"9mc2":function(n,l){n.exports="// RECOMMENDED\nimport { PopoverModule } from 'ngx-bootstrap/popover';\n// or\nimport { PopoverModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [PopoverModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},Dcvg:function(n,l){n.exports='<p>\n  <span popover="Hello there! I was triggered by changing isOpen property"\n        triggers=""  [isOpen]="isOpen">\n  This text has attached popover\n  </span>\n</p>\n<button type="button" class="btn btn-primary"\n        (click)="isOpen = !isOpen">\n  Toggle\n</button>\n'},GVbW:function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),e=function(){return function(){}}(),u=o("pMnS"),r=o("+R8e"),p=o("R23a"),a=o("7ctM"),s=o("A8CJ"),i=o("qzmI"),c=o("BFzJ"),b=o("ES0t"),m=o("/jpH"),v=o("ybC4"),d=o("+6bh"),g=o("oxqd"),f=function(){return function(){}}(),h=function(){return function(){}}(),y=function(){return function(){this.isOpen=!1}}(),P=function(){return function(){}}(),C=o("OZfm");function x(){return Object.assign(new C.a,{placement:"right",container:"body",triggers:"focus"})}var w=function(){return function(){}}(),k=function(){return function(){}}(),T=function(){return function(){this.context={message:"Hello there!"}}}(),V=function(){return function(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}(),q=function(){return function(){}}(),D=function(){return function(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}(),L=function(){return function(){this.html='\n<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>'}}(),N=function(){function n(){}return n.prototype.onShown=function(){this.message="shown"},n.prototype.onHidden=function(){this.message="hidden"},n}(),B=function(){return function(){}}(),E=function(){return function(){}}(),H=function(){return function(){}}(),O=function(){return function(){}}(),I=function(){return function(){}}(),S=o("ClAA"),U=o("y20O"),A=o("nk7K"),M=o("l3GJ"),R=[{name:"Usage",anchor:"usage",outlet:S.a,content:{doc:o("9mc2")}},{name:"Examples",anchor:"examples",outlet:U.a,content:[{title:"Basic",anchor:"basic",component:o("6R1N"),html:o("+27S"),outlet:h},{title:"Placement",anchor:"placement",component:o("w+xv"),html:o("npKD"),description:"<p>Four positioning options are available: <code>top</code>, <code>right</code>, \n        <code>bottom</code>, and <code>left</code>.\n        Besides that, <code>auto</code> option may be used to detect a position that fits the component on screen.</p>",outlet:E},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:o("3kBA"),html:o("WprW"),outlet:f},{title:"Dismiss on next click",anchor:"popover-dismiss",component:o("NwYC"),html:o("z73j"),description:"<p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the\n      user makes.</p>",outlet:q},{title:"Dynamic content",anchor:"dynamic-content",component:o("UZBA"),html:o("KIuu"),description:"<p>Pass a string as popover content.</p>",outlet:D},{title:"Custom content template",anchor:"custom-content-template",component:o("0mei"),html:o("rr6d"),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[popover]="myId"</code> as popover content.</p>',outlet:V},{title:"Dynamic Html",anchor:"dynamic-html",component:o("vImg"),html:o("ZoZi"),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you can display any dynamic html</p>",outlet:L},{title:"Append to body",anchor:"container-body",component:o("O9iR"),html:o("8wZH"),description:'<p>When you have any styles on a parent element that interfere with a popover,\n        you\u2019ll want to specify a <code>container="body"</code> so that the popover\u2019s HTML will be\n        appended to body. This will help to avoid rendering problems in more complex components\n        (like input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:k},{title:"Visibility events",anchor:"events",component:o("d6CH"),html:o("JEiy"),outlet:N},{title:"Configuring defaults",anchor:"config-defaults",component:o("YSuu"),html:o("cfct"),outlet:w},{title:"Outside click",anchor:"outside-click",component:o("VBEp"),html:o("jmbJ"),outlet:B},{title:"Custom triggers",anchor:"triggers-custom",component:o("/F8h"),html:o("8Cki"),outlet:O},{title:"Manual triggering",anchor:"triggers-manual",component:o("Ob2O"),html:o("1Cmi"),description:"<p>This demo shows manipulating popover by <code>show</code>,\n        <code>hide</code> and <code>toggle</code> methods</p>",outlet:I},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property",component:o("r6Tj"),html:o("Dcvg"),description:"<p>You can show/hide popover by switching <code>isOpen</code> property</p>",outlet:y},{title:"Component level styling",anchor:"styling-local",component:o("PHRk"),html:o("TuLa"),outlet:H},{title:"Custom class",anchor:"popover-custom-class",component:o("aYm4"),html:o("qVEX"),outlet:P},{title:"Popover context",anchor:"popover-context",component:o("qzVz"),html:o("r/Fm"),outlet:T}]},{name:"API Reference",anchor:"api-reference",outlet:A.a,content:[{title:"PopoverDirective",anchor:"popover-directive",outlet:M.b},{title:"PopoverConfig",anchor:"popover-config",outlet:M.c}]}],z=function(){return function(){this.name="Popover",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover",this.componentContent=R}}(),j=t.pb({encapsulation:2,styles:[],data:{}});function F(n){return t.Nb(2,[(n()(),t.rb(0,0,null,null,17,"demo-section",[],null,null,null,m.b,m.a)),t.qb(1,49152,null,0,v.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(n()(),t.rb(2,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Lb(-1,null,["Add small overlay content, like those found in iOS, to any element for housing secondary information."])),(n()(),t.rb(4,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Lb(-1,null,["The easiest way to add the popover component to your app (will be added to the root module)"])),(n()(),t.rb(6,0,null,0,9,"pre",[["class","prettyprint lang-bash prettyprinted"]],null,null,null,null,null)),(n()(),t.rb(7,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,["ng add ngx"])),(n()(),t.rb(9,0,null,null,1,"span",[["class","pun"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,["-"])),(n()(),t.rb(11,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,["bootstrap "])),(n()(),t.Lb(-1,null,[" --component "])),(n()(),t.rb(14,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,["popover"])),(n()(),t.rb(16,0,null,0,1,"docs-section",[],null,null,null,d.b,d.a)),t.qb(17,49152,null,0,g.a,[t.q],{content:[0,"content"]},null)],function(n,l){var o=l.component;n(l,1,0,o.name,o.src,o.componentContent),n(l,17,0,o.componentContent)},null)}function J(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"tooltip-section",[],null,null,null,F,j)),t.qb(1,49152,null,0,z,[],null,null)],null,null)}var W=t.nb("tooltip-section",z,J,{},{},[]),Y=o("lqqz"),Z=o("NJnL"),K=t.pb({encapsulation:2,styles:[],data:{}});function G(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","top"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on top"],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{adaptivePosition:[0,"adaptivePosition"],popover:[1,"popover"],popoverTitle:[2,"popoverTitle"],placement:[3,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on top\n"])),(n()(),t.rb(3,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","right"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on right"],["type","button"]],null,null,null,null,null)),t.qb(4,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{adaptivePosition:[0,"adaptivePosition"],popover:[1,"popover"],popoverTitle:[2,"popoverTitle"],placement:[3,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on right\n"]))],function(n,l){n(l,1,0,!1,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on top","top"),n(l,4,0,!1,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on right","right")},null)}function X(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-adaptive-position",[],null,null,null,G,K)),t.qb(1,49152,null,0,f,[],null,null)],null,null)}var _=t.nb("demo-popover-adaptive-position",f,X,{},{},[]),Q=t.pb({encapsulation:2,styles:[],data:{}});function $(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-primary"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},null),(n()(),t.Lb(-1,null,[" Live demo\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},null)}function nn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-basic",[],null,null,null,$,Q)),t.qb(1,49152,null,0,h,[],null,null)],null,null)}var ln=t.nb("demo-popover-basic",h,nn,{},{},[]),on=t.pb({encapsulation:2,styles:[],data:{}});function tn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t.rb(1,16777216,null,null,2,"span",[["popover","Hello there! I was triggered by changing isOpen property"],["triggers",""]],null,null,null,null,null)),t.qb(2,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],triggers:[1,"triggers"],isOpen:[2,"isOpen"]},null),(n()(),t.Lb(-1,null,[" This text has attached popover "])),(n()(),t.rb(4,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,o){var t=!0,e=n.component;return"click"===l&&(t=0!=(e.isOpen=!e.isOpen)&&t),t},null,null)),(n()(),t.Lb(-1,null,[" Toggle\n"]))],function(n,l){n(l,2,0,"Hello there! I was triggered by changing isOpen property","",l.component.isOpen)},null)}function en(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-trigger-by-isopen",[],null,null,null,tn,on)),t.qb(1,49152,null,0,y,[],null,null)],null,null)}var un=t.nb("demo-popover-trigger-by-isopen",y,en,{},{},[]),rn=t.pb({encapsulation:2,styles:[],data:{}});function pn(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-primary"],["containerClass","customClass"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],containerClass:[1,"containerClass"]},null),(n()(),t.Lb(-1,null,[" Custom class demo\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","customClass")},null)}function an(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-class",[],null,null,null,pn,rn)),t.qb(1,49152,null,0,P,[],null,null)],null,null)}var sn=t.nb("demo-popover-class",P,an,{},{},[]),cn=t.pb({encapsulation:2,styles:[],data:{}});function bn(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-primary"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},null),(n()(),t.Lb(-1,null,[" Preconfigured popover\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},null)}function mn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,2,"demo-popover-config",[],null,null,null,bn,cn)),t.Ib(5120,null,C.a,x,[]),t.qb(2,49152,null,0,w,[],null,null)],null,null)}var vn=t.nb("demo-popover-config",w,mn,{},{},[]),dn=t.pb({encapsulation:2,styles:[],data:{}});function gn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,7,"div",[["class","row panel"],["style","position: relative; overflow: hidden;"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,6,"div",[["class","card-block panel-body"]],null,null,null,null,null)),(n()(),t.rb(2,16777216,null,null,2,"button",[["class","btn btn-danger"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(3,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},null),(n()(),t.Lb(-1,null,[" Default popover "])),(n()(),t.rb(5,16777216,null,null,2,"button",[["class","btn btn-success"],["container","body"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(6,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],container:[1,"container"]},null),(n()(),t.Lb(-1,null,[" Popover appended to body "]))],function(n,l){n(l,3,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),n(l,6,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","body")},null)}function fn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-container",[],null,null,null,gn,dn)),t.qb(1,49152,null,0,k,[],null,null)],null,null)}var hn=t.nb("demo-popover-container",k,fn,{},{},[]),yn=t.pb({encapsulation:2,styles:[],data:{}});function Pn(n){return t.Nb(0,[(n()(),t.Lb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.context.message)})}function Cn(n){return t.Nb(0,[(n()(),t.hb(0,[["popTemplate",2]],null,0,null,Pn)),(n()(),t.rb(1,16777216,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,null,null,null,null)),t.qb(2,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverContext:[1,"popoverContext"]},null),(n()(),t.Lb(-1,null,[" Open popover with custom context\n"]))],function(n,l){var o=l.component;n(l,2,0,t.Db(l,0),o.context)},null)}function xn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-context",[],null,null,null,Cn,yn)),t.qb(1,49152,null,0,T,[],null,null)],null,null)}var wn=t.nb("demo-popover-context",T,xn,{},{},[]),kn=t.pb({encapsulation:2,styles:[],data:{}});function Tn(n){return t.Nb(0,[(n()(),t.Lb(0,null,["Just another: ",""]))],null,function(n,l){n(l,0,0,l.component.content)})}function Vn(n){return t.Nb(0,[(n()(),t.hb(0,[["popTemplate",2]],null,0,null,Tn)),(n()(),t.rb(1,16777216,null,null,2,"button",[["class","btn btn-warning"],["popoverTitle","Template ref content inside"],["type","button"]],null,null,null,null,null)),t.qb(2,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"]},null),(n()(),t.Lb(-1,null,[" TemplateRef binding\n"]))],function(n,l){n(l,2,0,t.Db(l,0),"Template ref content inside")},null)}function qn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-custom-content",[],null,null,null,Vn,kn)),t.qb(1,49152,null,0,V,[],null,null)],null,null)}var Dn=t.nb("demo-popover-custom-content",V,qn,{},{},[]),Ln=t.pb({encapsulation:2,styles:[],data:{}});function Nn(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-success"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Dismissible popover"],["triggers","focus"],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],triggers:[2,"triggers"]},null),(n()(),t.Lb(-1,null,[" Dismissible popover\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Dismissible popover","focus")},null)}function Bn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-dismiss",[],null,null,null,Nn,Ln)),t.qb(1,49152,null,0,q,[],null,null)],null,null)}var En=t.nb("demo-popover-dismiss",q,Bn,{},{},[]),Hn=t.pb({encapsulation:2,styles:[],data:{}});function On(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-info"],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"]},null),(n()(),t.Lb(-1,null,[" Simple binding\n"]))],function(n,l){var o=l.component;n(l,1,0,o.content,o.title)},null)}function In(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-dynamic",[],null,null,null,On,Hn)),t.qb(1,49152,null,0,D,[],null,null)],null,null)}var Sn=t.nb("demo-popover-dynamic",D,In,{},{},[]),Un=t.pb({encapsulation:2,styles:[],data:{}});function An(n){return t.Nb(0,[(n()(),t.Lb(-1,null,["Here we go: "])),(n()(),t.rb(1,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,1,0,l.component.html)})}function Mn(n){return t.Nb(0,[(n()(),t.hb(0,[["popTemplate",2]],null,0,null,An)),(n()(),t.rb(1,16777216,null,null,2,"button",[["class","btn btn-success"],["popoverTitle","Dynamic html inside"],["type","button"]],null,null,null,null,null)),t.qb(2,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"]},null),(n()(),t.Lb(-1,null,[" Show me popover with html\n"]))],function(n,l){n(l,2,0,t.Db(l,0),"Dynamic html inside")},null)}function Rn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-dynamic-html",[],null,null,null,Mn,Un)),t.qb(1,49152,null,0,L,[],null,null)],null,null)}var zn=t.nb("demo-popover-dynamic-html",L,Rn,{},{},[]),jn=t.pb({encapsulation:2,styles:[],data:{}});function Fn(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-primary"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,[[null,"onShown"],[null,"onHidden"]],function(n,l,o){var t=!0,e=n.component;return"onShown"===l&&(t=!1!==e.onShown()&&t),"onHidden"===l&&(t=!1!==e.onHidden()&&t),t},null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},{onShown:"onShown",onHidden:"onHidden"}),(n()(),t.Lb(-1,null,[" Live demo\n"])),(n()(),t.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.rb(4,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.rb(5,0,null,null,1,"pre",[["class","card card-block card-header mb-3"]],null,null,null,null,null)),(n()(),t.Lb(6,null,["Event: ",""]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},function(n,l){n(l,6,0,l.component.message)})}function Jn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-events",[],null,null,null,Fn,jn)),t.qb(1,49152,null,0,N,[],null,null)],null,null)}var Wn=t.nb("demo-popover-events",N,Jn,{},{},[]),Yn=t.pb({encapsulation:2,styles:[],data:{}});function Zn(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-primary"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],outsideClick:[1,"outsideClick"]},null),(n()(),t.Lb(-1,null,[" Live demo\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",!0)},null)}function Kn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-outside-click",[],null,null,null,Zn,Yn)),t.qb(1,49152,null,0,B,[],null,null)],null,null)}var Gn=t.nb("demo-popover-outside-click",B,Kn,{},{},[]),Xn=t.pb({encapsulation:2,styles:[],data:{}});function _n(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","top"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on top"],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on top\n"])),(n()(),t.rb(3,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","right"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on right"],["type","button"]],null,null,null,null,null)),t.qb(4,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on right\n"])),(n()(),t.rb(6,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","auto"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover auto"],["type","button"]],null,null,null,null,null)),t.qb(7,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover auto\n"])),(n()(),t.rb(9,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","left"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on left"],["type","button"]],null,null,null,null,null)),t.qb(10,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on left\n"])),(n()(),t.rb(12,16777216,null,null,2,"button",[["class","btn btn-default btn-secondary"],["placement","bottom"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["popoverTitle","Popover on bottom"],["type","button"]],null,null,null,null,null)),t.qb(13,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(n()(),t.Lb(-1,null,[" Popover on bottom\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on top","top"),n(l,4,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on right","right"),n(l,7,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover auto","auto"),n(l,10,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on left","left"),n(l,13,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","Popover on bottom","bottom")},null)}function Qn(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-placement",[],null,null,null,_n,Xn)),t.qb(1,49152,null,0,E,[],null,null)],null,null)}var $n=t.nb("demo-popover-placement",E,Qn,{},{},[]),nl=function(){return function(){}}(),ll=t.pb({encapsulation:2,styles:["\n  .popover {\n    background-color: #7B1FA2;\n    color: #fff;\n  }\n  .popover>.arrow:after {\n    border-top-color: #7B1FA2 !important;\n  }\n"],data:{}});function ol(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-success"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},null),(n()(),t.Lb(-1,null,[" I was globally styled\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},null)}function tl(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-styling-global",[],null,null,null,ol,ll)),t.qb(1,49152,null,0,nl,[],null,null)],null,null)}var el=t.nb("demo-popover-styling-global",nl,tl,{},{},[]),ul=t.pb({encapsulation:0,styles:["[_nghost-%COMP%]     .popover {\n  background-color: #009688;\n  color: #fff;\n}\n[_nghost-%COMP%]     .popover>.arrow:after {\n  border-top-color: #009688;\n}"],data:{}});function rl(n){return t.Nb(0,[(n()(),t.rb(0,16777216,null,null,2,"button",[["class","btn btn-info"],["popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],["type","button"]],null,null,null,null,null)),t.qb(1,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"]},null),(n()(),t.Lb(-1,null,[" I have component level styling\n"]))],function(n,l){n(l,1,0,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")},null)}function pl(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-styling-local",[],null,null,null,rl,ul)),t.qb(1,49152,null,0,H,[],null,null)],null,null)}var al=t.nb("demo-popover-styling-local",H,pl,{},{},[]),sl=t.pb({encapsulation:2,styles:[],data:{}});function il(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,3,"div",[["class","col-md-2"]],null,null,null,null,null)),(n()(),t.rb(2,16777216,null,null,2,"button",[["class","btn btn-info"],["popover","I will hide on blur"],["triggers","mouseenter:mouseleave"],["type","button"]],null,null,null,null,null)),t.qb(3,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],triggers:[1,"triggers"]},null),(n()(),t.Lb(-1,null,[" Hover over me! "])),(n()(),t.rb(5,0,null,null,3,"div",[["class","col-md-2"]],null,null,null,null,null)),(n()(),t.rb(6,16777216,null,null,2,"button",[["class","btn btn-info"],["popover","Double click one more time"],["triggers","dblclick"],["type","button"]],null,null,null,null,null)),t.qb(7,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],triggers:[1,"triggers"]},null),(n()(),t.Lb(-1,null,[" Double click me! "])),(n()(),t.rb(9,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(n()(),t.rb(10,16777216,null,null,1,"input",[["class","form-control"],["placeholder","Show popover on input change"],["popover","I will hide on blur"],["triggers","keypress:focusout"],["type","text"]],null,null,null,null,null)),t.qb(11,212992,null,0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],triggers:[1,"triggers"]},null)],function(n,l){n(l,3,0,"I will hide on blur","mouseenter:mouseleave"),n(l,7,0,"Double click one more time","dblclick"),n(l,11,0,"I will hide on blur","keypress:focusout")},null)}function cl(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-triggers-custom",[],null,null,null,il,sl)),t.qb(1,49152,null,0,O,[],null,null)],null,null)}var bl=t.nb("demo-popover-triggers-custom",O,cl,{},{},[]),ml=t.pb({encapsulation:2,styles:[],data:{}});function vl(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t.rb(1,16777216,null,null,2,"span",[["popover","Hello there! I was triggered manually"],["triggers",""]],null,null,null,null,null)),t.qb(2,212992,[["pop",4]],0,C.c,[C.a,t.k,t.E,t.P,Y.a,Z.a],{popover:[0,"popover"],triggers:[1,"triggers"]},null),(n()(),t.Lb(-1,null,[" This text has attached popover "])),(n()(),t.rb(4,0,null,null,1,"button",[["class","btn btn-success"],["type","button"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==t.Db(n,2).show()&&e),e},null,null)),(n()(),t.Lb(-1,null,[" Show\n"])),(n()(),t.rb(6,0,null,null,1,"button",[["class","btn btn-warning"],["type","button"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==t.Db(n,2).hide()&&e),e},null,null)),(n()(),t.Lb(-1,null,[" Hide\n"])),(n()(),t.rb(8,0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==t.Db(n,2).toggle()&&e),e},null,null)),(n()(),t.Lb(-1,null,[" Toggle\n"]))],function(n,l){n(l,2,0,"Hello there! I was triggered manually","")},null)}function dl(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"demo-popover-triggers-manual",[],null,null,null,vl,ml)),t.qb(1,49152,null,0,I,[],null,null)],null,null)}var gl=t.nb("demo-popover-triggers-manual",I,dl,{},{},[]),fl=o("Ip0R"),hl=o("gIcY"),yl=o("vSOO"),Pl=o("ZYCi"),Cl=o("xkPD"),xl=o("YAQW"),wl=o("1H/a"),kl=o("57AX"),Tl=o("k3/p");o.d(l,"DemoPopoverModuleNgFactory",function(){return Vl});var Vl=t.ob(e,[],function(n){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[u.a,r.a,p.a,a.a,s.a,i.a,c.a,b.a,W,_,ln,un,sn,vn,hn,wn,Dn,En,Sn,zn,Wn,Gn,$n,el,al,bl,gl]],[3,t.j],t.x]),t.Bb(4608,fl.p,fl.o,[t.u,[2,fl.F]]),t.Bb(4608,hl.y,hl.y,[]),t.Bb(4608,yl.a,yl.a,[fl.i,Pl.n]),t.Bb(4608,Cl.c,Cl.c,[Cl.a]),t.Bb(4608,xl.f,xl.f,[]),t.Bb(4608,wl.a,wl.a,[]),t.Bb(4608,C.a,C.a,[]),t.Bb(4608,Z.a,Z.a,[t.z,t.F,t.B]),t.Bb(4608,Y.a,Y.a,[t.j,t.z,t.q,Z.a,t.g]),t.Bb(1073742336,fl.c,fl.c,[]),t.Bb(1073742336,hl.x,hl.x,[]),t.Bb(1073742336,hl.k,hl.k,[]),t.Bb(1073742336,xl.d,xl.d,[]),t.Bb(1073742336,M.d,M.d,[]),t.Bb(1073742336,Pl.r,Pl.r,[[2,Pl.w],[2,Pl.n]]),t.Bb(1073742336,U.b,U.b,[]),t.Bb(1073742336,A.b,A.b,[]),t.Bb(1073742336,S.b,S.b,[]),t.Bb(1073742336,Cl.b,Cl.b,[]),t.Bb(1073742336,kl.a,kl.a,[]),t.Bb(1073742336,Tl.a,Tl.a,[]),t.Bb(1073742336,C.d,C.d,[]),t.Bb(1073742336,e,e,[]),t.Bb(256,Cl.a,{},[]),t.Bb(1024,Pl.l,function(){return[[{path:"",component:z}]]},[])])})},JEiy:function(n,l){n.exports='<button type="button" class="btn btn-primary"\n        (onShown)="onShown()" (onHidden)="onHidden()"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n<br>\n<br>\n<pre class="card card-block card-header mb-3">Event: {{message}}</pre>\n'},KIuu:function(n,l){n.exports='<button type="button" class="btn btn-info"\n        [popover]="content" [popoverTitle]="title">\n  Simple binding\n</button>\n'},NwYC:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoPopoverDismissComponent {}\n"},O9iR:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-container',\n  templateUrl: './container.html'\n})\nexport class DemoPopoverContainerComponent {}\n"},Ob2O:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoPopoverTriggersManualComponent {}\n"},PHRk:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-styling-local',\n  templateUrl: './styling-local.html',\n  /* tslint:disable no-unused-css*/\n  styles: [\n    `\n:host >>> .popover {\n  background-color: #009688;\n  color: #fff;\n}\n:host >>> .popover>.arrow:after {\n  border-top-color: #009688;\n}\n  `\n  ]\n})\nexport class DemoPopoverStylingLocalComponent {}\n"},TuLa:function(n,l){n.exports='<button type="button" class="btn btn-info"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  I have component level styling\n</button>\n'},UZBA:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoPopoverDynamicComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},VBEp:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-outside-click',\n  templateUrl: './outside-click.html'\n})\nexport class DemoPopoverOutsideClickComponent {}\n"},WprW:function(n,l){n.exports='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        [adaptivePosition]="false"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        [adaptivePosition]="false"\n        placement="right">\n  Popover on right\n</button>'},YSuu:function(n,l){n.exports="import { Component } from '@angular/core';\nimport { PopoverConfig } from 'ngx-bootstrap/popover';\n\n// such override allows to keep some initial values\n\nexport function getPopoverConfig(): PopoverConfig {\n  return Object.assign(new PopoverConfig(), {\n    placement: 'right',\n    container: 'body',\n    triggers: 'focus'\n  });\n}\n\n@Component({\n  selector: 'demo-popover-config',\n  templateUrl: './config.html',\n  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]\n})\nexport class DemoPopoverConfigComponent {}\n"},ZoZi:function(n,l){n.exports='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [popover]="popTemplate" popoverTitle="Dynamic html inside">\n  Show me popover with html\n</button>\n'},aYm4:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-class',\n  templateUrl: './class.html'\n})\nexport class DemoPopoverClassComponent {}\n"},cfct:function(n,l){n.exports='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Preconfigured popover\n</button>\n'},d6CH:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-events',\n  templateUrl: './events.html'\n})\nexport class DemoPopoverEventsComponent {\n  message: string;\n\n  onShown(): void {\n    this.message = 'shown';\n  }\n\n  onHidden(): void {\n    this.message = 'hidden';\n  }\n}\n"},jmbJ:function(n,l){n.exports='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [outsideClick]="true">\n  Live demo\n</button>\n\n'},npKD:function(n,l){n.exports='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        placement="right">\n  Popover on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover auto"\n        placement="auto">\n  Popover auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on left"\n        placement="left">\n  Popover on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on bottom"\n        placement="bottom">\n  Popover on bottom\n</button>\n'},qVEX:function(n,l){n.exports='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." containerClass="customClass">\n  Custom class demo\n</button>\n\n'},qzVz:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-context',\n  templateUrl: './popover-context.html'\n})\nexport class DemoPopoverContextComponent {\n  context = {\n    message: 'Hello there!'\n  };\n}\n"},"r/Fm":function(n,l){n.exports='<ng-template #popTemplate let-message="message">{{ message }}</ng-template>\n<button type="button" class="btn btn-primary"\n        [popover]="popTemplate" [popoverContext]="context">\n  Open popover with custom context\n</button>\n'},r6Tj:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-trigger-by-isopen',\n  templateUrl: './trigger-by-isopen-property.html'\n})\nexport class DemoPopoverByIsOpenPropComponent {\n  isOpen = false;\n}\n"},rr6d:function(n,l){n.exports='<ng-template #popTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning"\n        [popover]="popTemplate" popoverTitle="Template ref content inside">\n  TemplateRef binding\n</button>\n'},vImg:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoPopoverDynamicHtmlComponent {\n  html: string = `\n<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>`;\n}\n"},"w+xv":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-popover-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoPopoverPlacementComponent {}\n"},z73j:function(n,l){n.exports='<button type="button" class="btn btn-success"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Dismissible popover"\n        triggers="focus">\n  Dismissible popover\n</button>\n\n'}}]);