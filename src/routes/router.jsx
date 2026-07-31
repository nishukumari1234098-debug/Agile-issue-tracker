import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import CreateTicket from "./CreateTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-ticket",
    element: <CreateTicket />,
  },
]);

export default router;