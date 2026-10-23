# Bagus Bernadi · Data Analyst Portfolio

**Process Engineer → Data Analyst | Manufacturing (PLC Splitter) · SQL · Python · Statistics · Dashboards**

📍 Karawang, West Java, Indonesia · [LinkedIn](https://www.linkedin.com/in/bagus-bernadi/) · [Email](mailto:bagus.bernadi@gmail.com)

🌐 **Portfolio site:** https://bikacu.github.io/Portfolio/

This repository is the hub that links 34 data projects. Each project has its own repository and GitHub Pages site, and starts from a business question, then shows the data, analysis, recommendation, and estimated impact. Manufacturing projects use simulated or anonymized data.

---

## Maintenance (untuk saya)

Tanpa build step, tanpa framework. Struktur:

```
index.html            Halaman utama (EN/ID toggle)
assets/               style.css, app.js, favicon.svg
data/projects.js      SATU-SATUNYA file yang perlu diedit untuk update project
docs/PROJECT-REPO-GUIDE.md   Aturan untuk 34 repo project
404.html  .nojekyll
```

### Update status project
Edit `data/projects.js`, field `status`: `planned` (tombol "Coming soon") · `design` · `in-progress` · `done` (tombol View project + Code aktif).

Link otomatis: `https://bikacu.github.io/<slug>/` dan `https://github.com/Bikacu/<slug>`. Jika URL berbeda (misalnya dashboard Streamlit), tambahkan `"live": "https://..."`.

### Daftar repo project (nama repo = slug)

| No | Project | Repo | Status |
|---|---|---|---|
| 01 | Rainfall Pattern Analysis | `rainfall-pattern-analysis` | planned |
| 02 | Customer Churn Driver Analysis | [`Project-2-Customer-Churn-Analysis`](https://github.com/bagusbernadi/Project-2-Customer-Churn-Analysis) | design |
| 03 | Yield, Rework & Defect Tracking System | `yield-rework-defect-tracking` | design |
| 04 | Before–After Defect Reduction (QCC Coating Damage) | `before-after-defect-reduction` | design |
| 05 | Sensor Time-Series Anomaly Detection | `sensor-anomaly-detection` | planned |
| 06 | Energy Consumption Dashboard | `energy-consumption-dashboard` | planned |
| 07 | NG Sampling vs Core Test | `ng-sampling-vs-core-test` | planned |
| 08 | Property Price Analysis | `property-price-analysis` | planned |
| 09 | Sales & Customer Dashboard | `sales-customer-dashboard` | in-progress |
| 10 | Cycle Time & Bottleneck Analysis | `cycle-time-bottleneck-analysis` | planned |
| 11 | A/B Test Analysis | `ab-test-analysis` | planned |
| 12 | Process Comparison Analysis | `process-comparison-analysis` | planned |
| 13 | SpaceX Falcon 9 Landing Analysis | `spacex-falcon9-landing-analysis` | planned |
| 14 | Social Media Performance Analytics | `social-media-performance-analytics` | planned |
| 15 | SPC Control Chart & Capability Dashboard | `spc-control-chart-dashboard` | planned |
| 16 | Learning Curve Analysis | `learning-curve-analysis` | planned |
| 17 | Supplier Quality Scorecard | `supplier-quality-scorecard` | planned |
| 18 | LLM-based Rework/Defect Note Classifier | `llm-defect-note-classifier` | planned |
| 19 | Data Quality Audit & Anti-Bypass Template | `data-quality-audit` | planned |
| 20 | Staking Lens Data Pipeline + Dashboard | `staking-lens-data-pipeline` | planned |
| 21 | Natural Language to SQL Analytics Assistant | `nl-to-sql-analytics-assistant` | planned |
| 22 | Cohort & RFM Segmentation | `cohort-rfm-segmentation` | planned |
| 23 | Telegram Bot Automated KPI Reporting | `telegram-kpi-report-bot` | planned |
| 24 | Privacy-Preserving Data Sharing Pipeline | `privacy-preserving-data-pipeline` | planned |
| 25 | Messy Excel Report Parser | `messy-excel-report-parser` | planned |
| 26 | Spec Compliance Extraction | `spec-compliance-extraction` | planned |
| 27 | Analytics Engineering Mini-Warehouse | `analytics-mini-warehouse` | planned |
| 28 | Predictive Maintenance Failure Analysis | `predictive-maintenance-failure-analysis` | planned |
| 29 | Root Cause Analysis Statistics | `root-cause-analysis-statistics` | planned |
| 30 | Production Data Entry App + Dashboard | `production-data-entry-app` | planned |
| 31 | Job Market Scraping & Skill Demand Analysis | `job-market-skill-demand` | planned |
| 32 | AD Applicability Checker | `ad-applicability-checker` | planned |
| 33 | Automated ETL: Excel Log → SQL Database | `automated-etl-excel-to-sql` | planned |
| 34 | Customer Behavioral Segmentation | `customer-behavioral-segmentation` | planned |


### Aktifkan GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
