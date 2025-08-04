# Observability در ASP.NET Core با استفاده از OpenTelemetry

## مقدمه

در دنیای توسعه نرم‌افزار مدرن، مخصوصاً در سیستم‌های توزیع‌شده، نیاز به **درک رفتار سیستم در زمان اجرا** اهمیت بالایی دارد. مفهومی که این نیاز را پاسخ می‌دهد، Observability است.

## اهداف این فاز

* آشنایی با مفهوم Observability و اجزای آن
* یادگیری استفاده از OpenTelemetry در پروژه‌های ASP.NET Core
* جمع‌آوری و مشاهده داده‌های Logs، Metrics و Traces
* آشنایی با ابزارهای Jaeger، Prometheus و Grafana برای مشاهده و تحلیل داده‌ها

---

## 1. Observability چیست؟

Observability به توانایی سیستم برای ارائه اطلاعات درونی خود از طریق خروجی‌هایی مانند log، metric و trace گفته می‌شود. سه ستون اصلی Observability:

* **Logs**: پیام‌هایی متنی برای ثبت رویدادها
* **Metrics**: اندازه‌گیری‌های عددی برای تحلیل وضعیت سیستم
* **Traces**: بررسی مسیر اجرای درخواست‌ها در بخش‌های مختلف سیستم

## 2. معرفی OpenTelemetry

OpenTelemetry یک استاندارد و مجموعه ابزاری متن‌باز برای جمع‌آوری داده‌های observability (logs, metrics, traces) از اپلیکیشن‌هاست.

### اجزای اصلی:

* **Instrumentation SDK**: برای ثبت داده‌ها از داخل اپلیکیشن
* **Collector**: برای جمع‌آوری و انتقال داده‌ها به ابزارهای دیگر
* **Exporter**: برای ارسال داده به مقاصدی مثل Jaeger یا Prometheus

## 3. پیاده‌سازی در ASP.NET Core

### نصب پکیج‌ها:

```bash
dotnet add package OpenTelemetry.Extensions.Hosting
```

```bash
dotnet add package OpenTelemetry.Exporter.Console
```

```bash
dotnet add package OpenTelemetry.Exporter.Jaeger
```

```bash
dotnet add package OpenTelemetry.Exporter.Prometheus.AspNetCore
```

### پیکربندی در `Program.cs`:

```csharp
builder.Services.AddOpenTelemetry()
    .WithTracing(tracerProviderBuilder =>
    {
        tracerProviderBuilder
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation()
            .AddJaegerExporter();
    })
    .WithMetrics(metricsProviderBuilder =>
    {
        metricsProviderBuilder
            .AddAspNetCoreInstrumentation()
            .AddPrometheusExporter();
    });
```

---

## 4. راه‌اندازی ابزارهای مشاهده‌گر با Docker

### فایل `docker-compose.yml`

```yaml
version: '3.7'
services:
  jaeger:
    image: jaegertracing/all-in-one:1.39
    ports:
      - "16686:16686"  # UI
      - "14268:14268"  # OpenTelemetry collector

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
      - targets: ['host.docker.internal:9184']
```

> توجه: در لینوکس ممکن است لازم باشد آدرس `host.docker.internal` را به آدرس IP شبکه محلی یا `host.docker.internal` مخصوص لینوکس تغییر دهید.

---

## 5. تحلیل داده‌ها

### بررسی Traces در Jaeger:

* باز کردن UI از آدرس: `http://localhost:16686`
* مشاهده مسیر اجرای درخواست‌های API

### بررسی Metrics در Prometheus:

* باز کردن آدرس: `http://localhost:9090`
* مشاهده مقادیر متریک‌های ثبت شده مانند latency، request count و ...

### ساخت داشبورد در Grafana:

* ورود به Grafana از آدرس: `http://localhost:3000`
* افزودن Data Source: Prometheus
* ساخت داشبورد سفارشی با استفاده از متریک‌های ASP.NET

---

## 6. تمرین عملی

### سناریو:

* ایجاد API برای مدیریت محصولات (`ProductController`)
* افزودن Instrumentation با OpenTelemetry
* مشاهده traceها در Jaeger و metricها در Prometheus
* ساخت داشبورد با اطلاعات: Request count, Error rate, Duration

---

## منابع تکمیلی:

* [OpenTelemetry .NET Docs](https://opentelemetry.io/docs/instrumentation/net/)
* [Jaeger Tracing](https://www.jaegertracing.io/)
* [Prometheus Monitoring](https://prometheus.io/)
* [Grafana Observability](https://grafana.com/)

---

در فازهای بعدی می‌توان logging با Serilog یا OpenTelemetry Logs و اتصال به Loki را نیز بررسی کرد.
