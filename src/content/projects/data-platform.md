---
title: 'Data platform — REPLACE WITH THE REAL NAME'
summary: 'One sentence: what data, for whom, and what decision it unblocked.'
outcome: 'FILL THIS IN — scale, reliability, or what the business could do afterward that it could not before.'
tech: ['Python', 'Spark', 'Databricks', 'Kafka', 'dbt', 'Airflow', 'AWS']
order: 2
published: false
---

<!--
  DRAFT — published: false. Fill in, then flip to true.
-->

## The problem

What was the state before? Batch jobs that took too long, data nobody trusted,
analysts blocked on engineering? Name the pain concretely.

## What I built

Pipeline architecture end to end: sources, ingestion, transformation, warehouse,
consumers. Mention scale honestly — rows per day, latency targets, number of
downstream consumers.

## Decisions and trade-offs

- **Batch vs. streaming.** Where did you draw the line, and why? Almost every
  real platform is both — the interesting part is the boundary.
- **Orchestration.** Airflow vs. Dagster vs. something else. What drove it?
- **Modeling.** How did you structure the warehouse, and what did dbt buy you?
- **Data quality and governance.** What did you enforce, where, and what happened
  when it failed? Senior candidates get separated from mid-level candidates here.
- **The incident.** A pipeline that broke badly and what you changed afterward.
  This is often the most memorable thing on a portfolio.

## Result

What it runs at now, what it unblocked, what you'd rebuild differently.
