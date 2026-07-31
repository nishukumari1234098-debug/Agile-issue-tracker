import TicketCard from "./TicketCard";

function Column({ title, tickets }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span>{tickets.length}</span>
      </div>

      <div className="column-body">
        {tickets.length === 0 ? (
          <p className="empty-message">
            No Tickets Available
          </p>
        ) : (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;