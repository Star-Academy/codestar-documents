"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[8110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Full-Text Search",description:""},i=void 0,l={unversionedId:"software-engineering/phase02-full-text-search-project",id:"software-engineering/phase02-full-text-search-project",title:"Full-Text Search",description:"",source:"@site/docs/software-engineering/phase02-full-text-search-project.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase02-full-text-search-project",permalink:"/codestar-documents/docs/software-engineering/phase02-full-text-search-project",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase02-full-text-search-project.md",tags:[],version:"current",frontMatter:{title:"Full-Text Search",description:""},sidebar:"tutorialSidebar",previous:{title:"C#",permalink:"/codestar-documents/docs/software-engineering/phase01-c-sharp"},next:{title:"Clean Code",permalink:"/codestar-documents/docs/software-engineering/phase03-clean-code"}},p={},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647-\u062c\u0633\u062a\u062c\u0648\u06cc-\u0645\u062a\u0646\u06cc",level:2},{value:"Pair Programming",id:"pair-programming",level:2},{value:"\u062a\u0645\u0631\u06cc\u0646",id:"\u062a\u0645\u0631\u06cc\u0646",level:2},{value:"\u062a\u0645\u0631\u06cc\u0646 \u0627\u0648\u0644",id:"\u062a\u0645\u0631\u06cc\u0646-\u0627\u0648\u0644",level:3},{value:"\u062a\u0645\u0631\u06cc\u0646 \u062f\u0648\u0645",id:"\u062a\u0645\u0631\u06cc\u0646-\u062f\u0648\u0645",level:3},{value:"\u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631",id:"\u0645\u0637\u0627\u0644\u0639\u0647-\u0628\u06cc\u0634\u062a\u0631",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u06cc\u06a9 \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u062c\u0648\u06cc \u0633\u0627\u062f\u0647 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0628\u062a\u0648\u0627\u0646\u062f \u062a\u0639\u062f\u0627\u062f\u06cc \u0633\u0646\u062f \u0645\u062a\u0646\u06cc \u0628\u0647\n\u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0648\u062f\u06cc \u0628\u06af\u06cc\u0631\u062f \u0648 \u0628\u0627 \u0627\u0646\u062c\u0627\u0645 \u067e\u0631\u062f\u0627\u0632\u0634\u200c\u0647\u0627\u06cc \u0644\u0627\u0632\u0645 \u0627\u0645\u06a9\u0627\u0646 \u062c\u0633\u062a\u062c\u0648\u06cc \u0633\u0631\u06cc\u0639 \u0631\u0648\u06cc \u0645\u062a\u0648\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u062f."),(0,a.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647-\u062c\u0633\u062a\u062c\u0648\u06cc-\u0645\u062a\u0646\u06cc"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc"),(0,a.kt)("p",null,"\u0642\u0628\u0644 \u0627\u0632 \u0634\u0631\u0648\u0639 \u0645\u0637\u0627\u0644\u0639\u0647 \u0631\u0648\u06cc \u062f\u0648 \u0633\u0648\u0627\u0644 \u0632\u06cc\u0631 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0630\u0647\u0646 \u0634\u0645\u0627 \u0622\u0645\u0627\u062f\u0647 \u0634\u0648\u062f."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0628\u0647 \u0631\u0648\u0632\u200c\u0647\u0627\u06cc \u0627\u0648\u0644 \u062a\u0634\u06a9\u06cc\u0644 \u0634\u0631\u06a9\u062a \u06af\u0648\u06af\u0644 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f\u060c \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0645\u062a\u0646\u200c\u0647\u0627\u06cc \u0686\u0646\u062f \u0635\u062f \u0647\u0632\u0627\u0631 \u0635\u0641\u062d\u0647\u200c\u06cc \u0648\u0628 \u0631\u0627 \u062c\u0645\u0639 \u0622\u0648\u0631\u06cc \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u06cc\u0646\n\u0622\u0646 \u0635\u0641\u062d\u0627\u062a \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f. \u0686\u0647 \u0631\u0627\u0647 \u062d\u0644\u06cc \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u06a9\u0648\u0626\u0631\u06cc \u0686\u0646\u062f \u06a9\u0644\u0645\u0647\u200c\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u06cc\u0646 \u0647\u0632\u0627\u0631\u0627\u0646 \u0635\u0641\u062d\u0647 \u0645\u062a\u0646 \u06a9\u0647 \u0627\u0632 \u0642\u0628\u0644 \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0628\u0647\n\u0630\u0647\u0646\u062a\u0627\u0646 \u0645\u06cc\u200c\u0631\u0633\u062f\u061f"),(0,a.kt)("li",{parentName:"ul"},"\u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u0634\u0648\u062f \u0627\u06cc\u0646 \u062c\u0633\u062a\u062c\u0648 \u0631\u0627 \u0627\u0632 \u0645\u0631\u062a\u0628\u0647\u200c\u06cc \u06cc\u06a9 \u06cc\u0627 \u0647\u0645\u0627\u0646\n(O(1\n\u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u061f")),(0,a.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0633\u0627\u062e\u062a\u0627\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u062c\u0648 \u0642\u0627\u0628\u0644\u200c\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0633\u062a\u060c\nInverted Index\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f. \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u062f\u0627\u062f\u0647 \u0633\u0627\u062e\u062a\u0627\u0631\n",(0,a.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/inverted-index/"},"Inverted Index - GeeksforGeeks"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f\u061b \u0633\u067e\u0633 \u0628\u0631\u0627\u06cc \u0641\u0647\u0645 \u0628\u0647\u062a\u0631 \u0648\u06cc\u062f\u0626\u0648\u06cc\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bnP6TsqyF30"},"The Inverted Index"),"\n\u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."),(0,a.kt)("h2",{id:"pair-programming"},"Pair Programming"),(0,a.kt)("p",null,"\u0627\u0632 \u0622\u0646\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627\u06cc\u062f \u062a\u0645\u0631\u06cc\u0646\u0627\u062a \u0648 \u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u062a\u0645\u0627\u0645 \u0641\u0627\u0632\u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a\nPair Programming\n\u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f\u060c \u0627\u0628\u062a\u062f\u0627 \u062c\u0647\u062a \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0633\u0628\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc\u060c\n",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/on-pair-programming.html"},"On Pair Programming"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("admonition",{title:"\u200c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0627\u0628\u0632\u0627\u0631\n",(0,a.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/services/live-share/"},"Live Share"),"\n\u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631\nVS Code\n\u06cc\u06a9 \u0627\u0628\u0632\u0627\u0631 \u062c\u0630\u0627\u0628 \u062c\u0647\u062a \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc \u0628\u0647 \u0633\u0628\u06a9\nPair Programming\n\u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.")),(0,a.kt)("admonition",{title:"\u200c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627\nPair Programming\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u06cc\u062f\u0626\u0648\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=aItVJprLYkg"},"You Must Be CRAZY To Do Pair Programming"))),(0,a.kt)("h2",{id:"\u062a\u0645\u0631\u06cc\u0646"},"\u062a\u0645\u0631\u06cc\u0646"),(0,a.kt)("h3",{id:"\u062a\u0645\u0631\u06cc\u0646-\u0627\u0648\u0644"},"\u062a\u0645\u0631\u06cc\u0646 \u0627\u0648\u0644"),(0,a.kt)("p",null,"\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u0628\u0647 \u0632\u0628\u0627\u0646\nC#\n\u0648 \u0628\u0627 \u0641\u0631\u06cc\u0645\u0648\u0631\u06a9\nDotnet\n\u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u06a9\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc\nDocument\n\u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u062f \u0648 \u0627\u0632 \u0631\u0648\u06cc \u0622\u0646\u200c\u0647\u0627 \u06cc\u06a9\nInverted Index\n\u0628\u0633\u0627\u0632\u062f\u061b\n\u0633\u067e\u0633 \u062f\u0631\nConsole\n\u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u06cc\u06a9 \u06a9\u0644\u0645\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0648\u062f\u06cc \u0628\u06af\u06cc\u0631\u062f \u0648 \u0646\u0627\u0645\nDocument\u0647\u0627\u06cc\u06cc\n\u06a9\u0647 \u0634\u0627\u0645\u0644 \u0622\u0646 \u06a9\u0644\u0645\u0647 \u0647\u0633\u062a\u0646\u062f \u0631\u0627 \u0686\u0627\u067e \u06a9\u0646\u062f."),(0,a.kt)("admonition",{title:"\u200c",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0627\u0632\n",(0,a.kt)("a",{target:"_blank",href:n(1546).Z},"The 20 Newsgroups Dataset"),"\n\u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("li",{parentName:"ul"},"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0628\u0631\u0627\u06cc \u0628\u0627\u0644\u0627 \u0628\u0631\u062f\u0646 \u062f\u0642\u062a \u062c\u0633\u062a\u062c\u0648 \u062a\u0645\u0627\u0645\nDocument\u0647\u0627\u06cc\n\u0648\u0631\u0648\u062f\u06cc\n\u0631\u0627\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1308#rule-description"},"Uppercase"),"\n\u06a9\u0646\u06cc\u062f."))),(0,a.kt)("h3",{id:"\u062a\u0645\u0631\u06cc\u0646-\u062f\u0648\u0645"},"\u062a\u0645\u0631\u06cc\u0646 \u062f\u0648\u0645"),(0,a.kt)("p",null,"\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u06a9\u0647 \u062f\u0631 \u062a\u0645\u0631\u06cc\u0646 \u0642\u0628\u0644 \u0646\u0648\u0634\u062a\u06cc\u062f \u0631\u0627 \u0628\u0647 \u0646\u062d\u0648\u06cc \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u06cc\u062f \u06a9\u0647 \u0633\u0647 \u0646\u0648\u0639 \u0648\u0631\u0648\u062f\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u0628\u06af\u06cc\u0631\u062f:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u067e\u06cc\u0634\u0648\u0646\u062f\u06cc \u0646\u062f\u0627\u0631\u0646\u062f."),(0,a.kt)("li",{parentName:"ol"},"\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u0628\u0627 \u067e\u06cc\u0634\u0648\u0646\u062f ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."),(0,a.kt)("li",{parentName:"ol"},"\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u0646\u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u0628\u0627 \u067e\u06cc\u0634\u0648\u0646\u062f ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u0648\u0631\u0648\u062f\u06cc \u0646\u0648\u0639 \u0627\u0648\u0644 \u0645\u0627\u0646\u0646\u062f\nAnd\u060c\n\u0646\u0648\u0639 \u062f\u0648\u0645 \u0645\u0627\u0646\u0646\u062f\nOr\n\u0648 \u0646\u0648\u0639 \u0633\u0648\u0645 \u0645\u0627\u0646\u0646\u062f\nNot\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u0645\u062b\u0627\u0644"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"get help +illness +disease -cough\n")),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nQuery\n\u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645\nDocument\u0647\u0627\u06cc\u06cc\n\u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062d\u062a\u0645\u0627\u064b \u0634\u0627\u0645\u0644 \u0639\u0628\u0627\u0631\u0627\u062a\n",(0,a.kt)("inlineCode",{parentName:"p"},"get"),"\n\u0648\n",(0,a.kt)("inlineCode",{parentName:"p"},"help"),"\n\u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0639\u0628\u0627\u0631\u0627\u062a\n",(0,a.kt)("inlineCode",{parentName:"p"},"illness"),"\n\u0648\n",(0,a.kt)("inlineCode",{parentName:"p"},"disease"),"\n\u0628\u0627\u0634\u0646\u062f \u0648 \u0634\u0627\u0645\u0644 \u0639\u0628\u0627\u0631\u062a\n",(0,a.kt)("inlineCode",{parentName:"p"},"cough"),"\n\u0646\u0628\u0627\u0634\u0646\u062f."))),(0,a.kt)("h2",{id:"\u0645\u0637\u0627\u0644\u0639\u0647-\u0628\u06cc\u0634\u062a\u0631"},"\u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0646\u062d\u0648\u06c0 \u06a9\u0627\u0631 \u0645\u0648\u062a\u0648\u0631\u200c\u0647\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u06cc\u062f\u0646 \u0648\u06cc\u062f\u0626\u0648\u06cc\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CeGtqouT8eA"},"How Google searches one document among Billions of documents quickly"),"\n\u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."))}u.isMDXComponent=!0},1546:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/the-20-newsgroups-b28960092a8cf8e833bba736d4f3d433.zip"}}]);