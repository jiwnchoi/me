(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{1325:function(e,t,r){"use strict";var n,i,o=Object.create,a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,f=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of s(t))c.call(e,i)||i===r||a(e,i,{get:()=>t[i],enumerable:!(n=l(t,i))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?o(u(e)):{},f(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>w}),e.exports=f(a({},"__esModule",{value:!0}),p);var m=d(r(2276)),g=d(r(959)),h=e=>"string"==typeof e?e:void 0!==e.default?e.default.src:e.src,y=["jpeg","jpg","png","webp","avif"],v=e=>y.some(t=>t===e),b=e=>{let t=e.split(/\.([^.]*$)/)[0],r=(e.split(/\.([^.]*$)/)[1]||"").split("?")[0];if(!t||!r)throw Error(`Invalid path or no file extension: ${e}`);let n=t.split("/").slice(0,-1).join("/"),i=t.split("/").slice(-1).toString();return e.startsWith("http")&&(n=n.replace(/^https?:\/\//,"").split("/").slice(1).join("/")),{pathWithoutName:n,name:i,extension:r}},x=({src:e,width:t,config:r})=>{let n=e;void 0!==r.basePath&&(n=e.replace(r.basePath,""));let i=r.sourceImageParser?r.sourceImageParser({src:n,defaultParser:b}):b(n),{extension:o}=i,{pathWithoutName:a,name:l,extension:s}=i;if(void 0!==r.convertFormat){let e=r.convertFormat.find(([e])=>e===o);if(void 0!==e){if(!v(e[0]))throw Error(`Unauthorized format specified in \`configFormat\`. beforeConvert: ${e[0]}`);if(!v(e[1]))throw Error(`Unauthorized format specified in \`configFormat\`. afterConvert: ${e[1]}`);o=e[1]}}let u=`/${r.imageDir?r.imageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/chunks/images"}`,c=`${r.externalImageDir?r.externalImageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/media"}`,f=[...new Set([...r.generateFormats??["webp"],o])];return f.map((e,i)=>{if(f.length!==i+1&&!v(e))throw Error(`Unauthorized extension specified in \`generateFormats\`: ${e}`);let o=void 0!==r.filenameGenerator?r.filenameGenerator({path:a,name:l,width:t,extension:e}):`${a}/${l}_${t}.${e}`;return{output:`${u}/${o.replace(/^\//,"")}`,src:n,extension:e,originalExtension:s,externalOutputDir:c}})},_=r(9588),j=e=>({src:t,width:r})=>{let n=x({src:t,width:r,config:_}).at(e??-1);if(void 0===n)throw Error(`No output info found for ${t}`);return`${_.basePath??""}${n.output}`};n=r(2276),i=e.exports,f(p,n,"default"),i&&f(i,n,"default");var w=(0,g.forwardRef)((e,t)=>{let r=h(e.src);return g.default.createElement(m.default,{...e,ref:t,loader:e.loader||j(),blurDataURL:e.blurDataURL||("string"==typeof e.src&&"blur"===e.placeholder&&void 0===e.loader?j()({src:e.src,width:8,quality:10}):void 0),unoptimized:void 0!==e.unoptimized?e.unoptimized:r.endsWith(".svg")})})},9588:function(e){e.exports={convertFormat:[["png","webp"],["jpg","avif"]]}},547:function(e,t,r){e.exports=r(1325)},6013:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let i="refresh",o="navigate",a="restore",l="server-patch",s="prefetch",u="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1901:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(1748),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(1351),i=r(5815)._(r(959)),o=n._(r(422)),a=n._(r(1440)),l=r(6430),s=r(1233),u=r(9848);r(1972);let c=r(1033),f=n._(r(7578)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,n,i,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=i.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:l,decoding:s,className:u,style:c,fetchPriority:f,placeholder:d,loading:g,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:_,onLoad:j,onError:w,...C}=e;return i.default.createElement("img",{...C,...m(f),loading:g,width:l,height:a,decoding:s,"data-nimg":y?"fill":"1",className:u,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&p(e,d,v,b,x,h))},[r,d,v,b,x,w,h,t]),onLoad:e=>{p(e.currentTarget,d,v,b,x,h)},onError:e=>{_(!0),"empty"!==d&&x(!0),w&&w(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let y=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(c.RouterContext),n=(0,i.useContext)(u.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=d||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:p}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let y=(0,i.useRef)(p);(0,i.useEffect)(()=>{y.current=p},[p]);let[v,b]=(0,i.useState)(!1),[x,_]=(0,i.useState)(!1),{props:j,meta:w}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:v,showAltText:x});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...j,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:_,ref:t}),w.priority?i.default.createElement(h,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(1351)._(r(959)),i=r(2672),o=r(6114),a=r(9775),l=r(6689),s=r(1950),u=r(1033),c=r(8347),f=r(2301),d=r(1901),p=r(2606),m=r(6013),g=new Set;function h(e,t,r,n,i,a){if(a||(0,o.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}Promise.resolve(a?e.prefetch(t,i):e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=n.default.forwardRef(function(e,t){let r,a;let{href:g,as:v,children:b,prefetch:x=null,passHref:_,replace:j,shallow:w,scroll:C,locale:E,onClick:S,onMouseEnter:O,onTouchStart:P,legacyBehavior:k=!1,...N}=e;r=b,k&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let R=n.default.useContext(u.RouterContext),I=n.default.useContext(c.AppRouterContext),z=null!=R?R:I,M=!R,L=!1!==x,T=null===x?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:A,as:G}=n.default.useMemo(()=>{if(!R){let e=y(g);return{href:e,as:v?y(v):e}}let[e,t]=(0,i.resolveHref)(R,g,!0);return{href:e,as:v?(0,i.resolveHref)(R,v):t||e}},[R,g,v]),D=n.default.useRef(A),$=n.default.useRef(G);k&&(a=n.default.Children.only(r));let F=k?a&&"object"==typeof a&&a.ref:t,[B,U,q]=(0,f.useIntersection)({rootMargin:"200px"}),H=n.default.useCallback(e=>{($.current!==G||D.current!==A)&&(q(),$.current=G,D.current=A),B(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[G,F,A,q,B]);n.default.useEffect(()=>{z&&U&&L&&h(z,A,G,{locale:E},{kind:T},M)},[G,A,U,E,L,null==R?void 0:R.locale,z,M,T]);let W={ref:H,onClick(e){k||"function"!=typeof S||S(e),k&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,i,a,l,s,u,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[a?"replace":"push"](r,i,{shallow:l,locale:u,scroll:e}):t[a?"replace":"push"](i||r,{scroll:e})};c?n.default.startTransition(d):d()}(e,z,A,G,j,w,C,E,M)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),z&&(L||!M)&&h(z,A,G,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:T},M)},onTouchStart(e){k||"function"!=typeof P||P(e),k&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),z&&(L||!M)&&h(z,A,G,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:T},M)}};if((0,l.isAbsoluteUrl)(G))W.href=G;else if(!k||_||"a"===a.type&&!("href"in a.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,d.getDomainLocale)(G,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);W.href=t||(0,p.addBasePath)((0,s.addLocale)(G,e,null==R?void 0:R.defaultLocale))}return k?n.default.cloneElement(a,W):n.default.createElement("a",{...N,...W},r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(959),i=r(7535),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},l.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6430:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1972);let n=r(4637),i=r(1233);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:x,onLoad:_,onLoadingComplete:j,placeholder:w="empty",blurDataURL:C,fetchPriority:E,layout:S,objectFit:O,objectPosition:P,lazyBoundary:k,lazyRoot:N,...R}=e,{imgConf:I,showAltText:z,blurComplete:M,defaultLoader:L}=t,T=I||i.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}let A=R.loader||L;delete R.loader,delete R.srcSet;let G="__next_img_default"in A;if(G){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!f&&(f=t)}let D="",$=a(y),F=a(v);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,D=e.src,!b){if($||F){if($&&!F){let t=$/e.width;F=Math.round(e.height*t)}else if(!$&&F){let t=F/e.height;$=Math.round(e.width*t)}}else $=e.width,F=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:D)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,B=!1),l.unoptimized&&(d=!0),G&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(d=!0),p&&(E="high");let U=a(h),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},z?{}:{color:"transparent"},x),H=M||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:$,heightInt:F,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+w+'")',W=H?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},V=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:d,width:$,quality:U,sizes:f,loader:A});return{props:{...R,loading:B?"lazy":m,fetchPriority:E,width:$,height:F,decoding:"async",className:g,style:{...q,...W},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:d,priority:p,placeholder:w,fill:b}}}},4637:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2276:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return s},default:function(){return u}});let n=r(1351),i=r(6430),o=r(1972),a=r(7491),l=n._(r(7578)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=a.Image},7578:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},6772:function(e,t,r){e.exports=r(1440)},5283:function(e,t,r){e.exports=r(2276)},1534:function(e,t,r){e.exports=r(2461)},4454:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(959),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function s(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,i=e.attr,o=e.size,s=e.title,u=l(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}},8099:function(e,t,r){"use strict";r.d(t,{h:function(){return f}});var n=r(1838),i=r(8615),o=r(3511),a=r(4843),l=r(959),s=r(1527),u={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},c={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},f=(0,i.G)(function(e,t){let{size:r,colorScheme:i,variant:f,className:d,spacing:p="0.5rem",isAttached:m,isDisabled:g,orientation:h="horizontal",...y}=e,v=(0,a.cx)("chakra-button__group",d),b=(0,l.useMemo)(()=>({size:r,colorScheme:i,variant:f,isDisabled:g}),[r,i,f,g]),x={display:"inline-flex",...m?u[h]:c[h](p)},_="vertical"===h;return(0,s.jsx)(n.D,{value:b,children:(0,s.jsx)(o.m.div,{ref:t,role:"group",__css:x,className:v,"data-attached":m?"":void 0,"data-orientation":h,flexDir:_?"column":void 0,...y})})});f.displayName="ButtonGroup"},1838:function(e,t,r){"use strict";r.d(t,{D:function(){return n},i:function(){return i}});var[n,i]=(0,r(1235).k)({strict:!1,name:"ButtonGroupContext"})},7856:function(e,t,r){"use strict";r.d(t,{z:function(){return m}});var n=r(959),i=r(1838),o=r(3511),a=r(4843),l=r(1527);function s(e){let{children:t,className:r,...i}=e,s=(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,a.cx)("chakra-button__icon",r);return(0,l.jsx)(o.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:u,children:s})}s.displayName="ButtonIcon";var u=r(6035);function c(e){let{label:t,placement:r,spacing:i="0.5rem",children:s=(0,l.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:f,...d}=e,p=(0,a.cx)("chakra-button__spinner",c),m="start"===r?"marginEnd":"marginStart",g=(0,n.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?i:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,m,i]);return(0,l.jsx)(o.m.div,{className:p,...d,__css:g,children:s})}c.displayName="ButtonSpinner";var f=r(8615),d=r(3877),p=r(6741),m=(0,f.G)((e,t)=>{let r=(0,i.i)(),s=(0,d.mq)("Button",{...r,...e}),{isDisabled:u=null==r?void 0:r.isDisabled,isLoading:f,isActive:m,children:h,leftIcon:y,rightIcon:v,loadingText:b,iconSpacing:x="0.5rem",type:_,spinner:j,spinnerPlacement:w="start",className:C,as:E,...S}=(0,p.Lr)(e),O=(0,n.useMemo)(()=>{let e={...null==s?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!r&&{_focus:e}}},[s,r]),{ref:P,type:k}=function(e){let[t,r]=(0,n.useState)(!e);return{ref:(0,n.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]),type:t?"button":void 0}}(E),N={rightIcon:v,leftIcon:y,iconSpacing:x,children:h};return(0,l.jsxs)(o.m.button,{ref:function(...e){return(0,n.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,P),as:E,type:null!=_?_:k,"data-active":(0,a.PB)(m),"data-loading":(0,a.PB)(f),__css:O,className:(0,a.cx)("chakra-button",C),...S,disabled:u||f,children:[f&&"start"===w&&(0,l.jsx)(c,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:x,children:j}),f?b||(0,l.jsx)(o.m.span,{opacity:0,children:(0,l.jsx)(g,{...N})}):(0,l.jsx)(g,{...N}),f&&"end"===w&&(0,l.jsx)(c,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:x,children:j})]})});function g(e){let{leftIcon:t,rightIcon:r,children:n,iconSpacing:i}=e;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(s,{marginEnd:i,children:t}),n,r&&(0,l.jsx)(s,{marginStart:i,children:r})]})}m.displayName="Button"},6419:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var n=r(8615),i=r(3877),o=r(6741),a=r(3511),l=r(4843),s=r(1527),u=(0,n.G)(function(e,t){let r=(0,i.mq)("Text",e),{className:n,align:u,decoration:c,casing:f,...d}=(0,o.Lr)(e),p=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(a.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...d,__css:r})});u.displayName="Text"},2775:function(e,t,r){"use strict";r.d(t,{aV:function(){return p},HC:function(){return m}});var n=r(84),i=r(1235),o=r(959),a=r(8615),l=r(3877),s=r(6741),u=r(3511),c=r(1527),[f,d]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,a.G)(function(e,t){let r=(0,l.jC)("List",e),{children:n,styleType:i="none",stylePosition:a,spacing:d,...p}=(0,s.Lr)(e),m=o.Children.toArray(n).filter(e=>(0,o.isValidElement)(e));return(0,c.jsx)(f,{value:r,children:(0,c.jsx)(u.m.ul,{ref:t,listStyleType:i,listStylePosition:a,role:"list",__css:{...r.container,...d?{"& > *:not(style) ~ *:not(style)":{mt:d}}:{}},...p,children:m})})});p.displayName="List",(0,a.G)((e,t)=>{let{as:r,...n}=e;return(0,c.jsx)(p,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList",(0,a.G)(function(e,t){let{as:r,...n}=e;return(0,c.jsx)(p,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})}).displayName="UnorderedList";var m=(0,a.G)(function(e,t){let r=d();return(0,c.jsx)(u.m.li,{ref:t,...e,__css:r.item})});m.displayName="ListItem",(0,a.G)(function(e,t){let r=d();return(0,c.jsx)(n.J,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon"},3968:function(e,t,r){"use strict";r.d(t,{W:function(){return u}});var n=r(8615),i=r(6741),o=r(3877),a=r(3511),l=r(4843),s=r(1527),u=(0,n.G)(function(e,t){let{className:r,centerContent:n,...u}=(0,i.Lr)(e),c=(0,o.mq)("Container",e);return(0,s.jsx)(a.m.div,{ref:t,className:(0,l.cx)("chakra-container",r),...u,__css:{...c,...n&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});u.displayName="Container"},6723:function(e,t,r){"use strict";r.d(t,{y$:function(){return f}});var n=r(2578),i=r(8615),o=r(3877),a=r(6741),l=r(959),s=r(1527),u=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,e=>`\\${e}`),c=(0,i.G)(function(e,t){let r=(0,o.mq)("Mark",e),i=(0,a.Lr)(e);return(0,s.jsx)(n.xu,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});function f(e){let{children:t,query:r,styles:n}=e;if("string"!=typeof t)throw Error("The children prop of Highlight must be a string");let i=function(e){let{text:t,query:r}=e;return(0,l.useMemo)(()=>(function({text:e,query:t}){let r=function(e){let t=e.filter(e=>0!==e.length).map(e=>u(e.trim()));return t.length?RegExp(`(${t.join("|")})`,"ig"):null}(Array.isArray(t)?t:[t]);return r?e.split(r).filter(Boolean).map(e=>({text:e,match:r.test(e)})):[{text:e,match:!1}]})({text:t,query:r}),[t,r])}({query:r,text:t});return(0,s.jsx)(s.Fragment,{children:i.map((e,t)=>e.match?(0,s.jsx)(c,{sx:n,children:e.text},t):(0,s.jsx)(l.Fragment,{children:e.text},t))})}},2270:function(e,t,r){"use strict";r.d(t,{X:function(){return u}});var n=r(8615),i=r(3877),o=r(6741),a=r(3511),l=r(4843),s=r(1527),u=(0,n.G)(function(e,t){let r=(0,i.mq)("Heading",e),{className:n,...u}=(0,o.Lr)(e);return(0,s.jsx)(a.m.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...u,__css:r})});u.displayName="Heading"},7221:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(8615),i=r(3877),o=r(6741),a=r(3511),l=r(4843),s=r(1527),u=(0,n.G)(function(e,t){let r=(0,i.mq)("Link",e),{className:n,isExternal:u,...c}=(0,o.Lr)(e);return(0,s.jsx)(a.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",n),...c,__css:r})});u.displayName="Link"},1153:function(e,t,r){"use strict";r.d(t,{k:function(){return a}});var n=r(8615),i=r(3511),o=r(1527),a=(0,n.G)(function(e,t){let{direction:r,align:n,justify:a,wrap:l,basis:s,grow:u,shrink:c,...f}=e;return(0,o.jsx)(i.m.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:n,justifyContent:a,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:c},...f})});a.displayName="Flex"},2578:function(e,t,r){"use strict";r.d(t,{xu:function(){return a}});var n=r(3511),i=r(8615),o=r(1527),a=(0,n.m)("div");a.displayName="Box";var l=(0,i.G)(function(e,t){let{size:r,centerContent:n=!0,...i}=e;return(0,o.jsx)(a,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});l.displayName="Square",(0,i.G)(function(e,t){let{size:r,...n}=e;return(0,o.jsx)(l,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"},4319:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var n=r(8615),i=r(3877),o=r(6741),a=r(3511),l=r(1534),s=r(1527),u=(...e)=>e.filter(Boolean).join(" "),c=(0,n.G)(function(e,t){let r=(0,i.mq)("Link",e),{className:n,isExternal:c,href:f,children:d,...p}=(0,o.Lr)(e);return(0,s.jsx)(a.m.a,{target:c?"_blank":void 0,ref:t,href:f,...p,className:u("chakra-link",n),__css:r,as:l,children:d})})},6558:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(3511),i=r(5283),o=["src","alt","sizes","width","height","fill","loader","quality","priority","loading","placeholder","blurDataURL","unoptimized","onLoadingComplete","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","useMap"],a=(0,n.m)(i,{shouldForwardProp:e=>o.includes(e)})}}]);