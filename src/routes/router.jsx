import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Logiin"));
const Register = lazy(() => import("../pages/Register"));
const Annonce = lazy(() => import("../api/organizer/getAnnonce"));
const CreateAnnonce = lazy(() => import("../api/organizer/createAnnonce"));
const UpdateAnnonce = lazy(() => import("../api/organizer/updateAnnonce"));

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
  }
]);

export default router;
