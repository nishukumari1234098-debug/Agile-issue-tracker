import React from "react";

function TicketCard({ ticket, onStatusChange, onDeleteTicket }) {
  const assigneeName =
    typeof ticket.assignee === "object"
      ? ticket.assignee?.name
      : ticket.assignee || "Unassigned";

  const priorityClass = `badge-${ticket.priority?.toLowerCase() || "low"}`;
  const initial = assigneeName.charAt(0).toUpperCase();

  // Clean duplicate #JIRA prefix issue
  const cleanId = String(ticket.id).replace(/^#?JIRA-?/i, "");

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete ticket #JIRA-${cleanId}?`)) {
      onDeleteTicket(ticket.id);
    }
  };

  return (
    <div className="ticket-card-modern">
      {/* Top Header Row */}
      <div className="ticket-top-bar">
        <span className="ticket-key">#JIRA-{cleanId}</span>

        <div className="card-actions-top">
          <span className={`badge-priority ${priorityClass}`}>
            {ticket.priority || "Low"}
          </span>

          {/* Delete Action Button */}
          <button
            className="delete-btn-icon"
            title="Delete Ticket"
            onClick={handleDelete}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <h4 className="ticket-title">{ticket.title}</h4>
      <p className="ticket-desc">{ticket.description}</p>

      {/* Bottom Footer: Assignee & Dropdown Selector */}
      <div className="ticket-bottom">
        <div className="assignee-box">
          <div className="avatar">{initial}</div>
          <span>{assigneeName}</span>
        </div>

        {/* Clean Status Switcher replacing ugly 3-button bar */}
        <select
          value={ticket.status}
          onChange={(e) => onStatusChange(ticket.id, e.target.value)}
          className="status-dropdown-clean"
        >
          <option value="Todo">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
}

export default React.memo(TicketCard);