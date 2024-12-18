import{c as m}from"./IconUser-XmEDWUCl.js";import{d as t,e as h}from"./app-CxnqOemo.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=m("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);function I(o,s){const[n,c]=t.useState({itemParent:null,itemAncestors:null,itemContents:[]}),[l,a]=t.useState(!1),[i,r]=t.useState(null);t.useEffect(()=>{s&&u(o)},[o,s]);const u=async f=>{a(!0),r(null);try{const e=await h.get(route("item.showItems",{item:f}));c(e.data)}catch(e){r("Failed to fetch items."),console.error(e)}finally{a(!1)}};return{data:n,loading:l,error:i}}export{v as I,I as u};
