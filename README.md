# Golden Basket Ltd — Official Website

Corporate agribusiness website for **Golden Basket Ltd** (Uganda), built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Start development server with Turbopack
- `npm run build` — Create an optimized production build
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint checks

---

## CI/CD Pipeline (GitHub Actions + Vercel)

The workflow in [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) runs automatically on every push and pull request targeting `main`:

1. **Continuous Integration (`ci` job)**:
   - Installs dependencies via `npm ci`
   - Runs TypeScript type checking (`npx tsc --noEmit`)
   - Runs ESLint (`npm run lint`)
   - Verifies the Next.js production build (`npm run build`)

2. **Continuous Deployment to Vercel (`deploy-preview` & `deploy-production` jobs)**:
   - **Mode A — Connected Vercel GitHub App (Zero-Config Default)**: Because `vercel[bot]` is connected to this repository, pushes and pull requests automatically deploy once checks complete.
   - **Mode B — Direct Vercel CLI Deployment via GitHub Actions**: To have GitHub Actions build and push prebuilt artifacts directly to Vercel using `vercel deploy --prebuilt`, add the following three **Repository Secrets** under **Settings → Secrets and variables → Actions**:
     - `VERCEL_TOKEN`: Personal Access Token created at [vercel.com/account/tokens](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID`: Your Vercel Team/User ID (`orgId` in `.vercel/project.json` after running `npx vercel link`)
     - `VERCEL_PROJECT_ID`: Your Vercel Project ID (`projectId` in `.vercel/project.json` after running `npx vercel link`)
