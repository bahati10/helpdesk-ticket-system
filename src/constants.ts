export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Status = "Open" | "In Progress" | "Resolved" | "Closed";
export type Category = "Hardware" | "Software" | "Network" | "Access" | "Other";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
  submittedBy: string;
  createdAt: string; // ISO date string
  updatedAt: string;
}

export type TicketFormData = Omit<
  Ticket,
  "id" | "status" | "createdAt" | "updatedAt"
>;

export const CATEGORIES: Category[] = [
  "Hardware",
  "Software",
  "Network",
  "Access",
  "Other",
];
export const PRIORITIES: Priority[] = ["Low", "Medium", "High", "Critical"];
export const STATUSES: Status[] = ["Open", "In Progress", "Resolved", "Closed"];

export const PRIORITY_STYLES: Record<
  Priority,
  { bg: string; color: string; border: string }
> = {
  Low: { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  Medium: { bg: "#fffbeb", color: "#b45309", border: "#fde68a" },
  High: { bg: "#fff7ed", color: "#c2410c", border: "#fed7aa" },
  Critical: { bg: "#fef2f2", color: "#b91c1c", border: "#fecaca" },
};

export const STATUS_STYLES: Record<
  Status,
  { bg: string; color: string; border: string }
> = {
  Open: { bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
  "In Progress": { bg: "#faf5ff", color: "#7e22ce", border: "#e9d5ff" },
  Resolved: { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  Closed: { bg: "#f9fafb", color: "#6b7280", border: "#e5e7eb" },
};

export const CATEGORY_ICONS: Record<Category, string> = {
  Hardware: "🖥️",
  Software: "💾",
  Network: "🌐",
  Access: "🔑",
  Other: "📋",
};

export const SAMPLE_TICKETS: Ticket[] = [
  {
    id: 1,
    title: "Monitor not displaying output",
    description:
      "The second monitor on workstation 4B is not showing any signal after the recent OS update.",
    category: "Hardware",
    priority: "High",
    status: "Open",
    submittedBy: "Alice M.",
    createdAt: "2025-03-01T09:15:00Z",
    updatedAt: "2025-03-01T09:15:00Z",
  },
  {
    id: 2,
    title: "Cannot access shared drive",
    description:
      "Getting 'Access Denied' when trying to open the Finance shared drive. Was working last week.",
    category: "Access",
    priority: "Critical",
    status: "In Progress",
    submittedBy: "Bob K.",
    createdAt: "2025-03-02T11:30:00Z",
    updatedAt: "2025-03-03T08:00:00Z",
  },
  {
    id: 3,
    title: "Outlook keeps crashing on startup",
    description:
      "Outlook crashes immediately after the loading screen. Tried reinstalling but the issue persists.",
    category: "Software",
    priority: "Medium",
    status: "In Progress",
    submittedBy: "Carol T.",
    createdAt: "2025-03-02T14:00:00Z",
    updatedAt: "2025-03-03T10:00:00Z",
  },
  {
    id: 4,
    title: "Slow internet on 2nd floor",
    description:
      "Browsing is very slow on all machines on the second floor since Monday morning.",
    category: "Network",
    priority: "High",
    status: "Open",
    submittedBy: "David O.",
    createdAt: "2025-03-03T08:45:00Z",
    updatedAt: "2025-03-03T08:45:00Z",
  },
  {
    id: 5,
    title: "Printer not responding",
    description:
      "The HP printer in room 3C is showing offline despite being switched on and connected.",
    category: "Hardware",
    priority: "Low",
    status: "Resolved",
    submittedBy: "Eve N.",
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-02T16:30:00Z",
  },
  {
    id: 6,
    title: "Request new user account",
    description:
      "New staff member joining on March 10 needs an email account and system access configured.",
    category: "Access",
    priority: "Medium",
    status: "Open",
    submittedBy: "Frank A.",
    createdAt: "2025-03-04T09:00:00Z",
    updatedAt: "2025-03-04T09:00:00Z",
  },
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function nextStatus(current: Status): Status | null {
  const flow: Partial<Record<Status, Status>> = {
    Open: "In Progress",
    "In Progress": "Resolved",
    Resolved: "Closed",
  };
  return flow[current] ?? null;
}
