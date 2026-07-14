import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The schema is deliberately strict. Every field here is one a hiring engineer
 * looks for, so a project that can't fill them in is a project that isn't ready
 * to show. If the build fails because `outcome` is missing, that's the schema
 * doing its job — go figure out what the project actually accomplished.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One sentence: the problem, not the tech. Shown on the home page card. */
    summary: z.string(),
    /** What actually came of it — users, latency, adoption, what you learned. */
    outcome: z.string(),
    tech: z.array(z.string()),
    /** Live demo. Omit only if there is genuinely nothing to show. */
    demo: z.string().url().optional(),
    /** Source. A project with no readable code is a weak sample. */
    repo: z.string().url().optional(),
    /** Controls ordering on the home page. Lower number = shown first. */
    order: z.number().default(99),
    /** Set false to keep a draft out of the build. */
    published: z.boolean().default(true),
  }),
});

export const collections = { projects };
