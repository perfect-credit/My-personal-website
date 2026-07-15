---
title: 'Real-time trading platform'
summary: 'Market data ingestion across four broker APIs, feeding a trading engine that handled order lifecycle, positions, and live P&L on streaming data.'
outcome: 'Sub-millisecond latency on P&L computation over streaming market data, on serverless infrastructure that scaled with volume rather than being provisioned for the peak.'
tech: ['Python', 'Node.js', 'Kafka', 'React', 'React Native', 'AWS Lambda', 'Grafana']
order: 2
published: true
---

<!--
  Grounded in your fintech work via Upwork (03/2020 – 06/2024) as described in
  your CV. Trade-off questions below are yours to answer — they aren't in the CV.
-->

## The problem

Trading systems fail in a specific way: they're fine until the moment they matter.
Volume spikes exactly when volatility does, which is exactly when latency and
correctness stop being negotiable and when a stale position or a missed fill costs
real money.

## What I built

A real-time ingestion platform integrating four broker APIs — Alpaca, Kraken,
Bybit, and Interactive Brokers — streaming high-throughput market data through
Kafka. On top of it, a trading engine handling the complete order lifecycle:
position management and real-time P&L computed over the stream at sub-millisecond
latency.

The infrastructure was serverless and event-driven on AWS — Lambda, API Gateway,
Step Functions, and Cognito — processing high-volume, low-latency transactions
with automatic scaling. Around the engine: automated market data pipelines and
portfolio rebalancing jobs with circuit breakers and failover, and observability
dashboards in Grafana and Redash.

The backend was modular Python and Node.js following domain-driven design,
exposing REST APIs for KYC, payments, and trading. I built the frontends too —
React and React Native, with real-time state management for live order books,
price charts, and push notifications.

## Decisions and trade-offs

<!-- TODO (Dmytro): Fill these in. This is where a trading system gets interesting. -->

- **Why Kafka at the ingestion layer?** What did it buy you over talking to broker
  APIs directly, and what did it cost in operational overhead?
- **Serverless for a latency-sensitive system.** This is the counterintuitive
  choice on the page and the first thing a good interviewer will push on. Cold
  starts, connection reuse — how did you make Lambda work here, and where didn't it?
- **Normalizing four brokers.** Four APIs with four models of an order. How did you
  abstract that without the abstraction leaking?
- **Circuit breakers.** What conditions tripped them, and what happened downstream
  when they did?
- **Correctness under failure.** What happened to an in-flight order when something
  died mid-lifecycle? Exactly-once, at-least-once, or reconciliation after the fact?

## Result

<!-- TODO (Dmytro): The sub-millisecond claim is strong — be ready to say what
     you measured, where, and at what percentile. p50 and p99 are different
     stories and interviewers know it. -->
