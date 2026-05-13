import { type Theme } from "../Hooks/UseTheme";

interface Props {
  view: "board" | "submit";
  theme: Theme;
  onViewChange: (v: "board" | "submit") => void;
  onToggleTheme: () => void;
}

export default function Header({
  view,
  theme,
  onViewChange,
  onToggleTheme,
}: Props) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="brand-icon">🎫</div>
        <div>
          <div className="brand-name">HelpDesk</div>
          <div className="brand-sub">IT Support Portal</div>
        </div>
      </div>
      <nav className="header-nav">
        <button
          className={`nav-btn ${view === "board" ? "active" : ""}`}
          onClick={() => onViewChange("board")}
        >
          Ticket Board
        </button>
        <button
          className={`nav-btn ${view === "submit" ? "active" : ""}`}
          onClick={() => onViewChange("submit")}
        >
          + Submit Ticket
        </button>
        <button
          className="nav-btn theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
