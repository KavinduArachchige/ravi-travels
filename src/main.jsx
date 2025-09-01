import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import PackageDetails from "./pages/PackageDetails.jsx";
import Visa from "./pages/Visa.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createHashRouter([
  {
    path: "/",               // parent route for everything
    element: <App />,        // your layout (Navbar/Footer)
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },                // <-- HOME
      { path: "packages", element: <Packages /> },
      { path: "packages/:slug", element: <PackageDetails /> },
      { path: "dubai-visa", element: <Visa /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },              // catch-all
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
