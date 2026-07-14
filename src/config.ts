/**
 * Single source of truth for your identity across the site.
 * Every page reads from this file.
 */

export const SITE = {
  name: 'Dmytro Paukov',
  /** Shown under your name on the home page. One line, concrete. */
  role: 'Senior Data & AI Engineer',
  /** Default meta description. Aim for ~150 chars; search results truncate past that. */
  description:
    'Dmytro Paukov — Senior Data & AI Engineer. Production RAG systems, LLM applications, and large-scale data platforms.',
  email: 'dmytro.paukov12@gmail.com',
  location: 'Khmelnytskyi, Ukraine',
};

/**
 * Links shown in the footer and on the home page.
 * Delete any you don't use — an empty profile is worse than no link.
 */
export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/perfect-credit' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dmytro-paukov/' },
  { label: 'Telegram', href: 'https://t.me/dmytropaukov1' },
  { label: 'Email', href: 'mailto:dmytro.paukov12@gmail.com' },
];

export const NAV = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
];

/**
 * Grouped stack, shown on the home page.
 * Keep each group to things you'd be comfortable being interviewed on —
 * a list that overreaches is worse than a short honest one.
 */
export const SKILLS = [
  {
    group: 'AI & LLM',
    items: [
      'RAG systems',
      'LangChain',
      'LangGraph',
      'OpenAI Agent SDK',
      'Vector databases',
      'Semantic search',
      'Foundation models',
    ],
  },
  {
    group: 'Data engineering',
    items: ['Python', 'Spark', 'Databricks', 'Kafka', 'dbt', 'Airflow', 'Dagster'],
  },
  {
    group: 'Platform & cloud',
    items: ['AWS', 'ETL/ELT', 'Streaming', 'Data warehousing', 'Reverse ETL', 'Observability'],
  },
];
