import{W as m,d as p,j as s,Y as d}from"./app-Bb5USZrt.js";import{G as u}from"./Guest-B0jZ6bO4.js";import{T as c}from"./TextInput-pNbli_Ef.js";import{F as f,T as l}from"./OfficeLogo-DcnpuRHv.js";import{B as w}from"./Button-CXpICpvb.js";import"./InputBase--OrV6scw.js";function x(){const{data:r,setData:o,post:t,processing:e,errors:a,reset:n}=m({password:""});return p.useEffect(()=>()=>{n("password")},[]),{data:r,setData:o,submit:i=>{i.preventDefault(),t(route("password.confirm"))},processing:e,errors:a}}function j(){const{data:r,setData:o,submit:t,processing:e,errors:a}=x();return s.jsxs("form",{onSubmit:t,children:[s.jsx(c,{id:"password",type:"password",name:"password",value:r.password,autoComplete:"current-password",leftSectionPointerEvents:"none",label:"Password",onChange:n=>o("password",n.target.value),error:a.password,mt:16}),s.jsx(f,{align:"center",justify:"end",mt:16,children:s.jsx(w,{ms:16,type:"submit",loading:e,children:"Email Password Reset Link"})})]})}function v(){return s.jsxs(u,{children:[s.jsx(d,{title:"Confirm Password"}),s.jsx(l,{mb:16,size:"sm",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsx(j,{})]})}export{v as default};