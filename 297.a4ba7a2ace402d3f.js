"use strict";(self.webpackChunkTimerzz=self.webpackChunkTimerzz||[]).push([[297],{9084:(p,o,n)=>{n.r(o),n.d(o,{RecapComponent:()=>u});var a=n(5861),m=n(8492),c=n(6895),_=n(4816),e=n(1571),l=n(7119),d=n(6477);let u=(()=>{class r extends m.I{constructor(t,i){super(),this.timerService=t,this.router=i,this.timers=[]}get totalTime(){return this.timers&&this.timers.length>0?this.timers.map(t=>t.time).reduce((t,i)=>t+i,0):0}ngOnInit(){this.timers=this.timerService.session.timers,this.timerService.resetTimer()}goHome(){var t=this;return(0,a.Z)(function*(){yield t.router.navigate([""])})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.f),e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-recap"]],standalone:!0,features:[e.qOj,e.jDz],decls:10,vars:3,consts:[[1,"flex-column","h-100","w-100"],[1,"time-container"],[1,"tiny-time"],[1,"flex-fill","justify-content-center","align-items-center","d-flex"],[1,"home-btn",3,"click"]],template:function(t,i){1&t&&(e.ynx(0),e.TgZ(1,"div",0)(2,"div",1),e._uU(3),e.ALo(4,"time"),e.TgZ(5,"span",2),e._uU(6,"TEMPS TOTAL"),e.qZA()(),e.TgZ(7,"div",3)(8,"div",4),e.NdJ("click",function(){return i.goHome()}),e._uU(9,"Retour au menu principal"),e.qZA()()(),e.BQk()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,i.totalTime)," "))},dependencies:[_._,c.ez],styles:['.time-container[_ngcontent-%COMP%]{width:100%;height:70%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:3em}.time-container[_ngcontent-%COMP%]:after{content:"";z-index:-1;position:absolute;width:70vw;height:70vw;border-radius:50%;background:ghostwhite;box-shadow:0 0 4px 3px #00000040}.tiny-time[_ngcontent-%COMP%]{font-size:small;font-weight:700}.home-btn[_ngcontent-%COMP%]{padding:10px;border-radius:5px;box-shadow:0 0 4px 3px #00000040;cursor:pointer;z-index:3}.home-btn[_ngcontent-%COMP%]:active{transform:scale(.9)}']}),r})()}}]);