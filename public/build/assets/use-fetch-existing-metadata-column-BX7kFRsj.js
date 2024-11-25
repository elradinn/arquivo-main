import{c}from"./IconUser-BqmWWyqY.js";import{b as a,c as u}from"./app-o_n_Q1_4.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=c("outline","download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=c("outline","table","IconTable",[["path",{d:"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",key:"svg-0"}],["path",{d:"M3 10h18",key:"svg-1"}],["path",{d:"M10 3v18",key:"svg-2"}]]);function p({folderId:t,isOpen:s}){const[l,r]=a.useState([]),[i,o]=a.useState(!1),[d,n]=a.useState(null);return a.useEffect(()=>{t&&s&&(async()=>{o(!0);try{const e=await u.get(`/folder/${t}/metadata_columns`);r(e.data.metadata_columns),n(null)}catch(e){n("Failed to fetch existing metadata columns."),console.error(e)}finally{o(!1)}})()},[t,s]),{existingMetadataColumns:l,loading:i,error:d}}export{f as I,v as a,p as u};
