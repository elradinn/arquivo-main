import{W as C,n as u,j as e,M as S,b as y,Y as B,r as D,B as F}from"./app-D_sGyMKs.js";import{u as I,A as P,I as R,d as A,b as w,c as N}from"./Authenticated-Bn8-pIpC.js";import{T as m}from"./Text-qvb52CaA.js";import{S as v}from"./Stack-Bu0ZIYtP.js";import{T as b}from"./TextInput-iaoRy4pl.js";import{S as z}from"./Select-C87Oe0zm.js";import{F as g}from"./Flex-DjfWkKlt.js";import{B as p}from"./Button-drh6xeIV.js";import{u as O,a as _}from"./use-search-datatable-Bcb_K7xA.js";import{Y as W}from"./index-DlbEEtbD.js";import{G as Y}from"./Avatar-XVbTO5AB.js";import{I as G}from"./IconEdit-DNQUJLOX.js";import"./OfficeLogo-B7X7XOjq.js";import"./Popover-BM-stX1p.js";import"./use-uncontrolled-NDNXXLGG.js";import"./createReactComponent-2TRFm2tS.js";import"./IconUser-BP827BXd.js";import"./get-sorted-breakpoints-Dsh_a-um.js";import"./InputBase-BsilGFdQ.js";import"./Combobox-C8-r_sxZ.js";import"./CheckIcon-DYUtT7iO.js";import"./ScrollArea-CdhJt94K.js";import"./Checkbox-DhKNXFGl.js";function H({close:t}){const{data:a,setData:s,post:r,processing:n,errors:l,reset:o,clearErrors:c}=C({name:"",type:""}),d=()=>{t(),o(),c()};return{data:a,setData:s,handleCreateMetadata:x=>{x.preventDefault(),r(route("metadata.store"),{onSuccess:()=>{d(),u.show({message:"New metadata added successfully",color:"green"})},onFinish:()=>o()})},processing:n,errors:l,handleClose:d}}const U=({isOpened:t,close:a})=>{const{data:s,setData:r,handleCreateMetadata:n,processing:l,errors:o,handleClose:c}=H({close:a});return e.jsx(S,{opened:t,onClose:a,title:e.jsx(m,{size:"lg",children:"Create Metadata"}),size:550,children:e.jsxs("form",{onSubmit:n,children:[e.jsxs(v,{gap:16,children:[e.jsx(b,{id:"name",type:"text",name:"name",value:s.name,label:"Name",onChange:d=>r("name",d.target.value),error:o.name}),e.jsx(z,{label:"Type",placeholder:"Choose Type",value:s.type,onChange:(d,h)=>r("type",h.value),error:o.type,data:["String","Boolean","Datetime"]})]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(p,{variant:"outline",onClick:c,children:"Cancel"}),e.jsx(p,{ml:12,type:"submit",loading:l,children:"Save"})]})]})})};function L({metadata:t,close:a}){const{data:s,setData:r,patch:n,processing:l,errors:o,reset:c}=C({name:"",type:""});return y.useEffect(()=>{t&&r({name:t.name,type:t.type})},[t]),{data:s,setData:r,handleEdit:h=>{h.preventDefault(),n(route("metadata.update",t==null?void 0:t.id),{onSuccess:()=>{a(),u.show({message:"Metadata edited successfully",color:"green"})},onFinish:()=>c()})},processing:l,errors:o}}const q=({isOpened:t,close:a,metadata:s})=>{const{data:r,setData:n,handleEdit:l,processing:o,errors:c}=L({metadata:s,close:a});return e.jsx(S,{opened:t,onClose:a,title:e.jsx(m,{size:"lg",children:"Edit Metadata"}),size:550,children:e.jsxs("form",{onSubmit:l,children:[e.jsxs(v,{gap:16,children:[e.jsx(b,{id:"name",type:"text",name:"name",value:r.name,label:"Name",onChange:d=>n("name",d.target.value),error:c.name}),e.jsx(z,{label:"Type",placeholder:"Choose Type",value:r.type,onChange:(d,h)=>n("type",h.value),error:c.type,data:["String","Boolean","Datetime"]})]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(p,{variant:"outline",onClick:a,children:"Cancel"}),e.jsx(p,{ml:12,type:"submit",loading:o,children:"Save"})]})]})})};function J({metadata:t,close:a}){const{processing:s,delete:r,reset:n}=C();return{handleDelete:o=>{o.preventDefault(),r(route("metadata.destroy",t==null?void 0:t.id),{onSuccess:()=>{a(),u.show({message:"Metadata deleted successfully",color:"red"})},onError:()=>{a(),u.show({message:"Something went wrong",color:"red"})},onFinish:()=>n()})},processing:s}}const K=({isOpened:t,close:a,metadata:s})=>{const{handleDelete:r,processing:n}=J({metadata:s,close:a});return e.jsx(S,{opened:t,onClose:a,title:e.jsx(m,{size:"lg",children:"Delete Metadata"}),size:550,children:e.jsxs("form",{onSubmit:r,children:[e.jsxs(m,{c:"dimmed",mt:4,size:"sm",children:["Delete this metadata ",s==null?void 0:s.name,"?"]}),e.jsxs(g,{align:"center",justify:"end",mt:16,children:[e.jsx(p,{variant:"subtle",color:"gray",onClick:a,children:"Cancel"}),e.jsx(p,{ml:12,type:"submit",loading:n,color:"red",children:"Confirm Delete"})]})]})})};function fe({metadata:t,filters:a}){const[s,r]=y.useState([]),[n,l]=y.useState(),{search:o,setSearch:c,handleSearch:d}=O(a.search||"","/metadata"),{page:h,setPage:x,handlePageChange:T}=_(t.current_page),{modals:j,openModal:f,closeModal:M}=I(),E=i=>{l(i),f("editMetadata")},k=i=>{l(i),f("deleteMetadata")};return e.jsxs(P,{children:[e.jsx(B,{title:"Metadata"}),e.jsxs(v,{px:8,py:8,gap:24,children:[e.jsx(m,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Metadata"}),e.jsxs(g,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(b,{w:{md:400},placeholder:"Search",leftSection:e.jsx(R,{style:{width:D(16),height:D(16)},stroke:1.5}),value:o,onChange:i=>{c(i.target.value),d(i.target.value)}}),e.jsx(p,{leftSection:e.jsx(A,{size:14}),onClick:()=>f("addMetadata"),children:"Add New Metadata"})]}),e.jsx(W,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",minHeight:"50vh",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"md",totalRecords:t.total,recordsPerPage:t.per_page,page:h,onPageChange:i=>{x(i),T(i,t.links)},columns:[{accessor:"name",noWrap:!0},{accessor:"type",noWrap:!0},{accessor:"actions",title:e.jsx(F,{mr:6,children:"Actions"}),textAlign:"right",render:i=>e.jsxs(Y,{gap:8,justify:"right",wrap:"nowrap",children:[e.jsx(w,{size:"sm",variant:"subtle",color:"gray",onClick:()=>E(i),children:e.jsx(G,{size:48})}),e.jsx(w,{size:"sm",variant:"subtle",color:"red",onClick:()=>k(i),children:e.jsx(N,{size:48})})]})}],records:t.data,selectedRecords:s,onSelectedRecordsChange:r})]}),e.jsx(U,{isOpened:j.addMetadata,close:()=>M("addMetadata")}),e.jsx(q,{isOpened:j.editMetadata,close:()=>M("editMetadata"),metadata:n}),e.jsx(K,{isOpened:j.deleteMetadata,close:()=>M("deleteMetadata"),metadata:n})]})}export{fe as default};
