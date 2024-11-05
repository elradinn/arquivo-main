import{f as N,u as O,d as P,q as U,j as e,B as q,C as $,e as G,g as L,b as A,M as V,W,n as z,Y}from"./app-B1t0nWF2.js";import{u as B,b as E,c as H,d as J,A as K}from"./Authenticated-Cn6MVLYw.js";import{u as Q}from"./use-fetch-metadata-ce2DZ9mk.js";import{u as X,C as b}from"./Combobox-BJIKhSN8.js";import{S as _}from"./Stack-DzZL_UtP.js";import{I as Z}from"./InputBase-wHy3O5_x.js";import{G as S}from"./Avatar-DhTNpjzT.js";import{B as f}from"./Button-HaXgOpsJ.js";import{T as M}from"./TextInput-C5DBO-eL.js";import{T as w}from"./Text-CTq1jRaK.js";import{c as ee}from"./createReactComponent-CvUE1uel.js";import{I as te}from"./IconFile-BJEDmDVU.js";import{I as ae}from"./IconEdit-DImQO0NR.js";import{T as oe}from"./Textarea-Dd19YroK.js";import{F as se}from"./Flex-vxGNn1YY.js";import"./OfficeLogo-CnZm09Bf.js";import"./Popover-CNN9VJPa.js";import"./use-uncontrolled-DXGPZ-HS.js";import"./IconUser-DH80TIA7.js";import"./get-sorted-breakpoints-QhZfIvBG.js";var T={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const ne={},de=G((t,{radius:m,color:s,variant:d,autoContrast:i})=>{const r=t.variantColorResolver({color:s||t.primaryColor,theme:t,variant:d||"light",autoContrast:i});return{root:{"--alert-radius":m===void 0?void 0:L(m),"--alert-bg":s||d?r.background:void 0,"--alert-color":r.color,"--alert-bd":s||d?r.border:void 0}}}),I=N((t,m)=>{const s=O("Alert",ne,t),{classNames:d,className:i,style:r,styles:p,unstyled:c,vars:h,radius:j,color:n,title:u,children:a,id:l,icon:o,withCloseButton:g,onClose:v,closeButtonLabel:C,variant:y,autoContrast:me,...F}=s,x=P({name:"Alert",classes:T,props:s,className:i,style:r,classNames:d,styles:p,unstyled:c,vars:h,varsResolver:de}),D=U(l),k=u&&`${D}-title`||void 0,R=`${D}-body`;return e.jsx(q,{id:D,...x("root",{variant:y}),variant:y,ref:m,...F,role:"alert","aria-describedby":R,"aria-labelledby":k,children:e.jsxs("div",{...x("wrapper"),children:[o&&e.jsx("div",{...x("icon"),children:o}),e.jsxs("div",{...x("body"),children:[u&&e.jsx("div",{...x("title"),"data-with-close-button":g||void 0,children:e.jsx("span",{id:k,...x("label"),children:u})}),a&&e.jsx("div",{id:R,...x("message"),"data-variant":y,children:a})]}),g&&e.jsx($,{...x("closeButton"),onClick:v,variant:"transparent",size:16,iconSize:16,"aria-label":C,unstyled:c})]})})});I.classes=T;I.displayName="@mantine/core/Alert";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var re=ee("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);const le=({onAdd:t})=>{const{modals:m,closeModal:s}=B(),d=m.addDocumentMetadata,{metadataList:i}=Q(),[r,p]=A.useState(null),c=X({onDropdownClose:()=>c.resetSelectedOption()}),h=()=>{r&&(t(r),s("addDocumentMetadata"),p(null))},j=i.map(n=>e.jsx(b.Option,{value:n.metadata_id.toString(),children:n.name},n.metadata_id));return e.jsx(V,{opened:d,onClose:()=>s("addDocumentMetadata"),title:"Add Custom Metadata",children:e.jsxs(_,{gap:16,children:[e.jsxs(b,{store:c,onOptionSubmit:n=>{const u=i.find(a=>a.metadata_id.toString()===n)||null;p(u),c.closeDropdown()},children:[e.jsx(b.Target,{children:e.jsx(Z,{component:"button",type:"button",rightSection:e.jsx(b.Chevron,{}),onClick:()=>c.toggleDropdown(),children:r?r.name:"Select Metadata"})}),e.jsx(b.Dropdown,{children:e.jsx(b.Options,{children:j})})]}),e.jsxs(S,{justify:"flex-end",children:[e.jsx(f,{variant:"outline",onClick:()=>s("addDocumentMetadata"),children:"Cancel"}),e.jsx(f,{onClick:h,disabled:!r,children:"Add"})]})]})})},ie=({metadata:t,requiredMetadata:m,onAdd:s,onUpdate:d,onChange:i,onDelete:r})=>{const{openModal:p}=B(),c=a=>{s&&s(a)},h=()=>{p("addDocumentMetadata")},j=a=>{const l=t[a],o=t.filter((g,v)=>v!==a);console.log("newMetadata",o),d&&d(o),r&&l.metadata_id!==0&&r(l.metadata_id)},n=(a,l,o)=>{const g=t.map((v,C)=>C===a?{...v,[l]:o}:v);i&&i(g)},u=A.useMemo(()=>{const a=t.map(l=>l.metadata_id);return m.filter(l=>!a.includes(l.metadata_id))},[t,m]);return e.jsxs(_,{children:[t.map((a,l)=>e.jsxs(S,{grow:!0,align:"flex-end",children:[e.jsx(M,{disabled:!0,label:"Name",placeholder:"Metadata name",value:a.name,onChange:o=>n(l,"name",o.target.value)}),e.jsx(M,{label:"Value",placeholder:"Metadata value",value:a.value,onChange:o=>n(l,"value",o.target.value)}),e.jsx(E,{color:"red",onClick:()=>j(l),children:e.jsx(H,{size:16})})]},a.metadata_id||l)),u.length>0&&e.jsxs(_,{gap:"xs",children:[e.jsx(w,{c:"red",size:"sm",children:"Missing Required Metadata:"}),u.map(a=>e.jsx(I,{icon:e.jsx(re,{size:16}),title:`${a.name} is missing`,color:"red",variant:"light"},a.metadata_id))]}),e.jsx(f,{variant:"light",onClick:h,leftSection:e.jsx(J,{size:14}),children:"Add Custom Metadata"}),e.jsx(le,{onAdd:a=>c({metadata_id:a.metadata_id,name:a.name,value:""})})]})};function ce({document:t,onSuccess:m}){const{data:s,setData:d,put:i,processing:r,errors:p,reset:c,clearErrors:h}=W({name:t.name,document_number:t.document_number||"",description:t.description||"",update_metadata:t.metadata.map(n=>({metadata_id:n.metadata_id,name:n.name,value:n.value})),delete_metadata:[],related_documents:t.related_documents.map(n=>({item_id:n.item_id,name:n.name}))});return{data:s,setData:d,handleUpdateDocument:n=>{n.preventDefault(),i(route("document.save",t.item_id),{onSuccess:()=>{z.show({message:"Document updated successfully",color:"green"})},onError:u=>{z.show({message:"Failed to update document",color:"red"})},onFinish:()=>h()})},processing:r,errors:p,reset:c}}function ze({document:t,itemAncestors:m}){const{data:s,setData:d,handleUpdateDocument:i,processing:r,errors:p,reset:c}=ce({document:t}),[h,j]=A.useState([]),n=o=>{d("update_metadata",[...s.update_metadata||[],o])},u=o=>{s.update_metadata=o},a=o=>{d("update_metadata",o)},l=o=>{j(g=>[...g,o]),d("delete_metadata",[...s.delete_metadata||[],{metadata_id:o}])};return e.jsxs(K,{children:[e.jsx(Y,{title:"Document Properties"}),e.jsxs(_,{px:8,py:8,gap:24,w:550,mb:72,children:[e.jsxs(S,{mt:24,align:"center",children:[e.jsx(te,{size:56,stroke:1.5,color:"gray"}),e.jsx(w,{fw:500,children:s.name}),e.jsx(E,{variant:"subtle",color:"gray",children:e.jsx(ae,{size:24})})]}),e.jsxs("form",{onSubmit:i,children:[e.jsxs(_,{gap:12,children:[e.jsx(M,{label:"Document Number",name:"document_number",value:s.document_number,onChange:o=>d("document_number",o.target.value),placeholder:"Enter document number"}),e.jsx(M,{type:"text",label:"Created At",value:t.created_at,disabled:!0}),e.jsx(oe,{label:"Description",autosize:!0,minRows:4,maxRows:6,placeholder:"Enter description",value:s.description,onChange:o=>d("description",o.target.value)})]}),e.jsxs(_,{gap:12,children:[e.jsx(w,{size:"sm",fw:500,children:"Custom Metadata Field"}),e.jsx(ie,{metadata:s.update_metadata??[],requiredMetadata:t.required_folder_metadata,onAdd:n,onUpdate:u,onChange:a,onDelete:l})]}),e.jsxs(se,{align:"center",justify:"end",mt:16,children:[e.jsx(f,{variant:"outline",type:"button",onClick:()=>window.history.back(),children:"Cancel"}),e.jsx(f,{ml:12,type:"submit",loading:r,children:"Save"})]})]})]})]})}export{ze as default};
