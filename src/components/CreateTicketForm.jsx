import { Form } from "react-router-dom";

function CreateTicketForm() {
  return (
    <Form method="post">

      <input
        type="text"
        name="title"
        placeholder="Ticket Title"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        rows="5"
        required
      />

      <select name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select name="status">
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
      />

      <button type="submit">
        Create Ticket
      </button>

    </Form>
  );
}

export default CreateTicketForm;