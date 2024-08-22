import{A as E,B as P,C as w,D as F,E as L,F as X,G as D,H as g,I as M,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,V as N,W as O,Y as ne,a as k,b as z,c as U,d as J,e as v,f as H,g as _,h as G,i as h,j as T,k as K,l as Q,m as R,n as c,o as f,p as d,q as m,r,s as n,t as p,u as W,v as x,w as C,x as B,y as a,z as u}from"./chunk-TTIKTMVN.js";var y=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.http.get(i).pipe(U(()=>k([])))}searchCountryByAlphaCode(i){let o=`${this.apiUrl}/alpha/${i}`;return this.http.get(o).pipe(z(l=>l.length>0?l[0]:null),U(()=>k(null)))}searchCapital(i){let o=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byCapital={term:i,countries:l}),v(()=>this.saveToLocalStorage()))}searchCountry(i){let o=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byCountries={term:i,countries:l}),v(()=>this.saveToLocalStorage()))}searchRegion(i){let o=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byRegion={region:i,countries:l}),v(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(o){return new(o||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var me=t=>["/countries/by",t];function pe(t,e){t&1&&(r(0,"div",2),a(1,` There's no countries to show
`),n())}function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),a(4),n(),r(5,"td"),p(6,"img",5),n(),r(7,"td"),a(8),n(),r(9,"td"),a(10),n(),r(11,"td"),a(12),w(13,"number"),n(),r(14,"td")(15,"a",6),a(16,"Info"),n()()()),t&2){let s=e.$implicit,i=e.index;c(2),u(i+1),c(2),u(s.flag),c(2),m("src",s.flags.svg,R)("alt",s.name.common),c(2),u(s.name.common),c(2),u(s.capital),c(2),u(F(13,8,s.population)),c(3),m("routerLink",P(10,me,s.cca3))}}function de(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),r(5,"th"),a(6,"Icon"),n(),r(7,"th"),a(8,"Flag"),n(),r(9,"th"),a(10,"Name"),n(),r(11,"th"),a(12,"Capital"),n(),r(13,"th"),a(14,"Population"),n(),p(15,"th"),n()(),r(16,"tbody"),d(17,ue,17,12,"tr",4),n()()),t&2){let s=C();c(17),m("ngForOf",s.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(o,l){if(o&1&&d(0,pe,2,0,"div",1)(1,de,18,1,"ng-template",null,0,L),o&2){let I=B(2);m("ngIf",l.countries.length===0)("ngIfElse",I)}},dependencies:[D,g,ie,M],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var oe=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search by capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Per Capital"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return l.searchByCapital($)}),n()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),d(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),n()()),o&2&&(c(5),m("initialValue",l.initialValue),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[g,N,O,b],encapsulation:2});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this.countriesService.searchCountry(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:10,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search by country",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Per Country"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return l.searchByCountry($)}),n()()(),r(6,"div",0)(7,"div",1),d(8,ye,1,0,"shared-loading-spinner",3),p(9,"countries-table",4),n()()),o&2&&(c(5),m("initialValue",l.initialValue),c(3),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[g,N,O,b],encapsulation:2});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let s=W();r(0,"button",5),x("click",function(){let o=K(s).$implicit,l=C();return Q(l.searchByRegion(o))}),a(1),n()}if(t&2){let s=e.$implicit,i=C();m("ngClass",P(2,ve,i.selectedRegion===s)),c(),E(" ",s," ")}}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(o=>this.countries=o)}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-page"]],decls:9,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Per Region"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,4,"button",2),n()(),r(6,"div",0)(7,"div",3),p(8,"countries-table",4),n()()),o&2&&(c(5),m("ngForOf",l.regions),c(3),m("countries",l.countries))},dependencies:[X,D,b],encapsulation:2});let t=e;return t})();function Se(t,e){t&1&&(r(0,"div",2),a(1," Please wait "),n())}function xe(t,e){if(t&1&&(r(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"h2"),a(5,"Country: "),r(6,"strong"),a(7),n()(),p(8,"hr"),n()(),r(9,"div",3)(10,"div",5)(11,"h3"),a(12,"Flag"),n(),p(13,"img",6),n(),r(14,"div",7)(15,"h3"),a(16,"Information"),n(),r(17,"ul",8)(18,"li",9)(19,"strong"),a(20,"Population:"),n(),a(21),w(22,"number"),n(),r(23,"li",9)(24,"strong"),a(25,"Code:"),n(),a(26),n()()()(),r(27,"div",10)(28,"div",7)(29,"h3"),a(30,"Traductions"),n(),r(31,"div",11)(32,"span",12),a(33),n(),r(34,"span",12),a(35),n(),r(36,"span",12),a(37),n(),r(38,"span",12),a(39),n(),r(40,"span",12),a(41),n(),r(42,"span",12),a(43),n(),r(44,"span",12),a(45),n(),r(46,"span",12),a(47),n(),r(48,"span",12),a(49),n(),r(50,"span",12),a(51),n()()()()()()),t&2){let s=C();c(7),u(s.country.name.common),c(6),m("src",s.country.flags.svg,R)("alt",s.country.name.common),c(8),E(" ",F(22,15,s.country.population)," "),c(5),E(" ",s.country.cca3," "),c(7),u(s.country.translations.ara.common),c(2),u(s.country.translations.bre.common),c(2),u(s.country.translations.ces.common),c(2),u(s.country.translations.cym.common),c(2),u(s.country.translations.deu.common),c(2),u(s.country.translations.est.common),c(2),u(s.country.translations.fin.common),c(2),u(s.country.translations.ita.common),c(2),u(s.country.translations.kor.common),c(2),u(s.country.translations.per.common)}}var ce=(()=>{let e=class e{constructor(i,o,l){this.activatedRoute=i,this.countriesService=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(o){return new(o||e)(f(ee),f(y),f(te))},e.\u0275cmp=h({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,l){if(o&1&&d(0,Se,2,0,"ng-template",null,0,L)(2,xe,52,17,"div",1),o&2){let I=B(1);c(2),m("ngIf",l.country)("ngIfElse",I)}},dependencies:[g,M],encapsulation:2});let t=e;return t})();var be=[{path:"by-capital",component:oe},{path:"by-country",component:re},{path:"by-region",component:ae},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=_({imports:[A.forChild(be),A]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=_({imports:[Y,se,ne]});let t=e;return t})();export{Qe as CountriesModule};
