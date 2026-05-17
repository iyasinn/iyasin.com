// Main site config. Add/edit almost everything on the homepage here.
// - bioSegments: strings render as normal text; { t, href } renders an inline link
// - work/projects: add a new object to show another row
// - writing/reading/links: these populate the right rail, hero links, and Cmd+K search

export type BioSegment = string | { t: string; href: string };

export type WorkEntry = {
  year: string;
  title: string;
  kind: string;
  blurb: string;
  href?: string;
};

export type WritingEntry = { date: string; title: string };
export type ReadingEntry = { author: string; title: string };
export type LinkEntry = { label: string; href: string; handle: string };

export const SITE = {
  handle: "ihsaan",
  fullName: "ihsaan",
  email: "iyasin@umich.edu",
  oneliner:
    "Engineer and researcher.",
  positioning: "Engineer and researcher.",
  timezone: "America/New_York",

  // Inline-linked bio. Strings render as text; {t, href} objects become
  // cobalt-underlined anchor tags inside the paragraph.
  bioSegments: [
    "Computer science graduate from Michigan. I’ve built ",
    { t: "healthcare software", href: "https://juniper.tech" },
    ", infrastructure at scale, and applied AI systems. I’ve also published work on ",
    { t: "digital health information", href: "https://scholar.google.com/citations?user=kUYiorwAAAAJ&hl=en" },
    ", infectious disease, and patient education.",
  ] as BioSegment[],

  links: [
    { label: "github",   href: "https://github.com/iyasinn",      handle: "iyasinn" },
    { label: "linkedin", href: "https://linkedin.com/in/ihsaanyasin", handle: "ihsaanyasin" },
    { label: "email",    href: "mailto:iyasin@umich.edu",          handle: "iyasin@umich.edu" },
    { label: "twitter",  href: "https://twitter.com/ihsaan_yasin",  handle: "ihsaan_yasin" },
  ] as LinkEntry[],

  work: [
    { year: "2026",    title: "Stealth consulting", kind: "consulting", blurb: "Technical consulting on AI infrastructure, internal tools, and product systems." },
    { year: "2024–26", title: "Juniper",        kind: "founder", blurb: "Built durable AI agent infrastructure for healthcare workflows; led pilots with health systems and raised funding.", href: "https://juniper.tech" },
    { year: "2025",    title: "Meta",           kind: "infra",   blurb: "Worked on media fetching infrastructure and reliability for large-scale product systems.", href: "https://meta.com" },
    { year: "2024",    title: "Courier Health", kind: "health",  blurb: "Built clinical data tooling for biopharma workflows, including ingest visibility, schema generation, and alerting.", href: "https://courierhealth.com" },
    { year: "2023",    title: "UMich EECS",     kind: "teaching", blurb: "Taught data structures and C++ through office hours and weekly labs.", href: "https://eecs.engin.umich.edu" },
  ] as WorkEntry[],

  projects: [
    { year: "2025",    title: "Distributed search engine", kind: "systems",  blurb: "C++ crawler, indexer, sharded query engine, and web interface for large-scale document search.", href: "https://github.com/498-search-engine/mithril" },
    { year: "—",       title: "Publications",              kind: "research", blurb: "Digital health information, infectious disease, patient education, and medical AI.", href: "https://scholar.google.com/citations?user=kUYiorwAAAAJ&hl=en" },
  ] as WorkEntry[],

  current: "Focused on reliable AI systems for healthcare and infrastructure-heavy products.",
  thinking: ["reliable agents", "memory systems", "clinical workflows", "search infrastructure"],

  writing: [] as WritingEntry[],

  reading: [
    { author: "Muhammad Asad",        title: "The Road to Mecca" },
    { author: "Brandon Sanderson",    title: "The Lost Metal" },
    { author: "Italo Calvino",        title: "Invisible Cities" },
    { author: "Donella Meadows",      title: "Thinking in Systems" },
    { author: "Stewart Brand",        title: "How Buildings Learn" },
    { author: "Christopher Alexander", title: "A Pattern Language" },
    { author: "Richard Hamming",      title: "The Art of Doing Science and Engineering" },
  ] as ReadingEntry[],

  now: "Reading The Road to Mecca and The Lost Metal.",
};
