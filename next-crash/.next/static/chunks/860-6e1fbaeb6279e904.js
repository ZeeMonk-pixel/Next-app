(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,a=r(2648).Z,n=r(1598).Z,o=r(7273).Z,l=n(r(7294)),s=a(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);var f=a(r(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,n,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}function v(e){let[t,r]=l.version.split("."),i=parseInt(t,10),a=parseInt(r,10);return i>18||18===i&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let b=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:n,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:g,fill:m,placeholder:h,loading:b,srcString:w,config:y,unoptimized:C,loader:E,onLoadRef:j,onLoadingCompleteRef:x,setBlurComplete:S,setShowAltText:Z,onLoad:_,onError:R}=e,$=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return b=f?"lazy":b,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},$,v(g),{loading:b,width:n,height:a,decoding:"async","data-nimg":m?"fill":"1",className:c,style:i({},d,u)},r,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(R&&(e.src=e.src),e.complete&&p(e,w,h,j,x,S,C))},[w,h,j,x,S,R,C,t]),onLoad:e=>{let t=e.currentTarget;p(t,w,h,j,x,S,C)},onError:e=>{Z(!0),"blur"===h&&S(!0),R&&R(e)}})))}),w=l.forwardRef((e,t)=>{let r,a;var n,{src:p,sizes:w,unoptimized:y=!1,priority:C=!1,loading:E,className:j,quality:x,width:S,height:Z,fill:_,style:R,onLoad:$,onLoadingComplete:z,placeholder:N="empty",blurDataURL:k,fetchPriority:I,layout:O,objectFit:P,objectPosition:M,lazyBoundary:A,lazyRoot:L}=e,B=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[D]),T=B,G=T.loader||f.default;delete T.loader;let H="__next_img_default"in G;if(H){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,i=o(t,["config"]);return e(i)}}if(O){"fill"===O&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(R=i({},R,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!w&&(w=t)}let W="",q=h(S),U=h(Z);if("object"==typeof(n=p)&&(m(n)||void 0!==n.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,k=k||e.blurDataURL,W=e.src,!_){if(q||U){if(q&&!U){let t=q/e.width;U=Math.round(e.height*t)}else if(!q&&U){let t=U/e.height;q=Math.round(e.width*t)}}else q=e.width,U=e.height}}let V=!C&&("lazy"===E||void 0===E);(!(p="string"==typeof p?p:W)||p.startsWith("data:")||p.startsWith("blob:"))&&(y=!0,V=!1),F.unoptimized&&(y=!0),H&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(y=!0),C&&(I="high");let[J,Y]=l.useState(!1),[K,Q]=l.useState(!1),X=h(x),ee=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:M}:{},K?{}:{color:"transparent"},R),et="blur"===N&&k&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:U,blurWidth:r,blurHeight:a,blurDataURL:k,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:n,sizes:o,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[d]})}}({config:F,src:p,unoptimized:y,width:q,quality:X,sizes:w,loader:G}),ei=p,ea=l.useRef($);l.useEffect(()=>{ea.current=$},[$]);let en=l.useRef(z);l.useEffect(()=>{en.current=z},[z]);let eo=i({isLazy:V,imgAttributes:er,heightInt:U,widthInt:q,qualityInt:X,className:j,imgStyle:ee,blurStyle:et,loading:E,config:F,fetchPriority:I,fill:_,unoptimized:y,placeholder:N,loader:G,srcString:ei,onLoadRef:ea,onLoadingCompleteRef:en,setBlurComplete:Y,setShowAltText:Q},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},eo,{ref:t})),C?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:T.crossOrigin},v(I)))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:n,objectFit:o}=e,l=i||t,s=a||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){e.exports=r(3740)},8375:function(e,t,r){"use strict";var i=r(4184),a=r.n(i),n=r(7294),o=r(5446),l=r(8146),s=r(3551),c=r(6792),d=r(1068),u=r(1485),f=r(9602),g=r(6611),m=r(5893);let h=(0,f.Z)("h4");h.displayName="DivStyledAsH4";let p=(0,g.Z)("alert-heading",{Component:h}),v=(0,g.Z)("alert-link",{Component:s.Z}),b=n.forwardRef((e,t)=>{let{bsPrefix:r,show:i=!0,closeLabel:n="Close alert",closeVariant:s,className:f,children:g,variant:h="primary",onClose:p,dismissible:v,transition:b=d.Z,...w}=(0,o.Ch)(e,{show:"onClose"}),y=(0,c.vE)(r,"alert"),C=(0,l.Z)(e=>{p&&p(!1,e)}),E=!0===b?d.Z:b,j=(0,m.jsxs)("div",{role:"alert",...E?void 0:w,ref:t,className:a()(f,y,h&&`${y}-${h}`,v&&`${y}-dismissible`),children:[v&&(0,m.jsx)(u.Z,{onClick:C,"aria-label":n,variant:s}),g]});return E?(0,m.jsx)(E,{unmountOnExit:!0,...w,ref:void 0,in:i,children:j}):i?j:null});b.displayName="Alert",t.Z=Object.assign(b,{Link:v,Heading:p})},8182:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var i=r(4184),a=r.n(i),n=r(7294),o=r(6792),l=r(6611),s=r(9602),c=r(5893);let d=n.forwardRef(({bsPrefix:e,className:t,variant:r,as:i="img",...n},l)=>{let s=(0,o.vE)(e,"card-img");return(0,c.jsx)(i,{ref:l,className:a()(r?`${s}-${r}`:s,t),...n})});d.displayName="CardImg";var u=r(9059);let f=n.forwardRef(({bsPrefix:e,className:t,as:r="div",...i},l)=>{let s=(0,o.vE)(e,"card-header"),d=(0,n.useMemo)(()=>({cardHeaderBsPrefix:s}),[s]);return(0,c.jsx)(u.Z.Provider,{value:d,children:(0,c.jsx)(r,{ref:l,...i,className:a()(t,s)})})});f.displayName="CardHeader";let g=(0,s.Z)("h5"),m=(0,s.Z)("h6"),h=(0,l.Z)("card-body"),p=(0,l.Z)("card-title",{Component:g}),v=(0,l.Z)("card-subtitle",{Component:m}),b=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),y=(0,l.Z)("card-footer"),C=(0,l.Z)("card-img-overlay"),E=n.forwardRef(({bsPrefix:e,className:t,bg:r,text:i,border:n,body:l=!1,children:s,as:d="div",...u},f)=>{let g=(0,o.vE)(e,"card");return(0,c.jsx)(d,{ref:f,...u,className:a()(t,g,r&&`bg-${r}`,i&&`text-${i}`,n&&`border-${n}`),children:l?(0,c.jsx)(h,{children:s}):s})});E.displayName="Card";var j=Object.assign(E,{Img:d,Title:p,Subtitle:v,Body:h,Link:b,Text:w,Header:f,Footer:y,ImgOverlay:C})},1555:function(e,t,r){"use strict";var i=r(4184),a=r.n(i),n=r(7294),o=r(6792),l=r(5893);let s=n.forwardRef((e,t)=>{let[{className:r,...i},{as:n="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:r,...i}){t=(0,o.vE)(t,"col");let n=(0,o.pi)(),l=(0,o.zG)(),s=[],c=[];return n.forEach(e=>{let r,a,n;let o=i[e];delete i[e],"object"==typeof o&&null!=o?{span:r,offset:a,order:n}=o:r=o;let d=e!==l?`-${e}`:"";r&&s.push(!0===r?`${t}${d}`:`${t}${d}-${r}`),null!=n&&c.push(`order${d}-${n}`),null!=a&&c.push(`offset${d}-${a}`)}),[{...i,className:a()(r,...s,...c)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(n,{...i,ref:t,className:a()(r,!c.length&&s)})});s.displayName="Col",t.Z=s},4051:function(e,t,r){"use strict";var i=r(4184),a=r.n(i),n=r(7294),o=r(6792),l=r(5893);let s=n.forwardRef(({bsPrefix:e,className:t,as:r="div",...i},n)=>{let s=(0,o.vE)(e,"row"),c=(0,o.pi)(),d=(0,o.zG)(),u=`${s}-cols`,f=[];return c.forEach(e=>{let t;let r=i[e];delete i[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let a=e!==d?`-${e}`:"";null!=t&&f.push(`${u}${a}-${t}`)}),(0,l.jsx)(r,{ref:n,...i,className:a()(t,s,...f)})});s.displayName="Row",t.Z=s}}]);