import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Menu from "./pages/Menu.jsx";
import Basket from "./pages/Basket.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Staff from "./pages/Staff.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div> 404 NOT FOUND</div>,
    children: [
      { index: true, element: <App /> },
      {
        path: "Menu",
        element: <Menu />,
      },
      {
        path: "Basket",
        element: <Basket />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Staff",
        element: <Staff />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
