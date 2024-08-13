---
title: Test
description: مبارزه با غول‌های باگ با تست‌نویسی
---

## مقدمه

تست‌نویسی در توسعه یک وب‌سایت فروش آنلاین، مانند چک‌آپ پزشکی برای سلامت نرم‌افزار است. این فرآیند به شما کمک می‌کند تا از صحت عملکرد بخش‌های مهم سایت مثل نمایش اطلاعات محصولات، مدیریت سبد خرید و انجام تراکنش‌های مالی اطمینان حاصل کنید. بدون تست کافی، ممکن است مشکلاتی مانند نمایش اطلاعات نادرست، از دست رفتن سفارش‌ها یا حتی مسائل امنیتی در پرداخت‌ها رخ دهد. این مشکلات می‌توانند به شدت بر رضایت مشتری و اعتبار کسب‌وکار شما تأثیر منفی بگذارند.

تست‌نویسی همچنین به شما کمک می‌کند تا تغییرات در نرم‌افزار را به خوبی مدیریت کنید. در دنیای سریع توسعه نرم‌افزار، تغییرات مداوم امری عادی است. با انجام تست‌های منظم در مراحل مختلف توسعه، می‌توانید مطمئن شوید که هر تغییری که اعمال می‌کنید، عملکرد کلی سایت را مختل نمی‌کند. این امر به خصوص در پروژه‌هایی که سرعت توسعه بالایی دارند، بسیار مهم است. با تست‌نویسی اصولی، نه تنها از کیفیت و امنیت وب‌سایت خود اطمینان حاصل می‌کنید، بلکه می‌توانید با اعتماد بیشتری تغییرات و بهبودها را اعمال کنید و در نهایت، تجربه خرید بهتری را برای مشتریان خود فراهم آورید.

---

## آشنایی با تست

تست نرم افزار بخش جدایی ناپذیر فرآیند توسعه نرم افزار است که به منظور **شناسایی و رفع ایرادات** و **تضمین کیفیت نهایی محصول** انجام می شود. این فرآیند شامل روش های مختلفی از جمله **تست دستی** و **تست اتوماتیک** می باشد.

### تست اتوماتیک:

تست اتوماتیک روشی برای بررسی و ارزیابی کیفیت نرم افزار به صورت خودکار است. در این روش، از اسکریپت‌ها و ابزارهای مخصوص برای شبیه‌سازی رفتار کاربر و انجام تست‌های مختلف بر روی نرم افزار استفاده می‌شود.

**مزایای تست اتوماتیک:**

-   **سرعت بالا:** تست های اتوماتیک می توانند به سرعت و به طور مکرر اجرا شوند، که این امر به شناسایی سریعتر ایرادات و ارتقای کارایی فرآیند تست کمک می کند.
-   **دقت زیاد:** تست های اتوماتیک با دقت بالایی انجام می شوند و احتمال خطای انسانی در آنها بسیار کم است.
-   **صرفه جویی در زمان و هزینه:** تست های اتوماتیک در بلندمدت می توانند در زمان و هزینه صرفه جویی قابل توجهی کنند، زیرا نیاز به تکرار تست های دستی را کاهش می دهند.
-   **قابلیت تکرارپذیری:** تست های اتوماتیک به طور کامل قابل تکرار هستند و می توان آنها را در هر زمان و به دفعات اجرا کرد.

**انواع تست اتوماتیک:**

-   **Unit Testing:**
    تست واحد برای بررسی عملکرد اجزای بنیادی برنامه مانند توابع، کلاس ها و متغیرها استفاده می شود.
-   **Integration Testing:**
    تست یکپارچه سازی برای بررسی تعامل بین اجزای مختلف برنامه استفاده می شود.
-   **End-to-End Testing:**
    تست انتها به انتها برای بررسی عملکرد کلی برنامه از دیدگاه کاربر استفاده می شود.
-   **Performance Testing:**
    تست کارایی برای سنجش سرعت، پاسخگویی و پایداری برنامه تحت بار استفاده می شود.
-   **User Acceptance Testing:**
    تست پذیرش کاربر برای اطمینان از اینکه برنامه نیازهای کاربران را برآورده می کند استفاده می شود.

### تست دستی:

درست است که تست اتوماتیک مزایای زیادی دارد، اما هنوز هم به تست دستی به عنوان بخشی جدایی ناپذیر از فرآیند توسعه نرم افزار نیاز داریم.

**مزایای تست دستی:**

-   **خلاقیت و قضاوت:** تسترهای دستی می توانند با خلاقیت و قضاوت خود سناریوهای تستی را طراحی کنند که ممکن است توسط تست های اتوماتیک پوشش داده نشوند.
-   **کاوش عمیق تر:** تسترهای دستی می توانند به طور عمیق تر در نرم افزار کاوش کنند و ایراداتی را پیدا کنند که در تست های اتوماتیک سطحی قابل شناسایی نیستند.
-   **یافتن ایرادات غیرمنتظره:** تسترهای دستی می توانند ایرادات غیرمنتظره ای را که در تست های اتوماتیک پیش بینی نشده اند، پیدا کنند.
-   **ارائه محصولی با کیفیت بالا:** در نهایت، تست دستی می تواند به ارائه محصولی با کیفیت بالا که نیازهای کاربران را برآورده می کند، کمک کند.

---

### تست‌نویسی در Angular

#### Unit Testing در Angular

خوشبختانه
Angular
به‌صورت پیش‌فرض از
Unit Testing
پشتیبانی می‌کند.
در
Angular
می‌توانید با استفاده از ابزارهای
Karma
و
Jasmine
به نوشتن تست بپردازید.
این تست‌ها برای اطمینان از عملکرد صحیح تمام قسمت‌های سامانه،
اعم از کامپوننت‌ها، سرویس‌ها، توابع و ... می‌توانند مورد استفاده قرار بگیرند.

برای راه‌اندازی این امکان، نیاز به انجام کار خاصی نیست؛
صرفاً کافی است با اجرای دستور زیر در Terminal، تست‌های موجود را اجرا کنید:

```shell
ng test
```

با اجرای دستور بالا یک مرورگر باز خواهد شد که لیستی از تست‌ها را به شما نشان می‌دهد؛
همچنین مشخص می‌کند کدام‌یک از آن‌ها موفق و کدام‌یک ناموفق بوده‌اند.

از آنجایی که سایت
Angular
به‌طور کامل در مورد تست‌نویسی توضیح داده است،
شما را به مطالعۀ مستندات مربوطه دعوت می‌کنیم
و از آوردن مطالب تکراری در این مستند می‌پرهیزیم.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Angular - Intro to Testing](https://angular.io/guide/testing)
-   [Angular - Code Coverage](https://angular.io/guide/testing-code-coverage)
-   [Angular - Testing services](https://angular.io/guide/testing-services)
-   [Angular - Basics of Testing Components](https://angular.io/guide/testing-components-basics)
-   [Angular - Component Testing Scenarios](https://angular.io/guide/testing-components-scenarios)

---

#### Integration Testing در Angular

Integration Testing
در
Angular
به شما امکان می‌دهد تا صحت و تعامل بین اجزا و ماژول‌های مختلف برنامه‌ را ارزیابی کنید. یکی از ابزارهای محبوب مورد استفاده برای این کار
Testing Library
است که برای تست‌هایی که اجزا و تعاملات آن‌ها با یکدیگر مهم هستند، بسیار مناسب است. با استفاده از
Testing Library
می‌توانید عملکرد درست ادغام اجزا را تأیید کنید و مطمئن شوید که برنامه‌ی شما به درستی کار می‌کند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Testing Library - Testing Library Docs](https://testing-library.com/docs/angular-testing-library/intro/)
-   [Tim Deschryver - Get Started with Testing Library](https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library)

#### End-to-End Testing در Angular

ما برای پیاده‌سازی تست‌های
E2E
از ابزار
Cypress
استفاده می‌کنیم. با استفاده از این ابزار به راحتی می‌توان رفتار کاربر واقعی را با استفاده از کد شبیه سازی کرد و آن را با اجرای تست‌ها به صورت دستی جایگزین کرد.
برای نصب و راه‌اندازی
Cypress
در
Angular
، ابتدا
Cypress
را به عنوان
Dev Dependency
به پروژه
Angular
خود اضافه کنید. برای این کار، از دستور زیر در ترمینال استفاده کنید:

```shell
ng add @cypress/schematic
```

بعد از اجرای دستور بالا
Cypress
به پروژه اضافه خواهد شد و
Config
ها و
Script
های مورد نیاز جهت کار با
Cypress
در پروژه ایجاد خواهد شد.

حالا می‌توانید
Cypress
را با اجرای دستور زیر از طریق ترمینال باز کنید:

```shell
npm run cy:open
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Cypress - Cypress Docs](https://docs.cypress.io/)
-   [Testing Angular - Principles of Testing with Cypress](https://testing-angular.com/introduction/)

### Mocking

زمانی که به تست‌کردن قسمتی از سامانه می‌پردازیم،
ممکن است این قسمت با قسمت‌های دیگر در ارتباط باشد و برای اجرای تست‌ها،
کدهای دیگری احتیاج به اجراشدن داشته باشند که ممکن باشد در عملکرد قسمت فعلی خلل ایجاد کنند.
به‌عنوان مثال فرض کنید بخواهیم سرویسی را تست کنیم که برای انجام عملیاتی احتیاج به فرستادن
Request
به سرور داشته باشد؛
قطعاً منطقی نیست برای اجرای تست‌ها نیاز باشد چندصد میلی‌ثانیه منتظر دریافت پاسخ از سرور باشیم؛
از طرفی ممکن است به هر علتی سرور دچار مشکل شده باشد و نتواند پاسخ درستی به ما برگرداند
و تست‌ها
Fail
شوند.
در چنین مواقعی از
Mocking
استفاده می‌کنیم؛
به‌طوری که یک کلاس یا شیء غیرواقعی می‌سازیم و آن را جای کلاس یا شیء اصلی جا می‌زنیم.

در تست نویسی بیشترین حجم از
Mocking
در
Unit Testing
انجام می‌شود و هر چه به سمت تست‌های بزرگتر مانند
Integration Testing
می‌رویم از حجم
Mocking
کاسته می‌شود و از پیاده‌سازی‌های واقعی استفاده می‌شود تا اینکه در
E2E Testing
فرایند
Mocking
کاملا حذف می‌شود.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Medium - TIL: Mocking localStorage and sessionStorage in Angular Unit Tests](https://armno.medium.com/til-mocking-localstorage-and-sessionstorage-in-angular-unit-tests-a765abdc9d87)

#### Mocking in Angular

در
Angular
فرایند
Mocking
شامل
Component، Service، Directive
و ... می‌شود که برای اطلاعات بیشتر درباره آن می‌توانید از لینک‌های زیر استفاده کنید:

-   [Jasmine - Spies](https://jasmine.github.io/api/5.1/Spy)
-   [ngMock - Mocking Services](https://ng-mocks.sudo.eu/api/MockService)
-   [ngMock - Mocking Directives](https://ng-mocks.sudo.eu/api/MockDirective)
-   [ngMock - Mocking Components](https://ng-mocks.sudo.eu/api/MockComponent)
-   [Daniel Cornock -Component Stub](https://www.danielcornock.co.uk/articles/angular-testing-3-stubbing-child-components)
-   [Testing Angular - Faking Dependencies](https://testing-angular.com/faking-dependencies/#faking-dependencies)
-   [Testing Angular - Testing Component With Children](https://testing-angular.com/testing-components-with-children/)

---

## پروژه

برای کامپوننت‌هایی که در قسمت
Angular
توسعه دادید به ترتیب برای هرکدام 2 عدد
Unit, Integration
و
E2E
تست بنوسید، پس از نوشتن به منتور خود تست‌های خود را نمایش دهید.