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

EntityFrameworkwork Core
یک ORM
چند سکویی است که به ما این فرصت را می‌دهد با یک بار نوشتن یک کد آن را بر روی پایگاه‌داده‌های مختلف اجرا کنیم. EFCore
کاملا متن‌باز و در حال گسترش نیز می‌باشد.

## ORM

ORM
مخفف Object Reletional Mapping
است که مترجم میان زبان‌های برنامه‌نویسی و پایگاه‌داده است و می‌تواند یک کد را به زبان‌های مختلف تبدیل کند. برای مطالعه بیشتر درباره این موضوع [What is ORM? Object-Relational Mapping Explained](https://www.ictshore.com/software-design/what-is-orm/)
را مطالعه کنید.

## روش‌های توسعه

دو روش ایجاد پایگاه داده EFCore
وجود دارد یکی با استفاده از Code first
و دیگری Database first.

![EFCore Dev Approaces](./images/phase08-ef-core-dev-approaces.png)

### Database first

در این روش ابتدا پایگاه‌داده طراحی و پیاده‌سازی می‌شود و سپس بر اساس آن کدهایی به زبان‌ برنامه‌نویسی ایجاد می‌شود. این روش بیشتر برای پروژه‌هایی که قبلا از طریقی دیگر و در گذشته پایگاه‌داده را ایجاد کرده‌اند کاربرد دارد. برای آشنایی بیشتر با این موضوع [Entity Framework Core Database-First Tutorial for .NET Core](https://www.devart.com/dotconnect/sqlite/docs/EFCore-Database-First-NET-Core.html)
را مطالعه کنید.

### Code first

در این روش بر خلاف روش قبلی ابتدا مدل‌ها که همان کلاس‌های اشیاء ما هستند ایجاد می‌شوند. خوبی این روش این است که اگر نیاز به تغییر دیتابیس باشد تنها با تغییری جزئی کانفیگ می‌توان پایگاه‌داده را تغییر داد.

برای درک بهتر Code first
بهتر است در ابتدا یک پروژه ساده را پیاده‌سازی کنید. از این رو سعی کنید پروژه [First EF Core Console Application](https://www.entityframeworktutorial.net/efcore/entity-framework-core-console-application.aspx)
را اجرا کنید.

### Linq

برای فراخوانی داده‌ها در EFCore
می‌تواند به راحتی از Linq
استفاده کنید و کوئری‌های خود را ایجاد کنید.

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
