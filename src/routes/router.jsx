import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import CreateTicket from "./CreateTicket";
import ActiveSprint from "./ActiveSprint";
import ProductBacklog from "./ProductBacklog";
import Reports from "./Reports";
import { getTickets, createTicket } from "../api/tickets";

function RootLayout() {
  return <Outlet />;
}

export async function createTicketAction({ request }) {
  const formData = await request.formData();

  const newTicket = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority"),
    status: formData.get("status"),
    assignee: {
      name: formData.get("assignee"),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
  };

  await createTicket(newTicket);
  return window.location.href = "/";
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "active-sprint",
        element: <ActiveSprint />,
      },
      {
        path: "backlog",
        element: <ProductBacklog />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "create",
        element: <CreateTicket />,
        action: createTicketAction,
      },
    ],
  },
]);

export default router;