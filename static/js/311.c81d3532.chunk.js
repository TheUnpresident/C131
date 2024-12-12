"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[311],{83803:(e,t,r)=>{r.d(t,{A:()=>u});var a=r(7552),n=r(99546),l=r(80208),i=r(48231),o=r(68446);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(null,arguments)}const c=(0,r(75785).n9)()({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function m(e,t,r,a){e.flipped&&([r,a]=[a,r]);const n=e.bpToXY(r,t),l=e.bpToXY(a,t);return["M",...n,"A",t,t,"0",Math.abs(a-r)/e.bpPerRadian>Math.PI?"1":"0","1",...l].join(" ")}const d=(0,o.observer)((function({model:e,slice:t,region:r}){const l=(0,i.A)(),{radiusPx:o}=e,c=o+1,{endRadians:m,startRadians:d}=t,h=(0,n.polarToCartesian)(c,d),u=(0,n.polarToCartesian)(c,m),p=(m-d)*c,f=m-d>Math.PI?"1":"0",b=(m+d)/2,w=`[${Number(r.regions.length).toLocaleString()}]`;return a.createElement(a.Fragment,null,a.createElement(g,{text:w,view:e,maxWidthPx:p,radians:b,radiusPx:c,title:`${w} more regions`,color:l.palette.text.primary}),a.createElement("path",s({d:["M",...h,"A",c,c,"0",f,"1",...u].join(" ")},(0,n.getStrokeProps)(l.palette.text.secondary),{strokeWidth:2,strokeDasharray:"2,2",fill:"none"})))})),g=(0,o.observer)((function({view:e,text:t,maxWidthPx:r,radians:l,radiusPx:i,title:o,color:m}){const{classes:d}=c(),g=(0,n.polarToCartesian)(i+5,l);return t?6.5*t.length<r?a.createElement("text",s({x:0,y:0,className:d.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:`translate(${g}) rotate(${(0,n.radToDeg)(l)+90})`},(0,n.getFillProps)(m)),t,a.createElement("title",null,o||t)):r>4?(0,n.radToDeg)(l+e.offsetRadians-Math.PI/2)>=180?a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:`translate(${g}) rotate(${(0,n.radToDeg)(l)})`,fill:m},t,a.createElement("title",null,o||t)):a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:`translate(${g}) rotate(${(0,n.radToDeg)(l)+180})`,fill:m},t,a.createElement("title",null,o||t)):null:null})),h=(0,o.observer)((function({model:e,slice:t,region:r}){const o=(0,i.A)(),{radiusPx:s}=e,{endRadians:c,startRadians:d}=t,h=(c+d)/2,u=(c-d)*s,p=(0,n.getSession)(e).assemblyManager.get(r.assemblyName);let f=p?p.getRefNameColor(r.refName):void 0;if(f)try{f=(0,l.makeContrasting)(f,o.palette.background.paper)}catch(e){f=o.palette.text.primary}else f=o.palette.text.primary;return a.createElement(a.Fragment,null,a.createElement(g,{text:r.refName,view:e,maxWidthPx:u,radians:h,radiusPx:s,color:f}),a.createElement("path",{d:m(t,s+1,r.start,r.end),stroke:f,strokeWidth:2,fill:"none"}))})),u=(0,o.observer)((function({model:e,slice:t}){return t.region.elided?a.createElement(d,{key:(0,n.assembleLocString)(t.region.regions[0]),model:e,region:t.region,slice:t}):a.createElement(h,{key:(0,n.assembleLocString)(t.region),region:t.region,model:e,slice:t})}))},60311:(e,t,r)=>{r.d(t,{renderToSvg:()=>g});var a=r(7552),n=r(49823),l=r(99546),i=r(20139),o=r(42489),s=r(36422),c=r(48231);function m({width:e,height:t,shift:r}){const n=(0,c.A)();return a.createElement("rect",{width:e+2*r,height:t,fill:(0,l.stripAlpha)(n.palette.background.default)})}var d=r(83803);async function g(e,t){await(0,o.when)((()=>e.initialized));const{themeName:r="default",Wrapper:c=({children:e})=>e}=t,g=(0,l.getSession)(e),h=g.allThemes?.()[r],{createRootFn:u}=(0,s.getRoot)(e),{width:p,tracks:f,height:b}=e,w=await Promise.all(f.map((async e=>{const r=e.displays[0];return await(0,o.when)((()=>void 0===r.ready||r.ready)),{track:e,result:await r.renderSvg({...t,theme:h})}}))),{staticSlices:x,offsetRadians:y,centerXY:E}=e,k=(0,l.radToDeg)(y);return(0,l.renderToStaticMarkup)(a.createElement(i.A,{theme:(0,n.createJBrowseTheme)(h)},a.createElement(c,null,a.createElement("svg",{width:p,height:b,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,p+100,b].toString()},a.createElement(m,{width:p,height:b,shift:50}),a.createElement("g",{transform:`translate(${E}) rotate(${k})`},x.map(((t,r)=>a.createElement(d.A,{key:r,model:e,slice:t}))),w.map((({result:e},t)=>a.createElement(a.Fragment,{key:t},e))))))),u)}}}]);
//# sourceMappingURL=311.c81d3532.chunk.js.map