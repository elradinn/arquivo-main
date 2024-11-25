import{c as E,W as B,b as C,j as e,M as Y,L as $,n as P,Y as U,y as H}from"./app-o_n_Q1_4.js";import{Y as V}from"./index-D6ebzEKS.js";import{u as z,a as W,b as J,A as K}from"./Authenticated-Cec13kwc.js";import{u as Q,a as X}from"./use-search-datatable-COpy6Z2p.js";import{u as Z,I as ee,a as te}from"./use-fetch-existing-metadata-column-BX7kFRsj.js";import{F as b,T as S}from"./OfficeLogo-Cx0EXCVw.js";import{A as ae,I as re}from"./IconAlertCircle-MpziT5DX.js";import{S as A}from"./Stack-CedQLgvk.js";import{G as _,A as oe,c as se}from"./NotificationMenu-D2gMmxnP.js";import{S as F}from"./Select-BW0R6EY3.js";import{B as j}from"./Button-QcSAzscX.js";import{S as T}from"./StateBadge-CSQS943X.js";import{u as ne}from"./use-document-properties-DeoaRjZP.js";import{D as le}from"./DatePickerInput-CGvRqrsI.js";import"./Checkbox-BRedaS4F.js";import"./IconUser-BqmWWyqY.js";import"./InputBase-CTp7OGFz.js";import"./use-uncontrolled-CloXekY7.js";import"./CheckIcon-z59qNQSx.js";import"./Popover-CjVYgpjS.js";import"./TextInput-Yso5tBj3.js";import"./get-sorted-breakpoints-6caYqVKE.js";import"./Combobox-D5pGux-b.js";import"./Badge-DMg8Z45x.js";import"./clamp-DTmYCdls.js";function de(){return{generateReport:async h=>{var l;try{const n=await E.post(route("report.generate"),{folder_item_id:h}),{url:i,filename:m}=n.data;if(i){const a=document.createElement("a");a.href=i,a.download=m,document.body.appendChild(a),a.click(),document.body.removeChild(a)}else console.error("No URL returned for the report.")}catch(n){console.error("Error generating report:",((l=n.response)==null?void 0:l.data)||n.message)}},generateDashboardReport:async h=>{var l;try{const n=await E.post(route("report.generateDashboard"),h),{url:i,filename:m}=n.data;if(i){const a=document.createElement("a");a.href=i,a.download=m,document.body.appendChild(a),a.click(),document.body.removeChild(a)}else console.error("No URL returned for the dashboard report.")}catch(n){console.error("Error generating dashboard report:",((l=n.response)==null?void 0:l.data)||n.message)}}}}const ce=({availableMetadata:p,existingMetadataIds:c})=>{const{modals:h,closeModal:l}=z(),n=h.selectDashboardMetadataColumns,{existingMetadataColumns:i,loading:m,error:a}=Z({folderId:"",isOpen:n}),{data:d,setData:g,post:M,processing:D,errors:O,reset:f}=B({metadata_columns:[{id:Date.now(),value:""}],metadata_ids:[]});C.useEffect(()=>{if(c.length>0){const s=c.map(o=>({id:Date.now()+o,value:o.toString()}));g("metadata_columns",s)}},[c,n]),C.useEffect(()=>{const s=d.metadata_columns.map(o=>parseInt(o.value)).filter(o=>!isNaN(o));g("metadata_ids",s)},[d.metadata_columns]);const w=()=>{g("metadata_columns",[...d.metadata_columns,{id:Date.now(),value:""}])},k=s=>{g("metadata_columns",d.metadata_columns.filter(o=>o.id!==s))},y=(s,o)=>{const I=d.metadata_columns.map(x=>x.id===s?{...x,value:o}:x);g("metadata_columns",I)},R=s=>{s.preventDefault(),d.metadata_columns.map(o=>parseInt(o.value)).filter(o=>!isNaN(o)),M(route("dashboard.selectMetadataColumn"),{preserveScroll:!0,onSuccess:()=>{l("selectDashboardMetadataColumns"),P.show({title:"Success",message:"Metadata columns selected successfully",color:"green"}),f()},onError:()=>{P.show({title:"Error",message:"Failed to select metadata columns",color:"red"})}})};return e.jsx(Y,{opened:n,onClose:()=>{l("selectDashboardMetadataColumns"),f()},title:"Select Metadata Columns",size:550,children:m?e.jsx(b,{justify:"center",align:"center",h:"100%",children:e.jsx($,{})}):a?e.jsx(ae,{icon:e.jsx(re,{size:16}),title:"Error",color:"red",children:a}):e.jsxs("form",{onSubmit:R,children:[e.jsxs(A,{gap:16,children:[e.jsx(S,{children:"Select the metadata columns you want to display in the dashboard report:"}),d.metadata_columns.map(s=>e.jsxs(_,{justify:"space-between",align:"flex-end",children:[e.jsx(F,{placeholder:"Pick a metadata column",data:p.map(o=>({value:o.metadata_id.toString(),label:o.name})),value:s.value,onChange:o=>y(s.id,o||""),w:"90%",required:!0}),d.metadata_columns.length>1&&e.jsx(oe,{color:"red",variant:"subtle",onClick:()=>k(s.id),children:e.jsx(W,{size:18})})]},s.id)),e.jsx(b,{justify:"flex-start",children:e.jsx(j,{variant:"subtle",color:"blue.5",leftSection:e.jsx(J,{size:18}),onClick:w,children:"Add New Column"})})]}),e.jsxs(b,{align:"center",justify:"end",mt:16,children:[e.jsx(j,{variant:"outline",onClick:()=>{l("selectDashboardMetadataColumns"),f()},children:"Cancel"}),e.jsx(j,{ml:12,type:"submit",loading:D,children:"Save"})]})]})})};function ze({documents:p,filters:c,selectedMetadata:h,availableMetadata:l,existingMetadataIds:n}){const[i,m]=C.useState(c.document_status),[a,d]=C.useState([c.start_date?new Date(c.start_date):null,c.end_date?new Date(c.end_date):null]),{openDocument:g}=ne(),{search:M,setSearch:D,handleSearch:O}=Q("","/dashboard/reports"),{page:f,setPage:w,handlePageChange:k}=X(p.current_page),{generateDashboardReport:y}=de(),{openModal:R}=z(),s=t=>{const r={document_status:i,start_date:a[0]?a[0].toISOString().split("T")[0]:null,end_date:a[1]?a[1].toISOString().split("T")[0]:null,page:f||void 0,...t};Object.keys(r).forEach(u=>{(r[u]===null||r[u]===void 0)&&delete r[u]}),H.get(route("dashboard.reports"),r,{replace:!0,preserveState:!0})},o=t=>{m(t),s({document_status:t,page:1})},I=t=>{d(t),s({start_date:t[0]?t[0].toISOString().split("T")[0]:null,end_date:t[1]?t[1].toISOString().split("T")[0]:null,page:1})},x=t=>{w(t),s({page:t})},L=()=>{const t={document_status:i,start_date:a[0]?a[0].toISOString().split("T")[0]:null,end_date:a[1]?a[1].toISOString().split("T")[0]:null,metadata_ids:n};y(t)},N=()=>{m(null),d([null,null]),D(""),s({document_status:null,start_date:null,end_date:null})},G=()=>h.map(t=>t.name.toLowerCase()==="review status"?{accessor:"review status",title:"Review Status",render:({review_status:r})=>e.jsx(T,{state:r})}:t.name.toLowerCase()==="approval status"?{accessor:"approval status",title:"Approval Status",render:({approval_status:r})=>e.jsx(T,{state:r})}:t.name.toLowerCase()==="due_in"?{accessor:"due_in",title:"Due in",render:({due_in:r})=>r!=null?r<0?e.jsxs(S,{c:"red",size:"sm",children:[Math.abs(r)," days overdue"]}):e.jsx(S,{size:"sm",children:`${r} day${r!==1?"s":""} remaining`}):"Deadline not set"}:{accessor:`metadata_${t.metadata_id}`,title:t.name,render:r=>{var v;const u=(v=r.metadata)==null?void 0:v.find(q=>q.metadata_id===t.metadata_id);return u?u.value:"N/A"}});return e.jsxs(K,{children:[e.jsx(U,{title:"Dashboard Report"}),e.jsxs(A,{px:8,gap:24,py:8,children:[e.jsx(_,{children:e.jsx(S,{component:"h2",size:"xl",color:"gray.8",children:"Dashboard Report"})}),e.jsxs(A,{children:[e.jsxs(_,{justify:"space-between",children:[e.jsxs(b,{gap:"md",justify:"flex-start",align:"flex-end",direction:"row",wrap:"wrap",children:[e.jsx(F,{placeholder:"Select document status",value:i,onChange:o,data:[{value:"reviewal_accepted",label:"Review Accepted"},{value:"reviewal_rejected",label:"Review Rejected"},{value:"reviewal_pending",label:"Review Pending"},{value:"approval_accepted",label:"Approval Accepted"},{value:"approval_rejected",label:"Approval Rejected"},{value:"approval_pending",label:"Approval Pending"}],style:{width:200}}),e.jsx(le,{type:"range",placeholder:"Select date range",value:a,onChange:I,style:{width:400},allowSingleDateInRange:!0}),e.jsx(j,{onClick:()=>R("selectDashboardMetadataColumns"),leftSection:e.jsx(ee,{size:16}),variant:"subtle",color:"dark.5",children:"Columns"})]}),e.jsxs(b,{gap:"sm",children:[e.jsx(j,{onClick:N,variant:"subtle",color:"gray",children:"Clear Filters"}),e.jsx(j,{onClick:L,leftSection:e.jsx(te,{size:16}),color:"blue",variant:"subtle",children:"Generate Report"})]})]}),e.jsx(ce,{availableMetadata:l,existingMetadataIds:n}),e.jsx(V,{columns:[{accessor:"name",render:({mime:t,type:r,name:u,missing_required_metadata:v})=>e.jsxs(_,{align:"center",gap:12,children:[e.jsx(se,{mime:t??"",isFolder:r==="folder",missingRequiredMetadata:v}),e.jsx("span",{children:u})]})},{accessor:"updated_at",title:"Last Modified"},...G()],records:p.data,totalRecords:p.total,recordsPerPage:p.per_page,page:f,onPageChange:x,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",customRowAttributes:({type:t,id:r})=>({onDoubleClick:u=>{u.button===0&&g(r)}})})]})]})]})}export{ze as default};
