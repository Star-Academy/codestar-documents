---
title: CSS & Sass
description: No! Half of the taste is in the smell! You're sucking up all the taste units!
tags: [Sandbox]
---

:::info این فاز، یکی از فازهای `Sandbox` است.
:::

## مقدمه

در این فاز قصد داریم با مفاهیم نسبتاً ساده اما فراموش‌شدۀ CSS آشنا شویم
و همچنین کتابخانۀ Sass را معرفی کنیم.

-   Box Model چیست و از چه اعضایی تشکیل شده است؟
-   هر کدام از واحدهای مختلف CSS چه مفهومی دارند و در چه جاهایی باید استفاده شوند؟
-   انواع Selectorهای CSS چه چیزهایی هستند و چگونه می‌توان از آن‌ها استفاده کرد؟
-   کلاس‌های Pseudo چه چیزهایی هستند و چه کاربردی دارند؟

توصیه می‌کنیم همزمان با خواندن این مطلب،
[صفحۀ دمو](https://star-academy.github.io/codestar-internship/Demos/Frontend/pages/PhaseF02-CSS/index.html)
را نیز مشاهده کنید تا به صورت دیداری و کاربردی با مفاهیم آشنا شوید.

---

## یادگیری

### Box Model

همه چیز در CSS به شکل یک جعبه یا Box است
که از اجزای مختلفی شامل Content یا محتوا، Padding یا حاشیۀ درونی، Border یا مرز و Margin یا حاشیۀ بیرونی،
تشکیل می‌شود.

در CSS یک Property به نام `box-sizing` وجود دارد
که می‌تواند یکی از دو مقدار `border-box` یا `content-box` را داشته باشد.

در صورتی که المانی به شکل `border-box` تعریف شود، اگر یک `width` برای آن در نظر بگیرید،
آن `width` شامل `border` و `padding` نیز می‌باشد.
به‌عنوان مثال اگر `width` برابر با 200 پیکسل،
`padding` برابر با 20 پیکسل در هر طرف
و `border` برابر با 5 پیکسل در هر طرف باشد،
عرضی که برای `content` باقی می‌مانند برابر با 150 پیکسل است.

اما در صورتی که یک المان به شکل `content-box` تعریف شود، اگر یک `width` برای آن در نظر بگیرید،
آن `width` دقیقاً عرض `content` می‌باشد
و هرچقد `border` یا `padding` بزرگ باشند،
تاثیری در عرض آن نخواهد داشت.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
-   [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

---

### واحدها

در CSS واحدهای مختلفی داریم که هر کدام در شرایط خاصی مورد نیاز هستند.
لیست آن‌ها را به همراه توضیحات مختصری در اینجا ذکر می‌کنیم:

#### px

معروف‌ترین واحد CSS که قطعاً با آن آشنا هستید. با توجه به دستگاهی که سایت بر روی آن دیده می‌شود، سایز هر پیکسل ممکن است متفاوت باشد.

#### em

هر واحد `em` برابر با `font-size` المان فعلی است. در صورتی که در CSS به صراحت `font-size` را تعریف نکرده باشید، آن را از پدر یا پدرانش به ارث می‌برد.

#### rem

هر واحد `rem` برابر با `font-size` المان `root` است. در اکثر مواقع `root` همان المانِ `html` می‌باشد. معمولاً در مرورگرها `font-size` پیشفرض 16 پیکسل است.

#### %

هر واحد آن برابر با یک درصد از مقدار Property در المان پدر می‌باشد.

#### vh

هر واحد آن برابر با یک درصد از `height` صفحه (Viewport) می‌باشد.

#### vw

هر واحد آن برابر با یک درصد از `width` صفحه (Viewport) می‌باشد.

#### ch

هر واحد آن برابر با `width` کاراکتر `0` می‌باشد. طبیعتاً مقدار آن با توجه به فونت می‌تواند متفاوت باشد.

#### ex

هر واحد آن برابر با `height` کاراکتر `x` می‌باشد. طبیعتاً مقدار آن با توجه به فونت می‌تواند متفاوت باشد.

#### cm, mm & in

واحدهای سانتی‌متر، میلی‌متر و اینچ معمولاً زمانی استفاده می‌شوند که صفحه را با هدف چاپ‌شدن بسازید و برای صفحات دیجیتال به هیچ عنوان توصیه نمی‌شوند.

#### واحدهای پیشنهادی

همان‌طور که بالاتر گفته شد، در مرورگرها `font-size` پیشفرضِ المان `root` برابر با 16 پیکسل است.
اما گاهی اوقات کاربر با توجه به نیاز خود می‌تواند این مقدار را تغییر دهد.
شما در اکثر مواقع مخصوصاً وقتی که می‌خواهید `width` یا `height` یک المان را تنظیم کنید نباید از `px` استفاده کنید.
چرا که اگر کاربر `font-size` مرورگر را عوض کند، تاثیری در سایت شما نخواهد گذاشت.
اما اگر از واحدهای `em` و `rem` به درستی استفاده کنید، متناسب با فونت، سایز تمامِ المان‌های صفحه بزرگ یا کوچک خواهد شد.
بنابراین سعی کنید همیشه از `em` یا `rem` استفاده کنید.

#### ترفندی برای راحتی کار با rem

برای اینکه در استفاده از `rem` راحت‌تر باشید، پیشنهاد میکنیم از این استایل استفاده کنید:

```css
html {
    font-size: 62.5%;
}
```

با استفاده از این کد، هر واحد `rem` برابر با 10 پیکسل می‌شود و به راحتی می‌توانید تبدیلات `rem` به `px` یا برعکس را انجام دهید.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [CSS Units Explained](https://www.digitalocean.com/community/tutorials/css-css-units-explained)

---

### Selectors

برای انتخاب‌کردن المان‌های مختلف راه‌های گوناگونی وجود دارد که احتمالاً با `class` و `id` از قبل آشنایی دارید.
در اینجا به راه‌های دیگری می‌پردازیم که قطعاً در پروژه‌های مختلف به کمک شما خواهند آمد.

#### Attribute Selectors

گاهی اوقات نیاز داریم با توجه به مقدار یک `attribute`، المان مورد نظر را انتخاب کنیم.
به‌عنوان مثال ممکن است بخواهیم تمامِ `input`هایی که از نوع `text` هستند را انتخاب کنیم:

```css
input[type='text'] {
    /* ... */
}
```

#### Positional Selectors

در بعضی مواقع، مخصوصاً زمانی که از لیست‌ها استفاده می‌کنیم،
ممکن است بخواهیم یکی از فرزندان المان مورد نظر را با استفاده از اندیسش انتخاب کنیم.
در این حالت از `nth-child` یا `nth-of-type` می‌توانیم استفاده کنیم:

```html
<ul>
    <li>Item 01</li>
    <li>Item 02</li>
    <li>Item 03</li>
    <li>Item 04</li>
    <li>Item 05</li>
</ul>
```

```css
ul > li:nth-child(2) {
    /* ... */
}
```

همچنین می‌توان به جای یک عدد مطلق، فرمولی بر حسب `n` در نظر گرفت.
مثلاً فرض کنید در مثال بالا بخواهیم آیتم‌های فرد را انتخاب کنیم:

```css
ul > li:nth-child(2n + 1) {
    /* ... */
}
```

در بالا آیتم‌های 1، 3 و 5 انتخاب خواهند شد.
دقت کنید که `n` از صفر شروع می‌شود و تا بی‌نهایت ادامه پیدا می‌کند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Kevin Powell - Select a range of content WITHOUT JavaScript](https://www.youtube.com/shorts/nKLAbYQHnt8)

#### Pseudo Selectors

در CSS راه‌های بسیار زیادی تعبیه شده تا از تغییراتی که در HTML رخ می‌دهد باخبر شویم.
یکی از این راه‌ها کلاس‌های Pseudo هستند.
حتماً از قبل با `hover` یا `focus` آشنا هستید.
زمانی که کاربر، Mouse را بر روی المان مورد نظر ببرد با استفاده از `hover` می‌توانیم ظاهر آن را تغییر دهیم.
اما امکانات ما به اینجا ختم نمی‌شود.

به‌عنوان مثال اگر یک `checkbox` داشته باشیم،
ممکن است با انتخاب‌شدن آن بخواهیم ظاهر دیگری به آن اضافه کنیم.
برای این کار می‌توانیم از `checked` استفاده کنیم:

```html
<input id="rules" type="checkbox" name="rules" />
<label for="rules">I have read and agree to the terms and conditions.</label>
```

```css
label {
    color: gray;

    font-size: 14px;
}

input:checked + label {
    color: cornflowerblue;

    font-size: 16px;
    font-weight: bold;
}
```

تعداد کلاس‌های Pseudo و به طور کلی راه‌های انتخاب‌کردن یک المان بسیار زیاد است
به طوری که ما نمی‌توانیم تمام آن‌ها را در اینجا ذکر کنیم،
اما برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
-   [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
-   [CSS Tricks - Beginner Concepts: How CSS Selectors Work](https://css-tricks.com/how-css-selectors-work/)
-   [The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

---

### Sass

Sass
یک Preprocessor برای CSS است که با استفاده از آن، کار توسعه‌دهنده به شدت آسان می‌شود.
در این قسمت قصد داریم با قابلیت‌های معروف Sass و کاربرد هر یک از آن‌ها آشنا شویم.

در اینجا تنها به بخشی از این قابلیت‌ها اشاره می‌شود؛
بنابراین توصیه می‌کنیم برای یادگیری کامل Sass به
[وبسایت رسمی آن](https://sass-lang.com/documentation)
مراجعه کنید.

#### نصب و راه‌اندازی

Sass
به نوعی ورژن قبلی SCSS محسوب می‌شود که همچنان برخی از آن استفاده می‌کنند.
تفاوت اصلی Sass و SCSS در Syntax آن‌هاست.
به‌عنوان مثال Sass مانند پایتون از Indent برای Scopeها استفاده می‌کند
اما SCSS مانند CSS است و از آکلاد استفاده می‌کند.

پیشنهاد ما همان SCSS است اما اسم پکیجی که با استفاده از npm باید نصب کنیم `sass` می‌باشد.
برای نصب این پکیج از دستور زیر استفاده کنید:

```shell
npm i -g sass
```

با اجرای این دستور، پکیج `sass` به صورت Global در سیستم شما نصب می‌شود.

---

#### Nested Selectors

شاید بتوان گفت Nested Selection معروف‌ترین و پُراستفاده‌ترین مزیت SCSS نسبت به CSS است.
برای توضیح این قابلیت به مثال زیر توجه کنید.

فرض کنید ساختار فایل HTML ما به شکل زیر باشد:

```html
<body>
    <header>
        <a href="/">Logo</a>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>

        <button>SIGNUP</button>
    </header>
</body>
```

و Style زیر را با استفاده از CSS برای آن در نظر گرفته باشیم:

```css
body {
    display: grid;
    grid-template-areas: 'header header' 'main aside' 'footer footer';
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto minmax(0, 1fr) auto;
}

header {
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

header > a {
    color: hsl(220, 100%, 55%);
}

header > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    list-style: none;
}

header > ul > li > a {
    padding: 0.5rem 1rem;

    border-radius: 999rem;

    text-decoration: none;
}

header > ul > li > a:hover {
    background-color: hsl(221, 100%, 93%);
}
```

همان‌طور که می‌بینید هر چقد المانی که می‌خواهیم انتخاب کنیم
در جایگاه عمیق‌تری از ساختار HTML باشد، Selectorهایی مانند `header` و `ul` نیز باید تکرار شوند.
در صورتی که اگر بخواهیم از SCSS استفاده کنیم می‌توانیم کد بالا را به شکل زیر کوتاه کنیم:

```scss
body {
    display: grid;
    grid-template-areas: 'header header' 'main aside' 'footer footer';
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto minmax(0, 1fr) auto;

    header {
        grid-area: header;

        display: flex;
        align-items: center;
        justify-content: space-between;

        > a {
            color: hsl(220, 100%, 55%);
        }

        > ul {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            list-style: none;

            li {
                > a {
                    padding: 0.5rem 1rem;

                    border-radius: 999rem;

                    text-decoration: none;

                    &:hover {
                        background-color: hsl(221, 100%, 93%);
                    }
                }
            }
        }
    }
}
```

کد جدید نه تنها نسبت به کد قبلی از لحاظ تعداد خط و تعداد کاراکتر تکراری بهینه‌تر است،
بلکه از لحاظ خوانایی و دیداری نیز در فهم کد بیشتر به ما کمک می‌کند.

احتمالاً متوجه علامت `&` در کد بالا شده‌اید. این علامت Selector پدر را عیناً کپی می‌کند.
به‌عنوان مثال کد زیر:

```scss
a {
    text-decoration: none;

    &.some-class-name {
        color: cornflowerblue;

        &:hover {
            color: orangered;
        }
    }
}
```

به این کد:

```css
a {
    text-decoration: none;
}

a.some-class-name {
    color: cornflowerblue;
}

a.some-class-name:hover {
    color: orangered;
}
```

تبدیل می‌شود.

---

#### متغیرها

در SCSS هم مانند CSS می‌توانیم متغیر داشته باشیم. متغیرهای SCSS به این شکل تعریف می‌شوند:

```scss
$color-primary: hsl(220, 100%, 55%);
$padding--large: 4rem;
```

البته متغیرهای SCSS با متغیرهای CSS تفاوت‌های اساسی دارند:

-   مقادیر تخصیص‌داده‌شده به متغیرهای SCSS در زمان Compile جایگزین می‌شوند در صورتی که متغیرهای CSS به همان شکل در کد نهایی استفاده می‌شوند.
-   متغیرهای CSS برای المان‌های مختلف می‌توانند دارای مقادیر متفاوت باشند اما متغیرهای SCSS در آنِ واحد تنها یک مقدار دارند.
-   مقادیر متغیرهای SCSS به صورت قطعی در نظر گرفته می‌شوند به طوری که اگر از متغیر در جایی از کد استفاده کنید و در جای دیگر مقدار آن را عوض کنید، مقدار جدید جایگزین مقدار قبلی نخواهد شد.

بنابراین ما پیشنهاد می‌کنیم همیشه به طور پیش‌فرض از متغیرهای CSS استفاده کنید
و تنها در صورتِ نیاز به متغیرهای SCSS رجوع کنید.

---

#### Mixins

زمانی که قطعه‌ای از کد را بخواهیم در مکان‌های مختلف استفاده کنیم می‌توانیم از Mixinها کمک بگیریم.

به‌عنوان مثال فرض کنید در دو جا بخواهیم یک Layout با سه ستون هم‌عرض داشته باشیم.
برای این کار قطعه کد زیر را می‌نویسیم:

```scss
.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

همان‌طور که می‌بینید قطعه‌ای از کد عیناً تکرار شده است.
می‌توانیم کد بالا را به شکل زیر بازنویسی کنیم:

```scss
@mixin layout-with-3-equal-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.products {
    @include layout-with-3-equal-columns;
}

.items {
    @include layout-with-3-equal-columns;
}
```

البته Mixinها مانند توابع می‌توانند پارامتر ورودی دریافت و با توجه به آن‌ها کد مورد نظر را تولید کنند:

```scss
@mixin layout-with-n-equal-columns($n: 3) {
    display: grid;
    grid-template-columns: repeat(#{$n}, 1fr);
}

.products {
    @include layout-with-n-equal-columns;
}

.items {
    @include layout-with-n-equal-columns(4);
}
```

همان‌طور که در بالا می‌بینید، Mixin ما یک متغیر به نام `n` را از ورودی دریافت می‌کند
و با توجه به مقدار آن تعداد ستون‌ها را تشکیل می‌دهد.
همچنین برای متغیر `n` مقدار پیشفرض 3 را در نظر گرفته‌ایم.

دقت کنید که از سینتکسِ
`{}#`
برای درجِ مقدار `n` استفاده کردیم
که به آن Interpolation گفته می‌شود.

---

## پروژه

سعی کنید از قابلیت‌های SCSS به نفع خود استفاده کنید؛
با استفاده از Nesting خوانایی کد را افزایش و
با استفاده از Mixin حجم آن را کاهش دهید.

Sass
قابلیت‌های بی‌شماری دارد؛
اما زیاده‌روی نکنید!
فقط از قابلیت‌هایی استفاده کنید که واقعاً به آن‌ها نیاز دارید.
