module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),s=n.n(i),a="fslightbox-",c="".concat(a,"styles"),l="".concat(a,"cursor-grabbing"),u="".concat(a,"full-dimension"),f="".concat(a,"flex-centered"),d="".concat(a,"transform-transition"),p="".concat(a,"absoluted"),h="".concat(a,"fade-in"),m="".concat(a,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(a,"opacity-1"),x="".concat(a,"source"),y=function(e){var t=e.size,n=e.viewBox,r=e.d;return s.a.createElement("svg",{width:t,height:t,viewBox:n,xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{className:"".concat(a,"svg-path"),d:r}))},w=function(e){var t=e.onClick,n=e.viewBox,r=e.size,o=e.d,i=e.title;return s.a.createElement("div",{onClick:t,className:"".concat(a,"toolbar-button ").concat(f),title:i},s.a.createElement(y,{viewBox:n,size:r,d:o}))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e){var t=e.fsLightbox,n=t.componentsServices.toolbarButtons.fullscreen,r=t.fs,o=S(Object(i.useState)(!1),2),a=o[0],c=o[1];return n.get=function(){return a},n.set=c,s.a.createElement(w,{onClick:function(){a?r.exitFullscreen():r.enterFullscreen()},viewBox:a?"0 0 950 1024":"0 0 18 18",size:a?"24px":"20px",d:a?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:a?"Exit fullscreen":"Enter fullscreen"})},A=function(e){var t=e.fsLightbox.core.lightboxCloser.closeLightbox;return s.a.createElement(w,{onClick:t,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},O=function(e){var t=e.fsLightbox;return s.a.createElement("div",{className:"".concat(a,"toolbar")},s.a.createElement(E,{fsLightbox:t}),s.a.createElement(A,{fsLightbox:t}))};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(e){var t=e.fsLightbox,n=t.componentsServices,r=t.props.sources,o=t.stageIndexes,c=F(Object(i.useState)(o.current+1),2),l=c[0],u=c[1];n.setSlideNumber=function(e){u(e)};var f=s.a.createRef(),d=s.a.createRef();return Object(i.useEffect)((function(){d.current.offsetWidth>55&&(f.current.style.justifyContent="flex-start")}),[]),s.a.createElement("div",{ref:f,className:"".concat(a,"slide-number-container")},s.a.createElement("div",{ref:d,className:"fslightbox-flex-centered"},s.a.createElement("span",null,l),s.a.createElement("span",{className:"".concat(a,"slash")}),s.a.createElement("span",null,r.length)))},j=function(e){var t=e.fsLightbox;return s.a.createElement("div",{className:"".concat(a,"nav")},s.a.createElement(O,{fsLightbox:t}),t.props.sources.length>1&&s.a.createElement(I,{fsLightbox:t}))};function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var t=e.fsLightbox.componentsServices,n=T(Object(i.useState)(!1),2),r=n[0],o=n[1];return t.showSlideSwipingHovererIfNotYet=function(){r||o(!0)},t.hideSlideSwipingHovererIfShown=function(){r&&o(!1)},r&&s.a.createElement("div",{className:"".concat(a,"slide-swiping-hoverer ").concat(u," ").concat(p)})},N=function(e){var t=e.onClick,n=e.name,r=e.d,o=n.charAt(0).toUpperCase()+n.slice(1),i="".concat(a,"slide-btn");return s.a.createElement("div",{onClick:t,title:"".concat(o," slide"),className:"".concat(i,"-container ").concat(i,"-").concat(n,"-container")},s.a.createElement("div",{className:"".concat(i," ").concat(f)},s.a.createElement(y,{viewBox:"0 0 20 20",size:"20px",d:r})))};function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=function(e){var t=e.o,n=t.elements.sourcesComponents,r=t.isl,o=t.props.loadOnlyCurrentSource,a=t.saw,c=t.sawu,l=t.st,u=t.stageIndexes.current,f=e.i,d=P(Object(i.useState)(!1),2),p=d[0],h=d[1];return c[f]=function(){h(!p)},s.a.createElement("div",{ref:a[f]},!r[f]&&s.a.createElement("div",{className:"fslightboxl"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),(f===u||!o&&l.i(f))&&n[f])},M=function(e){var t=e.o,n=e.i,r=t.props.slideDistance,o=t.smw,i=t.smwm,a=t.st,c=0;i[n]={};var l=i[n];function h(){return o[n].current}function m(e){h().style.transform="translateX(".concat(e+c,"px)"),c=0}function g(){return(1+r)*innerWidth}return l.s=function(){h().style.display="flex"},l.h=function(){h().style.display="none"},l.a=function(){h().classList.add(d)},l.d=function(){h().classList.remove(d)},l.n=function(){h().style.removeProperty("transform")},l.v=function(e){return c=e,l},l.ne=function(){m(-g())},l.z=function(){m(0)},l.p=function(){m(g())},s.a.createElement("div",{ref:o[n],className:"".concat(p," ").concat(u," ").concat(f),style:a.i(n)?{}:{display:"none"}},s.a.createElement(H,{o:t,i:n}))},D=function(e){for(var t=e.o,n=t.core.slideSwipingDown.listener,r=t.props.sources,o=[],i=0;i<r.length;i++)o.push(s.a.createElement(M,{o:t,i:i,key:i}));return s.a.createElement("div",{className:"".concat(p," ").concat(u),onMouseDown:n,onTouchStart:n},o)};function U(){var e=document.createElement("style");e.className=c,e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")),document.head.appendChild(e)}function W(e){var t=e.props.disableLocalStorage;if(!t){var n=localStorage.getItem("fslightbox-scrollbar-width");if(n)return n}var r=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),o=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(r);var i=r.offsetWidth;r.appendChild(o);var s=o.offsetWidth;document.body.removeChild(r);var a=i-s;return t||localStorage.setItem("fslightbox-scrollbar-width",a.toString()),a}function B(e){var t=e.data,n=e.i,r=e.props.openOnMount;document.getElementsByClassName(c).length||U(),t.scrollbarWidth=W(e),r&&n()}function X(e){var t,n=e.props,r={},o=0;function i(e){o++,r[e]=!1}this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:i(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===r[n]&&(o--,"invalid"!==e?r[n]=e:delete r[n],0===o&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,r),localStorage.setItem("fslightbox-types",JSON.stringify(t))))},n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=i)}function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var q=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props,i=o.customAttributes,a=o.sources,c=e.i;return s.a.createElement("img",V({className:x,onLoad:n[c].handleImageLoad,ref:r[c],src:a[c]},i&&i[c]?i[c]:{}))};function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props,i=o.customAttributes,c=o.sources,l=t.timeout,u=e.i;return l(n[u].handleNotMetaDatedVideoLoad,3e3),s.a.createElement("video",_({className:"".concat(x," ").concat(a,"video"),src:c[u],controls:!0,onLoadedMetadata:n[u].handleVideoLoad,ref:r[u]},i&&i[u]?i[u]:{}))};function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=function(e){var t=e.fsLightbox,n=t.elements.sources,r=t.collections.sourceLoadHandlers,o=t.props,c=o.customAttributes,l=o.sources,u=e.i;Object(i.useEffect)(r[u].handleYoutubeLoad);var f=l[u],d=f.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],p=f.split("?")[1];return p=p||"",s.a.createElement("iframe",$({ref:n[u],className:"".concat(x," ").concat(a,"youtube-iframe"),src:"https://www.youtube.com/embed/".concat(d,"?").concat(p),allowFullScreen:!0},c&&c[u]?c[u]:{}))},J=function(e){var t=e.fsLightbox,n=(t.componentsServices.hideSourceLoaderCollection,t.isl),r=t.sawu,o=t.smw,c=e.i;return Object(i.useEffect)((function(){n[c]=!0,r[c](),o[c].current.classList.add(g)})),s.a.createElement("div",{className:"".concat(a,"invalid-file-wrapper ").concat(f)},"Invalid source")},G=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props.sources,a=e.i;Object(i.useEffect)(n[a].handleCustomLoad);var c=o[a].props.className;return s.a.cloneElement(o[a],{ref:r[a],className:c?"".concat(c," ").concat(x):x})};function Z(e){var t=e.componentsServices.isLightboxOpenManager,n=e.elements.sourcesComponents,r=e.sawu;this.runActionsForSourceTypeAndIndex=function(o,i){var a;switch(o){case"image":a=q;break;case"video":a=Y;break;case"youtube":a=Q;break;case"custom":a=G;break;default:a=J}n[i]=s.a.createElement(a,{fsLightbox:e,i:i}),t.get()&&r[i]()}}function K(){var e,t,n,r={isUrlYoutubeOne:function(e){var t=document.createElement("a");t.href=e;var n=t.hostname;return"www.youtube.com"===n||"youtu.be"===n},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function o(){if(4!==n.readyState){if(2===n.readyState){var e;switch(r.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(i){if(r.isUrlYoutubeOne(e))return i("youtube");t=i,(n=new XMLHttpRequest).onreadystatechange=o,n.open("GET",e,!0),n.send()}}function ee(e,t,n){var r=e.props,o=r.types,i=r.type,s=r.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return o&&o[e]?t=o[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){var r=a(K);r.setUrlToCheck(s[e]),r.getSourceType((function(r){t.handleReceivedSourceTypeForUrl(r,s[e]),n.runActionsForSourceTypeAndIndex(r,e)}))}}function te(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.lightboxCloser,o=n.slideIndexChanger,i=e.stageIndexes;this.runTogglerUpdateActions=function(){t.get()?r.closeLightbox():e.ii?e.o():e.i()},this.runCurrentStageIndexUpdateActionsFor=function(e){e!==i.current&&(t.get()?o.jumpTo(e):i.current=e)}}function ne(e){var t=e.core.lightboxUpdater,n=(0,e.resolve)(te);t.handleUpdate=function(t){var r=e.props;void 0!==r.source?n.runCurrentStageIndexUpdateActionsFor(r.sources.indexOf(r.source)):void 0!==r.sourceIndex?n.runCurrentStageIndexUpdateActionsFor(r.sourceIndex):void 0!==r.slide&&n.runCurrentStageIndexUpdateActionsFor(r.slide-1),t.toggler!==r.toggler&&n.runTogglerUpdateActions()}}function re(e,t){var n=e.current.classList;n.contains(t)&&n.remove(t)}function oe(e){var t=e.core,n=t.lightboxCloser,r=t.slideChangeFacade,o=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":r.changeToPrevious();break;case"ArrowRight":r.changeToNext();break;case"F11":e.preventDefault(),o.toggleFullscreen()}}}function ie(e){return e.touches?e.touches[0].screenX:e.screenX}function se(e){var t=e.componentsServices,n=e.elements.container,r=e.slideSwipingProps,o=e.smwm,i=e.stageIndexes;function s(e,t){o[e].v(r.swipedX)[t]()}this.runActionsForEvent=function(e){t.showSlideSwipingHovererIfNotYet(),n.current.classList.add(l),r.swipedX=ie(e)-r.downScreenX;var o=i.previous,a=i.next;s(i.current,"z"),void 0!==o&&r.swipedX>0?s(o,"ne"):void 0!==a&&r.swipedX<0&&s(a,"p")}}function ae(e){var t,n=e.props.sources,r=e.resolve,o=e.slideSwipingProps,i=r(se),s=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isSwiping&&s()&&i.runActionsForEvent(e)}}function ce(e){var t=e.core.slideIndexChanger,n=e.smwm,r=e.stageIndexes,o=e.sws;function i(e){var t=n[r.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.runPositiveSwipedXActions=function(){var e=r.previous;if(void 0===e)i("z");else{i("p");var n=r.next;t.changeTo(e);var a=r.previous;o.d(a),o.b(n),i("z"),s(a,"ne")}},this.runNegativeSwipedXActions=function(){var e=r.next;if(void 0===e)i("z");else{i("ne");var n=r.previous;t.changeTo(e);var a=r.next;o.d(a),o.b(n),i("z"),s(a,"p")}}}function le(e){var t=e.componentsServices,n=e.core.lightboxCloser,r=e.elements.container,o=e.resolve,i=e.slideSwipingProps,s=o(ce);this.runNoSwipeActions=function(){t.hideSlideSwipingHovererIfShown(),i.isSourceDownEventTarget||n.closeLightbox(),i.isSwiping=!1},this.runActions=function(){i.swipedX>0?s.runPositiveSwipedXActions():s.runNegativeSwipedXActions(),t.hideSlideSwipingHovererIfShown(),r.current.classList.remove(l),i.isSwiping=!1}}function ue(e){var t=e.resolve,n=e.slideSwipingProps,r=t(le);this.listener=function(){n.isSwiping&&(n.swipedX?r.runActions():r.runNoSwipeActions())}}function fe(e){return!e.touches||e.touches.length<=1}function de(e){var t=e.elements.sources,n=e.slideSwipingProps,r=e.smwm,o=e.stageIndexes;this.runActions=function(e){"VIDEO"===e.target.tagName||e.touches||e.preventDefault(),n.isSwiping=!0,n.downScreenX=ie(e),n.swipedX=0;var i=t[o.current].current;i&&i.contains(e.target)?n.isSourceDownEventTarget=!0:n.isSourceDownEventTarget=!1;for(var s=0;s<r.length;s++)r[s].d()}}function pe(e){var t,n,r;!function(e){var t=e.props.sources,n=e.st,r=e.stageIndexes,o=t.length-1;n.getPreviousSlideIndex=function(){return 0===r.current?o:r.current-1},n.getNextSlideIndex=function(){return r.current===o?0:r.current+1},n.u=0===o?function(){}:1===o?function(){0===r.current?(r.next=1,delete r.previous):(r.previous=0,delete r.next)}:function(){r.previous=n.getPreviousSlideIndex(),r.next=n.getNextSlideIndex()},n.i=o<=2?function(){return!0}:function(e){var t=r.current;if(0===t&&e===o||t===o&&0===e)return!0;var n=t-e;return-1===n||0===n||1===n}}(e),n=(t=e).core.classFacade,r=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<r[e].length;n++)re(r[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices.toolbarButtons.fullscreen,n=e.fs,r=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function o(e){for(var t=0;t<r.length;t++)document[e](r[t],i)}function i(){t.set(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}n.enterFullscreen=function(){t.set(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.set(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},n.toggleFullscreen=function(){t.get()?n.exitFullscreen():n.enterFullscreen()},n.listen=function(){o("addEventListener")},n.unlisten=function(){o("removeEventListener")}}(e),function(e){var t,n=e.core,r=n.globalEventsController,o=n.windowResizeActioner,i=e.fs,s=e.resolve,a=s(oe),c=s(ae),l=s(ue);r.attachListeners=function(){t=function(e,t){return function(){t.apply(void 0,arguments)&&e.apply(void 0,arguments)}}(c.listener,fe),document.addEventListener("mousemove",c.listener),document.addEventListener("touchmove",t,{passive:!0}),document.addEventListener("mouseup",l.listener),document.addEventListener("touchend",l.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",a.listener),i.listen()},r.removeListeners=function(){document.removeEventListener("mousemove",c.listener),document.removeEventListener("touchmove",t),document.removeEventListener("mouseup",l.listener),document.removeEventListener("touchend",l.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",a.listener),i.unlisten()}}(e),function(e){var t=e.core,n=t.lightboxCloser,r=t.lightboxCloseActioner,o=e.componentsServices.toolbarButtons.fullscreen,i=e.fs;n.closeLightbox=function(){r.isLightboxFadingOut||(r.runActions(),o.get()&&i.exitFullscreen())}}(e),function(e){var t=e.componentsServices,n=t.toolbarButtons.fullscreen,r=t.isLightboxOpenManager,o=e.core,i=o.eventsDispatcher,s=o.globalEventsController,a=o.lightboxCloseActioner,c=o.scrollbarRecompensor,l=e.elements.container,u=e.fs,f=e.props,d=e.slideSwipingProps,p=e.timeout;a.isLightboxFadingOut=!1,a.runActions=function(){a.isLightboxFadingOut=!0,l.current.classList.add(v),s.removeListeners(),f.exitFullscreenOnClose&&n.get()&&u.exitFullscreen(),p((function(){a.isLightboxFadingOut=!1,d.isSwiping=!1,l.current.classList.remove(v),document.documentElement.classList.remove("fslightbox-open"),c.removeRecompense(),r.set(!1),i.dispatch("onClose")}),250)}}(e),ne(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?r():window.addEventListener("load",(function(){r(),n.addRecompense=r}))};var r=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,r=t.slideIndexChanger,o=e.props.sources,i=e.st;o.length>1?(n.changeToPrevious=function(){r.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){r.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.componentsServices,n=e.core,r=n.slideIndexChanger,o=n.sourceDisplayFacade,i=e.isl,s=e.saw,a=e.smwm,c=e.st,l=e.stageIndexes,u=e.sws;e.timeout,r.changeTo=function(e){l.current=e,c.u(),t.setSlideNumber(e+1),o.displaySourcesWhichShouldBeDisplayed()},r.jumpTo=function(e){var t=l.previous,n=l.current,o=l.next,f=i[n],d=i[e];r.changeTo(e);for(var p=0;p<a.length;p++)a[p].d();u.d(n),u.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=l.previous,r=l.current,p=l.next;function g(){c.i(n)?n===l.previous?a[n].ne():n===l.next&&a[n].p():(a[n].h(),a[n].n())}f&&s[n].current.classList.add(m),d&&s[r].current.classList.add(h),u.a(),void 0!==e&&e!==n&&a[e].ne(),a[r].n(),void 0!==p&&p!==n&&a[p].p(),u.b(t),u.b(o),i[n]?setTimeout(g,210):g()}))}))}}(e),function(e){var t=e.core.slideSwipingDown,n=e.resolve,r=e.slideSwipingProps,o=n(de);t.listener=function(e){e.touches&&e.touches.length>1?r.isSwiping=!1:o.runActions(e)}}(e),function(e){var t=e.core.sourceDisplayFacade,n=e.stageIndexes,r=e.props.loadOnlyCurrentSource,o=e.sawu;t.displaySourcesWhichShouldBeDisplayed=function(){if(r)o[n.current]();else for(var e in n){var t=n[e];void 0!==t&&o[t]()}}}(e),function(e){var t=e.isl,n=e.stageIndexes,r=e.saw,o=e.smwm,i=e.st,s=e.sws;s.a=function(){for(var e in n)o[n[e]].s()},s.b=function(e){void 0===e||i.i(e)||(o[e].h(),o[e].n())},s.c=function(){for(var e in n)s.d(n[e])},s.d=function(e){if(t[e]){var n=r[e];re(n,g),re(n,h),re(n,m)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,r=e.data,o=e.elements.sources,i=e.smwm,s=e.stageIndexes;n.runActions=function(){innerWidth<992?r.maxSourceWidth=innerWidth:r.maxSourceWidth=.9*innerWidth,r.maxSourceHeight=.9*innerHeight;for(var e=0;e<o.length;e++)i[e].d(),t[e]&&o[e].current&&t[e].adjustSize();var n=s.previous,a=s.next;void 0!==n&&i[n].ne(),void 0!==a&&i[a].p()}}(e)}function he(e){for(var t=e.props.sources,n=[],r=0;r<t.length;r++)n.push(s.a.createRef());return n}function me(e,t,n){for(var r=0;r<e.props.sources.length;r++)e.collections[t][r]=e.resolve(n,[r])}function ge(e,t,n,r){var o=e.data,i=e.elements.sources,s=n/r,a=0;this.adjustSize=function(){if((a=o.maxSourceWidth/s)<o.maxSourceHeight)return n<o.maxSourceWidth&&(a=r),c();a=r>o.maxSourceHeight?o.maxSourceHeight:r,c()};var c=function(){var e=i[t].current.style;e.width=a*s+"px",e.height=a+"px"}}function ve(e,t){var n=this,r=e.collections.sourceSizers,o=e.elements.sources,i=e.isl,s=e.resolve,a=e.saw,c=e.sawu;function l(e,n){r[t]=s(ge,[t,e,n]),r[t].adjustSize()}this.runActions=function(e,r){i[t]=!0,c[t](),o[t].current.classList.add(b),a[t].current.classList.add(g),l(e,r),n.runActions=l}}function be(e,t){var n,r=this,o=e.elements.sources,i=e.props,s=e.resolve,a=e.timeout,c=s(ve,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,r=t.naturalHeight;c.runActions(n,r)},this.handleVideoLoad=function(e){var t=e.target,r=t.videoWidth,o=t.videoHeight;n=!0,c.runActions(r,o)},this.handleNotMetaDatedVideoLoad=function(){n||r.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeVideoDimensions&&(e=i.maxYoutubeVideoDimensions.width,t=i.maxYoutubeVideoDimensions.height),c.runActions(e,t)},this.handleCustomLoad=function(){a((function(){var e=o[t].current;c.runActions(e.offsetWidth,e.offsetHeight)}))}}function xe(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.eventsDispatcher,o=n.globalEventsController,i=n.scrollbarRecompensor,s=n.sourceDisplayFacade,a=n.windowResizeActioner,c=e.elements,l=e.st,u=e.stageIndexes,f=e.sws;function d(){s.displaySourcesWhichShouldBeDisplayed(),document.documentElement.classList.add("fslightbox-open"),i.addRecompense(),o.attachListeners(),a.runActions(),r.dispatch("onOpen")}e.o=function(){me(e,"sourceLoadHandlers",be),t.set(!0,(function(){f.b(u.previous),f.b(u.current),f.b(u.next),l.u(),f.c(),f.a(),d(),r.dispatch("onShow")}))},e.i=function(){e.ii=!0,e.smw=he(e),e.saw=he(e),c.sources=he(e),me(e,"sourceLoadHandlers",be),pe(e),l.u(),t.set(!0,(function(){d(),function(e){for(var t=e.props.sources,n=e.resolve,r=n(X),o=n(Z),i=n(ee,[r,o]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=i.getTypeSetByClientForIndex(s);if(a)o.runActionsForSourceTypeAndIndex(a,s);else{var c=r.getSourceTypeFromLocalStorageByUrl(t[s]);c?o.runActionsForSourceTypeAndIndex(c,s):i.retrieveTypeWithXhrForIndex(s)}}else o.runActionsForSourceTypeAndIndex("custom",s)}(e),r.dispatch("onInit")}))}}function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t,n){return(Se=Ie()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Oe(o,n.prototype),o}).apply(null,arguments)}function Le(e){return function(e){if(Array.isArray(e))return Ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==we(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==we(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===we(i)?i:String(i)),r)}var o,i}function Oe(e,t){return(Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Fe(e,t){if(t&&("object"===we(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ce(e)}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ie(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}"object"===("undefined"==typeof document?"undefined":ye(document))&&U();var Te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oe(e,t)}(l,e);var t,n,r,o,i,c=(t=l,n=Ie(),function(){var e,r=je(t);if(n){var o=je(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Fe(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={isOpen:!1},t.data={maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},t.isl=[],t.slideSwipingProps={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},t.stageIndexes={current:0},t.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isFullscreenOpen:{},toolbarButtons:{fullscreen:{}},isLightboxOpenManager:{get:function(){return t.state.isOpen},set:function(e,n){t.setState({isOpen:e},n)}}},t.sawu=[],t.elements={container:s.a.createRef(),sources:null,sourcesComponents:[]},t.smwm=[],t.collections={sourceMainWrapperTransformers:[],sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},t.core={classFacade:{},eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},windowResizeActioner:{}},t.fs={},t.st={},t.sws={},t.getQueuedAction=t.getQueuedAction.bind(Ce(t)),t.resolve=t.resolve.bind(Ce(t)),t.timeout=t.timeout.bind(Ce(t)),ne(Ce(t)),xe(Ce(t)),t}return r=l,(o=[{key:"getQueuedAction",value:function(e,t){var n=this,r=[];return function(){r.push(!0),n.timeout((function(){r.pop(),r.length||e()}),t)}}},{key:"resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.unshift(this),Se(e,Le(t))}},{key:"timeout",value:function(e,t){var n=this;setTimeout((function(){n.elements.container.current&&e()}),t)}},{key:"componentDidUpdate",value:function(e,t,n){this.core.lightboxUpdater.handleUpdate(e)}},{key:"componentDidMount",value:function(){B(this)}},{key:"componentWillUnmount",value:function(){!function(e){for(var t=e.collections.xhrs,n=e.componentsServices.isLightboxOpenManager,r=e.core.globalEventsController,o=0;o<t.length;o++)t[o].abort();n.get()&&r.removeListeners()}(this)}},{key:"render",value:function(){return this.state.isOpen?s.a.createElement("div",{ref:this.elements.container,className:"".concat(a,"container ").concat(u," ").concat(g)},s.a.createElement(k,{fsLightbox:this}),s.a.createElement(j,{fsLightbox:this}),this.props.sources.length>1?s.a.createElement(s.a.Fragment,null,s.a.createElement(N,{onClick:this.core.slideChangeFacade.changeToPrevious,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),s.a.createElement(N,{onClick:this.core.slideChangeFacade.changeToNext,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,s.a.createElement(D,{o:this})):null}}])&&Ae(r.prototype,o),i&&Ae(r,i),Object.defineProperty(r,"prototype",{writable:!1}),l}(i.Component);Te.propTypes={toggler:o.a.bool,sources:o.a.array,slide:o.a.number,source:o.a.string,sourceIndex:o.a.number,onOpen:o.a.func,onClose:o.a.func,onInit:o.a.func,onShow:o.a.func,disableLocalStorage:o.a.bool,types:o.a.array,type:o.a.string,customAttributes:o.a.array,maxYoutubeVideoDimensions:o.a.object,exitFullscreenOnClose:o.a.bool,loadOnlyCurrentSource:o.a.bool,openOnMount:o.a.bool,slideDistance:o.a.number},Te.defaultProps={slideDistance:.3};t.default=Te}]);