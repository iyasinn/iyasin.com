import { useEffect, useMemo, useRef, useState } from "react";
import { SITE } from "../content/site";

type Item = { kind: string; label: string; sub: string; href?: string };

export default function CmdK() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button className="cmdk-btn" onClick={() => setOpen(true)}>
        ⌘K search
      </button>
      {open && <Palette onClose={() => setOpen(false)} />}

      <style>{cssBtn}</style>
    </>
  );
}

function Palette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const out: Item[] = [];
    SITE.work.forEach((w) =>
      out.push({ kind: "work", label: w.title, sub: `${w.year} · ${w.kind}` })
    );
    SITE.projects.forEach((w) =>
      out.push({ kind: "project", label: w.title, sub: `${w.year} · ${w.kind}` })
    );
    SITE.writing.forEach((w) =>
      out.push({ kind: "essay", label: w.title, sub: w.date })
    );
    SITE.links.forEach((l) =>
      out.push({ kind: "link", label: l.label, sub: l.handle, href: l.href })
    );
    out.push({ kind: "page", label: "now", sub: SITE.now });
    return out;
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s
      ? items.filter((i) =>
          (i.label + " " + i.sub).toLowerCase().includes(s)
        )
      : items;
  }, [q, items]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 20);
  }, []);
  useEffect(() => setSel(0), [q]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(filtered.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      const it = filtered[sel];
      if (it?.href) window.open(it.href, "_blank");
      onClose();
    }
  };

  return (
    <div className="cmdk-backdrop" onClick={onClose}>
      <div className="cmdk-modal" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKey}
          placeholder="search work, writing, links…"
          className="cmdk-input"
        />
        <div className="cmdk-list">
          {filtered.length === 0 && <div className="cmdk-empty">no matches</div>}
          {filtered.map((it, i) => (
            <div
              key={i}
              onMouseEnter={() => setSel(i)}
              onClick={() => {
                if (it.href) window.open(it.href, "_blank");
                onClose();
              }}
              className={"cmdk-row" + (i === sel ? " is-sel" : "")}
            >
              <span className="cmdk-row-left">
                <span className="cmdk-kind">{it.kind}</span>
                <span>{it.label}</span>
              </span>
              <span className="cmdk-sub">{it.sub}</span>
            </div>
          ))}
        </div>
        <div className="cmdk-hint">
          <span>↑↓ navigate · ↵ open</span>
          <span>esc to close</span>
        </div>
      </div>

      <style>{cssPalette}</style>
    </div>
  );
}

const cssBtn = `
  .cmdk-btn {
    background: transparent;
    border: 1px solid var(--faint);
    color: var(--quiet);
    padding: 3px 8px;
    font-family: var(--mono);
    font-size: 11px;
  }
  .cmdk-btn:hover { color: var(--ink); border-color: var(--ink); }
`;

const cssPalette = `
  .cmdk-backdrop {
    position: fixed; inset: 0;
    background: rgba(10,10,10,0.18);
    backdrop-filter: blur(4px);
    display: flex; align-items: flex-start; justify-content: center;
    padding-top: 80px; z-index: 50;
  }
  .cmdk-modal {
    width: 480px; max-width: calc(100vw - 32px);
    background: var(--bg);
    border: 1px solid rgba(10,10,10,0.2);
    box-shadow: 0 18px 40px -12px rgba(10,10,10,0.27);
    font-family: var(--mono);
  }
  .cmdk-input {
    width: 100%; background: transparent; border: 0; outline: 0;
    padding: 14px 18px; font: inherit; font-size: 13px;
    color: var(--ink);
    border-bottom: 1px solid rgba(10,10,10,0.13);
  }
  .cmdk-list { max-height: 280px; overflow: auto; }
  .cmdk-empty { padding: 18px; font-size: 12px; color: var(--quiet); }
  .cmdk-row {
    padding: 10px 18px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 12px; cursor: pointer; color: var(--ink);
  }
  .cmdk-row.is-sel { background: rgba(10,10,10,0.04); }
  .cmdk-row-left { display: flex; gap: 10px; align-items: baseline; }
  .cmdk-kind { color: var(--quiet); font-size: 10px; width: 56px; }
  .cmdk-sub { color: var(--quiet); font-size: 10px; }
  .cmdk-hint {
    padding: 8px 18px; border-top: 1px solid rgba(10,10,10,0.07);
    font-size: 10px; color: var(--quiet);
    display: flex; justify-content: space-between;
  }
`;
