import { useState } from "react";
import type { Ticket, Status, Priority } from "../constants";
import Filters from "./Filters";
import TicketCard from "./TicketCard";

interface Props {
  tickets: Ticket[];
  onAdvance: (id: number) => void;
  onSetStatus: (id: number, status: Status) => void;
  onDelete: (id: number) => void;
}

export default function TicketBoard({
  tickets,
  onAdvance,
  onSetStatus,
  onDelete,
}: Props) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [filterPriority, setFilterPriority] = useState<Priority | "All">("All");

  const filtered = tickets.filter((t) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.submittedBy.toLowerCase().includes(q);
    const matchStatus = filterStatus === "All" || t.status === filterStatus;
    const matchPriority =
      filterPriority === "All" || t.priority === filterPriority;
    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <div>
      <Filters
        filterStatus={filterStatus}
        filterPriority={filterPriority}
        search={search}
        onStatus={setFilterStatus}
        onPriority={setFilterPriority}
        onSearch={setSearch}
      />
      <div className="board-count">
        Showing {filtered.length} of {tickets.length} tickets
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state">No tickets match your filters.</div>
      ) : (
        <div className="ticket-list">
          {filtered.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onAdvance={onAdvance}
              onSetStatus={onSetStatus}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
