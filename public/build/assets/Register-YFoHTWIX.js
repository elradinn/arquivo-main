import{W as p,a as d,j as e,Y as u,c}from"./app-DX5MU03v.js";import{G as f}from"./Guest-CP6AooAC.js";import{S as w}from"./Stack-BRL2iXOx.js";import{T as s}from"./TextInput-bDdCPN-A.js";import{F as g}from"./OfficeLogo-yX_Z-f7h.js";import{A as x}from"./Anchor-YiUnFwkW.js";import{B as j}from"./Button-Bs9lLzaq.js";import"./InputBase-uyi4xd9j.js";function _(){const{data:t,setData:a,post:n,processing:i,errors:o,reset:m}=p({name:"",email:"",password:"",password_confirmation:""});d.useEffect(()=>()=>{m("password","password_confirmation")},[]);const l=r=>{r.preventDefault(),n(route("register"))};return e.jsxs(f,{children:[e.jsx(u,{title:"Register"}),e.jsxs("form",{onSubmit:l,children:[e.jsxs(w,{gap:16,children:[e.jsx(s,{id:"name",type:"name",name:"name",value:t.name,autoComplete:"name",leftSectionPointerEvents:"none",label:"Name",onChange:r=>a("name",r.target.value),error:o.name,required:!0}),e.jsx(s,{id:"email",type:"email",name:"email",value:t.email,mt:4,autoComplete:"username",leftSectionPointerEvents:"none",label:"Email",onChange:r=>a("email",r.target.value),error:o.email,required:!0}),e.jsx(s,{id:"password",type:"password",name:"password",value:t.password,autoComplete:"new-password",leftSectionPointerEvents:"none",label:"Password",onChange:r=>a("password",r.target.value),error:o.password,required:!0}),e.jsx(s,{id:"password_confirmation",type:"password",name:"password_confirmation",value:t.password_confirmation,autoComplete:"new-password",leftSectionPointerEvents:"none",label:"Confirm Password",onChange:r=>a("password_confirmation",r.target.value),error:o.password,required:!0})]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(x,{component:c,href:route("login"),size:"sm",children:"Already registered?"}),e.jsx(j,{ml:16,type:"submit",loading:i,children:"Register"})]})]})]})}export{_ as default};