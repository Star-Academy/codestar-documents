---
title: TypeScript
description: با تایپ‌ها از خطاهای اجرا خداحافظی کن
---

## مقدمه

تصور کنید در یک پروژه‌ی بزرگ جاوااسکریپت کار می‌کنید. همان‌طور که کد شما بزرگ‌تر و پیچیده‌تر می‌شود، مشکلات مختلفی پدیدار می‌شوند.
به دلیل نبود تایپ‌دهی ایستا، بسیاری از خطاها تنها زمانی مشخص می‌شوند که کد در حال اجرا است. این می‌تواند باعث بروز مشکلات جدی و غیرمنتظره‌ای شود.
فهمیدن کدها و نگهداری آن‌ها دشوارتر می‌شود، به‌ویژه اگر تایپ‌های متغیرها و توابع مشخص نباشند.
خطاهایی که در مراحل اولیه توسعه شناسایی نمی‌شوند، ممکن است به‌صورت ناگهانی در مراحل پایانی پروژه بروز کنند و زمان و هزینه بیشتری برای رفع آن‌ها نیاز باشد.

TypeScript
یک زبان برنامه‌نویسی است که بر روی جاوااسکریپت بنا شده
و انواع تایپ‌ها را برای مشخص کردن نوع داده در اخیار شما قرار می‌دهد.
این قابلیت‌ها به برنامه‌نویسان کمک می‌کند تا کدهای خود را خواناتر و قابل‌اعتمادتر بنویسند.
با مشخص کردن تایپ هر داده، کامپایلر قدرتمند
TypeScript
به کمک شما می‌آید و از بسیاری از خطاهایی که ممکن است به دلیل تایپ نامناسب داده در اجرا به آن بربخورید جلوگیری می‌کند و آن‌ها را در همان زمان کامپایل شناسایی می‌کند.
  
-   انواع تایپ‌ها در
    TypeScript
    کدام‌اند؟
-   interface
    در
    TypeScript
    چه فایده‌ای دارد؟
-   Type Aliases
   در 
    TypeScript
چه مزیتی دارد؟    
-   Generics
   در 
    TypeScript
چیست؟    
-   Decorator
    در
    TypeScript
    چه کاری برای ما انجام می‌دهد؟

---

## یادگیری

### انواع تایپ‌های primitive 

در TypeScript، انواع ابتدایی
(Primitive Types)
به انواع داده‌ای ساده و پایه‌ای اشاره دارند که معمولاً به صورت مستقیم و بدون استفاده از ساختارهای پیچیده تعریف می‌شوند. انواع ابتدایی در
TypeScript
شامل موارد زیر هستند:

| type      | تعریف                                                                         |
|-----------|-------------------------------------------------------------------------------|
| number    | برای اعداد استفاده می‌شود، مانند اعداد صحیح و اعشاری.                         |
| string    | برای رشته‌ها یا متن‌ها استفاده می‌شود.                                        |
| boolean   | برای مقادیر صحیح و غلط (true و false) استفاده می‌شود.                         |
| null      | برای متغیرهایی که مقدار آن‌ها خالی یا نال باشد.                               |
| undefined | برای متغیرهایی که مقدار آن‌ها تعریف نشده باشد.                                |
| symbol    | نوعی داده‌ی ابتدایی جدید که برای ایجاد شناسه‌های منحصر به فرد استفاده می‌شود. |
| bigint    | برای اعداد بزرگ که نمی‌توانند در نوع داده‌ی number جای بگیرند.                |

 این انواع داده‌های ابتدایی به شما امکان می‌دهند تا متغیرهای ساده و پایه‌ای را در
 TypeScript
 تعریف کنید و از آن‌ها در برنامه‌های خود استفاده کنید.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره انواع ابتدایی در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

### انواع داده‌های پیچیده‌تر در TypeScript

در
TypeScript
، علاوه بر انواع داده‌های ابتدایی، انواع داده‌های پیچیده‌تری نیز وجود دارند که به شما امکان می‌دهند تا ساختارهای داده‌ای پیشرفته‌تری را تعریف کنید. این انواع عبارتند از:

| type                                                                             | تعریف |
| ----------------- | -------------------------------------------------------------------------------- |
| Array                              | برای ذخیره‌سازی مجموعه‌ای از مقادیر استفاده می‌شود.                                                                                                              |
| Tuple                              | برای ذخیره‌سازی مجموعه‌ای ثابت از مقادیر با به ترتیب مشخص استفاده می‌شود.                                                                                        |
| Enum                               | برای تعریف مجموعه‌ای از ثابت‌ها استفاده می‌شود.                                                                                                                  |
| Union Types                        | برای متغیرهایی که می‌توانند چند نوع مختلف داشته باشند استفاده می‌شود.                                                                                            |
| Intersection Type                  | برای ترکیب چند نوع استفاده می‌شود.                                                                                                                               |
| Object                             | برای تعریف ساختارهای داده‌ای که شامل مجموعه‌ای از ویژگی‌ها هستند استفاده می‌شود.                                                                                 |
| Function Types                     | برای تعریف نوع تابع استفاده می‌شود.                                                                                                                              |

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره انواع داده‌های پیچیده در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [mdn - Arrays](https://developer.mozilla.org/en-US/docs/Glossary/Array)
- [mdn - Objects](https://developer.mozilla.org/en-US/docs/Glossary/Object)
- [Tutorials Teacher - Tuples](https://www.tutorialsteacher.com/typescript/typescript-tuple)
- [Tutorials Teacher - Enums](https://www.tutorialsteacher.com/typescript/typescript-enum)
- [Tutorials Teacher - Union Types](https://www.tutorialsteacher.com/typescript/typescript-union)
- [TypeScript - Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)

#### تمرین

- یک تابع بنویسید که یک آرایه از اعداد دریافت کند و مجموع آن‌ها را برگرداند.
- یک تابع بنویسید که می‌تواند هم یک رشته و هم یک عدد را به عنوان ورودی دریافت کند و نوع ورودی را برگرداند.
- یک 
   Enum
   برای روزهای هفته تعریف کنید و سپس یک تابع بنویسید که نام روز را به عنوان ورودی دریافت کرده و اگر روز جمعه باشد، پیامی برگرداند که تعطیل است.

---

### Interfaces

در
TypeScript
از
interface
برای تعریف قراردادها و قالب‌های داده‌ای استفاده می‌شوند. اینترفیس‌ها مشخص می‌کنند که یک شیء یا کلاس باید چه ویژگی‌ها و متدهایی را داشته باشد، بدون اینکه جزئیات پیاده‌سازی را تعیین کنند. اینترفیس‌ها به ساختاردهی کد و اطمینان از سازگاری بین اجزای مختلف کمک می‌کنند.

مثال ساده از یک
interface
:

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const personName: string = "John";

let user: Person = {
  name: personName,
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
```

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره
interface
در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Freecodecamp - How TypeScript Interfaces Work](https://www.freecodecamp.org/news/how-typescript-interfaces-work/)

#### تمرین

- یک اینترفیس به نام
  Shape
  تعریف کنید که دارای دو ویژگی
  color
  و
  calculateArea
  باشد. ویژگی
  color
  یک رشته است و ویژگی
  calculateArea
  یک تابع بدون ورودی بازگشتی عددی است.
- یک کلاس به نام
  Circle
  بنویسید که ویژگی‌های
  color
  و
  radius
  را دارد و از اینترفیس
  Shape
  پیاده‌سازی شود.

---

### Type Aliases

در
Type Aliases
،  
TypeScript
به شما اجازه می‌دهند تا یک نام جدید برای یک نوع داده‌ای موجود تعریف کنید. این کار باعث می‌شود کد خواناتر و مدیریت انواع داده‌ها آسان‌تر شود.

مثال ساده از یک
Type Alias
:
```shell
type ID = string | number;
let userId: ID = 123;
userId = "abc123";
```

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره
Type Alias
در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [Freecodecamp - How Type Aliases Work in TypeScript](https://www.freecodecamp.org/news/how-typescript-type-aliases-work/)
- [TypeScript - Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

#### تمرین

- یک
  Type Alias
  به نام
  Direction
  تعریف کنید که انواع left
  ، 
  right
  ، 
  up
  و
  down
  را به عنوان مقادیر مجاز دارد.
- یک
  Type Alias
  به نام
  BinaryOperation
  تعریف کنید که نوع تابعی با دو ورودی عددی و یک خروجی عددی را نمایش دهد.
- یک
  Type Alias
  به نام
  Action
  تعریف کنید که شامل یک شیء با دو ویژگی
  type
  به نوع رشته و
  payload
  به نوع عدد یا رشته باشد.

---

### Generics

در
Generics ،TypeScript
به شما اجازه می‌دهند تا توابع، کلاس‌ها و اینترفیس‌هایی بنویسید که با انواع مختلفی از داده‌ها کار کنند بدون اینکه نوع خاصی به آن‌ها محدود شود. این کار باعث می‌شود کد قابل استفاده مجدد و انعطاف‌پذیرتر شود.

مثال ساده از یک تابع
Generic
:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(123);
```

در این مثال، تابع
identity
با هر نوع داده‌ای کار می‌کند و نوع ورودی و خروجی آن با
T
مشخص می‌شود.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره
Generic
در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Prismic - Understanding TypeScript Generics](https://prismic.io/blog/typescript-generics)

#### تمرین

- یک تابع
  Generic
  به نام
  reverseArray
  بنویسید که یک آرایه از هر نوع داده‌ای را به عنوان ورودی دریافت کرده و آن را برعکس کند.
- یک کلاس
  Generic
  به نام
  Box
  بنویسید که یک مقدار از هر نوع داده‌ای را ذخیره کند و این مقدار را برگرداند.
- یک
  Interface Generic
  به نام
  Pair
  تعریف کنید که دو ویژگی
  first
  و
  second
  با نوع دلخواه
  T
  داشته باشد.

---

### Decorators

دکوریتورها
(Decorators)
در
TypeScript
یک ویژگی قدرتمند هستند که به شما امکان می‌دهند تا رفتار کلاس‌ها و اعضای آن‌ها را تغییر دهید یا به آن‌ها قابلیت‌های جدیدی اضافه کنید. دکوریتورها در حقیقت توابعی هستند که بر روی کلاس‌ها، متدها، ویژگی‌ها، یا پارامترهای متدها اعمال می‌شوند. دکوریتورها با استفاده از
@
پیش از تعریف آن‌ها، مشخص می‌شوند.

برای اطلاعات بیشتر و یادگیری عمیق‌تر درباره دکوریتورها در
TypeScript
، می‌توانید از منابع زیر استفاده کنید:

- [TypeScript - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Medium - What are Decorators in Typescript](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f)

---

### تست نویسی در تایپ اسکریپت با استفاده از Jasmine

#### مقدمه
تست نویسی یکی از مهم‌ترین بخش‌های توسعه نرم‌افزار است که کیفیت و پایداری کد را تضمین می‌کند. در این داکیومنت، نحوه تست نویسی در تایپ اسکریپت با استفاده از فریمورک 
Jasmine
را به شما آموزش می‌دهیم.

#### نصب و راه‌اندازی
برای شروع، نیاز به نصب 
TypeScript، Jasmine
و ابزارهای مربوطه داریم.
ابتدا، 
TypeScript
و 
Jasmine
را به صورت محلی در پروژه خود نصب کنید:

```bash
npm install --save-dev typescript jasmine @types/jasmine
```

#### تنظیمات TypeScript 

یک فایل 
tsconfig.json
در ریشه پروژه خود ایجاد کنید و تنظیمات زیر را در آن قرار دهید:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"]
}
```

#### تنظیمات Jasmine

یک فایل 
jasmine.json
در ریشه پروژه خود ایجاد کنید و تنظیمات زیر را در آن قرار دهید:

```json
{
  "spec_dir": "src",
  "spec_files": [
    "**/*[sS]pec.ts"
  ],
  "helpers": [
    "helpers/**/*.ts"
  ]
}
```

#### نوشتن اولین تست

یک فایل تست به نام 
example.spec.ts
در پوشه 
tests
ایجاد کنید و کد زیر را در آن قرار دهید:

```js
import { sum } from '../example';

describe('تابع sum', () => {
  it('باید دو عدد را با هم جمع کند', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('باید مقدار 0 را برای ورودی‌های خالی برگرداند', () => {
    expect(sum()).toBe(0);
  });
});
```

#### تابعی برای تست

یک فایل به نام example.ts در پوشه src ایجاد کنید و کد زیر را در آن قرار دهید:

```typescript
export function sum(...args: number[]): number {
  return args.reduce((acc, curr) => acc + curr, 0);
}
```

#### اجرای تست‌ها

برای اجرای تست‌ها، ابتدا 
TypeScript
را به جاوا اسکریپت کامپایل کنید و سپس تست‌ها را اجرا کنید:

```
npx tsc
npx jasmine
```

برای یادگیری بیشتر تست نویسی می‌توانید از منابع زیر استفاده کنید:

- [Jasmine - Jasmine Documentt](https://jasmine.github.io/)
- [Testim - TypeScript Unit Testing](https://www.testim.io/blog/typescript-unit-testing-101/)
