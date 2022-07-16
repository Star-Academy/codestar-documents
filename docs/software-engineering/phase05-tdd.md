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

## بازنویسی پروژهٔ سرچ با زبان #C و با رویکرد TDD

در این مرحله، پروژهٔ سرچ خود را که قبلاً جاوا نوشته‌اید را بعنوان یک library
سرچ به زبان #C
بازنویسی کنید. در بازنویسی خود به طور کامل رویکرد TDD
را به کار ببرید و آموخته‌های خود از مرحلهٔ قبل را اعمال کنید.

همچنین مراحل زیر را برای ساختن پروژهٔ خود دنبال کنید.

### ساختن solution

با استفاده از دستور زیر در ترمینال یک solution
بسازید:

```Bash
dotnet new sln -o SampleLibrary
cd .\SampleLibrary\
```

### ساختن یک پروژهٔ Class Library

در این مرحله یک پروژهٔ Net Class Library.
بسازید. سپس آن را به solution
خود اضافه کنید:

```Bash
dotnet new classlib -o .\SampleLibrary
dotnet sln add .\SampleLibrary\
```

:::note ‌
کد شما، در این پروژه قرار می‌گیرد.
:::

### ساختن پروژه تست

در این مرحله یک پروژه تست با فریم‌ورک xUnit
بسازید، آن را به solution
اضافه کنید و همچنین یک رفرنس به پروژهٔ Class Libraryای
که قبلاً ساخته‌اید بدهید:

```Bash
dotnet new xunit -o .\SampleLibrary.Test
dotnet sln add .\SampleLibrary.Test\
dotnet add .\SampleLibrary.Test\ reference .\SampleLibrary\
```

تبریک! شما ساختار پروژهٔ خود را آماده کردید. حال می‌توانید شروع به کد زدن کنید.

با دستور زیر می‌توانید از طریق پروژهٔ تست، تست‌های خود را اجرا کنید:

```Bash
dotnet test
```
