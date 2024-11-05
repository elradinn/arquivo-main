import{b as g,u as M,s as P,j as e,t as G,W as A,n as m,M as U,P as R,c as N,Y,B as W}from"./app-D_sGyMKs.js";import{u as z,b as _,c as L,A as H}from"./Authenticated-Bn8-pIpC.js";import{Y as V}from"./index-DlbEEtbD.js";import{I as O}from"./ItemBreadcrumbs-BhLWlPX2.js";import{u as T,I as $,a as q}from"./use-fetch-users-approval-role-BBU-KuDT.js";import{T as a}from"./Text-qvb52CaA.js";import{S as y}from"./Stack-Bu0ZIYtP.js";import{R as w}from"./Radio-DlhooJF1.js";import{G as D,A as k}from"./Avatar-XVbTO5AB.js";import{T as B}from"./Textarea-DOlrw65J.js";import{F as I}from"./Flex-DjfWkKlt.js";import{B as j}from"./Button-drh6xeIV.js";import{c as J}from"./createReactComponent-2TRFm2tS.js";import{I as K}from"./IconDownload-DX7e0K-j.js";import{G as C}from"./Grid-D6uKUIx8.js";import{I as Q}from"./IconFile-D5iLsfFi.js";import{I as X}from"./IconLock-BqQRG4aI.js";import"./OfficeLogo-B7X7XOjq.js";import"./TextInput-iaoRy4pl.js";import"./InputBase-BsilGFdQ.js";import"./Popover-BM-stX1p.js";import"./use-uncontrolled-NDNXXLGG.js";import"./IconUser-BP827BXd.js";import"./get-sorted-breakpoints-Dsh_a-um.js";import"./Checkbox-DhKNXFGl.js";import"./CheckIcon-DYUtT7iO.js";import"./ScrollArea-CdhJt94K.js";import"./Anchor-DIdUeMbL.js";import"./get-base-value-JqT_q0U7.js";const Z={multiple:!1},E=g.forwardRef((s,o)=>{const{onChange:n,children:t,multiple:r,accept:c,name:i,form:d,resetRef:l,disabled:h,capture:p,inputProps:u,...b}=M("FileButton",Z,s),x=g.useRef(),f=()=>{var v;!h&&((v=x.current)==null||v.click())},F=v=>{n(r?Array.from(v.currentTarget.files):v.currentTarget.files[0]||null)};return P(l,()=>{x.current.value=""}),e.jsxs(e.Fragment,{children:[t({onClick:f,...b}),e.jsx("input",{style:{display:"none"},type:"file",accept:c,multiple:r,onChange:F,ref:G(o,x),name:i,form:d,capture:p,...u})]})});E.displayName="@mantine/core/FileButton";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ee=J("outline","refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]]);function se({documentId:s}){const[o,n]=g.useState("reviewal"),{closeModal:t,modals:r}=z(),c=T(o,r.createDocumentApproval),{data:i,setData:d,post:l,processing:h,errors:p,reset:u}=A({document_id:"",resolution:"",destination:"",type:"reviewal",users:[]});return{data:i,setData:d,createApprovalSubmit:x=>{x.preventDefault(),i.document_id=s??"",i.users=c.map(f=>({user_id:f.id.toString()})),l(route("document_approvals.store"),{preserveScroll:!0,onSuccess:()=>{t("createDocumentApproval"),m.show({message:"Document approval process created",color:"green"})},onError:f=>{m.show({message:"Something went wrong",color:"red"})},onFinish:()=>u()})},processing:h,errors:p,users:c,setDocumentApprovalType:n}}const re=({document:s})=>{const{data:o,setData:n,createApprovalSubmit:t,processing:r,errors:c,users:i,setDocumentApprovalType:d}=se({documentId:s==null?void 0:s.item_id}),{modals:l,closeModal:h}=z();return e.jsx(U,{opened:l.createDocumentApproval,onClose:()=>h("createDocumentApproval"),title:e.jsx(a,{fw:"bold",size:"lg",children:"Create Document Approval Process"}),size:550,children:e.jsxs("form",{onSubmit:t,children:[e.jsxs(y,{gap:16,children:[e.jsx(a,{size:"sm",c:"dimmed",children:"Routinely directs any uploaded file in this folder through a predefined document approval process"}),e.jsx(w.Group,{name:"status",value:o.type,onChange:p=>{n("type",p),d(p)},children:e.jsxs(D,{mt:"xs",children:[e.jsx(w,{value:"reviewal",label:"Review"}),e.jsx(w,{value:"approval",label:"Approval"})]})}),e.jsx(B,{label:"Resolution",placeholder:"Your resolution for this approval",value:o.resolution??"",onChange:p=>n("resolution",p.target.value),error:c.resolution,autosize:!0,minRows:2,maxRows:4}),e.jsx(a,{size:"sm",fw:500,mb:-8,children:"Users in this document approval"}),i.map(p=>e.jsx(R,{withBorder:!0,radius:"md",py:16,px:10,children:e.jsxs(D,{children:[e.jsx(k,{}),e.jsx(y,{gap:8,children:e.jsx(a,{size:"sm",children:p.name})})]})},p.id))]}),e.jsxs(I,{align:"center",justify:"end",mt:16,children:[e.jsx(j,{variant:"light",onClick:()=>h("createDocumentApproval"),children:"Cancel"}),e.jsx(j,{ml:12,type:"submit",loading:r,children:"Create"})]})]})})};function oe({documentApprovalId:s,isOpen:o}){const[n,t]=g.useState(null);g.useEffect(()=>{s&&o&&r(s)},[s,o]);const r=async c=>{try{const i=await N.get(`/document_approval/${c}/update`);t(i.data)}catch(i){console.error("Error fetching document approval",i)}};return n}function te({documentApprovalId:s,isOpen:o}){const[n,t]=g.useState("reviewal"),r=oe({documentApprovalId:s,isOpen:o}),c=T(n,o),{closeModal:i}=z(),{data:d,setData:l,put:h,processing:p,errors:u,reset:b,clearErrors:x}=A({resolution:"",type:"",users:[]});g.useEffect(()=>{l({resolution:(r==null?void 0:r.resolution)||"",type:(r==null?void 0:r.type)||"",users:((r==null?void 0:r.document_user_approvals)||[]).map(S=>({user_id:S.user_id}))}),t((r==null?void 0:r.type)||"")},[r]);const f=()=>{i("updateDocumentApproval"),b(),x()};return{data:d,setData:l,handleUpdateDocumentApproval:S=>{S.preventDefault(),d.users=c.map(v=>({user_id:v.id.toString()})),h(route("document_approvals.update",s),{onSuccess:()=>{f(),m.show({message:"Document approval updated successfully",color:"green"})},onError:()=>{m.show({message:"Something went wrong",color:"red"})},onFinish:()=>b()})},processing:p,errors:u,handleClose:f,fetchedUsers:c,setDocumentApprovalType:t,documentApproval:r}}const ne=({document:s})=>{const{modals:o,closeModal:n}=z(),t=o.updateDocumentApproval,{data:r,setData:c,handleUpdateDocumentApproval:i,processing:d,fetchedUsers:l,setDocumentApprovalType:h,errors:p}=te({documentApprovalId:s==null?void 0:s.document_approval_id,isOpen:t});return e.jsx(U,{opened:o.updateDocumentApproval,onClose:()=>n("updateDocumentApproval"),title:e.jsx(a,{fw:"bold",size:"lg",children:"Update Document Approval Process"}),size:550,children:e.jsxs("form",{onSubmit:i,children:[e.jsxs(y,{gap:16,children:[e.jsx(a,{size:"sm",c:"dimmed",children:"Routinely directs any uploaded file in this folder through a predefined document approval process"}),e.jsx(w.Group,{name:"status",value:r.type,onChange:u=>{c("type",u),h(u)},children:e.jsxs(D,{mt:"xs",children:[e.jsx(w,{value:"reviewal",label:"Review"}),e.jsx(w,{value:"approval",label:"Approval"})]})}),e.jsx(B,{label:"Resolution",placeholder:"Your resolution for this approval",value:r.resolution??"",onChange:u=>c("resolution",u.target.value),error:p.resolution,autosize:!0,minRows:2,maxRows:4}),e.jsx(a,{size:"sm",fw:500,mb:-8,children:"Users in this document approval"}),l.map(u=>e.jsx(R,{withBorder:!0,radius:"md",py:16,px:10,children:e.jsxs(D,{children:[e.jsx(k,{}),e.jsxs(y,{gap:8,children:[e.jsx(a,{size:"sm",children:u.name}),e.jsx(a,{size:"sm",children:u.email})]})]})},u.id))]}),e.jsxs(I,{align:"center",justify:"end",mt:16,children:[e.jsx(j,{variant:"light",onClick:()=>n("updateDocumentApproval"),children:"Cancel"}),e.jsx(j,{ml:12,type:"submit",loading:d,children:"Update"})]})]})})};function ae(){const{post:s,processing:o}=A();return{restoreVersion:t=>{s(route("document.restore_version",{version:t}),{onSuccess:()=>{m.show({message:"Document version restored successfully.",color:"green"})},onError:()=>{m.show({message:"Failed to restore document version.",color:"red"})}})},processing:o}}function ie(){const{delete:s,processing:o}=A();return{deleteVersion:t=>{s(route("document.delete_version",{version:t}),{onSuccess:()=>{m.show({message:"Document version deleted successfully.",color:"green"})},onError:()=>{m.show({message:"Failed to delete document version.",color:"red"})}})},processing:o}}const le=({versions:s})=>{const{restoreVersion:o}=ae(),{deleteVersion:n}=ie();return e.jsx(V,{columns:[{accessor:"name",title:"Name"},{accessor:"uploaded_at",title:"Uploaded At"},{accessor:"actions",title:"Actions",render:t=>e.jsxs(D,{gap:4,children:[e.jsx(_,{variant:"subtle",onClick:()=>o(t.id),children:e.jsx(ee,{size:16})}),e.jsx(_,{variant:"subtle",color:"red",onClick:()=>n(t.id),children:e.jsx(L,{size:16})}),e.jsx("a",{href:t.file_path,download:!0,children:e.jsx(_,{variant:"subtle",children:e.jsx(K,{size:16})})})]})}],records:s,highlightOnHover:!0,verticalSpacing:"sm",horizontalSpacing:"sm"})};function ce(s){const{data:o,post:n,reset:t,processing:r,errors:c,clearErrors:i}=A({document_item_id:s,file:null});return{uploadVersion:l=>{if(!l){m.show({message:"No file selected.",color:"red"});return}o.file=l,n(`/document/${s}/versions`,{onSuccess:()=>{m.show({message:"Document version uploaded successfully.",color:"green"}),t()},onError:()=>{m.show({message:"Failed to upload document version.",color:"red"})},onFinish:()=>{i()}})},processing:r,errors:c}}const Pe=({document:s,itemAncestors:o,activityLog:n})=>{const{openModal:t}=z(),{uploadVersion:r,processing:c,errors:i}=ce(s.item_id),d=l=>{l&&r(l)};return e.jsxs(H,{children:[e.jsx(Y,{title:"Document Properties"}),e.jsx(W,{px:8,py:8,mb:48,children:e.jsx(O,{ancestors:o})}),e.jsxs(C,{children:[e.jsx(C.Col,{span:8,children:e.jsxs(y,{px:8,py:8,gap:48,mb:48,children:[e.jsxs(D,{children:[e.jsx(Q,{size:56,stroke:1,color:"gray"}),e.jsx(a,{fw:500,children:s.name})]}),e.jsxs(D,{justify:"space-between",w:700,children:[e.jsxs("div",{children:[e.jsx(a,{size:"sm",fw:"bold",children:"Document ID"}),e.jsx(a,{size:"sm",children:s.item_id})]}),e.jsxs("div",{children:[e.jsx(a,{size:"sm",fw:"bold",children:"Date"}),e.jsx(a,{size:"sm",children:s.created_at})]}),e.jsxs("div",{children:[e.jsx(a,{size:"sm",fw:"bold",children:"Document Number"}),e.jsx(a,{size:"sm",children:s.document_number})]})]}),e.jsxs(y,{gap:12,children:[e.jsx(a,{size:"sm",fw:"bold",children:"Document Versions"}),e.jsx(le,{versions:s.versions}),e.jsx(a,{size:"sm",fw:"bold",children:"Audit Log"}),e.jsx(V,{textSelectionDisabled:!0,columns:[{accessor:"date"},{accessor:"time"},{accessor:"user_name",title:"User"},{accessor:"description",title:"Action"}],records:n,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",withTableBorder:!0})]})]})}),e.jsx(C.Col,{span:3,offset:1,children:e.jsxs(R,{withBorder:!0,p:20,children:[e.jsx(a,{c:"dimmed",fw:500,children:"Options"}),e.jsx(j,{variant:"subtle",color:"blue.5",leftSection:e.jsx(X,{size:18}),fullWidth:!0,justify:"left",children:"Lock File"}),e.jsx(E,{onChange:d,children:l=>e.jsx(j,{...l,variant:"subtle",color:"blue.5",fullWidth:!0,justify:"left",leftSection:e.jsx($,{size:18}),children:"Upload New Version"})}),e.jsxs(j,{variant:"subtle",color:"blue.5",leftSection:e.jsx(q,{size:18}),fullWidth:!0,justify:"left",onClick:()=>{t(s.document_approval_id?"updateDocumentApproval":"createDocumentApproval")},children:[s.document_approval_id?"View":"Start"," Approval Process"]})]})})]}),e.jsx(re,{document:s}),e.jsx(ne,{document:s})]})};export{Pe as default};
