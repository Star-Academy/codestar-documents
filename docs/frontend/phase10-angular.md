---
title: Angular
description: When I was a kid, my mom used to just throw me into a pile of broken glass!
tags: [Angular,NodeJs]
---
# Angular

## مقدمه‌ای بر Angular
[Angular](https://angular.io/) یک فریمورک و پلتفرم برای ساخت برنامه‌های تک‌صفحه‌ای (SPA یا single page application) با استفاده از HTML و TypeScript است. این فریمورک توسط گوگل توسعه داده شده و نگهداری می‌شود و ابزارها و معماری محکمی را برای ساخت برنامه‌های قابل گسترش ارائه می‌دهد.

###  ویژگی‌ها و مزایای کلیدی Angular
- **TypeScript**  
  Angular با TypeScript نوشته شده است که یک super set بر JavaScript است و ویژگی‌های زیادی از جمله تایپ استاتیک را به زبان اضافه می‌کند.

- **Templating**  
  Angular از یک سیستم طراحی template پیشرفته استفاده می‌کند که به شما این امکان را می‌دهد تا بتوانید به راحتی داده‌های پویا را به template متصل کنید.

- **Component / Directive**  
  با استفاده از دایرکتیوها و کامپوننت‌ها می‌توانید رفتارها و نماهایی با قابلیت استفاده مجدد ایجاد کنید.
****


# مرور کلی بر Angular

Angular از مفاهیم و ابزارهای متعددی تشکیل شده که به توسعه‌دهندگان کمک می‌کند تا برنامه‌های وب پیچیده را به روشی ماژولار و ساختاریافته توسعه دهند. در اینجا برخی از مفاهیم کلیدی و اجزای اصلی Angular آورده شده است:

- **ماژول‌ها (Modules)**
  هر برنامه Angular از یک یا چند ماژول تشکیل شده است. ماژول‌ها به سازماندهی کد و مدیریت وابستگی‌ها کمک می‌کنند.

- **کامپوننت‌ها (Components)**
  کامپوننت‌ها بلوک‌های ساختمانی اصلی یک برنامه Angular هستند. هر کامپوننت شامل یک کلاس TypeScript، یک قالب HTML و یک فایل سبک CSS است.

- **دایرکتیوها (Directives)**
  دایرکتیوها به شما امکان می‌دهند تا رفتارهای خاصی را به عناصر DOM اضافه کنید.

- **سرویس‌ها (Services)**
  سرویس‌ها برای مدیریت منطق و تبادل داده‌ها بین کامپوننت‌ها استفاده می‌شوند.

- **تزریغ وابستگی (Dependency Injection)**
  تزریغ وابستگی یک design pattern است که در Angular برای مدیریت وابستگی‌ها استفاده می‌شود.
  
- **روتر (Router)**
  روتر به شما امکان می‌دهد تا بین نماهای مختلف در برنامه جابه‌جا شوید.


###  پیش‌نیازها
-  [نصب node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) 
- [همه چیز درباره node.js](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
- [پکیچ منیجر های دیگر](https://romanglushach.medium.com/comparing-npm-yarn-and-pnpm-package-managers-which-one-is-right-for-your-distributed-project-to-4d7de2f0db8e)
- [نصب و راه اندازی Angular](https://v17.angular.io/guide/setup-local)
- [ساختار پروژه](https://dev.to/tomwebwalker/angular-starting-files-explanation-for-beginners-15cp)
- [فایل angular.json](https://dev.to/tomwebwalker/angularjson-structure-for-beginners-what-we-can-set-27f3)


# مفاهیم اساسی Angular
## Components

کامپوننت‌ها بلوک‌های ساختمانی اصلی برنامه‌های Angular هستند. هر کامپوننت شامل یک کلاس TypeScript، یک قالب HTML و یک فایل سبک CSS است. کامپوننت‌ها به شما امکان می‌دهند تا بخش‌های مختلف برنامه را به صورت مجزا توسعه داده و مدیریت کنید.

برای ساخت کامپوننت از `@Component` استفاده می‌کنیم. در این decorator مشخصه `selector` مشخص می‌کند که این کامپوننت با چه تگی در HTML استفاده خواهد شد، `template` قالب HTML کامپوننت را تعریف می‌کند، و `styles` استایل‌های CSS مربوط به کامپوننت را مشخص می‌کند.

### مثال از یک کامپوننت ساده

در این مثال، یک کامپوننت ساده به نام `HelloWorldComponent` ایجاد می‌کنیم که یک پیام “Hello, World!” را نمایش می‌دهد. برای ایجاد یک کامپوننت جدید با استفاده از Angular CLI، دستور زیر را در ترمینال اجرا کنید:

```sh
ng generate component hello-world
```

یا به صورت مختصر:

```sh
ng g c hello-world
```

این دستور در هر دایرکتوری اجرا شود به صورت خودکار دایرکتوری جدید شامل فایل HTML، CSS، TypeScript و فایل تست تشکیل می‌دهد. (برای نام گذاری componentها از قرارداد `name.component.ts` و برای تست از `name.component.spec.ts` استفاده می‌شود)

فایل `hello-world.component.ts` به این صورت خواهد بود:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>Hello, World!</h1>',
  styles: ['h1 { color: blue; }']
})
export class HelloWorldComponent {}
```

در این مثال:
- `selector` مشخص می‌کند که این کامپوننت با استفاده از تگ `<app-hello-world>` در HTML استفاده خواهد شد.
- `template` قالب HTML کامپوننت را تعریف می‌کند.
- `styles` استایل‌های CSS مربوط به کامپوننت را تعریف می‌کند.

برای استفاده از این کامپوننت در برنامه، می‌توانید تگ `<app-hello-world>` را به قالب `app.component.html` اضافه کنید:

```html
<app-hello-world></app-hello-world>
```

حال با اجرای مجدد پروژه، کامپوننت ساخته شده نمایش داده می‌شود.

برای مطالعه بیشتر به [مستندات رسمی](https://angular.dev/api/core/Component#viewProviders) انگولار مراجعه کنید.

## Services

سرویس‌ها (Services) در انگولار یکی از اصول اصلی و مهم این فریم‌ورک هستند که برای مدیریت منطق و داده‌های اپلیکیشن استفاده می‌شوند. سرویس‌ها به طور معمول برای انجام کارهایی مثل درخواست‌های HTTP، ذخیره و بازیابی داده‌ها، و به اشتراک‌گذاری داده‌ها بین کامپوننت‌ها به کار می‌روند. این مفهوم به منظور تفکیک منطق کسب و کار از رابط کاربری (UI) به کار گرفته می‌شود.

### تعریف سرویس

برای ایجاد یک سرویس در انگولار، ابتدا باید یک کلاس ایجاد کرده و سپس این کلاس را با استفاده از دکوراتور `@Injectable` تزریق‌پذیر (injectable) کنید. به عنوان مثال، یک سرویس ساده برای مدیریت کاربران را در نظر بگیرید:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = ['Alice', 'Bob', 'Charlie'];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: string) {
    this.users.push(user);
  }
}
```

### استفاده از سرویس در کامپوننت

برای استفاده از این سرویس در یک کامپوننت، باید آن را در constructor کامپوننت تزریق (inject) کنید:

```typescript
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <ul>
        <li *ngFor="let user of users">{{ user }}</li>
      </ul>
      <input [(ngModel)]="newUser" placeholder="Add user" />
      <button (click)="addUser()">Add</button>
    </div>
  `,
})
export class UserComponent implements OnInit {
  users: string[] = [];
  newUser: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser(this.newUser);
    this.newUser = '';
  }
}
```

### توضیح:

1. **ایجاد سرویس**: یک کلاس با نام `UserService` ایجاد می‌شود و از دکوراتور `@Injectable` استفاده می‌کند تا انگولار بفهمد این کلاس قابل تزریق است.
2. **متدهای سرویس**: این سرویس دو متد `getUsers` و `addUser` دارد که به ترتیب کاربران را بازیابی و اضافه می‌کنند.
3. **تزریق سرویس در کامپوننت**: در کلاس `UserComponent` سرویس `UserService` در constructor تزریق می‌شود.
4. **استفاده از سرویس**: در متد `ngOnInit`، متد `getUsers` سرویس فراخوانی می‌شود تا لیست کاربران دریافت شود. همچنین، متد `addUser` برای افزودن کاربر جدید به لیست استفاده می‌شود.

## Decorators
پیش از آنکه به توضیح بخش‌های اصلی Angular بپردازیم، بهتر است با مفهوم اساسی decorator که به طور گسترده از آن در تعاریف مختلف Angular استفاده می‌شود، آشنا شویم.

decorator ها در Angular یک نوع خاص از توابع هستند که به شما امکان می‌دهند تا به کلاس‌ها، متدها، ویژگی‌ها یا پارامترها متادیتا اضافه کنید و رفتار آنها را override کنید. decorator ها در TypeScript به طور گسترده‌ای برای تعریف ویژگی‌ها و رفتارهای اجزای مختلف Angular استفاده می‌شوند. این توابع توسط `@` فراخوانی می‌شوند و ورودی‌های خود را دریافت می‌کنند و تغییرات لازم را بر روی هدف خود اعمال می‌کنند.

### Angular Decorators
decoratorهای اصلی Angular عبارتند از:

- **@NgModule**: برای تعریف ماژول‌های Angular استفاده می‌شود.
- **@Component**: برای تعریف کامپوننت‌ها استفاده می‌شود.
- **@Directive**: برای تعریف دستورالعمل‌ها استفاده می‌شود.
- **@Pipe**: برای تعریف لوله‌ها (فیلترها) استفاده می‌شود.
- **@Injectable**: برای تعریف سرویس‌ها استفاده می‌شود.

هر کدام از این decoratorها وظایف خاصی دارند و به شما کمک می‌کنند تا ویژگی‌های خاصی را به اجزای برنامه اضافه کنید.
