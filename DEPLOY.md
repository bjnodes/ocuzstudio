# OCUZ STUDIO Deployment Guide

This project is now prepared as a static site for `ocuzstudio.com`.

## Recommended stack

- Hosting: Vercel
- Domain: `ocuzstudio.com`
- Form delivery: FormSubmit -> `ocuz.studio@gmail.com`

## Project structure

- `index.html`: main one-page studio site
- `styles.css`: full visual system and responsive layout
- `app.js`: portfolio browser, calendar, gallery, contact flow
- `vercel.json`: deployment headers for Vercel
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.svg`: launch assets

## Before deployment

1. Make sure the site is in a Git repository.
2. Push the repository to GitHub.
3. Confirm that the Behance-hosted image URLs still load correctly.
4. Be ready to verify the FormSubmit activation email sent to `ocuz.studio@gmail.com`.

## Deploy to Vercel

1. Go to `https://vercel.com/new`.
2. Import the GitHub repository for this project.
3. Framework Preset: choose `Other`.
4. Root Directory: keep the project root.
5. Build Command: leave empty.
6. Output Directory: leave empty.
7. Deploy.

## Connect `ocuzstudio.com`

1. In the Vercel project, open `Settings -> Domains`.
2. Add `ocuzstudio.com`.
3. Add `www.ocuzstudio.com` as well.
4. Set `ocuzstudio.com` as the primary domain.
5. At your domain registrar DNS screen, add:
   - `A` record
     - Name: `@`
     - Value: `76.76.21.21`
   - `CNAME` record
     - Name: `www`
     - Value: `cname.vercel-dns-0.com`
6. Remove conflicting old `A`, `AAAA`, or `CNAME` records for `@` and `www`.
7. Wait for DNS propagation, then confirm both domains show `Valid Configuration` in Vercel.
8. Turn on the redirect from `www` to the apex domain if Vercel suggests it.

## FormSubmit activation

1. Submit the contact form once from the live website.
2. Check `ocuz.studio@gmail.com`.
3. Open the FormSubmit confirmation email.
4. Approve the form endpoint.
5. Submit the form a second time to confirm real delivery.

## Launch checklist

- Confirm `https://ocuzstudio.com` opens normally.
- Confirm `https://www.ocuzstudio.com` redirects to the primary domain.
- Test contact form submission.
- Check mobile layout.
- Check portfolio images and lightbox.
- Check booking date and time selection flow.
