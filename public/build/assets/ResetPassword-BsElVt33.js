import{W as w,a as u,j as s,Y as f}from"./app-Bk9SN33-.js";import{G as c}from"./Guest-Bj5EuReT.js";import{S as x}from"./Stack-B5GNRcDO.js";import{T as a}from"./TextInput-D04x6GiB.js";import{F as j}from"./OfficeLogo-DY-VGV-s.js";import{B as g}from"./Button-20aQ045N.js";import"./InputBase-CUim50RR.js";function _({token:n,email:i}){const{data:o,setData:r,post:m,processing:p,errors:t,reset:d}=w({token:n,email:i,password:"",password_confirmation:""});u.useEffect(()=>()=>{d("password","password_confirmation")},[]);const l=e=>{e.preventDefault(),m(route("password.store"))};return s.jsxs(c,{children:[s.jsx(f,{title:"Reset Password"}),s.jsxs("form",{onSubmit:l,children:[s.jsxs(x,{gap:16,children:[s.jsx(a,{id:"email",type:"email",name:"email",value:o.email,mt:4,autoComplete:"username",leftSectionPointerEvents:"none",label:"Email",onChange:e=>r("email",e.target.value),error:t.email}),s.jsx(a,{id:"password",type:"password",name:"password",value:o.password,autoComplete:"new-password",leftSectionPointerEvents:"none",label:"Password",onChange:e=>r("password",e.target.value),error:t.password}),s.jsx(a,{id:"password_confirmation",type:"password",name:"password_confirmation",value:o.password_confirmation,autoComplete:"new-password",leftSectionPointerEvents:"none",label:"Confirm Password",onChange:e=>r("password_confirmation",e.target.value),error:t.password})]}),s.jsx(j,{align:"center",justify:"end",mt:16,children:s.jsx(g,{ms:16,type:"submit",loading:p,children:"Reset Password"})})]})]})}export{_ as default};