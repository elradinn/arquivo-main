import{j as e,b as d,Y as b,r as p}from"./app-DlxKuYZb.js";import{T as j,u as w,A as T,I as P}from"./Authenticated-DheR4sxi.js";import{Y as R}from"./index-DTmPIedb.js";import{A as E}from"./NotificationMenu-Ce37Wr51.js";import{I as N}from"./IconEdit-DOimYMpz.js";import{u as A,a as C}from"./use-search-datatable-C6g5kSM5.js";import{U as I}from"./UpdateNumberingSchemeForm-DtmLYo1V.js";import{S as v}from"./Stack-L1pcLF8o.js";import{T as _,F as k}from"./OfficeLogo-DbkgrjPw.js";import{T as y}from"./TextInput-RGh6OL0q.js";import"./Button-Dfv1i1zu.js";import"./IconUser-Une0tFzg.js";import"./Popover-DtfI_0xr.js";import"./use-uncontrolled-CAowUEhF.js";import"./get-sorted-breakpoints-D-XbkWVB.js";import"./Checkbox-BKToS-RO.js";import"./InputBase-Dv4EAKYT.js";import"./CheckIcon-Cer5X6RL.js";const F=({records:t,totalRecords:o,recordsPerPage:s,page:i,onPageChange:c,selectedRecords:a,onSelectedRecordsChange:n,onEdit:l})=>e.jsx(R,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"lg",totalRecords:o,recordsPerPage:s,page:i,onPageChange:c,columns:[{accessor:"name",title:"Name",noWrap:!0},{accessor:"description",title:"Description",noWrap:!0},{accessor:"folder_name",title:"Folder",noWrap:!0},{accessor:"actions",title:"Actions",sortable:!1,render:m=>e.jsx(j,{label:"Edit",withArrow:!0,children:e.jsx(E,{onClick:()=>l(m),color:"blue",children:e.jsx(N,{size:16})})})}],records:t,selectedRecords:a,onSelectedRecordsChange:n});function ee({numberingSchemes:t,filters:o,itemParent:s}){const[i,c]=d.useState([]),[a,n]=d.useState(null),{search:l,setSearch:m,handleSearch:h}=A(o.search||"","/numbering-scheme"),{page:u,setPage:g,handlePageChange:x}=C(t.current_page),{openModal:f,closeModal:D}=w(),S=r=>{n(r),f("updateNumberingScheme")};return e.jsxs(T,{children:[e.jsx(b,{title:"Numbering Scheme"}),e.jsxs(v,{px:8,gap:24,py:8,children:[e.jsx(_,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Numbering Scheme"}),e.jsx(k,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:e.jsx(y,{w:{md:400},placeholder:"Search",leftSection:e.jsx(P,{style:{width:p(16),height:p(16)},stroke:1.5}),value:l,onChange:r=>{m(r.target.value),h(r.target.value)}})}),e.jsx(F,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:u,onPageChange:r=>{g(r),x(r,t.links)},selectedRecords:i,onSelectedRecordsChange:c,onEdit:S}),a&&e.jsx(I,{itemParent:{...s,numbering_scheme_id:a.id}})]})]})}export{ee as default};
