import React from "react";
import TicketCard from "./TicketCard";

function Column({ title, tickets, onStatusChange }) {
  const getDotClass = () => {
    if (title.includes("To Do")) return "dot-todo";
    if (title.includes("Progress")) return "dot-progress";
    return "dot-done";
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title-group">
          <span className={`column-dot ${getDotClass()}`}></span>
          <span>{title}</span>
        </div>
        <span className="column-count">{tickets.length}</span>
      </div>

      <div className="column-body">
        {tickets.length === 0 ? (
          <p style={{ color: "#64748b", textAlign: "center", fontSize: "13px", marginTop: "40px" }}>
            No Tickets Available
          </p>
        ) : (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default React.memo(Column);