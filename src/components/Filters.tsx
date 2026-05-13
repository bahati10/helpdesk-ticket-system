import { type Status, type Priority, STATUSES, PRIORITIES } from "../constants";

interface Props {
  filterStatus: Status | "All";
  filterPriority: Priority | "All";
  search: string;
  onStatus: (v: Status | "All") => void;
  onPriority: (v: Priority | "All") => void;
  onSearch: (v: string) => void;
}

export default function Filters({
  filterStatus,
  filterPriority,
  search,
  onStatus,
  onPriority,
  onSearch,
}: Props) {
  return (
    <div className="filters">
      <div className="filter-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <select
        value={filterStatus}
        onChange={(e) => onStatus(e.target.value as Status | "All")}
      >
        <option value="All">All Statuses</option>
        {STATUSES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <select
        value={filterPriority}
        onChange={(e) => onPriority(e.target.value as Priority | "All")}
      >
        <option value="All">All Priorities</option>
        {PRIORITIES.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
    </div>
  );
}
