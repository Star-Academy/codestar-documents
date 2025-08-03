---
title: Signals
description: The art of reactive harmony
---

## 🔥 راهنمای کامل Angular Signals 


**Angular Signals**
یک سیستم مدیریت وضعیت
(State Management)
است که به فریم‌ورک انگولار اجازه می‌دهد تغییرات داده در اپلیکیشن شما را به شکلی دقیق و بهینه ردیابی کند. این رویکرد جدید، مکانیزم 
**Change Detection**
را متحول کرده و منجر به بهبود چشمگیر پرفورمنس می‌شود.

### مفاهیم پایه‌ای

سیستم
Signals
بر سه مفهوم اصلی استوار است که با هم کار می‌کنند تا یک سیستم واکنشی
(Reactive)
قدرتمند را شکل دهند.

#### 1\. `signal()`: Source of Truth

یک
`signal`
یک "جعبه" یا wrapper برای یک مقدار است که می‌تواند به مرور زمان تغییر کند. این جعبه به هر مصرف‌کننده‌ای
(consumer)
که مقدار آن را می‌خواند، "اطلاع" می‌دهد.

  - **`WritableSignal<T>`**: این نوع
`signal`
که با تابع
`signal()`
ساخته می‌شود، قابل نوشتن است.
  - **`ReadonlySignal<T>`**: این نوع
`signal`
فقط قابل خواندن است.
`computed`
ها از این نوع هستند.

**ایجاد و استفاده از
`signal`:**

برای ساختن یک
`signal`
قابل نوشتن، از تابع
`signal()`
با یک مقدار اولیه استفاده می‌کنیم.

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Counter: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  // ایجاد یک WritableSignal با مقدار اولیه 0
  count = signal(0);

  increment() {
    // برای تغییر مقدار بر اساس مقدار قبلی
    this.count.update(current => current + 1);
  }

  reset() {
    // برای جایگزینی کامل مقدار
    this.count.set(0);
  }
}
```

**متدهای اصلی `WritableSignal`:**

  * `.set(value: T)`: مقدار
`signal`
را مستقیماً جایگزین می‌کند.
  * `.update(updateFn: (value: T) => T)`: مقدار
`signal`
را بر اساس مقدار فعلی آن آپدیت می‌کند.
  * `.asReadonly()`: یک
`ReadonlySignal`
از
`signal`
فعلی برمی‌گرداند تا از تغییر آن در خارج از کلاس جلوگیری شود.

#### 2\. `computed()`: مقادیر مشتق‌شده

یک
`computed`
سیگنالی است که مقدار خود را از یک یا چند
`signal`
دیگر به دست می‌آورد. این
`signal`
ها **فقط-خواندنی
(read-only)**
و 
**lazy**
هستند؛ یعنی فقط زمانی مقدارشان دوباره محاسبه می‌شود که یکی از وابستگی‌هایشان تغییر کرده باشد و کسی سعی در خواندن آن‌ها داشته باشد.

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <input (input)="firstName.set($any($event.target).value)" [value]="firstName()" />
    <input (input)="lastName.set($any($event.target).value)" [value]="lastName()" />
    <p>Full Name: {{ fullName() }}</p>
    <p>{{ debugMessage() }}</p>
  `
})
export class UserComponent {
  firstName = signal('John');
  lastName = signal('Doe');

  // fullName یک computed signal است
  fullName = computed(() => {
    console.log('Calculating fullName...'); // این لاگ فقط زمان تغییر وابستگی‌ها نمایش داده می‌شود
    return `${this.firstName()} ${this.lastName()}`;
  });

  // مثالی دیگر از computed
  debugMessage = computed(() => `First name has ${this.firstName().length} characters.`);
}
```

در این مثال،
`fullName`
فقط زمانی که
`firstName`
یا
`lastName`
تغییر کنند، دوباره محاسبه می‌شود، نه در هر بار رندر شدن کامپوننت.

#### 3\. `effect()`: عملیات جانبی (Side Effects)

یک
`effect`
کدی را اجرا می‌کند که به تغییرات یک یا چند
`signal`
واکنش نشان می‌دهد.
`effect`
ها مستقیماً در تمپلیت استفاده نمی‌شوند و مقدار بازگشتی ندارند. آن‌ها برای هماهنگ‌سازی وضعیت اپلیکیشن شما با دنیای خارج از انگولار (مثل کنسول،
`localStorage`
، یا یک کتابخانه چارت) ایده‌آل هستند.

**ویژگی‌های کلیدی
`effect`:**

  * حداقل یک بار اجرا می‌شود.
  * به طور خودکار وابستگی‌های خود را ردیابی می‌کند.
  * هر بار که وابستگی‌هایش تغییر کنند، دوباره اجرا می‌شود.

<!-- end list -->

```typescript
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true,
  template: `Value: {{ count() }}`
})
export class LoggerComponent {
  count = signal(0);

  constructor() {
    // یک effect که با هر تغییر در count، آن را در کنسول لاگ می‌کند
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
}
```

**محل تعریف `effect`:**
`effect`
ها باید در یک
**Injection Context**
(مثل
`constructor`
کامپوننت، دایرکتیو یا سرویس) ایجاد شوند. این کار باعث می‌شود انگولار به طور خودکار
`effect`
را با از بین رفتن
(destroy)
آن کامپوننت، پاکسازی کند.

-----

### مباحث پیشرفته و نکات کلیدی

#### کار با آبجکت‌ها، آرایه‌ها و Mutability

`signal`
ها به طور پیش‌فرض برابری مقادیر را با اپراتور `===` (identity comparison) بررسی می‌کنند. این یعنی برای آبجکت‌ها و آرایه‌ها،
`signal`
فقط زمانی تغییر را تشخیص می‌دهد که **رفرنس** آن عوض شود.

**دستکاری مستقیم
(Mutation)
کار نمی‌کند:**

```typescript
// ایجاد یک سیگنال با یک آرایه
const todos = signal([{ title: 'Learn signals', done: false }]);

function addTodo() {
  // ❌ اشتباه: این کار UI را آپدیت نمی‌کند
  // چون رفرنس آرایه اصلی تغییر نکرده است.
  const currentTodos = todos();
  currentTodos.push({ title: 'Write blog post', done: false });
}
```

**راه حل صحیح: به‌روزرسانی به روش Immutable**

همیشه یک آبجکت یا آرایه جدید بسازید تا انگولار تغییر را تشخیص دهد.

```typescript
function addTodo() {
  // ✅ صحیح: با استفاده از .update و ساخت یک آرایه جدید
  todos.update(currentTodos => [...currentTodos, { title: 'Write blog post', done: false }]);
}

function updateTodoTitle(index: number, newTitle: string) {
  // ✅ صحیح: آپدیت یک آیتم در آرایه به روش immutable
  todos.update(currentTodos =>
    currentTodos.map((todo, i) => (i === index ? { ...todo, title: newTitle } : todo))
  );
}
```

#### تابع برابری (`equality function`)

شما می‌توانید رفتار پیش‌فرض تشخیص تغییر را با ارائه یک تابع
`equal`
در زمان ساخت
`signal`
تغییر دهید. این تابع دو مقدار (قدیمی و جدید) را می‌گیرد و اگر برابر باشند باید
`true`
برگرداند.

این کار برای زمانی مفید است که می‌خواهید مقایسه "عمیق"
(deep comparison)
انجام دهید، هرچند الگوی
immutable
معمولاً راه حل بهتری است.

```typescript
import { signal } from '@angular/core';
import { isEqual } from 'lodash-es'; // یک کتابخانه برای مقایسه عمیق

// یک سیگنال که فقط زمانی آپدیت می‌شود که محتوای داخلی آبجکت تغییر کند
const user = signal({ name: 'John', age: 30 }, { equal: isEqual });

// این آپدیت نادیده گرفته می‌شود چون محتوا یکسان است
user.set({ name: 'John', age: 30 });
```

#### `untracked()`: خواندن بدون ایجاد وابستگی

گاهی اوقات لازم است مقدار یک
`signal`
را داخل یک 
`computed`
یا
`effect`
بخوانید، اما نمی‌خواهید به آن وابسته شوید.
`untracked`
به شما اجازه می‌دهد این کار را انجام دهید.

```typescript
const currentUser = signal('John');
const logMessage = signal('');

effect(() => {
  // این effect فقط به logMessage وابسته است
  console.log(logMessage());

  // مقدار currentUser را می‌خوانیم اما به آن وابسته نمی‌شویم
  const user = untracked(currentUser);
  console.log(`User for this log entry: ${user}`);
});
```

#### `effect` و Clean-up Functions

یک 
`effect`
می‌تواند یک تابع
`onCleanup`
را ثبت کند. این تابع قبل از اجرای بعدی
`effect`
یا زمانی که
`effect`
از بین می‌رود (destroy) اجرا می‌شود. این قابلیت برای پاکسازی منابعی مثل اشتراک‌های WebSocket یا تایمرها عالی است.

```typescript
effect((onCleanup) => {
  const user = currentUser();

  const timer = setTimeout(() => {
    console.log(`1 second ago, the user was ${user}`);
  }, 1000);

  onCleanup(() => {
    clearTimeout(timer);
  });
});
```

-----

### مطالعه بیشتر (منابع رسمی)

برای درک عمیق‌تر و مشاهده API های کامل، مستندات رسمی انگولار بهترین منبع شماست:

  * **راهنمای اصلی Signals**: [https://angular.dev/guide/signals](https://angular.dev/guide/signals)
  * **صفحه API تابع `signal`**: [https://angular.dev/api/core/signal](https://angular.dev/api/core/signal)
  * **صفحه API تابع `computed`**: [https://angular.dev/api/core/computed](https://angular.dev/api/core/computed)
  * **صفحه API تابع `effect`**: [https://angular.dev/api/core/effect](https://angular.dev/api/core/effect)

امیدوارم این راهنمای کامل و به‌روز، به شما در تسلط بر Angular Signals کمک کند. موفق باشید\!
