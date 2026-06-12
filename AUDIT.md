# cultsport Commercial Website Audit

Audited URL: https://equipment.cultsport.com/

Date: 2026-06-08

## What The Current Page Does

- Uses Webflow hosting/forms with Google Tag Manager `GTM-MP2QBH4`, Google Ads config `AW-18027814191`, Meta Pixel, and Webflow form handling.
- Main commercial promise is gym setup or upgrade with cultsport equipment.
- Current proof points include `600+` fitness centers, `90+` Indian cities, and `1M+` active users.
- Lead capture appears in the hero, exit intent modal, exploration modal, Pro Pack modal, and Premier Pack modal.
- Existing form field themes are name, email, phone, timeline, budget, city, remarks, newsletter consent, current page, date, and UTM values.

## Conversion Issues Found

- The page has too many separate forms and modal variants. This makes maintenance and tracking harder.
- Several forms reuse the same IDs, including `wf-form-5-Min-Exploration-Form`, `name`, `city`, `current-page`, and UTM field IDs.
- Some CTAs are clickable `div` elements instead of semantic links or buttons, which hurts accessibility and can make click tracking less reliable.
- The main visible form asks for many fields at once, including remarks and newsletter consent. That adds friction before the sales team has spoken to the lead.
- The top of the page competes between catalog browsing, pack downloads, and call requests. For paid traffic, the consultation CTA should dominate.
- A phone script in the page head references `#phone`, which does not exist at that point. That can create JavaScript errors.
- Existing select option values on the hero form include generic values like `First`, `Second`, and `Another option`, which are weaker for Google Sheet and sales team reporting.
- Placeholder testimonials were present in source earlier, while rendered content also mixes real names. This should be cleaned so trust proof feels credible.
- The local tracking audit in this workspace previously found the expected Google Ads conversion `AW-18027814191/mURkCIzX-KMcEK-6qpRD` missing while an older conversion destination was present.

## Replacement Strategy

- Keep one primary lead form on the first screen and use all CTAs to route users back to it.
- Ask only high-signal qualification fields: name, phone, city, timeline, budget, and requirement.
- Preserve UTM, campaign, ad group, and `gclid` capture for paid campaign attribution.
- Keep package prices and product categories, but make them lead triggers rather than download-first dead ends.
- Use real equipment visuals from the current Webflow asset library so the first viewport clearly shows the product.
- Use a configurable Zapier endpoint so the new site can post directly to the Google Sheet workflow.
- Push a `lead_form_submit` event to `dataLayer` and call the updated Google Ads conversion snippet after successful form handling.

## Zapier Handoff

In `script.js`, set either:

```js
window.CULTSPORT_LEAD_ENDPOINT = "https://hooks.zapier.com/hooks/catch/...";
```

or add the webhook URL to the form's `data-endpoint` attribute in `index.html`.

The form posts URL-encoded fields using `mode: "no-cors"`, which is the most browser-friendly shape for Zapier Catch Hook endpoints.
