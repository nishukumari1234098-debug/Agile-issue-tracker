const BASE_URL = "https://jira-clone-3.onrender.com/tickets";


// Get All Tickets
export const getTickets = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return await response.json();
};


// Create New Ticket
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

  return await response.json();
};


// Update Ticket Status (Day 5 + Day 6)
export const updateTicketStatus = async (id, status) => {

  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
      }),
    }
  );


  if (!response.ok) {
    throw new Error("Failed to update ticket status");
  }


  return await response.json();
};