"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4144],{35300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(7552),r=n(503),l=n.n(r),i=n(75785),c=n(28055),s=n(36441);const o=(0,i.n9)()((e=>({field:{display:"flex",flexWrap:"wrap"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),border:`1px solid ${e.palette.action.selected}`,boxSizing:"border-box",overflow:"auto"}})));function m({name:e,value:t,description:n,prefix:r=[]}){const{classes:i}=o();return 1===t.length?l()(t[0])?a.createElement(O,{attributes:t[0],prefix:[...r,e]}):a.createElement("div",{className:i.field},a.createElement(s.A,{prefix:r,description:n,name:e}),a.createElement(c.A,{value:t[0]})):t.every((e=>l()(e)))?a.createElement(a.Fragment,null,t.map(((t,n)=>a.createElement(O,{key:`${JSON.stringify(t)}-${n}`,attributes:t,prefix:[...r,`${e}-${n}`]})))):a.createElement("div",{className:i.field},a.createElement(s.A,{prefix:r,description:n,name:e}),t.map(((e,t)=>a.createElement("div",{key:`${JSON.stringify(e)}-${t}`,className:i.fieldSubvalue},a.createElement(c.A,{value:e})))))}var u=n(33371),d=n(32808),f=n(36715),p=n(28237),E=n(76157),g=n(49823),v=n(99546);const b=(0,i.n9)()((e=>({margin:{marginBottom:e.spacing(4)},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})));function h({value:e,prefix:t,name:n}){const{classes:r}=b(),[l,i]=(0,a.useState)(!1),c=Object.keys(e[0]).sort(),o=new Set(c),m=Object.entries(e).map((([e,t])=>{const{id:n,...a}=t;return{id:e,identifier:n,...a}}));for(const t of e)for(const e of Object.keys(t))o.add(e);let h;o.has("id")?(o.delete("id"),h=["identifier",...o]):h=[...o];const x=h.map((e=>(0,v.measureGridWidth)(m.map((t=>t[e])))));return o.size<c.length+5?a.createElement("div",{className:r.margin},a.createElement(s.A,{prefix:t,name:n}),a.createElement(u.A,{control:a.createElement(d.A,{checked:l,onChange:e=>{i(e.target.checked)}}),label:a.createElement(f.A,{variant:"body2"},"Show options")}),a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.createElement(p.z,{disableRowSelectionOnClick:!0,rows:m,rowHeight:20,columnHeaderHeight:35,hideFooter:m.length<25,slots:{toolbar:l?E.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:h.map(((e,t)=>({field:e,renderCell:e=>{const t=e.value;return a.createElement("div",{className:r.cell},a.createElement(g.SanitizedHTML,{html:(0,v.getStr)(t||"")}))},width:x[t]})))}))):null}var x=n(32106);const y=(0,i.n9)()({field:{display:"flex",flexWrap:"wrap"}});function w({value:e,prefix:t,name:n}){const{classes:r}=y(),{uri:l,baseUri:i=""}=e;let o;try{o=new URL(l,i).href}catch(e){o=l}return a.createElement("div",{className:r.field},a.createElement(s.A,{prefix:t,name:n}),a.createElement(c.A,{value:o}))}var A=n(1178);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(null,arguments)}const S=170,N=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"];function O(e){const{attributes:t,omit:n=[],omitSingleLevel:r=[],descriptions:i,formatter:c=e=>e,hideUris:s,prefix:o=[]}=e,u=new Set([...n,...N,...r]),{__jbrowsefmt:d,...f}=t,p={...f,...d},E=(0,A.kb)(Object.entries(p).filter((([e,t])=>void 0!==t&&!u.has(e))),o);return a.createElement(a.Fragment,null,Object.entries(p).filter((([e,t])=>void 0!==t&&!u.has(e))).map((([t,n])=>{const r=(0,A.wh)([...o,t],i);if(Array.isArray(n))return n.length>1&&n.every((e=>l()(e)))?a.createElement(h,{key:t,name:t,prefix:o,value:n}):a.createElement(m,{key:t,name:t,value:n,description:r,prefix:o});if(l()(n)){const{omitSingleLevel:r,...l}=e;return(0,v.isUriLocation)(n)?s?null:a.createElement(w,{key:t,name:t,prefix:o,value:n}):a.createElement(O,k({key:t},l,{attributes:n,descriptions:i,prefix:[...o,t]}))}return a.createElement(x.A,{key:t,name:t,value:c(n,t),description:r,prefix:o,width:Math.min(E,S)})})))}},87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(7552),r=n(7720),l=n(63011),i=n(41578),c=n(36715),s=n(63165);const o=(0,n(75785).n9)()((e=>({expansionPanelDetails:{display:"block",padding:e.spacing(1)},icon:{color:e.palette.tertiary.contrastText||"#fff"}})));function m({children:e,title:t,defaultExpanded:n=!0}){const{classes:m}=o();return a.createElement(l.A,{defaultExpanded:n},a.createElement(i.A,{expandIcon:a.createElement(r.A,{className:m.icon})},a.createElement(c.A,{variant:"button"},t)),a.createElement(s.A,{className:m.expansionPanelDetails},e))}},28055:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(7552),r=n(87731),l=n(503),i=n.n(l),c=n(75785),s=n(49823);const o=(0,c.n9)()((e=>({fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}})));function m({value:e}){const{classes:t}=o(),n=/^https?:\/\//.exec(`${e}`);return a.createElement("div",{className:t.fieldValue},a.isValidElement(e)?e:n?a.createElement(r.A,{href:`${e}`},`${e}`):a.createElement(s.SanitizedHTML,{html:i()(e)?JSON.stringify(e):String(e)}))}},62568:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(7552),r=n(99546);function l(e){const{feature:t}=e,n=t.strand,l={"-1":"-",0:"",1:"+"},i=l[n]?`(${l[n]})`:"",c=(0,r.assembleLocString)(t);return a.createElement(a.Fragment,null,`${c} ${i}`)}var i=n(32106);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(null,arguments)}function s(e){const{feature:t}=e,n=t,s={...n,...n.__jbrowsefmt},{start:o,end:m}=s,u={...s,length:(0,r.toLocale)(m-o)};return a.createElement(a.Fragment,null,a.createElement(i.A,{name:"Position",value:a.createElement(l,c({},e,{feature:s}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((([e,t])=>[t,u[e]])).filter((([,e])=>null!=e)).map((([e,t])=>a.createElement(i.A,{key:e,name:e,value:t}))))}},84144:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(7552),r=n(57468),l=n(36715),i=n(24387),c=n(1178),s=n(25914),o=n(48171),m=n(5401),u=n(61723),d=n(68446),f=n(75785),p=n(49823),E=n(99546);const g=(0,a.lazy)((()=>n.e(7428).then(n.bind(n,27428)))),v=(0,a.lazy)((()=>n.e(8624).then(n.bind(n,38624)))),b=(0,f.n9)()((e=>({formControl:{margin:0},container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}))),h=(0,d.observer)((function({model:e,feature:t}){const{classes:n}=b(),[r,l]=(0,a.useState)(!1);return a.createElement("div",{className:n.container},a.createElement(o.A,{className:n.formControl},a.createElement(m.A,{variant:"contained",onClick:()=>{l(!r)}},r?"Hide feature sequence":"Show feature sequence")),a.createElement(u.A,{onClick:()=>{(0,E.getSession)(e).queueDialog((e=>[v,{handleClose:e}]))}},a.createElement(s.A,null)),r?a.createElement(a.Suspense,{fallback:a.createElement(p.LoadingEllipses,null)},a.createElement(g,{key:t.uniqueId,model:e,feature:t})):null)}));var x=n(35300),y=n(87083),w=n(62568);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A.apply(null,arguments)}const k=["name","start","end","strand","refName","description","type"];function S(e){const{omit:t=[],model:n,feature:s,depth:o=0}=e,{maxDepth:m}=n,{mate:u,name:d="",id:f="",type:g="",subfeatures:v,uniqueId:b}=s,N=(0,E.getEnv)(n).pluginManager,O=(0,E.getSession)(n),j=N.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:O,feature:s,model:n}),$=u;return a.createElement(y.default,{title:(0,c.KS)(d,f,g)},a.createElement(l.A,null,"Core details"),a.createElement(w.A,e),$?a.createElement(a.Fragment,null,a.createElement(i.A,null),a.createElement(l.A,null,"Mate details"),a.createElement(w.A,A({},e,{feature:{...$,start:$.start,end:$.end,refName:$.refName,uniqueId:`${b}-mate`}}))):null,a.createElement(i.A,null),a.createElement(l.A,null,"Attributes"),a.createElement(x.default,A({attributes:s},e,{omit:t,omitSingleLevel:k})),a.createElement(r.t,{FallbackComponent:e=>a.createElement(p.ErrorMessage,{error:e.error})},a.createElement(h,e)),j?a.createElement(a.Fragment,null,a.createElement(i.A,null),a.createElement(y.default,{title:j.name},a.createElement(j.Component,e))):null,o<m&&v?.length?a.createElement(y.default,{title:"Subfeatures",defaultExpanded:o<1},v.map(((e,t)=>a.createElement(S,{key:JSON.stringify(e),feature:{...e,uniqueId:`${b}_${t}`},model:n,depth:o+1})))):null)}},36441:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(7552),r=n(89003);const l=(0,n(75785).n9)()((e=>({fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}})));function i({description:e,name:t,width:n,prefix:i=[]}){const{classes:c,cx:s}=l(),o=[...i,t].join(".");return e?a.createElement(r.A,{title:e,placement:"left"},a.createElement("div",{className:s(c.fieldDescription,c.fieldName)},o)):a.createElement("div",{className:c.fieldName,style:{width:n}},o)}},32106:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(7552),r=n(75785),l=n(28055),i=n(36441);const c=(0,r.n9)()({field:{display:"flex",flexWrap:"wrap"}});function s({name:e,value:t,description:n,prefix:r,width:s}){const{classes:o}=c();return null!=t?a.createElement("div",{className:o.field},a.createElement(i.A,{prefix:r,description:n,name:e,width:s}),a.createElement(l.A,{value:t})):null}},1178:(e,t,n)=>{n.d(t,{Im:()=>c,KS:()=>s,kb:()=>o,wh:()=>m});var a=n(503),r=n.n(a),l=n(99546),i=n(373);function c(e){return 0===Object.keys(e).length}function s(e,t,n){return[(0,i.SX)(`${e||t||""}`),`${n}`].filter((e=>!!e)).join(" - ")}function o(e,t){return Math.ceil((0,l.max)(e.map((e=>(0,l.measureText)([...t,e[0]].join("."),12)))))+10}function m(e,t={}){let n=t;return e.forEach((e=>{r()(n)&&(n=n[e])})),"string"==typeof n?n:r()(n)&&"string"==typeof n.Description?n.Description:void 0}}}]);
//# sourceMappingURL=4144.012c2b31.chunk.js.map