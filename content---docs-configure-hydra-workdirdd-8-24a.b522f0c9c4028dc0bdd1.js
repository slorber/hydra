(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{59:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));r(0);var t=r(93);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},c=[],i={rightToc:c},p="wrapper";function l(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(p,a({},i,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"See the ",Object(t.b)("a",a({parentName:"p"},{href:"intro"}),"intro")," for details about how to apply the customization."),Object(t.b)("p",null,"Run output directory grouped by day:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(t.b)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.num}_${hydra.job.override_dirname}\n")),Object(t.b)("p",null,"Run output directory grouped by job name:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(t.b)("p",null,"Run output directory can contain user configuration variables:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),Object(t.b)("p",null,"Run output directory can contain override parameters for the job"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")))}l.isMDXComponent=!0},93:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t),o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,i=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=u(r),b=t,d=l[c+"."+b]||l[b]||p[b]||o;return r?a.a.createElement(d,Object.assign({},{ref:n},i,{components:r})):a.a.createElement(d,Object.assign({},{ref:n},i))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,u=new Array(o);u[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[i]="string"==typeof e?e:t,u[1]=c;for(var b=2;b<o;b++)u[b]=r[b];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);