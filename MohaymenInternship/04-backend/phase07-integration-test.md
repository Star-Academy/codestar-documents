---
title: Integration Test
description: ''
---

## مقدمه

در فاز
Unit Test
خروجی
کامپایل کوئری
را بدون
Database
واقعی سنجیدید.
در این فاز یک قدم جلوتر می‌روید:
همان
query
را روی
Database
واقعی اجرا می‌کنید، دادهٔ نمونه وارد می‌کنید، و
assert
می‌کنید نتیجه همان چیزی باشد که انتظار دارید.

و چون دو Database دارید، این مسیر باید برای
**هر دو**
PostgreSQL
و
SQL Server
پاس شود.

در این فاز محیط Database را از قبل و جدا از تست بالا نگه نمی‌دارید.
خود تست با
[Testcontainers](https://dotnet.testcontainers.org/)
container را می‌سازد، صبر می‌کند آماده شود،
connection string
می‌گیرد، تست را اجرا می‌کند و در پایان container را پایین می‌آورد.

:::note ‌
پیش‌نیاز:
Docker روی سیستم نصب و در حال اجرا باشد.
Testcontainers
برای بالا آوردن Database به
Docker
نیاز دارد؛ بدون آن تست‌ها بالا نمی‌آیند.
:::

## Unit Test در برابر Integration Test

| | Unit Test | Integration Test |
| --- | --- | --- |
| تمرکز | یک واحد کوچک ایزوله | چند جزء واقعی با هم |
| Database | معمولاً ندارد (یا Mock) | Database واقعی |
| سرعت | خیلی سریع | کندتر |
| چه چیزی را ثابت می‌کند | منطق واحد درست کار می‌کند | اجزا در کنار هم رفتار درست دارند |

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
دیدید
SQL
دو Database فرق دارد:
placeholder، بعضی تابع‌ها، و جزئیات نوشتن query.
اگر فقط روی یکی
Integration Test
بنویسید، روی Database دیگر باگ می‌خورید؛ باگ‌هایی که فقط روی آن Database ظاهر می‌شوند و تا وقتی رویش تست ننویسید دیده نمی‌شوند.

هدف این فاز: یک سناریوی رفتاری یکسان، دو مسیر اجرا، دو بار پاس —
هر دو با
Testcontainers.

## Testcontainers

یکی از practiceهای رایج این است که **خود تست** موقع اجرا container را بسازد، صبر کند آماده شود،
connection string
بگیرد، تست را اجرا کند و در پایان container را پایین بیاورد.
برای همین کار در اکوسیستم
.NET
از
[Testcontainers](https://dotnet.testcontainers.org/)
استفاده می‌کنید.

### چرا Testcontainers؟

-   تست کمتر به وضعیت فعلی سیستم شما وابسته می‌شود (مثلاً آیا Database از قبل بالا است؟ دادهٔ دیروز مانده؟).
-   برای
    CI
    مناسب‌تر است: هر بار محیط تمیزتر و قابل‌تکرار دارید.
-   Setup و Teardown محیط Database بخشی از خود تست می‌شود، نه کار جداگانهٔ آدم.
-   port و رمز را خود
    Testcontainers
    مدیریت می‌کند؛ نیازی به
    connection string
    ثابت و ازپیش‌تعریف‌شده نیست.

:::caution ‌
در این فاز **نباید** به containerهایی که در فاز
Docker
یا با
`docker compose`
جداگانه بالا آورده‌اید وابسته باشید.
Integration Testها
باید Database را از طریق
Testcontainers
دریافت کنند —
هم برای
PostgreSQL
و هم برای
SQL Server.
لازم نیست هر تست جداگانه container خودش را بالا بیاورد؛ می‌توانید یک container را با
fixture
بین چند تست یک کلاس به اشتراک بگذارید.
:::

### پکیج‌ها

پکیج‌های مورد نیاز پروژهٔ تست:

```shell
dotnet add package Testcontainers.PostgreSql
dotnet add package Testcontainers.MsSql
```

الگوی کلی برای
PostgreSQL:

```csharp
var postgres = new PostgreSqlBuilder()
    .WithImage("postgres:16-alpine")
    .Build();

await postgres.StartAsync();

var connectionString = postgres.GetConnectionString();
// Create schema, insert sample data, run query, assert

await postgres.DisposeAsync();
```

برای
SQL Server
همین الگو با
`MsSqlBuilder`
و پکیج
`Testcontainers.MsSql`
است.

:::note ‌
`GetConnectionString()`
را جایگزین
connection string
ثابت کنید؛ port و رمز را خود
Testcontainers
مدیریت می‌کند.
Schema و Tableها را در
Setup
تست بسازید؛ مثلاً با دستورهای
SQL
در ابتدای تست، یا با اجرای یک فایل اسکریپت
SQL.
:::

کلاینت‌های
.NET
برای اجرای query:

-   [Npgsql Documentation](https://www.npgsql.org/doc/index.html)
-   [Microsoft.Data.SqlClient](https://learn.microsoft.com/en-us/sql/connect/ado-net/microsoft-ado-net-sql-server)

برای مطالعهٔ بیشتر:

-   [Testcontainers for .NET](https://dotnet.testcontainers.org/)
-   [PostgreSQL module](https://dotnet.testcontainers.org/modules/postgres/)
-   [Microsoft SQL Server module](https://dotnet.testcontainers.org/modules/mssql/)
-   [Docker guide: Testcontainers .NET getting started](https://docs.docker.com/guides/testcontainers-dotnet-getting-started/)

## Setup و Teardown

اتصال، آماده شدن Database، و پاک شدن محیط را خود
Testcontainers
مدیریت می‌کند:
`StartAsync`
container را بالا می‌آورد،
`GetConnectionString()`
اتصال می‌دهد، و با
`DisposeAsync`
container (و همهٔ داده‌اش) از بین می‌رود —
نیازی به پاک‌سازی جداگانهٔ داده نیست.

کار شما در هر تست این است:

1. **Arrange**: ساخت Table در صورت نیاز و
   insert
   دادهٔ مشخص
1. **Act**: ساخت
   query
   با
   Mini Query Builder،
   کامپایل کوئری
   با compiler همان Database، اجرا روی
   Database
1. **Assert**: ردیف‌ها / مقدارها همان انتظار منطقی باشند

:::tip ‌
دادهٔ نمونه را کوچک و قابل‌پیش‌بینی نگه دارید؛ مثلاً ۳ تا ۵ ردیف با مقدارهای واضح.
برای اشتراک یک container بین چند تست یک کلاس، از
fixture
(مثلاً
`IAsyncLifetime`
در
xUnit)
استفاده کنید تا برای هر تست دوباره container بالا نیاید.
:::

## تمرین

با آنچه در این فاز خواندید، برای
Mini Query Builder
روی **هر دو**
PostgreSQL
و
SQL Server
Integration Test
بنویسید.
همهٔ حالت‌های فیلتری که پشتیبانی می‌کنید را پوشش دهید؛
assert
روی نتیجهٔ واقعی query باشد، نه فقط روی رشتهٔ
SQL.

:::info ‌
Integration Testها را بین تیم‌ها
Review
کنید:
آیا هر دو provider پوشش داده شده؟
آیا دادهٔ نمونه قابل‌تکرار است؟
:::
