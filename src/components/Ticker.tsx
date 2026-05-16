import { useEffect, useState } from "react";

interface Props {
  timezone: string;
}

export default function Ticker({ timezone }: Props) {
  const [t, setT] = useState<Date | null>(null);

  useEffect(() => {
    setT(new Date());
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = t
    ? t.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timezone,
      })
    : "--:--:--";

  return (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--quiet)",
        letterSpacing: 0.4,
      }}
    >
      {fmt}
    </span>
  );
}
