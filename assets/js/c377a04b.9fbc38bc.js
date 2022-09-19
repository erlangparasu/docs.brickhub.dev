"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={slug:"/",sidebar_position:1},l="Overview \ud83e\uddf1\u2601\ufe0f",o={unversionedId:"index",id:"index",title:"Overview \ud83e\uddf1\u2601\ufe0f",description:"BrickHub is a platform where developers can discover, install, and publish reusable templates called bricks.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/brick-hub/docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar"},s={},p=[{value:"Getting Started \ud83d\ude80",id:"getting-started-",level:2},{value:"Installing Mason CLI \ud83e\uddd1\u200d\ud83d\udcbb",id:"installing-mason-cli-",level:3},{value:"Initializing Mason CLI \ud83d\udcc1",id:"initializing-mason-cli-",level:3},{value:"Installing Bricks \ud83e\uddf1",id:"installing-bricks-",level:3},{value:"Using a Brick \ud83d\udc77",id:"using-a-brick-",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview-\ufe0f"},"Overview \ud83e\uddf1\u2601\ufe0f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brickhub.dev"},"BrickHub")," is a platform where developers can discover, install, and publish reusable templates called bricks."),(0,r.kt)("p",null,"BrickHub is built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felangel/mason"},"mason"),", a collection of tools which allow developers to create and consume bricks."),(0,r.kt)("h2",{id:"getting-started-"},"Getting Started \ud83d\ude80"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order to use BrickHub you must have the ",(0,r.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"Dart SDK")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felangel/mason/tree/master/packages/mason_cli"},"Mason CLI")," installed on your machine.")),(0,r.kt)("h3",{id:"installing-mason-cli-"},"Installing Mason CLI \ud83e\uddd1\u200d\ud83d\udcbb"),(0,r.kt)("p",null,"We recommend installing ",(0,r.kt)("inlineCode",{parentName:"p"},"mason_cli")," from ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev"},"pub.dev")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \ud83c\udfaf Activate from https://pub.dev\ndart pub global activate mason_cli\n")),(0,r.kt)("p",null,"Alternatively, ",(0,r.kt)("inlineCode",{parentName:"p"},"mason_cli")," can be installed via ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \ud83c\udf7a Install from https://brew.sh\nbrew tap felangel/mason\nbrew install mason\n")),(0,r.kt)("h3",{id:"initializing-mason-cli-"},"Initializing Mason CLI \ud83d\udcc1"),(0,r.kt)("p",null,"Once ",(0,r.kt)("inlineCode",{parentName:"p"},"mason_cli")," is installed, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason init")," command to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"mason")," in the current directory. This will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"mason.yaml")," and allow ",(0,r.kt)("inlineCode",{parentName:"p"},"mason")," to work with bricks scoped locally within the workspace."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"mason")," will always use the nearest parent ",(0,r.kt)("inlineCode",{parentName:"p"},"mason.yaml"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason init\n")),(0,r.kt)("p",null,"Once we run, ",(0,r.kt)("inlineCode",{parentName:"p"},"mason init"),", we should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"mason.yaml")," that looks something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Register bricks which can be consumed via the Mason CLI.\n# https://github.com/felangel/mason\nbricks:\n  # Sample Brick\n  # Run `mason make hello` to try it out.\n  hello: any\n  # Bricks can also be imported via git url.\n  # Uncomment the following lines to import\n  # a brick from a remote git url.\n  # widget:\n  #   git:\n  #     url: https://github.com/felangel/mason.git\n  #     path: bricks/widget\n")),(0,r.kt)("h3",{id:"installing-bricks-"},"Installing Bricks \ud83e\uddf1"),(0,r.kt)("p",null,"Now that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"mason.yaml"),", we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason get")," command to install all bricks defined in the nearest parent ",(0,r.kt)("inlineCode",{parentName:"p"},"mason.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason get\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mason get")," will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"mason-lock.json")," which can be tracked in source control when working with versioned bricks (git/hosted).")),(0,r.kt)("h3",{id:"using-a-brick-"},"Using a Brick \ud83d\udc77"),(0,r.kt)("p",null,"Once we have installed one or more bricks via ",(0,r.kt)("inlineCode",{parentName:"p"},"mason get"),", we can generate code from those bricks using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason make")," command. Since we only have one brick installed by default (",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),"), we can run the following command to generate code from the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," brick:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason make hello\n")),(0,r.kt)("p",null,"Mason will prompt for any variables required by the brick -- in this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," brick requires a single variable: ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("p",null,"Once we provide a name and hit enter, we should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"HELLO.md")," file generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mason make hello\n? What is your name? (Dash) Mason\n\u2713 Made brick hello (52ms)\n\u2713 Generated 1 file:\n  /me/mason_playground/HELLO.md (new)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"HELLO.md"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Hello Mason! \ud83d\udc4b\n")),(0,r.kt)("p",null,"Congrats! You've successfully installed ",(0,r.kt)("inlineCode",{parentName:"p"},"mason")," and generated code from your first brick \ud83c\udf89"))}m.isMDXComponent=!0}}]);