---
title: Full-Text Search
description: ''
---

## مقدمه

در این بخش با مفاهیم جستجوی متنی آشنا می‌شوید و یک موتور جستجوی ساده پیاده‌سازی می‌کنید که بتواند تعدادی سند متنی به
عنوان ورودی بگیرد و با انجام پردازش‌های لازم امکان جستجوی سریع روی متون را برای کاربر فراهم کند.

## آشنایی با مفاهیم اولیه جستجوی متنی

قبل از شروع مطالعه روی دو سوال زیر فکر کنید تا ذهن شما آماده شود.

-   به روز‌های اول تشکیل شرکت گوگل فکر کنید، فرض کنید متن‌های چند صد هزار صفحه‌ی وب را جمع آوری کرده‌اید و می‌خواهید بین
    آن صفحات جستجو کنید. چه راه حلی برای اجرای کوئری چند کلمه‌ای کاربران بین هزاران صفحه متن که از قبل آماده شده است به
    ذهنتان می‌رسد؟
-   چطور می‌شود این جستجو را از مرتبه‌ی یک یا همان
    (O(1
    انجام داد؟

یکی از داده‌ساختارهایی که برای پیاده‌سازی موتور جستجو قابل‌استفاده است،
Inverted Index
می‌باشد. برای آشنایی با این داده ساختار
[Inverted Index - GeeksforGeeks](https://www.geeksforgeeks.org/inverted-index/)
را مطالعه کنید؛ سپس برای فهم بهتر ویدئوی
[The Inverted Index](https://www.youtube.com/watch?v=bnP6TsqyF30)
را مشاهده نمایید.

## Pair Programming

از آنجایی که باید تمرینات و پروژه‌های تمام فازهای آموزشی را به صورت
Pair Programming
انجام دهید، ابتدا جهت آشنایی با این سبک برنامه‌نویسی،
[On Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)
را مطالعه کنید.

:::tip ‌
ابزار
[Live Share](https://visualstudio.microsoft.com/services/live-share/)
نرم‌افزار
VS Code
یک ابزار جذاب جهت برنامه‌نویسی به سبک
Pair Programming
است که می‌توانید از آن استفاده کنید.
:::

:::tip ‌
برای آشنایی بیشتر با
Pair Programming
می‌توانید ویدئوی زیر را مشاهده کنید:

[You Must Be CRAZY To Do Pair Programming](https://www.youtube.com/watch?v=aItVJprLYkg)
:::

## تمرین

### تمرین اول

برنامه‌ای به زبان
C#
و با فریمورک
Dotnet
بنویسید که تعدادی
Document
را بخواند و از روی آن‌ها یک
Inverted Index
بسازد؛
سپس در
Console
از کاربر یک کلمه به عنوان ورودی بگیرد و نام
Documentهایی
که شامل آن کلمه هستند را چاپ کند.

:::tip ‌

-   پیشنهاد می‌کنیم از
    [The 20 Newsgroups Dataset](/datasets/the-20-newsgroups.zip)
    برای تست برنامه استفاده کنید.
-   پیشنهاد می‌کنیم برای بالا بردن دقت جستجو تمام
    Documentهای
    ورودی
    را
    [Uppercase](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1308#rule-description)
    کنید.

:::

### تمرین دوم

برنامه‌ای که در تمرین قبل نوشتید را به نحوی توسعه دهید که سه نوع ورودی از کاربر بگیرد:

1. کلماتی که حتما باید در نتیجه وجود داشته باشند. این کلمات پیشوندی ندارند.
1. کلماتی که حداقل یکی از آن‌ها باید در نتیجه وجود داشته باشند. این کلمات با پیشوند `+` مشخص می‌شوند.
1. کلماتی که نباید در نتیجه وجود داشته باشند. این کلمات با پیشوند `-` مشخص می‌شوند.

_ورودی نوع اول مانند
And،
نوع دوم مانند
Or
و نوع سوم مانند
Not
می‌باشد._

<details>
  <summary>مثال</summary>
  <div>

```
get help +illness +disease -cough
```

با استفاده از
Query
بالا می‌توانیم
Documentهایی
را پیدا کنیم که حتماً شامل عبارات
`get`
و
`help`
و همچنین حداقل یکی از عبارات
`illness`
و
`disease`
باشند و شامل عبارت
`cough`
نباشند.

  </div>
</details>

## مطالعه بیشتر

برای آشنایی بیشتر با نحوۀ کار موتور‌های جستجو دیدن ویدئوی
[How Google searches one document among Billions of documents quickly](https://www.youtube.com/watch?v=CeGtqouT8eA)
توصیه می‌شود.
