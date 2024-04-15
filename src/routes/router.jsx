import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Logiin";
import Register from "../pages/Register";
import Annonce from "../api/organizer/getAnnonce";
import CreateAnnonce from "../api/organizer/createAnnonce";
import UpdateAnnonce from "../api/organizer/updateAnnonce";
import Dashboard from "../api/organizer/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/annonce",
    element: <Annonce />,
  },
  {
	path: "/createAnnonce",
	element: <CreateAnnonce />
  },
  {
    path: "/updateAnnonce",
    element: <UpdateAnnonce />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

export default router;
