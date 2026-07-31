import { Form } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="create-ticket-page">
      <h1>Create New Ticket</h1>

      <Form method="post" className="ticket-form">
        <input
          type="text"
          name="title"
          placeholder="Enter Ticket Title"
          required
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          rows="5"
          required
        />

        <select name="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select name="status">
          <option value="Todo">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <input
          type="text"
          name="assignee"
          placeholder="Assign To"
        />

        <button type="submit">
          Create Ticket
        </button>
      </Form>
    </div>
  );
}

export default CreateTicket;