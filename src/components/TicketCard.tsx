import {
  type Ticket,
  PRIORITY_STYLES,
  STATUS_STYLES,
  CATEGORY_ICONS,
  STATUSES,
  formatDate,
  nextStatus,
  type Status,
} from "../constants";

interface Props {
  ticket: Ticket;
  onAdvance: (id: number) => void;
  onSetStatus: (id: number, status: Status) => void;
  onDelete: (id: number) => void;
}

export default function TicketCard({
  ticket,
  onAdvance,
  onSetStatus,
  onDelete,
}: Props) {
  const pStyle = PRIORITY_STYLES[ticket.priority];
  const sStyle = STATUS_STYLES[ticket.status];
  const next = nextStatus(ticket.status);

  return (
    <div className="ticket-card">
      <div className="ticket-top">
        <div className="ticket-meta">
          <span className="ticket-id">#{ticket.id}</span>
          <span className="ticket-category">
            {CATEGORY_ICONS[ticket.category]} {ticket.category}
          </span>
        </div>
        <div className="ticket-badges">
          <span
            className="badge"
            style={{
              background: pStyle.bg,
              color: pStyle.color,
              border: `1px solid ${pStyle.border}`,
            }}
          >
            {ticket.priority}
          </span>
          <span
            className="badge"
            style={{
              background: sStyle.bg,
              color: sStyle.color,
              border: `1px solid ${sStyle.border}`,
            }}
          >
            {ticket.status}
          </span>
        </div>
      </div>

      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-desc">{ticket.description}</p>

      <div className="ticket-footer">
        <div className="ticket-info">
          <span className="ticket-by">by {ticket.submittedBy}</span>
          <span className="ticket-date">{formatDate(ticket.createdAt)}</span>
        </div>
        <div className="ticket-actions">
          <select
            className="status-select"
            value={ticket.status}
            onChange={(e) => onSetStatus(ticket.id, e.target.value as Status)}
          >
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {next && (
            <button
              className="btn btn-advance"
              onClick={() => onAdvance(ticket.id)}
            >
              → {next}
            </button>
          )}
          <button
            className="btn btn-delete"
            onClick={() => onDelete(ticket.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
