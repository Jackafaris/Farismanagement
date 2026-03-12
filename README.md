# Faris Management — Real Estate Listing Website

**farismanagement.com** | Providing quality homes to people since 2009.

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling   | Tailwind CSS                        |
| Database  | Vercel Postgres (PostgreSQL/Neon)   |
| ORM       | Prisma                              |
| Export    | xlsx                                |
| Auth      | Ready for NextAuth.js (scaffold included) |
| Deploy    | Vercel                              |

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
# Fill in your database URL in .env.local
```

### 3. Set up the database
```bash
npx prisma db push       # Creates tables from schema
npm run db:seed          # Seeds 10 properties + sample contact
```

### 4. Run the dev server
```bash
npm run dev
# Open http://localhost:3000
```

---

## Deploy to Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Faris Management website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. **Project Name:** `jack faris claude code` (no "app")
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Step 3 — Add Vercel Postgres
1. In your Vercel project → **Storage** tab → **Create Database**
2. Choose **Postgres** (powered by Neon)
3. Follow the prompts — Vercel auto-injects these env vars:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`

### Step 4 — Seed the production database
After Vercel connects the DB, run from your local machine with production vars:
```bash
# Pull env vars from Vercel (requires Vercel CLI)
npx vercel env pull .env.local

# Then seed
npm run db:seed
```

---

## Pages & Routes

| Route             | Description                          |
|-------------------|--------------------------------------|
| `/`               | Home (Hero, Stats, Featured, About, Why Us, CTA) |
| `/properties`     | All listings with search & filters   |
| `/contact`        | Contact form + office info           |

## API Routes

| Endpoint                       | Method | Description                        |
|--------------------------------|--------|------------------------------------|
| `/api/properties`              | GET    | Fetch properties (filterable)      |
| `/api/properties`              | POST   | Create a new property              |
| `/api/contact`                 | POST   | Submit contact form                |
| `/api/contact`                 | GET    | Fetch all leads                    |
| `/api/export?type=properties`  | GET    | **Export properties → .xlsx**      |
| `/api/export?type=contacts`    | GET    | **Export leads/contacts → .xlsx**  |

---

## Spreadsheet Export

To download an Excel export, visit these URLs in your browser or link to them:

- **Properties:** `https://farismanagement.com/api/export?type=properties`
- **Leads/Contacts:** `https://farismanagement.com/api/export?type=contacts`

Files are auto-named with today's date, e.g. `faris-properties-2026-03-12.xlsx`.

---

## Adding Auth (When Ready)

1. Uncomment the `User` model in `prisma/schema.prisma`
2. Install NextAuth:
   ```bash
   npm install next-auth
   ```
3. Add to `.env.local`:
   ```
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=https://farismanagement.com
   ```
4. Create `app/api/auth/[...nextauth]/route.ts`

---

## Customization

- **Colors:** Edit `tailwind.config.ts` → `theme.extend.colors`
- **Properties:** Run `npm run db:seed` or use Prisma Studio: `npm run db:studio`
- **Contact info:** Update `components/Footer.tsx` and `app/contact/page.tsx`
- **CEO name/photo:** Update `components/About.tsx` and `app/contact/page.tsx`

---

*Built for Faris Management — farismanagement.com*
# Farismanagement
