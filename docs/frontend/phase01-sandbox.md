---
title: Sandbox
description: When I was a kid, my mom used to just throw me into a pile of broken glass!
tags: [Sandbox]
---

:::info این فاز، یکی از فازهای `Sandbox` است.

به فازهایی `Sandbox` می‌گوییم که به طور مستقیم به پروژه مربوط نمی‌شوند
ولی برای درک بهتر از مسائل پیش‌رو بهتر است که موضوعات این فاز را بدانید

:::

## مقدمه

در این فاز قصد داریم قبل از شروع پروژه با برخی نکات ساده اما مهم آشنا شویم
که در ادامۀ کار به کمک ما خواهند آمد.

-   چرا برای تعریف متغیر می‌توان از سه عبارت `var` و `let` و `const` استفاده کرد؟
-   تفاوت Function با Arrow Function چیست؟
-   مفهوم و کاربرد `this` چیست؟
-   Event Loop
    چیست

---

## یادگیری

### متغیرها

قبل از سال 2015 میلادی، برای تعریف متغیر در JavaScript تنها می‌توانستیم از `var` استفاده کنیم.
اما با معرفی ES6 عبارت‌های `let` و `const` نیز به این زبان اضافه شدند که در اینجا توضیحات مختصری در مورد هر کدام ارائه می‌کنیم.

#### var

زمانی که یک متغیر را با عبارت `var` تعریف می‌کنید،
آن متغیر در Global Scope یا نزدیک‌ترین Function Scope تعریف می‌شود.

به عنون مثال خروجی کد زیر:

```javascript
function defineAndPrintName() {
    if (true) {
        var name = 'Codestar';
        console.log(`inner scope -> name: ${name}`);
    }

    console.log(`outer scope -> name: ${name}`);
}

defineAndPrintName();
```

به شکل زیر خواهد بود:

```text
inner scope -> name: Codestar
outer scope -> name: Codestar
```

چرا که متغیر `name` داخل اسکوپِ تابعِ `defineAndPrintName` قرار می‌گیرد.

لازم به ذکر است که Scopeها در JavaScript با آکلاد مشخص می‌شوند
بنابراین نیازی به `if (true)` نداریم.

#### let

برخلاف `var`، زمانی که از `let` برای تعریف یک متغیر استفاده کنیم،
آن متغیر در Scope فعلی محدود می‌شود.

به‌عنوان مثال خروجی کد زیر:

```javascript
function defineAndPrintName() {
    {
        let name = 'Codestar';
        console.log(`inner scope -> name: ${name}`);
    }

    console.log(`outer scope -> name: ${name}`);
}

defineAndPrintName();
```

به شکل زیر خواهد بود:

```text
inner scope -> name: Codestar
ReferenceError: name is not defined
```

#### const

`const`
دقیقاً مانند `let` عمل می‌کند با این تفاوت که فقط یک بار می‌توان آن را مقداردهی کرد.
زمانی که احتیاج داشته باشیم مقداری را ذخیره کنیم که هیچ‌وقت نباید تغییر کند،
استفاده از `const` باعث جلوگیری از خطاهای احتمالی می‌شود؛
همچنین زمانی که شخص دیگری کد را می‌خواند،
با دیدن `const` مطمئن می‌شود که مقدار آن تغییر نخواهد کرد.
ما پیشنهاد می‌کنیم همیشه به صورت پیش‌فرض برای تعریف متغیرها از `const` استفاده کنید
و تنها در صورت نیاز به `let` مراجعه کنید.

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [var vs let vs const in JavaScript](https://ui.dev/var-let-const/)
-   [Medium - Difference Between Var, Let and Const in ES6](https://medium.com/infancyit/difference-between-var-let-and-const-in-es6-16a08d74b8b2)
-   [freeCodeCamp - Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

---

### Regular Function vs Arrow Function

در JavaScript به دو شکل می‌توان یک تابع را تعریف کرد:

```javascript
function sayHello(name) {
    console.log(`hello, ${name}!`);
}

// or

const sayHello = (name) => {
    console.log(`hello, ${name}!`);
};
```

که به نوع اول Regular Function و به نوع دوم Arrow Function گفته می‌شود.
در اینجا به تفاوت این دو روش می‌پردازدیم.

#### this

زمانی که از Regular Function استفاده می‌کنیم مقدار `this` با توجه به مکانی که تابع از آنجا صدا زده می‌شود، متفاوت است.
اما اگر از Arrow Function استفاده کنیم، این مقدار همواره برابر با شیئی است که تابع در آن تعریف شده.

```javascript
const regularFunctionWrapper = {
    whatIsThis: function () {
        console.log(this); // regularFunctionWrapper
    },
};

const arrowFunctionWrapper = {
    whatIsThis: () => {
        console.log(this); // globalThis
    },
};

regularFunctionWrapper.whatIsThis();
arrowFunctionWrapper.whatIsThis();
```

#### Constructor

قبل از اینکه کلاس‌ها به JavaScript بیایند، از Regular Function به‌عنوان Constructor استفاده می‌شد:

```javascript
function Circle(radius) {
    this.radius = radius;

    this.printArea = function () {
        console.log('area', Math.PI * Math.pow(this.radius, 2));
    };
}

const small = new Circle(10);
const large = new Circle(100);

small.printArea();
large.printArea();
```

#### arguments & args

در Regular Function یک کلیدواژه به نام arguments وجود دارد که درواقع آرایه‌ای از پارامترهای ورودی می‌باشد؛
در Arrow Function هم می‌توانیم به این پارامترها دسترسی داشته باشیم اما باید صراحتاً در ورودی‌های تابع به آن اشاره کنیم:

```javascript
function regularFunctionSum() {
    let result = 0;

    for (const n of arguments) {
        if (!isNaN(n)) result += n;
    }

    return result;
}

const arrowFunctionSum = (...args) => {
    let result = 0;

    for (const n of args) {
        if (!isNaN(n)) result += n;
    }

    return result;
};

console.log('Regular Function', regularFunctionSum(4, 8, 15, 16, 23, 42)); // 108
console.log('Arrow Function', arrowFunctionSum(4, 8, 15, 16, 23, 42)); // 108
```

#### return

در Arrow Function اگر بدنۀ تابع فقط شامل یک Expression باشد، می‌توان آن را بدونِ استفاده از آکلاد و return نوشت:

```javascript
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(rand(4, 42));
```

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
-   [freeCodeCamp - When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

---

### Event Loop

حلقه رویداد، جزء اصلی موتور جاوا اسکریپت است که وظایف مختلف را به ترتیب صحیح و بدون ایجاد وقفه در رابط کاربری، مدیریت می‌کند. این حلقه، نقش یک ناظر را ایفا می‌کند و صف وظایف را که شامل رویدادها، درخواست‌های شبکه و کدهای جاوا اسکریپت است، رصد می‌کند.

وظایف موجود در صف به دو دسته اصلی تقسیم می‌شوند:

-   **1. وظایف ماکرو:** این وظایف شامل کدهای اصلی جاوا اسکریپت مانند کلیک کاربر، اجرای اسکریپت‌ها و پاسخ به درخواست‌های
    DOM
    است. وظایف ماکرو به ترتیب دریافت در صف قرار می‌گیرند و تا زمانی که به طور کامل اجرا نشوند، سایر وظایف منتظر می‌مانند.

-   **2. وظایف میکرو:** وظایف میکرو، وظایف کم‌اهمیت‌تری هستند که به طور همزمان با وظایف ماکرو انجام می‌شوند. وعده‌ها
    (promises)
    و
    callbacks
    مربوط به رویدادهای
    async/await
    نمونه‌هایی از وظایف میکرو هستند. این وظایف نقش مهمی در عملکرد روان و پاسخگویی رابط کاربری ایفا می‌کنند.

حلقه رویداد به طور مداوم در حال گردش است و وظایف را از صف به ترتیب زیر پردازش می‌کند:

-   بررسی صف وظایف ماکرو: اگر وظیفه‌ای در صف وجود داشته باشد، آن را اجرا می‌کند.
-   پردازش وظایف میکرو: تا زمانی که صف ماکرو خالی شود، به پردازش وظایف میکرو می‌پردازد.
-   تکرار فرآیند: مراحل 1 و 2 را به طور مداوم تکرار می‌کند تا زمانی که صف وظایف خالی شود.

درک حلقه رویداد برای نوشتن کد جاوا اسکریپت کارآمد و بدون انسداد رابط کاربری ضروری است. با تسلط بر این مفهوم، می‌توانید برنامه‌های روان، تعاملی و پاسخگو بسازید که تجربه‌ای کاربری لذت‌بخش را ارائه می‌کنند.

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
-   [What is an event loop in JavaScript](https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/)
