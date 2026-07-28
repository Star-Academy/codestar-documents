---
title: EFCore
description: ''
---

## مقدمه

در این فاز با مفهوم ORM
و EFCore
به عنوان یک ORM
محبوب در زبان #C
آشنا می‌شوید.

## EFCore چیست؟

EntityFramework Core
یک ORM
چند سکویی است که به ما این فرصت را می‌دهد با یک بار نوشتن یک کد آن را بر روی Databaseهای مختلف اجرا کنیم. EFCore
کاملا متن‌باز و در حال گسترش نیز می‌باشد.

## ORM

ORM
مخفف Object Relational Mapping
است؛ یعنی objectهای
#C
را به Tableها و Relationهای Database وصل می‌کند. برای مطالعه بیشتر درباره این موضوع [What is ORM? Object-Relational Mapping Explained](https://www.ictshore.com/software-design/what-is-orm/)
را مطالعه کنید.

## روش‌های توسعه

دو روش ایجاد Database در EFCore
وجود دارد یکی با استفاده از Code first
و دیگری Database first.

<img src={require('@site/docs/software-engineering/images/phase08-ef-core-dev-approaces.png').default} alt="EFCore Dev Approaces" />

### Database first

در این روش ابتدا Database طراحی و پیاده‌سازی می‌شود و سپس بر اساس آن کدهایی به زبان‌ برنامه‌نویسی ایجاد می‌شود. این روش بیشتر برای پروژه‌هایی که قبلا از طریقی دیگر و در گذشته Database را ایجاد کرده‌اند کاربرد دارد. برای آشنایی بیشتر با این موضوع [Entity Framework Core Database-First Tutorial for .NET Core](https://www.devart.com/dotconnect/sqlite/docs/EFCore-Database-First-NET-Core.html)
را مطالعه کنید.

### Code first

در این روش بر خلاف روش قبلی ابتدا مدل‌ها که همان کلاس‌های اشیاء ما هستند ایجاد می‌شوند. خوبی این روش این است که اگر نیاز به تغییر Database باشد تنها با تغییری جزئی کانفیگ می‌توان Database را تغییر داد.

برای درک بهتر Code first
بهتر است در ابتدا یک پروژه ساده را پیاده‌سازی کنید. از این رو سعی کنید پروژه [First EF Core Console Application](https://docs.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli)
را اجرا کنید.

:::note ‌ 
بجای پکیج Microsoft.EntityFrameworkCore.Sqlite
پکیج Npgsql.EntityFrameworkCore.PostgreSQL نصب کنید.
:::
:::tip ‌
برای ایجاد connction string
می‌توانید از [Standard Connection String](https://www.connectionstrings.com/npgsql/standard)
استفاده کنید.
:::

### Linq

برای فراخوانی داده‌ها در EFCore
می‌تواند به راحتی از Linq
استفاده کنید و queryهای خود را ایجاد کنید.

برای درک بهتر این موضوع [Querying data via the DbSet](https://www.learnentityframeworkcore.com/dbset/querying-data)
را مطالعه کنید و سعی کنید مثال‌های آن‌را پیاده‌سازی کنید.

### Insert

برای افزودن داده‌ها در جدول به راحتی می‌توانید به وسیله EFCore
داده‌ها را بیفزاید. برای آشنایی بیشتر با این مورد [Insert Records in Entity Framework Core](https://www.yogihosting.com/insert-records-entity-framework-core/)
را مطالعه نمائید.

### Update

برای به روزرسانی داده‌ها در جدول به راحتی می‌توانید به وسیله EFCore
داده‌ها را به روزرسانی کنید. برای آشنایی بیشتر با این مورد [Update Records in Entity Framework Core](https://www.yogihosting.com/update-records-entity-framework-core/)
را مطالعه نمائید.

### Delete

برای حذف داده‌ها در جدول به راحتی می‌توانید به وسیله EFCore داده‌ها را حذف کنید. برای آشنایی بیشتر با این مورد [Delete Records in Entity Framework Core](https://www.yogihosting.com/delete-records-entity-framework-core/)
را مطالعه نمائید.

## تفاوت EF Core و SqlKata

تا اینجا با
SqlKata
به‌عنوان
Query Builder
کار کرده‌اید.
EF Core
یک
ORM
است. این دو شبیه هم به نظر می‌رسند چون هر دو از
#C
به
Database
می‌رسند، ولی مسئله‌ای که حل می‌کنند فرق دارد.

### هر کدام چه چیزی می‌سازد؟

| | SqlKata (Query Builder) | EF Core (ORM) |
|---|---|---|
| تمرکز اصلی | ساختن و کنترل کردن `SQL` | کار با objectها و نگاشت آن‌ها به Table |
| خروجی ذهنی شما | `Sql` + `Bindings` | موجودیت‌ها مثل `Student`، `Enrollment` |
| تغییر داده | خودتان `Insert`/`Update`/`Delete` را به صورت query می‌نویسید | معمولاً object را عوض می‌کنید و `SaveChanges` می‌زنید |
| کنترل روی SQL | بالا و صریح | کمتر؛ بخش زیادی را EF می‌سازد |
| مناسب برای | گزارش، فیلتر پویا، SQL پیچیده، چند Database | CRUD روزمره، مدل دامنه، Relation بین entityها |

### یک مثال ذهنی از یک کار یکسان

فرض کنید می‌خواهید دانشجویان مرد با سن ۲۰ را بگیرید.

با
SqlKata
تقریباً این‌طور فکر می‌کنید: «یک `SELECT` بساز، `WHERE` بگذار، Compile کن، اجرا کن.»

```csharp
var query = new Query("Students")
    .Select("Id", "Name")
    .Where("IsMale", true)
    .Where("Age", 20);

var result = compiler.Compile(query);
// بعد SQL و Bindings را اجرا می‌کنید
```

با
EF Core
تقریباً این‌طور فکر می‌کنید: «از مجموعهٔ `Students`، objectهایی را فیلتر کن که شرط را دارند.»

```csharp
var students = await db.Students
    .Where(s => s.IsMale && s.Age == 20)
    .Select(s => new { s.Id, s.Name })
    .ToListAsync();
```

در SqlKata شما عمداً نزدیک
SQL
می‌مانید.
در EF Core شما نزدیک مدل
#C
می‌مانید و EF در پشت صحنه
SQL
را تولید می‌کند.

### چه زمانی کدام؟

-   وقتی می‌خواهید شکل
    SQL
    را خودتان تعیین کنید، یا query پویا/پیچیده بسازید →
    **SqlKata**
    (یا Query Builder خودتان)
-   وقتی بیشتر با موجودیت‌های دامنه کار می‌کنید، Relationها مهم‌اند و CRUD تکراری زیاد دارید →
    **EF Core**

:::note ‌
جایگزین مطلق هم نیستند.
در خیلی از سیستم‌ها هر دو دیده می‌شوند: EF برای مسیر اصلی دامنه، Query Builder برای گزارش‌ها یا بخش‌هایی که کنترل دقیق روی SQL لازم است.
:::

:::tip ‌
برای جمع‌بندی بیشتر می‌توانید این‌ها را مرور کنید:

-   [Entity Framework Core overview](https://learn.microsoft.com/en-us/ef/core/)
-   [SqlKata Docs](https://sqlkata.com/docs)
-   [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
:::

### تمرین کوتاه برای تثبیت تفاوت

همان query ساده‌ای که با SqlKata نوشته‌اید را یک‌بار هم با
EF Core
و
LINQ
پیاده‌سازی کنید.
بعد از خودتان بپرسید:

1. کجا کنترل بیشتری روی
   SQL
   داشتم؟
1. کجا کار با objectها ساده‌تر بود؟
1. اگر فردا شرط‌های اختیاری زیادی اضافه شود، کدام مسیر را راحت‌تر می‌بینید؟
