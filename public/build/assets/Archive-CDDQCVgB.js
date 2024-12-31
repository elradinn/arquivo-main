import{y as I,j as e,W as w,n as S,d as l,e as E,R as C,M as z,Y as M}from"./app-Be6U1Dc8.js";import{u as D,l as A}from"./use-select-items-_CZecPgO.js";import{Y as T}from"./index-CQ_tJ28n.js";import{G as x,c as Y}from"./NotificationMenu-DL9b0tvo.js";import{u as b,A as B}from"./Authenticated-hQH3hORN.js";import{I as U}from"./ItemBreadcrumbs-DoEBBp7D.js";import{u as G}from"./use-document-properties-NArnexxB.js";import{I as N,U as P}from"./UnarchiveFilesForm-Da9Owu7z.js";import{B as f}from"./Button-D9h5vimS.js";import{T as v}from"./OfficeLogo-BgjFk65O.js";import{S as F}from"./Stack-zxFT2Oc1.js";import{N as H,S as L}from"./Switch-TkHE9BII.js";import{c as W}from"./IconUser-BfhP9fWZ.js";import"./Checkbox-CiTPNHD0.js";import"./InputBase-DUCm8-Wn.js";import"./use-resolved-styles-api-D7z3oZkW.js";import"./CheckIcon-RZhGPBCj.js";import"./Popover-DNH91axH.js";import"./TextInput-8_pOHK7P.js";import"./get-sorted-breakpoints-CzoFm_tl.js";import"./Anchor-Xqcd2skh.js";import"./clamp-DTmYCdls.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _=W("outline","settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]);function J(){return{openArchiveFolder:(r,t)=>{r==="folder"&&I.visit(route("archive.show",{id:t}))}}}const K=({selectedIds:s})=>{const{openModal:r}=b();return e.jsxs(x,{h:"50%",px:"md",align:"center",justify:"flex-start",children:[e.jsx(f,{variant:"subtle",color:"green.5",leftSection:e.jsx(N,{size:18}),onClick:()=>r("unarchiveFiles"),children:"Unarchive"}),e.jsx(P,{restoreIds:s})]})};function Q({onSuccessCallback:s}){const{data:r,setData:t,put:c,processing:o,errors:d,reset:n}=w({years:1,enabled:!0});return{data:r,setData:t,updateArchiveFrequency:()=>{c(route("archive.frequency.updateYears"),{onSuccess:()=>{S.show({message:"Archive frequency updated successfully.",color:"green",position:"top-center"}),s(),n()},onError:h=>{S.show({message:h.years?h.years[0]:"An error occurred.",color:"red",position:"top-center"})}})},processing:o,errors:d}}function V(s){const[r,t]=l.useState(null),[c,o]=l.useState(!1),[d,n]=l.useState(null);return l.useEffect(()=>{s&&(o(!0),E.get(route("archive.frequency.getYears")).then(a=>{t(a.data),o(!1)}).catch(a=>{n("Failed to fetch archive frequency."),S.show({message:"Failed to fetch archive frequency.",color:"red",position:"top-center"}),o(!1)}))},[s]),{frequency:r,loading:c,error:d}}const X=()=>{const{modals:s,closeModal:r}=b(),t=s.archiveOptions,{frequency:c,loading:o,error:d}=V(t),{data:n,setData:a,updateArchiveFrequency:h,processing:p,errors:g}=Q({onSuccessCallback:()=>{r("archiveOptions")}});C.useEffect(()=>{c&&a({years:c.years,enabled:c.enabled})},[c]);const y=u=>{u.preventDefault(),h()};return e.jsx(z,{opened:t,onClose:()=>r("archiveOptions"),title:e.jsx(v,{size:"lg",children:"Archive Options"}),size:"sm",children:e.jsxs("form",{onSubmit:y,children:[e.jsx(v,{size:"sm",c:"dark",mb:"md",children:"This will automatically archive all data older than the selected number of years."}),e.jsxs(F,{children:[e.jsx(H,{label:"Years of Oldness",placeholder:"Enter number of years",value:n.years,onChange:u=>a("years",Number(u)),required:!0,error:g.years,disabled:o}),e.jsx(L,{label:"Enable Automatic Archiving",checked:n.enabled,onChange:u=>a("enabled",u.currentTarget.checked),disabled:o}),e.jsxs(x,{justify:"flex-end",children:[e.jsx(f,{variant:"default",onClick:()=>r("archiveOptions"),children:"Cancel"}),e.jsx(f,{type:"submit",loading:p,disabled:o||!!d,children:"Save"})]})]})]})})},Z=()=>{const{openModal:s}=b();return e.jsxs(x,{h:"50%",px:"md",align:"center",justify:"flex-start",children:[e.jsx(f,{variant:"subtle",color:"dark.3",leftSection:e.jsx(_,{size:18}),onClick:()=>s("archiveOptions"),children:"Archive Options"}),e.jsx(X,{})]})};function Se({itemParent:s,itemAncestors:r,itemContents:t,folderUserRole:c}){l.useRef(null);const{selectedRecord:o,setSelectedRecord:d,ids:n}=D(),{openArchiveFolder:a}=J(),{openDocument:h}=G(),[p,g]=l.useState({columnAccessor:"name",direction:"asc"}),[y,u]=l.useState(A.sortBy(t,"name"));l.useEffect(()=>{const i=A.sortBy(t,p.columnAccessor);u(p.direction==="desc"?i.reverse():i)},[p,t]);const q=[{accessor:"name",render:({mime:i,type:m,name:j,approval_status:O,review_status:R,missing_required_metadata:k})=>e.jsxs(x,{align:"center",gap:12,preventGrowOverflow:!0,children:[e.jsx(Y,{mime:i??"",isFolder:m==="folder",reviewStatus:R,approvalStatus:O,missingRequiredMetadata:k}),e.jsx("span",{children:j})]}),sortable:!0,ellipsis:!0},{accessor:"archived_at",title:"Archived At",sortable:!0,ellipsis:!0}];return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Archive"}),e.jsx(B,{toolbar:o.length>0?e.jsx(K,{selectedIds:n}):e.jsx(Z,{}),children:e.jsxs(F,{px:8,gap:24,py:8,style:{pointerEvents:"all"},children:[e.jsx(v,{component:"h2",size:"xl",fw:600,c:"gray.8",children:"Archive"}),e.jsx(U,{ancestors:r}),t.length?e.jsx(T,{textSelectionDisabled:!0,columns:q,records:y,customRowAttributes:({type:i,id:m})=>({onDoubleClick:j=>{j.button===0&&(i==="folder"?a(i,m):i==="document"&&h(m))}}),highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",selectedRecords:o,onSelectedRecordsChange:d,sortStatus:p,onSortStatusChange:g}):e.jsx(v,{size:"lg",c:"gray.5",children:"This folder is empty"})]})})]})}export{Se as default};
