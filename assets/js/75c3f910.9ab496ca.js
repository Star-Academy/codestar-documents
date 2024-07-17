"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[8210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"TDD",description:""},o=void 0,s={unversionedId:"software-engineering/phase05-tdd",id:"software-engineering/phase05-tdd",title:"TDD",description:"",source:"@site/docs/software-engineering/phase05-tdd.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase05-tdd",permalink:"/codestar-documents/docs/software-engineering/phase05-tdd",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase05-tdd.md",tags:[],version:"current",frontMatter:{title:"TDD",description:""},sidebar:"tutorialSidebar",previous:{title:"Unit Test",permalink:"/codestar-documents/docs/software-engineering/phase04-unit-test"},next:{title:"CI/CD",permalink:"/codestar-documents/docs/software-engineering/phase06-cicd"}},l={},d=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc TDD",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-tdd",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u0635\u0648\u0644 SOLID \u0648 \u062a\u0627\u062b\u06cc\u0631 \u0622\u0646 \u0628\u0631 TDD",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u06cc\u0634\u062a\u0631-\u0628\u0627-\u0627\u0635\u0648\u0644-solid-\u0648-\u062a\u0627\u062b\u06cc\u0631-\u0622\u0646-\u0628\u0631-tdd",level:2},{value:"\u06af\u0633\u062a\u0631\u0634 \u067e\u0631\u0648\u0698\u0647 Full Text Search \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f TDD",id:"\u06af\u0633\u062a\u0631\u0634-\u067e\u0631\u0648\u0698\u0647-full-text-search-\u0628\u0627-\u0631\u0648\u06cc\u06a9\u0631\u062f-tdd",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 Test-driven development\n\u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u067e\u0631\u0648\u0698\u0647 \u062c\u0633\u062a\u062c\u0648 \u0631\u0627 \u0628\u0627 \u0627\u06cc\u0646 \u0627\u0644\u06af\u0648 \u0628\u0627\u0632\u0646\u0648\u06cc\u0633\u06cc \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f."),(0,a.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0628\u0627\u0646\u06cc-tdd"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0628\u0627\u0646\u06cc TDD"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0645\u0641\u0647\u0648\u0645 TDD\n\u0648 \u0645\u0631\u0627\u062d\u0644 \u0622\u0646 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c"},"Testing Software: What is TDD?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90"},"Test Driven Development (TDD): The Advantages and Disadvantages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/introduction-to-test-driven-development-tdd-61a13bc92d92"},"Introduction to Test Driven Development (TDD)"))),(0,a.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u06cc\u0634\u062a\u0631-\u0628\u0627-\u0627\u0635\u0648\u0644-solid-\u0648-\u062a\u0627\u062b\u06cc\u0631-\u0622\u0646-\u0628\u0631-tdd"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u0635\u0648\u0644 SOLID \u0648 \u062a\u0627\u062b\u06cc\u0631 \u0622\u0646 \u0628\u0631 TDD"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647\u060c \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0647\u0631 \u06cc\u06a9 \u0627\u0632 \u0627\u0635\u0648\u0644 SOLID\u060c\n\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0631 \u0633\u0627\u062f\u0647\u200c\u062a\u0631 \u0634\u062f\u0646 \u0631\u0648\u0646\u062f TDD\n\u062a\u0627\u062b\u06cc\u0631 \u0628\u06af\u0630\u0627\u0631\u062f. \u0628\u0627 \u0647\u0645\u200c\u062a\u06cc\u0645\u06cc \u062e\u0648\u062f \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0648\u0631\u062f \u0628\u062d\u062b \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1"},"SOLID design principles make test-driven development (TDD) faster and easier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://softwareengineering.stackexchange.com/a/111868"},"Does test-driven development force me to follow SOLID?"))),(0,a.kt)("h2",{id:"\u06af\u0633\u062a\u0631\u0634-\u067e\u0631\u0648\u0698\u0647-full-text-search-\u0628\u0627-\u0631\u0648\u06cc\u06a9\u0631\u062f-tdd"},"\u06af\u0633\u062a\u0631\u0634 \u067e\u0631\u0648\u0698\u0647 Full Text Search \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f TDD"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647\nFull Text Search\n\u062e\u0648\u062f\n\u0642\u0627\u0628\u0644\u06cc\u062a\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u0645\u06a9\u0627\u0646 \u062c\u0633\u062a\u062c\u0648\u06cc \u0639\u0628\u0627\u0631\u062a \u0646\u06cc\u0632 \u0641\u0631\u0627\u0647\u0645 \u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u0648\u0631\u0648\u062f\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u062f\u0631 \u06a9\u0646\u0627\u0631 \u0648\u0631\u0648\u062f\u06cc \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'get +disease -cough "star academy"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'get +illness +disease -cough -"star academy"\n')),(0,a.kt)("p",null,"\u062a\u062d\u0644\u06cc\u0644 \u0648\u0631\u0648\u062f\u06cc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'get : \u062d\u062a\u0645\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\n+illness +disease : \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u062f\u0648 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\n-cough : \u0646\u0628\u0627\u06cc\u062f \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\n"star academy" : \u0627\u06cc\u0646 \u0639\u0628\u0627\u0631\u062a \u062d\u062a\u0645\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\n-"star academy" : \u0627\u06cc\u0646 \u0639\u0628\u0627\u0631\u062a \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\n')),(0,a.kt)("admonition",{title:"\u200c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0631\u0627 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u06a9\u0627\u0645\u0644\u0627 \u0628\u0627 \u0631\u0648\u06cc\u06a9\u0631\u062f\nTDD\n\u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f.")))}p.isMDXComponent=!0}}]);