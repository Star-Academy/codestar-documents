---
title: TDD (اختیاری)
description: ''
---

## مقدمه

:::note ‌
این فاز **اختیاری** است.
برای ادامهٔ مسیر یادگیری Query Builder و SqlKata لازم نیست آن را بخوانید یا انجام دهید.
اگر زمان یا علاقه داشتید، می‌توانید برای آشنایی با
TDD
سراغش بیایید.
:::

در این فاز با مفاهیم 
Test-driven development
آشنا می‌شوید و در صورت تمایل می‌توانید مینی Query Builder را با این الگو گسترش دهید.

## آشنایی با مبانی TDD

برای درک مفهوم 
TDD
و مراحل آن لینک‌های زیر را مطالعه کنید:

-   [Testing Software: What is TDD?](https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c)
-   [Test Driven Development (TDD): The Advantages and Disadvantages](https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90)
-   [Introduction to Test Driven Development (TDD)](https://medium.com/hackernoon/introduction-to-test-driven-development-tdd-61a13bc92d92)

:::tip ‌
این دو ویدویو مربوط به
TDD
را نیز ببنید.
-   [Test Driven Development - What? Why? And How?](https://www.youtube.com/watch?v=llaUBH5oayw)
-   [TDD Isn't Hard, It's Something Else](https://www.youtube.com/watch?v=WDFN_u5FTyM)

:::

## آشنایی بیشتر با اصول SOLID و تاثیر آن بر TDD

در این مرحله، فکر کنید که هر یک از اصول 
SOLID،
چگونه می‌تواند بر ساده‌تر شدن روند 
TDD
تاثیر بگذارد. با هم‌تیمی خود در این مورد بحث کنید.

در ادامه برای درک این موضوع لینک‌های زیر را مطالعه کنید:

-   [SOLID design principles make test-driven development (TDD) faster and easier](https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1)
-   [Does test-driven development force me to follow SOLID?](https://softwareengineering.stackexchange.com/a/111868)

## گسترش Mini Query Builder با رویکرد TDD

در این مرحله به مینی Query Builder خود قابلیتی اضافه کنید که امکان مرتب‌سازی نتیجه را فراهم کند.
ورودی مورد انتظار چیزی شبیه این است:

```csharp
var query = new Query()
    .From("Students")
    .Select("Id", "Name", "Age")
    .Where("IsMale", true)
    .OrderBy("Age");
```

و خروجی
Compile
باید شامل
`ORDER BY`
روی ستون خواسته‌شده باشد.

:::tip ‌
اگر دوست دارید چالش بیشتری داشته باشید، پشتیبانی از جهت مرتب‌سازی (`ASC` / `DESC`) را هم با
TDD
اضافه کنید.
:::

:::tip ‌
این مرحله را سعی کنید کاملا با رویکرد
TDD
انجام دهید.
:::

## در ادامه...

اگر خواستید، فاز بعد (
CI/CD
) هم اختیاری است.
برای مسیر اصلی می‌توانید مستقیم سراغ
SqlKata
بروید.
