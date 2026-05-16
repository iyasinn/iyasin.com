// All content for the site. Edit copy and links here.

export type BioSegment = string | { t: string; href: string };

export type WorkEntry = {
  year: string;
  title: string;
  kind: string;
  blurb: string;
};

export type WritingEntry = { date: string; title: string };
export type ReadingEntry = { author: string; title: string };
export type LinkEntry = { label: string; href: string; handle: string };

export const SITE = {
  handle: "ihsaan",
  fullName: "ihsaan",
  oneliner:
    "Engineer. Medicine, infrastructure, and the occasional physical object.",
  location: "Cambridge, MA",
  timezone: "America/New_York",

  // Inline-linked bio. Strings render as text; {t, href} objects become
  // cobalt-underlined anchor tags inside the paragraph.
  bioSegments: [
    "Fifteen ",
    { t: "papers in medicine", href: "https://scholar.google.com/" },
    ". Started a ",
    { t: "healthcare company", href: "#" },
    " (raised $1M, had paying customers). Interned on infrastructure at ",
    { t: "Meta", href: "https://meta.com" },
    " and at a biopharma lab. Sometimes I ",
    { t: "build watches", href: "#" },
    ".",
  ] as BioSegment[],

  links: [
    { label: "github",   href: "https://github.com/iyasinn",      handle: "iyasinn" },
    { label: "linkedin", href: "https://linkedin.com/in/iyasinn", handle: "iyasinn" },
    { label: "email",    href: "mailto:hello@ihsaan.dev",          handle: "hello@ihsaan.dev" },
    { label: "twitter",  href: "https://twitter.com/iyasinn",      handle: "iyasinn" },
  ] as LinkEntry[],

  work: [
    { year: "now",     title: "Simulation of the world",   kind: "research",   blurb: "Long-running multi-agent simulation with evolving rules. Trying to make a world that surprises me." },
    { year: "2024",    title: "Healthcare startup",        kind: "company",    blurb: "Founded, raised $1M, shipped to paying clients in clinical settings." },
    { year: "2024",    title: "Infra engineering · Meta",  kind: "internship", blurb: "Worked on internal infrastructure tooling at the platform scale you'd expect." },
    { year: "2023",    title: "Biopharma research intern", kind: "internship", blurb: "Wet-lab + computational. Contributed to two of the fifteen." },
    { year: "2023",    title: "MTC",                       kind: "community",  blurb: "Built a student tech community. Took a cohort through the Google office." },
    { year: "2022",    title: "Wristwatch · from scratch", kind: "object",     blurb: "PCB, firmware, machined case. Keeps time within a few seconds a day." },
    { year: "ongoing", title: "Home server",               kind: "object",     blurb: "Proxmox, 40TB, self-hosted media + ML inference + dev sandboxes." },
    { year: "—",       title: "15 publications",           kind: "research",   blurb: "Across oncology, cardiology, and computational biology. Index on Scholar." },
  ] as WorkEntry[],

  writing: [
    { date: "2025.03", title: "Notes on simulating worlds that surprise you" },
    { date: "2024.11", title: "What I learned shipping clinical software" },
    { date: "2024.06", title: "Building a watch in a bedroom" },
    { date: "2023.09", title: "How to read a paper in 20 minutes" },
  ] as WritingEntry[],

  reading: [
    { author: "Italo Calvino",        title: "Invisible Cities" },
    { author: "Donella Meadows",      title: "Thinking in Systems" },
    { author: "Stewart Brand",        title: "How Buildings Learn" },
    { author: "Christopher Alexander", title: "A Pattern Language" },
    { author: "Richard Hamming",      title: "The Art of Doing Science and Engineering" },
  ] as ReadingEntry[],

  now: "Building a world-simulator on nights and weekends. Reading Calvino. Tuning the watch.",
};
