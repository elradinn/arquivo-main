import{b as u,y as h}from"./app-DlxKuYZb.js";function g(t){const[r,e]=u.useState(t);return{page:r,setPage:e,handlePageChange:(s,a)=>{var o;e(s);const c=(o=a.find(l=>l.label===s.toString()))==null?void 0:o.url;c&&h.visit(c)}}}function S(t="",r){const[e,n]=u.useState(t);return{search:e,setSearch:n,handleSearch:a=>{n(a),h.get(r,{search:a},{preserveState:!0,replace:!0})}}}export{g as a,S as u};
