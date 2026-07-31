# Assembly of the Saints Tabernacle

Production-ready Next.js 15 church website.

## Run locally

```bash
npm install
npm run dev
```

Before publishing, add `RESEND_API_KEY` in Vercel Project Settings → Environment Variables to enable Contact Us email delivery. The key is created in the church's free Resend account and must never be placed in this repository. `RESEND_FROM_EMAIL` is optional; add it after verifying the church's own sending domain in Resend.
