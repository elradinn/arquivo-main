import{x as N,p as h,u as P,j as u,B as b,d as _,b as S,P as w,e as B,m as E}from"./app-BdnCQMoe.js";const[R,A]=N("Card component was not found in tree");var C={root:"m_e615b15f",section:"m_599a2148"};const F={},r=h((t,e)=>{const a=P("CardSection",F,t),{classNames:n,className:c,style:d,styles:i,vars:l,withBorder:p,inheritPadding:m,mod:v,...y}=a,o=A();return u.jsx(b,{ref:e,mod:[{"with-border":p,"inherit-padding":m},v],...o.getStyles("section",{className:c,style:d,styles:i,classNames:n}),...y})});r.classes=C;r.displayName="@mantine/core/CardSection";const V={},$=B((t,{padding:e})=>({root:{"--card-padding":E(e)}})),x=h((t,e)=>{const a=P("Card",V,t),{classNames:n,className:c,style:d,styles:i,unstyled:l,vars:p,children:m,padding:v,...y}=a,o=_({name:"Card",props:a,classes:C,className:c,style:d,classNames:n,styles:i,unstyled:l,vars:p,varsResolver:$}),f=S.Children.toArray(m),j=f.map((s,g)=>typeof s=="object"&&s&&"type"in s&&s.type===r?S.cloneElement(s,{"data-first-section":g===0||void 0,"data-last-section":g===f.length-1||void 0}):s);return u.jsx(R,{value:{getStyles:o},children:u.jsx(w,{ref:e,unstyled:l,...o("root"),...y,children:j})})});x.classes=C;x.displayName="@mantine/core/Card";x.Section=r;export{x as C};
