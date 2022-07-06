"use strict";(self.webpackChunkTimerzz=self.webpackChunkTimerzz||[]).push([[798],{9798:(z,v,i)=>{i.r(v),i.d(v,{LayoutComponent:()=>J});var g=i(6477),c=i(6895),m=i(3868),u=i(5861),p=i(801),f=i(8492),b=i(2722),r=i(7340),t=i(1571),M=i(9358),C=i(7119);function _(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.goNext())}),t._uU(2,"Go !"),t.qZA()()}2&n&&(t.xp6(1),t.Q6J("@enter",void 0))}let T=(()=>{class n extends f.I{constructor(e,o,s,d){super(),this.router=e,this.location=o,this.navbarService=s,this.timerService=d,this.caretLeft=p.EyR,this.title="",this.navbarService.navbarObs.pipe((0,b.R)(this.destroyed)).subscribe(k=>{this.title=k})}get showBtn(){return this.timerService.getSession().timers.length>0}goBack(){var e=this;return(0,u.Z)(function*(){e.timerService.resetTimer(),e.location.back()})()}goNext(){var e=this;return(0,u.Z)(function*(){yield e.router.navigate(["session"])})()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.F0),t.Y36(c.Ye),t.Y36(M.I),t.Y36(C.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],standalone:!0,features:[t.qOj,t.jDz],decls:8,vars:3,consts:[[1,"navbar-custom"],[1,"navbar-btn"],[3,"click"],[3,"icon"],[1,"navbar-title"],["class","navbar-btn-right",4,"ngIf"],[1,"navbar-btn-right"],[1,"btn-next",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return o.goBack()}),t._UZ(3,"fa-icon",3),t.qZA()(),t.TgZ(4,"div",4)(5,"span"),t._uU(6),t.qZA()(),t.YNc(7,_,3,1,"div",5),t.qZA()),2&e&&(t.xp6(3),t.Q6J("icon",o.caretLeft),t.xp6(3),t.Oqu(o.title),t.xp6(1),t.Q6J("ngIf",o.showBtn))},dependencies:[c.ez,c.O5,m.uH,m.BN],styles:["[_nghost-%COMP%]{display:block;height:6%;width:100%;box-shadow:0 2px 4px #00000040;z-index:1;min-height:6%}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;font-size:1.5em;position:relative}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-btn[_ngcontent-%COMP%]{width:15vw;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-btn-right[_ngcontent-%COMP%]{position:absolute;right:.5em;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-btn-right[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]{cursor:pointer;font-size:12pt;padding:.5em;border:1px solid grey;border-radius:10px;transition:.2s}[_nghost-%COMP%]   .navbar-custom[_ngcontent-%COMP%]   .navbar-btn-right[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]:active{transform:scale(.9)}"],data:{animation:[(0,r.X$)("enter",[(0,r.SB)("in",(0,r.oB)({opacity:100})),(0,r.eR)(":enter",[(0,r.oB)({opacity:100}),(0,r.jt)("300ms")]),(0,r.eR)(":leave",[(0,r.jt)("300ms",(0,r.oB)({opacity:0}))])])]}}),n})();var y=i(8723),l=i(433),h=i(9623);let O=(()=>{class n{constructor(e){this.activeModal=e,this.timer=new y.B}ngOnInit(){}addTimer(){this.timer.time?this.activeModal.close(this.timer):this.activeModal.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Kz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dialog-add-timer"]],standalone:!0,features:[t.jDz],decls:13,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["for","time"],["id","time","type","number","placeholder","En secondes",1,"form-control",3,"ngModel","ngModelChange"],["for","name"],["id","name","type","text","placeholder","Facultatif",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer","d-flex","justify-content-center","align-items-center",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Configuration d'un timer"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),t.qZA()(),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Temps * "),t.qZA(),t.TgZ(7,"input",5),t.NdJ("ngModelChange",function(d){return o.timer.time=d}),t.qZA(),t.TgZ(8,"label",6),t._uU(9,"Nom "),t.qZA(),t.TgZ(10,"input",7),t.NdJ("ngModelChange",function(d){return o.timer.name=d}),t.qZA()(),t.TgZ(11,"div",8),t.NdJ("click",function(){return o.addTimer()}),t._uU(12," Ajouter\n"),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngModel",o.timer.time),t.xp6(3),t.Q6J("ngModel",o.timer.name))},dependencies:[c.ez,l.u5,l.Fj,l.wV,l.JJ,l.On],styles:["[_nghost-%COMP%]{height:60vh}[_nghost-%COMP%]   .modal-footer[_ngcontent-%COMP%]{bottom:0;position:absolute;width:100%;background:ghostwhite}"]}),n})();var P=i(8732),Z=i(3387),x=i(4465);let S=(()=>{class n{constructor(e,o,s){this.activeModal=e,this.databaseService=o,this.toastService=s,this.session=new P.z}addTimer(){var e=this;return(0,u.Z)(function*(){e.session.name?(yield e.databaseService.addSession(e.session),e.activeModal.close()):e.toastService.showError("Erreur","Le nom est manquant")})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Kz),t.Y36(Z.k),t.Y36(x.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dialog-save-session"]],standalone:!0,features:[t.jDz],decls:10,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["aria-label","Close","type","button",1,"btn-close",3,"click"],[1,"modal-body"],["for","name"],["id","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer","d-flex","justify-content-center","align-items-center",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Sauvegarde d'une session"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),t.qZA()(),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Nom *"),t.qZA(),t.TgZ(7,"input",5),t.NdJ("ngModelChange",function(d){return o.session.name=d}),t.qZA()(),t.TgZ(8,"div",6),t.NdJ("click",function(){return o.addTimer()}),t._uU(9," Sauvegarder\n"),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngModel",o.session.name))},dependencies:[c.ez,l.u5,l.Fj,l.JJ,l.On],styles:["[_nghost-%COMP%]{height:60vh}[_nghost-%COMP%]   .modal-footer[_ngcontent-%COMP%]{bottom:0;position:absolute;width:100%;background:ghostwhite}"]}),n})(),N=(()=>{class n{constructor(e,o){this.modalService=e,this.timerService=o,this.faAdd=p.r8p,this.faHome=p.J9Y,this.faSave=p.EdJ}ngOnInit(){}openModal(){this.modalService.open(O,{centered:!0}).result.then(o=>{o&&this.timerService.addTimer(o)})}saveModal(){this.modalService.open(S,{centered:!0}).componentInstance.session=this.timerService.getSession()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.FF),t.Y36(C.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toolbar"]],standalone:!0,features:[t.jDz],decls:8,vars:3,consts:[[1,"toolbar"],[1,"btn-add-container"],[1,"btn-add",3,"click"],[3,"icon"],[1,"toolbar-part"],[1,"toolbar-part",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return o.openModal()}),t._UZ(3,"fa-icon",3),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"fa-icon",3),t.qZA(),t.TgZ(6,"div",5),t.NdJ("click",function(){return o.saveModal()}),t._UZ(7,"fa-icon",3),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("icon",o.faAdd),t.xp6(2),t.Q6J("icon",o.faHome),t.xp6(2),t.Q6J("icon",o.faSave))},dependencies:[c.ez,m.uH,m.BN],styles:["[_nghost-%COMP%]{height:10%;width:100%;display:flex;align-items:center;justify-content:center;background:ghostwhite;min-height:10%}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{width:90%;height:80%;box-shadow:0 2px 4px #00000040;border-radius:5px;position:relative;display:flex;flex-direction:row;justify-content:space-between;background:white;z-index:2}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-part[_ngcontent-%COMP%]{width:40%;height:100%;display:flex;align-items:center;justify-content:center;transition:.2s}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-part[_ngcontent-%COMP%]:active{transform:scale(1.5)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .btn-add-container[_ngcontent-%COMP%]{position:absolute;background:ghostwhite;border-radius:50%;left:50%;transform:translate(-50%,-50%);height:5em;width:5em;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .btn-add-container[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]{width:70%;height:70%;border-radius:50%;box-shadow:0 0 4px 3px #00000040;display:flex;align-items:center;justify-content:center;transition:.2s;background:white;z-index:2}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   .btn-add-container[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:active{transform:scale(.9)}"]}),n})();function w(n,a){1&n&&t._UZ(0,"app-navbar")}function A(n,a){1&n&&t._UZ(0,"app-toolbar")}let J=(()=>{class n extends f.I{constructor(e){super(),this.activatedRoute=e,this.showToolbar=!0,this.showNavbar=!0}ngOnInit(){this.activatedRoute.data.pipe((0,b.R)(this.destroyed)).subscribe(e=>{void 0!==e.showToolbar&&(this.showToolbar=e.showToolbar),void 0!==e.showNavbar&&(this.showNavbar=e.showNavbar)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],standalone:!0,features:[t.qOj,t.jDz],decls:4,vars:2,consts:[[4,"ngIf"],[1,"content"]],template:function(e,o){1&e&&(t.YNc(0,w,1,0,"app-navbar",0),t.TgZ(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.YNc(3,A,1,0,"app-toolbar",0)),2&e&&(t.Q6J("ngIf",o.showNavbar),t.xp6(3),t.Q6J("ngIf",o.showToolbar))},dependencies:[c.ez,c.O5,g.Bz,g.lC,m.uH,T,N],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{flex:1 1 auto;background:ghostwhite;overflow:scroll}"]}),n})()}}]);