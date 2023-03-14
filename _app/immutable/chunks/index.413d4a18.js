import{a2 as m}from"./index.cb760050.js";function d(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function l(t){const e=t-1;return e*e*e+1}function g(t,{delay:e=0,duration:o=400,easing:s=m}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:s,css:n=>`opacity: ${n*r}`}}function h(t,{delay:e=0,duration:o=400,easing:s=l,x:r=0,y:n=0,opacity:c=0}={}){const a=getComputedStyle(t),f=+a.opacity,p=a.transform==="none"?"":a.transform,y=f*(1-c);return{delay:e,duration:o,easing:s,css:(u,i)=>`
			transform: ${p} translate(${(1-u)*r}px, ${(1-u)*n}px);
			opacity: ${f-y*i}`}}function k(t,{delay:e=0,duration:o=400,easing:s=l,start:r=0,opacity:n=0}={}){const c=getComputedStyle(t),a=+c.opacity,f=c.transform==="none"?"":c.transform,p=1-r,y=a*(1-n);return{delay:e,duration:o,easing:s,css:(u,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${a-y*i}
		`}}function C(t,{delay:e=0,speed:o,duration:s,easing:r=d}={}){let n=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(n+=parseInt(c.strokeWidth)),s===void 0?o===void 0?s=800:s=n/o:typeof s=="function"&&(s=s(n)),{delay:e,duration:s,easing:r,css:(a,f)=>`
			stroke-dasharray: ${n};
			stroke-dashoffset: ${f*n};
		`}}export{h as a,C as d,g as f,k as s};
