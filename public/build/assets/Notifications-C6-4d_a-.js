import{x as z,f as L,u as S,j as e,B as w,d as P,e as A,o as D,J as B,s as C,Y as T}from"./app-DlxKuYZb.js";import{A as k}from"./Authenticated-DheR4sxi.js";import{C as R}from"./Card-C4VEqeLk.js";import{T as a}from"./OfficeLogo-DbkgrjPw.js";import{G as _}from"./NotificationMenu-Ce37Wr51.js";import{S as W}from"./Popover-DtfI_0xr.js";import{B as Y}from"./Badge-B2L46iXP.js";import"./Stack-L1pcLF8o.js";import"./TextInput-RGh6OL0q.js";import"./InputBase-Dv4EAKYT.js";import"./Button-Dfv1i1zu.js";import"./IconUser-Une0tFzg.js";import"./get-sorted-breakpoints-D-XbkWVB.js";import"./use-uncontrolled-CAowUEhF.js";const[G,E]=z("List component was not found in tree");var y={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};const F={},j=L((r,s)=>{const o=S("ListItem",F,r),{classNames:m,className:l,style:d,styles:p,vars:f,icon:h,children:x,mod:u,...g}=o,t=E(),c=h||t.icon,i={classNames:m,styles:p};return e.jsx(w,{...t.getStyles("item",{...i,className:l,style:d}),component:"li",mod:[{"with-icon":!!c,centered:t.center},u],ref:s,...g,children:e.jsxs("div",{...t.getStyles("itemWrapper",i),children:[c&&e.jsx("span",{...t.getStyles("itemIcon",i),children:c}),e.jsx("span",{...t.getStyles("itemLabel",i),children:x})]})})});j.classes=y;j.displayName="@mantine/core/ListItem";const H={type:"unordered"},J=A((r,{size:s,spacing:o})=>({root:{"--list-fz":D(s),"--list-lh":B(s),"--list-spacing":C(o)}})),n=L((r,s)=>{const o=S("List",H,r),{classNames:m,className:l,style:d,styles:p,unstyled:f,vars:h,children:x,type:u,withPadding:g,icon:t,spacing:c,center:i,listStyleType:b,mod:I,...N}=o,v=P({name:"List",classes:y,props:o,className:l,style:d,classNames:m,styles:p,unstyled:f,vars:h,varsResolver:J});return e.jsx(G,{value:{center:i,icon:t,getStyles:v},children:e.jsx(w,{...v("root",{style:{listStyleType:b}}),component:u==="unordered"?"ul":"ol",mod:[{"with-padding":g},I],ref:s,...N,children:x})})});n.classes=y;n.displayName="@mantine/core/List";n.Item=j;const oe=({notifications:r})=>e.jsxs(k,{children:[e.jsx(T,{title:"Notifications"}),e.jsxs(R,{shadow:"sm",padding:"lg",mt:20,mx:20,children:[e.jsx(a,{size:"xl",mb:"md",children:"Your Notifications"}),r.length===0?e.jsx(_,{justify:"center",mt:"md",children:e.jsx(a,{c:"dimmed",children:"You have no new notifications."})}):e.jsx(W,{style:{height:500},children:e.jsx(n,{spacing:"sm",size:"sm",center:!0,children:r.map(s=>e.jsxs(n.Item,{children:[e.jsxs(_,{gap:"xs",mb:"xs",children:[e.jsx(a,{size:"sm",children:s.message}),e.jsx(Y,{color:"blue",variant:"light",children:new Date(s.date).toLocaleDateString()})]}),s.workflow_type&&e.jsxs(a,{size:"sm",c:"gray.7",children:["Workflow Type: ",s.workflow_type]}),s.document_id&&e.jsxs(a,{size:"sm",c:"gray.7",children:["Document ID: ",s.document_id]}),s.document_approval_id&&e.jsxs(a,{size:"sm",c:"gray.7",children:["Approval ID: ",s.document_approval_id]})]},s.id))})})]})]});export{oe as default};
