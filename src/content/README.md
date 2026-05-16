# Editing homepage content

Most homepage content lives in `src/content/site.ts`.

## Add work/project rows

Add an object to `SITE.work` or `SITE.projects`:

```ts
{ year: "2026", title: "Thing", kind: "research", blurb: "One short sentence." }
```

## Add inline bio links

`bioSegments` accepts plain strings or linked text:

```ts
"Built ",
{ t: "a watch", href: "https://example.com" },
" from scratch."
```

## Add right-rail items

- `SITE.now` controls the optional now blurb if re-enabled in the layout.
- `SITE.writing` controls writing links/list.
- `SITE.reading` controls the reading list.
- `SITE.links` controls social/email links.

The page layout itself is in `src/pages/index.astro`.
