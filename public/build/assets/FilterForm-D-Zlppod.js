import{j as e,a as o,M as F,y as x}from"./app-Dpvel7_R.js";import{Y as T}from"./index-Dooc8qTP.js";import{u as C}from"./NotificationMenu-iEPQ7dzL.js";import{B as m}from"./Button-TZGTIUZL.js";import{I as O}from"./IconFilter-DganQUgS.js";import{T as w,F as g}from"./OfficeLogo-E4GqBOdi.js";import{S as _}from"./Stack-CoXGQtU9.js";import{S as v}from"./Select-BecAuI0O.js";import{D as f}from"./DatePickerInput-QU38311F.js";const M=({records:i,totalRecords:c,recordsPerPage:n,page:u,onPageChange:a})=>e.jsx(T,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",totalRecords:c,recordsPerPage:n,page:u,onPageChange:a,columns:[{accessor:"date",title:"Date",noWrap:!0},{accessor:"time",title:"Time"},{accessor:"user_name",title:"User"},{accessor:"subject_type",title:"Object Type"},{accessor:"subject_name",title:"Object"},{accessor:"description",title:"Action",width:250}],records:i}),Y=({users:i,objectTypes:c})=>{const[n,{open:u,close:a}]=C(!1),[d,h]=o.useState(null),[p,S]=o.useState(null),[s,j]=o.useState(null),[r,b]=o.useState(null),y=t=>{t.preventDefault();const l={};d&&(l.user_id=d),p&&(l.object_type=p),s&&r&&(l.start_date=s.toISOString().split("T")[0],l.end_date=r.toISOString().split("T")[0]),x.get("/activity-log",l,{replace:!0,preserveState:!0}),a()},D=()=>{h(null),S(null),j(null),b(null),x.get("/activity-log",{},{replace:!0,preserveState:!0}),a()};return e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"subtle",color:"dark.3",leftSection:e.jsx(O,{size:18}),onClick:u,children:"Filter"}),e.jsx(F,{opened:n,onClose:a,title:e.jsx(w,{fw:"bold",size:"lg",children:"Filter Activity Log"}),size:"550",children:e.jsxs("form",{onSubmit:y,children:[e.jsxs(_,{gap:16,children:[e.jsx(v,{label:"User",placeholder:"Select a user",data:i.map(t=>({value:t.id.toString(),label:t.name})),value:d,onChange:h,clearable:!0}),e.jsx(v,{label:"Object Type",placeholder:"Select object type",data:c.map(t=>({value:t.value,label:t.label})),value:p,onChange:S,clearable:!0}),e.jsxs(g,{gap:16,children:[e.jsx(f,{label:"Start Date",placeholder:"Select start date",value:s,onChange:j,maxDate:r||void 0}),e.jsx(f,{label:"End Date",placeholder:"Select end date",value:r,onChange:b,minDate:s||void 0})]})]}),e.jsxs(g,{align:"center",justify:"space-between",mt:16,children:[e.jsx(m,{variant:"outline",color:"gray",onClick:D,children:"Reset Filters"}),e.jsx(m,{ml:12,type:"submit",children:"Apply Filters"})]})]})})]})};export{M as A,Y as F};
