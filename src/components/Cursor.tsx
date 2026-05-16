import { useEffect, useState } from "react";

export default function Cursor() {
  const [p, setP] = useState<{ x: number; y: number; inWin: boolean }>({
    x: 0,
    y: 0,
    inWin: false,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setP({ x: e.clientX, y: e.clientY, inWin: true });
    const onLeave = () => setP((s) => ({ ...s, inWin: false }));
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--quiet)",
        letterSpacing: 0.4,
      }}
    >
      {p.inWin
        ? `${String(p.x).padStart(4, "0")}·${String(p.y).padStart(4, "0")}`
        : "----·----"}
    </span>
  );
}
