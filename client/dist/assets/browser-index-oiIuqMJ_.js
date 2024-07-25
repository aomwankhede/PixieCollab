import{c as N,g as q,a as K}from"./index-yopBOEZ2.js";function J(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in e)){const f=Object.getOwnPropertyDescriptor(a,u);f&&Object.defineProperty(e,u,f.get?f:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Y={exports:{}},S;typeof window<"u"?S=window:typeof N<"u"?S=N:typeof self<"u"?S=self:S={};var Q=S;const j={},ee=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),te=q(ee);var H=typeof N<"u"?N:typeof window<"u"?window:{},re=te,C;typeof document<"u"?C=document:(C=H["__GLOBAL_DOCUMENT_CACHE@4"],C||(C=H["__GLOBAL_DOCUMENT_CACHE@4"]=re));var ne=C,U=ne,B=Object.create||function(){function e(){}return function(t){if(arguments.length!==1)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function w(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}w.prototype=B(Error.prototype);w.prototype.constructor=w;w.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};function D(e){function t(a,u,f,l){return(a|0)*3600+(u|0)*60+(f|0)+(l|0)/1e3}var r=e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}function L(){this.values=B(null)}L.prototype={set:function(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var a=0;a<r.length;++a)if(t===r[a]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t),t>=0&&t<=100)?(this.set(e,t),!0):!1}};function _(e,t,r,a){var u=a?e.split(a):[e];for(var f in u)if(typeof u[f]=="string"){var l=u[f].split(r);if(l.length===2){var i=l[0].trim(),s=l[1].trim();t(i,s)}}}function ie(e,t,r){var a=e;function u(){var i=D(e);if(i===null)throw new w(w.Errors.BadTimeStamp,"Malformed timestamp: "+a);return e=e.replace(/^[^\sa-zA-Z-]+/,""),i}function f(i,s){var c=new L;_(i,function(o,n){switch(o){case"region":for(var g=r.length-1;g>=0;g--)if(r[g].id===n){c.set(o,r[g].region);break}break;case"vertical":c.alt(o,n,["rl","lr"]);break;case"line":var d=n.split(","),p=d[0];c.integer(o,p),c.percent(o,p)&&c.set("snapToLines",!1),c.alt(o,p,["auto"]),d.length===2&&c.alt("lineAlign",d[1],["start","center","end"]);break;case"position":d=n.split(","),c.percent(o,d[0]),d.length===2&&c.alt("positionAlign",d[1],["start","center","end"]);break;case"size":c.percent(o,n);break;case"align":c.alt(o,n,["start","center","end","left","right"]);break}},/:/,/\s/),s.region=c.get("region",null),s.vertical=c.get("vertical","");try{s.line=c.get("line","auto")}catch{}s.lineAlign=c.get("lineAlign","start"),s.snapToLines=c.get("snapToLines",!0),s.size=c.get("size",100);try{s.align=c.get("align","center")}catch{s.align=c.get("align","middle")}try{s.position=c.get("position","auto")}catch{s.position=c.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},s.align)}s.positionAlign=c.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},s.align)}function l(){e=e.replace(/^\s+/,"")}if(l(),t.startTime=u(),l(),e.substr(0,3)!=="-->")throw new w(w.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+a);e=e.substr(3),l(),t.endTime=u(),l(),f(e,t)}var V=U.createElement&&U.createElement("textarea"),ae={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},z={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},oe={v:"title",lang:"lang"},W={rt:"ruby"};function G(e,t){function r(){if(!t)return null;function p(x){return t=t.substr(x.length),x}var m=t.match(/^([^<]*)(<[^>]*>?)?/);return p(m[1]?m[1]:m[2])}function a(p){return V.innerHTML=p,p=V.textContent,V.textContent="",p}function u(p,m){return!W[m.localName]||W[m.localName]===p.localName}function f(p,m){var x=ae[p];if(!x)return null;var h=e.document.createElement(x),b=oe[p];return b&&m&&(h[b]=m.trim()),h}for(var l=e.document.createElement("div"),i=l,s,c=[];(s=r())!==null;){if(s[0]==="<"){if(s[1]==="/"){c.length&&c[c.length-1]===s.substr(2).replace(">","")&&(c.pop(),i=i.parentNode);continue}var o=D(s.substr(1,s.length-2)),n;if(o){n=e.document.createProcessingInstruction("timestamp",o),i.appendChild(n);continue}var g=s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!g||(n=f(g[1],g[3]),!n)||!u(i,n))continue;if(g[2]){var d=g[2].split(".");d.forEach(function(p){var m=/^bg_/.test(p),x=m?p.slice(3):p;if(z.hasOwnProperty(x)){var h=m?"background-color":"color",b=z[x];n.style[h]=b}}),n.className=d.join(" ")}c.push(g[1]),i.appendChild(n),i=n;continue}i.appendChild(e.document.createTextNode(a(s)))}return l}var $=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function se(e){for(var t=0;t<$.length;t++){var r=$[t];if(e>=r[0]&&e<=r[1])return!0}return!1}function fe(e){var t=[],r="",a;if(!e||!e.childNodes)return"ltr";function u(i,s){for(var c=s.childNodes.length-1;c>=0;c--)i.push(s.childNodes[c])}function f(i){if(!i||!i.length)return null;var s=i.pop(),c=s.textContent||s.innerText;if(c){var o=c.match(/^.*(\n|\r)/);return o?(i.length=0,o[0]):c}if(s.tagName==="ruby")return f(i);if(s.childNodes)return u(i,s),f(i)}for(u(t,e);r=f(t);)for(var l=0;l<r.length;l++)if(a=r.charCodeAt(l),se(a))return"rtl";return"ltr"}function le(e){if(typeof e.line=="number"&&(e.snapToLines||e.line>=0&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,r=t.textTrackList,a=0,u=0;u<r.length&&r[u]!==t;u++)r[u].mode==="showing"&&a++;return++a*-1}function P(){}P.prototype.applyStyles=function(e,t){t=t||this.div;for(var r in e)e.hasOwnProperty(r)&&(t.style[r]=e[r])};P.prototype.formatStyle=function(e,t){return e===0?0:e+t};function R(e,t,r){P.call(this),this.cue=t,this.cueDiv=G(e,t.text);var a={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(a,this.cueDiv),this.div=e.document.createElement("div"),a={direction:fe(this.cueDiv),writingMode:t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:t.align==="middle"?"center":t.align,font:r.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(a),this.div.appendChild(this.cueDiv);var u=0;switch(t.positionAlign){case"start":case"line-left":u=t.position;break;case"center":u=t.position-t.size/2;break;case"end":case"line-right":u=t.position-t.size;break}t.vertical===""?this.applyStyles({left:this.formatStyle(u,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(u,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(f){this.applyStyles({top:this.formatStyle(f.top,"px"),bottom:this.formatStyle(f.bottom,"px"),left:this.formatStyle(f.left,"px"),right:this.formatStyle(f.right,"px"),height:this.formatStyle(f.height,"px"),width:this.formatStyle(f.width,"px")})}}R.prototype=B(P.prototype);R.prototype.constructor=R;function v(e){var t,r,a,u;if(e.div){r=e.div.offsetHeight,a=e.div.offsetWidth,u=e.div.offsetTop;var f=(f=e.div.childNodes)&&(f=f[0])&&f.getClientRects&&f.getClientRects();e=e.div.getBoundingClientRect(),t=f?Math.max(f[0]&&f[0].height||0,e.height/f.length):0}this.left=e.left,this.right=e.right,this.top=e.top||u,this.height=e.height||r,this.bottom=e.bottom||u+(e.height||r),this.width=e.width||a,this.lineHeight=t!==void 0?t:e.lineHeight}v.prototype.move=function(e,t){switch(t=t!==void 0?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t;break}};v.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top};v.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1};v.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right};v.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}};v.prototype.intersectPercentage=function(e){var t=Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left)),r=Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top)),a=t*r;return a/(this.height*this.width)};v.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}};v.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,r=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,a=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e;var u={left:e.left,right:e.right,top:e.top||a,height:e.height||t,bottom:e.bottom||a+(e.height||t),width:e.width||r};return u};function ue(e,t,r,a){function u(x,h){for(var b,M=new v(x),k=1,O=0;O<h.length;O++){for(;x.overlapsOppositeAxis(r,h[O])||x.within(r)&&x.overlapsAny(a);)x.move(h[O]);if(x.within(r))return x;var X=x.intersectPercentage(r);k>X&&(b=new v(x),k=X),x=new v(M)}return b||M}var f=new v(t),l=t.cue,i=le(l),s=[];if(l.snapToLines){var c;switch(l.vertical){case"":s=["+y","-y"],c="height";break;case"rl":s=["+x","-x"],c="width";break;case"lr":s=["-x","+x"],c="width";break}var o=f.lineHeight,n=o*Math.round(i),g=r[c]+o,d=s[0];Math.abs(n)>g&&(n=n<0?-1:1,n*=Math.ceil(g/o)*o),i<0&&(n+=l.vertical===""?r.height:r.width,s=s.reverse()),f.move(d,n)}else{var p=f.lineHeight/r.height*100;switch(l.lineAlign){case"center":i-=p/2;break;case"end":i-=p;break}switch(l.vertical){case"":t.applyStyles({top:t.formatStyle(i,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(i,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(i,"%")});break}s=["+y","-x","+x","-y"],f=new v(t)}var m=u(f,s);t.move(m.toCSSCompatValues(r))}function E(){}E.StringDecoder=function(){return{decode:function(e){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};E.convertCueToDOMTree=function(e,t){return!e||!t?null:G(e,t)};var ce=.05,he="sans-serif",ge="1.5%";E.processCues=function(e,t,r){if(!e||!t||!r)return null;for(;r.firstChild;)r.removeChild(r.firstChild);var a=e.document.createElement("div");a.style.position="absolute",a.style.left="0",a.style.right="0",a.style.top="0",a.style.bottom="0",a.style.margin=ge,r.appendChild(a);function u(o){for(var n=0;n<o.length;n++)if(o[n].hasBeenReset||!o[n].displayState)return!0;return!1}if(!u(t)){for(var f=0;f<t.length;f++)a.appendChild(t[f].displayState);return}var l=[],i=v.getSimpleBoxPosition(a),s=Math.round(i.height*ce*100)/100,c={font:s+"px "+he};(function(){for(var o,n,g=0;g<t.length;g++)n=t[g],o=new R(e,n,c),a.appendChild(o.div),ue(e,o,i,l),n.displayState=o.div,l.push(v.getSimpleBoxPosition(o))})()};E.Parser=function(e,t,r){r||(r=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=r||new TextDecoder("utf8"),this.regionList=[]};E.Parser.prototype={reportOrThrowError:function(e){if(e instanceof w)this.onparsingerror&&this.onparsingerror(e);else throw e},parse:function(e){var t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function r(){for(var o=t.buffer,n=0;n<o.length&&o[n]!=="\r"&&o[n]!==`
`;)++n;var g=o.substr(0,n);return o[n]==="\r"&&++n,o[n]===`
`&&++n,t.buffer=o.substr(n),g}function a(o){var n=new L;if(_(o,function(d,p){switch(d){case"id":n.set(d,p);break;case"width":n.percent(d,p);break;case"lines":n.integer(d,p);break;case"regionanchor":case"viewportanchor":var m=p.split(",");if(m.length!==2)break;var x=new L;if(x.percent("x",m[0]),x.percent("y",m[1]),!x.has("x")||!x.has("y"))break;n.set(d+"X",x.get("x")),n.set(d+"Y",x.get("y"));break;case"scroll":n.alt(d,p,["up"]);break}},/=/,/\s/),n.has("id")){var g=new(t.vttjs.VTTRegion||t.window.VTTRegion);g.width=n.get("width",100),g.lines=n.get("lines",3),g.regionAnchorX=n.get("regionanchorX",0),g.regionAnchorY=n.get("regionanchorY",100),g.viewportAnchorX=n.get("viewportanchorX",0),g.viewportAnchorY=n.get("viewportanchorY",100),g.scroll=n.get("scroll",""),t.onregion&&t.onregion(g),t.regionList.push({id:n.get("id"),region:g})}}function u(o){var n=new L;_(o,function(g,d){switch(g){case"MPEGT":n.integer(g+"S",d);break;case"LOCA":n.set(g+"L",D(d));break}},/[^\d]:/,/,/),t.ontimestampmap&&t.ontimestampmap({MPEGTS:n.get("MPEGTS"),LOCAL:n.get("LOCAL")})}function f(o){o.match(/X-TIMESTAMP-MAP/)?_(o,function(n,g){switch(n){case"X-TIMESTAMP-MAP":u(g);break}},/=/):_(o,function(n,g){switch(n){case"Region":a(g);break}},/:/)}try{var l;if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;l=r();var i=l.match(/^WEBVTT([ \t].*)?$/);if(!i||!i[0])throw new w(w.Errors.BadSignature);t.state="HEADER"}for(var s=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:l=r(),t.state){case"HEADER":/:/.test(l)?f(l):l||(t.state="ID");continue;case"NOTE":l||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(l)){t.state="NOTE";break}if(!l)continue;t.cue=new(t.vttjs.VTTCue||t.window.VTTCue)(0,0,"");try{t.cue.align="center"}catch{t.cue.align="middle"}if(t.state="CUE",l.indexOf("-->")===-1){t.cue.id=l;continue}case"CUE":try{ie(l,t.cue,t.regionList)}catch(o){t.reportOrThrowError(o),t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var c=l.indexOf("-->")!==-1;if(!l||c&&(s=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+=`
`),t.cue.text+=l.replace(/\u2028/g,`
`).replace(/u2029/g,`
`);continue;case"BADCUE":l||(t.state="ID");continue}}}catch(o){t.reportOrThrowError(o),t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL")throw new w(w.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var pe=E,xe="auto",de={"":1,lr:1,rl:1},me={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function be(e){if(typeof e!="string")return!1;var t=de[e.toLowerCase()];return t?e.toLowerCase():!1}function I(e){if(typeof e!="string")return!1;var t=me[e.toLowerCase()];return t?e.toLowerCase():!1}function F(e,t,r){this.hasBeenReset=!1;var a="",u=!1,f=e,l=t,i=r,s=null,c="",o=!0,n="auto",g="start",d="auto",p="auto",m=100,x="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return a},set:function(h){a=""+h}},pauseOnExit:{enumerable:!0,get:function(){return u},set:function(h){u=!!h}},startTime:{enumerable:!0,get:function(){return f},set:function(h){if(typeof h!="number")throw new TypeError("Start time must be set to a number.");f=h,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return l},set:function(h){if(typeof h!="number")throw new TypeError("End time must be set to a number.");l=h,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return i},set:function(h){i=""+h,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return s},set:function(h){s=h,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return c},set:function(h){var b=be(h);if(b===!1)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");c=b,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return o},set:function(h){o=!!h,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return n},set:function(h){if(typeof h!="number"&&h!==xe)throw new SyntaxError("Line: an invalid number or illegal string was specified.");n=h,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return g},set:function(h){var b=I(h);b?(g=b,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return d},set:function(h){if(h<0||h>100)throw new Error("Position must be between 0 and 100.");d=h,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return p},set:function(h){var b=I(h);b?(p=b,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return m},set:function(h){if(h<0||h>100)throw new Error("Size must be between 0 and 100.");m=h,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return x},set:function(h){var b=I(h);if(!b)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");x=b,this.hasBeenReset=!0}}}),this.displayState=void 0}F.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var ve=F,we={"":!0,up:!0};function Te(e){if(typeof e!="string")return!1;var t=we[e.toLowerCase()];return t?e.toLowerCase():!1}function A(e){return typeof e=="number"&&e>=0&&e<=100}function ye(){var e=100,t=3,r=0,a=100,u=0,f=100,l="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(i){if(!A(i))throw new Error("Width must be between 0 and 100.");e=i}},lines:{enumerable:!0,get:function(){return t},set:function(i){if(typeof i!="number")throw new TypeError("Lines must be set to a number.");t=i}},regionAnchorY:{enumerable:!0,get:function(){return a},set:function(i){if(!A(i))throw new Error("RegionAnchorX must be between 0 and 100.");a=i}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(i){if(!A(i))throw new Error("RegionAnchorY must be between 0 and 100.");r=i}},viewportAnchorY:{enumerable:!0,get:function(){return f},set:function(i){if(!A(i))throw new Error("ViewportAnchorY must be between 0 and 100.");f=i}},viewportAnchorX:{enumerable:!0,get:function(){return u},set:function(i){if(!A(i))throw new Error("ViewportAnchorX must be between 0 and 100.");u=i}},scroll:{enumerable:!0,get:function(){return l},set:function(i){var s=Te(i);s===!1?console.warn("Scroll: an invalid or illegal string was specified."):l=s}}})}var Ee=ye,T=Q,y=Y.exports={WebVTT:pe,VTTCue:ve,VTTRegion:Ee};T.vttjs=y;T.WebVTT=y.WebVTT;var Ae=y.VTTCue,Se=y.VTTRegion,Ce=T.VTTCue,_e=T.VTTRegion;y.shim=function(){T.VTTCue=Ae,T.VTTRegion=Se};y.restore=function(){T.VTTCue=Ce,T.VTTRegion=_e};T.VTTCue||y.shim();var Z=Y.exports;const Le=K(Z),Ne=J({__proto__:null,default:Le},[Z]);export{Ne as b};