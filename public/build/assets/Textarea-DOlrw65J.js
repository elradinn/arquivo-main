import{b as s,_ as A,I as j,f as k,u as B,j as N}from"./app-D_sGyMKs.js";import{I as T}from"./InputBase-BsilGFdQ.js";var P={};function M(){return typeof process<"u"&&P?"production":"development"}var $=s.useLayoutEffect,O=function(e){var t=s.useRef(e);return $(function(){t.current=e}),t},R=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},Y=function(e,t){var r=s.useRef();return s.useCallback(function(i){e.current=i,r.current&&R(r.current,null),r.current=t,t&&R(t,i)},[t])},L={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},G=function(e){Object.keys(L).forEach(function(t){e.style.setProperty(t,L[t],"important")})},w=G,o=null,H=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function U(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),w(o)),o.parentNode===null&&document.body.appendChild(o);var i=n.paddingSize,u=n.borderSize,a=n.sizingStyle,f=a.boxSizing;Object.keys(a).forEach(function(p){var v=p;o.style[v]=a[v]}),w(o),o.value=e;var d=H(o,n);o.value=e,d=H(o,n),o.value="x";var c=o.scrollHeight-i,l=c*t;f==="border-box"&&(l=l+i+u),d=Math.max(l,d);var g=c*r;return f==="border-box"&&(g=g+i+u),d=Math.min(g,d),[d,c]}var E=function(){},X=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},Z=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],q=!!document.documentElement.currentStyle,D=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=X(Z,t),i=r.boxSizing;if(i==="")return null;q&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var u=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),a=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:u,borderSize:a}},J=D;function C(n,e,t){var r=O(t);s.useLayoutEffect(function(){var i=function(a){return r.current(a)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var K=function(e){C(window,"resize",e)},Q=function(e){C(document.fonts,"loadingdone",e)},V=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],ee=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,u=e.minRows,a=e.onChange,f=a===void 0?E:a,d=e.onHeightChange,c=d===void 0?E:d,l=A(e,V),g=l.value!==void 0,p=s.useRef(null),v=Y(p,t),z=s.useRef(0),b=s.useRef(),m=function(){var h=p.current,S=r&&b.current?b.current:J(h);if(S){b.current=S;var y=U(S,h.value||h.placeholder||"x",u,i),x=y[0],I=y[1];z.current!==x&&(z.current=x,h.style.setProperty("height",x+"px","important"),c(x,{rowHeight:I}))}},F=function(h){g||m(),f(h)};return s.useLayoutEffect(m),K(m),Q(m),s.createElement("textarea",j({},l,{onChange:F,ref:v}))},te=s.forwardRef(ee);const re={},_=k((n,e)=>{const{autosize:t,maxRows:r,minRows:i,__staticSelector:u,resize:a,...f}=B("Textarea",re,n),d=t&&M()!=="test",c=d?{maxRows:r,minRows:i}:{};return N.jsx(T,{component:d?te:"textarea",ref:e,...f,__staticSelector:u||"Textarea",multiline:!0,"data-no-overflow":t&&r===void 0||void 0,__vars:{"--input-resize":a},...c})});_.classes=T.classes;_.displayName="@mantine/core/Textarea";export{_ as T};
