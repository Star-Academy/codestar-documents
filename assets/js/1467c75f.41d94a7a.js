"use strict";(self.webpackChunkstar_academy=self.webpackChunkstar_academy||[]).push([[8586],{7921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(4848),t=i(8453);const r={title:"Clean Code",description:""},l=void 0,c={id:"software-engineering/phase03-clean-code",title:"Clean Code",description:"",source:"@site/docs/software-engineering/phase03-clean-code.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase03-clean-code",permalink:"/codestar-documents/docs/software-engineering/phase03-clean-code",draft:!1,unlisted:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase03-clean-code.md",tags:[],version:"current",frontMatter:{title:"Clean Code",description:""},sidebar:"tutorialSidebar",previous:{title:"Full-Text Search",permalink:"/codestar-documents/docs/software-engineering/phase02-full-text-search-project"},next:{title:"Unit Test",permalink:"/codestar-documents/docs/software-engineering/phase04-unit-test"}},o={},d=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0627\u0647\u0645\u06cc\u062a Clean Code",id:"\u0627\u0647\u0645\u06cc\u062a-clean-code",level:2},{value:"Code Smell",id:"code-smell",level:2},{value:"\u0627\u0635\u0648\u0644 S.O.L.I.D",id:"\u0627\u0635\u0648\u0644-solid",level:2},{value:"Refactoring Techniques",id:"refactoring-techniques",level:2},{value:"Code Review",id:"code-review",level:2}];function a(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0645\u0642\u062f\u0645\u0647",children:"\u0645\u0642\u062f\u0645\u0647"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0648 \u062a\u06a9\u0646\u06cc\u06a9\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u06a9\u062f \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u06a9\u062f \u0641\u0627\u0632 \u0642\u0628\u0644 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u06a9\u062f \u0628\u0633\u06cc\u0627\u0631 \u0628\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u062a\u0628\u062f\u06cc\u0644\n\u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f. \u0633\u067e\u0633 \u06a9\u062f \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0633\u0627\u06cc\u0631 \u06a9\u0627\u0631\u0622\u0645\u0648\u0632\u0627\u0646 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u06cc\u062f \u0648 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u062f\u062a\u0627\u0646 \u0631\u0627\nReview\n\u06a9\u0646\u0646\u062f."}),"\n",(0,s.jsx)(n.h2,{id:"\u0627\u0647\u0645\u06cc\u062a-clean-code",children:"\u0627\u0647\u0645\u06cc\u062a Clean Code"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u062f\u0631 \u0645\u0648\u0631\u062f \u062f\u0648 \u0633\u0648\u0627\u0644 \u0632\u06cc\u0631 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0627 \u0647\u0645 \u062a\u06cc\u0645\u06cc \u062e\u0648\u062f \u0628\u062d\u062b \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u0686\u0631\u0627 \u062a\u0645\u06cc\u0632 \u0628\u0648\u062f\u0646 \u06a9\u062f \u0648 \u062f\u0627\u0634\u062a\u0646 \u0645\u0639\u0645\u0627\u0631\u06cc \u062e\u0648\u0628 \u0645\u0647\u0645 \u0627\u0633\u062a\u061f \u0686\u0631\u0627 \u0628\u0627\u06cc\u062f \u0648\u0642\u062a \u0648 \u0627\u0646\u0631\u0698\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0635\u0631\u0641 \u0637\u0631\u0627\u062d\u06cc \u0648 \u0646\u0648\u0634\u062a\u0646 \u06a9\u062f \u062a\u0645\u06cc\u0632 \u0634\u0648\u062f\u061f"}),"\n",(0,s.jsx)(n.li,{children:"\u0686\u0631\u0627 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u062f\u0631 \u0627\u0628\u0639\u0627\u062f \u0635\u0646\u0639\u062a\u06cc \u0627\u0647\u0645\u06cc\u062a \u0628\u0633\u06cc\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631\u06cc \u067e\u06cc\u062f\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061f"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u200c",type:"note",children:(0,s.jsxs)(n.p,{children:["\u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f ",(0,s.jsx)(n.strong,{children:"\u0641\u0642\u0637 \u0628\u0627 \u0641\u06a9\u0631 \u062e\u0648\u062f\u062a\u0627\u0646 \u0648 \u0628\u062d\u062b \u0628\u0627 \u0647\u0645 \u062a\u06cc\u0645\u06cc"})," \u0628\u0647 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644\u0627\u062a \u0628\u0627\u0644\u0627 \u0628\u0631\u0633\u06cc\u062f \u062a\u0627 \u0630\u0647\u0646 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0645\u0631\u0627\u062d\u0644 \u0628\u0639\u062f \u0622\u0645\u0627\u062f\u0647 \u0634\u0648\u062f."]})}),"\n",(0,s.jsx)(n.admonition,{title:"\u200c",type:"caution",children:(0,s.jsx)(n.p,{children:"\u0644\u0637\u0641\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0641\u06a9\u0631 \u06a9\u0631\u062f\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644\u0627\u062a \u0628\u0647 \u0633\u0631\u0627\u063a \u0645\u0631\u0627\u062d\u0644 \u0628\u0639\u062f\u06cc \u0648 \u062e\u0648\u0627\u0646\u062f\u0646 \u0645\u0642\u0627\u0644\u0627\u062a \u0646\u0631\u0648\u06cc\u062f!"})}),"\n",(0,s.jsxs)(n.p,{children:["\u062d\u0627\u0644 \u0628\u0631\u0627\u06cc \u0641\u0647\u0645 \u062f\u0644\u0627\u06cc\u0644 \u0627\u0647\u0645\u06cc\u062a \u06a9\u062f \u062a\u0645\u06cc\u0632 \u062f\u0631 \u0635\u0646\u0639\u062a\u060c\n",(0,s.jsx)(n.a,{href:"https://www.arcanys.com/blog/the-importance-of-clean-code",children:"The Importance of Clean Code"}),"\n\u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644 \u0627\u0648\u0644 \u0648\n",(0,s.jsx)(n.a,{href:"https://techhq.com/2019/06/why-software-maintainability-is-crucial/",children:"Why software maintainability is crucial - TechHQ"}),"\n\u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644 \u062f\u0648\u0645 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsx)(n.h2,{id:"code-smell",children:"Code Smell"}),"\n",(0,s.jsxs)(n.p,{children:["\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u06a9\u062f\u060c \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u06a9\u062f \u06a9\u062b\u06cc\u0641 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0648 \u0633\u067e\u0633\nRefactor\n\u06a9\u0631\u062f\u0646 \u0622\u0646 \u0627\u0633\u062a\u060c \u0628\u0647 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u06a9\u062f \u06a9\u062b\u06cc\u0641 \u0627\u0632 \u0628\u06cc\u0646 \u0628\u0631\u0648\u0646\u062f. \u0628\u0647 \u0627\u06cc\u0646\n\u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Code_smell",children:"Code Smell"}),"\n\u0645\u06cc\u200c\u06af\u0648\u06cc\u06cc\u0645. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0631 \u0645\u0648\u0631\u062f\nCode Smell\u0647\u0627\u06cc\n\u0632\u06cc\u0631 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f \u06a9\u062f\u0627\u0645 \u06cc\u06a9 \u0627\u0632 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u062f\u0631 \u06a9\u062f\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u062c\u0633\u062a\u062c\u0648 \u0628\u0647 \u0648\u062c\u0648\u062f \u0622\u0645\u062f\u0647 \u0627\u0633\u062a\u061f"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/long-method",children:"Long Method"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/primitive-obsession",children:"Primitive Obsession"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/large-class",children:"Large Class"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/long-parameter-list",children:"Long Parameter List"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/temporary-field",children:"Temporary Field"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://refactoring.guru/smells/duplicate-code",children:"Duplicate Code"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u0627\u0635\u0648\u0644-solid",children:"\u0627\u0635\u0648\u0644 S.O.L.I.D"}),"\n",(0,s.jsxs)(n.p,{children:["\u06cc\u06a9\u06cc \u0627\u0632 ",(0,s.jsx)(n.strong,{children:"\u0645\u0647\u0645\u200c\u062a\u0631\u06cc\u0646"})," \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0635\u0648\u0644 \u062f\u0631 \u0645\u0647\u0646\u062f\u0633\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631\u060c \u0627\u0635\u0648\u0644 \u067e\u0646\u062c\u200c\u06af\u0627\u0646\u0647\u0654\nSOLID\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\u0627\u06cc\u0646 \u0627\u0635\u0648\u0644 \u0639\u0628\u0627\u0631\u062a\u200c\u0627\u0646\u062f \u0627\u0632:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"S"}),"ingle Responsibility"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"O"}),"pen for Extension/Closed for Modification"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"L"}),"iskov Substitution"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"I"}),"nterface Segregation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"D"}),"ependency Inversion"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u0635\u0648\u0644\nSOLID\n\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.c-sharpcorner.com/article/solid-with-net-core/",children:"SOLID With .Net Core"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/may/csharp-best-practices-dangers-of-violating-solid-principles-in-csharp",children:"C# Best Practices : Dangers of Violating SOLID Principles in C#"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[":::tip\u200c\n\u0628\u0631\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\n",(0,s.jsx)(n.a,{href:"https://www.syncfusion.com/blogs/post/mastering-solid-principles-csharp",children:"Mastering SOLID Principles in C#: A Practical Guide"}),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f.\n:::\n:::tip\u200c\n\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0647\u062a\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u06cc\u0646 \u0627\u0631\u0627\u0626\u0647 \u0627\u0632\nUncle Bob\n\u0631\u0627 \u0646\u06cc\u0632 \u062a\u0645\u0627\u0634\u0627 \u06a9\u0646\u06cc\u062f:\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=zHiWqnTWsn4",children:"SOLID Principles of Object Oriented & Agile Design"}),"\n:::"]}),"\n",(0,s.jsx)(n.h2,{id:"refactoring-techniques",children:"Refactoring Techniques"}),"\n",(0,s.jsxs)(n.p,{children:["\u0628\u0631\u0627\u06cc\nRefactor\n\u06a9\u0631\u062f\u0646 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u06a9\u062f\u062a\u0627\u0646 \u0648 \u0631\u0641\u0639\nCode Smell\u0647\u0627\n\u062e\u0644\u0627\u0642\u06cc\u062a \u0628\u0647 \u062e\u0631\u062c \u062f\u0647\u06cc\u062f \u06cc\u0627 \u0628\u0647 \u0645\u062c\u0645\u0648\u0639\u06c0\n",(0,s.jsx)(n.a,{href:"https://refactoring.guru/refactoring/techniques",children:"Refactoring Techniques"}),"\n\u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsx)(n.admonition,{title:"\u200c",type:"note",children:(0,s.jsx)(n.p,{children:"\u0645\u0637\u0627\u0644\u0639\u06c0 \u062f\u0642\u06cc\u0642 \u062a\u0645\u0627\u0645 \u0645\u0648\u0627\u0631\u062f \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0644\u06cc\u0646\u06a9 \u0645\u0630\u06a9\u0648\u0631 \u0646\u06cc\u0627\u0632 \u0646\u06cc\u0633\u062a \u0647\u0645\u06cc\u0646 \u06a9\u0647 \u0628\u0647 \u0641\u0647\u0631\u0633\u062a \u0622\u0646 \u0646\u06af\u0627\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0639\u0636\u06cc \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0645\u0631\u0648\u0631 \u06a9\u0646\u06cc\u062f \u06a9\u0627\u0641\u06cc\u0633\u062a."})}),"\n",(0,s.jsx)(n.h2,{id:"code-review",children:"Code Review"}),"\n",(0,s.jsx)(n.p,{children:"\u0627\u0632 \u06cc\u06a9 \u062a\u06cc\u0645 \u062f\u06cc\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f\nPull Request\n\u0634\u0645\u0627 \u06a9\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647\u200c\u06cc\nRefactor\n\u0633\u0627\u062e\u062a\u0647\u200c\u0627\u06cc\u062f \u0631\u0627\nReview\n\u06a9\u0646\u0646\u062f \u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0644\u06cc\u0633\u062a\nCode Smell\u0647\u0627\n\u0628\u0647 \u0634\u0645\u0627 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u062f\u0647\u0646\u062f (\u0631\u0648\u06cc\nPull Request\n\u06a9\u0627\u0645\u0646\u062a \u0628\u06af\u0630\u0627\u0631\u0646\u062f)\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062d\u062a\u0645\u0627 \u0627\u0632 \u062a\u06cc\u0645\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0647\u0645 \u0633\u0631\u0627\u063a \u0634\u0645\u0627 \u0645\u06cc\u200c\u0622\u06cc\u0646\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0646\u062f \u06a9\u062f\u0634\u0627\u0646 \u0631\u0627\nReview\n\u06a9\u0646\u06cc\u062f\u060c \u0642\u0628\u0644 \u0627\u0632\nReview\n\u06a9\u062f \u062f\u06cc\u06af\u0631\u0627\u0646\u060c \u0631\u0627\u0647\u0646\u0645\u0627\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648\nReview\n\u062e\u0648\u062f \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u06cc\u0646 \u0631\u0627\u0647\u0646\u0645\u0627\u0647\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://google.github.io/eng-practices/review/reviewer/looking-for.html",children:"What to look for in a code review"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/nyu-cds/effective-code-reviews/blob/master/_episodes/03-checklist.md",children:"Effective Code Reviews: Code Review Checklist"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u200c",type:"note",children:(0,s.jsx)(n.p,{children:"\u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0635\u062d\u0628\u062a\u06cc \u062f\u0631 \u0645\u0648\u0631\u062f \u0627\u0646\u0648\u0627\u0639 \u062a\u0633\u062a \u0628\u0647 \u062e\u0635\u0648\u0635\nUnit Test\n\u0646\u06a9\u0631\u062f\u06cc\u0645 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc\u06cc \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0628\u0627\u0644\u0627 \u06a9\u0647 \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0633\u062a\n\u0627\u0633\u062a \u0631\u0627 \u0646\u0627\u062f\u06cc\u062f\u0647 \u0628\u06af\u06cc\u0631\u06cc\u062f."})}),"\n",(0,s.jsxs)(n.admonition,{title:"\u200c",type:"tip",children:[(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0645\u0648\u0636\u0648\u0639\nCode Review\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u06cc\u062f\u0626\u0648\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=0t4_MfHgb_A&t=37s",children:"How to Do Code Reviews Like a Human"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);