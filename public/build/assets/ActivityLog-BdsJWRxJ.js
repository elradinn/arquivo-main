import{j as e,Y as g,r as a}from"./app-Bk9SN33-.js";import{A as d,I as x}from"./Authenticated-y39mn3Vn.js";import{F as u,A as j}from"./FilterForm-DB_KS7pJ.js";import{u as f,a as S}from"./use-search-datatable-BjVvpPZK.js";import{S as A}from"./Stack-B5GNRcDO.js";import{T as P,F as T}from"./OfficeLogo-DY-VGV-s.js";import{T as b}from"./TextInput-D04x6GiB.js";import"./Button-20aQ045N.js";import"./NotificationMenu-Cm-tLHe_.js";import"./IconUser-DVZLtEGY.js";import"./Popover-CIrq87JS.js";import"./use-uncontrolled-CN17PIUb.js";import"./get-sorted-breakpoints-B9_vwfNQ.js";import"./index-CnHzwFOm.js";import"./Checkbox-DL-UO5JM.js";import"./InputBase-CUim50RR.js";import"./CheckIcon-DeHnZMHJ.js";import"./IconFilter-DJIVNoIp.js";import"./Select-C25dQjYL.js";import"./OptionsDropdown-Bg3dG6CK.js";import"./Combobox-uH_AXCg0.js";import"./DatePickerInput-CqlqaXzD.js";import"./clamp-DTmYCdls.js";const Q=({activityLogs:t,filters:o,users:s,objectTypes:i})=>{const{search:m,setSearch:p,handleSearch:c}=f(o.search||"","/activity-log"),{page:n,setPage:l,handlePageChange:h}=S(t.current_page);return e.jsxs(d,{children:[e.jsx(g,{title:"Activity Log"}),e.jsxs(A,{px:8,gap:24,py:8,children:[e.jsx(P,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Activity Log"}),e.jsxs(T,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(x,{style:{width:a(16),height:a(16)},stroke:1.5}),value:m,onChange:r=>{p(r.target.value),c(r.target.value)}}),e.jsx(u,{users:s,objectTypes:i})]}),e.jsx(j,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:n,onPageChange:r=>{l(r),h(r,t.links)}})]})]})};export{Q as default};
