import{j as e,Y as l,r as a}from"./app-2En39ju7.js";import{A as h,I as d}from"./Authenticated-qBikI9Bj.js";import{F as g,A as x}from"./FilterForm-57cvMSUz.js";import{u,a as j}from"./use-search-datatable-BA1PpM6Z.js";import{S as f}from"./Stack-BIYYsV2c.js";import{T as S,F as T}from"./OfficeLogo-TV6DJJog.js";import{T as b}from"./TextInput-DhwSJPcY.js";import"./Button-DF2Simw3.js";import"./NotificationMenu-BSTeGUj5.js";import"./IconUser-BN6Z6Xy6.js";import"./Popover-BcrPVCG-.js";import"./use-uncontrolled-xJtqzgc0.js";import"./get-sorted-breakpoints-Dr8R6tSd.js";import"./index-CT_T5dIh.js";import"./Checkbox-PCCEhkXO.js";import"./InputBase-CEeec65K.js";import"./CheckIcon-CEbxNgwY.js";import"./Select-BajoVc6v.js";import"./Combobox-DGCT7W1T.js";import"./DatePickerInput-DBGX-74A.js";import"./clamp-DTmYCdls.js";function L({activityLogs:t,filters:o}){const{search:s,setSearch:i,handleSearch:m}=u(o.search||"","/activity-log"),{page:p,setPage:c,handlePageChange:n}=j(t.current_page);return e.jsxs(h,{children:[e.jsx(l,{title:"Activity Log"}),e.jsxs(f,{px:8,gap:24,py:8,children:[e.jsx(S,{component:"h2",size:"xl",fw:600,color:"gray.8",children:"Activity Log"}),e.jsxs(T,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(d,{style:{width:a(16),height:a(16)},stroke:1.5}),value:s,onChange:r=>{i(r.target.value),m(r.target.value)}}),e.jsx(g,{users:[],objectTypes:[]})]}),e.jsx(x,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:p,onPageChange:r=>{c(r),n(r,t.links)}})]})]})}export{L as default};
