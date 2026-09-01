# Sujin Cha — Academic Website

Personal academic website for Sujin Cha, designed for deployment at
`https://erin0506.github.io` and, after DNS configuration, `https://sujincha.com`.

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages deployment

1. Create a public repository named `erin0506.github.io` under the `erin0506`
   GitHub account.
2. Push this project to the repository's `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included workflow builds and deploys the static export automatically.
5. Confirm that `https://erin0506.github.io` works before adding the custom
   domain in GitHub Pages settings.

The site content is in `app/`, and public assets—including the CV and
headshot—are in `public/assets/`.
