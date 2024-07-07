---
title: Angular Routing
description: He paints quite a picture, doesn't he?
tags: [Readonly]
---

:::info این فاز، یکی از فازهای `Readonly` است.
:::

## مقدمه
در این فاز قصد داریم با مبحث مسیردهی یا Routing آشنا شویم.

-   مسیردهی (Routing) در انگولار چیست؟
-   تعریف مسیردهی (Routing) در انگولار
-   معرفی مسیرها در انگولار
- دستور routerLinkActive و routerLinkActiveOption

---

## یادگیری

### مسیردهی (Routing) در انگولار چیست؟
هنگامیکه شما در حال تولید یک نرم‌افزار تک صفحه‌ای (Single Page App) هستید همواره نرم‌افزار خود را به سمتی سوق می‌دهید
که کاربر با کلیک کردن روی لینک‌های مختلف بدون لود کردن و بارگذاری مجدد صفحه، بتواند به لینک موردنظر انتقال پیدا کند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [?Wiki - What is SPA](https://en.wikipedia.org/wiki/Single-page_application)

---

### تعریف مسیردهی (Routing) در انگولار
برای تعریف مسیردهی در نرم‌افزار خود ابتدا وارد فایل app.module.ts‌ شده و
در ابتدای این صفحه یک ثابت به نام appRoutes ایجاد می‌کنیم
تا تمام مسیردهی‌های نرم‌افزار خود را درون آن انجام دهیم. بنابراین داریم:

```typescript
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
];
```

همانطور که مشخص است در ثابت appRoutes که از نوع کلاس Route‌ می‌باشد 
یک آرایه ایجاد (علت ایجاد آرایه برای دارا بودن چندین مسیر برای یک نرم‌افزار است) و
سپس درون آن اشیاء جاوا اسکریپت را با علامت { } تولید کرده‌ایم.
اگر توجه داشته باشید درون این دو کروشه یک کلمه تحت عنوان path و دیگری با نام component وجود دارد:

#### کلمه‌کلیدی path:
این کلمه برای نشان دادن مسیر صفحه می‌باشد. به عنوان مثال users به مسیر http://localhost:4200/users اشاره می‌کند.

#### کلمه‌کلیدی component:

از این کلمه برای تعریف کامپوننت مرتبط با مسیر استفاده می‌شود به عنوان مثال کامپوننت مرتبط با مسیر http://localhost:4200/users معادل UsersComponent‌ است که لیست کاربران را نمایش می‌دهد.


بسیار عالی تا به اینجای کار مسیرها را تعریف کرده‌ایم ولی هنوز این مسیرها را به نرم‌افزار انگولاری معرفی نکرده‌ایم.
برای معرفی کردن باید از کلاس RouterModule استفاده کرده و با متد forRoot مسیر موردنظر را مشابه ذیل به نرم‌افزار معرفی کنیم:

```typescript
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

همانطور که ملاحظه کردید تغییرات کلی در این فایل به صورت فوق اعمال شده است.
حال باید فایل app.component.html‌ را باز کنید و
در نهایت به جای اسامی کامپوننت‌ها که به صورت تگ app-component‌ هستند 
یک ساختار جامع به نام router-outlet قرار دهیم تا به قالب HTML اطلاع دهیم که مسیرهای ما مشخص هستند و
دیگر تمام کامپوننت‌ها را در یک صفحه لود نکن و متناسب با هر مسیری اطلاعات کامپوننت را نمایش بده!
بنابراین در این فایل داریم:

```angular2html
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">صفحه اصلی</a></li>
                <li role="presentation"><a href="#">سرورها</a></li>
                <li role="presentation"><a href="#">کابران</a></li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [?Angular - What is angular routing](https://v17.angular.io/guide/routing-overview)
-   [Youtube - Implementing Routing in Angular](https://youtu.be/N5DWQGebIlA?si=AtQMk0RfTDB3sW4m)
