---
title: Everything as Code Concept
description: ''
---

## مقدمه
از جمله وظایف تیم دواپس، توسعه محیطی برای راحت‌تر شدن فرایندهای مربوط به توسعه و استقرار نرم‌افزار است. این محیط ممکن است بخش‌های مختلف و گوناگونی داشته باشد از قبیل پایپلاین
CI/CD ، 
زیرساخت‌ موردنیار ، کانفیگ‌ها و تنظیمات بخش‌های مختلف، 
Policy
های تعریف شده و ...
برای توسعه و نگهداری بخش‌های ذکر شده که همانطور که قابل مشاهده است کم تعداد هم نیستند نیاز به راهکارهایی داریم که با آن‌ها به صورت سیستماتیک‌تر و بهینه‌تر برخورد کنیم.  
برای روشن‌تر شدن مسئله یک سازمان را فرض کنید که در روزهای اولیه فعالیت خود، برای ارائه خدماتش به مشتریان از یک سرور ویندوزی استفاده می‌کرد که توسط مسئول 
Operation
سازمان، فرایند استقرار محصول و تنظیمات لازم بر روی آن اعمال شده بود. با گذشت زمان و تغییر مسئول
Operation ، 
سازمان نیاز دارد تا تعداد سرورهای خود را برای بهبود خدمات خود به مشتریان، که تعدادشان بیشتر شده است، افزایش دهد. مسئول جدید بنابر صلاحدید خود تعدادی سرور لینوکسی تهیه کرده و فرایند استقرار و تنظیمات لازم را روی آن‌ها اعمال می‌کند. زمان می‌گذرد و فردی به عنوان مسئول جدید
Operation
وارد این سازمان می‌شود. به نظر شما چه چالش‌هایی ممکن است برای این فرد به وجود بیاید؟  در صورت بروز هرگونه مشکل مسئول جدید باید کارهای و تنظیماتی را که افراد قبلی در محیط‌های مختلف انجام داده‌اند و هرکدام طبق سلیقه شخصی و فارغ از هرگونه نظم و یک‌پارچگی هستند را بررسی کند و تغییراتی را اعمال کند که ممکن است مشکل را برطرف کنند اما شرایط را از وضع فعلی نیز بدتر می‌کنند. علاوه بر این موضوع،  کارها و زحمات نفرات قبلی نیز قابل استفاده مجدد نیستند. برای مثال اگر سازمان مجددا نیاز به افزایش تعداد سرورها داشته باشد فرایندهای استقرار و تنظیم سرورها باید از سر گرفته شوند.  
وجود چنین مشکلاتی و همچنین مسائلی از قبیل سخت بودن اتوماتیک کردن فرایندهای مربوط به فعالیت‌های ذکر شده، دشواری در 
Scalability ، 
ناتوانی در کنترل نسخه‌های مختلف و تغییرات به وجود آمده توسط افراد گوناگون در تنظیمات و زیرساخت و از این دست موارد باعث پیدایش مفهومی شد که با عنوان
Everything as Code
و یا به اختصار
(EaC)
شناخته می‌شود.  
این مفهوم یک تکنولوژی خاص نیست که توسط یک شرکت عرضه و پشتیبانی شود بلکه یک فلسفه و راهکار است. 
Everything as Code
به دنبال این موضوع است که به مراحل مختلف چرخه زندگی یک نرم‌افزار هم مانند کد آن نرم‌افزار نگاه کنیم و بتوانیم اصولی مانند استفاده از ورژن کنترل و تست کردن را در آن مراحل هم بکار بگیریم و این چرخه را بهبود بخشیم. این مراحل می‌توانند زیرساخت شبکه‌ای نرم‌افزار، تنظیمات و یا حتی مستندات آن را هم شامل شوند.
برای آشنایی بیشتر با این مفهوم می‌توانید از 
[این لینک](https://www.cloudbees.com/blog/what-is-everything-as-code-eac)
استفاده کنید.  
 
 ## مزایای استفاده از EaC  
 از جمله مزایای استفاده از این مفهوم می‌توان به موارد زیر اشاره کرد:  
 * Traceability: استفاده از یک ورژن کنترل مانند
 Git
 برای ذخیره فایل‌های مربوط به تنظیمات، به شما این امکان را می‌دهد که در هرلحظه بدانید کانفیگ مدنظرتان در چه زمانی، توسط چه کسی و به چه دلیلی عوض شده است. همچنین امکان بازگردانی تغییرات نیز فراهم است.  
 * Testability: قابلیت تست کردن بخش‌های مختلف زیرساخت و تنظیمات آن، این اطمینان خاطر را به شما می‌دهد که تغییرات جدیدی که انجام دادید در بخش‌های دیگر اختلالی ایجاد نمی‌کنند و خود نیز به درستی کار می‌کنند و عملکردی مطابق انتظارات شما دارند.
 * Automation: با استفاده از این مفهوم می‌توانید بسیاری از کارهای خود را به صورت اتوماتیک و با استفاده از ابزارهای موجود و یا اسکریپت‌های مختلف انجام دهید و با استفاده از این کار نرخ خطاهای انسانی و همچنین زمان و هزینه‌های موردنیاز برای انجام کارهای تکراری را به حداقل برسانید.  
 علاوه بر موارد ذکر شده موارد دیگری نیز وجود دارند برای مثال با استفاده از این مفهوم شما دیگر از این بابت که ممکن است با سوختن یک سرور تنظیمات آن را نیز از دست بدهید نگرانی خاصی ندارید.  
 یکی دیگر از مزیت‌های استفاده از مفهوم 
 Everything as Code
 این است که استفاده از آن مخصوصا در تیم‌های نرم‌افزاری که از هر دو بخش
 Dev
 و
 Ops
 تشکیل شده‌اند باعث ایجاد یک زبان مشترک و این حس می‌شود که تمام قسمت‌های محصول همزمان باهم در حال توسعه و پیشرفت هستند.  

## جنبه‌های مختلف EaC و ابزارها
مفهوم 
Everything as Code
شامل جنبه‌های مختلفی است که در هرکدام از این بخش‌ها از ابزارهای مخصوصی استفاده می‌شود تا تیم‌ها بتوانند در یک پروژه نرم‌افزاری تمامی جنبه‌های زیرساخت، پیکربندی و فرایندهای نرم‌افزاری را به صورت کد مدیریت و بررسی کنند. در ادامه برخی از مهم‌ترین جنبه‌ها و ابزارهای
EaC
مختصرا بررسی و توضیح داده‌شده‌اند.

1. Infrastructure as Code (IaC)
 عبارت است از تعریف و مدیریت زیرساخت‌های مورد نیاز به همان صورتی که کد نرم‌افزار نیز تعریف و مدیریت می‌شود.  
 * Terraform: یک ابزار قدرتمند برای مدیریت زیرساخت به صورت کد است که توسط
 HashiCorp
 توسعه یافته است این ابزار به شما اجازه می‌دهد تا زیرساخت‌های خود را با استفاده از فایل‌های متنی تعریف و آن‌ها را به صورت خودکار ایجاد، مدیریت و به‌روزرسانی کنید. این ابزار از یک زبان پیکربندی ساده به نام
 HCL(HashiCorp Configuration Language)
 استفاده می‌کند و با اکثر سرویس‌دهندگان ابری نیز سازگار است.  
2. Configuration Management
این ابزارها برای مدیریت و پیکربندی سیستم‌ها و نرم‌افزارها به صورت خودکار و یکپارچه استفاده می‌شوند. هدف اصلی آن‌ها کاهش زمان و خطاهای انسانی در مدیریت پیکربندی‌ها و اعمال تغییرات است.  
 * Ansible: یک ابزار متن‌باز برای پیکربندی و مدیریت خودکار سرورهاست که توسط
 RedHat
 توسعه یافته است. این ابزار از فایل‌های
 YAML
 برای نوشتن
 Playbook
 ها استفاده می‌کند که مجموعه‌ای از وظایف
 (Task)
 را تعریف می‌کنند. این ابزار بدون نیاز به نصب هیچگونه 
 Agent
 روی سرورها و با استفاده از
 SSH
 کار می‌کند.
 Ansible
 به شما امکان مدیریت و به‌روزرسانی پیکربندی‌ها و نرم‌افزارها را به صورت خودکار و مرکزی می‌دهد.
 * Puppet
 و
 Chef
 از دیگر ابزارهای این حوزه هستند.  
3. Pipeline as Code
عبارت است از تعریف پایپلاین
CI/CD
چرخه زندگی نرم‌افزار به صورت کد و فایل‌های متنی.  
 * Jenkins: یک ابزار متن‌باز برای اتوماتیک کردن فرایندهای
 CI/CD
 است که به شما اجازه می‌دهد تا پایپلاین‌های مختلف نرم‌افزار را ایجاد و مدیریت کنید. این ابزار از فایل‌های پیکربندی به نام
 jenkinsfile
 استفاده می‌کند که به صورت کد نوشته شده و مراحل مختلف پایپلاین را تعریف می‌کنند.
 * GitLab CI/CD: این ابزار نیز برای مدیریت پایپلاین‌های
 CI/CD
 استفاده می‌شود و از فایل‌هایی با فرمت
 YAML
 برای تعریف و مدیریت آن‌ها استفاده می‌کند.

 در این آموزش سعی شد تا شما با مفهوم
 Everything as Code 
 آشنا شوید. برای آشنایی بیشتر و عمیق‌تر با این مفهوم، مطالعه لینک‌های زیر توصیه می‌شود.  

 [What is Everything as Code?](https://octopus.com/blog/what-is-everything-as-code)  
 [Everything as Code](https://octopus.com/blog/what-is-everything-as-code)  
