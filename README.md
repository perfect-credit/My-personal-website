# Personal website

Astro static site. Zero JS shipped by default.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
npm run check    # typecheck + validate content frontmatter
```

## Where things live

| Path | What it's for |
| --- | --- |
| `src/config.ts` | Your name, role, email, social links. **Edit this first.** |
| `src/content/projects/*.md` | One file per project. Frontmatter is schema-validated. |
| `src/pages/index.astro` | Home page. The intro paragraph is a placeholder. |
| `src/pages/about.astro` | About page. All placeholder text. |
| `src/styles/global.css` | Design tokens at the top — change `--accent` to re-skin. |
| `public/` | Static files served as-is. Put `cv.pdf` and `og-default.png` here. |

## Adding a project

Create `src/content/projects/my-project.md`. The URL comes from the filename,
so `my-project.md` becomes `/projects/my-project/`.

Required frontmatter: `title`, `summary`, `outcome`, `tech`.
Optional: `demo`, `repo`, `order` (lower shows first), `published` (set `false` to hide).

The build fails if a required field is missing — that's intentional. See
`src/content/projects/example-project.md` for the structure to follow, then
delete it.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Go to Cloudflare Pages → Create → Connect to Git → pick the repo.
3. Framework preset: **Astro**. Build command `npm run build`, output dir `dist`.
4. Deploy. You get `yourproject.pages.dev` free, and every push to `main`
   redeploys automatically.
5. Update `site` in `astro.config.mjs` to the real URL — canonical links,
   sitemap, and social previews all depend on it being correct.

Netlify and Vercel work identically with the same settings if you prefer them.

## Before you launch

- [ ] Replace everything in `src/config.ts`
- [ ] Delete `example-project.md`, add 2–3 real projects
- [ ] Rewrite the home page intro and the About page
- [ ] Add `public/og-default.png` (1200×630) or social shares render blank
- [ ] Set `site` in `astro.config.mjs`
- [ ] Test on a real phone, not just a narrow browser window
- [ ] Run Lighthouse; fix anything below 95
