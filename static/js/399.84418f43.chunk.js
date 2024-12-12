"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[399],{48927:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(7552),a=r(49823),o=r(29499),i=r(68446),l=r(13476),s=r(99546),c=r(28237),d=r(76157),m=r(42489),u=r(36422),p=r(75785),h=r(374),f=r(31892),v=r(16217),g=r(89003),w=r(61723),b=r(48171),k=r(36715),E=r(98360);const A=(0,p.n9)()((e=>({facet:{margin:0,marginLeft:e.spacing(2)},select:{marginBottom:e.spacing(2)}})));function y({onClick:e}){return n.createElement(g.A,{title:"Clear selection on this facet filter"},n.createElement(w.A,{onClick:()=>{e()},size:"small"},n.createElement(f.A,null)))}function C({visible:e,onClick:t}){return n.createElement(g.A,{title:"Minimize/expand this facet filter"},n.createElement(w.A,{onClick:()=>{t()},size:"small"},e?n.createElement(v.A,null):n.createElement(h.A,null)))}const S=(0,i.observer)((function({column:e,vals:t,model:r}){const{classes:a}=A(),[o,i]=(0,n.useState)(!0),{faceted:l}=r,{filters:c}=l,{field:d}=e;return n.createElement(b.A,{className:a.facet,fullWidth:!0},n.createElement("div",null,n.createElement(k.A,{component:"span"},d),n.createElement(y,{onClick:()=>{l.setFilter(d,[])}}),n.createElement(C,{visible:o,onClick:()=>{i(!o)}})),o?n.createElement(E.A,{multiple:!0,native:!0,className:a.select,value:c.get(e.field)||[],onChange:t=>{l.setFilter(e.field,[...t.target.options].filter((e=>e.selected)).map((e=>e.value)))}},t.sort(((e,t)=>e[0].localeCompare(t[0]))).map((([e,t])=>n.createElement("option",{key:e,value:e},(0,s.coarseStripHTML)(e)," (",t,")")))):null)}));var x=r(6842);const M=(0,i.observer)((function({rows:e,columns:t,model:r}){const{faceted:a}=r,{filters:o}=a,i=t.slice(1),l=new Map(i.map((e=>[e.field,new Map]))),s=a.filters.keys(),c=i.map((e=>e.field)),d=new Set;for(const e of s)o.get(e)?.length&&d.add(e);for(const e of c)d.add(e);let m=e;for(const e of d){const t=l.get(e);for(const r of m){const n=(0,x.a)(e,r),a=t.get(n);n&&(void 0===a?t.set(n,1):t.set(n,a+1))}const r=o.get(e)?.length?new Set(o.get(e)):void 0;m=m.filter((t=>void 0===r||r.has((0,x.a)(e,t))))}return n.createElement("div",null,i.map((e=>n.createElement(S,{key:e.field,vals:[...l.get(e.field)],column:e,model:r}))))}));var T=r(17307),R=r(67314),H=r(1343),L=r(93117),N=r(9469);function W({model:e}){const{faceted:t}=e,[r,o]=(0,n.useState)(null),{showOptions:i,showFilters:l,showSparse:s,useShoppingCart:c}=t;return n.createElement(n.Fragment,null,n.createElement(R.Ay,{container:!0,spacing:4,alignItems:"center"},n.createElement(R.Ay,{item:!0},n.createElement(H.A,{label:"Search...",value:t.filterText,onChange:e=>{t.setFilterText(e.target.value)},slotProps:{input:{endAdornment:n.createElement(L.A,{position:"end"},n.createElement(w.A,{onClick:()=>{t.setFilterText("")}},n.createElement(f.A,null)))}}})),n.createElement(R.Ay,{item:!0},n.createElement(w.A,{onClick:e=>{o(e.currentTarget)}},n.createElement(T.A,null))),n.createElement(R.Ay,{item:!0},n.createElement(N.A,{model:e}))),n.createElement(a.Menu,{anchorEl:r,open:!!r,onClose:()=>{o(null)},onMenuItemClick:(e,t)=>{t(),o(null)},menuItems:[{label:"Add tracks to selection instead of turning them on/off",onClick:()=>{t.setUseShoppingCart(!c)},type:"checkbox",checked:c},{label:"Show sparse metadata columns",onClick:()=>{t.setShowSparse(!s)},checked:s,type:"checkbox"},{label:"Show facet filters",onClick:()=>{t.setShowFilters(!l)},checked:l,type:"checkbox"},{label:"Show extra table options",onClick:()=>{t.setShowOptions(!i)},checked:i,type:"checkbox"}]}))}var $=r(26027);const F=(0,p.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},resizeHandle:{marginLeft:5,background:"grey",width:5}}),P=.75,D=(0,i.observer)((function({model:e}){const{classes:t}=F(),{view:r,selection:o,shownTrackIds:i,faceted:p}=e,{rows:h,panelWidth:f,showFilters:v,useShoppingCart:g,showOptions:w,filteredRows:b,filteredNonMetadataKeys:k,filteredMetadataKeys:E,visible:A}=p,{pluginManager:y}=(0,s.getEnv)(e),[C,S]=(0,n.useState)({name:(0,s.measureGridWidth)(h.map((e=>e.name)),{maxWidth:500,stripHTML:!0})+15,...Object.fromEntries(k.filter((e=>A[e])).map((e=>[e,(0,s.measureGridWidth)(h.map((t=>t[e])),{maxWidth:400,stripHTML:!0})]))),...Object.fromEntries(E.filter((e=>A[`metadata.${e}`])).map((e=>[`metadata.${e}`,(0,s.measureGridWidth)(h.map((t=>t.metadata[e])),{maxWidth:400,stripHTML:!0})])))}),x=[{field:"name",hideable:!1,renderCell:r=>{const{value:a,row:o}=r,{id:i,conf:s}=o;return n.createElement("div",{className:t.cell},n.createElement(l.A,{html:a}),n.createElement($.A,{id:i,conf:s,trackId:i,model:e}))},width:C.name??100},...k.map((e=>({field:e,width:C[e]??100,renderCell:e=>{const r=e.value;return r?n.createElement(l.A,{className:t.cell,html:r}):""}}))),...E.map((e=>({field:`metadata.${e}`,headerName:["name",...k].includes(e)?`${e} (from metadata)`:e,width:C[`metadata.${e}`]??100,valueGetter:(t,r)=>`${r.metadata[e]??""}`,renderCell:e=>{const r=e.value;return r?n.createElement(l.A,{className:t.cell,html:r}):""}})))];return n.createElement(n.Fragment,null,n.createElement(W,{model:e}),n.createElement("div",{style:{display:"flex",overflow:"hidden",height:window.innerHeight*P,width:window.innerWidth*P}},n.createElement("div",{style:{height:window.innerHeight*P,width:window.innerWidth*P-(v?f:0)}},n.createElement(c.z,{rows:b,onColumnWidthChange:e=>{S({...C,[e.colDef.field]:e.width})},columnVisibilityModel:A,onColumnVisibilityModelChange:e=>{p.setVisible(e)},columnHeaderHeight:35,checkboxSelection:!0,disableRowSelectionOnClick:!0,keepNonExistentRowsSelected:!0,onRowSelectionModelChange:t=>{if(g){const r=(0,u.getRoot)(e),n=y.pluggableConfigSchemaType("track");e.setSelection(t.map((e=>(0,u.resolveIdentifier)(n,r,e))))}else{const n=i,a=new Set(t);(0,m.transaction)((()=>{[...n].filter((e=>!a.has(e))).map((e=>r.hideTrack(e))),[...a].filter((e=>!n.has(e))).map((t=>{r.showTrack(t),e.addToRecentlyUsed(t)}))}))}},rowSelectionModel:g?o.map((e=>e.trackId)):[...i],slots:{toolbar:w?d.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:x,rowHeight:25})),v?n.createElement(n.Fragment,null,n.createElement(a.ResizeHandle,{vertical:!0,onDrag:e=>p.setPanelWidth(f-e),className:t.resizeHandle}),n.createElement("div",{style:{width:f,overflow:"auto"}},n.createElement(M,{model:e,rows:h,columns:x}))):null))})),I=(0,i.observer)((function(e){const{handleClose:t}=e;return n.createElement(a.Dialog,{open:!0,onClose:t,maxWidth:"xl",title:"Faceted track selector"},n.createElement(o.A,null,n.createElement(D,e)))}))},59705:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(7552),a=r(93878),o=r(70799),i=r(64761),l=r(51148),s=r(84893),c=r(4785),d=r(15622),m=r(58520),u=r(72489),p=r(69500);const h=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,f=i.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,v="string"!=typeof h?i.AH`
        animation: ${h} 1.4s linear infinite;
      `:null,g="string"!=typeof f?i.AH`
        animation: ${f} 1.4s ease-in-out infinite;
      `:null,w=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.A)(r.color)}`]]}})((0,s.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:v||{animation:`${h} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,m.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),b=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),k=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,d.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,s.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:g||{animation:`${f} 1.4s ease-in-out infinite`}}]})))),E=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:l=!1,size:s=40,style:m,thickness:h=3.6,value:f=0,variant:v="indeterminate",...g}=r,E={...r,color:i,disableShrink:l,size:s,thickness:h,value:f,variant:v},A=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,i={root:["root",r,`color${(0,d.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(r)}`,a&&"circleDisableShrink"]};return(0,o.A)(i,u.b,t)})(E),y={},C={},S={};if("determinate"===v){const e=2*Math.PI*((44-h)/2);y.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(f),y.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,p.jsx)(w,{className:(0,a.A)(A.root,n),style:{width:s,height:s,...C,...m},ownerState:E,ref:t,role:"progressbar",...S,...g,children:(0,p.jsx)(b,{className:A.svg,ownerState:E,viewBox:"22 22 44 44",children:(0,p.jsx)(k,{className:A.circle,style:y,ownerState:E,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>i,b:()=>o});var n=r(33761),a=r(85693);function o(e){return(0,a.Ay)("MuiCircularProgress",e)}const i=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},88215:(e,t,r)=>{r.d(t,{x:()=>c});var n=r(7552),a=r(29527),o=r(89887),i=r(99305),l=r(87995);function s(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:m="onTouchEnd"}=e,u=n.useRef(!1),p=n.useRef(null),h=n.useRef(!1),f=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{h.current=!0}),0),()=>{h.current=!1})),[]);const v=(0,a.A)((0,l.A)(t),p),g=(0,o.A)((e=>{const t=f.current;f.current=!1;const n=(0,i.A)(p.current);if(!h.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(u.current)return void(u.current=!1);let a;a=e.composedPath?e.composedPath().includes(p.current):!n.documentElement.contains(e.target)||p.current.contains(e.target),a||!r&&t||d(e)})),w=e=>r=>{f.current=!0;const n=t.props[e];n&&n(r)},b={ref:v};return!1!==m&&(b[m]=w(m)),n.useEffect((()=>{if(!1!==m){const e=s(m),t=(0,i.A)(p.current),r=()=>{u.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",r)}}}),[g,m]),!1!==c&&(b[c]=w(c)),n.useEffect((()=>{if(!1!==c){const e=s(c),t=(0,i.A)(p.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}}),[g,c]),n.cloneElement(t,b)}},17515:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(7552),a=r(93878),o=r(70799),i=r(51148),l=r(84893),s=r(4785),c=r(89663),d=r(69500);const m=(0,i.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((0,l.A)((({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]})))),u=n.forwardRef((function(e,t){const r=(0,s.b)({props:e,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:l=!1,variant:u="regular",...p}=r,h={...r,component:i,disableGutters:l,variant:u},f=(e=>{const{classes:t,disableGutters:r,variant:n}=e,a={root:["root",!r&&"gutters",n]};return(0,o.A)(a,c.U,t)})(h);return(0,d.jsx)(m,{as:i,className:(0,a.A)(f.root,n),ref:t,ownerState:h,...p})}))},89663:(e,t,r)=>{r.d(t,{A:()=>i,U:()=>o});var n=r(33761),a=r(85693);function o(e){return(0,a.Ay)("MuiToolbar",e)}const i=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=399.84418f43.chunk.js.map