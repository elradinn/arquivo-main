import{W as u,j as e,Y as d}from"./app-Bk9SN33-.js";import{G as p}from"./Guest-Bj5EuReT.js";import{T as t,F as c}from"./OfficeLogo-DY-VGV-s.js";import{T as x}from"./TextInput-D04x6GiB.js";import{B as w}from"./Button-20aQ045N.js";import"./InputBase-CUim50RR.js";function F({status:s}){const{data:r,setData:a,post:i,processing:l,errors:m}=u({email:""}),n=o=>{o.preventDefault(),i(route("password.email"))};return e.jsxs(p,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx(t,{mb:16,size:"sm",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e.jsx(t,{c:"green",mb:16,size:"sm",fw:500,children:s}),e.jsxs("form",{onSubmit:n,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:r.email,autoComplete:"username",leftSectionPointerEvents:"none",label:"Enter your email",onChange:o=>a("email",o.target.value),error:m.email}),e.jsx(c,{align:"center",justify:"end",mt:16,children:e.jsx(w,{ms:16,type:"submit",loading:l,children:"Email Password Reset Link"})})]})]})}export{F as default};