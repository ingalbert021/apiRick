(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{KAtR:function(t,c,e){"use strict";e.d(c,"a",(function(){return u}));var n=e("IzEk"),b=e("fXoL"),r=e("tyNb"),i=e("Avux"),a=e("ofXK");const o=function(t){return["/characters-details",t]};function s(t,c){if(1&t&&(b.Gb(0,"div",2),b.Gb(1,"div",3),b.Gb(2,"div",4),b.Gb(3,"div",5),b.Gb(4,"a",6),b.Eb(5,"img",7),b.Fb(),b.Fb(),b.Gb(6,"div",8),b.Gb(7,"div",9),b.Gb(8,"a",10),b.Gb(9,"h2"),b.bc(10),b.Pb(11,"slice"),b.Fb(),b.Fb(),b.Gb(12,"h4",11),b.bc(13),b.Fb(),b.Gb(14,"small",11),b.bc(15),b.Pb(16,"date"),b.Fb(),b.Fb(),b.Fb(),b.Fb(),b.Fb(),b.Fb()),2&t){const t=c.ngIf;b.ub(4),b.Sb("routerLink",b.Tb(13,o,t.id)),b.ub(1),b.Sb("src",t.image,b.Yb)("alt",t.name),b.ub(3),b.Sb("routerLink",b.Tb(15,o,t.id)),b.ub(2),b.cc(b.Rb(11,7,t.name,0,15)),b.ub(3),b.cc(t.gender),b.ub(2),b.dc(" ",b.Qb(16,11,t.created),"")}}let u=(()=>{class t{constructor(t,c,e){this.route=t,this.characterSvc=c,this.location=e}ngOnInit(){this.route.params.pipe(Object(n.a)(1)).subscribe(t=>{this.character$=this.characterSvc.getDetails(t.id)})}onGoBack(){this.location.back()}}return t.\u0275fac=function(c){return new(c||t)(b.Db(r.a),b.Db(i.a),b.Db(a.h))},t.\u0275cmp=b.xb({type:t,selectors:[["app-characters-details"]],decls:4,vars:3,consts:[["class","row justify-content-center mt-3",4,"ngIf"],[1,"btn","btn-primary","btn-lg","mt-3",3,"click"],[1,"row","justify-content-center","mt-3"],[1,"col-xs-12","col-sm-6","col-md-4","justify-content-center"],[1,"card"],[1,"image"],[3,"routerLink"],[1,"card-img-top",3,"src","alt"],[1,"card-inner"],[1,"header","m-1"],[1,"text-decoration-none",3,"routerLink"],[1,"text-muted"]],template:function(t,c){1&t&&(b.ac(0,s,17,17,"div",0),b.Pb(1,"async"),b.Gb(2,"button",1),b.Mb("click",(function(){return c.onGoBack()})),b.bc(3,"\nBack\n"),b.Fb()),2&t&&b.Sb("ngIf",b.Qb(1,1,c.character$))},directives:[a.l,r.d],pipes:[a.b,a.o,a.e],styles:[""]}),t})()}}]);