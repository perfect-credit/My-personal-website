---
title: 'Healthcare data platform'
summary: 'Batch and streaming pipelines feeding analytical warehouses, plus the dbt models, quality checks, and lineage that made the output trustworthy enough to act on.'
outcome: 'dbt transformation pipelines handling over a million events daily, with schema validation, reconciliation, and lineage tracking wired into every release.'
tech: ['Python', 'PySpark', 'Databricks', 'Kafka', 'dbt', 'Airflow', 'Redshift', 'ClickHouse']
order: 3
published: true
---

<!--
  Grounded in your Diana Health work (07/2024 – 12/2025) as described in your CV.
  Trade-off questions are yours to answer.
-->

## The problem

Analytics and ML are downstream of a question nobody enjoys asking: can you trust
this number? Warehouses that answer "mostly" get quietly worked around — teams
build shadow spreadsheets, and the platform stops being the source of truth long
before anyone admits it.

## What I built

Analytical warehouses across Redshift, BigQuery, and ClickHouse, with star schemas
and dimensional models designed to serve both analytics and ML use cases.

Feeding them: large-scale batch and real-time processing on Databricks, PySpark,
and Kafka over petabyte-scale datasets, orchestrated with Airflow and Dagster. The
transformation layer was modular dbt with automated testing, lineage tracking, and
CI/CD deployment, handling over a million events daily.

Around that, the parts that decide whether a platform is believed: end-to-end event
tracking and identity resolution unifying customer activity across devices, reverse
ETL syncing warehouse data back out to CRM and marketing platforms for segmentation
and attribution, and a data governance framework doing schema validation, quality
checks, reconciliation, metadata lineage, and automated alerting. I also built the
internal React dashboards that surfaced pipeline health and data quality to
engineering and business stakeholders — the platform's own observability, aimed at
the people who needed to trust it.

## Decisions and trade-offs

<!-- TODO (Dmytro): Fill these in. -->

- **Three warehouses.** Redshift, BigQuery, and ClickHouse is an unusual spread and
  the first thing a reader will question. What went where, and why? If it was
  partly historical rather than designed, say so — that's a more credible answer
  than a tidy one.
- **Batch vs. streaming.** Where did you draw the line, and why? Every real platform
  is both; the boundary is the interesting part.
- **Airflow and Dagster.** You list both. What drove using each?
- **Identity resolution.** The genuinely hard problem here. What was your matching
  approach, and what did you do about false merges?
- **Governance when it fails.** What happened when a quality check tripped — did the
  pipeline halt, quarantine, or alert and continue? This separates senior from mid.
- **The incident.** A pipeline that broke badly and what you changed afterward.
  Often the most memorable thing on a portfolio.

## Result

<!-- TODO (Dmytro): "Petabyte-scale" and "1M+ daily events" are both in your CV.
     Be ready to break them down — total under management vs. processed per day
     are very different claims. -->
