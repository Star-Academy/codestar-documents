"use strict";(self.webpackChunkstar_academy=self.webpackChunkstar_academy||[]).push([[5993],{2812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(4848),t=r(8453);const i={title:"RxJs",description:"Do you want to dance with javascript?"},l=void 0,o={id:"frontend/phase07-rxjs",title:"RxJs",description:"Do you want to dance with javascript?",source:"@site/docs/frontend/phase07-rxjs.md",sourceDirName:"frontend",slug:"/frontend/phase07-rxjs",permalink:"/codestar-documents/docs/frontend/phase07-rxjs",draft:!1,unlisted:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/frontend/phase07-rxjs.md",tags:[],version:"current",frontMatter:{title:"RxJs",description:"Do you want to dance with javascript?"},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/codestar-documents/docs/frontend/phase06-angular"},next:{title:"HTTP",permalink:"/codestar-documents/docs/frontend/phase08-http"}},c={},a=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:3},{value:"\u0646\u0635\u0628 RxJS",id:"\u0646\u0635\u0628-rxjs",level:4},{value:"\u0645\u0641\u0627\u0647\u06cc\u0645 \u067e\u0627\u06cc\u0647\u200c\u0627\u06cc",id:"\u0645\u0641\u0627\u0647\u06cc\u0645-\u067e\u0627\u06cc\u0647\u0627\u06cc",level:3},{value:"Observable",id:"observable",level:4},{value:"Observer",id:"observer",level:4},{value:"Subscription",id:"subscription",level:4},{value:"Operators",id:"operators",level:4},{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 RxJS \u062f\u0631 \u0627\u0646\u06af\u0648\u0644\u0627\u0631",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-rxjs-\u062f\u0631-\u0627\u0646\u06af\u0648\u0644\u0627\u0631",level:3},{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 HttpClient",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-httpclient",level:4},{value:"\u062a\u0645\u0631\u06cc\u0646",id:"\u062a\u0645\u0631\u06cc\u0646",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u0645\u0642\u062f\u0645\u0647",children:"\u0645\u0642\u062f\u0645\u0647"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RxJS"}),"\n(Reactive Extensions For JavaScript)\n\u06cc\u06a9 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0628\u0631\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc\nReactive\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0628\u062c\u06a9\u062a\u200c\u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647\n(Observables)\n\u0627\u0633\u062a.\nRxJS\n\u0628\u0647 \u0637\u0648\u0631 \u06af\u0633\u062a\u0631\u062f\u0647\u200c\u0627\u06cc \u062f\u0631 \u0627\u0646\u06af\u0648\u0644\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u0628\u0627 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u063a\u06cc\u0631\u0647\u0645\u0632\u0645\u0627\u0646 \u06a9\u0627\u0631 \u06a9\u0646\u062f.\n\u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u062f\u0631 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u0648\u0628 \u0633\u0627\u06cc\u062a \u0645\u0627 \u062f\u06a9\u0645\u0647\u200c\u0627\u06cc \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u06a9\u0647 \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u0645 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0631\u0648\u06cc \u0622\u0646 \u06a9\u0644\u06cc\u06a9 \u0634\u062f \u062f\u0631 \u0642\u0633\u0645\u062a \u062f\u06cc\u06af\u0631\u06cc \u0627\u0632 \u0633\u0627\u06cc\u062a \u06cc\u06a9 \u0627\u062a\u0641\u0627\u0642 \u062f\u06cc\u06af\u0631\u06cc \u0631\u062e \u0628\u062f\u0647\u062f. \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u0627\u0631\u062a\u0628\u0627\u0637 \u0648 \u0647\u0645\u0627\u0647\u0646\u06af\u06cc \u0628\u06cc\u0646 \u0622\u0646\u0647\u0627 \u0628\u0627\u06cc\u062f \u0627\u0632\nRxJs\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f!"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"\u0646\u0635\u0628-rxjs",children:"\u0646\u0635\u0628 RxJS"}),"\n",(0,s.jsx)(n.p,{children:"RxJS\n\u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0628\u0627 \u0627\u0646\u06af\u0648\u0644\u0627\u0631 \u0646\u0635\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u0645\u0627 \u0627\u06af\u0631 \u0628\u0647 \u0647\u0631 \u062f\u0644\u06cc\u0644\u06cc \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0646\u0635\u0628 \u0622\u0646 \u062f\u0627\u0631\u06cc\u062f\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install rxjs\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0645\u0641\u0627\u0647\u06cc\u0645-\u067e\u0627\u06cc\u0647\u0627\u06cc",children:"\u0645\u0641\u0627\u0647\u06cc\u0645 \u067e\u0627\u06cc\u0647\u200c\u0627\u06cc"}),"\n",(0,s.jsx)(n.h4,{id:"observable",children:"Observable"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Observable"}),"\n\u06cc\u06a9 \u0645\u0646\u0628\u0639 \u062f\u0627\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0631\u0648\u0631 \u0632\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u062f. \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u06cc\u06a9\n",(0,s.jsx)(n.code,{children:"Observable"}),"\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u06a9\u0644\u0627\u0633\n",(0,s.jsx)(n.code,{children:"Observable"}),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {Observable} from 'rxjs';\n\nconst observable = new Observable((subscriber) => {\n    subscriber.next('Hello');\n    subscriber.next('World');\n    subscriber.complete();\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"observer",children:"Observer"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Observer"}),"\n\u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u0627\u0633\u062a \u06a9\u0647 \u0633\u0647 \u0645\u062a\u062f \u062f\u0627\u0631\u062f:\n",(0,s.jsx)(n.code,{children:"next"}),", ",(0,s.jsx)(n.code,{children:"error"}),",\n\u0648\n",(0,s.jsx)(n.code,{children:"complete"}),"\n. \u0627\u06cc\u0646 \u0645\u062a\u062f\u0647\u0627 \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u060c \u0645\u062f\u06cc\u0631\u06cc\u062a \u062e\u0637\u0627\u0647\u0627 \u0648 \u0627\u062a\u0645\u0627\u0645 \u062c\u0631\u06cc\u0627\u0646 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const observer = {\n    next: (x: string) => console.log('Next:', x),\n    error: (err: any) => console.log('Error:', err),\n    complete: () => console.log('Completed'),\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"subscription",children:"Subscription"}),"\n",(0,s.jsxs)(n.p,{children:["\u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u0628\u0647 \u06a9\u0627\u0631 \u0628\u0627 \u06cc\u06a9\n",(0,s.jsx)(n.code,{children:"Observable"}),"\n\u060c \u0628\u0627\u06cc\u062f \u0622\u0646 \u0631\u0627\nsubscribe\n\u06a9\u0646\u06cc\u062f:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const subscription = observable.subscribe(observer);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"operators",children:"Operators"}),"\n",(0,s.jsxs)(n.p,{children:["\u0639\u0645\u0644\u06af\u0631\u0647\u0627 \u062a\u0648\u0627\u0628\u0639\u06cc \u0647\u0633\u062a\u0646\u062f \u06a9\u0647\n",(0,s.jsx)(n.code,{children:"Observable"}),"\n\u0647\u0627 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f. \u0628\u0631\u062e\u06cc \u0627\u0632 \u067e\u0631\u06a9\u0627\u0631\u0628\u0631\u062f\u062a\u0631\u06cc\u0646 \u0639\u0645\u0644\u06af\u0631\u0647\u0627 \u0639\u0628\u0627\u0631\u062a\u0646\u062f \u0627\u0632\n",(0,s.jsx)(n.code,{children:"map"}),", ",(0,s.jsx)(n.code,{children:"filter"}),", ",(0,s.jsx)(n.code,{children:"mergeMap"}),", \u0648 ",(0,s.jsx)(n.code,{children:"switchMap"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {of} from 'rxjs';\nimport {map, filter} from 'rxjs/operators';\n\nconst observable = of(1, 2, 3, 4, 5);\n\nconst transformedObservable = observable.pipe(\n    filter((x) => x % 2 === 0),\n    map((x) => x * 10)\n);\n\ntransformedObservable.subscribe((x) => console.log(x)); // 20, 40\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-rxjs-\u062f\u0631-\u0627\u0646\u06af\u0648\u0644\u0627\u0631",children:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 RxJS \u062f\u0631 \u0627\u0646\u06af\u0648\u0644\u0627\u0631"}),"\n",(0,s.jsxs)(n.p,{children:["\u062f\u0631 \u0627\u0646\u06af\u0648\u0644\u0627\u0631\u060c\nRxJS\n\u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0628\u0627\n",(0,s.jsx)(n.code,{children:"HttpClient"}),"\n\u0648 \u0641\u0631\u0645\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u06cc\u06a9 \u0645\u062b\u0627\u0644 \u0633\u0627\u062f\u0647 \u0627\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nRxJS\n\u0628\u0627\n",(0,s.jsx)(n.code,{children:"HttpClient"}),"\n\u0622\u0648\u0631\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a."]}),"\n",(0,s.jsx)(n.h4,{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-httpclient",children:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 HttpClient"}),"\n",(0,s.jsxs)(n.p,{children:["\u0627\u0628\u062a\u062f\u0627\u060c\n",(0,s.jsx)(n.code,{children:"HttpClientModule"}),"\n\u0631\u0627 \u0628\u0647 \u0645\u0627\u0698\u0648\u0644 \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// src/app/app.module.ts\nimport {BrowserModule} from '@angular/platform-browser';\nimport {NgModule} from '@angular/core';\nimport {HttpClientModule} from '@angular/common/http';\nimport {AppComponent} from './app.component';\n\n@NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule, HttpClientModule],\n    providers: [],\n    bootstrap: [AppComponent],\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0633\u067e\u0633\u060c \u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc\nAPI\n\u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// src/app/data.service.ts\nimport {Injectable} from '@angular/core';\nimport {HttpClient} from '@angular/common/http';\nimport {Observable} from 'rxjs';\n\n@Injectable({\n    providedIn: 'root',\n})\nexport class DataService {\n    constructor(private http: HttpClient) {}\n\n    getData(): Observable<any> {\n        return this.http.get('https://api.example.com/data');\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u062d\u0627\u0644\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// src/app/app.component.ts\nimport {Component, OnInit} from '@angular/core';\nimport {DataService} from './data.service';\n\n@Component({\n    selector: 'app-root',\n    template: `\n        <div *ngIf=\"data\">\n            {{ data | json }}\n        </div>\n    `,\n})\nexport class AppComponent implements OnInit {\n    data: any;\n\n    constructor(private dataService: DataService) {}\n\n    ngOnInit() {\n        this.dataService.getData().subscribe((response) => {\n            this.data = response;\n        });\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://v17.angular.io/guide/rx-library",children:"Angular - What is RxJs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rxjs.dev/guide/overview",children:"RxJs - RxJs document"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.decodedfrontend.io/hot-vs-cold-observable-in-rxjs/",children:"Decoded Frontend - Hot vs Cold Observable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rxjs.dev/guide/subject",children:"RxJs - What is Subject and BehaviorSubject"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rxmarbles.com/#filter",children:"RxJs Marbles - RxJs pipes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://v17.angular.io/guide/understanding-communicating-with-http",children:"Angular documents - Understanding communicating with backend services using HTTP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=_05v0mrNLh0",children:"YouTube - Angular HTTP Client Quick Start Tutorial"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0645\u0631\u06cc\u0646",children:"\u062a\u0645\u0631\u06cc\u0646"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u062a\u0645\u0631\u06cc\u0646 \u0627\u0648\u0644: \u0627\u06cc\u062c\u0627\u062f \u0648 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06cc\u06a9\nObservable\n\u06cc\u06a9\nObservable\n\u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u0639\u062f\u0627\u062f 1 \u062a\u0627 5 \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u062f.\n\u06cc\u06a9\nObserver\n\u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u0627\u0639\u062f\u0627\u062f \u0631\u0627 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u062f.\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u062a\u062f\nsubscribe\u060c Observer\n\u0631\u0627 \u0628\u0647\nObservable\n\u0645\u062a\u0635\u0644 \u06a9\u0646\u06cc\u062f."}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0645\u0631\u06cc\u0646 \u062f\u0648\u0645: \u06cc\u06a9\nObservable\n\u0627\u0632 \u0627\u0639\u062f\u0627\u062f 1 \u062a\u0627 10 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f.\n\u0627\u0632 \u0639\u0645\u0644\u06af\u0631\u0647\u0627\u06cc\nfilter \u0648 map\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0641\u0642\u0637 \u0627\u0639\u062f\u0627\u062f \u0632\u0648\u062c \u0631\u0627 \u06af\u0631\u0641\u062a\u0647 \u0648 \u0647\u0631\u06a9\u062f\u0627\u0645 \u0631\u0627 \u0628\u0647 \u062a\u0648\u0627\u0646 2 \u0628\u0631\u0633\u0627\u0646\u06cc\u062f.\n\u0646\u062a\u06cc\u062c\u0647 \u0646\u0647\u0627\u06cc\u06cc \u0631\u0627 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u06cc\u062f."}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0645\u0631\u06cc\u0646 \u0633\u0648\u0645: \u06a9\u0627\u0631 \u0628\u0627\nHttpClient\n\u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633 \u062c\u062f\u06cc\u062f \u062f\u0631 \u0627\u0646\u06af\u0648\u0644\u0627\u0631 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u0632\nHttpClient\n\u0628\u0631\u0627\u06cc \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u06cc\u06a9\nAPI\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u06cc\u06a9\nObservable\n\u0628\u0631\u0627\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u0627\u0632\nAPI\n\u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f.\n\u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u060c \u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f\u0647 \u0627\u0632\nAPI\n\u0631\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628\nHTML\n\u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u06cc\u062f."}),"\n",(0,s.jsx)(n.li,{children:"\u062a\u0645\u0631\u06cc\u0646 \u0686\u0647\u0627\u0631\u0645: \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u062f\u0647\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0628\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\n\u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633 \u062c\u062f\u06cc\u062f \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u062f\u0627\u0631\u0627\u06cc \u06cc\u06a9\nSubject\n\u0628\u0627\u0634\u062f.\n\u062f\u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f\u060c \u06cc\u06a9\u06cc \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062f\u0627\u062f\u0647 \u0628\u0647\nSubject\n\u0648 \u062f\u06cc\u06af\u0631\u06cc \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0627\u062f\u0647 \u0627\u0632\nSubject.\n\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u062a\u0648\u0633\u0637 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u0627 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u06cc\u06af\u0631 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u06cc\u062f."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u067e\u0631\u0648\u0698\u0647",children:"\u067e\u0631\u0648\u0698\u0647"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc Api\u0647\u0627 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0647 \u0627\u0633\u062a \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nHTTPClient\n\u0628\u0647 \u0622\u0646 \u0645\u062a\u0635\u0644 \u0634\u0648\u06cc\u062f \u0648 \u062f\u06cc\u062a\u0627\u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u0632 \u0628\u06a9\u200c\u0627\u0646\u062f \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f \u0648 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u06cc\u062f."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);