---
title: Authentication
description: Well, we haven't exactly met, we just stayed up all night talking on the internet.
---

## مقدمه

داده‌ها یکی از مهم‌ترین بخش‌های برنامه هستند
که باعث می‌شوند از حالت یکنواخت خارج شود و بتوان آن را برای هر کاربر شخصی‌سازی کرد؛
بنابراین باید بتوانیم این داده‌ها را در جایی ذخیره‌سازی کنیم و بعداً در صورت نیاز دوباره بازیابی کنیم.

-   چگونه می‌توان داده‌های کاربران را ذخیره کرد؟
-   چگونه می‌توان داده‌ها را به سرور فرستاد یا از آن دریافت کرد؟
-   چگونه می‌توان کاربر را احراز هویت کرد؟

---

## یادگیری

### Storages

#### Document.cookie

کوکی‌ها می‌توانند هم در سمت سرور و هم در سمت کلاینت ذخیره‌سازی شوند؛
برای تغییر مقداری که در کوکی ذخیره شده، کافی است `document.cookie` را مقدار‌دهی کنیم.
مقادیر `document.cookie` تنها مختص به همان صفحه هستند و در صورتی که به صفحه‌ی دیگری از وب برویم،
دیگر نمی‌توانند مورد استفاده قرار بگیرند.

کوکی‌ها را تنها می‌توانیم مقادیر را به شکل `String` ذخیره کنیم؛
همچنین آن‌ها را به شکل
`key=value`
می‌نویسیم و بینِ هر زوج، از کاراکتر
`;`
استفاده می‌کنیم:

```javascript
document.cookies = 'username=codestar; password=1234; expires=Wed, 25 Aug 2021 21:08:53 GMT; path=/link.html';
```

مقدار `expires` مشخص می‌کند که کوکی‌ها در چه زمانی منقضی شوند.
در صورتی که بخواهیم مقدار کوکی‌های یک صفحه دیگر را عوض کنیم، می‌توانیم از `path` استفاده می‌کنیم.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [MDN - Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/)

#### Window.sessionStorage

مشکلی که در کوکی‌ها وجود داشت، مقدار حافظه‌ی کم آن‌ها (حداکثر 4 کیلوبایت) بود؛
در نتیجه `sessionStorage` و `localStorage` معرفی شدند.
بر‌خلاف کوکی‌ها، در این حافظه‌ها، داده‌ها به شکل Map ذخیره می‌شوند.

sessionStorage
نوع دیگری از حافظه در وب است.
زمانی که پنجره/زبانه بسته شود، اطلاعاتی که توسط sessionStorage ذخیره شده‌اند هم پاک می شوند.
همچنین توجه داشته باشید که اطلاعات زبانه‌های دیگر در sessionStorage قابل استفاده نیستند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [MDN - Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

#### Window.localStorage

این حافظه در بسیاری از جهات شبیه `sessionStorage` است با این تفاوت که بر‌خلاف `sessionStorage`، با بستن پنجره/زبانه، از بین نمی‌رود و تاریخ انقضایی ندارد.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
-   [MDN - Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
-   [Medium - Cookies vs. LocalStorage: What's the difference?](https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44)

---

### JSON

JSON
یک فرمت برای انتقال اطلاعات است.
معمولاً از JSON برای تبادل اطلاعات بین سرور و کلاینت استفاده می‌شود.

در JavaScript می‌توانیم برای تبدیل یک شیء به فرمت JSON از تابع
`()JSON.stringify`
استفاده کنیم؛
همچنین عکس این کار را می‌توانیم با تابع
`()JSON.parse`
انجام دهیم.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [W3Schools - JSON Syntax](https://www.w3schools.com/js/js_json_syntax.asp)
-   [W3Schools - JSON.parse](https://www.w3schools.com/js/js_json_parse.asp)
-   [W3Schools - JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)
-   [Web Dev Simplified - JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM)

---

### HTTP

پروتکل HTTP مخفف عبارت
_Hyper Text Transfer Protocol_
است و قوانینی برای ارتباط میان سرور و کلاینت تعیین می‌کند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
-   [freeCodeCamp - An introduction to HTTP: everything you need to know](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)

---

### HTTP vs HTTPS

HTTPS
نسخه‌ای از HTTP است که بسیاری از موارد امنیتی در آن رعایت شده است.
مهم ترین تفاوت HTTP و HTTPS در گواهی‌نامه SSL است.
از مزایای استفاده از این پروتکل می‌توان به افزایش امتیاز سایت شما در الگوریتم‌های رتبه‌بندی موتور‌‌های جست‌وجو
و جلب اعتماد بازدیدکنندگان اشاره کرد.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Medium - HTTP & HTTPS : What is the difference?](https://medium.com/@pallavimodi/http-https-what-is-the-difference-3a97fe2f7fd8#:~:text=As%20we%20learnt%20earlier%2C%20S,are%20encrypted%20or%20%E2%80%9CSecure%E2%80%9D.)
-   [تفاوت HTTP و HTTPS چیست؟](https://www.irandnn.ir/mag/http-vs-https/)

---

### RESTful API

Application Programming Interface
مجموعه‌ای از قواعد و مکانیسم‌هاس که از طریق آن، برنامه‌ها و یا کامپوننت‌های مختلف یک برنامه با همدیگر ارتباط برقرار می‌کنند.
منظور از رابط چیزی‌ست که دو شیء یا دو موجودیت مختلف را به یکدیگر ربط می‌دهد.
API
می‌تواند داده‌های برنامۀ شما را با یک فرمت مناسب،
مثلاً JSON یا XML،
به مقصد بفرستد و یا آن‌‌ها را از آن دریافت کند؛

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [What Is a REST API?](https://www.sitepoint.com/rest-api/)
-   [RESTful API به زبان ساده چیست؟](https://roocket.ir/articles/a-beginners-tutorial-for-understanding-restful-API)

### Fetch API

برای ارسال درخواست به سرور می‌توانید از Fetch API استفاده کنید:

```javascript
const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) return await response.json();

    console.log('Request Failed!', response);
    return;
};
```

تابع `fetch` دو ورودی دریافت می‌کند که به ترتیب `url` و `init` هستند
و یک Promise به‌عنوان خروجی برمی‌گرداند.
پارامتر `init` اختیاری است و می‌توانیم از آن برای تنظیم داده‌های خاصی استفاده کنیم
که به‌عنوان مثال می‌توان به `header` و `method` اشاره کرد.

با استفاده از `response` می‌توان نتیجه‌ی دریافت اطلاعات را مشاهده کرد.
اگر `response.ok` مقدار `true` داشته باشد یعنی دریافت اطلاعات به درستی انجام شده؛
همچنین می‌توانید از `response.status` برای فهمیدن جزئیات بیشتر استفاده کنید.

برای دسترسی به داده‌ها، توابعی بر روی شیء `response` وجود دارد؛
به‌عنوان مثال در کد بالا، `()response.json` برای دریافت داده‌های JSON استفاده می‌شود.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [JavaScript.info - Fetch](https://javascript.info/fetch)
-   [Traversy Media - Async JS Crash Course - Callbacks, Promises, Async Await](https://www.youtube.com/watch?v=PoRJizFvM7s)
-   [HTTP Status Codes Glossary](https://www.webfx.com/web-development/glossary/http-status-codes/)

---

### JWT

معمولاً تعدادی از APIهایی که در پروژه مورد استفاده قرار می‌گیرند، عمومی است و هر کاربری اجازۀ فرستادن درخواست برای آن‌ها را دارد
و تعدادی نیز خصوصی یا محافطت‌شده هستند، یعنی فقط کاربر‌های مشخص که احراز هویت آن‌ها انجام شده توانایی استفاده از آن‌ها را دارند.

JWT
یا
JSON Web Token
یکی از تکنولوژی‌های معروف احراز هویت است.
در این روش وقتی کاربر درخواست ورود یا ثبت‌نام را می‌فرستد، در صورت معتبر بودن اطلاعات، در پاسخ یک JWT تولید و برگردانده می‌شود.
این توکن باید در سمت کلاینت و در حافظۀ محلی ذخیره شود و زمانی که کاربر قصد داشت به یک صفحه یا محتوای خصوصی دسترسی پیدا کند،
باید توکن خود را به‌همراه آن درخواست به سمت سرور ارسال کند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [What is JWT](https://jwt.io/introduction)
-   [احراز هویت (JWT, JWS, JWE)](https://virgool.io/@erfun/%D9%87%D9%88%DB%8C%D8%AA-%D8%B3%D9%86%D8%AC%DB%8C-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%A7%D9%86-jwt-jws-jwe-pedif3sejkol)

---

## پروژه

در این فاز شما باید صفحات ورود و ثبت‌نام را به پروژه خود اضافه کنید.
اگر هر یک از این عملیات با موفقیت انجام شود، کاربر باید به صفحۀ اصلی سایت منتقل شود.
همچنین از Guard برای محافظت از صفحات خصوصی استفاده کنید.
برای این کار احتیاج به یک صفحه مانند Profile دارید که در حال حاضر صرفاً کافی است حاوی یک متن ساده باشد.
