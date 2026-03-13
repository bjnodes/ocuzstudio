# OCUZ STUDIO

Static photography studio website for `ocuzstudio.com`.

## Included

- Commercial / Project portfolio browser
- Masonry gallery and lightbox
- Pricing section with suggested launch rates
- Instagram-style preview section
- Booking calendar request flow
- Contact form wired to `ocuz.studio@gmail.com` via FormSubmit
- Vercel deployment config and launch assets

## Local preview

```bash
npm run preview
```

Then open `http://localhost:4173`.

## Deployment

See `DEPLOY.md` for the full Vercel + custom domain guide.

## Notes

- Portfolio images currently use public Behance-hosted image URLs.
- The contact form uses FormSubmit, which may require first-time email activation on the target inbox.
- For a fully live Instagram sync later, the preview section can be replaced with Meta Graph API data once an access token is prepared.
