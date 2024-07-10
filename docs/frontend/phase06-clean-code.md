---
title: Clean Code
description: با کد تمیز، به دنیای کدنویسیِ منظم، خوانا و قابل فهم قدم بگذارید.
---

## مقدمه

در این فاز مجموعه‌ای از
Best Practice
ها و
Anti-pattern
ها را جمع‌آوری کرده‌ایم
تا شما بتوانید از آن‌ها برای نوشتن کد تمیز کمک بگیرید.
سعی می‌کنیم هم‌زمان با پیشرفت شما در این دوره و همچنین سپری‌شدن دوره‌های آینده،
این مجموعه را توسعه دهیم تا با گذشت زمان تبدیل به مرجع مناسبی برای شما و دیگر توسعه‌دهندگان شود.

-   نوشتن کد تمیز چه مزایایی دارد؟
-   از چه اصول و از چه تکنیک‌هایی برای دست‌یابی به کد تمیز می‌توان استفاده کرد؟
-   کد تمیز به طور خاص در فرانت‌اند دارای چه ویژگی‌هایی است؟

---

## یادگیری

### Clean Code

شاید برای شما هم پیش آمده باشد که بعد از چند ماه به پروژه‌ای که خودتان آن را توسعه داده‌اید سر بزنید
و احساس کنید تقریباً هیچ‌چیز از آن متوجه نمی‌شوید.
زمانی که بر روی پروژه‌ای کوچک، به صورت انفرادی کار می‌کنید
شاید هیچ‌وقت به اهمیت کد تمیز پی نبرید؛
اما اگر همین پروژه، در آینده احتیاج به توسعه داشته باشید
یا اگر به همراه یک تیم بر روی آن کار کنید،
بدونِ داشتنِ کد تمیز، محکوم به شکست خواهید بود.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [The Importance of Clean Code](https://www.arcanys.com/blog/the-importance-of-clean-code/)
-   [Why software maintainability is crucial](https://techhq.com/2019/06/why-software-maintainability-is-crucial/)

---

### Code Smells

یکی از راه‌های افزایش کیفیت کد، پیدا کردن نشانه‌های کد کثیف و بازنویسی آن‌هاست.
به این نشانه‌ها
[Code Smell](https://en.wikipedia.org/wiki/Code_smell)
می‌گوییم.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Refactoring Guru - Code Smells](https://refactoring.guru/refactoring/smells)

---

### S.O.L.I.D

یکی از مهم‌ترین مجموعه اصول در برنامه‌نویسی،
اصول پنج‌گانهٔ SOLID می‌باشد که عبارت است از:

1. **S**ingle Responsibility
1. **O**pen for Extension/Closed for Modification
1. **L**iskov Substitution
1. **I**nterface Segregation
1. **D**ependency Inversion

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Medium - S.O.L.I.D in TypeScript](https://medium.com/@erashu212/s-o-l-i-d-in-typescript-c0e4fe6c345a)
-   [Medium - SOLID Principles in TypeScript](https://blog.bitsrc.io/solid-principles-in-typescript-153e6923ffdb)
-   [Medium - Brutally SOLID Typescript](https://itnext.io/brutally-solid-typescript-ba745585f440)

---

### Refactoring Techniques

با گذشت زمان و کسب تجربه توسط توسعه‌دهندگان،
مجموعه‌ای از تکنیک‌ها برای تمیزسازی کد فراهم شده که تقریباً برای تمام نیازهای شما راه‌حل دارد.
پیشنهاد می‌کنیم فعلاً به صورت روزنامه‌وار توضیحات هر تکنیک را مطالعه کنید
و فقط زمانی که به آن احتیاج پیدا کردید، آن را به طور کامل بخوانید.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Refactoring Guru - Refactoring Techniques](https://refactoring.guru/refactoring/techniques/)

---

### Open-Source

#### README.md

فایل
`README.md`
معرفی‌نامۀ پروژۀ شماست.
تمام مواردی که یک کاربر بیرونی احتیاج دارد در مورد پروژه بداند
باید در این فایل آورده شوند یا حداقل به جایی که در مورد آن‌ها توضیح داده شده است،
اشاره شود.

پیشنهاد می‌کنیم موارد زیر را حتماً در این فایل بیاورید:

-   نام پروژه
-   لوگو شخص، تیم یا شرکت
-   لینک به سایت اصلی پروژه
-   وضعیت CI/CD، بالا بودن سرورها، پاس‌شدن تست‌ها و موارد مشابه
-   توضیحی چند خطی و کوتاه در مورد کاربرد پروژه
-   اهداف پروژه و نیازهایی که می‌تواند برطرف کند
-   پیش‌نیازهای استفاده از پروژه
-   لینک دانلود فایل نهایی/اجرایی پروژه
-   باگ‌های احتمالی و مواردی که کاربر باید به آن‌ها توجه کند
-   قابلیت‌های فعلی و نحوۀ استفاده از آن‌ها
-   مستندات کامل یا لینک به جایی که آن‌ها را قرار داده‌اید
-   برنامه‌های آینده و قابلیت‌هایی که می‌خواهید به پروژه اضافه کنید
-   شرایط پشتیبانی و نحوۀ ثبت درخواست
-   توضیح اجمالی، دعوت به مشارکت و لینک به
    `CONTRIBUTING.md`
-   لینک به صفحات پروژه در شبکه‌های اجتماعی
-   معرفی اجمالی توسعه‌دهندگان پروژه و لینک به صفحات مرتبط آن‌ها در شبکه‌های اجتماعی

#### CONTRIBUTING.md

در دنیای
Open-Source
، آدم‌های زیادی پیدا می‌شوند که به طور رایگان بخواهند به شما کمک کنند؛
بنابراین شما باید با فراهم‌کردن فایل
`CONTRIBUTING.md`
مناسب، آن‌ها را در این راه یاری کنید.

پیشنهاد می‌کنیم موارد زیر را حتماً در این فایل بیاورید:

-   پیشنهاد برای چک‌کردن لیست
    Issue
    های فعلی و جلوگیری از ثبت
    Issue
    تکراری
-   لیست قابلیت‌هایی که دوست دارید توسط دیگران به پروژه اضافه شوند
-   لیست قابلیت‌هایی که دوست ندارید به پروژه اضافه شوند
-   لیست باگ‌هایی که دوست دارید توسط دیگران حل شوند
-   لیست باگ‌هایی که از وجود آن‌ها باخبرید اما قصد برطرف‌کردن آن‌ها را ندارید
-   مراحل ثبت باگ، درخواست امکانات جدید، ارتباط با توسعه‌دهندگان و موارد مشابه
-   پیش‌نیازهای راه‌اندازی پروژه بر روی سیستم شخص
-   نحوۀ
    Clone
    کردن و راه‌اندازی پروژه به صورت خط به خط با بیشترین جزئیات ممکن
-   قوانین کدنویسی که در پروژه رعایت می‌کنید
-   قواعد نوشتن
    Commit Message

---

### IDE

استفاده از
Text Editor
هایی مانند
VS Code
فقط برای پروژه‌های کوچک مناسب است.
برای پروژه‌های بزرگ، مخصوصاً پروژه‌هایی که به صورت تیمی آن‌ها را توسعه می‌دهید،
حتماً از
WebStorm
استفاده کنید.

#### ESLint

برای فعال‌کردن تنظیمات
ESLint
از لینک زیر استفاده کنید:

-   [How To Lint and Format Code with ESLint in Visual Studio Code](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)


#### Prettier

برای فعال‌کردن تنظیمات
Prettier
از لینک زیر استفاده کنید:

-   [How To Format Code with Prettier in Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)

#### Stylelint

معمولاً هر شخص زمانی که کد
CSS
می‌نویسد، برای آن قواعدی در نظر می‌گیرد؛
به‌عنوان مثال ترتیب و اولویت
Property
های مختلف یا استفاده از یک فرمت رنگ خاص.
اما زمانی که به صورت تیمی بر روی پروژه‌ای کار می‌کنید،
بهتر است این قواعد به صورت عمومی اعمال شوند
تا کدی که در نهایت نوشته می‌شود برای همه قابل‌فهم و در یک چارچوب باشد.
Stylelint
ابزاری است که به ما امکان تعریف چنین قواعدی را می‌دهد.

##### Setup

برای افزودن
Stylelint
به پروژۀ انگولاری خود، از دستور زیر استفاده کنید:

```shell
npm install -D stylelint stylelint-config-standard-scss stylelint-config-prettier-scss stylelint-order postcss
```

با اجرای دستور بالا علاوه بر پکیج
stylelint
چند پکیج دیگر نیز به پروژه اضافه می‌شوند
که به ترتیب مربوط به پشتیبانی از
SCSS
، جلوگیری از تداخل با
Prettier
، ترتیب
Property
ها و
PostCSS
می‌باشند.

برای تنظیم قواعد، یک فایل با نام
`stylelintrc.json.`
بسازید.
ما پیشنهاد می‌کنیم از قواعد زیر استفاده کنید:

```json
{
    "extends": ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
    "plugins": ["stylelint-order"],
    "rules": {
        "color-named": "never",
        "color-no-hex": true,
        "custom-property-empty-line-before": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-empty-line-before": null,
        "no-descending-specificity": null,
        "no-empty-source": null,
        "order/order": ["custom-properties", "declarations", "rules"],
        "order/properties-order": [
            {
                "groupName": "reset",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["all"]
            },
            {
                "groupName": "content",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["content"]
            },
            {
                "groupName": "parent-related",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "order",
                    "flex",
                    "flex-grow",
                    "flex-shrink",
                    "grid-area",
                    "align-self",
                    "justify-self",
                    "counter-increment",
                    "counter-reset"
                ]
            },
            {
                "groupName": "color",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "background",
                    "background-attachment",
                    "background-blend-mode",
                    "background-clip",
                    "background-color",
                    "background-image",
                    "background-origin",
                    "background-position",
                    "background-repeat",
                    "background-size",
                    "color",
                    "accent-color",
                    "fill",
                    "box-shadow",
                    "mix-blend-mode",
                    "opacity",
                    "visibility"
                ]
            },
            {
                "groupName": "filter",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["filter", "backdrop-filter"]
            },
            {
                "groupName": "mask",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "mask",
                    "mask-clip",
                    "mask-composite",
                    "mask-image",
                    "mask-mode",
                    "mask-origin",
                    "mask-position",
                    "mask-repeat",
                    "mask-size",
                    "mask-type"
                ]
            },
            {
                "groupName": "box",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["direction", "box-sizing"]
            },
            {
                "groupName": "position",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "position",
                    "isolation",
                    "inset",
                    "inset-block",
                    "inset-block-start",
                    "inset-block-end",
                    "inset-inline",
                    "inset-inline-start",
                    "inset-inline-end",
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "overflow",
                    "overflow-block",
                    "overflow-inline",
                    "overflow-x",
                    "overflow-y",
                    "overflow-wrap",
                    "z-index"
                ]
            },
            {
                "groupName": "display",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "display",
                    "flex-basis",
                    "flex-direction",
                    "flex-flow",
                    "flex-wrap",
                    "grid",
                    "grid-auto-columns",
                    "grid-auto-flow",
                    "grid-auto-rows",
                    "grid-column",
                    "grid-column-end",
                    "grid-column-gap",
                    "grid-column-start",
                    "grid-row",
                    "grid-row-end",
                    "grid-row-gap",
                    "grid-row-start",
                    "grid-template",
                    "grid-template-areas",
                    "grid-template-columns",
                    "grid-template-rows",
                    "columns",
                    "place-content",
                    "place-items",
                    "align-content",
                    "align-items",
                    "justify-content",
                    "justify-items",
                    "gap",
                    "grid-gap",
                    "column-gap",
                    "row-gap"
                ]
            },
            {
                "groupName": "list",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["list-style", "list-style-image", "list-style-position", "list-style-type"]
            },
            {
                "groupName": "size",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "min-block-size",
                    "block-size",
                    "max-block-size",
                    "min-inline-size",
                    "inline-size",
                    "max-inline-size",
                    "min-width",
                    "width",
                    "max-width",
                    "min-height",
                    "height",
                    "max-height",
                    "aspect-ratio",
                    "resize",
                    "object-fit",
                    "object-position",
                    "scroll-behavior"
                ]
            },
            {
                "groupName": "scroll",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["scroll-behavior"]
            },
            {
                "groupName": "box-model",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "margin",
                    "margin-block",
                    "margin-block-start",
                    "margin-block-end",
                    "margin-inline",
                    "margin-inline-start",
                    "margin-inline-end",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "padding-block",
                    "padding-block-start",
                    "padding-block-end",
                    "padding-inline",
                    "padding-inline-start",
                    "padding-inline-end",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left"
                ]
            },
            {
                "groupName": "border",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "border",
                    "border-block",
                    "border-block-color",
                    "border-block-style",
                    "border-block-width",
                    "border-block-start",
                    "border-block-start-color",
                    "border-block-start-style",
                    "border-block-start-width",
                    "border-inline",
                    "border-inline-color",
                    "border-inline-style",
                    "border-inline-width",
                    "border-inline-start",
                    "border-inline-start-color",
                    "border-inline-start-style",
                    "border-inline-start-width",
                    "border-top",
                    "border-top-color",
                    "border-top-style",
                    "border-top-width",
                    "border-right",
                    "border-right-color",
                    "border-right-style",
                    "border-right-width",
                    "border-bottom",
                    "border-bottom-color",
                    "border-bottom-style",
                    "border-bottom-width",
                    "border-left",
                    "border-left-color",
                    "border-left-style",
                    "border-left-width",
                    "border-collapse",
                    "border-color",
                    "border-image",
                    "border-image-outset",
                    "border-image-repeat",
                    "border-image-slice",
                    "border-image-source",
                    "border-image-width",
                    "border-radius",
                    "border-start-start-radius",
                    "border-start-end-radius",
                    "border-end-end-radius",
                    "border-end-start-radius",
                    "border-top-right-radius",
                    "border-bottom-right-radius",
                    "border-bottom-left-radius",
                    "border-top-left-radius",
                    "border-spacing",
                    "border-style",
                    "border-width"
                ]
            },
            {
                "groupName": "outline",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["outline", "outline-color", "outline-offset", "outline-style", "outline-width"]
            },
            {
                "groupName": "transform",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["transform", "transform-origin", "transform-style"]
            },
            {
                "groupName": "clip-path",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["clip-path"]
            },
            {
                "groupName": "font",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "font",
                    "font-family",
                    "font-kerning",
                    "font-language-override",
                    "font-size",
                    "font-size-adjust",
                    "font-stretch",
                    "font-style",
                    "font-synthesis",
                    "font-variant",
                    "font-variant-alternates",
                    "font-variant-caps",
                    "font-variant-east-asian",
                    "font-variant-ligatures",
                    "font-variant-numeric",
                    "font-variant-position",
                    "font-weight"
                ]
            },
            {
                "groupName": "text",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "text-align",
                    "text-align-last",
                    "text-combine-upright",
                    "text-decoration",
                    "text-decoration-color",
                    "text-decoration-line",
                    "text-decoration-style",
                    "text-decoration-thickness",
                    "text-emphasis",
                    "text-indent",
                    "text-justify",
                    "text-orientation",
                    "text-overflow",
                    "text-shadow",
                    "text-transform",
                    "text-underline-position",
                    "letter-spacing",
                    "line-break",
                    "line-height",
                    "vertical-align",
                    "white-space",
                    "word-break",
                    "word-spacing",
                    "word-wrap",
                    "writing-mode"
                ]
            },
            {
                "groupName": "print",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["page-break-after", "page-break-before", "page-break-inside"]
            },
            {
                "groupName": "3d",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["perspective", "perspective-origin", "backface-visibility"]
            },
            {
                "groupName": "transition",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "transition",
                    "transition-delay",
                    "transition-duration",
                    "transition-property",
                    "transition-timing-function"
                ]
            },
            {
                "groupName": "animation",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "animation",
                    "animation-delay",
                    "animation-direction",
                    "animation-duration",
                    "animation-fill-mode",
                    "animation-iteration-count",
                    "animation-name",
                    "animation-play-state",
                    "animation-timing-function"
                ]
            },
            {
                "groupName": "cursor & pointer",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": ["cursor", "pointer-events", "user-select"]
            }
        ]
    }
}
```

سعی کرده‌ایم لیست کاملی از
Property
ها را در این فایل فراهم کنیم؛
اما به مرور زمان، نقص‌های احتمالی این فایل را ویرایش می‌کنیم.

فراموش نکنید مانند فایل‌های
`gitignore.`
و
`prettierignore.`
،
محتویات فایل
`stylelintignore.`
را نیز بروز کنید.

##### IDE Configurations

برای فعال‌کردن تنظیمات
Stylelint
مراحل زیر را طی کنید:

1. از بالا-چپ بر روی
   `File`
   و سپس
   `Settings`
   کلیک کنید تا پنجرۀ تنظیمات باز شود
2. عبارت
   `Stylelint`
   را در باکس بالا-چپ جست‌وجو کنید
3. از قسمت سمت چپ بر روی گزینۀ
   `Languages & Frameworks > Style Sheets > Stylelint`
   کلیک کنید
4. تیک گزینۀ
   `Enable`
   را فعال کنید
5. از قسمت سمت راست عبارت مقابل
   `Run for files`
   را به عبارت زیر تغییر دهید
   `{**/*,*}.{scss}`

##### Scripts

برای چک‌کردن خطاهای احتمالی یا برطرف کردن آن‌ها به‌صورت خودکار، می‌توانید از دستورات زیر استفاده کنید:

```shell
npx stylelint "**/*.scss"
npx stylelint "**/*.scss" --fix
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Stylelint](https://stylelint.io/)
-   [stylelint-order](https://www.npmjs.com/package/stylelint-order/)

---

### General

#### Download Size

گاهی اوقات مشاهده می‌شود که بعضی از توسعه‌دهندگان از فایل‌های حجیمی در پروژۀ خود استفاده می‌کنند
که نه‌تنها مزیت خاصی ندارند، بکله باعث کند شدن سایت می‌شوند و حجم زیادی از اینترنت کاربر را اشغال می‌کنند.

پیشنهاد می‌کنیم برای کاهش حجم عکس‌ها از سایت
[Squoosh](https://squoosh.app/)
استفاده کنید.
همچنین به طور کلی حجم فایل‌های
`svg`
از فرمت‌های دیگر کمتر است،
بنابراین سعی کنید تا جای ممکن از این فرمت استفاده کنید.
در صورتی که عکس شما به صورت
Raster
بود و امکان استفاده از
`svg`
را نداشتید، پیشنهاد ما فرمت
`webp`
می‌باشد.

به طور کلی توصیه می‌کنیم تا جای ممکن از ویدئو استفاده نکنید.

#### Comment

زمانی که در حال توسعۀ پروژه هستید، ممکن است بخواهید به‌طور موقت قسمتی از کد را کامنت کنید؛
این مورد به تنهایی مشکلی ندارد اما زمانی که خواستید کد را بر روی نسخۀ
`master` یا `main`
ببرید،
حتماً کامنت‌های اضافی را پاک کنید.
همچنین به طور کلی زمانی که مجبور شدید برای توضیح قسمتی از کد، از کامنت استفاده کنید،
احتمالاً کدی که نوشتید تمیز نیست؛ سعی کنید همیشه کدی بنویسید که بدونِ نیاز به توضیحات، قابل‌فهم باشد.

#### Unicode Characters

بعضاً مشاهده می‌شود که توسعه‌دهندگان برای نمایش اعداد فارسی از کاراکترهای
`۰۱۲۳۴۵۶۷۸۹`
استفاده می‌کنند؛
ما پیشنهاد می‌کنیم به‌هیچ‌وجه چنین کاری نکنید؛
در عوض از فونتی استفاده کنید که کاراکترهای
`0123456789`
را به شکل درست نمایش دهد.

---

### CSS

#### Reset

مرورگرهای مختلف، استایل‌های پیش‌فرض متفاوتی برای المان‌های مختلف دارند
که این موضوع باعث بروز مشکلات متعددی در روند توسعه می‌شود؛
به‌عنوان مثال ممکن است ظاهر سایت شما در یک مرورگر خاص دقیقاً همان‌طور باشد که می‌خواهید
اما در یک مرورگر دیگر کاملاً به‌هم‌ریخته باشد.

برای حل این مشکل
Reset
های متعددی وجود دارد
اما ما در اینجا از ساده‌ترین آن‌ها استفاده می‌کنیم:

```css
*,
*::before,
*::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
}
```

#### BEM

یکی از معروف‌ترین و محبوب‌ترین متدولوژی‌های موجود که در نام‌گذاری المان‌ها استفاده می‌شود،
BEM
است.
با استفاده از این متدولوژی می‌توانید صرفاً با نگاه‌کردن به اسم یک المان، ساختاری که در آن قرار دارد را متوجه شوید.
همچنین از آن‌جایی که برای هر المان از یک کلاس مشخص استفاده می‌کنید، به مشکلات مربوط به
Specificity
برنخواهید خورد.

استفاده از
BEM
در
`SCSS`
بسیار راحت است:

```scss
.card {
    &__header {
        &__icon {
            // ...
        }

        &__title {
            // ...
        }
    }

    &--primay {
        // ...
    }
}
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Get BEM - Introduction](http://getbem.com/introduction/)
-   [Get BEM - Naming](http://getbem.com/naming/)
-   ['Why BEM?' in a nutshell](https://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/)

#### Color Syntax

در
CSS
به طور کلی از 4 روش مختلف می‌توان رنگ یک المان را تعیین کرد که در ادامه به مقایسۀ آن‌ها می‌پردازیم.

##### Names

شاید به نظر برسد بهترین راه برای مشخص‌کردن یک رنگ، استفاده از اسم آن است.
برای رنگ‌هایی که به طور معمول با آن‌ها سروکار داریم و اسم آن‌ها را می‌دانیم،
این قضیه صادق است؛
اما
CSS
دارای بیش از 100 رنگ است که تعداد زیادی از آن‌ها برای توسعه‌دهندگان،
به خصوص کسانی که زبان مادری آن‌ها انگلیسی نیست،
ناآشنا هستند.
از طرفی حتی در مورد رنگ‌هایی که اسم آن‌ها را می‌دانیم،
نمی‌توانیم به طور دقیق میزان پُررنگ یا کم‌رنگ‌بودن آن‌ها را تشخیص دهیم.
به‌عنوان مثال تفاوت رنگ‌های
`pink`
و
`lightpink`
در چیست؟
یا کدام‌یک از رنگ‌های
`hotpink`
و
`deeppink`
پُررنگ‌تر است؟

البته این نوع رنگ‌ها کاملاً هم بلااستفاده نیستند،
بلکه بعضاً برای زمانی که صرفاً به‌دنبال تست‌کردن پروژه یا شناسایی باگ هستید،
بهترین گزینه‌اند.

##### HEX

این فرمت از سه عدد در مبنای 16 تشکیل شده است؛
آیا برای اثبات نابهینه‌بودن این فرمت احتیاج به توضیح بیشتری هست؟
جدای از آنکه تشخیص یک عدد مبنای 16 و محاسبه ذهنی برای تبدیل آن به مبنای 10 کاری دشوار است،
این فرمت دارای مشکل بزرگ دیگری است که در قسمت
RGB
به آن اشاره می‌کنیم.

##### RGB

این فرمت از سه عدد در مبنای 10 تشکیل شده است که به ترتیب نشان‌دهندۀ رنگ‌های قرمز، سبز و آبی هستند.
این اعداد از 0 تا 255 می‌توانند متغیر باشند
و هر چه عدد متناظر یک رنگ بزرگ‌تر باشد، مقدار بیشتری از آن در رنگ نهایی استفاده خواهد شد.

مشکل این فرمت آن است که نمی‌توان رنگ فعلی را به راحتی تشخیص داد.
به‌عنوان مثال
`rgb(48, 15, 16)`
مربوط به چه رنگی است؟
درست است که می‌توان متوجه شد رنگ قرمز تقریباً 3 برابر رنگ‌های سبز و آبی استفاده شده است،
اما اینکه رنگ نهایی چه چیزی است، بسیار دشوار است.
همچنین ساخت نسخه‌های روشن‌تر یا تیره‌تر با استفاده از این فرمت به هیچ عنوان ساده نیست.

##### HSL

این فرمت از سه قسمت تشکیل شده است که به ترتیب یک زاویه در
Color Wheel
،
درصد استفاده از رنگ پایه
و درصد روشنایی رنگ نهایی را مشخص می‌کنند.
اگر
Color Wheel
و زاویۀ رنگ‌های اصلی را حفظ کنید،
به راحتی می‌توانید رنگی که با این فرمت ساخته می‌شود را تشخیص دهید.
حفظ‌کردن
Color Wheel
بسیار ساده‌تر از چیزی است که فکر می‌کنید؛
صرفاً کافی است رنگ‌های رنگین‌کمان را بلد باشد:

-   قرمز: 0
-   نارنجی: 30
-   زرد: 60
-   سبز: 120
-   آبی: 180
-   نیلی: 240
-   بنفش: 270

ایجاد قالب‌های رنگی با استفاده از این فرمت بسیار ساده است؛
از قسمت اول برای تغییر رنگ پایه می‌توانید استفاده کنید و صرفاً با افزودن 180 درجه، به رنگ مکمل می‌رسید؛
قسمت دوم برای تعیین میزان روشنایی در قالب‌های
Light و Dark
کاربرد دارد؛
قسمت سوم مربوط به روشنایی رنگ نهایی است و می‌توانید از آن برای ایجاد رنگ
State
هایی مانند
Hover
استفاده کنید.

```css
:root {
    --primary-hue: 220;
    --secondary-hue: 260;
    --success-hue: 120;
    --warning-hue: 20;
    --danger-hue: 0;

    --color-gray-98: hsl(0, 0%, 98%);
    --color-gray-90: hsl(0, 0%, 90%);
    --color-gray-80: hsl(0, 0%, 80%);
    --color-gray-70: hsl(0, 0%, 70%);
    --color-gray-40: hsl(0, 0%, 40%);
    --color-gray-30: hsl(0, 0%, 30%);
    --color-gray-20: hsl(0, 0%, 20%);
    --color-gray-10: hsl(0, 0%, 10%);

    --color--default-background: var(--color-gray-98);
    --color--default-foreground: var(--color-gray-10);

    --color--primary: hsl(var(--primary-hue), 100%, 56%);
    --color--primary-fade: hsl(var(--primary-hue), 100%, 96%);
    --color--primary-lighter: hsl(var(--primary-hue), 100%, 60%);
    --color--primary-darker: hsl(var(--primary-hue), 100%, 52%);
    --color--primary-opposite: var(--color-gray-98);

    --color--secondary: hsl(var(--secondary-hue), 50%, 50%);
    --color--secondary-fade: hsl(var(--secondary-hue), 100%, 90%);
    --color--secondary-lighter: hsl(var(--secondary-hue), 50%, 56%);
    --color--secondary-darker: hsl(var(--secondary-hue), 50%, 44%);
    --color--secondary-opposite: var(--color-gray-98);

    --color--warning: hsl(var(--warning-hue), 100%, 44%);
    --color--warning-fade: hsl(var(--warning-hue), 100%, 90%);
    --color--warning-lighter: hsl(var(--warning-hue), 100%, 50%);
    --color--warning-darker: hsl(var(--warning-hue), 100%, 40%);
    --color--warning-opposite: var(--color-gray-98);

    --color--success: hsl(var(--success-hue), 100%, 40%);
    --color--success-fade: hsl(var(--success-hue), 100%, 92%);
    --color--success-lighter: hsl(var(--success-hue), 100%, 44%);
    --color--success-darker: hsl(var(--success-hue), 100%, 36%);
    --color--success-opposite: var(--color-gray-98);

    --color--danger: hsl(var(--danger-hue), 100%, 36%);
    --color--danger-fade: hsl(var(--danger-hue), 100%, 90%);
    --color--danger-lighter: hsl(var(--danger-hue), 100%, 42%);
    --color--danger-darker: hsl(var(--danger-hue), 100%, 30%);
    --color--danger-opposite: var(--color-gray-98);
}
```

#### Font Management

##### Multiple Fonts

در کل پروژه فقط از یک فونت استفاده کنید.
کمتر پیش می‌آید استفاده از دو فونت مجزا، نتیجۀ مطلوبی داشته باشد؛
مخصوصاً برای سایت‌های فارسی.
اگر قسمتی از سایت شما فارسی و قسمت دیگر انگلیسی است، از دو فونت برای آن‌ها استفاده نکنید؛
بلکه به‌دنبال فونتی بگردید که هر دو را به خوبی نشان دهد.

ما فونت‌های فارسی رایگان زیر را پیشنهاد می‌کنیم:

-   [وزیرمتن](https://fonts.google.com/specimen/Vazirmatn)
-   [شبنم](https://rastikerdar.github.io/shabnam-font/)
-   [صمیم](http://rastikerdar.github.io/samim-font/)
-   [گندم](http://rastikerdar.github.io/gandom-font/)

##### font-family

استایل‌های مربوط به
`font-family`
را به
`*`
ندهید چراکه باعث بالا رفتن
Specificity
می‌شود
و در کار بعضی از کتابخانه‌ها مانند
Fontawesome
یا
Monaco Editor
خلل ایجاد می‌کند.
در عوض می‌توانید این استایل را به
`html`
بدهید.
از آنجایی که
`font`
از المان پدر به ارث می‌رسد،
تمام المان‌های شما فونت مورد نظر را خواهند داشت.
اما بعضی از المان‌ها مانند
`input`
و
`button`
احتیاج دارند که به طور دقیق فونت آن‌ها را مشخص کنید.

برای راحتی کار می‌توانید از کد زیر استفاده کنید:

```css
html {
    font-family: Poppins, sans-serif;
}

input,
label,
select,
textarea,
button,
fieldset,
legend,
datalist,
output,
option,
optgroup {
    font-family: inherit;
}
```

##### Generic Default Fonts

همیشه یک فونت پیش‌فرض مانند
`sans-serif`
را به آخر
`font-family`
اضافه کنید
تا در صورتی که به هر دلیلی فونت اصلی از کار افتاد،
مرورگر بتواند از فونت پیش‌فرض استفاده کند.
دقت کنید که فقط فونت‌های
Generic
می‌توانند به‌عنوان
Fallback
استفاده شوند؛ یعنی:

-   serif
-   sans-serif
-   cursive
-   fantasy
-   monospace

#### rem & px

همان‌طور که می‌دانید به طور پیش‌فرض هر
`rem` برابر با
`16px`
است.
این موضوع باعث می‌شود زمانی که می‌خواهید از
`rem`
استفاده کنید،
مجبور به انجام محاسبات نسبتاً سختی باشید که سرعت توسعه و از همه مهم‌تر خوانایی کد را کاهش می‌دهد.
برای حل این مشکل پیشنهاد می‌کنیم سایز فونت
`html`
را به
`%62.5`
تغییر دهید؛
با این کار هر
`rem`
برابر با
`10px`
خواهد شد.

#### Variables

ما پیشنهاد می‌کنیم همیشه به طور پیش‌فرض از متغیرهای
CSS
استفاده کنید
و تنها در صورتِ نیاز به متغیرهای
SCSS
رجوع کنید.

همچنین پیشنهاد می‌کنیم متغیرها را قبل از بقیۀ
Rule
ها تعریف کنید تا خوانایی کد بالا رود و از اشتباهات احتمالی جلوگیری شود:

```css
.item {
    --size: 10rem;
    --gap: 1rem;

    /* ... */
}
```

#### Transition/Animation Performance

در صورتی که فقط از
`transform`
و
`opacity`
برای انجام
Animation
های خود استفاده کنید،
فقط مرحله
Composite
اجرا می‌شود و مرورگر می‌تواند تمام کارها را بر عهدۀ
GPU
بگذارد.
بنابراین همیشه سعی کنید فقط از این دو
Property
استفاده کنید.

دقت کنید که در اینجا منظور تنها کلیدواژۀ
`animation`
یا
`keyframe`
نیست،
بلکه
`transition`
و به طور کلی هر راهی که بتوان با آن ظاهر یک المان را به تدریج عوض کرد، مد نظر است.

#### Zero Unit

در
CSS
زمانی که از عدد `0` استفاده می‌کنید،
بهتر است واحدی برای آن در نظر نگیرید.

```css
/* Bad */
.item {
    margin: 0rem auto;
}

/* Good */
.item {
    margin: 0 auto;
}
```

#### Logical Properties

اگر قبلاً بر روی پروژه‌ای کار کرده باشید که هم‌زمان باید از دو زبان انگلیسی و فارسی پشتیبانی می‌کرد،
قطعاً متوجه شده‌اید که نیاز است خیلی از استایل‌هایی که به راست یا چپ ربط دارند را عوض کنید.
به‌عنوان مثال اگر از
`margin-left`
در نسخۀ انگلیسی استفاده کردید،
باید در نسخۀ فارسی آن را به
`margin-right`
تغییر می‌دادید.
خوشبختانه در
CSS
برای حل این مشکل می‌توان از
Logical Properties
استفاده کنیم؛
در این صورت، مرورگر بر اساس
Direction
سایت، استایل‌ها را اعمال می‌کند.

در ادامه برای سایتی که
LTR
است، معادل چند
Property
پُر استفاده را می‌آوریم:

| Normal Property | Logical Property     |
| :-------------- | :------------------- |
| top             | inset-block-start    |
| bottom          | inset-block-end      |
| left            | inset-inline-start   |
| right           | inset-inline-end     |
| margin-top      | margin-block-start   |
| margin-bottom   | margin-block-end     |
| margin-left     | margin-inline-start  |
| margin-right    | margin-inline-end    |
| padding-top     | padding-block-start  |
| padding-bottom  | padding-block-end    |
| padding-left    | padding-inline-start |
| padding-right   | padding-inline-end   |
| height          | block-size           |
| min-height      | min-block-size       |
| max-height      | max-block-size       |
| width           | inline-size          |
| min-width       | min-inline-size      |
| max-width       | max-inline-size      |

هم‌چنین می‌توانید دو
Logical Property
را که هر دو
Inline
یا
Block
هستند، همزمان مقداردهی کنید.
برای روشن‌تر شدن موضوع، سه کد معادل زیر را در نظر بگیرید:

```css
.item {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

/* or */

.item {
    padding-block-start: 1rem;
    padding-block-end: 1rem;
}

/* or */

.item {
    padding-block: 1rem;
}
```

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [MDN - CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)

---

### Angular

#### Global Styles

Angular
برای استایل‌های
Global
شما، فایل
`styles.scss`
را فراهم کرده است؛
بنابراین هر زمان احتیاج داشتید استایلی بر روی تمام قسمت‌های سایت تاثیر بذارد،
فقط و فقط از این فایل استفاده کنید.
در این فایل می‌توانید هر المانی را استایل‌دهی کنید اما توصیه می‌کنیم صرفاً استایل‌های
Global
را در این فایل بگذارید
و برای استایل‌دهی به یک کامپوننت خاص، از فایل
SCSS
مربوط به همان کامپوننت استفاده کنید.
همچنین از این فایل برای تعریف کلاس‌های کمکی یا متغیرهای
CSS
نیز می‌توانید استفاده کنید.

---

## پروژه

از این پس، برای تمام
PR
هایی که می‌زنید،
از هر دو عضوِ یکی از تیم‌ها درخواست کنید تا کد شما را جداگانه
Review
کنند؛
بعد از اینکه
Approve
کردند، به منتور عادی مراجعه کنید
و پس از
Approve
او، به منتور سنیور بگویید تا کد شما را ببیند.

همچنین لازم است شما هم حداقل کد یک تیم دیگر را
Review
کنید.
سعی کنید تمام مواردی که در این فاز یاد گرفتید را هنگام
Review
مورد بررسی قرار دهید.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
-   [Effective Code Reviews: Code Review Checklist](https://github.com/nyu-cds/effective-code-reviews/blob/master/_episodes/03-checklist.md)
