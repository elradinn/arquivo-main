import{x as $,al as N,t as m,a2 as x,j as i,a5 as q,am as B,f as w,u as C,d as P,an as V,B as h}from"./app-CGxvGAM1.js";import{a as F}from"./get-sorted-breakpoints-BejK4YDM.js";import{g as y}from"./get-base-value-JqT_q0U7.js";function M({spacing:e,verticalSpacing:o,cols:t,selector:d}){var r;const a=$(),l=o===void 0?e:o,c=N({"--sg-spacing-x":m(y(e)),"--sg-spacing-y":m(y(l)),"--sg-cols":(r=y(t))==null?void 0:r.toString()}),u=x(a.breakpoints).reduce((s,n)=>(s[n]||(s[n]={}),typeof e=="object"&&e[n]!==void 0&&(s[n]["--sg-spacing-x"]=m(e[n])),typeof l=="object"&&l[n]!==void 0&&(s[n]["--sg-spacing-y"]=m(l[n])),typeof t=="object"&&t[n]!==void 0&&(s[n]["--sg-cols"]=t[n]),s),{}),f=F(x(u),a.breakpoints).filter(s=>x(u[s.value]).length>0).map(s=>({query:`(min-width: ${a.breakpoints[s.value]})`,styles:u[s.value]}));return i.jsx(q,{styles:c,media:f,selector:d})}function S(e){return typeof e=="object"&&e!==null?x(e):[]}function R(e){return e.sort((o,t)=>B(o)-B(t))}function A({spacing:e,verticalSpacing:o,cols:t}){const d=Array.from(new Set([...S(e),...S(o),...S(t)]));return R(d)}function E({spacing:e,verticalSpacing:o,cols:t,selector:d}){var f;const a=o===void 0?e:o,l=N({"--sg-spacing-x":m(y(e)),"--sg-spacing-y":m(y(a)),"--sg-cols":(f=y(t))==null?void 0:f.toString()}),c=A({spacing:e,verticalSpacing:o,cols:t}),u=c.reduce((r,s)=>(r[s]||(r[s]={}),typeof e=="object"&&e[s]!==void 0&&(r[s]["--sg-spacing-x"]=m(e[s])),typeof a=="object"&&a[s]!==void 0&&(r[s]["--sg-spacing-y"]=m(a[s])),typeof t=="object"&&t[s]!==void 0&&(r[s]["--sg-cols"]=t[s]),r),{}),g=c.map(r=>({query:`simple-grid (min-width: ${r})`,styles:u[r]}));return i.jsx(q,{styles:l,container:g,selector:d})}var G={container:"m_925c2d2c",root:"m_2415a157"};const I={cols:1,spacing:"md",type:"media"},_=w((e,o)=>{const t=C("SimpleGrid",I,e),{classNames:d,className:a,style:l,styles:c,unstyled:u,vars:g,cols:f,verticalSpacing:r,spacing:s,type:n,...v}=t,j=P({name:"SimpleGrid",classes:G,props:t,className:a,style:l,classNames:d,styles:c,unstyled:u,vars:g}),p=V();return n==="container"?i.jsxs(i.Fragment,{children:[i.jsx(E,{...t,selector:`.${p}`}),i.jsx("div",{...j("container"),children:i.jsx(h,{ref:o,...j("root",{className:p}),...v})})]}):i.jsxs(i.Fragment,{children:[i.jsx(M,{...t,selector:`.${p}`}),i.jsx(h,{ref:o,...j("root",{className:p}),...v})]})});_.classes=G;_.displayName="@mantine/core/SimpleGrid";export{_ as S};