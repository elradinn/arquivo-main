import{j as e,Y as l,r as a}from"./app-BmzHW2aG.js";import{A as h,I as d}from"./Authenticated-5l6X088p.js";import{F as g,A as x}from"./FilterForm-13NtOSgu.js";import{u,a as j}from"./use-search-datatable-BZpbWxMu.js";import{S as f}from"./Stack-BZ7eBtHq.js";import{T as S,F as T}from"./OfficeLogo-CfOp-pHn.js";import{T as b}from"./TextInput-CdceJqyX.js";import"./Button-BB71hi8N.js";import"./NotificationMenu-C3ygNq3x.js";import"./IconUser-NFy9mVT5.js";import"./Popover-CIouR1lw.js";import"./use-uncontrolled-DGsFr_OH.js";import"./get-sorted-breakpoints-Clcm94Ds.js";import"./index-fZblaT9_.js";import"./Checkbox-CApOXT2W.js";import"./InputBase-BZJKOUp-.js";import"./CheckIcon-Chav3WRF.js";import"./IconFilter-DGOkQqxD.js";import"./Select-BX6eeCxj.js";import"./OptionsDropdown-D_CzVDh5.js";import"./Combobox-D4zBXfDc.js";import"./DatePickerInput-BLoli7aR.js";import"./clamp-DTmYCdls.js";function N({activityLogs:t,filters:o}){const{search:s,setSearch:i,handleSearch:m}=u(o.search||"","/activity-log"),{page:p,setPage:c,handlePageChange:n}=j(t.current_page);return e.jsxs(h,{children:[e.jsx(l,{title:"Activity Log"}),e.jsxs(f,{px:8,gap:24,py:8,children:[e.jsx(S,{component:"h2",size:"xl",fw:600,color:"gray.8",children:"Activity Log"}),e.jsxs(T,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(d,{style:{width:a(16),height:a(16)},stroke:1.5}),value:s,onChange:r=>{i(r.target.value),m(r.target.value)}}),e.jsx(g,{users:[],objectTypes:[]})]}),e.jsx(x,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:p,onPageChange:r=>{c(r),n(r,t.links)}})]})]})}export{N as default};
