(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6391],{78369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(75099),a=r(46377),i=r(99546),n=r(43334),o=r(99834),c=r(66885),h=r(37347),d=r(44728),u=r(82088),l=r(91476);class g{constructor(e,t){this.record=e,this._store=t}get name(){return this.record.readName}get start(){return this.record.alignmentStart-1}get end(){return this.start+(this.record.lengthOnRef??1)}get score(){return this.record.mappingQuality}get flags(){return this.record.flags}get strand(){return this.record.isReverseComplemented()?-1:1}get qual(){return(this.record.qualityScores||[]).join(" ")}get qualRaw(){return this.record.qualityScores}get refName(){return this._store.refIdToName(this.record.sequenceId)}get pair_orientation(){return this.record.isPaired()?this.record.getPairOrientation():void 0}get template_length(){return this.record.templateLength||this.record.templateSize}get next_ref(){return this.record.mate?this._store.refIdToName(this.record.mate.sequenceId):void 0}get next_segment_position(){return this.record.mate?`${this._store.refIdToName(this.record.mate.sequenceId)}:${this.record.mate.alignmentStart}`:void 0}get is_paired(){return!!this.record.mate}get next_pos(){return this.record.mate?.alignmentStart}get tags(){const e=this._store.samHeader.readGroups?.[this.record.readGroupId];return void 0!==e?{...this.record.tags,RG:e}:this.record.tags}get seq(){return this.record.getReadBases()}get CIGAR(){return function(e,t,r,s){let a="",i="",n="M",o=0;if(!s)return"";const c=s.seq,h=s.start;let d=t,u=0,l=0;if(void 0!==e)for(const{code:t,refPos:r,sub:s,data:g}of e)if(u=r-d,a+=c.slice(d-h,r-h),d=r,l>0&&u&&(i+=`${l}I`,l=0),o&&"M"!==n&&(i+=`${o}${n}`,o=0),u&&(n="M",o+=u),"b"===t){const e=g.split(","),t=String.fromCharCode(...e);a+=t,d+=t.length,o+=t.length}else"B"===t||"X"===t?(a+=s,d++,o++):"D"===t||"N"===t?(d+=g,o&&(i+=`${o}${n}`),i+=g+t,o=0):"I"===t||"S"===t?(a+=g,o&&(i+=`${o}${n}`),i+=g.length+t,o=0):"i"===t?(o&&(i+=`${o}${n}`),l++,a+=g,o=0):"P"===t?(o&&(i+=`${o}${n}`),i+=`${g}P`):"H"===t&&(o&&(i+=`${o}${n}`),i+=`${g}H`,o=0);else u=r-a.length;return a.length!==r&&(u=r-a.length,a+=c.slice(d-h,d-h+u),o&&"M"!==n&&(i+=`${o}${n}`,o=0),n="M",o+=u),u&&l>0&&(i+=`${l}I`),o&&(i+=`${o}${n}`),i}(this.record.readFeatures,this.record.alignmentStart,this.record.readLength,this.record._refRegion)}id(){return`${this._store.id}-${this.record.uniqueId}`}get(e){return"mismatches"===e?this.mismatches:"qual"===e?this.qual:"CIGAR"===e?this.CIGAR:this.fields[e]}parent(){}children(){}get mismatches(){return function(e,t,r){if(!e)return[];const s=new Array(e.length);let a=0,i=0,n=0,o=0,c=t;for(const{refPos:h,code:d,pos:u,data:l,sub:g,ref:m}of e)if(o=n-c,c=n,o&&i>0&&(s[a++]={start:n,type:"insertion",base:`${i}`,length:0},i=0),n=h-1-t,"X"===d)s[a++]={start:n,length:1,base:g,qual:r?.[u-1],altbase:m?.toUpperCase(),type:"mismatch"};else if("I"===d)s[a++]={start:n,type:"insertion",base:`${l.length}`,length:0};else if("N"===d)s[a++]={type:"skip",length:l,start:n,base:"N"};else if("S"===d){const e=l.length;s[a++]={start:n,type:"softclip",base:`S${e}`,cliplen:e,length:1}}else if("P"===d);else if("H"===d){const e=l;s[a++]={start:n,type:"hardclip",base:`H${e}`,cliplen:e,length:1}}else"D"===d?s[a++]={type:"deletion",length:l,start:n,base:"*"}:"b"===d||"q"===d||"B"===d||"i"===d&&i++;return o&&i>0&&(s[a++]={start:n,type:"insertion",base:`${i}`,length:0},i=0),s.slice(0,a)}(this.record.readFeatures,this.start,this.qualRaw)}get fields(){return{start:this.start,name:this.name,end:this.end,score:this.score,strand:this.strand,template_length:this.template_length,flags:this.flags,tags:this.tags,refName:this.refName,seq:this.seq,type:"match",pair_orientation:this.pair_orientation,next_ref:this.next_ref,next_pos:this.next_pos,next_segment_position:this.next_segment_position,uniqueId:this.id()}}toJSON(){return{...this.fields,CIGAR:this.CIGAR,qual:this.qual}}}(0,l.Kt)(g,"fields"),(0,l.Kt)(g,"CIGAR"),(0,l.Kt)(g,"mismatches");class m extends a.BaseFeatureDataAdapter{samHeader={};ultraLongFeatureCache=new n.A({maxSize:500});seqIdToOriginalRefName=[];async configurePre(){const e=this.getConf("cramLocation"),t=this.getConf("craiLocation"),r=this.pluginManager,a=new s.bQ({cramFilehandle:(0,o.openLocation)(e,r),index:new s.Wb({filehandle:(0,o.openLocation)(t,r)}),seqFetch:(...e)=>this.seqFetch(...e),checkSequenceMD5:!1});if(!this.getSubAdapter)throw new Error("Error getting subadapter");const i=this.getConf("sequenceAdapter");if(!i)throw new Error("no sequenceAdapter supplied to CramAdapter config");return{cram:a,sequenceAdapter:(await this.getSubAdapter(i)).dataAdapter}}async configure(){return this.configureP||(this.configureP=this.configurePre().catch((e=>{throw this.configureP=void 0,e}))),this.configureP}async getHeader(e){const{cram:t}=await this.configure();return t.cram.getHeaderText()}async seqFetch(e,t,r){t-=1;const{sequenceAdapter:s}=await this.configure(),a=this.refIdToOriginalName(e)||this.refIdToName(e);if(!a)throw new Error("unknown");const n=(await(0,d._)(s.getFeatures({refName:a,start:t,end:r,assemblyName:""}).pipe((0,u.$)()))).sort(((e,t)=>e.get("start")-t.get("start"))).map((e=>{const s=e.get("start"),a=e.get("end"),i=Math.max(t-s,0),n=Math.min(r-s,a-s)-i;return(e.get("seq")||e.get("residues")).slice(i,i+n)})).join(""),o=r-t;if(n.length!==o)throw new Error(`fetching ${a}:${(0,i.toLocale)(t-1)}-${(0,i.toLocale)(r)} returned ${(0,i.toLocale)(n.length)} bases, should have returned ${(0,i.toLocale)(o)}`);return n}async setupPre(e){const{statusCallback:t=()=>{}}=e||{};return(0,i.updateStatus)("Downloading index",t,(async()=>{const e=await this.configure(),{cram:t}=e,r=await t.cram.getSamHeader(),s=[],a={};r.filter((e=>"SQ"===e.tag)).forEach(((e,t)=>{const r=e.data.find((e=>"SN"===e.tag));if(r){const e=r.value;a[e]=t,s[t]=e}}));const i=r.filter((e=>"RG"===e.tag)).map((e=>e.data.find((e=>"ID"===e.tag))?.value)),n={idToName:s,nameToId:a,readGroups:i};return this.samHeader=n,{samHeader:n,...e}}))}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{samHeader:t}=await this.setup(e);if(!t.idToName)throw new Error("CRAM file has no header lines");return t.idToName}refNameToId(e){return this.samHeader.nameToId?this.samHeader.nameToId[e]:this.seqIdToRefName?this.seqIdToRefName.indexOf(e):void 0}refIdToName(e){return this.samHeader.idToName?.[e]||this.seqIdToRefName?.[e]}refIdToOriginalName(e){return this.seqIdToOriginalRefName[e]}getFeatures(e,t){const{stopToken:r,filterBy:s,statusCallback:a=()=>{}}=t||{},{refName:n,start:o,end:d,originalRefName:u}=e;return(0,c.ObservableCreate)((async e=>{const{cram:c,samHeader:g}=await this.setup(t),m=this.refNameToId(n);if(void 0===m)return console.warn("Unknown refName",n),void e.complete();u&&(this.seqIdToOriginalRefName[m]=u);const f=await(0,i.updateStatus)("Downloading alignments",a,(()=>c.getRecordsForRange(m,o,d)));(0,h.SW)(r),await(0,i.updateStatus)("Processing alignments",a,(()=>{const{flagInclude:t=0,flagExclude:r=0,tagFilter:a,readName:i}=s||{};for(const s of f){if((0,l.lE)(s.flags,t,r))continue;if(a&&(0,l.Kl)("RG"===a.tag?g.readGroups?.[s.readGroupId]:s.tags[a.tag],a.value))continue;if(i&&s.readName!==i)continue;const n=this.ultraLongFeatureCache.get(`${s.uniqueId}`);if(n)e.next(n);else{const t=this.cramRecordToFeature(s);this.ultraLongFeatureCache.set(`${s.uniqueId}`,t),e.next(t)}}e.complete()}))}),r)}freeResources(){}cramRecordToFeature(e){return new g(e,this)}async getMultiRegionFeatureDensityStats(e,t){return{bytes:await this.bytesForRegions(e,t),fetchSizeLimit:this.getConf("fetchSizeLimit")}}async bytesForRegions(e,t){const{cram:r}=await this.configure();return(await Promise.all(e.map((e=>{const{refName:t,start:s,end:a}=e,i=this.refNameToId(t);return void 0!==i?r.index.getEntriesForRange(i,s,a):[{sliceBytes:0}]})))).flat().reduce(((e,t)=>e+t.sliceBytes),0)}}},81239:()=>{}}]);
//# sourceMappingURL=6391.c856eca8.chunk.js.map