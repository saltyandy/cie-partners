# CIE Partners website

One static page, served by Vercel at https://ciepartners.com. No build step, no framework, no CMS.

## Files that matter

- `public/index.html` is the whole site: logo, email address, postal address, footer.
- `public/css/styles.css` is the stylesheet.
- `public/images/logo.svg` is the logo.
- `vercel.json` tells Vercel to serve the `public` folder. Leave it alone.

Anything outside `public/` that is not listed above is not part of the live site and is ignored by git.

## How changes reach the live site

GitHub repo: saltyandy/cie-partners. Vercel deploys it automatically.

- A push to `main` goes live on ciepartners.com within about a minute.
- A push to any other branch gets a preview URL (a vercel.app link) and does not touch the live site.

## Workflow for every change

1. Create a branch from `main`, named for the change (for example `update-address`).
2. Edit the files in `public/`.
3. Preview locally: open `public/index.html` in the browser, or run the server below and open http://localhost:8000. Show the result before committing.
4. Commit and push the branch, then open a pull request against `main`.
5. Wait for the Vercel bot to comment on the pull request with the preview link, and give that link to the person you are working with so they can check it on any device.
6. Merge the pull request only when they have explicitly approved. Merging publishes to ciepartners.com.
7. After merging, confirm the change is live at https://ciepartners.com (hard refresh if it looks stale).

Never push straight to `main`. Never force-push.

## Local preview server

```
cd public && python3 -m http.server 8000
```

## Style rules

- Keep it plain: no new frameworks, build tools or dependencies.
- No emojis in copy.
- Keep the page working on phones. Check the preview at a narrow width.
