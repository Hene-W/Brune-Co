import { useEffect, useState } from "react";

function OrderToCup() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const TICKET_LINES = [
    "BRUNE & CO.",
    "------------------",
    "1x Cold Brew",
    "1x Wifi Password",
    "1x Good Idea",
    "Table 4",
    "------------------",
    "brewing...",
  ];

  useEffect(() => {
    if (visibleLines < TICKET_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowCard(true), 600);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative w-80 mx-auto">
      {/* Ticket */}
      {!showCard && (
        <div className="relative bg-cream shadow-lg shadow-dark/10">
          <div className="px-6 py-8 font-mono text-sm text-dark space-y-1.5">
            {TICKET_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={line.includes("---") ? "text-muted" : ""}
              >
                {line}
                {i === visibleLines - 1 && (
                  <span className="cursor-blink text-gold">▍</span>
                )}
              </div>
            ))}
          </div>
          <div
            className="h-4 w-full"
            style={{
              background:
                "linear-gradient(-45deg, transparent 8px, var(--color-cream) 8px), linear-gradient(45deg, transparent 8px, var(--color-cream) 8px)",
              backgroundSize: "16px 16px",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x",
              backgroundColor: "transparent",
            }}
          />
        </div>
      )}

      {/* Carte finale */}
      {showCard && (
        <div className="animate-fade-in-up rounded-2xl border border-brown/10 bg-cream shadow-xl shadow-dark/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wide text-muted">
              Order #142
            </span>
            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs text-gold">
              Ready
            </span>
          </div>

          <div className="space-y-2">
            {[
              { name: "Cold Brew", tag: "Iced · Oat milk" },
              { name: "Wifi", tag: "brune-cafe · fast" },
              { name: "Good idea", tag: "in progress" },
            ].map((item, i) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg bg-brown/5 px-4 py-2.5 animate-fade-in-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="text-dark text-sm">{item.name}</span>
                <span className="text-xs text-muted">{item.tag}</span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-center rounded-lg bg-dark px-4 py-3 mt-4 animate-fade-in-up"
            style={{ animationDelay: "270ms" }}
          >
            <span className="text-xs text-cream tracking-wide">
              Pick up at the counter
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderToCup;