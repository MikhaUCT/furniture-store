import{S as X,i as Y,s as Z,k as p,a as q,q as M,y as V,l as v,m as E,c as P,r as N,h,z as j,a1 as y,n as s,b as x,E as l,A as F,u as H,g as J,d as K,B as O}from"./index.cb760050.js";import{f as Q}from"./utils.6bdfee9b.js";import{R as ee,A as te}from"./Rating.1eeb4c4b.js";import{b as W}from"./paths.18e38e44.js";function ae(i){let r,n,a,_,I,z,o,$,C=i[0].name+"",b,S,g,k,R=Q(i[0].price)+"",A,B,w,u,L,D,d,c;return u=new ee({props:{rating:i[0].getRating(),reviewCount:i[0].reviews.length}}),d=new te({props:{product:i[0]}}),{c(){r=p("div"),n=p("a"),a=p("img"),z=q(),o=p("ul"),$=p("li"),b=M(C),S=q(),g=p("li"),k=M("R"),A=M(R),B=q(),w=p("li"),V(u.$$.fragment),D=q(),V(d.$$.fragment),this.h()},l(e){r=v(e,"DIV",{class:!0});var t=E(r);n=v(t,"A",{href:!0,class:!0});var f=E(n);a=v(f,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),z=P(f),o=v(f,"UL",{class:!0});var m=E(o);$=v(m,"LI",{class:!0});var T=E($);b=N(T,C),T.forEach(h),S=P(m),g=v(m,"LI",{class:!0});var G=E(g);k=N(G,"R"),A=N(G,R),G.forEach(h),B=P(m),w=v(m,"LI",{class:!0});var U=E(w);j(u.$$.fragment,U),U.forEach(h),m.forEach(h),f.forEach(h),D=P(t),j(d.$$.fragment,t),t.forEach(h),this.h()},h(){y(a.src,_=i[0].image)||s(a,"src",_),s(a,"alt",I=i[0].name),s(a,"loading","lazy"),s(a,"class","svelte-138demn"),s($,"class","name ellipse-overflow svelte-138demn"),s(g,"class","price svelte-138demn"),s(w,"class","rating svelte-138demn"),s(o,"class","details svelte-138demn"),s(n,"href",L=W+"/product#"+i[0].id),s(n,"class","svelte-138demn"),s(r,"class","product card svelte-138demn")},m(e,t){x(e,r,t),l(r,n),l(n,a),l(n,z),l(n,o),l(o,$),l($,b),l(o,S),l(o,g),l(g,k),l(g,A),l(o,B),l(o,w),F(u,w,null),l(r,D),F(d,r,null),c=!0},p(e,[t]){(!c||t&1&&!y(a.src,_=e[0].image))&&s(a,"src",_),(!c||t&1&&I!==(I=e[0].name))&&s(a,"alt",I),(!c||t&1)&&C!==(C=e[0].name+"")&&H(b,C),(!c||t&1)&&R!==(R=Q(e[0].price)+"")&&H(A,R);const f={};t&1&&(f.rating=e[0].getRating()),t&1&&(f.reviewCount=e[0].reviews.length),u.$set(f),(!c||t&1&&L!==(L=W+"/product#"+e[0].id))&&s(n,"href",L);const m={};t&1&&(m.product=e[0]),d.$set(m)},i(e){c||(J(u.$$.fragment,e),J(d.$$.fragment,e),c=!0)},o(e){K(u.$$.fragment,e),K(d.$$.fragment,e),c=!1},d(e){e&&h(r),O(u),O(d)}}}function se(i,r,n){let{product:a}=r;return i.$$set=_=>{"product"in _&&n(0,a=_.product)},[a]}class oe extends X{constructor(r){super(),Y(this,r,se,ae,Z,{product:0})}}export{oe as P};
