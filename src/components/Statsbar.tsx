import { type Ticket, STATUSES } from "../constants";

interface Props {
  tickets: Ticket[];
}

export default function StatsBar({ tickets }: Props) {
  const counts = STATUSES.reduce<Record<string, number>>((acc, s) => {
    acc[s] = tickets.filter((t) => t.status === s).length;
    return acc;
  }, {});

  const stats = [
    { label: "Total", value: tickets.length, color: "#374151" },
    { label: "Open", value: counts["Open"], color: "#1d4ed8" },
    { label: "In Progress", value: counts["In Progress"], color: "#7e22ce" },
    { label: "Resolved", value: counts["Resolved"], color: "#15803d" },
    { label: "Closed", value: counts["Closed"], color: "#9ca3af" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div key={s.label} className="stats-item">
          <span className="stats-value" style={{ color: s.color }}>
            {s.value}
          </span>
          <span className="stats-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
