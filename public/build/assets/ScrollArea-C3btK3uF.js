import{b as c,x as Z,Z as ie,j as m,u as F,i as W,B as H,f as G,d as ue,e as de,r as fe}from"./app-DHbb7XZB.js";import{a as he}from"./Popover-DHSW6Xue.js";function j(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...o)=>{var n;return(n=t.current)==null?void 0:n.call(t,...o)},[])}function X(e,t){const o=j(e),n=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(n.current),[]),c.useCallback((...r)=>{window.clearTimeout(n.current),n.current=window.setTimeout(()=>o(...r),t)},[o,t])}const[be,x]=Z("ScrollArea.Root component was not found in tree");function L(e,t){const o=j(t);ie(()=>{let n=0;if(e){const r=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(o)});return r.observe(e),()=>{window.cancelAnimationFrame(n),r.unobserve(e)}}},[e,o])}const me=c.forwardRef((e,t)=>{const{style:o,...n}=e,r=x(),[s,l]=c.useState(0),[a,f]=c.useState(0),u=!!(s&&a);return L(r.scrollbarX,()=>{var h;const i=((h=r.scrollbarX)==null?void 0:h.offsetHeight)||0;r.onCornerHeightChange(i),f(i)}),L(r.scrollbarY,()=>{var h;const i=((h=r.scrollbarY)==null?void 0:h.offsetWidth)||0;r.onCornerWidthChange(i),l(i)}),u?m.jsx("div",{...n,ref:t,style:{...o,width:s,height:a}}):null}),Se=c.forwardRef((e,t)=>{const o=x(),n=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&n?m.jsx(me,{...e,ref:t}):null}),pe={scrollHideDelay:1e3,type:"hover"},J=c.forwardRef((e,t)=>{const o=F("ScrollAreaRoot",pe,e),{type:n,scrollHideDelay:r,scrollbars:s,...l}=o,[a,f]=c.useState(null),[u,i]=c.useState(null),[h,b]=c.useState(null),[d,p]=c.useState(null),[E,g]=c.useState(null),[v,C]=c.useState(0),[P,R]=c.useState(0),[D,T]=c.useState(!1),[y,S]=c.useState(!1),w=W(t,A=>f(A));return m.jsx(be,{value:{type:n,scrollHideDelay:r,scrollArea:a,viewport:u,onViewportChange:i,content:h,onContentChange:b,scrollbarX:d,onScrollbarXChange:p,scrollbarXEnabled:D,onScrollbarXEnabledChange:T,scrollbarY:E,onScrollbarYChange:g,scrollbarYEnabled:y,onScrollbarYEnabledChange:S,onCornerWidthChange:C,onCornerHeightChange:R},children:m.jsx(H,{...l,ref:w,__vars:{"--sa-corner-width":s!=="xy"?"0px":`${v}px`,"--sa-corner-height":s!=="xy"?"0px":`${P}px`}})})});J.displayName="@mantine/core/ScrollAreaRoot";function K(e,t){const o=e/t;return Number.isNaN(o)?0:o}function Y(e){const t=K(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-o)*t;return Math.max(n,18)}function Q(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(o-e[0])}}function ve(e,[t,o]){return Math.min(o,Math.max(t,e))}function q(e,t,o="ltr"){const n=Y(t),r=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-r,l=t.content-t.viewport,a=s-n,f=o==="ltr"?[0,l]:[l*-1,0],u=ve(e,f);return Q([0,l],[0,a])(u)}function we(e,t,o,n="ltr"){const r=Y(o),s=r/2,l=t||s,a=r-l,f=o.scrollbar.paddingStart+l,u=o.scrollbar.size-o.scrollbar.paddingEnd-a,i=o.content-o.viewport,h=n==="ltr"?[0,i]:[i*-1,0];return Q([f,u],h)(e)}function ee(e,t){return e>0&&e<t}function M(e){return e?parseInt(e,10):0}function z(e,t,{checkForDefaultPrevented:o=!0}={}){return n=>{e==null||e(n),(o===!1||!n.defaultPrevented)&&(t==null||t(n))}}const[ge,oe]=Z("ScrollAreaScrollbar was not found in tree"),te=c.forwardRef((e,t)=>{const{sizes:o,hasThumb:n,onThumbChange:r,onThumbPointerUp:s,onThumbPointerDown:l,onThumbPositionChange:a,onDragScroll:f,onWheelScroll:u,onResize:i,...h}=e,b=x(),[d,p]=c.useState(null),E=W(t,S=>p(S)),g=c.useRef(null),v=c.useRef(""),{viewport:C}=b,P=o.content-o.viewport,R=j(u),D=j(a),T=X(i,10),y=S=>{if(g.current){const w=S.clientX-g.current.left,A=S.clientY-g.current.top;f({x:w,y:A})}};return c.useEffect(()=>{const S=w=>{const A=w.target;(d==null?void 0:d.contains(A))&&R(w,P)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[C,d,P,R]),c.useEffect(D,[o,D]),L(d,T),L(b.content,T),m.jsx(ge,{value:{scrollbar:d,hasThumb:n,onThumbChange:j(r),onThumbPointerUp:j(s),onThumbPositionChange:D,onThumbPointerDown:j(l)},children:m.jsx("div",{...h,ref:E,"data-mantine-scrollbar":!0,style:{position:"absolute",...h.style},onPointerDown:z(e.onPointerDown,S=>{S.preventDefault(),S.button===0&&(S.target.setPointerCapture(S.pointerId),g.current=d.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y(S))}),onPointerMove:z(e.onPointerMove,y),onPointerUp:z(e.onPointerUp,S=>{S.preventDefault();const w=S.target;w.hasPointerCapture(S.pointerId)&&w.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=v.current,g.current=null})})})}),re=c.forwardRef((e,t)=>{const{sizes:o,onSizesChange:n,style:r,...s}=e,l=x(),[a,f]=c.useState(),u=c.useRef(null),i=W(t,u,l.onScrollbarXChange);return c.useEffect(()=>{u.current&&f(getComputedStyle(u.current))},[u]),m.jsx(te,{"data-orientation":"horizontal",...s,ref:i,sizes:o,style:{...r,"--sa-thumb-width":`${Y(o)}px`},onThumbPointerDown:h=>e.onThumbPointerDown(h.x),onDragScroll:h=>e.onDragScroll(h.x),onWheelScroll:(h,b)=>{if(l.viewport){const d=l.viewport.scrollLeft+h.deltaX;e.onWheelScroll(d),ee(d,b)&&h.preventDefault()}},onResize:()=>{u.current&&l.viewport&&a&&n({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:M(a.paddingLeft),paddingEnd:M(a.paddingRight)}})}})});re.displayName="@mantine/core/ScrollAreaScrollbarX";const ne=c.forwardRef((e,t)=>{const{sizes:o,onSizesChange:n,style:r,...s}=e,l=x(),[a,f]=c.useState(),u=c.useRef(null),i=W(t,u,l.onScrollbarYChange);return c.useEffect(()=>{u.current&&f(window.getComputedStyle(u.current))},[]),m.jsx(te,{...s,"data-orientation":"vertical",ref:i,sizes:o,style:{"--sa-thumb-height":`${Y(o)}px`,...r},onThumbPointerDown:h=>e.onThumbPointerDown(h.y),onDragScroll:h=>e.onDragScroll(h.y),onWheelScroll:(h,b)=>{if(l.viewport){const d=l.viewport.scrollTop+h.deltaY;e.onWheelScroll(d),ee(d,b)&&h.preventDefault()}},onResize:()=>{u.current&&l.viewport&&a&&n({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:M(a.paddingTop),paddingEnd:M(a.paddingBottom)}})}})});ne.displayName="@mantine/core/ScrollAreaScrollbarY";const N=c.forwardRef((e,t)=>{const{orientation:o="vertical",...n}=e,{dir:r}=he(),s=x(),l=c.useRef(null),a=c.useRef(0),[f,u]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),i=K(f.viewport,f.content),h={...n,sizes:f,onSizesChange:u,hasThumb:i>0&&i<1,onThumbChange:d=>{l.current=d},onThumbPointerUp:()=>{a.current=0},onThumbPointerDown:d=>{a.current=d}},b=(d,p)=>we(d,a.current,f,p);return o==="horizontal"?m.jsx(re,{...h,ref:t,onThumbPositionChange:()=>{if(s.viewport&&l.current){const d=s.viewport.scrollLeft,p=q(d,f,r);l.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:d=>{s.viewport&&(s.viewport.scrollLeft=d)},onDragScroll:d=>{s.viewport&&(s.viewport.scrollLeft=b(d,r))}}):o==="vertical"?m.jsx(ne,{...h,ref:t,onThumbPositionChange:()=>{if(s.viewport&&l.current){const d=s.viewport.scrollTop,p=q(d,f);f.scrollbar.size===0?l.current.style.opacity="0":l.current.style.opacity="1",l.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:d=>{s.viewport&&(s.viewport.scrollTop=d)},onDragScroll:d=>{s.viewport&&(s.viewport.scrollTop=b(d))}}):null});N.displayName="@mantine/core/ScrollAreaScrollbarVisible";const I=c.forwardRef((e,t)=>{const o=x(),{forceMount:n,...r}=e,[s,l]=c.useState(!1),a=e.orientation==="horizontal",f=X(()=>{if(o.viewport){const u=o.viewport.offsetWidth<o.viewport.scrollWidth,i=o.viewport.offsetHeight<o.viewport.scrollHeight;l(a?u:i)}},10);return L(o.viewport,f),L(o.content,f),n||s?m.jsx(N,{"data-state":s?"visible":"hidden",...r,ref:t}):null});I.displayName="@mantine/core/ScrollAreaScrollbarAuto";const le=c.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=x(),[s,l]=c.useState(!1);return c.useEffect(()=>{const{scrollArea:a}=r;let f=0;if(a){const u=()=>{window.clearTimeout(f),l(!0)},i=()=>{f=window.setTimeout(()=>l(!1),r.scrollHideDelay)};return a.addEventListener("pointerenter",u),a.addEventListener("pointerleave",i),()=>{window.clearTimeout(f),a.removeEventListener("pointerenter",u),a.removeEventListener("pointerleave",i)}}},[r.scrollArea,r.scrollHideDelay]),o||s?m.jsx(I,{"data-state":s?"visible":"hidden",...n,ref:t}):null});le.displayName="@mantine/core/ScrollAreaScrollbarHover";const ye=c.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=x(),s=e.orientation==="horizontal",[l,a]=c.useState("hidden"),f=X(()=>a("idle"),100);return c.useEffect(()=>{if(l==="idle"){const u=window.setTimeout(()=>a("hidden"),r.scrollHideDelay);return()=>window.clearTimeout(u)}},[l,r.scrollHideDelay]),c.useEffect(()=>{const{viewport:u}=r,i=s?"scrollLeft":"scrollTop";if(u){let h=u[i];const b=()=>{const d=u[i];h!==d&&(a("scrolling"),f()),h=d};return u.addEventListener("scroll",b),()=>u.removeEventListener("scroll",b)}},[r.viewport,s,f]),o||l!=="hidden"?m.jsx(N,{"data-state":l==="hidden"?"hidden":"visible",...n,ref:t,onPointerEnter:z(e.onPointerEnter,()=>a("interacting")),onPointerLeave:z(e.onPointerLeave,()=>a("idle"))}):null}),V=c.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=x(),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:l}=r,a=e.orientation==="horizontal";return c.useEffect(()=>(a?s(!0):l(!0),()=>{a?s(!1):l(!1)}),[a,s,l]),r.type==="hover"?m.jsx(le,{...n,ref:t,forceMount:o}):r.type==="scroll"?m.jsx(ye,{...n,ref:t,forceMount:o}):r.type==="auto"?m.jsx(I,{...n,ref:t,forceMount:o}):r.type==="always"?m.jsx(N,{...n,ref:t}):null});V.displayName="@mantine/core/ScrollAreaScrollbar";function xe(e,t=()=>{}){let o={left:e.scrollLeft,top:e.scrollTop},n=0;return function r(){const s={left:e.scrollLeft,top:e.scrollTop},l=o.left!==s.left,a=o.top!==s.top;(l||a)&&t(),o=s,n=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(n)}const se=c.forwardRef((e,t)=>{const{style:o,...n}=e,r=x(),s=oe(),{onThumbPositionChange:l}=s,a=W(t,i=>s.onThumbChange(i)),f=c.useRef(),u=X(()=>{f.current&&(f.current(),f.current=void 0)},100);return c.useEffect(()=>{const{viewport:i}=r;if(i){const h=()=>{if(u(),!f.current){const b=xe(i,l);f.current=b,l()}};return l(),i.addEventListener("scroll",h),()=>i.removeEventListener("scroll",h)}},[r.viewport,u,l]),m.jsx("div",{"data-state":s.hasThumb?"visible":"hidden",...n,ref:a,style:{width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)",...o},onPointerDownCapture:z(e.onPointerDownCapture,i=>{const b=i.target.getBoundingClientRect(),d=i.clientX-b.left,p=i.clientY-b.top;s.onThumbPointerDown({x:d,y:p})}),onPointerUp:z(e.onPointerUp,s.onThumbPointerUp)})});se.displayName="@mantine/core/ScrollAreaThumb";const B=c.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=oe();return o||r.hasThumb?m.jsx(se,{ref:t,...n}):null});B.displayName="@mantine/core/ScrollAreaThumb";const ce=c.forwardRef(({children:e,style:t,...o},n)=>{const r=x(),s=W(n,r.onViewportChange);return m.jsx(H,{...o,ref:s,style:{overflowX:r.scrollbarXEnabled?"scroll":"hidden",overflowY:r.scrollbarYEnabled?"scroll":"hidden",...t},children:m.jsx("div",{style:{minWidth:"100%",display:"table"},ref:r.onContentChange,children:e})})});ce.displayName="@mantine/core/ScrollAreaViewport";var _={root:"m_d57069b5",viewport:"m_c0783ff9",viewportInner:"m_f8f631dd",scrollbar:"m_c44ba933",thumb:"m_d8b5e363",corner:"m_21657268"};const ae={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},Pe=de((e,{scrollbarSize:t})=>({root:{"--scrollarea-scrollbar-size":fe(t)}})),U=G((e,t)=>{const o=F("ScrollArea",ae,e),{classNames:n,className:r,style:s,styles:l,unstyled:a,scrollbarSize:f,vars:u,type:i,scrollHideDelay:h,viewportProps:b,viewportRef:d,onScrollPositionChange:p,children:E,offsetScrollbars:g,scrollbars:v,onBottomReached:C,onTopReached:P,...R}=o,[D,T]=c.useState(!1),y=ue({name:"ScrollArea",props:o,classes:_,className:r,style:s,classNames:n,styles:l,unstyled:a,vars:u,varsResolver:Pe});return m.jsxs(J,{type:i==="never"?"always":i,scrollHideDelay:h,ref:t,scrollbars:v,...y("root"),...R,children:[m.jsx(ce,{...b,...y("viewport",{style:b==null?void 0:b.style}),ref:d,"data-offset-scrollbars":g===!0?"xy":g||void 0,"data-scrollbars":v||void 0,onScroll:S=>{var $;($=b==null?void 0:b.onScroll)==null||$.call(b,S),p==null||p({x:S.currentTarget.scrollLeft,y:S.currentTarget.scrollTop});const{scrollTop:w,scrollHeight:A,clientHeight:O}=S.currentTarget;w-(A-O)>=0&&(C==null||C()),w===0&&(P==null||P())},children:E}),(v==="xy"||v==="x")&&m.jsx(V,{...y("scrollbar"),orientation:"horizontal","data-hidden":i==="never"||void 0,forceMount:!0,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:m.jsx(B,{...y("thumb")})}),(v==="xy"||v==="y")&&m.jsx(V,{...y("scrollbar"),orientation:"vertical","data-hidden":i==="never"||void 0,forceMount:!0,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:m.jsx(B,{...y("thumb")})}),m.jsx(Se,{...y("corner"),"data-hovered":D||void 0,"data-hidden":i==="never"||void 0})]})});U.displayName="@mantine/core/ScrollArea";const k=G((e,t)=>{const{children:o,classNames:n,styles:r,scrollbarSize:s,scrollHideDelay:l,type:a,dir:f,offsetScrollbars:u,viewportRef:i,onScrollPositionChange:h,unstyled:b,variant:d,viewportProps:p,scrollbars:E,style:g,vars:v,onBottomReached:C,onTopReached:P,...R}=F("ScrollAreaAutosize",ae,e);return m.jsx(H,{...R,ref:t,style:[{display:"flex",overflow:"auto"},g],children:m.jsx(H,{style:{display:"flex",flexDirection:"column",flex:1},children:m.jsx(U,{classNames:n,styles:r,scrollHideDelay:l,scrollbarSize:s,type:a,dir:f,offsetScrollbars:u,viewportRef:i,onScrollPositionChange:h,unstyled:b,variant:d,viewportProps:p,vars:v,scrollbars:E,onBottomReached:C,onTopReached:P,children:o})})})});U.classes=_;k.displayName="@mantine/core/ScrollAreaAutosize";k.classes=_;U.Autosize=k;export{U as S,X as u};