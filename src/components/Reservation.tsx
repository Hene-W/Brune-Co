import { useState } from "react";

type TableStatus = "available" | "booked";

interface Table {
  id: number;
  seats: number;
  status: TableStatus;
  label: string;
}

const TABLES: Table[] = [
  { id: 1, seats: 2, status: "available", label: "By the window" },
  { id: 2, seats: 2, status: "available", label: "By the window" },
  { id: 3, seats: 4, status: "booked", label: "Center" },
  { id: 4, seats: 4, status: "available", label: "Center" },
  { id: 5, seats: 2, status: "available", label: "Quiet corner" },
  { id: 6, seats: 6, status: "available", label: "Corner booth" },
];

export default function Reservation() {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const selectedTable = TABLES.find((t) => t.id === selected);

  const handleSelect = (table: Table) => {
    if (table.status === "booked") return;
    setSelected(table.id);
    setConfirmed(false);
  };

  return (
    <section aria-label="Reservation" id="reservation" className="px-6 py-16 md:py-24 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">

        {/* Plan du café */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="w-full mx-auto max-w-xs bg-brown/5 rounded-2xl border border-brown/10 p-4">
            <div className="grid grid-cols-2 gap-3 auto-rows-[80px]">

              <div className="col-span-2 rounded-2xl bg-brown/15 flex items-center justify-center">
                <span className="text-xs text-muted uppercase tracking-wide">Counter</span>
              </div>

              <TableCell table={TABLES[0]} selected={selected} onSelect={handleSelect} />
              <TableCell table={TABLES[1]} selected={selected} onSelect={handleSelect} />

              <div className="rounded-2xl" />
              <TableCell table={TABLES[2]} selected={selected} onSelect={handleSelect} />

              <TableCell table={TABLES[3]} selected={selected} onSelect={handleSelect} />
              <TableCell table={TABLES[4]} selected={selected} onSelect={handleSelect} />

              <div className="col-span-2">
                <TableCell table={TABLES[5]} selected={selected} onSelect={handleSelect} />
              </div>

            </div>
          </div>
        </div>

        {/* Texte + sélection */}
        <div className="flex flex-col gap-6 flex-1">
          <p className="text-xs uppercase tracking-widest text-gold mb-4">Reserve a table</p>
          <h2 className="text-4xl md:text-5xl font-bold">Pick your spot</h2>
          <p className="text-lg text-gray-700 mt-3">
            Tap an open table on the map to reserve it.
          </p>

          {selectedTable && !confirmed && (
            <div className="animate-fade-in-up flex flex-col gap-3 bg-brown/5 rounded-xl p-4 mt-2">
              <p className="text-sm text-dark">
                {selectedTable.label} · {selectedTable.seats} seats
              </p>
              <select className="w-full border border-brown/20 rounded-lg px-3 py-2 text-sm bg-cream">
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
              </select>
              <button
                onClick={() => setConfirmed(true)}
                className="w-full bg-dark text-cream py-2.5 rounded-lg text-sm"
              >
                Confirm reservation
              </button>
            </div>
          )}

          {confirmed && selectedTable && (
            <div className="animate-fade-in-up flex items-center gap-2 mt-2">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">Confirmed</span>
              <p className="text-sm text-dark">{selectedTable.label} is yours.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

interface TableCellProps {
  table: Table;
  selected: number | null;
  onSelect: (table: Table) => void;
}

export function TableCell({ table, selected, onSelect }: TableCellProps) {
  const isSelected = selected === table.id;
  const isBooked = table.status === "booked";

  return (
    <button
      onClick={() => onSelect(table)}
      disabled={isBooked}
      aria-pressed={isSelected}
      aria-label={`${table.label}, ${table.seats} seats, ${isBooked ? "unavailable" : "available"}`}
      className={`w-full h-full rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-200
        ${isBooked ? "bg-brown/10 text-muted cursor-not-allowed" : "bg-cream border-2 border-brown/20 text-dark hover:scale-105 hover:-translate-y-1 hover:border-gold hover:shadow-md"}
        ${isSelected ? "bg-gold border-gold text-dark scale-105 -translate-y-1 shadow-md" : ""}
      `}
    >
      <span className="text-sm font-medium">{table.seats}p</span>
      {isBooked && <span className="text-[10px]">Booked</span>}
    </button>
  );
}