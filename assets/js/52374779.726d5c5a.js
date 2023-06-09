"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[7234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"Nest (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",description:""},s=void 0,l={unversionedId:"software-engineering/phase08-optional02-nest",id:"software-engineering/phase08-optional02-nest",title:"Nest (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",description:"",source:"@site/docs/software-engineering/phase08-optional02-nest.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase08-optional02-nest",permalink:"/codestar-documents/docs/software-engineering/phase08-optional02-nest",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase08-optional02-nest.md",tags:[],version:"current",frontMatter:{title:"Nest (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",description:""},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",permalink:"/codestar-documents/docs/software-engineering/phase08-optional01-Elasticsearch"},next:{title:"ASP.NET Core",permalink:"/codestar-documents/docs/software-engineering/phase09-web"}},o={},p=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"Nest \u0686\u06cc\u0633\u062a\u061f",id:"nest-\u0686\u06cc\u0633\u062a",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647\u200c\u06cc NEST",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u06cc-nest",level:2},{value:"\u0627\u062c\u0631\u0627\u06cc Query\u0647\u0627\u06cc \u062c\u0633\u062a\u062c\u0648",id:"\u0627\u062c\u0631\u0627\u06cc-query\u0647\u0627\u06cc-\u062c\u0633\u062a\u062c\u0648",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0647\u0648\u0645 Near Real Time",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0647\u0648\u0645-near-real-time",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 Query\u0647\u0627\u06cc \u0633\u06cc\u0633\u062a\u0645\u06cc Elasticsearch",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-query\u0647\u0627\u06cc-\u0633\u06cc\u0633\u062a\u0645\u06cc-elasticsearch",level:2},{value:"Response Validation",id:"response-validation",level:2},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],c={toc:p};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647\u200c\u06cc\n",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/nest.html"},"NEST"),"\n\u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f."),(0,r.kt)("h2",{id:"nest-\u0686\u06cc\u0633\u062a"},"Nest \u0686\u06cc\u0633\u062a\u061f"),(0,r.kt)("p",null,"\u0647\u0645\u0627\u0646\u200c\u0637\u0648\u0631 \u06a9\u0647 \u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u062f\u0631 \u0641\u0627\u0632 \u0642\u0628\u0644 \u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u06cc\u062f Elasticsearch\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html"},"REST API"),"\n\u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0633\u062a.\n\u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0631 \u0647\u0631 \u0632\u0628\u0627\u0646\u06cc \u0628\u0627 \u0633\u0627\u062e\u062a \u06cc\u06a9 Http Connection\n\u0628\u0647 Elasticsearch\n\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0627\u062f \u0648 Query\u0647\u0627\u06cc\n\u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0631\u062f."),(0,r.kt)("p",null,"\u062f\u0631 \u0632\u0628\u0627\u0646 #C\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=netcore-3.1"},"HttpClient"),"\n\u0628\u0647 Elasticsearch\n\u0645\u062a\u0635\u0644 \u0634\u0648\u06cc\u062f \u0648 \u0636\u0645\u0646 \u0633\u0627\u062e\u062a \u06cc\u06a9 index\n",(0,r.kt)("a",{target:"_blank",href:t(1145).Z},"\u0627\u06cc\u0646 \u0627\u0634\u062e\u0627\u0635"),"\n\u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u06cc\u06a9\u06cc \u06cc\u06a9\u06cc (\u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Bulk API)\n\u062f\u0631 \u0622\u0646 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u06a9\u0646\u06cc\u062f."),(0,r.kt)("admonition",{title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0639\u0644\u0627\u0648\u0647 \u0628\u0631 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 Elasticsearch\n\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0646\u062d\u0648\u0647\u200c\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 HttpClient\n\u0646\u06cc\u0632 \u0645\u062f \u0646\u0638\u0631 \u0627\u0633\u062a.")),(0,r.kt)("admonition",{title:"\u200c",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u06a9\u0644\u0627\u0633 HttpClient\n\u0627\u0632 \u0648\u0627\u0633\u0637 IDisposable\n\u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f \u0627\u0645\u0627 \u0628\u0627 \u0633\u0627\u06cc\u0631 IDisposable\u0647\u0627\n\u062a\u0641\u0627\u0648\u062a \u062f\u0627\u0631\u062f \u06a9\u0647 \u062f\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@nuno.caneco/c-httpclient-should-not-be-disposed-or-should-it-45d2a8f568bc"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631\u0628\u0627\u0631\u0647\u200c\u06cc \u0622\u0646 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u06cc-nest"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647\u200c\u06cc NEST"),(0,r.kt)("p",null,"\u062a\u0627 \u0627\u06cc\u0646\u200c\u062c\u0627\u06cc \u06a9\u0627\u0631 \u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u06cc\u0645 \u06a9\u0647 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 Elasticsearch\n\u062f\u0631 \u0632\u0628\u0627\u0646 #C\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 HttpClient\n\u0627\u0645\u06a9\u0627\u0646\u200c\u067e\u0630\u06cc\u0631 \u0627\u0633\u062a \u0627\u0645\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u062f\u0634\u0648\u0627\u0631 \u0648 \u0632\u0645\u0627\u0646\u200c\u0628\u0631 \u0627\u0633\u062a. \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647\u200c\u06cc ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/nest.html"},"NEST"),"\n\u06cc\u06a9 \u0631\u0627\u0628\u0637 \u0633\u0637\u062d \u0628\u0627\u0644\u0627 \u0628\u0631\u0627\u06cc \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 Elasticsearch\n\u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u06a9\u0647 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0648\u06cc\u0698\u06af\u06cc strongly typed\n\u0628\u0648\u062f\u0646 \u06a9\u0627\u0631 \u0628\u0627 \u0622\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0634\u06cc\u0621\u06af\u0631\u0627 \u0631\u0627 \u0628\u0633\u06cc\u0627\u0631 \u0633\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,r.kt)("p",null,"\u062d\u0627\u0644 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u06a9\u0627\u0631\u06cc \u0631\u0627 \u06a9\u0647 \u067e\u06cc\u0634 \u062a\u0631 \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u06cc\u0645 \u0627\u06cc\u0646 \u0628\u0627\u0631 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647\u200c\u06cc \u0633\u06cc\u200c\u0634\u0627\u0631\u067e \u0628\u0633\u0627\u0632\u06cc\u062f \u0648\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/NEST/"},"NuGet Package \u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u200c\u062e\u0627\u0646\u0647"),"\n\u0631\u0627 \u062f\u0631 \u0622\u0646 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u06a9\u0647 \u06a9\u062f \u0632\u06cc\u0631 \u06cc\u06a9 \u0634\u06cc\u0621 \u0627\u0632 \u06a9\u0644\u0627\u0633 ",(0,r.kt)("inlineCode",{parentName:"p"},"ElasticClient"),"\n\u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var uri = new Uri ("http://localhost:9200");\nvar connectionSettings = new ConnectionSettings (uri);\n// DebugMode gives you the request in each request to make debuging easier\n// But don\'t forget to only use it in debugging, because its usage has some overhead\n// and should not be used in production\nconnectionSettings.EnableDebugMode();\nvar client = new ElasticClient (connectionSettings);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u06a9\u0647 \u06a9\u062f \u0632\u06cc\u0631 \u0627\u0632 \u062f\u0631\u0633\u062a\u06cc \u0627\u062a\u0635\u0627\u0644 \u062e\u0648\u062f \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062d\u0627\u0635\u0644 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var response = client.Ping();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u06cc\u06a9 \u06a9\u0644\u0627\u0633 \u0645\u062f\u0644 \u0628\u0631\u0627\u06cc Person\n\u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Person \n{\n    [JsonPropertyName("age")]\n    public int Age {get;set;}\n\n    [JsonPropertyName("eyeColor")]\n    public string EyeColor {get;set;}\n\n    [JsonPropertyName("name")]\n    public string Name {get;set;}\n\n    [JsonPropertyName("gender")]\n    public string Gender {get;set;}\n\n    [JsonPropertyName("company")]\n    public string Company {get;set;}\n\n    [JsonPropertyName("email")]\n    public string Email {get;set;}\n\n    [JsonPropertyName("phone")]\n    public string Phone {get;set;}\n\n    [JsonPropertyName("address")]\n    public string Address{get;set;}\n\n    [JsonPropertyName("about")]\n    public string About {get;set;}\n\n    [JsonPropertyName("registration_date")]\n    public string RegistrationDate {get;set;}\n\n    [Ignore]\n    [JsonPropertyName("latitude")]\n    public double Latitude {get;set;}\n\n    [Ignore]\n    [JsonPropertyName("longitude")]\n    public double Longitude {get;set;}\n\n    private string location = null;\n    public string Location\n    {\n        get\n        {\n            if (location is null)\n                return $"{Latitude},{Longitude}";\n            return location;\n        }\n        set\n        {\n            location = value;\n        }\n    } \n}\n')),(0,r.kt)("p",{parentName:"li"},"\u062f\u0631 \u0627\u06cc\u0646 \u06a9\u0644\u0627\u0633 \u0628\u0647 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/"},"Attribute"),"\u0647\u0627\u06cc\nIgnore\n\u0648 JsonPropertyName\n\u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u0648 \u0639\u0644\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062a\u0648\u0636\u06cc\u062d \u062f\u0647\u06cc\u062f."),(0,r.kt)("p",{parentName:"li"},"\u0647\u0645\u200c\u0686\u0646\u06cc\u0646 \u0628\u0647 \u0646\u062d\u0648\u0647\u200c\u06cc \u062a\u0639\u0631\u06cc\u0641 Location\n\u0646\u06cc\u0632 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633 \u0645\u062f\u0644 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0641\u0627\u06cc\u0644 JSON\n\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u06cc\u062f.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u06cc\u06a9 index\n\u0628\u0627 mapping\n\u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0627\u0634\u062e\u0627\u0635 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f.\n\u06cc\u06a9 \u0645\u062b\u0627\u0644 \u0628\u0631\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 index\n\u0647\u0645\u0631\u0627\u0647 \u0628\u0627 mapping\n\u062f\u0631 \u0632\u06cc\u0631 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var index = "my-index";\nvar response = client.Indices.Create(index,\n        s => s.Settings(settings => settings\n            .Setting("max_ngram_diff", 7)\n            .Analysis(analysis => analysis\n                .TokenFilters(tf => tf\n                    .NGram("my-ngram-filter", ng => ng\n                        .MinGram(3)\n                        .MaxGram(10)))\n                .Analyzers(analyzer => analyzer\n                    .Custom("my-ngram-analyzer", custom => custom\n                        .Tokenizer("standard")\n                        .Filters("lowercase", "my-ngram-filter")))))\n                .Map<Person>(m => m\n                    .Properties(pr => pr\n                            .Text(t => t\n                                .Name(n => n.About)\n                                .Fields(f => f\n                                    .Text(ng => ng\n                                        .Name("ngram")\n                                        .Analyzer("my-ngram-analyzer")))))));\n')),(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u062a\u0648\u0636\u06cc\u062d \u062f\u0647\u06cc\u062f Mapping\n\u062a\u0639\u0631\u06cc\u0641\u200c\u0634\u062f\u0647 \u0686\u0647 Field\u0647\u0627\u06cc\u06cc\n\u062f\u0627\u0631\u062f."),(0,r.kt)("admonition",{parentName:"li",title:"\u200c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/multi-fields.html"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\n\u06a9\u0645\u06a9 \u0628\u06af\u06cc\u0631\u06cc\u062f."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u06a9\u0647\u200c\u06a9\u062f \u0632\u06cc\u0631 (\u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u0628\u0627 \u06a9\u0645\u06cc \u062a\u063a\u06cc\u06cc\u0631)\n\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 index\n\u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0628\u0631\u06cc\u0632\u06cc\u062f:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var bulkDescriptor = new BulkDescriptor();\nforeach (var person in people)\n{\n    bulkDescriptor.Index<Person>(x => x\n        .Index(index)\n        .Document(person)\n    );\n}\nclient.Bulk(bulkDescriptor);\n")))),(0,r.kt)("h2",{id:"\u0627\u062c\u0631\u0627\u06cc-query\u0647\u0627\u06cc-\u062c\u0633\u062a\u062c\u0648"},"\u0627\u062c\u0631\u0627\u06cc Query\u0647\u0627\u06cc \u062c\u0633\u062a\u062c\u0648"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0627\u0646\u0648\u0627\u0639 Query\u0647\u0627\u06cc\u06cc\n\u06a9\u0647 \u062f\u0631 \u0641\u0627\u0632 \u0642\u0628\u0644 \u0627\u062c\u0631\u0627 \u06a9\u0631\u062f\u06cc\u062f \u0631\u0627 \u0631\u0648\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 NEST\n\u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0627\u0647 \u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/query-dsl.html"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\n\u0628\u0647 \u06a9\u0645\u06a9 \u0634\u0645\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f."),(0,r.kt)("p",null,"\u06cc\u06a9 \u0645\u062b\u0627\u0644 \u0628\u0647 \u062f\u0648 \u0635\u0648\u0631\u062a \u062f\u0631 \u0632\u06cc\u0631 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public static void BoolQuerySample1()\n{\n    QueryContainer query = new BoolQuery\n    {\n        Must = new List<QueryContainer>\n        {\n            new MatchQuery\n            {\n                Field = "about",\n                Query = "Labore"\n            }\n        }\n    };\n    var response = client.Search<Dictionary<string, object>>(s => s\n        .Index("my-index")\n        .Query(q => query));\n}\n\npublic static void BoolQuerySample2()\n{\n    var response = client.Search<Person>(s => s\n        .Index("my-index")\n        .Query(q => q\n            .Bool(b => b\n                .Must(must => must\n                    .Match(match => match\n                        .Field(p => p.About)\n                        .Query("Labore"))))));\n}\n')),(0,r.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0647\u0648\u0645-near-real-time"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0647\u0648\u0645 Near Real Time"),(0,r.kt)("p",null,"\u0648\u0642\u062a\u06cc \u062f\u0631 Elasticsearch\n\u062f\u0627\u062f\u0647\u200c\u0627\u06cc \u0631\u0627 index\n\u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a. \u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0631\u0647 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/near-real-time.html"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("p",null,"\u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0647 \u06cc\u06a9 \u0633\u0646\u062f \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0634\u062f\u0647 \u0642\u0627\u0628\u0644 \u062c\u0633\u062a\u062c\u0648 \u0628\u0627\u0634\u062f \u0628\u0627\u06cc\u062f index\n\u0645\u0648\u0631\u062f \u0646\u0638\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-refresh.html"},"refresh"),"\n\u0634\u0648\u062f."),(0,r.kt)("h2",{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-query\u0647\u0627\u06cc-\u0633\u06cc\u0633\u062a\u0645\u06cc-elasticsearch"},"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 Query\u0647\u0627\u06cc \u0633\u06cc\u0633\u062a\u0645\u06cc Elasticsearch"),(0,r.kt)("p",null,"\u0647\u0631 \u06cc\u06a9 \u0627\u0632 \u062a\u06a9\u0647\u200c\u06a9\u062f\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u0648 \u062a\u0648\u0636\u06cc\u062d \u062f\u0647\u06cc\u062f \u062e\u0631\u0648\u062c\u06cc \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0686\u06cc\u0633\u062a\u061f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-health.html"},"Cluster health"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var response = client.Cluster.Health();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html"},"cat nodes"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var response = client.Cat.Nodes();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html"},"cat indices"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var response = client.Cat.Indices();\n")),(0,r.kt)("h2",{id:"response-validation"},"Response Validation"),(0,r.kt)("p",null,"\u067e\u0627\u0633\u062e\u06cc \u06a9\u0647 NEST\n\u0627\u0632 Elasticsearch\n\u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f \u062f\u0631 \u0642\u0627\u0644\u0628 \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"IResponse"),"\n\u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u06a9\u0647 \u0627\u0644\u0628\u062a\u0647 \u0627\u0632 \u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0627\u06cc\u0646 interface\n\u0631\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0631\u062f\u0647\u200c\u0627\u0646\u062f.\n\u06af\u0627\u0647\u06cc \u0627\u0648\u0642\u0627\u062a \u0627\u062c\u0631\u0627\u06cc Query\n\u0628\u0627 \u0645\u0634\u06a9\u0644 \u0645\u0648\u0627\u062c\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644\u0627\u062a \u062f\u0631 \u067e\u0627\u0633\u062e\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u06cc\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628 Exception\n\u0648 \u06cc\u0627 \u062f\u0631 \u06cc\u06a9\u06cc \u0627\u0632 Property\u0647\u0627\u06cc\nIResponse\n\u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u062f\u0631 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/net-api/1.x/handling-responses.html"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\n\u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0631\u0647 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u06cc\u06a9 Validator\n\u0628\u0631\u0627\u06cc Response\u0647\u0627\n\u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f."),(0,r.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,r.kt)("p",null,"\u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0628\u0647 \u0632\u0628\u0627\u0646 \u0633\u06cc\u200c\u0634\u0627\u0631\u067e \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u06a9\u0647 \u0645\u0627\u0646\u0646\u062f \u0641\u0627\u0632 \u06cc\u06a9 \u06a9\u0627\u0631 \u06a9\u0646\u062f \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0628\u0647 \u062c\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0647 \u0633\u0627\u062e\u062a Index\n\u0648 \u062c\u0633\u062a\u062c\u0648 \u0631\u0627 \u062e\u0648\u062f\u062a\u0627\u0646 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a Elasticsearch\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.\n\u0627\u0632 Response Validator\u06cc\n\u06a9\u0647 \u062f\u0631 \u0642\u0633\u0645\u062a \u0642\u0628\u0644 \u0646\u0648\u0634\u062a\u06cc\u062f \u062f\u0631 \u0627\u06cc\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."))}u.isMDXComponent=!0},1145:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/people-37f049d502011ac3d0cbb332fae2f675.json"}}]);