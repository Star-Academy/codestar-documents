---
title: RxJs
description: Do you want to dance with javascript?
---

### مقدمه

**RxJS**
(Reactive Extensions For JavaScript)
یک کتابخانه برای برنامه‌نویسی واکنشی با استفاده از آبجکت‌های قابل مشاهده
(Observables)
است.
RxJS
به طور گسترده‌ای در انگولار استفاده می‌شود تا با داده‌های غیرهمزمان کار کند.
به عنوان مثال فرض کنید در قسمتی از وب سایت ما دکمه‌ای وجود دارد که میخواهیم هر زمان روی آن کلیک شد در قسمت دیگری از سایت یک اتفاق دیگری رخ بدهد. برای ایجاد ارتباط و هماهنگی بین آنها باید از
RxJs
استفاده کرد!

---

#### نصب RxJS

RxJS
به صورت پیش‌فرض با انگولار نصب می‌شود. اما اگر به هر دلیلی نیاز به نصب آن دارید، می‌توانید از دستور زیر استفاده کنید:

```bash
npm install rxjs
```

---

### مفاهیم پایه‌ای

#### Observable

`Observable`
یک منبع داده است که می‌تواند داده‌ها را به مرور زمان ارسال کند. برای ایجاد یک
`Observable`
می‌توانید از کلاس
`Observable`
استفاده کنید:

```typescript
import {Observable} from 'rxjs';

const observable = new Observable((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});
```

#### Observer

`Observer`
یک آبجکت است که سه متد دارد:
`next`, `error`,
و
`complete`
. این متدها برای دریافت داده‌ها، مدیریت خطاها و اتمام جریان داده‌ها استفاده می‌شوند.

```typescript
const observer = {
    next: (x: string) => console.log('Next:', x),
    error: (err: any) => console.log('Error:', err),
    complete: () => console.log('Completed'),
};
```

#### Subscription

برای شروع به کار با یک
`Observable`
، باید آن را مشترک
(subscribe)
کنید:

```typescript
const subscription = observable.subscribe(observer);
```

#### Operators

عملگرها توابعی هستند که
`Observable`
ها را تغییر می‌دهند. برخی از پرکاربردترین عملگرها عبارتند از
`map`, `filter`, `mergeMap`, و `switchMap`.

```typescript
import {of} from 'rxjs';
import {map, filter} from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5);

const transformedObservable = observable.pipe(
    filter((x) => x % 2 === 0),
    map((x) => x * 10)
);

transformedObservable.subscribe((x) => console.log(x)); // 20, 40
```

### استفاده از RxJS در انگولار

در انگولار،
RxJS
معمولاً با
`HttpClient`
و فرم‌ها استفاده می‌شود. در اینجا یک مثال ساده از استفاده از
RxJS
با
`HttpClient`
آورده شده است.

#### استفاده از HttpClient

ابتدا،
`HttpClientModule`
را به ماژول خود اضافه کنید:

```typescript
// src/app/app.module.ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

سپس، یک سرویس برای فراخوانی
API
ایجاد کنید:

```typescript
// src/app/data.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get('https://api.example.com/data');
    }
}
```

حالا می‌توانید از این سرویس در کامپوننت خود استفاده کنید:

```typescript
// src/app/app.component.ts
import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    template: `
        <div *ngIf="data">
            {{ data | json }}
        </div>
    `,
})
export class AppComponent implements OnInit {
    data: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getData().subscribe((response) => {
            this.data = response;
        });
    }
}
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Angular - What is RxJs](https://v17.angular.io/guide/rx-library)
-   [RxJs - RxJs document](https://rxjs.dev/guide/overview)
-   [RxJs Marbles - RxJs pipes](https://rxmarbles.com/#filter)
-   [Angular documents - Understanding communicating with backend services using HTTP](https://v17.angular.io/guide/understanding-communicating-with-http)
-   [Youtube - Angular HTTP Client Quick Start Tutorial](https://www.youtube.com/watch?v=_05v0mrNLh0)

---

## تمرین

-   تمرین اول: ایجاد و استفاده از یک
    Observable
    یک
    Observable
    ایجاد کنید که اعداد 1 تا 5 را ارسال کند.
    یک
    Observer
    تعریف کنید که این اعداد را در کنسول نمایش دهد.
    با استفاده از متد
    subscribe، Observer
    را به
    Observable
    متصل کنید.
-   تمرین دوم: یک
    Observable
    از اعداد 1 تا 10 ایجاد کنید.
    از عملگرهای
    filter و map
    استفاده کنید تا فقط اعداد زوج را گرفته و هرکدام را به توان 2 برسانید.
    نتیجه نهایی را در کنسول نمایش دهید.
-   تمرین سوم: کار با
    HttpClient
    یک سرویس جدید در انگولار ایجاد کنید که از
    HttpClient
    برای فراخوانی یک
    API
    استفاده می‌کند.
    یک
    Observable
    برای داده‌های دریافتی از
    API
    ایجاد کنید.
    در یک کامپوننت، سرویس را وارد کرده و داده‌های دریافت شده از
    API
    را در قالب
    HTML
    نمایش دهید.
-   تمرین چهارم: اشتراک‌دهی داده‌ها بین کامپوننت‌ها
    یک سرویس جدید ایجاد کنید که دارای یک
    Subject
    باشد.
    دو کامپوننت ایجاد کنید، یکی برای ارسال داده به
    Subject
    و دیگری برای دریافت داده از
    Subject.
    داده‌های ارسال شده توسط یک کامپوننت را در کامپوننت دیگر نمایش دهید.
