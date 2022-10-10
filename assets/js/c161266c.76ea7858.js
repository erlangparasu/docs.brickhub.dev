"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/mason-get",description:"Learn how to install your first brick.",sidebar_position:3},i="Installing Bricks \ud83e\uddf1",s={unversionedId:"getting_started/mason_get",id:"getting_started/mason_get",title:"Installing Bricks \ud83e\uddf1",description:"Learn how to install your first brick.",source:"@site/docs/getting_started/mason_get.md",sourceDirName:"getting_started",slug:"/mason-get",permalink:"/mason-get",draft:!1,editUrl:"https://github.com/brick-hub/docs.brickhub.dev/tree/main/docs/getting_started/mason_get.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/mason-get",description:"Learn how to install your first brick.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Initializing Mason CLI \ud83d\udcc1",permalink:"/mason-init"},next:{title:"Listing all Installed Bricks \ud83d\udcdd",permalink:"/mason-list"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-bricks-"},"Installing Bricks \ud83e\uddf1"),(0,a.kt)("p",null,"Now that we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"mason.yaml"),", we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," command to install all bricks defined in the nearest parent ",(0,a.kt)("inlineCode",{parentName:"p"},"mason.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mason get\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"mason get")," should result in output that looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mason get\n\u2713 Getting bricks (22ms)\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"mason get")," will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"mason-lock.json")," which can be tracked in source control when working with versioned bricks (git/hosted)."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 .mason\n\u251c\u2500\u2500 mason-lock.json\n\u2514\u2500\u2500 mason.yaml\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Bricks are cached for offline use so running ",(0,a.kt)("inlineCode",{parentName:"p"},"mason get")," again will resolve the cached bricks:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mason get\n\u2713 Getting bricks (10ms)\n"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"mason upgrade")," to ignore the lockfile and upgrade to the latest support versions of bricks.")))}m.isMDXComponent=!0}}]);