import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Menu from "./pages/Menu.Jsx";
import Basket from "./pages/Basket.Jsx";
import Profile from "./pages/Profile.Jsx";
import About from "./pages/About.Jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Staff from "./pages/Staff.jsx";
import Login from "./pages/Login.Jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> 404 NOT FOUND</div>,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/Basket",
    element: <Basket />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Staff",
    element: <Staff />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
