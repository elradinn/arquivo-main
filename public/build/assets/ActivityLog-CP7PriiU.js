import{j as e,Y as g,r as a}from"./app-DHbb7XZB.js";import{A as d,I as x}from"./Authenticated-DWZpg9um.js";import{F as u,A as j}from"./FilterForm-D1d9fLhG.js";import{u as f,a as S}from"./use-search-datatable-7C-ocSzd.js";import{S as A}from"./Stack-BnRli6BO.js";import{T as P,F as T}from"./OfficeLogo-C6ryGmry.js";import{T as b}from"./TextInput-B2cdI1__.js";import"./Button-De38AkdO.js";import"./NotificationMenu-DLxJWaSh.js";import"./IconUser-CvGZT8Us.js";import"./Popover-DHSW6Xue.js";import"./use-uncontrolled-B1gi51Y9.js";import"./get-sorted-breakpoints-BYD2hfL9.js";import"./index-D_XodZT9.js";import"./Checkbox-DhvQdy4I.js";import"./InputBase-C-93sqIY.js";import"./CheckIcon-fVhk7RRX.js";import"./ScrollArea-C3btK3uF.js";import"./Select-De12jFwc.js";import"./Combobox-Dmw127jY.js";import"./DatePickerInput-CKZUkAqb.js";const N=({activityLogs:t,filters:o,users:s,objectTypes:i})=>{const{search:m,setSearch:p,handleSearch:c}=f(o.search||"","/activity-log"),{page:n,setPage:l,handlePageChange:h}=S(t.current_page);return e.jsxs(d,{children:[e.jsx(g,{title:"Activity Log"}),e.jsxs(A,{px:8,gap:24,py:8,children:[e.jsx(P,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Activity Log"}),e.jsxs(T,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(x,{style:{width:a(16),height:a(16)},stroke:1.5}),value:m,onChange:r=>{p(r.target.value),c(r.target.value)}}),e.jsx(u,{users:s,objectTypes:i})]}),e.jsx(j,{records:t.data,totalRecords:t.total,recordsPerPage:t.per_page,page:n,onPageChange:r=>{l(r),h(r,t.links)}})]})]})};export{N as default};
