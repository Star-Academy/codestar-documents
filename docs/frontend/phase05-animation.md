---
title: Animation
description: Sure, it looks stupid now. There's no music playing.
tags: [Readonly]
---

:::info این فاز، یکی از فازهای `Readonly` است.
:::

## مقدمه

Animation
یکی از قدرتمندترین ابزارهای طراح برای ایجاد یک UX حرفه‌ای است.
با Animation می‌توان جذابیت سایت را برای کاربر بالا برد و او را مجاب به استفاده از آن کرد.
همچنین در صورتی که کاری برای به سرانجام رسیدن احتیاج به زمان زیادی داشته باشد،
می‌توان از خستگی یا گمراهی کاربر جلوگیری کرد.

-   آیا می‌توان از JavaScript برای ساخت انیمیشن‌های پیچیده استفاده کرد؟
-   مرورگر برای نمایش سایت چه مراحلی را طی می‌کند؟
-   هنگام استفاده از Animation، چه نکاتی در رابطه با Performance وجود دارد؟
-   چه کتابخانه‌هایی برای ساخت Animation وجود دارند؟

---

## یادگیری

### Web Animation API

قطعاً پیش از این با CSS چند Animation ساده ساخته‌اید
و شاید حس کرده باشید که ابزار مناسبی برای ساخت Animationهای پیچیده در اختیار ندارید.
خوشبختانه شما با کمک Web Animation API می‌توانید در JavaScript هم Animation بسازید
و از تمامِ ویژگی‌های این زبان برای این امر بهره‌مند شوید.
استفاده از این API بسیار راحت و شبیه به CSS Animations است؛
بنابراین در استفاده از آن نباید دچار مشکل شوید.

در ادامه مثالی از یک انیمیشن که با این روش ساخته شده می‌بینید:

```js
const ball = document.querySelector('#ball');

const keyframes = [
    {transform: 'translate(0, 0)'},
    {transform: 'translate(10rem, 0)'},
    {transform: 'translate(10rem, 10rem)'},
    {transform: 'translate(0, 10rem)'},
    {transform: 'translate(0, 0)'},
];

const options = {
    duration: 500,
    easing: 'cubic-bezier(0.7, -0.3, 0.3, 1.3)',
};

ball.animate(keyframes, options);
```

در این کد، تابع `animate`، دو ورودی می‌گیرد که اولی مشابه `keyframe@` در CSS است
و دومی شامل تنظیماتی است که برای شخصی‌سازی نحوۀ نمایش Animation استفاده می‌شود.
ورودی دوم اختیاری است و در صورتی که آن را فراهم نکنید، از مقادیر پیش‌فرض استفاده خواهد شد.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
-   [MDN - Using the Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
-   [Smashing Magazine - Orchestrating Complexity With Web Animations API](https://www.smashingmagazine.com/2021/09/orchestrating-complexity-web-animations-api/)
-   [CSS Tricks - CSS Animations vs Web Animations API](https://css-tricks.com/css-animations-vs-web-animations-api/)
-   [An intro to animating with the Web Animations API](https://simplabs.com/blog/2021/01/29/web-animations-intro/)

### Intersection Observer API

گاهی اوقات نیاز داریم یک Animation را زمانی اجرا کنیم که یک المان در صفحه ظاهر می‌شود.
به عنوان مثال فرض کنید چند Card در کنار هم چیده‌اید
و ویژگی‌های سایت را در آن‌ها برای کاربر مشخص کرده‌اید.
معمولاً در چنین مواقعی برای ایجاد جذابیت بیشتر،
زمانی که کاربر Scroll می‌کند، کارت‌ها از طرفین به داخل صفحه منتقل می‌شوند.

برای این کار می‌توانیم از Intersection Observer API استفاده کنیم:

```js
const cards = document.querySelectorAll('.card');

const callback = (entries) => {
    entries.forEach((entry) => {
        const element = entry.target;
        if (!element || !entry.isIntersecting) return;

        element.classList.add('fade-in');

        observer.unobserve(element);
    });
};

const options = {
    rootMargin: '0px 0px -100px',
    threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

cards.forEach((mark) => {
    observer.observe(mark);
});
```

در کد بالا، زمانی که یک المان در صفحه ظاهر شود، کلاس `fade-in` را به آن اضافه می‌کنیم
و همچنین با استفاده از تابع `unobserve`، به Observeکردن آن خاتمه می‌دهیم
چراکه دیگر نیازی به این کار نداریم و Animation اجرا شده است.

البته استفاده از Intersection Observer API صرفاً برای اجرای Animation نیست،
بلکه شما می‌توانید هر اقدامی که مد نظرتان باشد انجام دهید؛
به‌عنوان مثال ممکن است بخواهید فقط زمانی که کاربر به قسمت Commentها رسید،
آن‌ها را از سرور بگیرید و به او نمایش دهید؛
با این کار از مصرف اینترنت کاربر جلوگیری می‌کنید و همچنین سرعت Load صفحه را افزایش می‌دهید.

برای مشاهده نمونه‌هایی از این مفهوم می‌توانید به پروژۀ زیر مراجعه کنید:

-   [سایت](https://playground.bijanprogrammer.com/intersection-observer/)
-   [کد](https://github.com/BijanProgrammerWebsites/playground-intersection-observer/)

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-   [Web Dev Simplified - Learn Intersection Observer In 15 Minutes](https://www.youtube.com/watch?v=2IbRtjez6ag&ab_channel=WebDevSimplified)
-   [Kevin Powell - Introduction to the Intersection Observer JavaScript API](https://www.youtube.com/watch?v=T8EYosX4NOo&ab_channel=KevinPowell)
-   [CSS Tricks - A Few Functional Uses for Intersection Observer to Know When an Element is in View](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)

---

### Performance

اکثر توسعه‌دهندگان از سیستم‌های نسبتاً خوبی برای انجام پروژه‌ها استفاده می‌کنند؛
اما نمی‌توان انتظار داشت کاربران هم سیستم مناسبی داشته باشند.
زمانی اوضاع حادتر می‌شود که به سراغ تلفن‌های همراه برویم؛
معمولاً دستگاه‌های Portable از قطعات ضعیف‌تری نسبت به Desktopها تشکل شده‌اند
که همین موضوع باعث قدرت پردازشی کمتر آن‌ها می‌شود.
بنابراین توجه به Performance در تمام مراحل توسعه مخصوصاً در استفاده از Animationها بسیار حائز اهمیت است.

#### مرورگر

مرورگرها بسیاری از کارهای پیچیده را در پشت صحنه انجام می‌دهند
که اکثر اوقات ممکن است حتی به آن‌ها فکر هم نکنیم.
برای آنکه یک المان را بر روی صفحه بتوانیم ببینیم،
مرورگر به طور کلی باید 4 مرحله را طی کند که در ادامه توضیح مختصری در مورد هر کدام از آن‌ها می‌دهیم.

##### Recalculates Styles

مرورگر تمام قواعدی را که توسعه‌دهنده در CSS وضع کرده، بررسی می‌کند
و آن‌هایی را که مربوط به المان فعلی هستند گلچین می‌کند.

##### Layout

ابعاد و موقعیت المان را محاسبه می‌کند.
این مورد معمولاً شامل `width` و `height` و انواع پارامترهای متفاوتی است
که به‌نوعی بر روی چیدمان المان‌ها تاثیر می‌گذارند؛
به‌عنوان مثال اگر المان پدر دارای `display: flex` باشد قطعاً چیدمان المان فرزند دچار تغییر خواهد شد.

##### Paint

وجود این مرحله شاید واضح‌تر باشد
چراکه شامل تمام پیکسل‌های پیدا در صفحه است.
هر پارامتری که بتواند این موضوع را تحت‌الشعاع قرار دهد در این مرحله بررسی و اعمال می‌شود؛
به‌عنوان مثال `background` یا `box-shadow` یا حتی `border`.

##### Composite

لایه‌هایی را که در مرحلۀ Paint تولید شده‌اند، با ترتیب درست ادغام می‌کند و در نهایت به نمایش می‌گذارد.

#### CPU vs GPU

اگر یک پارامتر بر روی یکی از مراحل بالا تاثیر بگذارد،
علاوه بر آن مرحله، تمام مراحل بعدی نیز باید اجرا شوند.
به‌عنوان مثال اگر شما `width` یک المان را تغییر دهید،
علاوه بر Layout، مراحل Paint و Composite نیز اجرا می‌شوند.

مرورگر برای انجام کارهای بالا، در اکثر مواقع از CPU استفاده می‌کند؛
اما در شرایط خاصی این امکان را دارد که از GPU بهره بگیرد.
قطعاً می‌دانید که GPU در انجام کارهای گرافیکی بسیار سریع‌تر از CPU عمل می‌کند؛
بنابراین ما ترجیح می‌دهیم برای بالابردن Performance همیشه این شرایط خاص را در نظر بگیریم.
در صورتی که فقط از `transform` و `opacity` برای انجام Animationهای خود استفاده کنید،
فقط مرحله Composite اجرا می‌شود و مرورگر می‌تواند تمام کارها را بر عهدۀ GPU بگذارد.
بنابراین همیشه سعی کنید فقط از این دو Property استفاده کنید.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Web Dev Simplified - How To Create Performant CSS Animations](https://www.youtube.com/watch?v=4PStxeSIL9I)

---

### FLIP

ممکن است در نگاه اول به نظر بیاید صرفاً استفاده از `transform` و `opacity` برای ساخت Animationهای پیچیده بسیار سخت باشد.
اما این دو، مخصوصاً `transition`، امکانات فوق‌العاده زیادی را
از جمله تغییر مکان، اندازه، زاویه دید، چرخش و پیدا/پنهان کردن المان‌ها، در اختیار شما می‌گذارند
که معمولاً اکثر Animationها در همین موضوعات خلاصه می‌شوند.

اما گاهی اوقات ممکن است نیاز داشته باشیم چیدمان المان‌ها را تغییر دهیم و نخواهیم این اتفاق بدونِ Animation و به صورت ناگهانی رخ دهد.
در چنین مواقعی می‌توانیم از تکنیک FLIP که توسط Paul Lewis ارائه شده است استفاده کنیم.
برای خواندن این مقاله می‌توانید به
[این لینک](https://aerotwist.com/blog/flip-your-animations/)
مراجعه کنید؛
همچنین Paul یک ویدئو در مورد
[Animation Performance](https://www.youtube.com/watch?v=ohc8ejzSn48)
دارد که توصیه می‌کنیم حتماً ببینید.

به‌طور خلاصه تکنیک FLIP شامل چهار مرحله است که هرکدام را در پایین توضیح می‌دهیم:

#### First

در این مرحله شما باید تمام ویژگی‌هایی را که می‌خواهید در Animation تغییر کنند، ثبت کنید.
به‌عنوان مثال اگر موقعیت و اندازۀ المان شما تغییر می‌کند،
باید مقادیر مربوط به `x` و `y` و `width` و `height` را ذخیره‌کنید.
ما پیشنهاد می‌کنید از تابع `getBoundingClientRect` استفاده کنید چراکه تمام موارد مورد نیاز را در اختیار شما می‌گذارد:

```js
const element = document.querySelector('#element');

const first = element.getBoundingClientRect();
```

#### Last

در این مرحله شما باید کاری را که باعث تغییر چیدمان می‌شود، انجام دهید:

```js
element.classList.add('.do-something');
```

دقت کنید که انتظار داریم با این کار، المان در موقعیت انتهایی خود قرار گیرد
و این اتفاق به‌صورت ناگهانی رخ دهد چرا که هنوز Animationی برای آن در نظر نگرفته‌ایم.

حال ویژگی‌های مورد نظر را ثبت می‌کنیم تا در ادامه به آن‌ها دسترسی داشته باشید:

```js
const last = element.getBoundingClientRect();
```

#### Invert

در این مرحله میزان جابه‌جایی یا تغییر اندازه المان را محاسبه می‌کنیم:

```js
const deltaX = first.left - last.left;
const deltaY = first.top - last.top;
```

#### Play

در نهایت Animation را اجرا می‌کنیم:

```js
// prettier-ignore
element.animate([
	{transform: `translate(${deltaX}px, ${deltaY}px`},
    {transform: `translate(0)`},
]);
```

دقت کنید که در واقع المان در وضعیت نهایی خود قرار دارد
و ما در فریم اول Animation آن را به جایگاه اولیه منتقل می‌کنیم؛
بنابراین از دیدگاه کاربر به نظر می‌رسد المان با Animation در حال جابه‌جایی است و به سمت جایگاه نهایی حرکت می‌کند،
در صورتی که این اتفاق قبلاً رخ داده است.

برای مشاهده نمونه‌هایی از این مفهوم می‌توانید به پروژۀ زیر مراجعه کنید:

-   [سایت](https://playground.bijanprogrammer.com/flip/)
-   [کد](https://github.com/BijanProgrammerWebsites/playground-flip/)

---

### GSAP

یکی از کتابخانه‌های معروف که به شما کمک می‌کند Animationهای فوق‌العاده پیچیده را با کمترین زحمت بسازید،
GreenSock Animation Platform
است.
این کتابخانه از مدت‌ها پیش توسعه داده شده و همچنان به کار خود ادامه می‌دهد.

GSAP
دارای قابلیت‌های بسیار زیادی است که در قالب این مستند نمی‌گنجد؛
بنابراین در اینجا صرفاً به معرفی این کتابخانه بسنده می‌کنیم
و برای آشنایی بیشتر، شما را به
[مستندات رسمی آن](https://greensock.com/docs/)
ارجاع می‌دهیم.

---

## پروژه

با استفاده از مطالبی که در این فاز یاد گرفتید،
سعی کنید Animationهای جذابی را به Landing Page خود اضافه کنید.

توجه داشته باشید که در استفاده از Animation نباید زیاده‌روی کنید،
در غیر این صورت نه تنها کاربران را جذب نمی‌کنید،
بلکه باعث ریزش آن‌ها می‌شوید.
