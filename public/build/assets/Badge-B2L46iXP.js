import{p as j,u as R,d as S,j as i,B as C,e as _,m as b,g as N,F as k}from"./app-DlxKuYZb.js";var m={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const w={},F=_((s,{radius:d,color:e,gradient:l,variant:o,size:a,autoContrast:n})=>{const t=s.variantColorResolver({color:e||s.primaryColor,theme:s,gradient:l,variant:o||"filled",autoContrast:n});return{root:{"--badge-height":b(a,"badge-height"),"--badge-padding-x":b(a,"badge-padding-x"),"--badge-fz":b(a,"badge-fz"),"--badge-radius":d===void 0?void 0:N(d),"--badge-bg":e||o?t.background:void 0,"--badge-color":e||o?t.color:void 0,"--badge-bd":e||o?t.border:void 0,"--badge-dot-color":o==="dot"?k(e,s):void 0}}}),h=j((s,d)=>{const e=R("Badge",w,s),{classNames:l,className:o,style:a,styles:n,unstyled:t,vars:u,radius:P,color:z,gradient:E,leftSection:c,rightSection:g,children:f,variant:p,fullWidth:v,autoContrast:T,circle:x,mod:y,...B}=e,r=S({name:"Badge",props:e,classes:m,className:o,style:a,classNames:l,styles:n,unstyled:t,vars:u,varsResolver:F});return i.jsxs(C,{variant:p,mod:[{block:v,circle:x,"with-right-section":!!g,"with-left-section":!!c},y],...r("root",{variant:p}),ref:d,...B,children:[c&&i.jsx("span",{...r("section"),"data-position":"left",children:c}),i.jsx("span",{...r("label"),children:f}),g&&i.jsx("span",{...r("section"),"data-position":"right",children:g})]})});h.classes=m;h.displayName="@mantine/core/Badge";export{h as B};
