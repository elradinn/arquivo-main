import{j as t,Y as p}from"./app-DX5MU03v.js";import{Y as n}from"./index-EwrUGoH1.js";import{G as c,c as l}from"./NotificationMenu-Dzh3E4KX.js";import{A as d}from"./Authenticated-DKN5EVNB.js";import{u as h}from"./use-document-properties-De4OFr1Y.js";import{S as u}from"./Stack-BRL2iXOx.js";import{T as a}from"./OfficeLogo-yX_Z-f7h.js";import"./Checkbox-DU1LkiES.js";import"./IconUser-CTKyXeZe.js";import"./InputBase-uyi4xd9j.js";import"./use-uncontrolled-DYsJcA7Q.js";import"./CheckIcon-Sjj7JCC1.js";import"./Popover-BfT3UIz1.js";import"./Button-Bs9lLzaq.js";import"./TextInput-bDdCPN-A.js";import"./get-sorted-breakpoints-zJoPPI7s.js";const x=[{accessor:"name",render:({mime:e,type:r,name:s,review_status:o,approval_status:i,missing_required_metadata:m})=>t.jsxs(c,{align:"center",gap:12,children:[t.jsx(l,{mime:e??"",isFolder:r==="folder",approvalStatus:i,reviewStatus:o,missingRequiredMetadata:m}),t.jsx("span",{children:s})]})},{accessor:"updated_at",title:"Last Modified"}],I=({sharedContents:e})=>{const{openDocument:r}=h();return t.jsxs(d,{children:[t.jsx(p,{title:"Shared with me"}),t.jsxs(u,{px:8,gap:24,py:8,children:[t.jsx(a,{component:"h2",size:"xl",fw:600,color:"gray.8",children:"Shared With Me"}),e.length>0?t.jsx(n,{textSelectionDisabled:!0,columns:x,records:e,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",customRowAttributes:({type:s,id:o})=>({onDoubleClick:i=>{i.button===0&&r(o)}})}):t.jsx(a,{size:"lg",c:"gray.5",children:"No folders have been shared with you."})]})]})};export{I as default};