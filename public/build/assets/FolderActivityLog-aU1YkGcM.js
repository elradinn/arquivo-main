import{j as e,Y as l,r as a}from"./app-DlxKuYZb.js";import{A as h,I as d}from"./Authenticated-DheR4sxi.js";import{F as g,A as x}from"./FilterForm-CNqGR95n.js";import{u,a as j}from"./use-search-datatable-C6g5kSM5.js";import{S as f}from"./Stack-L1pcLF8o.js";import{T as S,F as T}from"./OfficeLogo-DbkgrjPw.js";import{T as b}from"./TextInput-RGh6OL0q.js";import"./Button-Dfv1i1zu.js";import"./NotificationMenu-Ce37Wr51.js";import"./IconUser-Une0tFzg.js";import"./Popover-DtfI_0xr.js";import"./use-uncontrolled-CAowUEhF.js";import"./get-sorted-breakpoints-D-XbkWVB.js";import"./index-DTmPIedb.js";import"./Checkbox-BKToS-RO.js";import"./InputBase-Dv4EAKYT.js";import"./CheckIcon-Cer5X6RL.js";import"./Select-nPdKmNfd.js";import"./Combobox-BF7Om7To.js";import"./DatePickerInput-CSXbxaM7.js";function K({activityLogs:t,filters:o}){const{search:s,setSearch:i,handleSearch:m}=u(o.search||"","/activity-log"),{page:p,setPage:c,handlePageChange:n}=j(t.current_page);return e.jsxs(h,{children:[e.jsx(l,{title:"Activity Log"}),e.jsxs(f,{px:8,gap:24,py:8,children:[e.jsx(S,{component:"h2",size:"xl",fw:600,color:"gray.8",children:"Activity Log"}),e.jsxs(T,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(d,{style:{width:a(16),height:a(16)},stroke:1.5}),value:s,onChange:r=>{i(r.target.value),m(r.target.value)}}),e.jsx(g,{users:[],objectTypes:[]})]}),e.jsx(x,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:p,onPageChange:r=>{c(r),n(r,t.links)}})]})]})}export{K as default};
