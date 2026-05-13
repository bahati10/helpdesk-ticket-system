import { useState } from "react";
import {
  type TicketFormData,
  CATEGORIES,
  PRIORITIES,
  CATEGORY_ICONS,
  type Category,
} from "../constants";

interface Props {
  onSubmit: (data: TicketFormData) => void;
}

const EMPTY: TicketFormData = {
  title: "",
  description: "",
  category: "Software",
  priority: "Medium",
  submittedBy: "",
};

export default function SubmitForm({ onSubmit }: Props) {
  const [form, setForm] = useState<TicketFormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update =
    <K extends keyof TicketFormData>(field: K) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.submittedBy.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    onSubmit(form);
    setForm(EMPTY);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="submit-page">
      <div className="submit-card">
        <div className="submit-header">
          <h2 className="submit-title">Submit a Support Ticket</h2>
          <p className="submit-sub">
            Describe your issue and our IT team will get back to you shortly.
          </p>
        </div>

        {submitted && (
          <div className="success-banner">
            ✓ Ticket submitted successfully. View it in the Ticket Board.
          </div>
        )}

        <div className="form-grid">
          <div className="field field-full">
            <label>
              Issue Title <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Brief summary of the issue"
              value={form.title}
              onChange={update("title")}
            />
          </div>

          <div className="field">
            <label>Category</label>
            <select value={form.category} onChange={update("category")}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {CATEGORY_ICONS[c as Category]} {c}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Priority</label>
            <select value={form.priority} onChange={update("priority")}>
              {PRIORITIES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="field field-full">
            <label>
              Description <span className="required">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Describe the issue in detail — what happened, when it started, what you've already tried..."
              value={form.description}
              onChange={update("description")}
            />
          </div>

          <div className="field">
            <label>
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              value={form.submittedBy}
              onChange={update("submittedBy")}
            />
          </div>
        </div>

        <div className="submit-footer">
          <button className="btn btn-submit" onClick={handleSubmit}>
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
