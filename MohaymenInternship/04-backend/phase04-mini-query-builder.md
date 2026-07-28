---
title: Mini Query Builder
description: ''
---

## مقدمه

در فاز قبل با
SQL
روی
PostgreSQL
و
SQL Server
کار کردید و دیدید یک نیاز به‌ظاهر یکسان، روی دو Database لزوماً یک
SQL
یکسان نمی‌شود.
همچنین این سوال مطرح شد: اگر ۱۰ تا Database دیگر هم اضافه شود چه؟

در دنیای واقعی این queryها معمولاً **داخل کد** ساخته می‌شوند.
اگر برای هر Database یک
`string`
جدا نگه دارید، نگهداری کد خیلی زود از کنترل خارج می‌شود.

در این فاز راه‌حل را می‌سازید: یک
**Query Builder**
مینیمال.
یک‌بار منطق query را تعریف می‌کنید و با
Compilerهای جدا، آن را به
SQL
مربوط به
PostgreSQL
یا
SQL Server
ترجمه می‌کنید؛ همان ایده‌ای که کتابخانه‌هایی مثل
SqlKata
روی آن بنا شده‌اند.

:::note ‌
هدف ساخت کتابخانهٔ کامل صنعتی نیست.
کافی است نسخهٔ خیلی کوچک برای `SELECT` و چند شرط `WHERE` بسازید؛ ولی حتماً **دو Compiler** داشته باشید تا همان دردی که در فاز SQL دیدید را حل کند.
:::

## چرا Query Builder؟

قبل از کدنویسی، با هم‌تیمی‌تان این‌ها را جمع‌بندی کنید:

1. در فاز قبل برای یک منطق یکسان، SQL شما بین
   PostgreSQL
   و
   SQL Server
   کجاها فرق کرد؟
1. اگر بخواهید شرط‌های اختیاری را هم به query اضافه کنید، مدیریت رشتهٔ خام چقدر سخت می‌شود؟
1. تفاوت placeholderها (`$1` در برابر `@p0`) چه مشکلی برای کد مشترک ایجاد می‌کند؟

:::caution ‌
لطفاً قبل از فکر کردن به این سوال‌ها سراغ پیاده‌سازی نروید.
:::

برای آماده‌سازی ذهنی:

-   [SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
-   [Parameterized Queries](https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html)
-   [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface)

:::tip ‌
الگوی
Fluent Interface
همان سبکی است که در
LINQ
و بسیاری از
Query Builderها
می‌بینید؛ متدها شیء را برمی‌گردانند تا بتوانید زنجیره‌ای صدا بزنید.
:::

## ایدهٔ Query Builder

یک
Query Builder
معمولاً دو بخش دارد:

1. **Query model**  
   ساختار داده‌ای که می‌گوید از کدام Table، کدام Columnها، و با چه شرط‌هایی می‌خواهید بخوانید.
1. **Compiler**  
   بخشی که آن مدل را به رشتهٔ
   SQL
   و لیست
   bindings
   برای یک Database مشخص تبدیل می‌کند.

با این جداسازی، منطق query یک‌بار نوشته می‌شود و فقط Compiler عوض می‌شود.

برای آشنایی بیشتر:

-   [Query Object Pattern](https://martinfowler.com/eaaCatalog/queryObject.html)
-   [Builder Pattern](https://refactoring.guru/design-patterns/builder)

## تمرین اول: ساخت کلاس Query با Fluent API

یک
Class Library
با
#C
بسازید و کلاس
`Query`
را طوری پیاده کنید که حداقل این متدها را داشته باشد:

-   `From(string table)`
-   `Select(params string[] columns)`
-   `Where(string column, object value)` — فقط عملگر برابر (`=`)
-   هر متد باید خود
  `Query`
  را برگرداند:

```csharp
var query = new Query()
    .From("Students")
    .Select("Id", "Name")
    .Where("IsMale", true)
    .Where("Age", 20);
```

## تمرین دوم: دو Compiler

برای همان
`Query`
بالا، دو Compiler بنویسید:

1. `PostgresCompiler`
1. `SqlServerCompiler`

هر کدام باید برگردانند:

1. رشتهٔ
   SQL
1. لیست
   bindings

:::note ‌
`AND`
اینجا یک قابلیت جدا نیست که پیاده کنید.
فقط یعنی اگر دو بار
`Where`
صدا زدید، Compiler در رشتهٔ نهایی
SQL
شرط‌ها را پشت‌سرهم با کلمهٔ
`AND`
می‌چسباند.
متد
`And(...)`
یا پشتیبانی از
`OR`
لازم نیست.
:::

### خروجی مورد انتظار

همان
`Query`
مثال بالا را Compile کنید.
چون دو
`Where`
دارد، در
SQL
نهایی بین دو شرط کلمهٔ
`AND`
دیده می‌شود.

برای
PostgreSQL
چیزی شبیه:

```sql
SELECT "Id", "Name" FROM "Students" WHERE "IsMale" = $1 AND "Age" = $2
```

و
bindings
برابر
`[true, 20]`
؛ یعنی `$1 = true` و `$2 = 20`.

برای
SQL Server
چیزی شبیه:

```sql
SELECT [Id], [Name] FROM [Students] WHERE [IsMale] = @p0 AND [Age] = @p1
```

و
bindings
برابر
`[1, 20]`
؛ یعنی `@p0 = 1` و `@p1 = 20`.

:::note ‌
مهم این است که **یک Query model** داشته باشید و فقط با عوض کردن Compiler، SQL مربوط به هر Database عوض شود.
دقیقاً همان راه‌حلی که برای سوال «اگر ۱۰ تا Database دیگر اضافه شد» لازم دارید.
:::

:::tip ‌
نام Column/Table را مطابق هر Database درست بنویسید (مثلاً `"Name"` در PostgreSQL و `[Name]` در SQL Server).
:::

## تمرین سوم: اجرای واقعی

همان query را یک‌بار با
`Npgsql`
روی
PostgreSQL
و یک‌بار با
`Microsoft.Data.SqlClient`
روی
SQL Server
اجرا کنید و نتیجه را مقایسه کنید.

-   [Npgsql Documentation](https://www.npgsql.org/doc/index.html)
-   [Microsoft.Data.SqlClient](https://learn.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server)
-   [ADO.NET Overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview)

:::info ‌
اصل کار، طراحی
API
و دو
Compiler
است.
اجرای واقعی کمک می‌کند ببینید راه‌حل‌تان روی هر دو Database جواب می‌دهد.
:::

## یادگیری بیشتر

برای یادگیری بیشتر می‌توانید این‌ها را کامل پیاده کنید:

-   `JOIN`
-   `OR` / گروه‌بندی شرط‌ها
-   `ORDER BY` / `GROUP BY` / `LIMIT`/`TOP`
-   Compiler برای MySQL

## در ادامه...

در فازهای بعد روی همین پروژه کار می‌کنید:

-   Clean Code و
    Refactor
-   Unit Test روی
    Compilerها
-   Integration Test روی
    PostgreSQL
    و
    SQL Server
    (اجرای واقعی query و assert نتیجه)
-   سپس در صورت تمایل
    TDD
    و
    CI/CD
    (هر دو اختیاری)
-   بعد آشنایی با
    SqlKata
