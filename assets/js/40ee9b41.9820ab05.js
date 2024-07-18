"use strict";(self.webpackChunkstar_academy=self.webpackChunkstar_academy||[]).push([[4953],{9021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=i(4848),d=i(8453);const l={title:"ETL",description:""},t=void 0,r={id:"project/phase01-etl",title:"ETL",description:"",source:"@site/docs/project/phase01-etl.md",sourceDirName:"project",slug:"/project/phase01-etl",permalink:"/codestar-documents/docs/project/phase01-etl",draft:!1,unlisted:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/project/phase01-etl.md",tags:[],version:"current",frontMatter:{title:"ETL",description:""},sidebar:"tutorialSidebar",previous:{title:"\u067e\u0631\u0648\u0698\u0647",permalink:"/codestar-documents/docs/project"},next:{title:"BI",permalink:"/codestar-documents/docs/project/star-sprint-project"}},c={},a=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u062a\u0639\u0631\u06cc\u0641",id:"\u062a\u0639\u0631\u06cc\u0641",level:2},{value:"Data Extraction (\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u062f\u0627\u062f\u0647)",id:"data-extraction-\u0627\u0633\u062a\u062e\u0631\u0627\u062c-\u062f\u0627\u062f\u0647",level:3},{value:"Data Transformation (\u062a\u0628\u062f\u06cc\u0644 \u062f\u0627\u062f\u0647)",id:"data-transformation-\u062a\u0628\u062f\u06cc\u0644-\u062f\u0627\u062f\u0647",level:3},{value:"Data Loading (\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062f\u0627\u062f\u0647)",id:"data-loading-\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc-\u062f\u0627\u062f\u0647",level:3},{value:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",level:2},{value:"\u062b\u0628\u062a\u200c\u0646\u0627\u0645",id:"\u062b\u0628\u062a\u0646\u0627\u0645",level:3},{value:"\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647",id:"\u0648\u0631\u0648\u062f-\u062f\u0627\u062f\u0647",level:3},{value:"\u0633\u0627\u062e\u062a Pipeline",id:"\u0633\u0627\u062e\u062a-pipeline",level:3},{value:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0628\u062f\u0623",id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0628\u062f\u0623",level:3},{value:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0642\u0635\u062f",id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0642\u0635\u062f",level:3},{value:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631",id:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631",level:3},{value:"\u0641\u06cc\u0644\u062a\u0631 \u062f\u0627\u062f\u0647\u200c\u0647\u0627",id:"\u0641\u06cc\u0644\u062a\u0631-\u062f\u0627\u062f\u0647\u0647\u0627",level:3},{value:"\u0627\u062c\u0631\u0627",id:"\u0627\u062c\u0631\u0627",level:3},{value:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc",id:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Join",id:"join",level:3},{value:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0631\u0648\u062c\u06cc",id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u062e\u0631\u0648\u062c\u06cc",level:3},{value:"\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc",id:"\u0627\u0634\u062a\u0631\u0627\u06a9\u06af\u0630\u0627\u0631\u06cc",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0645\u0642\u062f\u0645\u0647",children:"\u0645\u0642\u062f\u0645\u0647"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc\u060c \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u0645\u062e\u062a\u0644\u0641 \u0648 \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631\u0647\u0627\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u062c\u0645\u0639\u200c\u0622\u0648\u0631\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0645\u0648\u0631\u062f \u067e\u0631\u062f\u0627\u0632\u0634 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u0648 \u0628\u0647 \u06cc\u06a9 \u062e\u0631\u0648\u062c\u06cc \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0633\u06cc\u0645\u061b\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0628\u0627\u06cc\u062f \u062a\u0645\u0627\u0645 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062c\u0645\u0639\u200c\u0622\u0648\u0631\u06cc \u06a9\u0646\u06cc\u0645\u060c\n\u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062a\u0645\u06cc\u0632 \u06a9\u0646\u06cc\u0645\u060c\n\u062a\u0628\u062f\u06cc\u0644\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645\n\u0648 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u0633\u0627\u062e\u062a\u0627\u0631 \u0648 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u06cc\u06a9\u0633\u0627\u0646 \u062f\u0631 \u0622\u0648\u0631\u06cc\u0645."}),"\n",(0,s.jsxs)(n.p,{children:["\u0628\u0647 \u0641\u0631\u0622\u06cc\u0646\u062f \u0627\u0646\u062a\u0642\u0627\u0644 \u062f\u0627\u062f\u0647 \u0627\u0632 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f\u06cc\u0646 \u0645\u0646\u0628\u0639 \u0628\u0647 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0645\u0642\u0635\u062f \u06a9\u0647 \u062f\u0627\u062f\u0647 \u0631\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0645\u062a\u0641\u0627\u0648\u062a\u06cc \u0628\u0627\u0632\u0646\u0645\u0627\u06cc\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Extract,_transform,_load",children:"ETL"}),"\n\u06af\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\n\u06a9\u0647 \u0645\u062e\u0641\u0641 \u0639\u0628\u0627\u0631\u062a Extract, Transform & Load \u0627\u0633\u062a."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u062a\u0639\u0631\u06cc\u0641",children:"\u062a\u0639\u0631\u06cc\u0641"}),"\n",(0,s.jsx)(n.h3,{id:"data-extraction-\u0627\u0633\u062a\u062e\u0631\u0627\u062c-\u062f\u0627\u062f\u0647",children:"Data Extraction (\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u062f\u0627\u062f\u0647)"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0627\u062f\u06c0 \u062e\u0627\u0645 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u0645\u062e\u062a\u0644\u0641 \u0628\u0647 \u06cc\u06a9 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0645\u0646\u0627\u0628\u0639 \u0645\u0628\u062f\u0623 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0627\u0631\u0627\u06cc \u062f\u0627\u062f\u06c0 \u0633\u0627\u062e\u062a\u0627\u0631\u06cc\u0627\u0641\u062a\u0647 \u06cc\u0627 \u063a\u06cc\u0631\u0633\u0627\u062e\u062a\u0627\u0631\u06cc\u0627\u0641\u062a\u0647 \u0628\u0627\u0634\u0646\u062f.\n\u0627\u0632 \u0627\u0646\u0648\u0627\u0639 \u0645\u0646\u0627\u0628\u0639 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0634\u0627\u0631\u0647 \u06a9\u0631\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SQL or NoSql Servers"}),"\n",(0,s.jsx)(n.li,{children:"Flat Files"}),"\n",(0,s.jsx)(n.li,{children:"Emails"}),"\n",(0,s.jsx)(n.li,{children:"Web Pages"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"data-transformation-\u062a\u0628\u062f\u06cc\u0644-\u062f\u0627\u062f\u0647",children:"Data Transformation (\u062a\u0628\u062f\u06cc\u0644 \u062f\u0627\u062f\u0647)"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0627\u062f\u06c0 \u062e\u0627\u0645 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0645\u0648\u0631\u062f \u067e\u0631\u062f\u0627\u0632\u0634 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u062a\u0627 \u0628\u0647 \u0633\u0627\u062e\u062a\u0627\u0631\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062a\u062d\u0644\u06cc\u0644 \u062f\u0627\u062f\u0647 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u062a\u0628\u062f\u06cc\u0644 \u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0634\u0627\u0645\u0644 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0641\u06cc\u0644\u062a\u0631 \u06a9\u0631\u062f\u0646"}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc"}),"\n",(0,s.jsx)(n.li,{children:"\u062d\u0630\u0641 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc"}),"\n",(0,s.jsx)(n.li,{children:"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc"}),"\n",(0,s.jsxs)(n.li,{children:["\u0627\u0646\u062c\u0627\u0645 \u0645\u062d\u0627\u0633\u0628\u0627\u062a\u060c \u062a\u0631\u062c\u0645\u0647 \u0648 \u06cc\u0627 \u062e\u0644\u0627\u0635\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0634\u0627\u0645\u0644 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u062a\u063a\u06cc\u06cc\u0631 \u0646\u0627\u0645 \u0633\u062a\u0648\u0646\u200c\u0647\u0627"}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0628\u062f\u06cc\u0644 \u0648\u0627\u062d\u062f\u200c\u0647\u0627\u06cc \u067e\u0648\u0644"}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0628\u062f\u06cc\u0644 \u0648\u0627\u062d\u062f\u0647\u0627\u06cc \u0627\u0646\u062f\u0627\u0632\u0647\u200c\u06af\u06cc\u0631\u06cc"}),"\n",(0,s.jsx)(n.li,{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u0645\u062a\u0646\u06cc"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u062d\u0630\u0641 \u06cc\u0627 \u0631\u0645\u0632\u0646\u06af\u0627\u0631\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062d\u0633\u0627\u0633 \u06cc\u0627 \u0645\u062d\u0631\u0645\u0627\u0646\u0647"}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0628\u062f\u06cc\u0644 \u0633\u0627\u062e\u062a\u0627\u0631 \u062f\u0627\u062f\u0647 \u0628\u0647 \u0633\u0627\u062e\u062a\u0627\u0631 \u0645\u0642\u0635\u062f\u061b \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u062a\u0628\u062f\u06cc\u0644 JSON \u0628\u0647 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f \u062c\u062f\u0648\u0644 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 Join \u06a9\u0631\u062f."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"data-loading-\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc-\u062f\u0627\u062f\u0647",children:"Data Loading (\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062f\u0627\u062f\u0647)"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0627\u062f\u06c0 \u062a\u0628\u062f\u06cc\u0644\u200c\u0634\u062f\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u06c0 \u0642\u0628\u0644\u060c \u0627\u0632 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u062f\u06c0 \u0645\u0642\u0635\u062f \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u063a\u06cc\u0631 \u0627\u0632 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0627\u0648\u0644\u06cc\u0647\u060c \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0645\u062a\u0646\u0627\u0648\u0628 \u0646\u06cc\u0632 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u062f\u0647 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0627\u06a9\u062b\u0631 \u0645\u0648\u0627\u0631\u062f \u0627\u06cc\u0646 \u0641\u0631\u0622\u06cc\u0646\u062f \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.ibm.com/cloud/learn/etl",children:"https://www.ibm.com/cloud/learn/etl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.guru99.com/etl-extract-load-process.html",children:"https://www.guru99.com/etl-extract-load-process.html"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",children:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"}),"\n",(0,s.jsx)(n.h3,{id:"\u062b\u0628\u062a\u0646\u0627\u0645",children:"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"}),"\n",(0,s.jsxs)(n.p,{children:["\u062f\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\n",(0,s.jsx)(n.a,{href:"https://iam.us.cloud.talend.com/idp/trial-registration",children:"Talend"}),"\n\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f.\n\u0627\u0632 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0645\u0627\u0646\u0646\u062f \u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0627\u0631\u06cc\u060c \u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646\u060c \u0646\u0627\u0645 \u0634\u0631\u06a9\u062a\u060c \u0639\u0646\u0648\u0627\u0646 \u0634\u063a\u0644\u06cc \u0648 ... \u062e\u0648\u0627\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\n\u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u062e\u0635\u06cc \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0633\u0627\u06cc\u0631 \u0641\u06cc\u0644\u062f\u0647\u0627 \u0631\u0627 \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0627\u062f\u0631\u0633\u062a \u067e\u0631 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsx)(n.p,{children:"\u067e\u0633 \u0627\u0632 \u062b\u0628\u062a\u200c\u0646\u0627\u0645\u060c \u0644\u06cc\u0646\u06a9\u06cc \u0628\u0647 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0622\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u0627\u0631\u062f \u0627\u06a9\u0627\u0646\u062a \u062e\u0648\u062f \u0634\u0648\u06cc\u062f\n\u0648 \u062a\u0627 14 \u0631\u0648\u0632 \u0627\u0632 \u0633\u0627\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."}),"\n",(0,s.jsxs)(n.p,{children:["\u067e\u0633 \u0627\u0632 \u0648\u0631\u0648\u062f \u0628\u0647 \u0627\u06a9\u0627\u0646\u062a\u060c \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 Discover \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627\n",(0,s.jsx)(n.a,{href:"https://portal.us.cloud.talend.com/",children:"\u0644\u06cc\u0633\u062a \u062a\u0645\u0627\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627"}),"\n\u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f."]}),"\n",(0,s.jsx)(n.admonition,{title:"\u0646\u06a9\u062a\u0647",type:"info",children:(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u06c0 \u06a9\u0627\u0645\u0644 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0633\u0627\u06cc\u062a \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0642\u0646\u062f\u0634\u06a9\u0646 \u062e\u0648\u0627\u0647\u06cc\u062f \u062f\u0627\u0634\u062a."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0648\u0631\u0648\u062f-\u062f\u0627\u062f\u0647",children:"\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647"}),"\n",(0,s.jsxs)(n.p,{children:["\u062f\u0631 \u0628\u062e\u0634\n",(0,s.jsx)(n.a,{href:"https://tdc.us.cloud.talend.com/datasets",children:"Data Inventory"}),"\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06af\u0632\u06cc\u0646\u06c0 Drop a file or browse\u060c \u062f\u06cc\u062a\u0627\u0633\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0622\u067e\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f.\n\u0627\u06cc\u0646 \u062f\u06cc\u062a\u0627\u0633\u062a \u0634\u0627\u0645\u0644 \u0622\u0645\u0627\u0631 \u0645\u0628\u062a\u0644\u0627\u06cc\u0627\u0646 \u0648 \u062a\u0644\u0641\u0627\u062a \u06a9\u0631\u0648\u0646\u0627 \u0628\u0647 \u062a\u0641\u06a9\u06cc\u06a9 \u06a9\u0634\u0648\u0631\u0647\u0627\u0633\u062a \u06a9\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0627\u0632 \u0622\u0646\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u062d\u062c\u0645 \u0627\u06cc\u0646 \u062f\u06cc\u062a\u0627\u0633\u062a \u0628\u0633\u06cc\u0627\u0631 \u0632\u06cc\u0627\u062f \u0627\u0633\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u062f\u06cc\u062a\u0627\u0633\u062a \u06a9\u0645\u200c\u062d\u062c\u0645 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data.csv",children:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u06cc\u062a\u0627\u0633\u062a \u0627\u0635\u0644\u06cc"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(6740).A+"",children:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u06cc\u062a\u0627\u0633\u062a \u06a9\u0645\u200c\u062d\u062c\u0645"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Data Inventory",src:i(2484).A+"",width:"1920",height:"882"})}),"\n",(0,s.jsx)(n.p,{children:"\u067e\u0633 \u0627\u0632 \u0622\u0646\u06a9\u0647 \u0641\u0631\u0622\u06cc\u0646\u062f \u0622\u067e\u0644\u0648\u062f \u062a\u0645\u0627\u0645 \u0634\u062f\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u06cc\u062a\u0627\u0633\u062a \u0631\u0627 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0622\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Covid dataset info",src:i(5210).A+"",width:"1920",height:"877"})}),"\n",(0,s.jsx)(n.p,{children:"\u0631\u0648\u06cc \u0622\u06cc\u06a9\u0646 \u0644\u0648\u0644\u06c0 \u0622\u0632\u0645\u0627\u06cc\u0634 \u06a9\u0647 \u062f\u0631 \u0633\u0645\u062a \u0686\u067e \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc\u062f \u0646\u0645\u0648\u0646\u0647\u200c\u0627\u06cc \u0627\u0632 \u062f\u0627\u062f\u06c0 \u0622\u067e\u0644\u0648\u062f \u0634\u062f\u0647 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Covid dataset head",src:i(4484).A+"",width:"1920",height:"881"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0633\u0627\u062e\u062a-pipeline",children:"\u0633\u0627\u062e\u062a Pipeline"}),"\n",(0,s.jsxs)(n.p,{children:["\u0648\u0627\u0631\u062f \u0628\u062e\u0634\n",(0,s.jsx)(n.a,{href:"https://tpd.us.cloud.talend.com/pipelines",children:"Pipeline Designer"}),"\n\u0634\u0648\u06cc\u062f \u0648 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 Add pipeline \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06cc\u06a9 Pipeline \u062c\u062f\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0634\u0648\u062f."]}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0628\u062f\u0623",children:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0628\u062f\u0623"}),"\n",(0,s.jsx)(n.p,{children:"\u0631\u0648\u06cc ADD SOURCE \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u06cc\u062a\u0627\u0633\u062a \u0622\u067e\u0644\u0648\u062f\u0634\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0645\u0627\u06cc\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Pipeline Designer - Add Source",src:i(1735).A+"",width:"1920",height:"878"}),"\n",(0,s.jsx)(n.img,{alt:"Pipeline Designer - Sample Data",src:i(1447).A+"",width:"1920",height:"876"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0642\u0635\u062f",children:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0642\u0635\u062f"}),"\n",(0,s.jsx)(n.p,{children:"\u0631\u0648\u06cc ADD DESTINATION \u0648 \u0633\u067e\u0633 Add dataset \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f\n\u0633\u067e\u0633 \u06cc\u06a9 \u0646\u0627\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062f\u0631 \u0646\u0638\u0631 \u0628\u06af\u06cc\u0631\u06cc\u062f.\n\u0642\u0633\u0645\u062a Connection \u0631\u0627 \u0628\u0631 \u0631\u0648\u06cc Local Connection \u0628\u06af\u0630\u0627\u0631\u06cc\u062f\u061b\n\u062f\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u067e\u0633 \u0627\u0632 \u0627\u062c\u0631\u0627\u06cc Pipeline\u060c \u062f\u0627\u062f\u0647 \u0628\u0627 \u0646\u0627\u0645 \u062a\u0639\u06cc\u06cc\u0646 \u0634\u062f\u06c0 \u0634\u0645\u0627 \u062f\u0631 Data Inventory \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631",children:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 + \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f Processor \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.\n\u0647\u0631\u06a9\u062f\u0627\u0645 \u0627\u0632 Processor\u0647\u0627 \u06cc\u06a9 \u0639\u0645\u0644\u06cc\u0627\u062a \u0631\u0627 \u0628\u0631 \u0631\u0648\u06cc \u062f\u0627\u062f\u0647 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Processors",src:i(5565).A+"",width:"659",height:"671"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0641\u06cc\u0644\u062a\u0631-\u062f\u0627\u062f\u0647\u0647\u0627",children:"\u0641\u06cc\u0644\u062a\u0631 \u062f\u0627\u062f\u0647\u200c\u0647\u0627"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Filter Processor \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u0634\u0648\u0631 \u0627\u06cc\u0631\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u0646\u0645\u0627\u06cc\u06cc\u062f."}),"\n",(0,s.jsx)(n.admonition,{title:"\u0647\u0634\u062f\u0627\u0631",type:"caution",children:(0,s.jsx)(n.p,{children:"\u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u067e\u0646\u0644 Preview \u0635\u0631\u0641\u0627\u064b 100 \u0631\u06a9\u0648\u0631\u062f \u0627\u0648\u0644 \u0631\u0627 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u062f\u0647\u062f. \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u067e\u0633 \u0627\u0632 \u0641\u06cc\u0644\u062a\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0628\u0631\u0633\u062f \u0647\u06cc\u0686 \u062f\u0627\u062f\u0647\u200c\u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0627\u062c\u0631\u0627",children:"\u0627\u062c\u0631\u0627"}),"\n",(0,s.jsx)(n.p,{children:"\u0627\u0632 \u0628\u0627\u0644\u0627\u06cc \u0635\u0641\u062d\u0647 \u0628\u0631 \u0631\u0648\u06cc Select a run profile \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0631 \u0645\u0646\u0648\u06cc \u0628\u0627\u0632 \u0634\u062f\u0647 \u06af\u0632\u06cc\u0646\u06c0 Standard \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0645\u0627\u06cc\u06cc\u062f.\n\u067e\u0633 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u062f\u06a9\u0645\u06c0 \u0627\u062c\u0631\u0627 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0634\u0645\u0627 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8551).A+"",width:"1920",height:"877"})}),"\n",(0,s.jsx)(n.p,{children:"Pipeline\n\u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u0648 \u067e\u0633 \u0627\u0632 \u0627\u062a\u0645\u0627\u0645\u060c \u0646\u062a\u06cc\u062c\u06c0 \u0622\u0646 \u0631\u0627 \u062f\u0631 Data Inventory \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc",children:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc"}),"\n",(0,s.jsx)(n.p,{children:"\u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0642\u0633\u0645\u062a \u0627\u0639\u0634\u0627\u0631\u06cc \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc ",(0,s.jsx)(n.code,{children:"new_cases"})," \u0648",(0,s.jsx)(n.code,{children:"new_deaths"})," \u0631\u0627 \u062d\u0630\u0641 \u0646\u0645\u0627\u06cc\u06cc\u062f."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0645\u0642\u0627\u062f\u06cc\u0631 \u062e\u0627\u0644\u06cc (NaN \u06cc\u0627 null) \u0631\u0627 \u062f\u0631 \u0633\u062a\u0648\u0646 ",(0,s.jsx)(n.code,{children:".new_vaccinations_smoothed"})," \u0628\u0627 \u0645\u0642\u062f\u0627\u0631 \u0635\u0641\u0631 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0646\u0648\u0639 \u0633\u062a\u0648\u0646 ",(0,s.jsx)(n.code,{children:"date"})," \u0631\u0627 \u0627\u0632 ",(0,s.jsx)(n.code,{children:"String"})," \u0628\u0647 ",(0,s.jsx)(n.code,{children:"Date"})," \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646\u06cc\u062f."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"aggregation",children:"Aggregation"}),"\n",(0,s.jsxs)(n.p,{children:["\u062c\u0645\u0639 \u062a\u0639\u062f\u0627\u062f \u0645\u0648\u0627\u0631\u062f \u0627\u0628\u062a\u0644\u0627 \u062f\u0631 \u0647\u0631 \u0645\u0627\u0647 \u0631\u0627 \u0645\u062d\u0627\u0633\u0628\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0631 \u0633\u062a\u0648\u0646\u06cc \u0628\u0647 \u0646\u0627\u0645 ",(0,s.jsx)(n.code,{children:"total_month_cases"})," \u0628\u0631\u06cc\u0632\u06cc\u062f."]}),"\n",(0,s.jsx)(n.admonition,{title:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc",type:"tip",children:(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0644\u0627\u0632\u0645 \u0628\u0627\u0634\u062f \u0627\u0628\u062a\u062f\u0627 \u0631\u0648\u06cc \u0633\u062a\u0648\u0646 \u062a\u0627\u0631\u06cc\u062e \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a\u06cc \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"join",children:"Join"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(7902).A+"",children:"\u062f\u06cc\u062a\u0627\u0633\u062a \u0645\u0648\u0642\u0639\u06cc\u062a \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc \u06a9\u0634\u0648\u0631\u0647\u0627"}),"\n\u0631\u0627 \u0622\u067e\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f \u0633\u067e\u0633 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Join\u060c \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u0637\u0648\u0644 \u0648 \u0639\u0631\u0636 \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc \u0631\u0627 \u0628\u0647 \u062f\u06cc\u062a\u0627\u0633\u062a \u0622\u0645\u0627\u0631 \u0645\u0628\u062a\u0644\u0627\u06cc\u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u062e\u0631\u0648\u062c\u06cc",children:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0631\u0648\u062c\u06cc"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a\u060c \u062d\u0627\u0635\u0644 \u06a9\u0627\u0631 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 CSV \u062e\u0631\u0648\u062c\u06cc \u0628\u06af\u06cc\u0631\u06cc\u062f \u0648 \u062f\u0627\u0646\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f \u0648 \u0646\u062a\u0627\u06cc\u062c \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."}),"\n",(0,s.jsxs)(n.p,{children:["\u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631 \u067e\u0631\u0648\u0698\u06c0 \u062e\u0648\u062f \u0639\u0644\u0627\u0648\u0647 \u0628\u0631 \u062e\u0631\u0648\u062c\u06cc \u0645\u062a\u0646\u06cc\u060c \u062e\u0631\u0648\u062c\u06cc \u0646\u0645\u0648\u062f\u0627\u0631\u06cc \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc\u06cc \u0645\u0627\u0646\u0646\u062f\n",(0,s.jsx)(n.a,{href:"https://www.highcharts.com/",children:"Highcharts"}),"\n\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.\n\u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0631\u0633\u0645\u06cc \u0627\u0632 Angular \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644\u06cc \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631\n",(0,s.jsx)(n.a,{href:"https://github.com/highcharts/highcharts-angular",children:"\u0635\u0641\u062d\u06c0 GitHub"}),"\n\u0622\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0627\u0634\u062a\u0631\u0627\u06a9\u06af\u0630\u0627\u0631\u06cc",children:"\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc"}),"\n",(0,s.jsx)(n.p,{children:"\u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 Pipeline \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0627\u0639\u0636\u0627\u06cc \u062a\u06cc\u0645 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f\u060c Pipeline \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f \u0648 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u06cc\u06a9\u0646 Export the pipeline \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7902:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/countries-coordinates-c88272aae5ff10788d109909ab472872.csv"},6740:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/owid-covid-data.reduced-b3934706f6a6acb7e55acf3489f85400.csv"},4484:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/covid-dataset-head-23f7777bc717ae7d239495d44a8d7107.png"},5210:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/covid-dataset-info-21fe194caab61a0c890cb00d27ad0087.png"},2484:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/data-inventory-6da923f41ddeb354126fd42d0bc4cd60.png"},1735:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pipeline-designer-add-source-c640befe58cfa879fce6855bf9139d1b.png"},5565:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pipeline-designer-processors-7158d39f2ff13fefc864db206521dada.png"},8551:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pipeline-designer-run-7ddb8f7fd8f8299f85e644c46f8707bf.png"},1447:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pipeline-designer-sample-data-f6cba5e65630e0b98fe54080c81d6a20.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(6540);const d={},l=s.createContext(d);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);