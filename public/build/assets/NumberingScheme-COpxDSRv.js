import{j as e,b as d,Y as b,r as p}from"./app-BiGyPfMK.js";import{T as j,u as w,A as T,I as P}from"./Authenticated-DvJ3WaI4.js";import{Y as R}from"./index-Bc4Ekuao.js";import{A as E}from"./NotificationMenu-DPqMAYbW.js";import{I as N}from"./IconEdit-CmwohG8C.js";import{u as A,a as C}from"./use-search-datatable-D-mkK1sJ.js";import{U as I}from"./UpdateNumberingSchemeForm-D9jYi4Bu.js";import{S as v}from"./Stack-Bd72W4yI.js";import{T as _,F as k}from"./OfficeLogo-CxWVaEIh.js";import{T as y}from"./TextInput-CDYVz4zc.js";import"./Button-COte_OGg.js";import"./IconUser-BFbH5oMy.js";import"./Popover-Cq5nTSBy.js";import"./use-uncontrolled-Bhuq1nJN.js";import"./get-sorted-breakpoints-DSu901rL.js";import"./Checkbox-ztFnOvbv.js";import"./InputBase-JfCLMB_g.js";import"./CheckIcon-CBl6br3H.js";import"./ScrollArea-CKO-iFfr.js";const F=({records:t,totalRecords:a,recordsPerPage:s,page:i,onPageChange:c,selectedRecords:o,onSelectedRecordsChange:n,onEdit:l})=>e.jsx(R,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"lg",totalRecords:a,recordsPerPage:s,page:i,onPageChange:c,columns:[{accessor:"name",title:"Name",noWrap:!0},{accessor:"description",title:"Description",noWrap:!0},{accessor:"folder_name",title:"Folder",noWrap:!0},{accessor:"actions",title:"Actions",sortable:!1,render:m=>e.jsx(j,{label:"Edit",withArrow:!0,children:e.jsx(E,{onClick:()=>l(m),color:"blue",children:e.jsx(N,{size:16})})})}],records:t,selectedRecords:o,onSelectedRecordsChange:n});function te({numberingSchemes:t,filters:a,itemParent:s}){const[i,c]=d.useState([]),[o,n]=d.useState(null),{search:l,setSearch:m,handleSearch:h}=A(a.search||"","/numbering-scheme"),{page:u,setPage:g,handlePageChange:x}=C(t.current_page),{openModal:f,closeModal:D}=w(),S=r=>{n(r),f("updateNumberingScheme")};return e.jsxs(T,{children:[e.jsx(b,{title:"Numbering Scheme"}),e.jsxs(v,{px:8,gap:24,py:8,children:[e.jsx(_,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Numbering Scheme"}),e.jsx(k,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:e.jsx(y,{w:{md:400},placeholder:"Search",leftSection:e.jsx(P,{style:{width:p(16),height:p(16)},stroke:1.5}),value:l,onChange:r=>{m(r.target.value),h(r.target.value)}})}),e.jsx(F,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:u,onPageChange:r=>{g(r),x(r,t.links)},selectedRecords:i,onSelectedRecordsChange:c,onEdit:S}),o&&e.jsx(I,{itemParent:{...s,numbering_scheme_id:o.id}})]})]})}export{te as default};
