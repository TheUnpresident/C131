"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4753],{44753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(7552),a=n(49823),r=n(68446),s=n(75785),i=n(99546),l=n(42489),c=n(30385);function f({model:e,onClose:t,anchorEl:n}){const r=(0,i.getContainingView)(e),{clientX:s,clientY:l,feature:c}=n;return o.createElement(a.Menu,{onMenuItemClick:(e,n)=>{n(e),t()},anchorEl:{nodeType:1,getBoundingClientRect:()=>({top:l,left:s,bottom:l,right:s,width:0,height:0,x:s,y:l,toJSON(){}})},onClose:t,open:Boolean(n),menuItems:[{label:"Center on feature",onClick:()=>{const{f:t}=c,n=t.get("start"),o=t.get("end"),a=t.get("refName"),s=t.get("mate"),l=r.views[e.level],f=r.views[e.level+1];l.navToLocString(`${a}:${n}-${o}`).catch((t=>{const n=`${l.assemblyNames[0]}:${t}`;console.error(n),(0,i.getSession)(e).notifyError(n,t)})),f.navToLocString(`${s.refName}:${s.start}-${s.end}`).catch((t=>{const n=`${f.assemblyNames[0]}:${t}`;console.error(n),(0,i.getSession)(e).notifyError(n,t)}))}}]})}var u=n(79610);const d=(0,o.lazy)((()=>n.e(7831).then(n.bind(n,47831)))),g=(0,s.n9)()({pix:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},rel:{position:"relative"},mouseoverCanvas:{position:"absolute",pointEvents:"none"},mainCanvas:{position:"absolute"}}),h=(0,r.observer)((function({model:e}){const{classes:t}=g(),{mouseoverId:n,height:a}=e,r=(0,o.useRef)(0),s=(0,i.getContainingView)(e),h=s.width,m=(0,o.useRef)(0),v=(0,o.useRef)(!1),b=(0,o.useRef)(),[C,p]=(0,o.useState)(),[M,w]=(0,o.useState)(""),[x,k]=(0,o.useState)(),[S,E]=(0,o.useState)(),[T,P]=(0,o.useState)(),[$,y]=(0,o.useState)(),I=(0,o.useRef)(),X=(0,o.useCallback)((t=>{e.setMouseoverCanvasRef(t)}),[e,a,h]),L=(0,o.useCallback)((t=>{e.setMainCanvasRef(t),I.current=t}),[e,a,h]);(0,o.useEffect)((()=>{function e(e){if(e.preventDefault(),e.ctrlKey){m.current+=e.deltaY/500;for(const e of s.views)e.setScaleFactor(m.current<0?1-m.current:1/(1+m.current));b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{for(const t of s.views)t.setScaleFactor(1),t.zoomTo(m.current>0?t.bpPerPx*(1+m.current):t.bpPerPx/(1-m.current),e.clientX-(I.current?.getBoundingClientRect().left||0));m.current=0}),300)}else Math.abs(e.deltaY)<Math.abs(e.deltaX)&&(r.current+=e.deltaX/2),v.current||(v.current=!0,window.requestAnimationFrame((()=>{(0,l.transaction)((()=>{for(const e of s.views)e.horizontalScroll(r.current);r.current=0,v.current=!1}))})))}return I.current?.addEventListener("wheel",e),()=>{I.current?.removeEventListener("wheel",e)}}),[e,a,h]);const N=(0,o.useCallback)((t=>{e.setClickMapCanvasRef(t)}),[e,a,h]),R=(0,o.useCallback)((t=>{e.setCigarClickMapCanvasRef(t)}),[e,a,h]);return o.createElement("div",{className:t.rel},o.createElement("canvas",{ref:X,width:h,height:a,className:t.mouseoverCanvas}),o.createElement("canvas",{ref:L,onMouseMove:t=>{if(void 0!==S)r.current+=S-t.clientX,E(t.clientX),v.current||(v.current=!0,window.requestAnimationFrame((()=>{(0,l.transaction)((()=>{for(const e of s.views)e.horizontalScroll(r.current);r.current=0,v.current=!1}))})));else{const n=e.clickMapCanvas,o=e.cigarClickMapCanvas;if(!n||!o)return;const a=n.getBoundingClientRect(),r=n.getContext("2d"),s=o.getContext("2d");if(!r||!s)return;const{clientX:i,clientY:l}=t,f=i-a.left,d=l-a.top;k(i),y(l);const[g,h,m]=r.getImageData(f,d,1,1).data,[v,b,C]=s.getImageData(f,d,1,1).data,p=Math.floor(c.xx/e.numFeats),M=(0,c.OX)(g,h,m,p);if(e.setMouseoverId(e.featPositions[M]?.f.id()),-1===M)w("");else if(e.featPositions[M]){const{f:t,cigar:n}=e.featPositions[M],o=Math.floor(c.xx/n.length),a=(0,c.OX)(v,b,C,o);w((0,u.Eg)({feature:t,cigarOp:n[a],cigarOpLen:n[a+1]}))}}},onMouseLeave:()=>{e.setMouseoverId(void 0),P(void 0),E(void 0)},onMouseDown:e=>{E(e.clientX),P(e.clientX)},onMouseUp:t=>{E(void 0),void 0!==T&&Math.abs(t.clientX-T)<5&&(0,u.WT)(t,e)},onContextMenu:t=>{(0,u.f0)(t,e,p)},"data-testid":"synteny_canvas",className:t.mainCanvas,width:h,height:a}),o.createElement("canvas",{ref:N,className:t.pix,width:h,height:a}),o.createElement("canvas",{ref:R,className:t.pix,width:h,height:a}),n&&M&&x&&$?o.createElement(d,{title:M}):null,C?o.createElement(f,{model:e,anchorEl:C,onClose:()=>{p(void 0)}}):null)})),m=(0,s.n9)()((e=>{const t=e.palette.action.disabledBackground;return{loading:{paddingLeft:"0.6em",backgroundColor:e.palette.background.default,backgroundImage:`repeating-linear-gradient(45deg, transparent, transparent 5px, ${t} 5px, ${t} 10px)`,textAlign:"center"},blockMessage:{background:"#f1f1f1",padding:10},blockError:{background:"#f1f1f1",padding:10,color:"red"}}}));function v(){const[e,t]=(0,o.useState)(!1),{classes:n}=m();return(0,o.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),300);return()=>{clearTimeout(e)}})),e?o.createElement("div",{className:n.loading},o.createElement(a.LoadingEllipses,null)):null}function b({messageText:e}){const{classes:t}=m();return o.createElement("div",{className:t.blockMessage},e)}function C({error:e}){const{classes:t}=m();return o.createElement("div",{className:t.blockError},`${e}`)}const p=(0,r.observer)((function({model:e}){return e.error?o.createElement(C,{error:e.error}):e.message?o.createElement(b,{messageText:e.message}):e.features?o.createElement(h,{model:e}):o.createElement(v,null)}))},79610:(e,t,n)=>{n.d(t,{$2:()=>s,Eg:()=>c,WT:()=>i,f0:()=>l,mr:()=>r});var o=n(99546),a=n(30385);function r({feature:e,ctx:t,offsets:n,level:a,cb:r,height:i,drawCurves:l,oobLimit:c,viewWidth:f,hideTiny:u}){const{p11:d,p12:g,p21:h,p22:m}=e,v=d.offsetPx-n[a],b=g.offsetPx-n[a],C=h.offsetPx-n[a+1],p=m.offsetPx-n[a+1],M=Math.abs(b-v),w=Math.abs(p-C),x=i,k=(x-0)/2,S=Math.min(C,p),E=Math.max(C,p);(0,o.doesIntersect2)(S,E,-c,f+c)&&(M<=1&&w<=1?u||(t.beginPath(),t.moveTo(v,0),l?t.bezierCurveTo(v,k,C,k,C,x):t.lineTo(C,x),t.stroke()):(s(t,v,b,0,p,C,x,k,l),r(t)))}function s(e,t,n,o,a,r,s,i,l){l?function(e,t,n,o,a,r,s,i){const l=Math.abs(t-n),c=Math.abs(t-n);if(l<5&&c<5&&n<t&&Math.abs(t-a)>100){const e=t;t=n,n=e}e.beginPath(),e.moveTo(t,o),e.lineTo(n,o),e.bezierCurveTo(n,i,a,i,a,s),e.lineTo(r,s),e.bezierCurveTo(r,i,t,i,t,o),e.closePath()}(e,t,n,o,a,r,s,i):function(e,t,n,o,a,r,s){e.beginPath(),e.moveTo(t,o),e.lineTo(n,o),e.lineTo(a,s),e.lineTo(r,s),e.closePath()}(e,t,n,o,a,r,s)}function i(e,t){const n=(0,o.getContainingView)(t),r=(0,o.getContainingTrack)(t),{featPositions:s,numFeats:i,clickMapCanvas:l,cigarClickMapCanvas:c,level:f}=t;if(!l||!c)return;const u=l.getBoundingClientRect(),d=l.getContext("2d"),g=c.getContext("2d");if(!d||!g)return;const h=e.clientX-u.left,m=e.clientY-u.top,[v,b,C]=d.getImageData(h,m,1,1).data,p=Math.floor(a.xx/i),M=s[(0,a.OX)(v,b,C,p)];if(M){const{f:e}=M;t.setClickId(e.id());const a=(0,o.getSession)(t);(0,o.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("SyntenyFeatureWidget","syntenyFeature",{view:n,track:r,featureData:e.toJSON(),level:f}))}return M}function l(e,t,n){e.preventDefault();const o=t.clickMapCanvas,r=t.cigarClickMapCanvas;if(!o||!r)return;const s=o.getBoundingClientRect(),i=o.getContext("2d"),l=r.getContext("2d");if(!i||!l)return;const{clientX:c,clientY:f}=e,u=c-s.left,d=f-s.top,[g,h,m]=i.getImageData(u,d,1,1).data,v=Math.floor(a.xx/t.numFeats),b=(0,a.OX)(g,h,m,v),C=t.featPositions[b];C&&(t.setClickId(C.f.id()),n({clientX:c,clientY:f,feature:C}))}function c({feature:e,cigarOp:t,cigarOpLen:n}){const a=e.toJSON(),r=a.mate,s=a.end-a.start,i=r.end-r.start,l=a.identity,c=a.name,f=r.name;return[`Loc1: ${(0,o.assembleLocString)(a)}`,`Loc2: ${(0,o.assembleLocString)(r)}`,`Inverted: ${-1===a.strand}`,`Query len: ${s.toLocaleString("en-US")}`,`Target len: ${i.toLocaleString("en-US")}`,l?`Identity: ${l.toPrecision(2)}`:"",t?`CIGAR operator: ${t}${n}`:"",c?`Name 1: ${c}`:"",f?`Name 1: ${f}`:""].filter((e=>!!e)).join("<br/>")}},30385:(e,t,n)=>{n.d(t,{C4:()=>d,OX:()=>f,Ww:()=>u,xx:()=>r});var o=n(99546),a=n(79610);const r=16581375;function s(e){return`rgb(${Math.floor(e/65025)%255},${Math.floor(e/255)%255},${e%255})`}const i={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},l=3,c=1600;function f(e,t,n,o){return Math.floor((255*e*255+255*t+n-1)/o)}function u(e,t,n){const f=(0,o.getContainingView)(e),u=f.drawCurves,d=f.drawCIGAR,{level:g,height:h,featPositions:m}=e,v=f.width,b=f.views.map((e=>e.bpPerPx));n&&(n.imageSmoothingEnabled=!1),t.beginPath();const C=f.views.map((e=>e.offsetPx)),p=Math.floor(r/m.length);t.fillStyle=i.M,t.strokeStyle=i.M;for(const{p11:e,p12:n,p21:o,p22:a}of m){const r=e.offsetPx-C[g],s=n.offsetPx-C[g],i=o.offsetPx-C[g+1],f=a.offsetPx-C[g+1],d=Math.abs(s-r),m=Math.abs(f-i),b=0,p=h,M=(p-b)/2;d<=l&&m<=l&&i<v+c&&i>-c&&(t.moveTo(r,b),u?t.bezierCurveTo(r,M,i,M,i,p):t.lineTo(i,p))}t.stroke(),t.fillStyle=i.M,t.strokeStyle=i.M;for(const{p11:e,p12:p,p21:M,p22:w,f:x,cigar:k}of m){const m=e.offsetPx-C[g],S=p.offsetPx-C[g],E=M.offsetPx-C[g+1],T=w.offsetPx-C[g+1],P=Math.abs(S-m),$=Math.abs(T-E),y=Math.min(E,T),I=Math.max(E,T),X=0,L=h,N=(L-X)/2;if(!(P<=l&&$<=l)&&(0,o.doesIntersect2)(y,I,-c,f.width+c)){const e=x.get("strand"),o=-1===e?S:m,l=o<(-1===e?m:S)?1:-1,c=(E<T?1:-1)*e;let f=o,h=-1===e?T:E;if(k.length&&d){let e=!1,o=0,d=0;const m=Math.floor(r/k.length);for(let r=0;r<k.length;r+=2){const C=r*m+1,p=+k[r],M=k[r+1];e||(o=f,d=h);const w=p/b[g],x=p/b[g+1];if("M"===M||"="===M||"X"===M?(f+=w*l,h+=x*c):"D"===M||"N"===M?f+=w*l:"I"===M&&(h+=x*c),!(Math.max(o,d,f,h)<0||Math.min(o,d,f,h)>v)){const l=r<k.length-2;Math.abs(f-o)<=1&&Math.abs(h-d)<=1&&l?e=!0:(t.fillStyle=i[e&&w>1||x>1?M:"M"],e=!1,(0,a.$2)(t,o,f,X,h,d,L,N,u),t.fill(),n&&(n.fillStyle=s(C),(0,a.$2)(n,o,f,X,h,d,L,N,u),n.fill()))}}}else(0,a.$2)(t,m,S,X,T,E,L,N,u),t.fill()}}const M=e.clickMapCanvas?.getContext("2d");if(M){M.imageSmoothingEnabled=!1,M.clearRect(0,0,v,h);for(let e=0;e<m.length;e++){const t=m[e],n=e*p+1;M.fillStyle=s(n),(0,a.mr)({cb:e=>{e.fill()},feature:t,ctx:M,drawCurves:u,level:g,offsets:C,oobLimit:c,viewWidth:f.width,hideTiny:!0,height:h})}}}function d(e){const{level:t,clickId:n,mouseoverId:r}=e,s=(0,o.getContainingView)(e),i=s.drawCurves,l=e.height,f=s.width,u=e.mouseoverCanvas?.getContext("2d"),d=s.views.map((e=>e.offsetPx));if(!u)return;u.resetTransform(),u.scale(1,1),u.clearRect(0,0,f,l),u.strokeStyle="rgba(0, 0, 0, 0.9)",u.fillStyle="rgba(0, 0, 0, 0.1)";const g=e.featMap[r||""];g&&(0,a.mr)({cb:e=>{e.fill()},feature:g,level:t,ctx:u,oobLimit:c,viewWidth:s.width,drawCurves:i,offsets:d,height:l});const h=e.featMap[n||""];h&&(0,a.mr)({cb:e=>{e.stroke()},feature:h,ctx:u,level:t,oobLimit:c,viewWidth:s.width,drawCurves:i,offsets:d,height:l})}}}]);
//# sourceMappingURL=4753.2e13e355.chunk.js.map