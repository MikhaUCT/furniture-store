import{S as ae,i as ie,s as oe,k as w,l as E,m as p,h as u,n as d,b as z,F as ne,_ as De,C as Ze,D as ye,E as i,q as R,a as P,y,r as C,c as A,z as J,p as qe,A as K,u as T,g as S,d as N,B as Q,v as Te,f as ze,G as Je,e as ke,a1 as Ke,Z as at,H as it,o as ot,a0 as ct}from"../chunks/index.cb760050.js";import{F as ft}from"../chunks/FFFF.6fb71b4c.js";import{f as he,P as ut}from"../chunks/utils.6bdfee9b.js";import{R as st,A as vt}from"../chunks/Rating.1eeb4c4b.js";import{b as Qe}from"../chunks/paths.18e38e44.js";function Ue(s,e,l){const t=s.slice();return t[1]=e[l],t}function We(s){let e,l;return{c(){e=Ze("svg"),l=Ze("path"),this.h()},l(t){e=ye(t,"svg",{viewBox:!0,class:!0});var r=p(e);l=ye(r,"path",{d:!0}),p(l).forEach(u),r.forEach(u),this.h()},h(){d(l,"d","M49.553 5l11.226 34.549h36.327l-29.39 21.353 11.226 34.549-29.389-21.353-29.389 21.353L31.39 60.902 2 39.549h36.327L49.553 5z"),d(e,"viewBox","0 0 99 100"),d(e,"class","svelte-14lu3qa")},m(t,r){z(t,e,r),i(e,l)},p:ne,d(t){t&&u(e)}}}function ht(s){let e,l=new Array(s[0]),t=[];for(let r=0;r<l.length;r+=1)t[r]=We(Ue(s,l,r));return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var a=p(e);for(let n=0;n<t.length;n+=1)t[n].l(a);a.forEach(u),this.h()},h(){d(e,"class","rating")},m(r,a){z(r,e,a);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(r,[a]){if(a&1){l=new Array(r[0]);let n;for(n=0;n<l.length;n+=1){const f=Ue(r,l,n);t[n]?t[n].p(f,a):(t[n]=We(),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:ne,o:ne,d(r){r&&u(e),De(t,r)}}}function mt(s,e,l){let{rating:t}=e;return s.$$set=r=>{"rating"in r&&l(0,t=r.rating)},[t]}class nt extends ae{constructor(e){super(),ie(this,e,mt,ht,oe,{rating:0})}}function dt(s){let e,l,t,r,a,n,f,c=`${s[2]}%`,F,g,m,o;return a=new nt({props:{rating:1}}),{c(){e=w("div"),l=w("div"),t=R(s[0]),r=P(),y(a.$$.fragment),n=P(),f=w("div"),F=P(),g=w("div"),m=R(s[1]),this.h()},l(v){e=E(v,"DIV",{class:!0});var _=p(e);l=E(_,"DIV",{class:!0});var B=p(l);t=C(B,s[0]),B.forEach(u),r=A(_),J(a.$$.fragment,_),n=A(_),f=E(_,"DIV",{class:!0}),p(f).forEach(u),F=A(_),g=E(_,"DIV",{class:!0});var b=p(g);m=C(b,s[1]),b.forEach(u),_.forEach(u),this.h()},h(){d(l,"class","num svelte-12vca3"),d(f,"class","bar svelte-12vca3"),qe(f,"--width",c),qe(f,"--color",s[3]),d(g,"class","total svelte-12vca3"),d(e,"class","row svelte-12vca3")},m(v,_){z(v,e,_),i(e,l),i(l,t),i(e,r),K(a,e,null),i(e,n),i(e,f),i(e,F),i(e,g),i(g,m),o=!0},p(v,[_]){(!o||_&1)&&T(t,v[0]),_&4&&c!==(c=`${v[2]}%`)&&qe(f,"--width",c),(!o||_&2)&&T(m,v[1])},i(v){o||(S(a.$$.fragment,v),o=!0)},o(v){N(a.$$.fragment,v),o=!1},d(v){v&&u(e),Q(a)}}}function _t(s,e,l){let t,{num:r}=e,{reviews:a}=e,{total:n=0}=e,f=(()=>{switch(r){case 5:return"#00A93B";case 4:return"#96D900";case 3:return"#FAE700";case 2:return"#FFA200";case 1:return"#FF1800"}})();return s.$$set=c=>{"num"in c&&l(0,r=c.num),"reviews"in c&&l(1,a=c.reviews),"total"in c&&l(4,n=c.total)},s.$$.update=()=>{s.$$.dirty&18&&l(2,t=n===0?0:a/n*100)},[r,a,t,f,n]}class gt extends ae{constructor(e){super(),ie(this,e,_t,dt,oe,{num:0,reviews:1,total:4})}}function Xe(s,e,l){const t=s.slice();return t[2]=e[l],t}function Ye(s){let e,l;return e=new gt({props:{num:s[2],reviews:s[1][s[2]],total:s[0].reviews.length}}),{c(){y(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const a={};r&2&&(a.reviews=t[1][t[2]]),r&1&&(a.total=t[0].reviews.length),e.$set(a)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){N(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function pt(s){let e,l,t,r,a=s[0].getRating()+"",n,f,c,F,g,m=s[0].reviews.length+"",o,v,_,B,b;c=new st({props:{rating:s[0].getRating(),reviewCount:s[0].reviews.length,showNumbers:!1}});let U=[5,4,3,2,1],V=[];for(let $=0;$<5;$+=1)V[$]=Ye(Xe(s,U,$));const ce=$=>N(V[$],1,1,()=>{V[$]=null});return{c(){e=w("div"),l=w("div"),t=w("div"),r=w("div"),n=R(a),f=P(),y(c.$$.fragment),F=P(),g=w("span"),o=R(m),v=R(" Reviews"),_=P(),B=w("div");for(let $=0;$<5;$+=1)V[$].c();this.h()},l($){e=E($,"DIV",{class:!0});var k=p(e);l=E(k,"DIV",{class:!0});var H=p(l);t=E(H,"DIV",{class:!0});var I=p(t);r=E(I,"DIV",{class:!0});var W=p(r);n=C(W,a),W.forEach(u),f=A(I),J(c.$$.fragment,I),I.forEach(u),F=A(H),g=E(H,"SPAN",{class:!0});var G=p(g);o=C(G,m),v=C(G," Reviews"),G.forEach(u),H.forEach(u),_=A(k),B=E(k,"DIV",{class:!0});var fe=p(B);for(let Z=0;Z<5;Z+=1)V[Z].l(fe);fe.forEach(u),k.forEach(u),this.h()},h(){d(r,"class","rating svelte-d0658p"),d(t,"class","left svelte-d0658p"),d(g,"class","total-reviews svelte-d0658p"),d(l,"class","totals svelte-d0658p"),d(B,"class","rows"),d(e,"class","review-summary")},m($,k){z($,e,k),i(e,l),i(l,t),i(t,r),i(r,n),i(t,f),K(c,t,null),i(l,F),i(l,g),i(g,o),i(g,v),i(e,_),i(e,B);for(let H=0;H<5;H+=1)V[H].m(B,null);b=!0},p($,[k]){(!b||k&1)&&a!==(a=$[0].getRating()+"")&&T(n,a);const H={};if(k&1&&(H.rating=$[0].getRating()),k&1&&(H.reviewCount=$[0].reviews.length),c.$set(H),(!b||k&1)&&m!==(m=$[0].reviews.length+"")&&T(o,m),k&3){U=[5,4,3,2,1];let I;for(I=0;I<5;I+=1){const W=Xe($,U,I);V[I]?(V[I].p(W,k),S(V[I],1)):(V[I]=Ye(W),V[I].c(),S(V[I],1),V[I].m(B,null))}for(Te(),I=5;I<5;I+=1)ce(I);ze()}},i($){if(!b){S(c.$$.fragment,$);for(let k=0;k<5;k+=1)S(V[k]);b=!0}},o($){N(c.$$.fragment,$),V=V.filter(Boolean);for(let k=0;k<5;k+=1)N(V[k]);b=!1},d($){$&&u(e),Q(c),De(V,$)}}}function $t(s,e,l){let{product:t}=e;const r={5:0,4:0,3:0,2:0,1:0};for(const a of t.reviews)r[a.rating]++;return s.$$set=a=>{"product"in a&&l(0,t=a.product)},[t,r]}class wt extends ae{constructor(e){super(),ie(this,e,$t,pt,oe,{product:0})}}function xe(s){let e=s[0].comment+"",l;return{c(){l=R(e)},l(t){l=C(t,e)},m(t,r){z(t,l,r)},p(t,r){r&1&&e!==(e=t[0].comment+"")&&T(l,e)},d(t){t&&u(l)}}}function Et(s){let e,l,t,r,a,n,f=s[0].username+"",c,F,g;r=new nt({props:{rating:s[0].rating}});let m=s[0].comment&&xe(s);return{c(){e=w("div"),l=w("div"),t=w("div"),y(r.$$.fragment),a=P(),n=w("div"),c=R(f),F=P(),m&&m.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var v=p(e);l=E(v,"DIV",{class:!0});var _=p(l);t=E(_,"DIV",{class:!0});var B=p(t);J(r.$$.fragment,B),B.forEach(u),a=A(_),n=E(_,"DIV",{class:!0});var b=p(n);c=C(b,f),b.forEach(u),_.forEach(u),F=A(v),m&&m.l(v),v.forEach(u),this.h()},h(){d(t,"class","stars svelte-vlilhj"),d(n,"class","name svelte-vlilhj"),d(l,"class","comment-data svelte-vlilhj"),Je(l,"inline",!s[0].comment),d(e,"class","review svelte-vlilhj")},m(o,v){z(o,e,v),i(e,l),i(l,t),K(r,t,null),i(l,a),i(l,n),i(n,c),i(e,F),m&&m.m(e,null),g=!0},p(o,[v]){const _={};v&1&&(_.rating=o[0].rating),r.$set(_),(!g||v&1)&&f!==(f=o[0].username+"")&&T(c,f),(!g||v&1)&&Je(l,"inline",!o[0].comment),o[0].comment?m?m.p(o,v):(m=xe(o),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(o){g||(S(r.$$.fragment,o),g=!0)},o(o){N(r.$$.fragment,o),g=!1},d(o){o&&u(e),Q(r),m&&m.d()}}}function bt(s,e,l){let{review:t}=e;return s.$$set=r=>{"review"in r&&l(0,t=r.review)},[t]}class kt extends ae{constructor(e){super(),ie(this,e,bt,Et,oe,{review:0})}}function et(s,e,l){const t=s.slice();return t[3]=e[l],t}function tt(s){let e,l;return e=new kt({props:{review:s[3]}}),{c(){y(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const a={};r&7&&(a.review=t[3]),e.$set(a)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){N(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Dt(s){let e,l,t=s[2].filter(s[0]).sort(s[1]),r=[];for(let n=0;n<t.length;n+=1)r[n]=tt(et(s,t,n));const a=n=>N(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=ke()},l(n){for(let f=0;f<r.length;f+=1)r[f].l(n);e=ke()},m(n,f){for(let c=0;c<r.length;c+=1)r[c].m(n,f);z(n,e,f),l=!0},p(n,[f]){if(f&7){t=n[2].filter(n[0]).sort(n[1]);let c;for(c=0;c<t.length;c+=1){const F=et(n,t,c);r[c]?(r[c].p(F,f),S(r[c],1)):(r[c]=tt(F),r[c].c(),S(r[c],1),r[c].m(e.parentNode,e))}for(Te(),c=t.length;c<r.length;c+=1)a(c);ze()}},i(n){if(!l){for(let f=0;f<t.length;f+=1)S(r[f]);l=!0}},o(n){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)N(r[f]);l=!1},d(n){De(r,n),n&&u(e)}}}function It(s,e,l){let{filter:t}=e,{comparator:r}=e,{reviews:a}=e;return s.$$set=n=>{"filter"in n&&l(0,t=n.filter),"comparator"in n&&l(1,r=n.comparator),"reviews"in n&&l(2,a=n.reviews)},[t,r,a]}class Vt extends ae{constructor(e){super(),ie(this,e,It,Dt,oe,{filter:0,comparator:1,reviews:2})}}function rt(s,e,l){const t=s.slice();return t[1]=e[l],t}function lt(s){let e,l=s[1]+"",t;return{c(){e=w("p"),t=R(l)},l(r){e=E(r,"P",{});var a=p(e);t=C(a,l),a.forEach(u)},m(r,a){z(r,e,a),i(e,t)},p(r,a){a&1&&l!==(l=r[1]+"")&&T(t,l)},d(r){r&&u(e)}}}function Ft(s){let e,l,t,r=s[0].categories[0]+"",a,n,f,c=s[0].name.toLowerCase()+"",F,g,m,o,v,_,B,b,U,V=s[0].name+"",ce,$,k,H=s[0].name+"",I,W,G,fe,Z,Ie,me=he(s[0].price)+"",$e,Ve,re,Fe,de=he(s[0].price)+"",we,Re,le,_e=he(s[0].stock)+"",Ee,Pe,Ce,Y,Ae,x,se,Se,ee,He,ue,te,M;G=new st({props:{rating:s[0].getRating(),reviewCount:s[0].reviews.length}}),Y=new vt({props:{product:s[0]}});let ve=s[0].description,j=[];for(let h=0;h<ve.length;h+=1)j[h]=lt(rt(s,ve,h));return ee=new wt({props:{product:s[0]}}),te=new Vt({props:{reviews:s[0].reviews,comparator:Rt,filter:Pt}}),{c(){e=w("section"),l=w("div"),t=w("a"),a=R(r),f=R(" > "),F=R(c),g=P(),m=w("div"),o=w("img"),B=P(),b=w("div"),U=w("h2"),ce=R(V),$=P(),k=w("h3"),I=R(H),W=P(),y(G.$$.fragment),fe=P(),Z=w("h3"),Ie=R("R"),$e=R(me),Ve=P(),re=w("h4"),Fe=R("R"),we=R(de),Re=P(),le=w("div"),Ee=R(_e),Pe=R(" In Stock"),Ce=P(),y(Y.$$.fragment),Ae=P(),x=w("div"),se=w("div");for(let h=0;h<j.length;h+=1)j[h].c();Se=P(),y(ee.$$.fragment),He=P(),ue=w("div"),y(te.$$.fragment),this.h()},l(h){e=E(h,"SECTION",{class:!0});var D=p(e);l=E(D,"DIV",{});var O=p(l);t=E(O,"A",{href:!0});var ge=p(t);a=C(ge,r),ge.forEach(u),f=C(O," > "),F=C(O,c),O.forEach(u),g=A(D),m=E(D,"DIV",{class:!0});var X=p(m);o=E(X,"IMG",{src:!0,alt:!0,class:!0}),B=A(X),b=E(X,"DIV",{class:!0});var L=p(b);U=E(L,"H2",{class:!0});var q=p(U);ce=C(q,V),q.forEach(u),$=A(L),k=E(L,"H3",{class:!0});var pe=p(k);I=C(pe,H),pe.forEach(u),W=A(L),J(G.$$.fragment,L),fe=A(L),Z=E(L,"H3",{class:!0});var Be=p(Z);Ie=C(Be,"R"),$e=C(Be,me),Be.forEach(u),Ve=A(L),re=E(L,"H4",{class:!0});var Ne=p(re);Fe=C(Ne,"R"),we=C(Ne,de),Ne.forEach(u),Re=A(L),le=E(L,"DIV",{class:!0});var je=p(le);Ee=C(je,_e),Pe=C(je," In Stock"),je.forEach(u),L.forEach(u),Ce=A(X),J(Y.$$.fragment,X),X.forEach(u),Ae=A(D),x=E(D,"DIV",{class:!0});var be=p(x);se=E(be,"DIV",{class:!0});var Ge=p(se);for(let Le=0;Le<j.length;Le+=1)j[Le].l(Ge);Ge.forEach(u),Se=A(be),J(ee.$$.fragment,be),be.forEach(u),He=A(D),ue=E(D,"DIV",{class:!0});var Oe=p(ue);J(te.$$.fragment,Oe),Oe.forEach(u),D.forEach(u),this.h()},h(){d(t,"href",n=Qe+"/category#"+s[0].categories[0]),Ke(o.src,v=s[0].image)||d(o,"src",v),d(o,"alt",_=s[0].name),d(o,"class","svelte-1ubh5v7"),d(U,"class","hide-at-medium"),d(k,"class","show-at-medium"),d(Z,"class","hide-at-medium"),d(re,"class","show-at-medium"),d(le,"class","stock"),d(b,"class","details"),d(m,"class","hero card revert-grid-at-small svelte-1ubh5v7"),d(se,"class","description svelte-1ubh5v7"),d(x,"class","more card revert-grid-at-small svelte-1ubh5v7"),d(ue,"class","reviews card svelte-1ubh5v7"),d(e,"class","svelte-1ubh5v7")},m(h,D){z(h,e,D),i(e,l),i(l,t),i(t,a),i(l,f),i(l,F),i(e,g),i(e,m),i(m,o),i(m,B),i(m,b),i(b,U),i(U,ce),i(b,$),i(b,k),i(k,I),i(b,W),K(G,b,null),i(b,fe),i(b,Z),i(Z,Ie),i(Z,$e),i(b,Ve),i(b,re),i(re,Fe),i(re,we),i(b,Re),i(b,le),i(le,Ee),i(le,Pe),i(m,Ce),K(Y,m,null),i(e,Ae),i(e,x),i(x,se);for(let O=0;O<j.length;O+=1)j[O].m(se,null);i(x,Se),K(ee,x,null),i(e,He),i(e,ue),K(te,ue,null),M=!0},p(h,[D]){(!M||D&1)&&r!==(r=h[0].categories[0]+"")&&T(a,r),(!M||D&1&&n!==(n=Qe+"/category#"+h[0].categories[0]))&&d(t,"href",n),(!M||D&1)&&c!==(c=h[0].name.toLowerCase()+"")&&T(F,c),(!M||D&1&&!Ke(o.src,v=h[0].image))&&d(o,"src",v),(!M||D&1&&_!==(_=h[0].name))&&d(o,"alt",_),(!M||D&1)&&V!==(V=h[0].name+"")&&T(ce,V),(!M||D&1)&&H!==(H=h[0].name+"")&&T(I,H);const O={};D&1&&(O.rating=h[0].getRating()),D&1&&(O.reviewCount=h[0].reviews.length),G.$set(O),(!M||D&1)&&me!==(me=he(h[0].price)+"")&&T($e,me),(!M||D&1)&&de!==(de=he(h[0].price)+"")&&T(we,de),(!M||D&1)&&_e!==(_e=he(h[0].stock)+"")&&T(Ee,_e);const ge={};if(D&1&&(ge.product=h[0]),Y.$set(ge),D&1){ve=h[0].description;let q;for(q=0;q<ve.length;q+=1){const pe=rt(h,ve,q);j[q]?j[q].p(pe,D):(j[q]=lt(pe),j[q].c(),j[q].m(se,null))}for(;q<j.length;q+=1)j[q].d(1);j.length=ve.length}const X={};D&1&&(X.product=h[0]),ee.$set(X);const L={};D&1&&(L.reviews=h[0].reviews),te.$set(L)},i(h){M||(S(G.$$.fragment,h),S(Y.$$.fragment,h),S(ee.$$.fragment,h),S(te.$$.fragment,h),M=!0)},o(h){N(G.$$.fragment,h),N(Y.$$.fragment,h),N(ee.$$.fragment,h),N(te.$$.fragment,h),M=!1},d(h){h&&u(e),Q(G),Q(Y),De(j,h),Q(ee),Q(te)}}}function Rt(s,e){return s.comment&&!e.comment?-1:!s.comment&&e.comment?1:e.rating-s.rating}function Pt(s){return!!s}function Ct(s,e,l){let{product:t}=e;return s.$$set=r=>{"product"in r&&l(0,t=r.product)},[t]}class At extends ae{constructor(e){super(),ie(this,e,Ct,Ft,oe,{product:0})}}const{document:Me}=ct;function St(s){let e,l;return e=new At({props:{product:s[0]}}),{c(){y(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.product=t[0]),e.$set(a)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){N(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Ht(s){let e,l;return{c(){e=w("h3"),l=R("Product not found")},l(t){e=E(t,"H3",{});var r=p(e);l=C(r,"Product not found"),r.forEach(u)},m(t,r){z(t,e,r),i(e,l)},p:ne,i:ne,o:ne,d(t){t&&u(e)}}}function Bt(s){let e,l,t;return l=new ft({}),{c(){e=w("div"),y(l.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=p(e);J(l.$$.fragment,a),a.forEach(u),this.h()},h(){d(e,"class","loading-container")},m(r,a){z(r,e,a),K(l,e,null),t=!0},p:ne,i(r){t||(S(l.$$.fragment,r),t=!0)},o(r){N(l.$$.fragment,r),t=!1},d(r){r&&u(e),Q(l)}}}function Nt(s){let e,l,t,r,a,n,f,c;Me.title=e="FFFF | "+(s[1]??"Product");const F=[Bt,Ht,St],g=[];function m(o,v){return o[0]===void 0?0:o[0]===null?1:2}return t=m(s),r=g[t]=F[t](s),{c(){l=P(),r.c(),a=ke()},l(o){at("svelte-lsj9hc",Me.head).forEach(u),l=A(o),r.l(o),a=ke()},m(o,v){z(o,l,v),g[t].m(o,v),z(o,a,v),n=!0,f||(c=it(window,"hashchange",s[2]),f=!0)},p(o,[v]){(!n||v&2)&&e!==(e="FFFF | "+(o[1]??"Product"))&&(Me.title=e);let _=t;t=m(o),t===_?g[t].p(o,v):(Te(),N(g[_],1,1,()=>{g[_]=null}),ze(),r=g[t],r?r.p(o,v):(r=g[t]=F[t](o),r.c()),S(r,1),r.m(a.parentNode,a))},i(o){n||(S(r),n=!0)},o(o){N(r),n=!1},d(o){o&&u(l),g[t].d(o),o&&u(a),f=!1,c()}}}function jt(s,e,l){let t,r=null;function a(){const n=document.location.hash.slice(1);l(0,t=ut.getProduct(n)||null),l(1,r=(t==null?void 0:t.name)||null)}return ot(a),[t,r,a]}class Gt extends ae{constructor(e){super(),ie(this,e,jt,Nt,oe,{})}}export{Gt as default};