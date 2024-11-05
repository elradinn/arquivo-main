import{b,W as g,n as h,j as e,M as j,R as F,Y as x}from"./app-D_sGyMKs.js";import{u as m,c as S,A as v}from"./Authenticated-Bn8-pIpC.js";import{Y as k}from"./index-DlbEEtbD.js";import{I as R}from"./ItemIcon-BWJ54mDh.js";import{T as d}from"./Text-qvb52CaA.js";import{F as f}from"./Flex-DjfWkKlt.js";import{B as c}from"./Button-drh6xeIV.js";import{G as u}from"./Avatar-XVbTO5AB.js";import{c as y}from"./createReactComponent-2TRFm2tS.js";import{S as M}from"./Stack-Bu0ZIYtP.js";import"./OfficeLogo-B7X7XOjq.js";import"./TextInput-iaoRy4pl.js";import"./InputBase-BsilGFdQ.js";import"./Popover-BM-stX1p.js";import"./use-uncontrolled-NDNXXLGG.js";import"./IconUser-BP827BXd.js";import"./get-sorted-breakpoints-Dsh_a-um.js";import"./Checkbox-DhKNXFGl.js";import"./CheckIcon-DYUtT7iO.js";import"./ScrollArea-CdhJt94K.js";import"./get-color-status-CoUPVVuO.js";import"./IconPhoto-ClcBf9dY.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=y("outline","restore","IconRestore",[["path",{d:"M3.06 13a9 9 0 1 0 .49 -4.087",key:"svg-0"}],["path",{d:"M3 4.001v5h5",key:"svg-1"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var T=y("outline","trash-x","IconTrashX",[["path",{d:"M4 7h16",key:"svg-0"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-1"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-2"}],["path",{d:"M10 12l4 4m0 -4l-4 4",key:"svg-3"}]]);function C(){const[t,s]=b.useState([]),o=(l=>l.map(n=>n.id))(t);return{selectedRecord:t,setSelectedRecord:s,ids:o}}function I({deleteIds:t}){const{data:s,delete:r,processing:o}=g({ids:[]}),{closeModal:l}=m();return{deleteFilesSubmit:i=>{i.preventDefault(),s.ids=t||[],r(route("trash.delete"),{onSuccess:()=>{l("permanentDelete"),h.show({message:"Files deleted permanently",color:"green"})},onError:a=>{let p="";Object.keys(a).length>0?p=a[Object.keys(a)[0]]:p="Error during file deletion. Please try again later.",h.show({message:p,color:"red"})}})},processing:o}}const z=({deleteIds:t})=>{const{deleteFilesSubmit:s,processing:r}=I({deleteIds:t}),{closeModal:o,modals:l}=m();return e.jsx(j,{opened:l.permanentDelete,onClose:()=>o("permanentDelete"),title:e.jsx(d,{fw:"bold",size:"lg",children:"Delete Forever"}),size:550,children:e.jsxs("form",{onSubmit:s,children:[e.jsx(d,{c:"dimmed",children:"Permanently delete selected files?"}),e.jsxs(f,{align:"center",justify:"end",mt:16,children:[e.jsx(c,{variant:"subtle",onClick:close,color:"gray",children:"Cancel"}),e.jsx(c,{ml:12,type:"submit",loading:r,color:"red",children:"Confirm"})]})]})})};function E(){const{closeModal:t}=m(),{data:s,post:r,processing:o}=g({ids:[]});return{data:s,setData:n=>{Object.assign(s,n)},restoreFilesSubmit:n=>{n.preventDefault(),r(route("trash.restore"),{onSuccess:()=>{t("restoreFiles"),h.show({message:"Files restored successfully",color:"green"})},onError:i=>{let a="";Object.keys(i).length>0?a=i[Object.keys(i)[0]]:a="Error during file restoration. Please try again later.",h.show({message:a,color:"red"})}})},processing:o}}const w=({restoreIds:t})=>{const{data:s,setData:r,restoreFilesSubmit:o,processing:l}=E(),{modals:n,closeModal:i}=m();return F.useEffect(()=>{r({ids:t||[]})},[t,r]),e.jsx(j,{opened:n.restoreFiles,onClose:()=>i("restoreFiles"),title:e.jsx(d,{fw:"bold",size:"lg",children:"Restore Files"}),size:550,children:e.jsxs("form",{onSubmit:o,children:[e.jsx(d,{c:"dimmed",children:"Restore selected files?"}),e.jsxs(f,{align:"center",justify:"end",mt:16,children:[e.jsx(c,{variant:"subtle",onClick:()=>i("restoreFiles"),color:"gray",children:"Cancel"}),e.jsx(c,{ml:12,type:"submit",loading:l,color:"green",children:"Confirm Restore"})]})]})})},O=({selectedIds:t})=>{const{openModal:s}=m();return e.jsxs(u,{h:"50%",px:"md",align:"center",justify:"flex-start",children:[e.jsx(c,{variant:"subtle",color:"dark.3",leftSection:e.jsx(S,{size:18}),onClick:()=>s("permanentDelete"),children:"Delete Forever"}),e.jsx(c,{variant:"subtle",color:"green",leftSection:e.jsx(D,{size:18}),onClick:()=>s("restoreFiles"),children:"Restore"}),e.jsx(z,{deleteIds:t}),e.jsx(w,{restoreIds:t})]})},P=()=>e.jsx(u,{h:"50%",px:"md",align:"center",justify:"flex-start",children:e.jsx(c,{variant:"subtle",color:"dark.3",leftSection:e.jsx(T,{size:18}),children:"Empty Bin"})});function oe({trashedItems:t}){const{selectedRecord:s,setSelectedRecord:r,ids:o}=C();return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Trash"}),e.jsxs(v,{toolbar:s.length>0?e.jsx(O,{selectedIds:o}):e.jsx(P,{}),children:[e.jsx(x,{title:"My Files"}),e.jsxs(M,{px:8,gap:24,py:8,style:{pointerEvents:"all"},children:[e.jsx(d,{fw:500,children:"Trash"}),t.length===0?e.jsx(d,{size:"lg",c:"gray.5",children:"This trash bin is empty"}):e.jsx(k,{textSelectionDisabled:!0,columns:[{accessor:"name",render:({mime:l,type:n,name:i})=>e.jsxs(u,{align:"center",gap:12,children:[e.jsx(R,{mime:l,isFolder:n==="folder"}),e.jsx("span",{children:i})]})},{accessor:"deleted_at"}],records:t,highlightOnHover:!0,verticalSpacing:"lg",horizontalSpacing:"xl",selectedRecords:s,onSelectedRecordsChange:r})]})]})]})}export{oe as default};
