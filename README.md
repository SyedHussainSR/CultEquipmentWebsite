# cultsport Lead Site

Lead-first replacement prototype for `https://equipment.cultsport.com/`.

## Files

- `index.html` is the page structure, GTM/Google Ads tags, and lead form.
- `styles.css` is the responsive visual design.
- `script.js` captures UTMs, validates Indian phone numbers, posts to Zapier, and fires lead events.
- `AUDIT.md` documents what was found on the current website and why this version is shaped this way.

## Connect Zapier

Set the Zapier Catch Hook URL before going live:

```html
<form id="lead-form" data-endpoint="https://hooks.zapier.com/hooks/catch/...">
```

or inject it before `script.js`:

```html
<script>
  window.CULTSPORT_LEAD_ENDPOINT = "https://hooks.zapier.com/hooks/catch/...";
</script>
```

## Preview

Open `index.html` directly in a browser, or run a small static server from this folder:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.
