const BASE_URL = "http://localhost:3000/tickets";

// Get All Tickets
export const getTickets = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return response.json();
};

// Get Single Ticket
export const getTicketById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Ticket not found");
  }

  return response.json();
};

// Create Ticket
export const createTicket = async (ticket) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  if (!response.ok) {
    throw new Error("Failed to create ticket");
  }

  return response.json();
};

// Update Ticket
export const updateTicket = async (id, updatedTicket) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTicket),
  });

  if (!response.ok) {
    throw new Error("Failed to update ticket");
  }

  return response.json();
};

// Delete Ticket
export const deleteTicket = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete ticket");
  }

  return true;
};