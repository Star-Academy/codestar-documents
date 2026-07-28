---
title: SqlKata
description: ''
---

## مقدمه

تا اینجا یک
Query Builder
مینیمال با دست ساخته‌اید: مدل query را از
Compiler
جدا کردید و برای
PostgreSQL
و
SQL Server
دو ترجمه ساختید.
دیدید ساختن
SQL
از روی یک
API
خوانا چقدر تمیزتر از نگه داشتن چند نسخهٔ رشتهٔ خام است.

در این فاز با
[SqlKata](https://sqlkata.com/)
آشنا می‌شوید؛ یک کتابخانهٔ متن‌باز
#C
که همین ایده را به‌صورت بالغ، امن و برای چند
Database
پیاده‌سازی کرده است.

هدف این فاز این است که در پایان بدانید:

1. SqlKata چیست؟
1. چرا از آن استفاده می‌شود؟
1. چطور با
   API
   اصلی‌اش کار کنید؟

## SqlKata چیست؟

SqlKata یک
SQL Query Builder
برای
.NET
است. شما query را با یک
API
روان (Fluent) تعریف می‌کنید و یک
Compiler
آن را به
SQL
و
bindings
تبدیل می‌کند.

از Databaseهای رایج مثل
SQL Server، MySQL، PostgreSQL، SQLite، Oracle
و
Firebird
پشتیبانی می‌کند.

برای شروع این منابع را مرور کنید:

-   [SqlKata Home](https://sqlkata.com/)
-   [SqlKata Docs](https://sqlkata.com/docs)
-   [sqlkata/querybuilder روی GitHub](https://github.com/sqlkata/querybuilder)
-   [NuGet: SqlKata](https://www.nuget.org/packages/SqlKata)

## چرا SqlKata؟

با تجربهٔ Mini Query Builder خودتان، این مزایا را بهتر حس می‌کنید:

1. **خوانایی** — query شبیه کد است، نه یک رشتهٔ طولانی.
1. **bindings و امنیت** — با
   binding
   کمتر در معرض
   SQL Injection
   هستید.
1. **چند Database** — یک تعریف query، چند
   Compiler
   برای Databaseهای مختلف.
1. **ترکیب پویا** — اضافه کردن شرط‌های اختیاری بدون در هم ریختن رشتهٔ
   SQL.

قبل از ادامه، این دو سوال را با هم‌تیمی‌تان جمع‌بندی کنید:

-   Mini Query Builder شما کدام بخش از این نیازها را پوشش می‌داد و کدام را نه؟
-   اگر فردا بخواهید از
    PostgreSQL
    به
    SQL Server
    بروید، در طراحی خودتان چه چیزی باید عوض شود؟ در
    SqlKata
    چطور؟

## نصب

در یک پروژهٔ
Console
یا کنار کتابخانهٔ قبلی:

```shell
dotnet add package SqlKata
```

در صورت نیاز به اجرا:

```shell
dotnet add package SqlKata.Execution
dotnet add package Npgsql
```

## شروع کار: Query و Compiler

کوتاه‌ترین مسیر برای دیدن خروجی
SQL:

```csharp
using SqlKata;
using SqlKata.Compilers;

var compiler = new PostgresCompiler();

var query = new Query("Students")
    .Select("Id", "Name")
    .Where("IsMale", true)
    .Where("Age", 20);

var result = compiler.Compile(query);

Console.WriteLine(result.Sql);
foreach (var binding in result.Bindings)
{
    Console.WriteLine(binding);
}
```

مستندات مرتبط:

-   [Select](https://sqlkata.com/docs/select)
-   [Where](https://sqlkata.com/docs/where)
-   [Compilers](https://sqlkata.com/docs/compilers)

:::tip ‌
همان query را یک‌بار با
`SqlServerCompiler`
و یک‌بار با
`PostgresCompiler`
با
Compile
بگیرید و تفاوت placeholderها و نوشتن نام‌ها را مقایسه کنید.
:::

## تمرین اول: بازنویسی Mini Query Builder با SqlKata

queryهایی که در فاز Mini Query Builder ساخته بودید را با
SqlKata
بازنویسی کنید و خروجی
Compile
را با خروجی
Compiler
خودتان مقایسه کنید.

حداقل این موارد را پوشش دهید:

1. `SELECT` چند Column از یک Table
1. چند شرط
   `Where`
   برابر با
   `AND`
1. مشاهدهٔ
   `Sql`
   و
   `Bindings`

:::info ‌
هدف مقایسهٔ دقیق با خروجی خودتان نیست؛ هدف دیدن این است که ایده یکی است و کتابخانه جزئیات SQL هر Database و binding را مدیریت می‌کند.
:::

## تمرین دوم: کمی فراتر از Mini Query Builder

با کمک مستندات، حداقل دو مورد از قابلیت‌های زیر را روی همان دامنهٔ Tableهای فاز
SQL
امتحان کنید:

-   [Join](https://sqlkata.com/docs/join)
-   [Order](https://sqlkata.com/docs/order)
-   [Limit / Offset](https://sqlkata.com/docs/limit)
-   شرط‌های
    [Where](https://sqlkata.com/docs/where)
    غنی‌تر (مثلاً `WhereIn` یا مقایسه)

:::note ‌
لازم نیست همهٔ مستندات را حفظ کنید؛ مهم است بدانید کجا را بگردید و بتوانید یک query واقعی بسازید.
:::

## تمرین سوم (اختیاری): اجرا روی PostgreSQL

اگر
`SqlKata.Execution`
را اضافه کرده‌اید، همان query را روی Database فاز
SQL
اجرا کنید و نتیجه را چاپ کنید.

راهنما:

-   [Query Execution](https://sqlkata.com/docs/execution)

## جمع‌بندی

بعد از این فاز باید بتوانید در یک جمله بگویید:

> SqlKata یک Query Builder است که تعریف query را از SQL نهایی جدا می‌کند و با Compiler مناسب، برای هر Database یک SQL امن می‌سازد.

در فاز بعد با
EF Core
آشنا می‌شوید و تفاوت آن را با
SqlKata
دقیق‌تر می‌بینید: SqlKata نزدیک
SQL
می‌ماند، EF Core نزدیک objectها و مدل دامنه.
