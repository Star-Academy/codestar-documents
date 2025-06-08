---
title: ASP.NET Core
description: ''
---
## مقدمه

در این فاز با فریم‌ورک `ASP.NET Core`
آشنا خواهید شد.

برای آشنایی با تاریخچه و دلیل محبویت وب و مزایای آن نسبت به مدل‌های قدیمی ارتباط client-server
مقاله [From History of Web Application Development](https://www.devsaran.com/blog/history-web-application-development)
را مطالعه کنید.

## سلام به دنیای ASP.NET Core

ASP.NET Core
یک چارچوب به زبان #C
است که به وسیله آن می‌توانید یک سرور `RESTful api`
راه‌اندازی کنید.

برای ساخت یک پروژه ASP.NET Core
کافی است در ترمینال دستور زیر را وارد کنید:

```powershell
dotnet new webapi
```

برای اجرا شدن اولین پروژه ASP.NET Core
خود در ترمینال دستور زیر  را وارد کنید:

```powershell
dotnet run
```

:::note ‌
پیش از اجرای برنامه خود برای اولین بار دستور `dotnet dev-certs https --trust`
را در ترمینال اجرا کنید.
:::

حال برای مشاهده خروجی کار آدرس `https://localhost:<app port>/WeatherForecast`
را در مرورگر خود باز کنید.

همانگونه که مشاهده می‌کنید در خروجی یک لیست از داده‌های آب و هوایی وجود دارد که در پروژه پیش فرض ASP.NET Core
تعریف شده است.

:::tip ‌
برای مشاهده لیست APIها
و مطالعه مستنداتی ساده درباره هر API
می‌توانید آدرس `https://localhost:<appPort>/swagger`
را در مرورگر باز کنید.
:::

### Controller و Action Method

در یک پروژه ASP.NET Core
درخواست‌های رسیده به سایت یا `Web Application`
توسط کنترلرها پاسخ داده می‌شوند. پس به زبان خیلی ساده، کنترلرها به درخواست‌هایی که توسط کاربران ارسال می‌شوند پاسخ می‌دهند. کنترلرها کلاس‌هایی هستند که در فولدر `Controllers`
قرار دارند. این کلاس‌ها با کلمه Controller
به اتمام می‌رسند و از کلاس `Controller`
یا `ControllerBase`
ارث بری می‌کنند.

هر متدی با دسترسی عمومی (Public)
در کنترلر، به عنوان یک متد عملیاتی (Action Method)
شناخته می‌شود، پس به متدهایی که درون کلاس کنترلر تعریف می‌کنیم اکشن متد گفته می‌شود. هر درخواست کاربر به اکشن متد مربوطه ارسال می‌شود و اکشن متد به درخواست کاربر پاسخ می‌دهد.

### ساخت یک کنترلر ساده

در فولدر `Controllers`
خود یک فایل به نام `SimpleController`
ایجاد کنید و کدهای زیر را درون آن قرار دهید.

```CSharp
using Microsoft.AspNetCore.Mvc;

namespace Example.Controllers
{
    [ApiController]
    [Route("[controller]/[Action]")]
    public class SimpleController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Hello world!";
        }
    }
}
```

در کد بالا شما یک کنترلر به نام Simple
ساختید که یک اکشن متد به نام Get
دارد. مسیر دسترسی به آن را هم به صورتی تعریف شده که برای دسترسی به آن ابتدا باید نام کنترلر و سپس نام اکشن متد بیاید. برای تست کد خود لینک `https://localhost:<appPort>/Simple/Get`
را باز کنید و خروجی آن را مشاهده کنید.

### خروجی اکشتن متدها

در ASP.NET Core
خروجی اکشن‌ها به سه صورت می‌تواند باشد:

- `Specific type`
- `IActionResult`
- `ActionResult<T>`

برای آشنایی بیشتر با این نوع خروجی‌ها [Controller action return types in ASP.NET Core web API](https://docs.microsoft.com/en-us/aspnet/core/web-api/action-return-types)
را مطالعه کنید.

### Routing

برای مسیردهی در Asp.net core
از دو روش می‌توان این کار را انجام داد. یکی ست کردن تنظیمات در فایل `Program.cs`
و دیگری استفاده از اتریبیوت Route.
برای آشنایی بیشتر با این موضوع لینک‌های زیر را مطالعه کنید:

- [Routing to controller actions in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing)
- [Routing in ASP.NET Core MVC](https://code-maze.com/routing-asp-net-core-mvc/)
- [بررسی و فهم مسیرها](https://mizfa.com/blog/routing-core-mvc/)

### Dependency Injection

تزریق وابستگی یا (Dependency Injection)
فرآیندی می‌باشد که در آن وابستگی‌های ما به یک کلاس با استفاده از یک رابط کاربری (یا همان  Interface)
حذف می شود. در ASP.NET Core
به صورت پیش فرض این امکان به ما داده شده است که بتوانیم بدون نیاز به درگیری با مورد خاصی از این ویژگی استفاده کنیم.

برای یادگیری و درک بهتر این موضوع لینک‌های زیر را مطالعه کنید:

- [Dependency injection in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection)
- [ASP.NET Core - Dependency Injection](https://www.tutorialsteacher.com/core/dependency-injection-in-aspnet-core)

### Http Methods

با استفاده از اتریبیوت‌های Http Methods
شما می‌توانید مشخص کنید اکشن شما با استفاده از کدام Http method
صدا شود.

درک بهتر لینک‌های زیر را مطالعه کنید:

- [Using HTTP Methods (GET, POST, PUT, etc.) in Web API](https://exceptionnotfound.net/using-http-methods-correctly-in-asp-net-web-api/)
- [Attribute Routing, HTTP Request Methods & Best Practices in .NET Core Web API](https://dev.to/_patrickgod/net-core-3-1-web-api-entity-framework-jumpstart-part-2-58gp)

### Parameter Binding

در ASP.NET Core
برای گرفتن محتویات درخواست Http
به آرگومان‌های ورودی اکشن از Parameter Binding
کمک می‌گیریم. به وسیله این مفهوم مشخص می‌کنیم داده از Body
یا قسمت‌های دیگر ریکوئست خوانده شود.

برای آشنایی بیشتر با این مفهوم لینک‌های زیر را مطالعه کنید:

- [Parameter Binding in ASP.NET Web API](https://docs.microsoft.com/en-us/aspnet/web-api/overview/formats-and-model-binding/parameter-binding-in-aspnet-web-api)
- [Understand parameter binding in ASP.Net Web API](https://www.infoworld.com/article/3133728/understand-parameter-binding-in-aspnet-web-api.html)

### Configuration

در ASP.NET Core
تنظیمات برنامه می‌تواند از منابع مختلفی بیاید. یکی از پرکاربرد‌ترین آن‌ها فایل است. تغییر تنظیمات ذخیره شده در فایل نیاز به `Build`
مجدد ندارد. از این رو استفاده از آن متداول است. با استفاده از لینک‌های زیر با این فایل‌ها در ASP.NET Core
آشنا شوید و تفاوت فایل‌های `launchSetting.json`،
`appsetting.json`
و `appsetting.{Environment}.json`
را درک کنید. (`{Environment}`
محیط کنونی برنامه است که مقدار آن می‌تواند `Development`،
`Staging`
یا `Production`
باشد)

- [ASP.NET Core launchSettings.json file](https://dotnettutorials.net/lesson/asp-net-core-launchsettings-json-file/)
- [ASP.NET Core appsettings.json file](https://dotnettutorials.net/lesson/asp-net-core-appsettings-json-file/)

:::note ‌
در لینک‌های بالا مطالعه بخش‌های مربوط به `Visual Studio`
نیاز نیست.
:::


## پروژه

برای پروژه‌ی جستجو که کوئری را از طریق کنسول دریافت می‌کرد یک API
بنویسید که نتایج جستجو را در جواب API
برگرداند.

## پی‌نوشت

جهت آشنایی با ASP.NET Core Web API
می‌توانید از ویدئوهای آموزشی [Web APIs for Beginners](https://www.youtube.com/watch?list=PLdo4fOcmZ0oVjOKgzsWqdFVvzGL2_d72v&v=h0KG8OKKgKs)
مایکروسافت نیز استفاده کنید.
