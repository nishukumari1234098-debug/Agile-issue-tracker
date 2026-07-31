import CreateTicketForm from "../components/CreateTicketForm";
import "../styles/routes.css";

function CreateTicket() {
  return (
    <div className="create-ticket-page">

      <h1>Create New Ticket</h1>

      <p className="page-description">
        Fill in the details below to create a new issue.
      </p>

      <CreateTicketForm />

    </div>
  );
}

export default CreateTicket;