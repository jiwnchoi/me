(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{6013:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let i="refresh",o="navigate",l="restore",a="server-patch",s="prefetch",u="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1901:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(1748),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(1351),i=n(5815)._(n(959)),o=r._(n(422)),l=r._(n(1440)),a=n(6430),s=n(1233),u=n(9848);n(1972);let c=n(1033),f=r._(n(7578)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,i,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){let[t,n]=i.version.split(".",2),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:l,width:a,decoding:s,className:u,style:c,fetchPriority:f,placeholder:d,loading:g,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:_,onLoad:j,onError:w,...C}=e;return i.default.createElement("img",{...C,...m(f),loading:g,width:a,height:l,decoding:s,"data-nimg":y?"fill":"1",className:u,style:c,sizes:o,srcSet:r,src:n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&p(e,d,v,b,x,h))},[n,d,v,b,x,w,h,t]),onLoad:e=>{p(e.currentTarget,d,v,b,x,h)},onError:e=>{_(!0),"empty"!==d&&x(!0),w&&w(e)}})});function h(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&o.default.preload?(o.default.preload(n.src,r),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let y=(0,i.forwardRef)((e,t)=>{let n=(0,i.useContext)(c.RouterContext),r=(0,i.useContext)(u.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=d||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:p}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let y=(0,i.useRef)(p);(0,i.useEffect)(()=>{y.current=p},[p]);let[v,b]=(0,i.useState)(!1),[x,_]=(0,i.useState)(!1),{props:j,meta:w}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:v,showAltText:x});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...j,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:_,ref:t}),w.priority?i.default.createElement(h,{isAppRouter:!n,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(1351)._(n(959)),i=n(2672),o=n(6114),l=n(9775),a=n(6689),s=n(1950),u=n(1033),c=n(8347),f=n(2301),d=n(1901),p=n(2606),m=n(6013),g=new Set;function h(e,t,n,r,i,l){if(l||(0,o.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}Promise.resolve(l?e.prefetch(t,i):e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=r.default.forwardRef(function(e,t){let n,l;let{href:g,as:v,children:b,prefetch:x=null,passHref:_,replace:j,shallow:w,scroll:C,locale:S,onClick:E,onMouseEnter:O,onTouchStart:k,legacyBehavior:N=!1,...P}=e;n=b,N&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let R=r.default.useContext(u.RouterContext),I=r.default.useContext(c.AppRouterContext),M=null!=R?R:I,L=!R,z=!1!==x,T=null===x?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:A,as:G}=r.default.useMemo(()=>{if(!R){let e=y(g);return{href:e,as:v?y(v):e}}let[e,t]=(0,i.resolveHref)(R,g,!0);return{href:e,as:v?(0,i.resolveHref)(R,v):t||e}},[R,g,v]),B=r.default.useRef(A),D=r.default.useRef(G);N&&(l=r.default.Children.only(n));let F=N?l&&"object"==typeof l&&l.ref:t,[U,H,q]=(0,f.useIntersection)({rootMargin:"200px"}),V=r.default.useCallback(e=>{(D.current!==G||B.current!==A)&&(q(),D.current=G,B.current=A),U(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[G,F,A,q,U]);r.default.useEffect(()=>{M&&H&&z&&h(M,A,G,{locale:S},{kind:T},L)},[G,A,H,S,z,null==R?void 0:R.locale,M,L,T]);let W={ref:V,onClick(e){N||"function"!=typeof E||E(e),N&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,i,l,a,s,u,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,i,{shallow:a,locale:u,scroll:e}):t[l?"replace":"push"](i||n,{scroll:e})};c?r.default.startTransition(d):d()}(e,M,A,G,j,w,C,S,L)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),M&&(z||!L)&&h(M,A,G,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:T},L)},onTouchStart(e){N||"function"!=typeof k||k(e),N&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),M&&(z||!L)&&h(M,A,G,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:T},L)}};if((0,a.isAbsoluteUrl)(G))W.href=G;else if(!N||_||"a"===l.type&&!("href"in l.props)){let e=void 0!==S?S:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,d.getDomainLocale)(G,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);W.href=t||(0,p.addBasePath)((0,s.addLocale)(G,e,null==R?void 0:R.defaultLocale))}return N?r.default.cloneElement(l,W):r.default.createElement("a",{...P,...W},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(959),i=n(7535),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!o,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},a.push(n),l.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1972);let r=n(4637),i=n(1233);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,s,u,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:x,onLoad:_,onLoadingComplete:j,placeholder:w="empty",blurDataURL:C,fetchPriority:S,layout:E,objectFit:O,objectPosition:k,lazyBoundary:N,lazyRoot:P,...R}=e,{imgConf:I,showAltText:M,blurComplete:L,defaultLoader:z}=t,T=I||i.imageConfigDefault;if("allSizes"in T)a=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);a={...T,allSizes:e,deviceSizes:t}}let A=R.loader||z;delete R.loader,delete R.srcSet;let G="__next_img_default"in A;if(G){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!f&&(f=t)}let B="",D=l(y),F=l(v);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,B=e.src,!b){if(D||F){if(D&&!F){let t=D/e.width;F=Math.round(e.height*t)}else if(!D&&F){let t=F/e.height;D=Math.round(e.width*t)}}else D=e.width,F=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,U=!1),a.unoptimized&&(d=!0),G&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),p&&(S="high");let H=l(h),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},M?{}:{color:"transparent"},x),V=L||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:D,heightInt:F,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+w+'")',W=V?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},K=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:n,quality:o,width:s[c]})}}({config:a,src:c,unoptimized:d,width:D,quality:H,sizes:f,loader:A});return{props:{...R,loading:U?"lazy":m,fetchPriority:S,width:D,height:F,decoding:"async",className:g,style:{...q,...W},sizes:K.sizes,srcSet:K.srcSet,src:K.src},meta:{unoptimized:d,priority:p,placeholder:w,fill:b}}}},4637:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r?40*r:t,s=i?40*i:n,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},2276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return s},default:function(){return u}});let r=n(1351),i=n(6430),o=n(1972),l=n(7491),a=r._(n(7578)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=l.Image},7578:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},6772:function(e,t,n){e.exports=n(1440)},5283:function(e,t,n){e.exports=n(2276)},1534:function(e,t,n){e.exports=n(2461)},4454:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(959),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function s(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var n,i=e.attr,o=e.size,s=e.title,u=a(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}},8099:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var r=n(1838),i=n(8615),o=n(3511),l=n(4843),a=n(959),s=n(1527),u={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},c={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},f=(0,i.G)(function(e,t){let{size:n,colorScheme:i,variant:f,className:d,spacing:p="0.5rem",isAttached:m,isDisabled:g,orientation:h="horizontal",...y}=e,v=(0,l.cx)("chakra-button__group",d),b=(0,a.useMemo)(()=>({size:n,colorScheme:i,variant:f,isDisabled:g}),[n,i,f,g]),x={display:"inline-flex",...m?u[h]:c[h](p)},_="vertical"===h;return(0,s.jsx)(r.D,{value:b,children:(0,s.jsx)(o.m.div,{ref:t,role:"group",__css:x,className:v,"data-attached":m?"":void 0,"data-orientation":h,flexDir:_?"column":void 0,...y})})});f.displayName="ButtonGroup"},1838:function(e,t,n){"use strict";n.d(t,{D:function(){return r},i:function(){return i}});var[r,i]=(0,n(1235).k)({strict:!1,name:"ButtonGroupContext"})},7856:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(959),i=n(1838),o=n(3511),l=n(4843),a=n(1527);function s(e){let{children:t,className:n,...i}=e,s=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,l.cx)("chakra-button__icon",n);return(0,a.jsx)(o.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:u,children:s})}s.displayName="ButtonIcon";var u=n(6035);function c(e){let{label:t,placement:n,spacing:i="0.5rem",children:s=(0,a.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:f,...d}=e,p=(0,l.cx)("chakra-button__spinner",c),m="start"===n?"marginEnd":"marginStart",g=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?i:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,m,i]);return(0,a.jsx)(o.m.div,{className:p,...d,__css:g,children:s})}c.displayName="ButtonSpinner";var f=n(8615),d=n(3877),p=n(6741),m=(0,f.G)((e,t)=>{let n=(0,i.i)(),s=(0,d.mq)("Button",{...n,...e}),{isDisabled:u=null==n?void 0:n.isDisabled,isLoading:f,isActive:m,children:h,leftIcon:y,rightIcon:v,loadingText:b,iconSpacing:x="0.5rem",type:_,spinner:j,spinnerPlacement:w="start",className:C,as:S,...E}=(0,p.Lr)(e),O=(0,r.useMemo)(()=>{let e={...null==s?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!n&&{_focus:e}}},[s,n]),{ref:k,type:N}=function(e){let[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]),type:t?"button":void 0}}(S),P={rightIcon:v,leftIcon:y,iconSpacing:x,children:h};return(0,a.jsxs)(o.m.button,{ref:function(...e){return(0,r.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,k),as:S,type:null!=_?_:N,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(f),__css:O,className:(0,l.cx)("chakra-button",C),...E,disabled:u||f,children:[f&&"start"===w&&(0,a.jsx)(c,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:x,children:j}),f?b||(0,a.jsx)(o.m.span,{opacity:0,children:(0,a.jsx)(g,{...P})}):(0,a.jsx)(g,{...P}),f&&"end"===w&&(0,a.jsx)(c,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:x,children:j})]})});function g(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:i}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(s,{marginEnd:i,children:t}),r,n&&(0,a.jsx)(s,{marginStart:i,children:n})]})}m.displayName="Button"},6419:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(8615),i=n(3877),o=n(6741),l=n(3511),a=n(4843),s=n(1527),u=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:u,decoration:c,casing:f,...d}=(0,o.Lr)(e),p=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(l.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...p,...d,__css:n})});u.displayName="Text"},2775:function(e,t,n){"use strict";n.d(t,{aV:function(){return p},HC:function(){return m}});var r=n(84),i=n(1235),o=n(959),l=n(8615),a=n(3877),s=n(6741),u=n(3511),c=n(1527),[f,d]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),p=(0,l.G)(function(e,t){let n=(0,a.jC)("List",e),{children:r,styleType:i="none",stylePosition:l,spacing:d,...p}=(0,s.Lr)(e),m=o.Children.toArray(r).filter(e=>(0,o.isValidElement)(e));return(0,c.jsx)(f,{value:n,children:(0,c.jsx)(u.m.ul,{ref:t,listStyleType:i,listStylePosition:l,role:"list",__css:{...n.container,...d?{"& > *:not(style) ~ *:not(style)":{mt:d}}:{}},...p,children:m})})});p.displayName="List",(0,l.G)((e,t)=>{let{as:n,...r}=e;return(0,c.jsx)(p,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList",(0,l.G)(function(e,t){let{as:n,...r}=e;return(0,c.jsx)(p,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})}).displayName="UnorderedList";var m=(0,l.G)(function(e,t){let n=d();return(0,c.jsx)(u.m.li,{ref:t,...e,__css:n.item})});m.displayName="ListItem",(0,l.G)(function(e,t){let n=d();return(0,c.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"},3968:function(e,t,n){"use strict";n.d(t,{W:function(){return u}});var r=n(8615),i=n(6741),o=n(3877),l=n(3511),a=n(4843),s=n(1527),u=(0,r.G)(function(e,t){let{className:n,centerContent:r,...u}=(0,i.Lr)(e),c=(0,o.mq)("Container",e);return(0,s.jsx)(l.m.div,{ref:t,className:(0,a.cx)("chakra-container",n),...u,__css:{...c,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});u.displayName="Container"},6723:function(e,t,n){"use strict";n.d(t,{y$:function(){return f}});var r=n(2578),i=n(8615),o=n(3877),l=n(6741),a=n(959),s=n(1527),u=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,e=>`\\${e}`),c=(0,i.G)(function(e,t){let n=(0,o.mq)("Mark",e),i=(0,l.Lr)(e);return(0,s.jsx)(r.xu,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})});function f(e){let{children:t,query:n,styles:r}=e;if("string"!=typeof t)throw Error("The children prop of Highlight must be a string");let i=function(e){let{text:t,query:n}=e;return(0,a.useMemo)(()=>(function({text:e,query:t}){let n=function(e){let t=e.filter(e=>0!==e.length).map(e=>u(e.trim()));return t.length?RegExp(`(${t.join("|")})`,"ig"):null}(Array.isArray(t)?t:[t]);return n?e.split(n).filter(Boolean).map(e=>({text:e,match:n.test(e)})):[{text:e,match:!1}]})({text:t,query:n}),[t,n])}({query:n,text:t});return(0,s.jsx)(s.Fragment,{children:i.map((e,t)=>e.match?(0,s.jsx)(c,{sx:r,children:e.text},t):(0,s.jsx)(a.Fragment,{children:e.text},t))})}},2270:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var r=n(8615),i=n(3877),o=n(6741),l=n(3511),a=n(4843),s=n(1527),u=(0,r.G)(function(e,t){let n=(0,i.mq)("Heading",e),{className:r,...u}=(0,o.Lr)(e);return(0,s.jsx)(l.m.h2,{ref:t,className:(0,a.cx)("chakra-heading",e.className),...u,__css:n})});u.displayName="Heading"},7221:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(8615),i=n(3877),o=n(6741),l=n(3511),a=n(4843),s=n(1527),u=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:u,...c}=(0,o.Lr)(e);return(0,s.jsx)(l.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,a.cx)("chakra-link",r),...c,__css:n})});u.displayName="Link"},1153:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(8615),i=n(3511),o=n(1527),l=(0,r.G)(function(e,t){let{direction:n,align:r,justify:l,wrap:a,basis:s,grow:u,shrink:c,...f}=e;return(0,o.jsx)(i.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:l,flexWrap:a,flexBasis:s,flexGrow:u,flexShrink:c},...f})});l.displayName="Flex"},2578:function(e,t,n){"use strict";n.d(t,{xu:function(){return l}});var r=n(3511),i=n(8615),o=n(1527),l=(0,r.m)("div");l.displayName="Box";var a=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,o.jsx)(l,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});a.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,o.jsx)(a,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},4319:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(8615),i=n(3877),o=n(6741),l=n(3511),a=n(1534),s=n(1527),u=(...e)=>e.filter(Boolean).join(" "),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:c,href:f,children:d,...p}=(0,o.Lr)(e);return(0,s.jsx)(l.m.a,{target:c?"_blank":void 0,ref:t,href:f,...p,className:u("chakra-link",r),__css:n,as:a,children:d})})},6558:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(3511),i=n(5283),o=["src","alt","sizes","width","height","fill","loader","quality","priority","loading","placeholder","blurDataURL","unoptimized","onLoadingComplete","alt","crossOrigin","decoding","loading","referrerPolicy","sizes","src","useMap"],l=(0,r.m)(i,{shouldForwardProp:e=>o.includes(e)})},5394:function(e,t,n){"use strict";n.d(t,{U:function(){return p}});var r={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1]};r.easeOut,r.easeIn;var i={enter:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.enter}),exit:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.exit})},o=n(4843),l=n(5235),a=n(3027),s=n(959),u=n(1527),c=e=>null!=e&&parseInt(e.toString(),10)>0,f={exit:{height:{duration:.2,ease:r.ease},opacity:{duration:.3,ease:r.ease}},enter:{height:{duration:.3,ease:r.ease},opacity:{duration:.4,ease:r.ease}}},d={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:r,delay:o})=>{var l;return{...e&&{opacity:c(t)?1:0},height:t,transitionEnd:null==r?void 0:r.exit,transition:null!=(l=null==n?void 0:n.exit)?l:i.exit(f.exit,o)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:r,delay:o})=>{var l;return{...e&&{opacity:1},height:t,transitionEnd:null==r?void 0:r.enter,transition:null!=(l=null==n?void 0:n.enter)?l:i.enter(f.enter,o)}}},p=(0,s.forwardRef)((e,t)=>{let{in:n,unmountOnExit:r,animateOpacity:i=!0,startingHeight:c=0,endingHeight:f="auto",style:p,className:m,transition:g,transitionEnd:h,...y}=e,[v,b]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=setTimeout(()=>{b(!0)});return()=>clearTimeout(e)},[]),(0,o.ZK)({condition:Number(c)>0&&!!r,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let x=parseFloat(c.toString())>0,_={startingHeight:c,endingHeight:f,animateOpacity:i,transition:v?g:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:r?null==h?void 0:h.exit:{...null==h?void 0:h.exit,display:x?"block":"none"}}},j=!r||n,w=n||r?"enter":"exit";return(0,u.jsx)(l.M,{initial:!1,custom:_,children:j&&(0,u.jsx)(a.E.div,{ref:t,...y,className:(0,o.cx)("chakra-collapse",m),style:{overflow:"hidden",display:"block",...p},custom:_,variants:d,initial:!!r&&"exit",animate:w,exit:"exit"})})});p.displayName="Collapse"}}]);