"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9114],{9114:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7552),l=n(87083),r=n(99546),s=n(36715),i=n(87731);const u=(0,a.lazy)((()=>n.e(5930).then(n.bind(n,45930)))),o=(0,a.lazy)((()=>n.e(457).then(n.bind(n,80457))));function m({model:e,feature:t}){const n=(0,r.getSession)(e),l={uniqueId:t.uniqueId,refName:t.refName,start:t.start,end:t.end,strand:t.strand},m={uniqueId:`${t.id}-mate`,refName:t.next_ref,start:t.next_pos,end:t.next_pos+1,strand:t.strand};return a.createElement("div",null,a.createElement(s.A,null,"Launch split view"),a.createElement("ul",null,a.createElement("li",null,l.refName,":",(0,r.toLocale)(l.start)," -> ",m.refName,":",(0,r.toLocale)(m.start)," ",a.createElement(i.A,{href:"#",onClick:t=>{t.preventDefault(),n.queueDialog((t=>[u,{handleClose:t,session:n,feature:new r.SimpleFeature({...l,mate:m}),view:e.view,assemblyName:e.view.displayedRegions[0].assemblyName}]))}},"(top/bottom)")," ",a.createElement(i.A,{href:"#",onClick:t=>{t.preventDefault(),n.queueDialog((t=>[o,{handleClose:t,session:n,feature:new r.SimpleFeature({...l,mate:m}),view:e.view,assemblyName:e.view.displayedRegions[0].assemblyName}]))}},"(single row)"))))}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(null,arguments)}function d(e){const{model:t,feature:n}=e,s=(0,r.getSession)(t),{pluginManager:i}=(0,r.getEnv)(s);let u=!1;try{u=!!i.getViewType("BreakpointSplitView")}catch(e){}return a.createElement(l.default,c({},e,{title:"Paired alignments"}),u?a.createElement(m,{model:t,feature:n}):null)}}}]);
//# sourceMappingURL=9114.869c79fd.chunk.js.map