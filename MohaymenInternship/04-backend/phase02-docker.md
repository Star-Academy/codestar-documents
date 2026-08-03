---
title: Docker
description: ''
---

## مقدمه

در فازهای بعد با
PostgreSQL
و
SQL Server
کار می‌کنید.
به‌جای نصب جداگانهٔ هر Database روی سیستم، در این فاز هر دو را با
Docker
بالا می‌آورید — با یک فایل
Compose
و یک دستور.

:::note ‌
هدف پایان این فاز: هر دو
Database
با
`docker compose up`
بالا باشند.
اتصال با
client
و زدن
query
در فاز
SQL
است.
:::

## Docker چیست و چرا به درد می‌خورد؟

Docker
ابزاری است برای بسته‌بندی و اجرای نرم‌افزار داخل
Container.
به‌جای اینکه
PostgreSQL
یا
SQL Server
را مستقیم روی سیستم‌عامل نصب کنید، یک
Image
آماده می‌گیرید و از روی آن یک
Container
اجرا می‌کنید.

مزیت برای این مسیر:

1. راه‌اندازی هر دو
   Database
   سریع و تکرارپذیر است.
1. بعداً در
   Integration Test
   با
   Testcontainers
   همین ایدهٔ container را خود تست به‌صورت خودکار بالا می‌آورد.

قبل از ادامه:

-   [What is a Container?](https://www.docker.com/resources/what-container/)
-   [Docker overview](https://docs.docker.com/get-started/docker-overview/)
-   [Images and containers](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)

:::tip ‌
اگر ویدیو را ترجیح می‌دهید:

[Docker in 100 Seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
:::

## مفاهیم کلیدی

### Image در برابر Container

-   **Image**: قالب فقط‌خواندنی (مثل
    PostgreSQL
    یا
    SQL Server
    آماده‌ی اجرا)
-   **Container**: یک نمونهٔ در حال اجرا از آن
    Image

### Port mapping

Database
داخل
Container
روی یک
port
داخلی گوش می‌دهد.
با
port mapping
آن را به
port
سیستم خودتان وصل می‌کنید تا از
localhost
به آن برسید.

مثال:

-   PostgreSQL داخل container روی `5432` → شما روی `localhost:5432`
-   SQL Server داخل container روی `1433` → شما روی `localhost:1433`

### Environment variable

Imageها
معمولاً با
environment variable
پیکربندی می‌شوند؛ مثلاً رمز عبور یا نام
Database.
در
Compose
همین مقادیر را زیر کلید
`environment`
می‌نویسید.

### Volume

اگر
Container
را پاک کنید، دادهٔ داخلش ممکن است از بین برود.
**Volume**
داده را بیرون از عمر
Container
نگه می‌دارد تا با خاموش/روشن شدن از دست نرود.

-   [Manage data in Docker](https://docs.docker.com/storage/)
-   [Volumes](https://docs.docker.com/engine/storage/volumes/)

## Docker Compose چیست؟

تا اینجا می‌توانستید برای هر
Database
یک دستور طولانی
`docker run`
بزنید.
وقتی چند سرویس دارید، این کار زود شلوغ و سخت‌تکرار می‌شود.

**Compose**
یعنی تعریف چند سرویس در یک فایل (معمولاً
`docker-compose.yml`)
و بالا آوردن همه‌شان با یک دستور.

-   [Docker Compose overview](https://docs.docker.com/compose/)
-   [Compose file reference](https://docs.docker.com/reference/compose-file/)

در این فاز دقیقاً همین کار را می‌کنید: یک فایل می‌سازید که
PostgreSQL
و
SQL Server
را با هم تعریف کند، بعد
`up`
می‌کنید.

## نصب Docker

Docker Desktop
را نصب کنید و مطمئن شوید روشن است:

-   [Install Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
-   [Install Docker Desktop on Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
-   [Install Docker Engine on Linux](https://docs.docker.com/engine/install/)

:::tip ‌
بعد از نصب در ترمینال بزنید:

```bash
docker version
docker compose version
```

اگر خطا داد، معمولاً
Docker Desktop
هنوز کامل بالا نیامده یا
WSL2 / virtualization
فعال نیست.
:::

## تمرین: ساخت Compose و بالا آوردن هر دو Database

اینجا دو
Database
را بالا می‌آورید:
PostgreSQL
و
SQL Server.
لازم نیست الان عمیق بدانید Database چیست یا چطور query بزنید —
فقط محیط را آماده می‌کنید.
با خود
Database
و
SQL
در فاز بعد آشنا می‌شوید؛ همان‌جایی که به این دو سرویس وصل می‌شوید و با آن‌ها کار می‌کنید.

:::note ‌
Docker Hub
و
`mcr.microsoft.com`
از داخل ایران معمولاً در دسترس نیستند.
در این فاز Imageها را از
**کش‌رجیستری هم‌داکر (هم‌روش)**
می‌گیرید؛ همان Image رسمی است، فقط دامنه عوض شده.
:::

### ۱) ساخت فایل

یک پوشه بسازید (مثلاً `mohaymen-databases`) و داخلش فایل
`docker-compose.yml`
را با محتوای زیر بسازید:

```yaml
services:
  postgres:
    image: hub.hamdocker.ir/library/postgres:16
    container_name: mohaymen-postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: mohaymen
    ports:
      - "5432:5432"
    volumes:
      - mohaymen-pgdata:/var/lib/postgresql/data

  sqlserver:
    image: mcr.hamdocker.ir/mssql/server:2022-latest
    container_name: mohaymen-sqlserver
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: "Your_strong_Password123"
    ports:
      - "1433:1433"
    volumes:
      - mohaymen-mssqldata:/var/opt/mssql

volumes:
  mohaymen-pgdata:
  mohaymen-mssqldata:
```

مرجع و جستجوی Image:

-   [راهنمای کش‌رجیستری هم‌داکر](https://hamravesh.com/blog/container-registry-mirroring-and-caching/)
-   [جستجو در Hub هم‌داکر](https://hub.hamdocker.ir/ui/packages)
-   [جستجو در MCR هم‌داکر](https://mcr.hamdocker.ir/ui/packages)

:::tip ‌
معادل‌ها:

-   `postgres:16` → `hub.hamdocker.ir/library/postgres:16`
-   `mcr.microsoft.com/mssql/server:2022-latest` → `mcr.hamdocker.ir/mssql/server:2022-latest`
:::

### ۲) این فایل چه می‌گوید؟

| بخش | معنی |
| --- | --- |
| `services` | لیست سرویس‌هایی که می‌خواهید همزمان بالا بیایند |
| `postgres` / `sqlserver` | نام منطقی هر سرویس داخل Compose |
| `image` | از کدام رجیستری و Image این container ساخته شود (اینجا هم‌داکر) |
| `container_name` | نامی که در `docker ps` می‌بینید |
| `environment` | تنظیمات لازم برای استارت Database (یوزر، رمز، نام DB، پذیرش EULA) |
| `ports` | `"HOST:CONTAINER"` — از سیستم خودتان به port داخل container |
| `volumes` (زیر سرویس) | داده کجا روی دیسک ماندگار شود |
| `volumes` (پایین فایل) | تعریف Volumeهای نام‌دار که سرویس‌ها به آن وصل‌اند |

:::tip ‌
فرمت
`ports: "5432:5432"`
یعنی: port سمت چپ مال سیستم شماست، سمت راست مال داخل container.
اگر `5432` یا `1433` روی سیستم‌تان اشغال است، فقط عدد سمت چپ را عوض کنید (مثلاً `"5433:5432"`) و در
client
هم همان port سمت چپ را بزنید.
:::

:::caution ‌
رمز
`MSSQL_SA_PASSWORD`
باید سیاست پیچیدگی
SQL Server
را رعایت کند (طول کافی، حرف بزرگ/کوچک، عدد، نماد).
رمز نمونهٔ بالا فقط برای یادگیری است؛ در محیط واقعی رمز قوی‌تر و مدیریت‌شده بگذارید.
:::

### ۳) بالا آوردن

در همان پوشه‌ای که فایل را ساختید:

```bash
docker compose up -d
```

-   `up` یعنی سرویس‌های فایل را بساز و اجرا کن
-   `-d` یعنی در پس‌زمینه (detached) اجرا شود تا ترمینال آزاد بماند

وضعیت و لاگ:

```bash
docker compose ps
docker compose logs -f
```

با `Ctrl+C` فقط دنبال‌کردن لاگ قطع می‌شود؛ خود
containerها
بالا می‌مانند.

برای توقف موقت:

```bash
docker compose stop
```

برای شروع دوباره:

```bash
docker compose start
```

برای خاموش کردن و حذف containerها (Volumeها معمولاً می‌مانند):

```bash
docker compose down
```

:::info ‌
اگر یکی بالا نیامد، `docker compose logs` را بخوانید.
رایج‌ترین علت‌ها: روشن نبودن
Docker Desktop،
اشغال بودن
port،
یا ضعیف بودن رمز
SQL Server.
:::

## در ادامه...

در فاز بعد روی همین دو
Database
که با
Compose
بالا آوردید،
SQL
را یاد می‌گیرید.
کار روی همین
containerها
است.
