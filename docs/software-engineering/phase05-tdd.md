---
title: TDD
description: ''
---

## مقدمه

در این فاز با مفاهیم Test-driven development
آشنا می‌شوید و پروژه جستجو را با این الگو بازنویسی می‌کنید.

## آشنایی با مبانی TDD

برای درک مفهوم TDD
و مراحل آن لینک‌های زیر را مطالعه کنید:

-   [Testing Software: What is TDD?](https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c)
-   [Test Driven Development (TDD): The Advantages and Disadvantages](https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90)
-   [Introduction to Test Driven Development (TDD)](https://medium.com/hackernoon/introduction-to-test-driven-development-tdd-61a13bc92d92)

## آشنایی بیشتر با اصول SOLID و تاثیر آن بر TDD

در این مرحله، فکر کنید که هر یک از اصول SOLID،
چگونه می‌تواند بر ساده‌تر شدن روند TDD
تاثیر بگذارد. با هم‌تیمی خود در این مورد بحث کنید.

در ادامه برای درک این موضوع لینک‌های زیر را مطالعه کنید:

-   [SOLID design principles make test-driven development (TDD) faster and easier](https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1)
-   [Does test-driven development force me to follow SOLID?](https://softwareengineering.stackexchange.com/a/111868)

## گسترش پروژه Full Text Search با رویکرد TDD

در این مرحله به پروژه 
Full Text Search
خود
قابلیتی اضافه کنید که امکان جستجوی عبارت نیز فراهم شود.
این ورودی به صورت زیر به برنامه در کنار ورودی های دیگر داده می‌شود :
```
get +disease -cough "star academy"
```
```
get +illness +disease -cough -"star academy"
```
تحلیل ورودی
```
get : حتما وجود داشته باشد
+illness +disease : حداقل یکی از این دو وجود داشته باشد
-cough : نباید وجود داشته باشد
"star academy" : این عبارت حتما وجود داشته باشد
-"star academy" : این عبارت وجود نداشته باشد
```

:::tip ‌
این مرحله را سعی کنید کاملا با رویکرد
TDD
انجام دهید.
:::