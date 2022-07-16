---
title: '#C'
description: ''
---

## مقدمه

در این فاز با زبان #C
آشنا ‌می‌شوید. همچنین چند برنامۀ ساده با این زبان می‌نویسید.

## نصب پیش‌نیازها

در قدم اول برای کار با زبان #C
پیشنهاد می‌کنیم از [VS Code](https://code.visualstudio.com/)
استفاده کنید تا با [Net CLI.](https://docs.microsoft.com/en-us/dotnet/core/tools/)
بهتر آشنا شوید.
برای نوشتن کد به زبان #C
در VS Code
مراحل زیر را طی کنید:

1. نصب [NET SDK](https://dotnet.microsoft.com/en-us/download).
1. نصب [اکستنشن #C](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

پس از نصب موارد بالا دستور `dotnet --info`
را در ترمینال اجرا کنید تا نسخه‌های Net.
نصب شده را مشاهده کنید.

:::tip ‌
برای کار با ترمینال نسخه جدید [ترمینال ویندوز](https://github.com/microsoft/terminal/releases)
را نیز نصب کنید.
:::

## آشنایی با مبانی زبان #C

بهتر است ابتدا با Solution
و Project
در زبان #C
آشنا شوید که برای درک این مفاهیم [?What is a C# solution and how to use it](https://stackoverflow.com/a/40400159/7498797)
را مطالعه کنید؛ سپس در صورتی که با زبان Java
آشنایی دارید [C# Crash Course for Java Developers](https://nerdparadise.com/programming/csharpforjavadevs)
را مطالعه بفرمایید. در غیر این صورت از [w3schools](https://www.w3schools.com/cs/index.php)
جهت یادگیری مبانی #C
استفاده ‌‌‌‌‌‌‌کنید.

## اولین برنامه

ابتدا VS Code
را باز کنید و یک پوشه انتخاب کنید. سپس در ترمینال، برای ایجاد یک Console App
دستور زیر را اجرا کنید:

```shell
dotnet new console
```

:::tip ‌
برای باز کردن ترمینال در محیط VS Code
می‌توانید از میانبر `` ctrl + ` (tilde) ``
استفاده کنید.
:::

پس از اجرای دستور بالا چند فایل و یک پوشه ساخته می‌شوند. اگر فایل `Program.cs`
را باز کنید، مشاهده می‌کنید که یک کد ساده‌ی چاپ `Hello world`
در آن نوشته شده است. برای اجرای این برنامه درون ترمینال دستور زیر را اجرا کنید:

```shell
dotnet run
```

با اجرای دستور بالا باید عبارت زیر در ترمینال چاپ شود:

```shell
Hello World
```

## NuGet

توسعه‌دهندگان برای اشتراک گذاشتن و دریافت کدهای به اشتراک گذاشته شده از ابزارهایی تحت عنوان Package Manager
استفاده می‌‌کنند. در پلتفرم Net.
از NuGet
استفاده ‌می‌شود. NuGet
کدها را در قالب فایل‌هایی (Packageهایی)
با پسوند nupkg.
نگه‌داری می‌کند. این فایل یک فایل zip
حاوی کدهای کامپایل شده (dll)،
فایل‌های مورد نیاز برای استفاده از Package
و اطلاعات Package
می‌باشد. این ابزار، مکانیزم‌هایی برای ایجاد، نگهداری و استفاده از کدها ارائه می‌دهد که برای هرکدام از این مکانیزم‌ها ابزارهایی نیز فراهم کرده است. هنگام استفاده از NuGet
توسعه‌دهنده نگران دریافت و اشتراک کدها نمی‌باشد چرا که خود NuGet
این عملیات‌ها را مدیریت می‌کند.

پکیج `System.Text.Json`
امکان تبدیل اشیاء زبان #C
به Json
و برعکس را فراهم می‌کند. دستور زیر این پکیج را به برنامه اضافه می‌کند:

```shell
dotnet add package System.Text.Json
```

کد زیر یک شیء #C
را به Json
تبدیل کرده و در خروجی چاپ می‌کند:

```csharp
using System;
using System.Text.Json;

namespace HelloWorld
{
    public class Person
    {
        public string FirstName {get; set;}
        public string LastName {get; set;}
    }

    class Program
    {
        static void Main(string[] args)
        {
            var item = new Person() { FirstName = "Foo", LastName = "Bar"};
            var serializedItem = JsonSerializer.Serialize(item);
            Console.WriteLine(serializedItem);
        }
    }
}
```

در #C
برای استفاده از کتابخانه‌ها باید با کلیدواژۀ using
کتابخانه را به کد اضافه کنید. کارایی using
مشابه با import
و include
در زبان‌های دیگر می‌باشد.

همچنین برای تعریف متغیر می‌توانید از کلیدواژۀ var
استفاده کنید. در این صورت کامپایلر از روی مقدار اولیه، نوع متغیر را مشخص می‌کند.

```csharp
var i = 0;
// i is int
var s = "hi";
// s is string
var f = 1.5;
f = "hello";
// compile error
```

اگر دوست دارید بیشتر در مورد NuGet
بدانید می‌توانید مقاله [An introduction to NuGet](https://docs.microsoft.com/en-us/nuget/what-is-nuget)
را بخوانید.

## کمی پیشرفته‌تر

در این مرحله یاد می‌گیرید چگونه با کنسول کار کنید.
ابتدا سری به این [آموزش](https://softchris.github.io/pages/dotnet-core.html#creating-a-solution)
بزنید و سعی کنید تمام کارهای گفته شده را انجام دهید. سپس می‌توانید برحسب نیاز از آموزش‌های زیر نیز استفاده کنید:

-   [Console.ReadLine() Method](<https://www.geeksforgeeks.org/console-readline-method-in-c-sharp/#:~:text=Console.-,ReadLine()%20Method%20in%20C%23,user%20presses%20the%20Enter%20key.>)
-   [Console Class](https://www.geeksforgeeks.org/console-class-in-c-sharp/#:~:text=Weekday%20in%20C%23-,Console%20Class%20in%20C%23,output%20from%20the%20computer%20end.)
-   [10 commands you don't want to be without in .Net Core](https://softchris.github.io/pages/dotnet-10-commands.html#_4-dotnet-run)

### نام‌گذاری‌ها در #C

یکی از گام‌های مهم یادگیری هر زبان برنامه‌نویسی یادگیری اصول نام‌گذاری آن می‌باشد. شاید نام‌گذاری در وهله اول مورد مهمی به نظر نرسد اما این موضوع از جهتی اهمیت دارد که نباید کد شما نسبت به کدهای جامعه برنامه نویسان آن زبان تافته جدا بافته باشد. برای آشنایی با این قواعد صفحات زیر را مطالعه کنید:

-   [C# Coding Standards and Naming Conventions](https://github.com/ktaranov/naming-convention/blob/master/C%23%20Coding%20Standards%20and%20Naming%20Conventions.md)
-   [Naming Guidelines](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/naming-guidelines)

### C# Interactive

گاهی نیاز داریم در محیطی تعاملی مانند زبان‌های مفسری (مثل javascript ،python یا ...) دستوراتی را اجرا کنیم. #C نیز این امکان را با نام Net Interactive. در اختیار ما قرار داده است. برای استفاده از این ابزار اکستنشن [Net Interactive.](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode) را برای VS Code نصب کنید.
پس از نصب اکستنشن در محیط Net Interactive. این دستورات را اجرا کنید.

```csharp
2 + 2
```

```csharp
System.IO.Directory.GetCurrentDirectory()
```

### Lambda Expressions

عبارات لامبدا (Lambda expressions)
ساده شده متدهای بی‌نام (Anonymous Function)
هستند.
برای اینکه با این مفهوم بیشتر آشنا شوید می‌توانید لینک‌های زیر را مطالعه کنید.

-   [Lambda Expressions in C# (GeeksforGeeks)](https://www.geeksforgeeks.org/lambda-expressions-in-c-sharp/)
-   [Lambda Expressions in C# (C# Corner)](https://www.c-sharpcorner.com/UploadFile/bd6c67/lambda-expressions-in-C-Sharp/)

:::info ‌
این امکان یک [Syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)
می‌باشد.
:::

### Extension Method

برای اضافه کردن متد به کلاس‌های موجود بدون تغییر کلاس اصلی، تعریف کلاس فرزند یا کامپایل مجدد کتابخانه، از Extension Method
استفاده می‌شود. Extension methodها
static
هستند و خارج از کلاس مورد نظر پیاده سازی می‌شوند اما به نحوی صدا زده می‌شوند که گویا عضوی از آن کلاس می‌باشند.
مثلا می‌خواهیم یک عملکرد برای کلاس string
(به دلیل [sealed](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed)
بودن قابل ارث‌بری نیست) پیاده‌سازی کنیم به صورتی که تعداد کلمات یک متن را برای ما شمارش کند:

```csharp
namespace ExtensionMethods
{
    public static class MyExtensions
    {
        public static int WordCount(string str)
        {
            return str.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
}
```

استفاده از کد بالا به صورت زیر می‌باشد.

```csharp
var s = “Hello Extension Methods”;
var i = MyExtensions.WordCount(s);
```

حال اگر عبارت `public static int WordCount(string str)`
را به `public static int WordCount(this string str)`
تغییر دهیم. می‌توانیم به این صورت از extension method
استفاده کنیم:

```csharp
var s = "Hello Extension Methods";
var i = s.WordCount();
```

برای مطالعه‌ی بیشتر [Extension Methods (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)
را مطالعه کنید.

### LINQ

واژه LINQ (توجه داشته باشید که آن را Link تلفظ کنید) مخفف عبارت Language-Integrated Query است. LINQ یک راه یکسان را برای اتصال برقرار کردن به هر داده‌ساختار استاندارد فراهم می‌کند.
برای درک بهتر و تمرین بیشتر لینک‌های زیر را مطالعه کنید:

-   [LINQ Operators and Lambda Expressions](https://www.c-sharpcorner.com/UploadFile/babu_2082/linq-operators-and-lambda-expression-syntax-examples/)
-   [LINQ Lambda Expressions](https://www.tutlane.com/tutorial/linq/linq-lambda-expressions)

## پروژه

برنامه‌ای بنویسید که دو فایل [دانشجویان](/static/datasets/scores.json)
و [نمرات](/static/datasets/sores.json)
را بخواند و سپس نام، نام خانوادگی و معدل سه دانشجوی اول را چاپ کند.

:::tip ‌
برای کار با زبان #C
می‌توانید IDEهای
[Visual Studio](https://visualstudio.microsoft.com/downloads/)
یا Rider
را نصب کنید و از امکاناتشان بهره‌مند شوید.

**برای کار روی پروژه‌ها از IDE استفاده ‌‌‌‌کنید.**
:::
