import{j as e,M as c}from"./app-D_sGyMKs.js";import{Y as p}from"./index-DlbEEtbD.js";import{a as m}from"./Authenticated-Bn8-pIpC.js";import{B as i}from"./Button-drh6xeIV.js";import{c as u}from"./createReactComponent-2TRFm2tS.js";import{T as d}from"./Text-qvb52CaA.js";import{S as x}from"./Stack-Bu0ZIYtP.js";import{T as j}from"./TextInput-iaoRy4pl.js";import{R as r}from"./Radio-DlhooJF1.js";import{G as h}from"./Avatar-XVbTO5AB.js";import{F as f}from"./Flex-DjfWkKlt.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var n=u("outline","filter","IconFilter",[["path",{d:"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z",key:"svg-0"}]]);const W=({records:s,totalRecords:o,recordsPerPage:t,page:l,onPageChange:a})=>e.jsx(p,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",totalRecords:o,recordsPerPage:t,page:l,onPageChange:a,columns:[{accessor:"date",title:"Date",noWrap:!0},{accessor:"time",title:"Time",noWrap:!0},{accessor:"user_name",title:"User",noWrap:!0},{accessor:"subject_type",title:"Object Type",noWrap:!0},{accessor:"subject_name",title:"Object",noWrap:!0},{accessor:"description",title:"Description",noWrap:!0}],records:s}),k=()=>{const[s,{open:o,close:t}]=m(!1),l=a=>{a.preventDefault(),t()};return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"subtle",color:"dark.3",leftSection:e.jsx(n,{size:18}),onClick:o,children:"Filter"}),e.jsx(c,{opened:s,onClose:t,title:e.jsx(d,{fw:"bold",size:"lg",children:"Filter Activity Log"}),size:"550",children:e.jsxs("form",{onSubmit:l,children:[e.jsxs(x,{gap:16,children:[e.jsx(j,{placeholder:"Search",leftSection:e.jsx(n,{size:18})}),e.jsx(r.Group,{name:"actionType",label:"Action Type",defaultValue:"",children:e.jsxs(h,{mt:"xs",children:[e.jsx(r,{value:"created",label:"Created"}),e.jsx(r,{value:"updated",label:"Updated"}),e.jsx(r,{value:"deleted",label:"Deleted"}),e.jsx(r,{value:"",label:"All"})]})})]}),e.jsxs(f,{align:"center",justify:"end",mt:16,children:[e.jsx(i,{variant:"outline",onClick:t,children:"Cancel"}),e.jsx(i,{ml:12,type:"submit",children:"Apply Filters"})]})]})})]})};export{W as A,k as F};
