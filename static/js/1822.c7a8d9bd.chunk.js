"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1822],{31822:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var s=t(46377),r=t(99546),i=t(66885),n=t(62718),o=t(34796);function c(e){const a=e.slice(e.lastIndexOf("/")+1);return a.slice(0,a.lastIndexOf("."))}class u extends s.BaseFeatureDataAdapter{static capabilities=["hasResolution","hasLocalStats","hasGlobalStats"];async getAdapters(){const e=this.getSubAdapter;if(!e)throw new Error("no getSubAdapter available");let a=this.getConf("subadapters");return a?.length||(a=this.getConf("bigWigs").map((e=>({type:"BigWigAdapter",source:c(e),bigWigLocation:{uri:e}})))),Promise.all(a.map((async a=>{const t=(await e(a)).dataAdapter;return{source:a.name||t.id,...a,dataAdapter:t}})))}async getRefNames(e){const a=await this.getAdapters(),t=await Promise.all(a.map((a=>a.dataAdapter.getRefNames(e))));return[...new Set(t.flat())]}async getGlobalStats(e){const a=await this.getAdapters(),t=(await Promise.all(a.map((a=>a.dataAdapter.getGlobalStats?.(e))))).filter((e=>!!e));return{scoreMin:(0,r.min)(t.map((e=>e.scoreMin))),scoreMax:(0,r.max)(t.map((e=>e.scoreMax)))}}getFeatures(e,a={}){return(0,i.ObservableCreate)((async t=>{const s=await this.getAdapters();(0,n.h)(...s.map((t=>t.dataAdapter.getFeatures(e,a).pipe((0,o.T)((e=>e.get("source")?e:new r.SimpleFeature({...e.toJSON(),uniqueId:`${t.source}-${e.id()}`,source:t.source}))))))).subscribe(t)}),a.stopToken)}async getMultiRegionFeatureDensityStats(e){return{featureDensity:0}}async getSources(e){return(await this.getAdapters()).map((({dataAdapter:e,source:a,name:t,...s})=>({name:a,__name:t,...s})))}freeResources(){}}}}]);
//# sourceMappingURL=1822.c7a8d9bd.chunk.js.map