import{c as u}from"./IconUser-CqDa0PVn.js";import{a as t,b as m}from"./app-CGxvGAM1.js";/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h=u("outline","table","IconTable",[["path",{d:"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",key:"svg-0"}],["path",{d:"M3 10h18",key:"svg-1"}],["path",{d:"M10 3v18",key:"svg-2"}]]);function x({folderId:a,isOpen:s}){const[c,r]=t.useState([]),[i,n]=t.useState(!1),[l,o]=t.useState(null);return t.useEffect(()=>{a&&s&&(async()=>{n(!0);try{const e=await m.get(`/folder/${a}/metadata_columns`);r(e.data.metadata_columns),o(null)}catch(e){o("Failed to fetch existing metadata columns."),console.error(e)}finally{n(!1)}})()},[a,s]),{existingMetadataColumns:c,loading:i,error:l}}export{h as I,x as u};
