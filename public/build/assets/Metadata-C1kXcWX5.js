import{W as w,n as C,j as e,M as D,d as _,Y as N,r as z,B as I}from"./app-Bb5USZrt.js";import{b as T,a as P,u as R,A as F,I as V}from"./Authenticated-BZO5gG9b.js";import{T as j,F as y}from"./OfficeLogo-DcnpuRHv.js";import{S as M}from"./Stack-Djt0txHH.js";import{T as S}from"./TextInput-pNbli_Ef.js";import{S as k}from"./Select-Cmwxr_bL.js";import{B as m}from"./Button-CXpICpvb.js";import{G as E}from"./NotificationMenu-DIIl_Q3g.js";import{A as b}from"./IconUser-Do4pPcmj.js";import{u as B,a as Y}from"./use-search-datatable-BvXULdtA.js";import{Y as O}from"./index-D5iTKu3j.js";import{I as W}from"./IconEdit-1jvbVjZR.js";import"./Popover-Dq6DG9GP.js";import"./use-resolved-styles-api-B5uKT_Av.js";import"./get-sorted-breakpoints-BSoVOeng.js";import"./InputBase--OrV6scw.js";import"./OptionsDropdown-DPnNOHBw.js";import"./CheckIcon-Kx_ZLOUG.js";import"./Combobox-LbroPvZ6.js";import"./Checkbox-avpdoLlN.js";function G({close:t}){const{data:r,setData:s,post:a,processing:n,errors:c,reset:i,clearErrors:h}=w({name:"",type:""}),u=()=>{t(),i(),h()};return{data:r,setData:s,handleCreateMetadata:f=>{f.preventDefault(),a(route("metadata.store"),{onSuccess:()=>{u(),C.show({position:"top-center",message:"New metadata added successfully",color:"green"})},onFinish:()=>i()})},processing:n,errors:c,handleClose:u}}const H=({isOpened:t,close:r})=>{const{data:s,setData:a,handleCreateMetadata:n,processing:c,errors:i,handleClose:h}=G({close:r});return e.jsx(D,{opened:t,onClose:r,title:e.jsx(j,{size:"lg",children:"Create New Tag"}),size:550,children:e.jsxs("form",{onSubmit:n,children:[e.jsxs(M,{gap:16,children:[e.jsx(S,{id:"name",type:"text",name:"name",value:s.name,label:"Name",onChange:u=>a("name",u.target.value),error:i.name}),e.jsx(k,{label:"Type",placeholder:"Choose Type",value:s.type,onChange:(u,p)=>a("type",p.value),error:i.type,data:["Text","Number","Yes/No"]})]}),e.jsxs(y,{align:"center",justify:"end",mt:16,children:[e.jsx(m,{variant:"light",onClick:h,children:"Cancel"}),e.jsx(m,{ml:12,type:"submit",loading:c,children:"Save"})]})]})})};function U({metadata:t,close:r}){const{data:s,setData:a,patch:n,processing:c,errors:i,reset:h}=w({name:"",type:"",predefined_values:[]});return _.useEffect(()=>{t&&a({name:t.name,type:t.type,predefined_values:t.predefined_values.map(p=>({id:p.id,predefined_value:p.predefined_value}))})},[t]),{data:s,setData:a,handleEdit:p=>{var d;p.preventDefault();const f=(d=s.predefined_values)==null?void 0:d.filter(o=>o.predefined_value.trim()!=="").map(o=>o.predefined_value.trim());n(route("metadata.update",t==null?void 0:t.metadata_id),{data:{name:s.name,type:s.type,predefined_values:f},onSuccess:()=>{r(),C.show({position:"top-center",message:"Metadata edited successfully",color:"green"})}})},processing:c,errors:i}}const q=({isOpened:t,close:r,metadata:s})=>{const{data:a,setData:n,handleEdit:c,processing:i,errors:h}=U({metadata:s,close:r}),u=()=>{n("predefined_values",[...a.predefined_values||[],{id:Date.now(),predefined_value:""}])},p=d=>{var o;n("predefined_values",(o=a.predefined_values)==null?void 0:o.filter(x=>x.id!==d))},f=(d,o)=>{var g;const x=(g=a.predefined_values)==null?void 0:g.map(v=>v.id===d?{...v,predefined_value:o}:v);n("predefined_values",x)};return e.jsx(D,{opened:t,onClose:r,title:e.jsx(j,{size:"lg",children:"Edit Metadata"}),size:550,children:e.jsxs("form",{onSubmit:c,children:[e.jsxs(M,{gap:16,children:[e.jsx(S,{id:"name",type:"text",name:"name",value:a.name,label:"Name",onChange:d=>n("name",d.target.value),error:h.name}),e.jsx(k,{label:"Type",placeholder:"Choose Type",value:a.type,onChange:(d,o)=>n("type",o.value),error:h.type,data:["Text","Yes/No","Number"]}),e.jsxs(M,{children:[e.jsxs(y,{justify:"space-between",align:"center",children:[e.jsx(j,{size:"sm",fw:500,children:"Predefined Values"}),e.jsx(m,{variant:"light",leftSection:e.jsx(T,{size:14}),onClick:u,children:"Add Predefined Value"})]}),a.predefined_values&&a.predefined_values.map(d=>e.jsxs(E,{justify:"space-between",align:"flex-end",children:[e.jsx(S,{placeholder:"Predefined value",value:d.predefined_value,onChange:o=>f(d.id,o.target.value),required:!0,style:{flex:1}}),e.jsx(b,{color:"red",onClick:()=>p(d.id),children:e.jsx(P,{size:16})})]},d.id))]})]}),e.jsxs(y,{align:"center",justify:"end",mt:16,children:[e.jsx(m,{variant:"outline",onClick:r,children:"Cancel"}),e.jsx(m,{ml:12,type:"submit",loading:i,children:"Save"})]})]})})};function L({metadata:t,close:r}){const{processing:s,delete:a,reset:n}=w();return{handleDelete:i=>{i.preventDefault(),a(route("metadata.destroy",t==null?void 0:t.metadata_id),{onSuccess:()=>{r(),C.show({position:"top-center",message:"Metadata deleted successfully",color:"red"})},onError:()=>{r(),C.show({position:"top-center",message:"Something went wrong",color:"red"})},onFinish:()=>n()})},processing:s}}const J=({isOpened:t,close:r,metadata:s})=>{const{handleDelete:a,processing:n}=L({metadata:s,close:r});return e.jsx(D,{opened:t,onClose:r,title:e.jsx(j,{size:"lg",children:"Delete Metadata"}),size:550,children:e.jsxs("form",{onSubmit:a,children:[e.jsxs(j,{c:"dimmed",mt:4,size:"sm",children:["Delete this metadata ",s==null?void 0:s.name,"?"]}),e.jsxs(y,{align:"center",justify:"end",mt:16,children:[e.jsx(m,{variant:"subtle",color:"gray",onClick:r,children:"Cancel"}),e.jsx(m,{ml:12,type:"submit",loading:n,color:"red",children:"Confirm Delete"})]})]})})};function fe({metadata:t,filters:r}){const[s,a]=_.useState([]),[n,c]=_.useState(),{search:i,setSearch:h,handleSearch:u}=B(r.search||"","/metadata"),{page:p,setPage:f,handlePageChange:d}=Y(t.current_page),{modals:o,openModal:x,closeModal:g}=R(),v=l=>{c(l),x("editMetadata")},A=l=>{c(l),x("deleteMetadata")};return e.jsxs(F,{children:[e.jsx(N,{title:"Metadata"}),e.jsxs(M,{px:8,py:8,gap:24,children:[e.jsx(j,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Tags"}),e.jsxs(y,{justify:"space-between",direction:{base:"column",md:"row"},gap:{base:12,md:0},children:[e.jsx(S,{w:{md:400},placeholder:"Search",leftSection:e.jsx(V,{style:{width:z(16),height:z(16)},stroke:1.5}),value:i,onChange:l=>{h(l.target.value),u(l.target.value)}}),e.jsx(m,{leftSection:e.jsx(T,{size:14}),onClick:()=>x("addMetadata"),children:"Add New Metadata"})]}),e.jsx(O,{pinLastColumn:!0,withTableBorder:!0,shadow:"xs",minHeight:"50vh",borderRadius:"sm",withRowBorders:!1,highlightOnHover:!0,verticalSpacing:"md",totalRecords:t.total,recordsPerPage:t.per_page,page:p,onPageChange:l=>{f(l),d(l,t.links)},columns:[{accessor:"name",noWrap:!0},{accessor:"type",noWrap:!0},{accessor:"actions",title:e.jsx(I,{mr:6,children:"Actions"}),textAlign:"right",render:l=>e.jsxs(E,{gap:8,justify:"right",wrap:"nowrap",children:[e.jsx(b,{size:"sm",variant:"subtle",color:"gray",onClick:()=>v(l),children:e.jsx(W,{size:48})}),e.jsx(b,{size:"sm",variant:"subtle",color:"red",onClick:()=>A(l),children:e.jsx(P,{size:48})})]})}],records:t.data,selectedRecords:s,onSelectedRecordsChange:a})]}),e.jsx(H,{isOpened:o.addMetadata,close:()=>g("addMetadata")}),e.jsx(q,{isOpened:o.editMetadata,close:()=>g("editMetadata"),metadata:n}),e.jsx(J,{isOpened:o.deleteMetadata,close:()=>g("deleteMetadata"),metadata:n})]})}export{fe as default};
