---
title: Observability
description: ''
---

## مقدمه

در دنیای توسعه نرم‌افزار مدرن، مخصوصاً در سیستم‌های توزیع‌شده، نیاز به **درک رفتار سیستم در زمان اجرا** اهمیت بالایی
دارد. مفهومی که این نیاز را پاسخ می‌دهد،
Observability
است.

## اهداف این فاز

* آشنایی با مفهوم
  Observability
  و اجزای آن
* یادگیری استفاده از
  OpenTelemetry
  در پروژه‌های
  ASP.NET Core
* جمع‌آوری و مشاهده داده‌های
  Logs، Metrics
  و
  Traces
* آشنایی با ابزارهای
  Jaeger، Prometheus
  و
  Grafana
  برای مشاهده و تحلیل داده‌ها

## Observability چیست؟

Observability به توانایی سیستم برای ارائه اطلاعات درونی خود از طریق خروجی‌هایی مانند log، metric و trace گفته می‌شود. سه
ستون اصلی Observability:

* **Logs**: پیام‌هایی متنی برای ثبت رویدادها
* **Metrics**: اندازه‌گیری‌های عددی برای تحلیل وضعیت سیستم
* **Traces**: بررسی مسیر اجرای درخواست‌ها در بخش‌های مختلف سیستم

## معرفی OpenTelemetry

OpenTelemetry یک استاندارد و مجموعه ابزاری متن‌باز برای جمع‌آوری داده‌های observability (logs, metrics, traces) از
اپلیکیشن‌هاست.

### اجزای اصلی:

* **Instrumentation SDK**: برای ثبت داده‌ها از داخل اپلیکیشن
* **Collector**: برای جمع‌آوری و انتقال داده‌ها به ابزارهای دیگر
* **Exporter**: برای ارسال داده به مقاصدی مثل Jaeger یا Prometheus

## پیاده‌سازی در ASP.NET Core

برای پیاده‌سازی Observability در ASP.NET Core می‌توانید از OpenTelemetry استفاده کنید.  
راهنمای رسمی OpenTelemetry برای ASP.NET Core شامل نصب پکیج‌ها، پیکربندی Tracing، Metrics و Logs، و اتصال به ابزارهایی
مثل Jaeger و Prometheus است.

**برای شروع میتوانید از این لینک استفاده کنید**  
[OpenTelemetry .NET – Getting Started](https://opentelemetry.io/docs/languages/dotnet/getting-started/)

**در قدم بعدی برای استفاده از Instrumentation و ایجاد Log ,Trace و Metric از این لینک ها استفاده کنید**

- [OpenTelemetry .NET – Instrumentation](https://opentelemetry.io/docs/languages/dotnet/instrumentation/)
- [OpenTelemetry .NET – Example: Use OpenTelemetry with Prometheus, Grafana, and Jaeger](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-prgrja-example)

## 4. راه‌اندازی ابزارهای Observability با Docker

### فایل `docker-compose.yml`

```yaml
version: '3.7'
services:
  jaeger:
    image: jaegertracing/all-in-one:1.39
    ports:
      - "16686:16686"
      - "14268:14268"

  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
```

### فایل `prometheus.yml`

```yaml
global:
  scrape_interval: 5s

scrape_configs:
  - job_name: 'aspnetcore'
    static_configs:
      - targets: [ 'host.docker.internal:9184' ]
```

## 5. تحلیل داده‌ها

### بررسی Traces در Jaeger:

* آدرس: `http://localhost:16686`

### بررسی Metrics در Prometheus:

* آدرس: `http://localhost:9090`

### ساخت داشبورد در Grafana:

* آدرس: `http://localhost:3000`

## تمرین عملی

## Metrics

1. فایل زیر رو با نام `simple-post-load.js` بسازید.
2. آدرس API، هدر و بدنه رو با مقادیر پروژه خودتون عوض کنید.
3. دستور `k6 run simple-post-load.js` رو اجرا کنید.
4. حین اجرا، داشبورد پیش‌فرض ASP.NET Core رو در Grafana باز کنید و متریک‌های مربوط به این API رو ببینید.

```javascript
import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 20,
    duration: '1m',
};

const URL = 'http://localhost:5000/api/search';
const HEADERS = {'Content-Type': 'application/json'};
const BODY = JSON.stringify({
    query: 'observability',
    page: 1,
    pageSize: 10,
});

export default function() {
    const res = http.post(URL, BODY, {headers: HEADERS});

    check(res, {
        'status is OK/Created/NoContent': (r) => [200, 201, 204].includes(r.status),
    });

    sleep(0.3);
}
```

## Traces

1. در روند جستجو و استفاده از سرویس های مختلف Activity های مورد نیاز را بسازید
2. یک جست‌وجو انجام بدید و در Jaeger مراحل و زمان هر کدام از مراحل را بررسی کنید.
3. در مرحله ی یافتن داکیومنت ها اطلاعات نتایج را در Activity ها قرار دهید.

## Logs

1. لاگ برای زمان بالا آمدن، توقف و خاموش شدن سرویس ثبت کنید.
2. برای هر جست‌وجو، در شروع و پایان لاگ بزنید:
   - در شروع: متن کوئری یا خلاصه اون و TraceId.
   - در پایان: تعداد نتایج و مدت زمان جست‌وجو.
3. برای خطاها لاگ با سطح Error ثبت کنید.
4. مطمئن شوید TraceId در لاگ‌ها و Jaeger یکسان باشند.
