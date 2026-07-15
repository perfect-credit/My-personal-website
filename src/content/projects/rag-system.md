---
title: 'Clinical RAG & agent workflows'
summary: 'Retrieval and multi-step reasoning over medical literature and patient data, with a human in the loop before anything reached a care decision.'
outcome: 'Clinicians could ask questions spanning published literature and patient records and get answers grounded in retrievable sources, with validation gating every clinical output.'
tech: ['Python', 'LangChain', 'LangGraph', 'OpenAI Agent SDK', 'Vector databases', 'AWS']
order: 1
published: true
---

<!--
  Grounded in your Diana Health work (07/2024 – 12/2025) as described in your CV;
  everything stated below is drawn from that. The "Decisions and trade-offs"
  section is deliberately left as questions — those details aren't in the CV and
  I won't invent them. It's also the section that gets you hired, so it's worth
  the hour it'll take to fill in.
-->

## The problem

Clinical questions rarely have a single source. The answer lives partly in
published medical literature and partly in one specific patient's record, and the
clinician asking is working under time pressure and cannot afford a confident
wrong answer. A plain LLM call fails on both counts: it has no access to the
patient, and it has every incentive to sound certain.

## What I built

A production RAG pipeline over two very different corpora — medical literature and
patient data — using embedding models, vector search, and semantic retrieval to
assemble context before generation.

On top of retrieval, I built agent workflows with LangChain, LangGraph, and the
OpenAI Agent SDK that orchestrate multi-step clinical reasoning: decomposing a
question into steps, calling tools to fetch what each step needs, carrying memory
across the chain, and pausing for human validation before anything surfaced as a
recommendation. That validation stage was a requirement rather than a nicety — in
this domain the reviewer is part of the system, not a fallback.

## Decisions and trade-offs

<!-- TODO (Dmytro): The section interviewers actually read. You lived this; it
     should take an hour from memory. -->

- **Chunking.** Medical literature and patient records don't chunk the same way.
  What did you land on for each, and what did you try first that failed?
- **Vector store.** Which one, and why over the alternatives? What did it cost you?
- **Retrieval quality.** Hybrid search? Reranking? How did you know it improved —
  what did you measure against?
- **Evaluation.** How did you tell a good clinical answer from a merely plausible
  one, at scale? Most candidates go quiet here.
- **The human-in-the-loop boundary.** What required review and what didn't, and how
  did you decide where that line sat?
- **What broke in production.** Stale index, retrieval misses, latency, cost? Pick
  the real one and tell it honestly.

## Result

<!-- TODO (Dmytro): Add real numbers only if you can defend how they were
     measured. A metric you can't reproduce under questioning is worse than none. -->
