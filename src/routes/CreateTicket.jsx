import Navbar from "../components/Navbar";
import CreateTicketForm from "../components/CreateTicketForm";
import "../styles/routes.css";

function CreateTicket() {
  return (
    <>
      <Navbar />

      <div className="create-ticket-wrapper">
        <div className="create-ticket-card">
          <div className="form-header">
            <h2>Create New Issue</h2>
            <p>Fill out the form below to add a new task to the backlog.</p>
          </div>

          <CreateTicketForm />
        </div>
      </div>
    </>
  );
}

export default CreateTicket;