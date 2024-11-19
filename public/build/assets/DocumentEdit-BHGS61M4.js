import{b,j as e,M as A,W as F,n as w,Y as E,y as T}from"./app-Bk6YQbjT.js";import{u as S,a as k,b as y,A as O}from"./Authenticated-Nzm9GfVJ.js";import{u as P}from"./use-fetch-metadata-CTjd_slV.js";import{u as U,C as M}from"./Combobox-BOC9AvYW.js";import{S as h}from"./Stack-BwwFe5av.js";import{I as B}from"./InputBase-Ck5-XHF7.js";import{G as D,A as I}from"./NotificationMenu-Bn2Jwl7X.js";import{B as C}from"./Button-BoetfIux.js";import{T as v}from"./TextInput-DFpXzVLP.js";import{T as g,F as L}from"./OfficeLogo-D7m6LQUz.js";import{A as q,I as G,u as N,a as Y}from"./use-show-items-for-moving-BCZXa8j6.js";import{I as H}from"./IconFolder-D-mdyENi.js";import{I as z}from"./IconFile-CeGuOZD9.js";import{I as V}from"./IconEdit-yOooziEI.js";import{T as W}from"./Textarea-Cgjx9Vzb.js";import{D as $}from"./DatePickerInput-BWwXfpyu.js";import"./Popover-DKZHvKiG.js";import"./use-uncontrolled-B0iABIbI.js";import"./IconUser-CHuW1_eS.js";import"./get-sorted-breakpoints-BlwIl1UE.js";import"./clamp-DTmYCdls.js";const J=({onAdd:a})=>{const{modals:m,closeModal:n}=S(),r=m.addDocumentMetadata,{metadataList:c}=P(),[d,l]=b.useState(null),u=U({onDropdownClose:()=>u.resetSelectedOption()}),p=()=>{d&&(a(d),n("addDocumentMetadata"),l(null))},_=c.map(s=>e.jsx(M.Option,{value:s.metadata_id.toString(),children:s.name},s.metadata_id));return e.jsx(A,{opened:r,onClose:()=>n("addDocumentMetadata"),title:"Add Custom Metadata",children:e.jsxs(h,{gap:16,children:[e.jsxs(M,{store:u,onOptionSubmit:s=>{const x=c.find(t=>t.metadata_id.toString()===s)||null;l(x),u.closeDropdown()},children:[e.jsx(M.Target,{children:e.jsx(B,{component:"button",type:"button",rightSection:e.jsx(M.Chevron,{}),onClick:()=>u.toggleDropdown(),children:d?d.name:"Select Metadata"})}),e.jsx(M.Dropdown,{children:e.jsx(M.Options,{children:_})})]}),e.jsxs(D,{justify:"flex-end",children:[e.jsx(C,{variant:"outline",onClick:()=>n("addDocumentMetadata"),children:"Cancel"}),e.jsx(C,{onClick:p,disabled:!d,children:"Add"})]})]})})},K=({metadata:a,requiredMetadata:m,onAdd:n,onUpdate:r,onChange:c,onDelete:d})=>{const{openModal:l}=S(),u=t=>{n&&n(t)},p=()=>{l("addDocumentMetadata")},_=t=>{const i=a[t],j=a.filter((o,f)=>f!==t);r&&r(j),d&&i.metadata_id!==0&&d(i.metadata_id)},s=(t,i,j)=>{const o=a.map((f,R)=>R===t?{...f,[i]:j}:f);c&&c(o)},x=b.useMemo(()=>{const t=a.map(i=>i.metadata_id);return m.filter(i=>!t.includes(i.metadata_id))},[a,m]);return e.jsxs(h,{children:[a.map((t,i)=>e.jsxs(D,{grow:!0,align:"flex-end",children:[e.jsx(v,{disabled:!0,label:"Name",placeholder:"Metadata name",value:t.name,onChange:j=>s(i,"name",j.target.value)}),e.jsx(v,{label:"Value",placeholder:"Metadata value",value:t.value,onChange:j=>s(i,"value",j.target.value)}),e.jsx(I,{color:"red",onClick:()=>_(i),children:e.jsx(k,{size:16})})]},t.metadata_id||i)),x.length>0&&e.jsxs(h,{gap:"xs",children:[e.jsx(g,{c:"red",size:"sm",children:"Missing Required Metadata:"}),x.map(t=>e.jsx(q,{icon:e.jsx(G,{size:16}),title:`${t.name} is missing`,color:"red",variant:"light"},t.metadata_id))]}),e.jsx(C,{variant:"light",onClick:p,leftSection:e.jsx(y,{size:14}),children:"Add Custom Metadata"}),e.jsx(J,{onAdd:t=>u({metadata_id:t.metadata_id,name:t.name,value:""})})]})},Q=({onAdd:a})=>{const{modals:m,closeModal:n}=S(),r=m.relatedDocumentModal,[c,d]=b.useState(null),{data:l,loading:u,error:p}=N(c,r),_=t=>{d(t)},s=()=>{l.itemParent&&l.itemParent.parent_id?d(l.itemParent.parent_id):d(null)},x=t=>{a(t),n("relatedDocumentModal"),d(null)};return e.jsx(A,{opened:r,onClose:()=>n("relatedDocumentModal"),title:"Select Related Document",size:"lg",children:e.jsxs(h,{gap:"md",children:[e.jsxs(D,{children:[c&&e.jsx(I,{onClick:s,children:e.jsx(Y,{size:16})}),e.jsx(g,{children:"Select a document to relate"})]}),u?e.jsx(g,{children:"Loading..."}):p?e.jsx(g,{c:"red",children:p}):e.jsx(h,{style:{maxHeight:400,overflowY:"auto"},children:l.itemContents.map(t=>e.jsxs(D,{style:{cursor:"pointer"},onClick:()=>{t.type==="folder"?_(t.item_id):x({item_id:t.item_id,name:t.name})},children:[t.type==="folder"?e.jsx(H,{}):e.jsx(z,{}),e.jsx(g,{children:t.name})]},t.item_id))})]})})},X=({relatedDocuments:a,onChange:m})=>{const{openModal:n}=S(),r=d=>{const l=[...a,d];m&&m(l)},c=d=>{const l=a.filter((u,p)=>p!==d);m&&m(l)};return e.jsxs(h,{children:[a.map((d,l)=>e.jsxs(D,{grow:!0,align:"center",children:[e.jsx(g,{children:d.name}),e.jsx(I,{color:"red",onClick:()=>c(l),children:e.jsx(k,{size:16})})]},d.item_id)),e.jsx(Q,{onAdd:r}),e.jsx(C,{variant:"light",onClick:()=>n("relatedDocumentModal"),leftSection:e.jsx(y,{size:14}),children:"Add Related Document"})]})};function Z({document:a,onSuccess:m}){const{data:n,setData:r,put:c,processing:d,errors:l,reset:u,clearErrors:p}=F({name:a.name,document_number:a.document_number||"",description:a.description||"",due_date:a.due_date||"",update_metadata:a.metadata.map(s=>({metadata_id:s.metadata_id,name:s.name,value:s.value})),delete_metadata:[],related_documents:a.related_documents.map(s=>({item_id:s.item_id,name:s.name}))});return{data:n,setData:r,handleUpdateDocument:s=>{s.preventDefault(),c(route("document.save",a.item_id),{onSuccess:()=>{w.show({message:"Document updated successfully",color:"green"})},onError:x=>{w.show({message:"Failed to update document",color:"red"})},onFinish:()=>p()})},processing:d,errors:l,reset:u}}function De({document:a,itemAncestors:m}){const{data:n,setData:r,handleUpdateDocument:c,processing:d,errors:l,reset:u}=Z({document:a}),[p,_]=b.useState([]),s=o=>{r("update_metadata",[...n.update_metadata||[],o])},x=o=>{n.update_metadata=o},t=o=>{r("update_metadata",o)},i=o=>{_(f=>[...f,o]),r("delete_metadata",[...n.delete_metadata||[],{metadata_id:o}])},j=o=>{r("related_documents",o)};return e.jsxs(O,{children:[e.jsx(E,{title:"Document Properties"}),e.jsxs(h,{px:8,py:8,gap:24,w:550,mb:72,children:[e.jsxs(D,{mt:24,align:"center",children:[e.jsx(z,{size:56,stroke:1.5,color:"gray"}),e.jsx(g,{fw:500,children:n.name}),e.jsx(I,{variant:"subtle",color:"gray",children:e.jsx(V,{size:24})})]}),e.jsxs("form",{onSubmit:c,children:[e.jsxs(h,{gap:12,children:[e.jsx(v,{label:"Document Number",name:"document_number",value:n.document_number,onChange:o=>r("document_number",o.target.value),placeholder:"Enter document number"}),e.jsx(v,{type:"text",label:"Created At",value:a.created_at,disabled:!0}),e.jsx(W,{label:"Description",autosize:!0,minRows:4,maxRows:6,placeholder:"Enter description",value:n.description,onChange:o=>r("description",o.target.value)}),e.jsx($,{label:"Due Date",placeholder:"Select due date",value:n.due_date?new Date(n.due_date):void 0,onChange:o=>r("due_date",(o==null?void 0:o.toISOString())??void 0)})]}),e.jsxs(h,{gap:12,mt:16,children:[e.jsx(g,{size:"sm",fw:500,children:"Custom Metadata Field"}),e.jsx(K,{metadata:n.update_metadata??[],requiredMetadata:a.required_folder_metadata,onAdd:s,onUpdate:x,onChange:t,onDelete:i})]}),e.jsxs(h,{gap:12,mt:16,children:[e.jsx(g,{size:"sm",fw:500,children:"Related Documents"}),e.jsx(X,{relatedDocuments:n.related_documents||[],onChange:j})]}),e.jsxs(L,{align:"center",justify:"end",mt:16,children:[e.jsx(C,{variant:"light",onClick:()=>T.visit(route("document.show",{document:a.item_id})),children:"Cancel"}),e.jsx(C,{ml:12,type:"submit",loading:d,children:"Save Changes"})]})]})]})]})}export{De as default};