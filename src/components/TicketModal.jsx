import { useEffect, useRef } from "react";

function TicketModal({ ticket, onClose }) {
  const titleRef = useRef(null);

  // Auto focus on input
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!ticket) return null;

  return (
    <div className="modal-overlay">

      <div className="ticket-modal">

        <div className="modal-header">
          <h2>Edit Ticket</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          <label>Title</label>

          <input
            ref={titleRef}
            type="text"
            defaultValue={ticket.title}
          />

          <label>Description</label>

          <textarea
            rows="5"
            defaultValue={ticket.description}
          />

          <label>Priority</label>

          <select defaultValue={ticket.priority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label>Status</label>

          <select defaultValue={ticket.status}>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <button className="save-btn">
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default TicketModal;