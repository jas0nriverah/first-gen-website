# First Gen Chronicles — Website V2

A modern, bilingual website for **First Gen Chronicles**, created by **Stacy Lomeli**.

This is a standalone version of Stacy's first-generation student resource site. It is hosted on **GitHub + Vercel** (not Sites@GeorgiaTech WordPress).

**Live site:** [first-gen-website.vercel.app](https://first-gen-website.vercel.app)  
**GitHub repo:** [github.com/jas0nriverah/first-gen-website](https://github.com/jas0nriverah/first-gen-website)

---

## What is this website?

**First Gen Chronicles** is a warm, personal resource platform for:

- First-generation high school and college students
- Hispanic/Latino families
- Spanish-dominant families
- Pre-health / pre-med students

The site is available in **English** and **Spanish**.

---

## Stacy's editing guide (start here)

### The one file you edit most

Open **`src/lib/site-data.ts`** in Cursor. Almost all text, links, and page content lives here.

After saving, commit and push to GitHub — Vercel updates the live site in 1–2 minutes.

### What you CAN edit in `site-data.ts`

| Section | What it controls |
|---------|------------------|
| `siteConfig` | Site name, email, tagline, social URLs, live site URL |
| `navLinksEn` / `navLinksEs` | Navigation menu |
| `homeContent` | Home page text (EN + ES) |
| `startHereContent` | Start Here page text |
| `chroniclesContent` | Chronicles/blog page text |
| `pathways` | Audience pathway cards |
| `aboutContent` | About page story, photos, and buttons |
| `resourceCategories` | Resources page categories and links |
| `blogPosts` | Chronicles placeholder posts |
| `contactContent` | Contact page |
| `linkInBioContent` | Link-in-bio pages (`/links` and `/es/enlaces`) |
| `footerContent` | Footer text |
| `uxLabels` | Shared labels (404, search, theme toggle) |

**Tip:** Use Cursor search (Cmd+F) for any text you see on the site — it should be in this file.

### What you should NOT edit (ask a developer)

- Files in `src/components/` (layout and design)
- Files in `src/app/` except in rare cases
- `package.json`, `tailwind.config.ts`, `globals.css`

### Preview before publishing

```bash
cd ~/Projects/first-gen-chronicles
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Press `Ctrl+C` to stop.

---

## How to add resource links

In `site-data.ts`, find `resourceCategories`. Each resource looks like:

```ts
{
  title: "FAFSA step-by-step overview",
  description: "A plain-language walkthrough...",
  comingSoon: true,   // ← Remove this when you have a real link
}
```

When you have a verified URL:

```ts
{
  title: "FAFSA step-by-step overview",
  description: "A plain-language walkthrough...",
  href: "https://studentaid.gov/h/apply-for-aid/fafsa",
}
```

Do **not** make up fake URLs. Only add links you have verified. Mirror the same links in both `resourceCategories.en` and `resourceCategories.es`.

---

## How to update photos on the About page

Photos live in **`public/images/about/`** and are referenced in **`aboutContent`** inside `site-data.ts`.

To change a photo:
1. Save the new image to `public/images/about/` (use a simple name like `my-photo.png`)
2. In `site-data.ts`, find `aboutContent.en` or `aboutContent.es`
3. Update the `src` path in the `heroImage` or `sections[].images` entry
4. Update the `alt` text to describe the photo

Example:

```ts
heroImage: {
  src: "/images/about/stacy-lab-coat.png",
  alt: "Stacy Lomeli in a white lab coat with a stethoscope",
},
```

---

## How to update Spanish content

Spanish text is in the **same file** — look for `.es` sections: `homeContent.es`, `aboutContent.es`, `linkInBioContent.es`, etc.

| Page | English URL | Spanish URL |
|------|-------------|-------------|
| Home | `/` | `/bienvenidos` |
| Start Here | `/start-here` | `/es/comienza-aqui` |
| Resources | `/resources` | `/es/recursos` |
| Chronicles | `/chronicles` | `/es/cronicas` |
| About | `/about` | `/es/sobre-mi` |
| Contact | `/contact` | `/es/contacto` |
| Link in bio | `/links` | `/es/enlaces` |

The **Español / English** button in the header switches to the matching page in the other language.

---

## How to publish changes

### Option A: Terminal

```bash
cd ~/Projects/first-gen-chronicles
git add .
git commit -m "Update site content"
git push
```

### Option B: Cursor

Use the Source Control panel → stage changes → write a commit message → push.

Vercel deploys automatically after each push. Check status at [vercel.com/dashboard](https://vercel.com/dashboard).

---

## Content still needed from Stacy

- [ ] **Real resource links** — Add verified URLs in `resourceCategories` (start with 5–10, then grow)
- [ ] **Newsletter signup URL** — Update `linkInBioContent.en.buttons` and `.es.buttons`
- [ ] **Mentorship form URL** — Same as above
- [ ] **First Chronicles blog post** — Set `comingSoon: false` on a post (article page still needs dev work)
- [ ] **Final Spanish wording review** — Review all `.es` content
- [ ] **Social handles** — Confirm Instagram/TikTok URLs in `siteConfig.social`

---

## Folder structure

```
first-gen-chronicles/
├── README.md
├── src/
│   ├── lib/
│   │   ├── site-data.ts      ← ⭐ MAIN CONTENT FILE
│   │   └── locale-routes.ts  ← Language switcher routes (dev only)
│   ├── components/
│   └── app/
│       ├── (en)/             ← English pages
│       ├── bienvenidos/      ← Spanish home
│       ├── es/               ← Spanish pages
│       └── links/            ← English link-in-bio
└── public/
    ├── favicon.svg
    └── images/about/         ← About page photos
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Changes didn't appear on live site | Wait 2 min, hard-refresh (`Cmd+Shift+R`). Check Vercel dashboard for build errors. |
| `npm run dev` fails | Run `npm install` first. Make sure Node.js is installed from [nodejs.org](https://nodejs.org). |
| Photo doesn't show | Check the path starts with `/images/...` and the file exists in `public/images/`. |
| Build failed after edit | Usually a missing comma or quote in `site-data.ts`. Cursor can help fix syntax errors. |

---

## Design notes

- **Light / dark mode:** Moon/sun button in header (saved in browser)
- **Colors:** Set in `src/app/globals.css` as CSS variables
- **Social preview:** Uses lab coat photo from `public/images/about/stacy-lab-coat.png`
- **Favicon:** `public/favicon.svg` (FGC monogram)

---

## Need help?

- **Text and links:** Edit `src/lib/site-data.ts`
- **New pages or design:** Ask a developer
- **Hosting:** [vercel.com/dashboard](https://vercel.com/dashboard)

Created with care for first-generation students and families.
