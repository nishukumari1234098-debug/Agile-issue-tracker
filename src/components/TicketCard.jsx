function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">

      <div className="ticket-top">

        <span className="ticket-id">
          #{ticket.id}
        </span>

        <span
          className={`priority ${ticket.priority.toLowerCase()}`}
        >
          {ticket.priority}
        </span>

      </div>

      <h3 className="ticket-title">
        {ticket.title}
      </h3>

      <p className="ticket-description">
        {ticket.description}
      </p>

      <div className="ticket-footer">

        <span className="assignee">
          👤 {ticket.assignee}
        </span>

        <span className="status">
          {ticket.status}
        </span>

      </div>

    </div>
  );
}

export default TicketCard;