import { useState, useCallback } from "react";
import {
  type Ticket,
  type TicketFormData,
  type Status,
  SAMPLE_TICKETS,
  nextStatus,
} from "../constants";

let nextId = 100;

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>(SAMPLE_TICKETS);

  const addTicket = useCallback((data: TicketFormData) => {
    const now = new Date().toISOString();
    const ticket: Ticket = {
      ...data,
      id: nextId++,
      status: "Open",
      createdAt: now,
      updatedAt: now,
    };
    setTickets((prev) => [ticket, ...prev]);
  }, []);

  const advanceStatus = useCallback((id: number) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const next = nextStatus(t.status);
        if (!next) return t;
        return { ...t, status: next, updatedAt: new Date().toISOString() };
      }),
    );
  }, []);

  const setStatus = useCallback((id: number, status: Status) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status, updatedAt: new Date().toISOString() } : t,
      ),
    );
  }, []);

  const deleteTicket = useCallback((id: number) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { tickets, addTicket, advanceStatus, setStatus, deleteTicket };
}
