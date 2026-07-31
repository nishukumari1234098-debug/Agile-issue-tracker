import { Form, useNavigate } from "react-router-dom";

function CreateTicketForm() {
  const navigate = useNavigate();

  return (
    <Form method="post" action="/create" className="ticket-form">
      {/* Title Input */}
      <div className="form-group">
        <label htmlFor="title">Issue Title *</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="e.g. Fix authentication token bug"
          required
        />
      </div>

      {/* Description */}
      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe the problem or issue details..."
          rows="4"
          required
        />
      </div>

      {/* Grid for Select inputs */}
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" defaultValue="Medium">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue="Todo">
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      {/* Assignee */}
      <div className="form-group">
        <label htmlFor="assignee">Assignee Name</label>
        <input
          id="assignee"
          type="text"
          name="assignee"
          placeholder="e.g. Rahul Sharma"
        />
      </div>

      {/* Action Buttons */}
      <div className="form-actions">
        <button
          type="button"
          className="cancel-btn"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          Create Issue
        </button>
      </div>
    </Form>
  );
}

export default CreateTicketForm;