import{c as d}from"./IconUser-CvGZT8Us.js";import{c as s}from"./app-DHbb7XZB.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h=d("outline","table","IconTable",[["path",{d:"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",key:"svg-0"}],["path",{d:"M3 10h18",key:"svg-1"}],["path",{d:"M10 3v18",key:"svg-2"}]]);function m(){return{generateReport:async a=>{var o;try{const r=await s.post(route("report.generate"),{folder_item_id:a}),{url:t,filename:n}=r.data;if(t){const e=document.createElement("a");e.href=t,e.download=n,document.body.appendChild(e),e.click(),document.body.removeChild(e)}else console.error("No URL returned for the report.")}catch(r){console.error("Error generating report:",((o=r.response)==null?void 0:o.data)||r.message)}},generateDashboardReport:async a=>{var o;try{const r=await s.post(route("report.generateDashboard"),a),{url:t,filename:n}=r.data;if(t){const e=document.createElement("a");e.href=t,e.download=n,document.body.appendChild(e),e.click(),document.body.removeChild(e)}else console.error("No URL returned for the dashboard report.")}catch(r){console.error("Error generating dashboard report:",((o=r.response)==null?void 0:o.data)||r.message)}}}}export{h as I,m as u};
