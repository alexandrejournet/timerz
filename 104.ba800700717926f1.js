"use strict";(self.webpackChunkTimerzz=self.webpackChunkTimerzz||[]).push([[104],{3104:(h,c,t)=>{t.r(c),t.d(c,{TimerHomeComponent:()=>u});var r=t(5861),e=t(1571),_=t(6477),m=t(9358),l=t(4465);let u=(()=>{class i{constructor(n,s,o){this.router=n,this.navbarService=s,this.toastService=o}ngOnInit(){this.navbarService.changeTitle("Sessions")}createTimer(){var n=this;return(0,r.Z)(function*(){yield n.router.navigate(["create"])})()}goToMesSessions(){var n=this;return(0,r.Z)(function*(){yield n.router.navigate(["list"])})()}goToSessionPredefinie(){var n=this;return(0,r.Z)(function*(){n.toastService.showWarn("Oups","Pas encore dev")})()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(_.F0),e.Y36(m.I),e.Y36(l.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-timer-home"]],standalone:!0,features:[e.jDz],decls:7,vars:0,consts:[[1,"buttons"],[1,"btn-home",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return s.createTimer()}),e._uU(2,"Session personnalis\xe9e"),e.qZA(),e.TgZ(3,"div",1),e.NdJ("click",function(){return s.goToSessionPredefinie()}),e._uU(4,"Sessions pr\xe9d\xe9finies"),e.qZA(),e.TgZ(5,"div",1),e.NdJ("click",function(){return s.goToMesSessions()}),e._uU(6,"Mes sessions"),e.qZA()())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{height:50%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}[_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%]{box-shadow:0 0 4px 3px #00000040;border-radius:5px;width:80%;height:20%;display:flex;justify-content:center;align-items:center;font-size:1.3rem;cursor:pointer;transition:.2s;background:white}[_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%]:active{transform:scale(.9)}"]}),i})()}}]);