---
title: Clean Code
description: ''
---

## مقدمه

در این فاز با مفاهیم و تکنیک‌های مختلفی برای افزایش کیفیت کد آشنا می‌شوید و کد فاز قبل را به یک کد بسیار با کیفیت تبدیل می‌کنید. سپس کد خود را با سایر کارآموزان به اشتراک می‌گذارید و از آن‌ها می‌خواهید کدتان را Review کنند.

## اهمیت Clean Code

در ابتدا در مورد دو سوال زیر فکر کنید و با هم تیمی خود بحث کنید:

1. چرا تمیز بودن کد و داشتن معماری خوب مهم است؟ چرا باید وقت و انرژی زیادی صرف طراحی و نوشتن کد تمیز شود؟
1. چرا این موضوع در ابعاد صنعتی اهمیت بسیار بیشتری پیدا می‌کند؟

:::note ‌
تلاش کنید **فقط با فکر خودتان و بحث با هم تیمی** به جواب سوالات بالا برسید تا ذهن شما برای مراحل بعد آماده شود.
:::

:::caution ‌
لطفا قبل از فکر کردن به این سوالات به سراغ مراحل بعدی و خواندن مقالات نروید!
:::

حال برای فهم دلایل اهمیت کد تمیز در صنعت، [The Importance of Clean Code](https://www.arcanys.com/blog/the-importance-of-clean-code)
را در جواب سوال اول و [Why software maintainability is crucial - TechHQ](https://techhq.com/2019/06/why-software-maintainability-is-crucial/)
را در جواب سوال دوم مطالعه کنید.

## Code Smell

یکی از راه‌های افزایش کیفیت کد، پیدا کردن نشانه‌های کد کثیف در برنامه و سپس Refactor
کردن آن است، به صورتی که نشانه‌های کد کثیف از بین بروند. به این نشانه‌ها [Code Smell](https://en.wikipedia.org/wiki/Code_smell)
می‌گوییم. در این مرحله در مورد Code Smellهای
زیر مطالعه کنید و مشخص کنید کدام یک از موارد زیر در کدی که برای پروژه جستجو به وجود آمده است؟

-   [Long Method](https://refactoring.guru/smells/long-method)
-   [Primitive Obsession](https://refactoring.guru/smells/primitive-obsession)
-   [Large Class](https://refactoring.guru/smells/large-class)
-   [Long Parameter List](https://refactoring.guru/smells/long-parameter-list)
-   [Temporary Field](https://refactoring.guru/smells/temporary-field)
-   [Duplicate Code](https://refactoring.guru/smells/duplicate-code)

## اصول S.O.L.I.D

یکی از **مهم‌ترین** مجموعه اصول در مهندسی نرم‌افزار، اصول پنج‌گانهٔ SOLID
می‌باشد.این اصول عبارت‌اند از:

1. **S**ingle Responsibility
1. **O**pen for Extension/Closed for Modification
1. **L**iskov Substitution
1. **I**nterface Segregation
1. **D**ependency Inversion

برای آشنایی با اصول SOLID لینک‌های زیر را مطالعه کنید:

-   [SOLID With .Net Core](https://www.c-sharpcorner.com/article/solid-with-net-core/)
-   [C# Best Practices : Dangers of Violating SOLID Principles in C#](https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/may/csharp-best-practices-dangers-of-violating-solid-principles-in-csharp)

:::tip‌
برای مطالعه بیشتر می‌توانید
[Mastering SOLID Principles in C#: A Practical Guide](https://www.syncfusion.com/blogs/post/mastering-solid-principles-csharp)
را مطالعه کنید.
:::

## Refactoring Techniques

برای Refactor
کردن بخش‌های مختلف کدتان و رفع Code Smellها
خلاقیت به خرج دهید یا به مجموعۀ [Refactoring Techniques](https://refactoring.guru/refactoring/techniques)
مراجعه کنید.

:::note ‌
مطالعۀ دقیق تمام موارد موجود در لینک مذکور نیاز نیست همین که به فهرست آن نگاه کنید و بعضی از آن‌ها را مرور کنید کافیست.
:::

## Code Review

از یک تیم دیگر بخواهید Pull Request
شما که در مرحله‌ی Refactor
ساخته‌اید را Review
کنند و بر اساس لیست Code Smellها
به شما بازخورد بدهند (روی Pull Request
کامنت بگذارند)، در این مرحله حتما از تیم‌های دیگر هم سراغ شما می‌آیند و می‌خواهند کدشان را Review
کنید، قبل از Review
کد دیگران، راهنماهای زیر را مطالعه کنید و Review
خود را بر اساس این راهنماها انجام دهید:

-   [What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
-   [Effective Code Reviews: Code Review Checklist](https://github.com/nyu-cds/effective-code-reviews/blob/master/_episodes/03-checklist.md)

:::note ‌
با توجه به این که در این فاز صحبتی در مورد انواع تست به خصوص Unit Test نکردیم قسمت‌هایی از لینک‌های بالا که در مورد تست است را نادیده بگیرید.
:::
