import{W as k,n as w,b as x,j as e,M as A,Y as T,y as I}from"./app-COI09GEu.js";import{Y as E}from"./index-Cde5U0I6.js";import{u as y,A as F}from"./Authenticated-BOJpYSul.js";import{u as O,a as G}from"./use-search-datatable-CvxI0Z_g.js";import{I as z,u as B}from"./use-generate-report-DZ5B-HXh.js";import{S as D}from"./Stack-C5mar0nD.js";import{T as j,F as Y}from"./OfficeLogo-BJbDsiR3.js";import{C as $}from"./Checkbox-DUXX-WQp.js";import{G as f,d as q}from"./NotificationMenu-BHakjobV.js";import{B as S}from"./Button-dB9HwxwG.js";import{S as N}from"./StateBadge-Bi6cB3Rn.js";import{u as H}from"./use-document-properties-BRmZ6HaK.js";import{S as L}from"./Select-B2FaHH1o.js";import{D as V}from"./DatePickerInput-gl4e53-k.js";import{I as W}from"./IconDownload-Dg6IkT6j.js";import"./Popover-Cvv-QQda.js";import"./use-uncontrolled-tqWMHqn9.js";import"./IconUser-BqOjfF9G.js";import"./TextInput-COZo1gMD.js";import"./InputBase-CZftOjEr.js";import"./get-sorted-breakpoints-BcrXOVSI.js";import"./CheckIcon-D2W1QFc3.js";import"./Badge-BNd58ks-.js";import"./Combobox-B-mose7B.js";import"./clamp-DTmYCdls.js";function J({folderId:n,closeModal:r}){const{data:l,setData:p,post:d,processing:o,errors:i,reset:t}=k({metadata_ids:[]});return{data:l,setData:p,handleSubmit:()=>{d(route("dashboard.selectMetadataColumn",n),{onSuccess:()=>{w.show({title:"Success",message:"Metadata columns updated successfully",color:"green"}),r(),t()},onError:()=>{w.show({title:"Error",message:"Failed to update metadata columns",color:"red"})}})},processing:o,errors:i}}const K=({folderId:n,availableMetadata:r,existingMetadataIds:l})=>{const{modals:p,closeModal:d}=y(),o=p.selectDashboardMetadataColumns,{data:i,setData:t,handleSubmit:h,processing:v,errors:g}=J({folderId:n,closeModal:()=>d("selectDashboardMetadataColumns")});x.useEffect(()=>{t("metadata_ids",l)},[l]);const C=s=>{const u=i.metadata_ids;u.includes(s)?t("metadata_ids",u.filter(_=>_!==s)):t("metadata_ids",[...u,s])};return e.jsx(A,{opened:o,onClose:()=>d("selectDashboardMetadataColumns"),title:"Select Metadata Columns",children:e.jsx("form",{onSubmit:s=>{s.preventDefault(),h()},children:e.jsxs(D,{children:[e.jsx(j,{children:"Select the metadata columns you want to display in the dashboard report:"}),r.map(s=>e.jsx($,{label:s.name,checked:i.metadata_ids.includes(s.id),onChange:()=>C(s.id)},s.id)),g.metadata_ids&&e.jsx(j,{c:"red",children:g.metadata_ids}),e.jsxs(f,{gap:"md",mt:"md",children:[e.jsx(S,{variant:"outline",onClick:()=>d("selectDashboardMetadataColumns"),children:"Cancel"}),e.jsx(S,{type:"submit",loading:v,children:"Save"})]})]})})})};function ve({documents:n,filters:r,selectedMetadata:l,availableMetadata:p,existingMetadataIds:d}){const[o,i]=x.useState(r.document_status),[t,h]=x.useState([r.start_date?new Date(r.start_date):null,r.end_date?new Date(r.end_date):null]),{openDocument:v}=H();O("","/dashboard/reports");const{page:g,setPage:C,handlePageChange:s}=G(n.current_page),{generateDashboardReport:u}=B(),{openModal:_}=y(),R=()=>{const a={};o&&(a.document_status=o),t[0]&&t[1]&&(a.start_date=t[0].toISOString().split("T")[0],a.end_date=t[1].toISOString().split("T")[0]),I.get("/dashboard/reports",a,{replace:!0,preserveState:!0})};x.useEffect(()=>{R()},[o,t]);const M=()=>{const a={document_status:o,start_date:t[0]?t[0].toISOString().split("T")[0]:null,end_date:t[1]?t[1].toISOString().split("T")[0]:null,metadata_ids:d};u(a)};return e.jsxs(F,{children:[e.jsx(T,{title:"Dashboard Report"}),e.jsxs(D,{px:8,gap:24,py:8,children:[e.jsx(f,{children:e.jsx(j,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Dashboard Report"})}),e.jsxs(D,{children:[e.jsxs(f,{justify:"space-between",children:[e.jsxs(Y,{gap:"md",justify:"flex-start",align:"flex-end",direction:"row",wrap:"wrap",children:[e.jsx(L,{placeholder:"Select document status",value:o,onChange:i,data:[{value:"reviewal_accepted",label:"Review Accepted"},{value:"reviewal_rejected",label:"Review Rejected"},{value:"reviewal_pending",label:"Review Pending"},{value:"approval_accepted",label:"Approval Accepted"},{value:"approval_rejected",label:"Approval Rejected"},{value:"approval_pending",label:"Approval Pending"}],style:{width:200}}),e.jsx(V,{type:"range",placeholder:"Select date range",value:t,onChange:h,style:{width:300}}),e.jsx(S,{onClick:()=>_("selectDashboardMetadataColumns"),leftSection:e.jsx(z,{size:16}),variant:"subtle",color:"dark.5",children:"Columns"})]}),e.jsx(S,{onClick:M,leftSection:e.jsx(W,{size:16}),color:"blue",variant:"subtle",children:"Generate Report"})]}),e.jsx(K,{folderId:"your-folder-item-id",availableMetadata:p,existingMetadataIds:d}),e.jsx(E,{columns:[{accessor:"name",render:({mime:a,type:m,name:c,missing_required_metadata:b})=>e.jsxs(f,{align:"center",gap:12,children:[e.jsx(q,{mime:a??"",isFolder:m==="folder",missingRequiredMetadata:b}),e.jsx("span",{children:c})]})},{accessor:"updated_at",title:"Last Modified"},{accessor:"status",render:({status:a})=>e.jsx(N,{state:a})},{accessor:"due_in",title:"Due in",render:({due_in:a})=>a!==void 0?a<0?e.jsxs(j,{c:"red",children:[Math.abs(a)," days overdue"]}):`${a} day${a!==1?"s":""} remaining`:"N/A",sortable:!0},...l.map(a=>({accessor:`metadata_${a.metadata_id}`,title:a.name,render:m=>{var b;const c=(b=m.metadata)==null?void 0:b.find(P=>P.metadata_id===a.metadata_id);return c?c.value:"N/A"}}))],records:n.data,totalRecords:n.total,recordsPerPage:n.per_page,page:g,onPageChange:()=>{},highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",customRowAttributes:({type:a,id:m})=>({onDoubleClick:c=>{c.button===0&&v(m)}})})]})]})]})}export{ve as default};
