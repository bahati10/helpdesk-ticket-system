# Project 3 — IT Helpdesk Ticket System

A React + TypeScript web application for submitting and managing IT support tickets. Staff submit tickets through a form; IT admins manage and progress them through a status workflow.

## Features

- Submit tickets with title, category, priority, description, and submitter name
- Admin board with full ticket list and live filtering
- Filter by status, priority, and free-text search
- Advance tickets through a workflow: Open → In Progress → Resolved → Closed
- Override status directly via dropdown
- Stats bar showing counts per status
- Delete tickets

## Project Structure

```
Project3_HelpdeskTickets/
├── App.tsx                    # Root — view switching, passes hook down
├── constants.ts               # Types, enums, styles, sample data, helpers
├── styles.css                 # All styles — light editorial theme
├── hooks/
│   └── useTickets.ts          # All ticket state and actions
└── components/
    ├── Header.tsx             # Sticky nav — brand + view switcher
    ├── StatsBar.tsx           # Ticket counts by status
    ├── Filters.tsx            # Search input + status/priority dropdowns
    ├── TicketBoard.tsx        # Filtered list view, owns filter state
    ├── TicketCard.tsx         # Individual ticket with actions
    └── SubmitForm.tsx         # New ticket submission form
```

## Setup

```bash
npm create vite@latest helpdesk -- --template react-ts
cd helpdesk
# Replace src/ contents with these project files
npm install
npm run dev
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Plain CSS — Lora (serif) + Inter (sans)
