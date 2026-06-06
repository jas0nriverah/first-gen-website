# First Gen Chronicles — Website V2

A modern, bilingual website for **First Gen Chronicles**, created by **Stacy Lomeli**.

This is a standalone version of Stacy's first-generation student resource site. It can be hosted on **GitHub + Vercel** instead of Sites@GeorgiaTech (WordPress).

---

## What is this website?

**First Gen Chronicles** is a warm, personal resource platform for:

- First-generation high school and college students
- Hispanic/Latino families
- Spanish-dominant families
- Pre-health / pre-med students

The site is available in **English** and **Spanish**.

---

## How is this different from the WordPress site?

| WordPress (Sites@GeorgiaTech) | This version (GitHub + Vercel) |
|-------------------------------|--------------------------------|
| Edit through WordPress dashboard | Edit text in one main file (`site-data.ts`) |
| Georgia Tech hosting | Your own hosting on Vercel |
| Limited design control | Modern, mobile-friendly design |
| Tied to GT account | Independent — you own the code |

You do **not** need to know how to code to update most content. You mainly edit one file and push changes to GitHub.

---

## Folder structure (simple guide)

```
first-gen-chronicles/
├── README.md                 ← You are here
├── package.json              ← Project settings (don't worry about this much)
├── src/
│   ├── lib/
│   │   └── site-data.ts      ← ⭐ MAIN FILE — edit most content here
│   ├── components/           ← Reusable page pieces (rarely need editing)
│   └── app/                  ← Pages of the website
│       ├── (en)/             ← English pages
│       │   ├── page.tsx          → Home (/)
│       │   ├── start-here/       → Start Here
│       │   ├── about/            → About Stacy
│       │   ├── resources/        → Resources
│       │   ├── chronicles/       → Blog (coming soon)
│       │   └── contact/          → Contact
│       ├── bienvenidos/      ← Spanish home (/bienvenidos)
│       ├── es/               ← Other Spanish pages
│       │   ├── comienza-aqui/
│       │   ├── sobre-mi/
│       │   ├── recursos/
│       │   ├── cronicas/
│       │   └── contacto/
│       └── links/            ← Link-in-bio page for Instagram
└── public/
    └── images/               ← Put your photos here
```

---

## Where to edit text and content

### ⭐ Main content file: `src/lib/site-data.ts`

Open this file to edit almost everything. It has comments explaining each section:

| Section in site-data.ts | What it controls |
|-------------------------|------------------|
| `siteConfig` | Site name, email, taglines |
| `navLinksEn` / `navLinksEs` | Navigation menu items |
| `homeContent` | Home page text (English + Spanish) |
| `pathways` | "Start Here" audience cards |
| `aboutContent` | About Stacy page |
| `resourceCategories` | Resources page categories and links |
| `blogPosts` | Chronicles/blog placeholder posts |
| `contactContent` | Contact page |
| `linkInBioButtons` | /links page buttons |
| `footerContent` | Footer text |

**Tip:** Search for the text you see on the website — it will be in `site-data.ts`.

---

## How to add resource links

In `src/lib/site-data.ts`, find `resourceCategories`. Each resource looks like this:

```ts
{
  title: "FAFSA step-by-step overview",
  description: "A plain-language walkthrough...",
  comingSoon: true,   // ← Remove this when you have a real link
}
```

When you have a real URL, change it to:

```ts
{
  title: "FAFSA step-by-step overview",
  description: "A plain-language walkthrough...",
  href: "https://studentaid.gov/h/apply-for-aid/fafsa",
}
```

Do **not** make up fake URLs. Only add links you have verified.

---

## How to add photos later

1. Save your approved photo to `public/images/` (for example: `public/images/stacy.jpg`)
2. Open `src/app/(en)/about/page.tsx` and `src/app/es/sobre-mi/page.tsx`
3. Replace the `<PlaceholderImage />` component with a regular image:

```tsx
<img
  src="/images/stacy.jpg"
  alt="Stacy Lomeli"
  className="rounded-2xl object-cover aspect-[3/4] w-full"
/>
```

You can also add photos to blog posts and the home page the same way.

---

## How to update Spanish content

Spanish text lives in the **same file**: `src/lib/site-data.ts`

Look for sections with `.es` or `navLinksEs`, `homeContent.es`, `aboutContent.es`, etc.

Spanish pages are at:

- `/bienvenidos` — Spanish home
- `/es/comienza-aqui` — Start Here
- `/es/sobre-mi` — About
- `/es/recursos` — Resources
- `/es/cronicas` — Blog
- `/es/contacto` — Contact

When you edit Spanish text in `site-data.ts`, it updates automatically on those pages.

---

## How to run the site on your computer

You need **Node.js** installed first. Download from [nodejs.org](https://nodejs.org) if you don't have it.

Open Terminal, go to the project folder, and run:

```bash
cd ~/Projects/first-gen-chronicles
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To stop the site, press `Ctrl + C` in Terminal.

---

## How to publish changes (GitHub + Vercel)

### Step 1: Save your edits

After editing `site-data.ts` or other files, save them in your editor.

### Step 2: Commit and push to GitHub

In Terminal:

```bash
cd ~/Projects/first-gen-chronicles
git add .
git commit -m "Update site content"
git push
```

### Step 3: Vercel deploys automatically

If the project is connected to Vercel, every `git push` triggers a new deployment. Within 1–2 minutes, your live site updates.

You can check deployment status at [vercel.com/dashboard](https://vercel.com/dashboard).

---

## First-time setup: GitHub + Vercel

### GitHub (store your code online)

1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `first-gen-chronicles`
3. Push this project to that repository (ask a developer friend or use GitHub Desktop if Terminal feels intimidating)

### Vercel (host the live website)

1. Create a free account at [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your `first-gen-chronicles` GitHub repository
4. Vercel detects Next.js automatically — click **Deploy**
5. You'll get a URL like `first-gen-chronicles.vercel.app`
6. Optional: connect a custom domain (e.g. `firstgenchronicles.com`) in Vercel settings

---

## Page URLs (quick reference)

| Page | English URL | Spanish URL |
|------|-------------|-------------|
| Home | `/` | `/bienvenidos` |
| Start Here | `/start-here` | `/es/comienza-aqui` |
| Resources | `/resources` | `/es/recursos` |
| Chronicles (blog) | `/chronicles` | `/es/cronicas` |
| About | `/about` | `/es/sobre-mi` |
| Contact | `/contact` | `/es/contacto` |
| Link in bio | `/links` | `/links` |

---

## Content still needed

These items are placeholders until Stacy provides the real versions:

- [ ] **Real resource links** — Add verified URLs in `resourceCategories` in `site-data.ts`
- [ ] **Newsletter signup link** — Update `linkInBioButtons` when ready
- [ ] **Mentorship interest form** — Update `linkInBioButtons` when ready
- [ ] **Approved photos** — Add to `public/images/` and update About pages
- [ ] **Final Spanish wording review** — Review all `.es` content in `site-data.ts`
- [ ] **Official branding preferences** — Confirm colors, logo, or GT branding guidelines if needed
- [ ] **Blog posts** — Write and publish when Chronicles section is ready

---

## Design colors (for reference)

- Ink (text): `#0A0A0A`
- Muted text: `#737373`
- Background: white `#FFFFFF`
- Surface sections: `#FAFAFA`
- Accent (coral): `#FF5C35`
- Footer: black `#0A0A0A`

These are set in `src/app/globals.css` (as CSS variables) and `tailwind.config.ts` if you ever need to adjust them.

### Light / dark mode

Visitors can switch themes using the **moon/sun button** in the header (or top-right on the `/links` page). The choice is saved in the browser and remembered on the next visit. If no choice is saved, the site follows the device’s system setting.

---

## Need help?

- **Small text changes:** Edit `src/lib/site-data.ts`
- **New pages or design changes:** May need a developer
- **Hosting issues:** Check Vercel dashboard or GitHub repository settings

Created with care for first-generation students and families. 💛
