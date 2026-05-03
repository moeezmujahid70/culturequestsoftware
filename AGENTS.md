<!-- BEGIN:nextjs-agent-rules -->

## Bluehost Static Deployment Rules

This project is deployed to Bluehost/cPanel as a static Next export. Keep `next.config.ts` configured for static hosting:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`

Do not add Next.js API routes, route handlers, server actions, or runtime-only environment variable dependencies for production behavior unless the hosting strategy changes away from static cPanel hosting. Static export files cannot run Node/Next server code on Bluehost.

### PHP Files

Server-side behavior for Bluehost must use PHP files placed in `public/` so they are copied into `out/` during `next build`.

Current contact form endpoint:

- Source: `public/send-mail.php`
- Exported/deployed path: `out/send-mail.php`
- Public URL after deploy: `https://culturequestsoftware.net/send-mail.php`

The contact form in `components/ContactSection.tsx` posts JSON to `/send-mail.php`. Do not switch it back to `mailto:` unless explicitly requested.

When adding any future PHP endpoint, add it under `public/`, not under `app/`, `components/`, or the project root. Next's static export only deploys generated static output plus assets copied from `public/`. A PHP file outside `public/` will not be included in `out/` or the Bluehost zip.

### Mail Secrets

Never commit real mailbox passwords or SMTP secrets.

The committed template is:

- `culturequest-mail-config.example.php`

The real config file is ignored by git:

- `culturequest-mail-config.php`

On Bluehost, when the site is deployed inside a subfolder under `public_html`, place the real config one level above the live site folder, typically:

- `/home4/oqrelnmy/public_html/culturequest-mail-config.php`

Do not place the real config in the deployed site folder next to `send-mail.php`.

For local development/testing, a real `culturequest-mail-config.php` may be created at the project root, but it must remain untracked.

### Creating the Bluehost Zip

After any code/content/PHP change intended for production:

1. Run `npm run build`.
2. If the build fails because Google fonts cannot be fetched in the sandbox, rerun with network approval.
3. Run `npm run zip:bluehost`.
4. Confirm `bluehost-static-site.zip` was regenerated.
5. Confirm `send-mail.php` is present in the zip:
   - `unzip -l bluehost-static-site.zip send-mail.php index.html`

The `zip:bluehost` script must zip the contents of `out/`, not the repository root and not the `out/` folder itself:

- Correct: archive contains `index.html`, `_next/`, assets, and `send-mail.php` at the zip root.
- Incorrect: archive contains a top-level `out/` directory.
- Incorrect: archive contains source files like `components/`, `app/`, `node_modules/`, or `culturequest-mail-config.php`.

Upload/extract `bluehost-static-site.zip` into the live Bluehost site folder. The zip contains public static assets and PHP endpoint files only; it must not contain the real mail config/password.

### Bluehost Smoke Test

After extracting the zip, test:

- `https://culturequestsoftware.net/send-mail.php`

Expected browser response for a GET request:

```json
{"ok":false,"message":"Method not allowed."}
```

That response means PHP is executing. Then submit the website contact form and verify that the UI shows `Message Sent` and the email arrives. Replies should go to the visitor because `send-mail.php` sets `Reply-To` from the submitted form email.
