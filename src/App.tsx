import { useState } from "react";
import { useTickets } from "./Hooks/UseTickets";
import { useTheme } from "./Hooks/UseTheme";

import Header from "./components/Header";
import StatsBar from "./components/Statsbar";
import TicketBoard from "./components/Ticketboard";
import SubmitForm from "./components/SubmitForm";

import "./styles.css";

type View = "board" | "submit";

export default function App() {
  const [view, setView] = useState<View>("board");
  const { tickets, addTicket, advanceStatus, setStatus, deleteTicket } =
    useTickets();
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (data: Parameters<typeof addTicket>[0]) => {
    addTicket(data);
    setView("board");
  };

  return (
    <div className="app">
      <Header
        view={view}
        theme={theme}
        onViewChange={setView}
        onToggleTheme={toggleTheme}
      />
      <main className="main">
        <StatsBar tickets={tickets} />
        {view === "board" ? (
          <TicketBoard
            tickets={tickets}
            onAdvance={advanceStatus}
            onSetStatus={setStatus}
            onDelete={deleteTicket}
          />
        ) : (
          <SubmitForm onSubmit={handleSubmit} />
        )}
      </main>
    </div>
  );
}
