---
title: TypeScript
description: No! Half of the taste is in the smell! You're sucking up all the taste units!
---

## مقدمه

TypeScript یک زبان برنامه‌نویسی است که بر روی جاوااسکریپت بنا شده
و ویژگی‌های تایپ‌دهی ایستا (Static Typing) و تایپ‌های صریح (Explicit Types) را به آن اضافه می‌کند. این قابلیت‌ها به برنامه‌نویسان کمک می‌کند تا کدهای خود را خواناتر و قابل‌اعتمادتر بنویسند.
  
-   انواع تایپ‌ها در TypeScript  کدام‌اند؟
-   interface در TypeScript  چه فایده‌ای دارند؟
-   Type Aliases در TypeScript  چه مزیتی دارند؟
-   Generics در TypeScript  چیست؟
-   Decorator در TypeScript چه کاری برای ما انجام می‌دهند؟

---

## یادگیری

### انواع تایپ‌های primitive 

در TypeScript، انواع ابتدایی (Primitive Types) به انواع داده‌ای ساده و پایه‌ای اشاره دارند که معمولاً به صورت مستقیم و بدون استفاده از ساختارهای پیچیده تعریف می‌شوند. انواع ابتدایی در TypeScript شامل موارد زیر هستند:

number: برای اعداد استفاده می‌شود، مانند اعداد صحیح و اعشاری. <br></br>
string: برای رشته‌ها یا متن‌ها استفاده می‌شود. <br></br>
boolean: برای مقادیر صحیح و غلط (true و false) استفاده می‌شود. <br></br>
null: برای متغیرهایی که مقدار آن‌ها خالی یا نال باشد. <br></br>
undefined: برای متغیرهایی که مقدار آن‌ها تعریف نشده باشد. <br></br>
symbol: نوعی داده‌ی ابتدایی جدید که برای ایجاد شناسه‌های منحصر به فرد استفاده می‌شود. <br></br>
bigint: برای اعداد بزرگ که نمی‌توانند در نوع داده‌ی number جای بگیرند. <br></br>

 این انواع داده‌های ابتدایی به شما امکان می‌دهند تا متغیرهای ساده و پایه‌ای را در TypeScript تعریف کنید و از آن‌ها در برنامه‌های خود استفاده کنید.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره انواع ابتدایی در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [Altcademy - Primitives in TypeScript](https://www.altcademy.com/blog/what-are-primitives-in-typescript/)
- [W3schools - TypeScript Simple Types](https://www.w3schools.com/typescript/typescript_simple_types.php)


### انواع داده‌های پیچیده‌تر در TypeScript

در TypeScript، علاوه بر انواع داده‌های ابتدایی، انواع داده‌های پیچیده‌تری نیز وجود دارند که به شما امکان می‌دهند تا ساختارهای داده‌ای پیشرفته‌تری را تعریف کنید. این انواع عبارتند از:

Array: برای ذخیره‌سازی مجموعه‌ای از مقادیر استفاده می‌شود. <br></br>
Tuple: برای ذخیره‌سازی مجموعه‌ای ثابت از مقادیر با به ترتیب مشخص استفاده می‌شود. <br></br>
Enum: برای تعریف مجموعه‌ای از ثابت‌ها استفاده می‌شود. <br></br>
Union Types: برای متغیرهایی که می‌توانند چند نوع مختلف داشته باشند استفاده می‌شود. <br></br>
Intersection Type: برای ترکیب چند نوع استفاده می‌شود. <br></br>
Object: برای تعریف ساختارهای داده‌ای که شامل مجموعه‌ای از ویژگی‌ها هستند استفاده می‌شود. <br></br>
Function Types: برای تعریف نوع تابع استفاده می‌شود. <br></br>

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره انواع داده‌های پیچیده در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [W3schools - Arrays](https://www.w3schools.com/typescript/typescript_arrays.php)
- [W3schools - Tuples](https://www.w3schools.com/typescript/typescript_tuples.php)
- [W3schools - Objects](https://www.w3schools.com/typescript/typescript_object_types.php)
- [W3schools - Enums](https://www.w3schools.com/typescript/typescript_enums.php)
- [W3schools - Union Types](https://www.w3schools.com/typescript/typescript_union_types.php)
- [Geeksforgeeks - Intersection Types](https://www.geeksforgeeks.org/what-are-intersection-types-in-typescript/)

### Interfaces

در TypeScript از interface برای تعریف قراردادها و قالب‌های داده‌ای استفاده می‌شوند. اینترفیس‌ها مشخص می‌کنند که یک شیء یا کلاس باید چه ویژگی‌ها و متدهایی را داشته باشد، بدون اینکه جزئیات پیاده‌سازی را تعیین کنند. اینترفیس‌ها به ساختاردهی کد و اطمینان از سازگاری بین اجزای مختلف کمک می‌کنند.

مثال ساده از یک interface:

```shell
interface Person {
  name: string;
  age: number;
  greet(): void;
}

let user: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
```

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره interface در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Freecodecamp - How TypeScript Interfaces Work](https://www.freecodecamp.org/news/how-typescript-interfaces-work/)
- [Prismic - A Practical Guide with Code Examples](https://prismic.io/blog/typescript-interfaces)
- [Geeksforgeeks - What are TypeScript Interfaces](https://www.geeksforgeeks.org/what-is-interfaces-and-explain-it-in-reference-of-typescript/)


### Type Aliases

در Type Aliases،  TypeScript به شما اجازه می‌دهند تا یک نام جدید برای یک نوع داده‌ای موجود تعریف کنید. این کار باعث می‌شود کد خواناتر و مدیریت انواع داده‌ها آسان‌تر شود.

مثال ساده از یک Type Alias:
```shell
type ID = string | number;
let userId: ID = 123;
userId = "abc123";
```

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره Type Alias در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [Geeksforgeeks - TypeScrtip Type Aliases](https://www.geeksforgeeks.org/typescript-aliases-type/)
- [Freecodecamp - How Type Aliases Work in TypeScript](https://www.freecodecamp.org/news/how-typescript-type-aliases-work/)

### Generics

در Generics، TypeScript به شما اجازه می‌دهند تا توابع، کلاس‌ها و اینترفیس‌هایی بنویسید که با انواع مختلفی از داده‌ها کار کنند بدون اینکه نوع خاصی به آن‌ها محدود شود. این کار باعث می‌شود کد قابل استفاده مجدد و انعطاف‌پذیرتر شود.

مثال ساده از یک تابع Generic:

```shell
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(123);
```

در این مثال، تابع identity با هر نوع داده‌ای کار می‌کند و نوع ورودی و خروجی آن با T مشخص می‌شود.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره Generic در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [W3schools - Basic Generics](https://www.w3schools.com/typescript/typescript_basic_generics.php)
- [Freecodecamp - How TypeScript Generics Work](https://www.freecodecamp.org/news/how-typescript-generics-work/)
- [Prismic - Understanding TypeScript Generics](https://prismic.io/blog/typescript-generics)


### Decorators

دکوریتورها (Decorators) در TypeScript یک ویژگی قدرتمند هستند که به شما امکان می‌دهند تا رفتار کلاس‌ها و اعضای آن‌ها را تغییر دهید یا به آن‌ها قابلیت‌های جدیدی اضافه کنید. دکوریتورها در حقیقت توابعی هستند که به کلاس‌ها، متدها، ویژگی‌ها، یا پارامترهای متدها اعمال می‌شوند. دکوریتورها با استفاده از @ پیش از تعریف آن‌ها، مشخص می‌شوند.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره دکوریتورها در TypeScript، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Medium - What are Decorators in Typescript](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f)
- [Refine - TypeScript Decorators in Brief](https://refine.dev/blog/typescript-decorators/)