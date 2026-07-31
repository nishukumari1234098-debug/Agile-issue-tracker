import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import Home from "./Home";
import CreateTicket from "./CreateTicket";

import { getTickets, createTicket } from "../api/tickets";


// Loader for Home Page
export async function ticketsLoader() {
  return await getTickets();
}


// Action for Create Ticket
export async function createTicketAction({ request }) {
  const formData = await request.formData();

  const newTicket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    status: formData.get("status"),

    assignee: {
      name: formData.get("assignee"),
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
  };

  await createTicket(newTicket);

  return redirect("/");
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: ticketsLoader,
  },

  {
    path: "/create",
    element: <CreateTicket />,
    action: createTicketAction,
  },
]);


export default router;