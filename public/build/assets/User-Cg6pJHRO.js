import{W as j,n as f,j as e,M as v,b as x,B as W,Y as B,r as U}from"./app-BiGyPfMK.js";import{a as N,A as Y,I as G,b as M}from"./Authenticated-DvJ3WaI4.js";import{T as h,F as g}from"./OfficeLogo-CxWVaEIh.js";import{S as _}from"./Stack-Bd72W4yI.js";import{T as m}from"./TextInput-CDYVz4zc.js";import{S as k}from"./Select-cTTgXoF1.js";import{B as u}from"./Button-COte_OGg.js";import{Y as H}from"./index-Bc4Ekuao.js";import{G as L,A as C,u as w}from"./NotificationMenu-DPqMAYbW.js";import{I as q}from"./IconEdit-CmwohG8C.js";import{u as J,a as K}from"./use-search-datatable-D-mkK1sJ.js";import"./IconUser-BFbH5oMy.js";import"./Popover-Cq5nTSBy.js";import"./use-uncontrolled-Bhuq1nJN.js";import"./get-sorted-breakpoints-DSu901rL.js";import"./InputBase-JfCLMB_g.js";import"./Combobox-CZ-n87Pa.js";import"./CheckIcon-CBl6br3H.js";import"./ScrollArea-CKO-iFfr.js";import"./Checkbox-ztFnOvbv.js";function Q(){const{data:o,setData:t,post:s,processing:r,errors:n,reset:l}=j({name:"",email:"",password:"",password_confirmation:"",workflow_role:"",office_position:""});return{data:o,setData:t,submit:c=>{c.preventDefault(),s(route("users.register"),{onSuccess:()=>{f.show({message:"New user added successfully",color:"green"}),l()},onError:()=>{f.show({message:"Failed to add user",color:"red"})}})},processing:r,errors:n}}const V=({isOpened:o,close:t})=>{const{data:s,setData:r,submit:n,processing:l,errors:i}=Q(),c=()=>{t()};return e.jsx(v,{opened:o,onClose:c,title:e.jsx(h,{size:"lg",children:"Add User"}),size:550,children:e.jsxs("form",{onSubmit:n,children:[e.jsxs(_,{gap:16,children:[e.jsx(m,{id:"name",type:"text",name:"name",value:s.name,label:"Name",onChange:a=>r("name",a.target.value),error:i.name}),e.jsx(m,{id:"email",type:"email",name:"email",value:s.email,label:"Email",onChange:a=>r("email",a.target.value),error:i.email}),e.jsx(m,{id:"password",type:"password",name:"password",value:s.password,label:"Password",onChange:a=>r("password",a.target.value),error:i.password}),e.jsx(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,label:"Confirm Password",onChange:a=>r("password_confirmation",a.target.value),error:i.password_confirmation}),e.jsx(m,{id:"office_position",type:"text",name:"office_position",value:s.office_position,label:"Office Position",onChange:a=>r("office_position",a.target.value),error:i.office_position}),e.jsx(k,{id:"workflow_role",type:"text",name:"workflow_role",label:"Workflow Role",value:s.workflow_role,placeholder:"Pick value",data:["Reviewer","Approver"],onChange:(a,d)=>r("workflow_role",d.value)})]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(u,{variant:"outline",onClick:c,children:"Cancel"}),e.jsx(u,{ml:12,type:"submit",loading:l,children:"Save"})]})]})})};function X({user:o,close:t}){const{data:s,setData:r,put:n,processing:l,errors:i,reset:c}=j({office_position:"",workflow_role:""});return x.useEffect(()=>{o&&r({workflow_role:o.workflow_role,office_position:o.office_position})},[o]),{data:s,setData:r,submit:d=>{d.preventDefault(),o&&n(route("users.update",o.id),{onSuccess:()=>{f.show({message:"User updated successfully",color:"green"}),t(),c()},onError:b=>{f.show({message:"Failed to update user",color:"red"})}})},processing:l,errors:i}}const Z=({isOpened:o,close:t,user:s})=>{const{data:r,setData:n,submit:l,processing:i,errors:c}=X({user:s,close:t});return e.jsx(v,{opened:o,onClose:t,title:e.jsx(h,{size:"lg",children:"Edit User"}),size:550,children:e.jsxs("form",{onSubmit:l,children:[e.jsxs(_,{gap:16,children:[e.jsx(m,{id:"office_position",type:"text",name:"office_position",value:r.office_position,label:"Office Position",onChange:a=>n("office_position",a.target.value),error:c.office_position}),e.jsx(k,{id:"workflow_role",type:"text",name:"workflow_role",label:"Workflow Role",value:r.workflow_role,placeholder:"Pick value",data:["reviewer","approver"],onChange:(a,d)=>n("workflow_role",d.value)})]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(u,{variant:"outline",onClick:t,children:"Cancel"}),e.jsx(u,{ml:12,type:"submit",loading:i,children:"Save"})]})]})})};function $({user:o,close:t}){const{delete:s,processing:r,reset:n}=j();return{submit:i=>{i.preventDefault(),o&&s(route("users.delete",o==null?void 0:o.id),{onSuccess:()=>{f.show({message:"User deleted successfully",color:"red"}),t(),n()},onError:()=>{f.show({message:"Failed to delete user",color:"red"})}})},processing:r}}const ee=({isOpened:o,close:t,user:s})=>{const{submit:r,processing:n}=$({user:s,close:t});return e.jsx(v,{opened:o,onClose:t,title:e.jsx(h,{size:"lg",children:"Delete User"}),size:550,children:e.jsxs("form",{onSubmit:r,children:[e.jsxs(h,{c:"dimmed",mt:4,size:"sm",children:['Are you sure you want to delete the user "',s==null?void 0:s.name,'"? This action cannot be undone.']}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(u,{variant:"outline",onClick:t,children:"Cancel"}),e.jsx(u,{ml:12,type:"submit",loading:n,color:"red",children:"Confirm Delete"})]})]})})},oe=({users:o,total:t,perPage:s,page:r,onPageChange:n,onEdit:l,onDelete:i,selectedRecords:c,onSelectedRecordsChange:a})=>e.jsx(H,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"lg",totalRecords:t,recordsPerPage:s,page:r,onPageChange:n,columns:[{accessor:"name",noWrap:!0},{accessor:"email",noWrap:!0},{accessor:"office_position",noWrap:!0},{accessor:"workflow_role",title:"Workflow Role"},{accessor:"actions",title:e.jsx(W,{mr:6,children:"Actions"}),textAlign:"right",render:d=>e.jsxs(L,{gap:8,justify:"right",wrap:"nowrap",children:[e.jsx(C,{size:"sm",variant:"subtle",color:"gray",onClick:()=>l(d),children:e.jsx(q,{size:20})}),e.jsx(C,{size:"sm",variant:"subtle",color:"red",onClick:()=>i(d),children:e.jsx(N,{size:20})})]})}],records:o,selectedRecords:c,onSelectedRecordsChange:a});function be({users:o,filters:t}){const[s,r]=x.useState([]),[n,l]=x.useState(),{search:i,setSearch:c,handleSearch:a}=J(t.search||"","/users"),{page:d,setPage:b,handlePageChange:y}=K(o.current_page),[S,{open:D,close:P}]=w(!1),[A,{open:z,close:E}]=w(!1),[R,{open:T,close:O}]=w(!1),F=p=>{l(p),z()},I=p=>{l(p),T()};return e.jsxs(Y,{children:[e.jsx(B,{title:"User"}),e.jsxs(_,{px:8,gap:24,py:8,children:[e.jsx(h,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"User"}),e.jsxs(g,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(m,{w:{md:400},placeholder:"Search",leftSection:e.jsx(G,{style:{width:U(16),height:U(16)},stroke:1.5}),value:i,onChange:p=>{c(p.target.value),a(p.target.value)}}),e.jsx(u,{leftSection:e.jsx(M,{size:14}),onClick:D,children:"Add New User"})]}),e.jsx(oe,{users:o.data,total:o.total,perPage:o.per_page,page:d,onPageChange:p=>{b(p),y(p,o.links)},onEdit:F,onDelete:I,selectedRecords:s,onSelectedRecordsChange:r})]}),e.jsx(V,{isOpened:S,close:P}),e.jsx(Z,{isOpened:A,close:E,user:n}),e.jsx(ee,{isOpened:R,close:O,user:n})]})}export{be as default};
