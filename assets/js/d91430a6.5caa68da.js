"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=c(n),m=r,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||a;return n?o.createElement(d,i(i({ref:t},l),{},{components:n})):o.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"/hooks",description:"Learn how to execute custom scripts via hooks.",sidebar_position:5},i="Hooks \ud83e\ude9d",s={unversionedId:"creating_bricks/hooks",id:"creating_bricks/hooks",title:"Hooks \ud83e\ude9d",description:"Learn how to execute custom scripts via hooks.",source:"@site/docs/creating_bricks/hooks.md",sourceDirName:"creating_bricks",slug:"/hooks",permalink:"/hooks",draft:!1,editUrl:"https://github.com/brick-hub/docs.brickhub.dev/tree/main/docs/creating_bricks/hooks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/hooks",description:"Learn how to execute custom scripts via hooks.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Brick Development \ud83e\uddd1\u200d\ud83d\udcbb",permalink:"/brick-development"},next:{title:"Managing Bricks",permalink:"/category/managing-bricks"}},p={},c=[{value:"Hooks Usage \u2728",id:"hooks-usage-",level:3},{value:"Disabling Hooks \u274c",id:"disabling-hooks-",level:3}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks-"},"Hooks \ud83e\ude9d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Mason")," supports custom script execution via hooks."),(0,r.kt)("p",null,"The supported hooks are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_gen")," - executed immediately before the generation step"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_gen")," - executed immediately after the generation step")),(0,r.kt)("p",null,"Hooks must be defined in the hooks directory at the root of the brick:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 __brick__\n\u251c\u2500\u2500 brick.yaml\n\u2514\u2500\u2500 hooks\n    \u251c\u2500\u2500 post_gen.dart\n    \u251c\u2500\u2500 pre_gen.dart\n    \u2514\u2500\u2500 pubspec.yaml\n")),(0,r.kt)("p",null,"The easiest way to get started with hooks is by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"--hooks")," flag when creating a new brick:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason new example --hooks\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"mason")," only supports hooks written in Dart.")),(0,r.kt)("h3",{id:"hooks-usage-"},"Hooks Usage \u2728"),(0,r.kt)("p",null,"Every hook must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method which accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"HookContext")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"package:mason/mason.dart"),"."),(0,r.kt)("p",null,"Hooks can be used to manipulate variables, interface with the logger, and more:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_gen.dart"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:io';\nimport 'package:mason/mason.dart';\n\nvoid run(HookContext context) {\n  // Read vars.\n  final name = context.vars['name'];\n\n  // Use the `Logger` instance.\n  context.logger.info('Hello $name!');\n\n  // Update vars.\n  context.vars['current_year'] = DateTime.now().year;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"post_gen.dart"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:io';\nimport 'package:mason/mason.dart';\n\nFuture<void> run(HookContext context) async {\n  final progress = context.logger.progress('Installing packages');\n\n  // Run `flutter packages get` after generation.\n  await Process.run('flutter', ['packages', 'get']);\n\n  progress.complete();\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The working directory of the hook is the directory in which the code is generated.")),(0,r.kt)("h3",{id:"disabling-hooks-"},"Disabling Hooks \u274c"),(0,r.kt)("p",null,"Hook execution can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-hooks")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Disable hook script execution\nmason make example --name Mason --no-hooks\n")))}u.isMDXComponent=!0}}]);