(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{vfUp:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),r=n("tyNb"),i=n("iq5f"),c=n("fXoL"),a=n("Urz5"),s=n("cplz"),d=n("9nld"),l=n("lewh"),b=n("EODN"),g=n("oOf3");const u=function(t){return["/customers",t,"details"]},p=function(t){return["/customers",t,"edit"]},m=function(t){return["/customers",t,"orders"]};function f(t,e){if(1&t){const t=c.Yb();c.Xb(0,"div",5),c.Xb(1,"div",6),c.Xb(2,"div",7),c.Tb(3,"img",8),c.ic(4,"lowercase"),c.Xb(5,"a",9),c.Ac(6),c.ic(7,"uppercase"),c.Wb(),c.Xb(8,"div",10),c.Xb(9,"a",11),c.Tb(10,"i",12),c.Wb(),c.Xb(11,"a",13),c.fc("click",(function(){c.sc(t);const n=e.$implicit;return c.hc().handleDeleteCustomerClick(n.id)})),c.Tb(12,"i",14),c.Wb(),c.Wb(),c.Wb(),c.Xb(13,"div",15),c.Xb(14,"div",16),c.Xb(15,"div",17),c.Xb(16,"label",18),c.Xb(17,"span",19),c.Ac(18,"Gender :"),c.Wb(),c.Ac(19),c.Wb(),c.Xb(20,"label",18),c.Xb(21,"span",19),c.Ac(22,"City :"),c.Wb(),c.Ac(23),c.Wb(),c.Xb(24,"label",18),c.Xb(25,"span",19),c.Ac(26,"State :"),c.Wb(),c.Ac(27),c.Wb(),c.Wb(),c.Xb(28,"button",20),c.Ac(29," View Orders "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb()}if(2&t){const t=e.$implicit;c.Hb(3),c.nc("src","assets/images/",c.jc(4,9,t.gender),".png",c.uc),c.Hb(2),c.mc("routerLink",c.oc(13,u,t.id)),c.Hb(1),c.Dc(" ",t.firstName," ",c.jc(7,11,t.lastName)," "),c.Hb(3),c.mc("routerLink",c.oc(15,p,t.id)),c.Hb(10),c.Cc(" ",t.gender,""),c.Hb(4),c.Cc(" ",t.city,""),c.Hb(4),c.Cc(" ",t.state.name,""),c.Hb(1),c.mc("routerLink",c.oc(17,m,t.id))}}const h=function(t){return{itemsPerPage:8,currentPage:t}};let C=(()=>{class t{constructor(t){this.modalService=t,this.routeAnimationsElements=b.a,this.customers=[],this.deleteCustomerEvent=new c.q,this.page=1}ngOnInit(){}handleDeleteCustomerClick(t){this.deleteCustomerEvent.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(d.a))},t.\u0275cmp=c.Mb({type:t,selectors:[["ng-cm-customers-card"]],inputs:{customers:"customers"},outputs:{deleteCustomerEvent:"deleteCustomerEvent"},decls:6,vars:7,consts:[[1,"main-container"],[1,"row",3,"ngClass"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-12","pagination","justify-content-center"],["maxSize","5","directionLinks","true","autoHide","true",3,"pageChange"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"card"],[1,"card-header"],[1,"card-avatar",3,"src"],[1,"text-ellipsed",3,"routerLink"],[1,"pull-right"],[3,"routerLink"],["title","Edit",1,"fa","fa-pencil-square-o","edit-icon"],[3,"click"],["title","Delete",1,"fa","fa-trash","delete-icon"],[1,"card-body"],[1,"clearfix"],[1,""],[1,"label-info"],[1,"text-muted"],[1,"btn","btn-outline-border",3,"routerLink"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.yc(2,f,30,19,"div",2),c.ic(3,"paginate"),c.Xb(4,"div",3),c.Xb(5,"pagination-controls",4),c.fc("pageChange",(function(t){return e.page=t})),c.Wb(),c.Wb(),c.Wb(),c.Wb()),2&t&&(c.Hb(1),c.mc("ngClass",e.routeAnimationsElements),c.Hb(1),c.mc("ngForOf",c.kc(3,2,e.customers,c.oc(5,h,e.page))))},directives:[o.l,o.m,g.c,r.f,r.d],pipes:[g.b,o.k,o.r],styles:[".card-container[_ngcontent-%COMP%]{width:85%}.card[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:20px;position:relative;border-width:0;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border-radius:0!important}.card-avatar[_ngcontent-%COMP%]{height:35px;width:35px;border-radius:50%;flex-shrink:0;-o-object-fit:cover;object-fit:cover;float:left}.card-header[_ngcontent-%COMP%]{font-size:14pt;width:100%;color:#31708f;background-color:#d9edf7;border-color:#bce8f1;padding:.15rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:table-column-group;color:rgba(0,0,0,.82);font-size:15px;float:left;margin-left:20px;margin-top:7px}.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none!important}.card-header[_ngcontent-%COMP%]:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-close[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-right:5px}.card-body[_ngcontent-%COMP%]{padding-left:5px}.card-body-left[_ngcontent-%COMP%]{margin-top:-5px}.card-body-right[_ngcontent-%COMP%]{margin-left:20px;margin-top:2px}.card-body-content[_ngcontent-%COMP%]{width:100px}.card-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:10px}.white[_ngcontent-%COMP%], .white[_ngcontent-%COMP%]:hover{color:#fff}label.label-info[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;display:block!important;text-align:left;margin-left:8px;margin-top:-4px;font-size:15px}.text-muted[_ngcontent-%COMP%]{color:#6c757d!important;width:65px!important;display:inline-table}.btn-outline-border[_ngcontent-%COMP%]{float:right;color:#606064!important}.btn-outline-border[_ngcontent-%COMP%]:hover{color:#101010!important}.text-ellipsed[_ngcontent-%COMP%]{max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pull-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#616161;margin-right:-5px;margin-top:6px}.pull-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{line-height:25px}.delete-icon[_ngcontent-%COMP%], .edit-icon[_ngcontent-%COMP%]{cursor:pointer}",".card-container[_ngcontent-%COMP%]{width:85%}.card[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:20px;position:relative;border-width:0;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border-radius:0!important}.card-avatar[_ngcontent-%COMP%]{height:35px;width:35px;border-radius:50%;flex-shrink:0;-o-object-fit:cover;object-fit:cover;float:left}.card-header[_ngcontent-%COMP%]{font-size:14pt;width:100%;color:#31708f;background-color:#d9edf7;border-color:#bce8f1;padding:.15rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:table-column-group;color:rgba(0,0,0,.82);font-size:15px;float:left;margin-left:20px;margin-top:7px}.card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none!important}.card-header[_ngcontent-%COMP%]:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-close[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin-right:5px}.card-body[_ngcontent-%COMP%]{padding-left:5px}.card-body-left[_ngcontent-%COMP%]{margin-top:-5px}.card-body-right[_ngcontent-%COMP%]{margin-left:20px;margin-top:2px}.card-body-content[_ngcontent-%COMP%]{width:100px}.card-image[_ngcontent-%COMP%]{height:50px;width:50px;margin-top:10px}.white[_ngcontent-%COMP%], .white[_ngcontent-%COMP%]:hover{color:#fff}label.label-info[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;display:block!important;text-align:left;margin-left:8px;margin-top:-4px;font-size:15px}.text-muted[_ngcontent-%COMP%]{color:#6c757d!important;width:65px!important;display:inline-table}.btn-outline-border[_ngcontent-%COMP%]{float:right;color:#606064!important}.btn-outline-border[_ngcontent-%COMP%]:hover{color:#101010!important}.text-ellipsed[_ngcontent-%COMP%]{max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pull-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#616161;margin-right:-5px;margin-top:6px}.pull-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{line-height:25px}.delete-icon[_ngcontent-%COMP%], .edit-icon[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0}),t})();var x=n("f6IW");const O=function(t){return["/customers",t,"orders"]},M=function(t){return["/customers",t,"edit"]};function v(t,e){if(1&t){const t=c.Yb();c.Xb(0,"tr",7),c.Xb(1,"td"),c.Ac(2),c.Wb(),c.Xb(3,"td"),c.Ac(4),c.Wb(),c.Xb(5,"td"),c.Ac(6),c.Wb(),c.Xb(7,"td"),c.Ac(8),c.Wb(),c.Xb(9,"td"),c.Ac(10),c.Wb(),c.Xb(11,"td"),c.Xb(12,"span",8),c.Ac(13),c.ic(14,"currency"),c.ic(15,"totalOrder"),c.Wb(),c.Wb(),c.Xb(16,"td"),c.Tb(17,"i",9),c.Tb(18,"i",10),c.Xb(19,"i",11),c.fc("click",(function(){c.sc(t);const n=e.$implicit;return c.hc().handleDeleteCustomerClick(n.id)})),c.Wb(),c.Wb(),c.Wb()}if(2&t){const t=e.$implicit,n=c.hc();c.mc("ngClass",n.routeAnimationsElements),c.Hb(2),c.Bc(t.firstName),c.Hb(2),c.Bc(t.lastName),c.Hb(2),c.Bc(t.address),c.Hb(2),c.Bc(t.city),c.Hb(2),c.Bc(t.state.name),c.Hb(3),c.Bc(c.lc(14,9,c.jc(15,13,t),"USD","symbol")),c.Hb(4),c.mc("routerLink",c.oc(15,O,t.id)),c.Hb(1),c.mc("routerLink",c.oc(17,M,t.id))}}const P=function(t){return{itemsPerPage:8,currentPage:t}};let w=(()=>{class t{constructor(){this.routeAnimationsElements=b.a,this.customers=[],this.deleteCustomerEvent=new c.q,this.page=1}ngOnInit(){}handleDeleteCustomerClick(t){this.deleteCustomerEvent.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Mb({type:t,selectors:[["ng-cm-customers-grid"]],inputs:{customers:"customers"},outputs:{deleteCustomerEvent:"deleteCustomerEvent"},decls:25,vars:6,consts:[[1,"main-container"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped","table-bordered"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"col-12","pagination","justify-content-center"],["maxSize","5","directionLinks","true","autoHide","true",3,"pageChange"],[3,"ngClass"],[1,"badge","badge-info"],["title","View Orders",1,"fa","fa-eye","view-icon",3,"routerLink"],["title","Edit",1,"fa","fa-pencil-square-o","edit-icon",3,"routerLink"],["title","Delete",1,"fa","fa-trash","delete-icon",3,"click"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Xb(2,"div",2),c.Xb(3,"table",3),c.Xb(4,"thead"),c.Xb(5,"tr"),c.Xb(6,"th"),c.Ac(7,"First Name"),c.Wb(),c.Xb(8,"th"),c.Ac(9,"Last Name"),c.Wb(),c.Xb(10,"th"),c.Ac(11,"Address"),c.Wb(),c.Xb(12,"th"),c.Ac(13,"City"),c.Wb(),c.Xb(14,"th"),c.Ac(15,"State"),c.Wb(),c.Xb(16,"th"),c.Ac(17,"Order Total"),c.Wb(),c.Xb(18,"th"),c.Ac(19,"Actions"),c.Wb(),c.Wb(),c.Wb(),c.Xb(20,"tbody"),c.yc(21,v,20,19,"tr",4),c.ic(22,"paginate"),c.Wb(),c.Wb(),c.Wb(),c.Xb(23,"div",5),c.Xb(24,"pagination-controls",6),c.fc("pageChange",(function(t){return e.page=t})),c.Wb(),c.Wb(),c.Wb(),c.Wb()),2&t&&(c.Hb(21),c.mc("ngForOf",c.kc(22,1,e.customers,c.oc(4,P,e.page))))},directives:[o.m,g.c,o.l,r.d],pipes:[g.b,o.d,x.a],styles:[".grid-image[_ngcontent-%COMP%]{height:50px;width:50px}.delete-icon[_ngcontent-%COMP%], .edit-icon[_ngcontent-%COMP%], .view-icon[_ngcontent-%COMP%]{color:#616161;margin:0 10px;cursor:pointer}"],changeDetection:0}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Mb({type:t,selectors:[["ng-cm-loader"]],decls:2,vars:0,consts:[[1,"loader"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Ac(1," Loading ...\n"),c.Wb())},styles:['.loader[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;z-index:1000000;height:2em;width:2em;margin:auto;right:0;bottom:0;font-size:1.2rem;white-space:nowrap;padding-top:0;line-height:1.8;color:#424242}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before{position:fixed;top:0;left:0}.loader[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;background:rgba(0,0,0,.3)}.loader[_ngcontent-%COMP%]:after{content:"";display:block;width:2.3rem;height:.09rem;background:#424242;animation:blinking 1s infinite;-webkit-animation:blinking 1s infinite}@-webkit-keyframes blinking{0%{background-color:#303333;border:2px solid #000}to{background-color:#fff;border:2px solid #fff}}@keyframes blinking{0%{background-color:#303333;border:2px solid #000}to{background-color:#fff;border:2px solid #fff}}']}),t})();function y(t,e){1&t&&c.Tb(0,"ng-cm-loader")}const W=function(t){return{active:t}};let X=(()=>{class t{constructor(t,e,n,o){this.customersService=t,this.dataService=e,this.modalService=n,this.notifService=o,this.subs=new i.SubSink,this.deleteCustomer=t=>{this.customersService.delete(t).subscribe(t=>{this.notifService.openSuccessNotif("Customer Deleted Successfully"),this.dataService.refreshData.next(!0)})},this.loading$=this.customersService.loading$,this.subs.sink=this.dataService.refreshData.asObservable().subscribe(t=>{t&&(this.customers$=this.customersService.getAll())})}ngOnInit(){this.title="Customers",this.filterText="Filter Customers:",this.displayMode="CARD",this.customers$=this.customersService.getAll()}changeDisplayMode(t){this.displayMode=t}onDeleteCustomer(t){this.modalService.show({header:"Delete Customer ?",body:"Would you really like to delete this customer ?",cancelButtonText:"Cancel",OKButtonText:"Delete"}).then(e=>{e&&this.deleteCustomer(t)}).catch(t=>{console.log(t)})}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(a.a),c.Sb(s.a),c.Sb(d.a),c.Sb(l.a))},t.\u0275cmp=c.Mb({type:t,selectors:[["ng-cm-customers"]],decls:21,vars:17,consts:[[1,"cart-container"],[1,"card","card-cascade","narrower"],[1,"view","view-cascade","gradient-card-header","blue-gradient","narrower","mx-4","mb-3","d-flex","justify-content-between","align-items-center"],["type","button",1,"btn","btn-outline-white","btn-rounded","btn-sm","px-2",3,"ngClass","click"],[1,"fa","fa-th-large","mt-0"],[1,"fa","fa-columns","mt-0"],[1,"white-text","mx-3","weight500"],["type","button","routerLink","/customers/#/new-customer",1,"btn","btn-success","full-right"],[1,"fa","fa-plus","mt-0"],[1,"px-4"],[3,"customers","hidden","deleteCustomerEvent"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Xb(0,"div",0),c.Xb(1,"div",1),c.Xb(2,"div",2),c.Xb(3,"div"),c.Xb(4,"button",3),c.fc("click",(function(){return e.changeDisplayMode("CARD")})),c.Tb(5,"i",4),c.Wb(),c.Xb(6,"button",3),c.fc("click",(function(){return e.changeDisplayMode("GRID")})),c.Tb(7,"i",5),c.Wb(),c.Wb(),c.Xb(8,"span",6),c.Ac(9,"Customers"),c.Wb(),c.Xb(10,"div"),c.Xb(11,"button",7),c.Tb(12,"i",8),c.Ac(13," New Customer "),c.Wb(),c.Wb(),c.Wb(),c.Xb(14,"div",9),c.Xb(15,"ng-cm-customers-card",10),c.fc("deleteCustomerEvent",(function(t){return e.onDeleteCustomer(t)})),c.ic(16,"async"),c.Wb(),c.Xb(17,"ng-cm-customers-grid",10),c.fc("deleteCustomerEvent",(function(t){return e.onDeleteCustomer(t)})),c.ic(18,"async"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.yc(19,y,1,0,"ng-cm-loader",11),c.ic(20,"async")),2&t&&(c.Hb(4),c.mc("ngClass",c.oc(13,W,"CARD"===e.displayMode)),c.Hb(2),c.mc("ngClass",c.oc(15,W,"GRID"===e.displayMode)),c.Hb(9),c.mc("customers",c.jc(16,7,e.customers$))("hidden","CARD"!==e.displayMode),c.Hb(2),c.mc("customers",c.jc(18,9,e.customers$))("hidden","GRID"!==e.displayMode),c.Hb(2),c.mc("ngIf",c.jc(20,11,e.loading$)))},directives:[o.l,r.d,C,w,o.n,_],pipes:[o.b],styles:[".main-container[_ngcontent-%COMP%]{padding:5px 15px}.cart-container[_ngcontent-%COMP%]{text-align:center}.cart-info[_ngcontent-%COMP%]{margin-bottom:10px}h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;font-family:Roboto,Noto,sans-serif}  .btn-outline-white{box-shadow:none!important}.btn-rounded[_ngcontent-%COMP%]{width:33px;line-height:16px!important;padding:6px!important}.btn-rounded.active[_ngcontent-%COMP%]{background-color:#eee}.weight500[_ngcontent-%COMP%]{font-weight:500}.full-right[_ngcontent-%COMP%]{margin-right:0!important}"]}),t})();const k=[{path:"",component:X}];let A=(()=>{class t{}return t.components=[X,w,C],t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(k)],r.g]}),t})();var D=n("PCNd");n.d(e,"CustomersModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[o.c,D.a,A]]}),t})()}}]);