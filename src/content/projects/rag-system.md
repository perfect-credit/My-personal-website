---
title: 'RAG system — REPLACE WITH THE REAL NAME'
summary: 'One sentence: whose problem this solved and why search/retrieval was the answer.'
outcome: 'FILL THIS IN — what changed because it exists.'
tech: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'Vector DB']
order: 1
published: false
---

<!--
  DRAFT — published: false, so this will not appear on the site until you flip
  it to true. Fill it in, then publish.

  I scaffolded this from your CV summary, but I deliberately did NOT invent the
  details. Everything below is a question for you to answer.
-->

## The problem

Who needed this, and what were they doing before? What made naive search or a
plain LLM call insufficient?

## What I built

The pipeline end to end: ingestion, chunking, embedding, retrieval, generation.
One or two paragraphs — save the depth for the next section.

## Decisions and trade-offs

**This is the section that gets you hired.** For a senior RAG role, interviewers
want to hear about exactly these:

- **Chunking strategy.** What did you land on, and what did you try first that
  didn't work?
- **Vector store choice.** Which one, and why over the alternatives? What did it
  cost you?
- **Retrieval quality.** Hybrid search? Reranking? How did you know it improved —
  what did you measure it against?
- **Evaluation.** How did you tell a good answer from a bad one at scale? This is
  where most RAG candidates go quiet, and where you can stand out.
- **What broke in production.** Hallucinations, stale index, latency, cost? Pick
  the real one.

## Result

Real numbers if you have them and can defend how they were measured. Honest words
if you don't. Do not estimate — a metric you can't reproduce under questioning is
worse than no metric.
