---
title: Integration Test
description: ''
---

## مقدمه

در فاز
Unit Test
خروجی
Compile
را بدون
Database
واقعی سنجیدید.
در این فاز یک قدم جلوتر می‌روید:
همان
query
را روی
Database
واقعی اجرا می‌کنید، داده
seed
می‌کنید، و
assert
می‌کنید نتیجه همان چیزی باشد که انتظار دارید.

و چون دو dialect دارید، این مسیر باید برای
**هر دو**
PostgreSQL
و
SQL Server
پاس شود.

:::note ‌
پیش‌نیاز:
containerهای فاز
Docker
بالا باشند و schema / Tableهای فاز
SQL
آماده باشند.
:::

## Unit Test در برابر Integration Test

| | Unit Test | Integration Test |
| --- | --- | --- |
| تمرکز | یک واحد کوچک ایزوله | چند جزء واقعی با هم |
| Database | معمولاً ندارد (یا Mock) | Database واقعی |
| سرعت | خیلی سریع | کندتر |
| چه چیزی را ثابت می‌کند | منطق و خروجی Compile | رفتار واقعی روی داده |

قبل از کدنویسی این‌ها را بخوانید:

-   [Unit tests versus integration tests](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices#unit-tests-vs-integration-tests)
-   [Integration tests in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests)
-   [Testing pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)

:::tip ‌
Unit Test می‌گوید «رشتهٔ
SQL
و
bindings
درست ساخته شد.»
Integration Test می‌گوید «همان
query
روی
Database
واقعی هم نتیجهٔ درست برمی‌گرداند.»
هر دو لازم‌اند؛ جایگزین هم نیستند.
:::

## چرا دو Database؟

در فاز
SQL
و
Mini Query Builder
دیدید dialectها فرق دارند:
placeholder، بعضی تابع‌ها، و جزئیات syntax.
اگر فقط روی یکی
Integration Test
بنویسید، باگهای مخصوص dialect دیگر را دیر می‌بینید.

هدف این فاز: یک سناریوی رفتاری یکسان، دو مسیر اجرا، دو بار پاس.

## اتصال به containerها

از همان
connection stringهایی
استفاده کنید که به
containerهای فاز
Docker
می‌رسند؛ مثلاً:

PostgreSQL (نمونه):

```text
Host=localhost;Port=5432;Database=mohaymen;Username=postgres;Password=postgres
```

SQL Server (نمونه):

```text
Server=localhost,1433;Database=master;User Id=sa;Password=Your_strong_Password123;TrustServerCertificate=True
```

:::caution ‌
اگر در فاز
Docker
port
یا رمز را عوض کرده‌اید، اینجا همان مقادیر را بگذارید.
:::

کلاینت‌های
.NET:

-   [Npgsql Documentation](https://www.npgsql.org/doc/index.html)
-   [Microsoft.Data.SqlClient](https://learn.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server)

## Setup و Teardown

Integration Test
بدون نظم در داده زود شکننده می‌شود.
برای هر تست (یا حداقل هر کلاس تست) مشخص کنید:

1. **Setup / Arrange**: اتصال، ساخت یا پاک‌سازی Table در صورت نیاز،
   insert
   دادهٔ مشخص
1. **Act**: ساخت
   query
   با
   Mini Query Builder،
   Compile
   با compiler همان dialect، اجرا روی
   Database
1. **Assert**: ردیف‌ها / مقدارها همان انتظار منطقی باشند
1. **Teardown** (در صورت نیاز): پاک کردن دادهٔ تست تا تست بعدی آلوده نشود

:::tip ‌
دادهٔ
seed
را کوچک و قابل‌پیش‌بینی نگه دارید؛ مثلاً ۳ تا ۵ ردیف با مقدارهای واضح.
هرچه داده مبهم‌تر باشد،
assert
سخت‌تر می‌شود.
:::

## الگوی تمرین

برای **هر دو**
Database
همین مسیر را پیاده کنید:

```text
Arrange  →  seed چند ردیف مشخص
Act      →  Query + Compiler همان dialect + Execute
Assert   →  نتیجه با انتظار یکی باشد
```

متن
SQL
دو dialect می‌تواند فرق کند؛ مهم **رفتار و خروجی** است.

## تمرین اصلی

### ۱) Seed داده

روی Tableی که در فاز
SQL
ساختید (یا یک Table تست جدا)، چند ردیف مشخص
insert
کنید؛ مثلاً دانشجو با سن و وضعیت مشخص.

### ۲) اجرای query روی PostgreSQL

1. با
   Mini Query Builder
   یک
   query
   فیلتردار بسازید (مثلاً `Where` روی یک شرط واضح).
1. با
   `PostgresCompiler`
   آن را
   Compile
   کنید.
1. با
   `Npgsql`
   اجرا کنید.
1. روی نتیجه
   assert
   بزنید (تعداد ردیف، مقدار یک ستون، یا هر دو).

### ۳) همان سناریو روی SQL Server

1. همان منطق
   query
   را نگه دارید.
1. با
   `SqlServerCompiler`
   Compile
   کنید.
1. با
   `Microsoft.Data.SqlClient`
   اجرا کنید.
1. همان انتظار رفتاری را
   assert
   کنید.

### ۴) یک سناریوی فیلتر اضافه

حداقل یک شرط دیگر (مثلاً بازهٔ عددی یا ترکیب دو شرط) اضافه کنید و دوباره روی **هر دو**
Database
پاس بگیرید.

:::info ‌
Integration Testهای دو
Database
را بین تیم‌ها
Review
کنید:
آیا برای هر دو
provider
سناریوی یکسانی پوشش داده شده؟
آیا
seed
قابل‌تکرار است؟
:::

## چک‌لیست پایان فاز

1. حداقل یک
   Integration Test
   روی
   PostgreSQL
   سبز است.
1. همان سناریو روی
   SQL Server
   سبز است.
1. تست‌ها داده
   seed
   می‌کنند؛ فقط به دادهٔ دستی قبلی وابسته نیستند.
1. Assert روی نتیجهٔ واقعی است، نه فقط روی رشتهٔ
   SQL.

## در ادامه...

بعد از این فاز می‌توانید اختیاری با
TDD
و سپس
CI/CD
آشنا شوید؛ برای ادامهٔ مسیر اصلی لازم نیستند.
سپس با
SqlKata
به‌عنوان نسخهٔ واقعی و بالغ همان ایدهٔ
Query Builder
کار می‌کنید.
