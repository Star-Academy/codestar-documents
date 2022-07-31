---
title: CI/CD
description: Where is the pipe that was holding the door open?
---

## مقدمه

زمانی که بر روی یک پروژۀ شخصی کار می‌کنیم،
معمولاً به ندرت احتیاج داریم آن را تست یا مستقر کنیم.
اما زمانی که پروژه به صورت تیمی توسعه داده شود،
نیاز است به طور مداوم تست‌های مختلف اجرا و فرآیند استقرار به‌طور خودکار انجام شود.
برای حل این مشکل می‌توانیم از روش‌های Continuous Integration و Continuous Deployment استفاده کنیم.

-   چگونه می‌توان تست‌ها را به‌طور خودکار اجرا کرد؟
-   چگونه می‌تواند فرآیندی جهت استقرار پروژه تنظیم کرد؟
-   چگونه می‌توان گزارشی از تمیزی کدهای جدید بدست آورد؟

---

## یادگیری

### تعریف

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Medium - What is CI/CD?](https://medium.com/tilicholabs/what-is-ci-cd-c7c047b80e6b)
-   [Medium - The Journey to CI/CD](https://medium.com/driven-by-code/the-journey-to-ci-cd-b1872927c36b)
-   [Medium - What's the Point of CI Anyway?](https://medium.com/swlh/whats-the-point-of-ci-anyway-ac3f9eaa244c)

---

### GitHub Actions

یکی از ابزارهای CI/CD معروف، GitHub Actions است
که به کمک آن، می‌توانیم یک Pipeline شامل عملیات Build، اجرای Testها، استقرار پروژه
و دیگر عملیاتی که در دستهٔ CI/CD قرار می‌گیرد را به Repository خود اضافه کنیم.

#### Setup

یک پوشه با نام `github.` در پوشۀ اصلی پروژه بسازید
و یک پوشه با نام `workflows` به آن اضافه کنید.
حال یک فایل که به پسوند `yml` ختم می‌شود را درون پوشۀ `workflows` قرار دهید؛
به‌طور مثال ما از نام `deploy.yml` استفاده می‌کنیم.

برای آنکه نام Workflow را مشخص کنید، کافی است محتوای زیر را به فایل خود اضافه نمایید:

```yaml
name: Deployment Workflow
```

#### Conditions

ممکن است بخواهید فقط زمانی Workflow اجرا شود که بر روی یک Branch خاص عملیات Push را انجام می‌دهید؛
در این صورت محتوای زیر را به فایل خود اضافه نمایید:

```yaml
on:
    push:
        branches:
            - main
```

اما اگر می‌خواهید بر روی تمام Branchها این اتفاق بیفتد؛
از محتوای زیر استفاده کنید:

```yaml
on:
    push:
```

همچنین می‌توانید شرایط دیگری را برای اجرا شدن Workflow در نظر بگیرید؛
به‌عنوان مثال ایجاد یک Pull Request جدید یا عوض‌شدن وضعیت Issueها.

#### Test

هر Workflow می‌تواند شامل چند Job باشد که به‌صورت موازی یا متوالی انجام می‌شوند.

برای تعریف کار Test می‌توانید از محتوای زیر استفاده کنید:

```yml
jobs:
    test:
        name: Test
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v2

            - name: Setup Node
              uses: actions/setup-node@v1
              with:
                  node-version: '16.x'

            - name: Install Dependencies
              run: npm ci

            - name: ESLint
              run: npm run eslint:check

            - name: Stylelint
              if: success()
              run: npm run stylelint:check

            - name: Prettier
              if: success()
              run: npm run prettier:check

            - name: Angular
              if: success()
              run: npm run test:ci
```

در اینجا ابتدا نامی برای Job در نظر می‌گیریم تا بتوانیم آن را از سایر Jobها تشخیص دهیم؛
در خط بعد سیستم‌عاملی که Job بر روی آن اجرا می‌شود را مشخص کنیم؛
سپس مراحل کار را تعریف می‌کنیم که هر کدام را در ادامه به‌صورت مختصر توضیح می‌دهیم.

##### Checkout

همان‌طور که شما برای انجام هر کاری احتیاج دارید ابتدا بر روی Branch مورد نظر عملیات Checkout را انجام دهید،
زمانی که از GitHub Actions استفاده می‌کنیم هم باید این عملیات انجام شود.

##### Setup Node

در این مرحله Node.js بر روی سیستم عامل نصب می‌شود.
شما می‌توانید یک نسخۀ خاص از Node.js را که مطمئنید با پروژۀ شما سازگار است نصب کنید.

##### Install Dependencies

با اجرای دستور `npm ci` در ترمینال به نصب Dependencyها می‌پردازیم.

##### ESLint

با اجرای دستور `npm run eslint:check` از پاس‌شدن تست‌های ESLint اطمینان حاصل می‌کنیم.

##### Stylelint

با اجرای دستور `npm run stylelint:check` از پاس‌شدن تست‌های Stylelint اطمینان حاصل می‌کنیم.

##### Prettier

با اجرای دستور `npm run prettier:check` از پاس‌شدن تست‌های Prettier اطمینان حاصل می‌کنیم.

##### Angular

با اجرای دستور `npm run test:ci` از پاس‌شدن تست‌های Angular اطمینان حاصل می‌کنیم.

##### Scripts

این Scriptها را باید به فایل `package.json` اضافه نمایید:

```json
{
    "name": "...",
    "version": "...",
    "scripts": {
        "eslint:check": "ng lint",
        "eslint:fix": "ng lint --fix",
        "stylelint:check": "stylelint \"**/*.scss\"",
        "stylelint:fix": "stylelint \"**/*.scss\" --fix",
        "prettier:check": "prettier . --check",
        "prettier:fix": "prettier . --write",
        "test:ci": "ng test --browsers=ChromeHeadless --watch=false"
    }
}
```

همچنین برای راحتی کار شما، نسخۀ `fix:` را برای هر Script قرار داده‌ایم
تا با استفاده از آن بتوانید خطاهای احتمالی را به‌صورت خودکار رفع کنید.

#### Build

برای تعریف کار Build می‌توانید از محتوای زیر استفاده کنید:

```yml
jobs:
    test: ...
    build:
        name: Build
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v2

            - name: Setup Node
              uses: actions/setup-node@v1
              with:
                  node-version: '16.x'

            - name: Install Dependencies
              run: npm ci

            - name: Build
              run: npm run build:prod

            - name: 404.html Hack
              if: success()
              run: cp dist/my-project-name/index.html dist/my-project-name/404.html

            - name: Upload Build
              if: success()
              uses: actions/upload-artifact@v1
              with:
                  name: deploy_dist
                  path: dist
```

با اجرای دستور `npm run build:prod` از پروژه Build تهیه می‌کنیم.

این Script را باید به فایل `package.json` اضافه نمایید:

```json
{
    "name": "...",
    "version": "...",
    "scripts": {
        "build:prod": "ng build --base-href=/my-project-name/"
    }
}
```

:::caution

به جای `my-project-name` باید نام پروژۀ خود را قرار دهید.

:::

##### 404.html Hack

زمانی که از GitHub Pages برای استقرار سایت استفاده می‌کنیم،
اگر به‌صورت دستی آدرس یکی از صفحات را در مرورگر وارد کنیم،
صفحۀ 404 نمایش داده می‌شود و از Routing خودِ Angular استفاده نمی‌کند.
برای حل این مشکل یک کپی از `index.html` می‌گیریم و نام آن را `404` می‌گذاریم.

##### Upload Build

تنها در صورتی که نتیجۀ Build موفقیت‌آمیز بود،
آن را به طور موقت با نام `deploy_dist` ذخیره می‌کنیم تا در ادامه بتوانیم از آن استفاده کنیم.

#### Deploy

برای تعریف کار Deploy می‌توانید از محتوای زیر استفاده کنید:

```yaml
jobs:
    test: ...
    build: ...
    deploy:
        name: Deploy
        runs-on: ubuntu-latest
        needs:
            - test
            - build
        steps:
            - name: Checkout
              uses: actions/checkout@v1

            - name: Download Build
              uses: actions/download-artifact@v1
              with:
                  name: deploy_dist

            - name: Deploy to GitHub Pages
              uses: JamesIves/github-pages-deploy-action@releases/v3
              with:
                  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                  BRANCH: gh-pages
                  FOLDER: deploy_dist/my-project-name
```

:::caution

به جای `my-project-name` باید نام پروژۀ خود را قرار دهید.

:::

##### Download Build

پوشه‌ای که در مرحلۀ قبل ذخیره کرده بودیم را در اینجا دانلود می‌کنیم.

##### Deploy to GitHub Pages

محتویات پوشه را داخل برنچ `gh-pages` قرار می‌دهیم که GitHub بتواند از آن استفاده کند.

#### Monitor

از این پس، بعد از آنکه بر روی Branch مورد نظر عملیات Push انجام دهید،
در صفحۀ Actions پروژۀ خود می‌توانید اجرا آن را مرحله به مرحله زیر نظر بگیرید
و در صورتی که خطایی رخ دهد از آن باخبر شوید.

---

## پروژه

با توجه به مطالبی که در این فاز یاد گرفتید،
فرآیند CI/CD را برای پروژۀ خود فراهم کنید.
