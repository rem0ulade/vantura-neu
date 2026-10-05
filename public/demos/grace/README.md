# Grace Site — meet-grace.com

Static marketing site (GitHub Pages).

- **Default language:** English at `/`
- **German:** `/de/`
- **Legacy `/en/*`:** redirects to English root
- **Source mirror:** also sync to `Atlas-Workspace/marketing/site/`

## Local preview

```sh
python3 -m http.server 8080 --directory .
open http://localhost:8080/
```

## Deploy

Push to `main` → GitHub Actions → Pages (`meet-grace.com`).
