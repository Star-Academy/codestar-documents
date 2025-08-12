---
title: Ngrx
description: Where every whisper finds an echo in the state
---

## معماری مدرن NgRx: مدیریتState با `ComponentStore`

در معماری‌های مدرن انگولار، دیگر نیازی به پیچیدگی‌های استور سراسری
(`@ngrx/store`)
با اکشن‌ها، ردیوسرها و افکت‌های جداگانه نیست. کتابخانه 
`@ngrx/component-store`
به تنهایی آنقدر قدرتمند است که می‌تواند هم نیازهای 
**استیت محلی (Local State)**
 و هم 
 **استیت سراسری (Global State)**
  را به شیوه‌ای بسیار ساده‌تر و بهینه‌تر مدیریت کند.

این مستند، راهنمای شما برای پیاده‌سازی این معماری یکپارچه است.

**لینک مستندات رسمی برای مطالعه عمیق‌تر:** [NgRx ComponentStore Guide](https://ngrx.io/guide/component-store)

-----

### **۱. قلب تپنده معماری: `ComponentStore`**

`ComponentStore`
یک سرویس مستقل و سبک است که برای مدیریت استیت به صورت واکنشی
(Reactive)
طراحی شده است. تمام منطق مربوط به خواندن، به‌روزرسانی و اجرای عملیات جانبی
(Side Effects)
در خود آن کپسوله می‌شود.

#### **اجزای اصلی یک `ComponentStore`**

یک `ComponentStore` استاندارد از بخش‌های زیر تشکیل شده است:

**الف) تعریف State و مقداردهی اولیه:**

ابتدا یک اینترفیس برای شکل
(Shape)
استیت خود تعریف کرده و در
`constructor`
با مقادیر اولیه آن را ایجاد می‌کنید.

```typescript
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

export interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

@Injectable() // Can be provided in a component or in root
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor() {
    super({
      movies: [],
      isLoading: false,
      error: null,
    });
  }
}
```

**ب) خواندن استیت با Selectors:**

برای خواندن داده از استور، از متد
`select`
استفاده می‌کنیم. این متد یک 
Observable
برمی‌گرداند که با هر تغییر در آن بخش از استیت، مقدار جدید را منتشر می‌کند.

```typescript
// Inside MoviesStore class

// Selector for a piece of state
readonly movies$ = this.select(state => state.movies);
readonly isLoading$ = this.select(state => state.isLoading);

// Selector that combines multiple pieces of state (derived state)
readonly vm$ = this.select(
  this.movies$,
  this.isLoading$,
  (movies, isLoading) => ({ movies, isLoading })
);
```

**ج) تغییر استیت با `updater`:**

برای تغییر
**همزمان (Synchronous)**
استیت، از متد
`updater`
استفاده می‌کنیم.
`updater`
یک تابع است که استیت فعلی و داده‌های جدید را می‌گیرد و استیت جدید را برمی‌گرداند. این جایگزین
Reducer
ها در استور سراسری است.

```typescript
// Inside MoviesStore class

readonly setLoading = this.updater((state, isLoading: boolean) => ({
  ...state,
  isLoading,
}));

readonly setMovies = this.updater((state, movies: Movie[]) => ({
  ...state,
  movies,
  error: null, // Also reset error on success
}));

readonly setError = this.updater((state, error: string) => ({
  ...state,
  error,
  movies: [], // Clear movies on error
}));
```

**د) اجرای عملیات جانبی با `effect`:**

برای کارهای
**ناهمزمان (Asynchronous)**
مانند فراخوانی
API
، از متد
`effect`
استفاده می‌کنیم.
`effect`
یک
Observable
را به عنوان ورودی می‌گیرد و به شما اجازه می‌دهد در طول چرخه آن،
`updater`
ها را فراخوانی کنید. این جایگزین
Effects
در استور سراسری است.

```typescript
// Inside MoviesStore class
import { switchMap, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

readonly getMovies = this.effect((trigger$: Observable<string>) => {
  return trigger$.pipe(
    tap(() => this.setLoading(true)),
    switchMap((query) =>
      this.moviesApiService.search(query).pipe(
        tap({
          next: (movies) => this.setMovies(movies),
          error: (e) => this.setError(e.message),
        }),
        catchError(() => of(null)) // Prevent effect from dying on error
      )
    ),
    tap(() => this.setLoading(false))
  );
});
```

-----

### **۲. پیاده‌سازی استیت "سراسری" با `ComponentStore`**

برای داشتن یک استیت سراسری که در کل برنامه قابل دسترس باشد (مانند اطلاعات کاربر یا توکن احراز هویت)، کافیست یک
`ComponentStore`
بسازید و آن را در سطح روت
(`root`)
فراهم کنید.

**مثال: `AuthStore`**

```typescript
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface AuthState {
  user: User | null;
  token: string | null;
}

@Injectable({ providedIn: 'root' }) // <-- The magic is here!
export class AuthStore extends ComponentStore<AuthState> {
  constructor() {
    super({ user: null, token: null });
  }

  readonly user$ = this.select(state => state.user);
  readonly token$ = this.select(state => state.token);
  readonly isLoggedIn$ = this.select(state => !!state.token);

  readonly setAuthState = this.updater((state, authData: AuthState) => ({
    ...state,
    ...authData,
  }));

  readonly logout = this.updater((state) => ({
    ...state,
    user: null,
    token: null,
  }));
}
```

حالا هر کامپوننت یا سرویسی در برنامه می‌تواند
`AuthStore`
را تزریق کرده و از آن استفاده کند.

-----

### **۳. پیاده‌سازی استیت "محلی" با `ComponentStore`**

برای استیت‌هایی که فقط به یک کامپوننت و فرزندانش مربوط هستند (مثلاً وضعیت یک فرم پیچیده یا فیلترهای یک جدول)،
`ComponentStore`
را در
`providers`
همان کامپوننت فراهم کنید. با این کار، چرخه عمر استور به چرخه عمر کامپوننت گره می‌خورد و با
`destroy`
شدن کامپوننت، استور هم از حافظه پاک می‌شود.

**مثال: `UserListComponent`**

```typescript
// user-list.store.ts
@Injectable() // No providedIn here!
export class UserListStore extends ComponentStore<UserListState> {
  // ... store logic for filtering, sorting, pagination ...
}


// user-list.component.ts
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserListStore], // <-- Provided locally
})
export class UserListComponent {
  readonly vm$ = this.userListStore.vm$;

  constructor(private readonly userListStore: UserListStore) {}

  filterUsers(query: string) {
    this.userListStore.filter(query);
  }
}
```

-----

### **۴. ساخت سریع با Schematics**

برای سرعت بخشیدن به فرآیند ساخت، می‌توانید از 
NgRx Schematics
استفاده کنید:

```bash
# Generate a component store and a companion component
ng generate @ngrx/component-store:component MyFeature
```

-----

### **نتیجه‌گیری و توصیه نهایی: معماری خود را ساده کنید**

**به طور جدی توصیه می‌شود در پروژه‌های خود، معماری را بر پایه
`ComponentStore`
بنا کنید.** این رویکرد:

1.  **Boilerplate
را حذف می‌کند:** دیگر خبری از فایل‌های متعدد برای اکشن، ردیوسر و افکت نیست. همه چیز در یک کلاس جمع می‌شود.
2.  **API
یکپارچه است:** شما فقط یک الگو را یاد می‌گیرید و آن را هم برای استیت محلی و هم سراسری به کار می‌برید.
3.  **ایزوله‌سازی و کارایی بهتری دارد:** تغییرات در یک استیت محلی، باعث اجرای چرخه‌های غیرضروری در سطح برنامه نمی‌شود.
4.  **تست‌پذیری آن فوق‌العاده است:** چون هر استور یک کلاس مستقل است، تست کردن آن بسیار ساده است.

**قانون طلایی:**

  * برای استیت **سراسری و اشتراکی**
  (مثل `AuthStore`)
  ، از یک
  `ComponentStore`
  با
  `@Injectable({ providedIn: 'root' })`
  استفاده کنید.
  * برای استیت **محلی و مختص یک فیچر**، از یک
  `ComponentStore`
  با
  `providers: [MyStore]`
  در سطح کامپوننت استفاده کنید.
