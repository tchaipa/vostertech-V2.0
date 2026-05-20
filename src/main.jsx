import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "contacts", element: <ContactsPage /> },
  { path: "not-found", element: <NotFoundPage /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "sign-up", element: <SignupPage /> },
  { path: "log-in", element: <LoginPage /> },
  { path: "services", element: <ServicesPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
