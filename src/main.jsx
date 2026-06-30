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
import FAQ from "./pages/FAQ.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import PolicyPage from "./pages/PolicyPage.jsx";
import DocumentsPage from "./pages/DocumentsPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "contacts", element: <ContactsPage /> },
  { path: "documents", element: <DocumentsPage /> },
  { path: "faq", element: <FAQ /> },
  { path: "not-found", element: <NotFoundPage /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "sign-up", element: <SignupPage /> },
  { path: "log-in", element: <LoginPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "team", element: <TeamPage /> },
  { path: "policy", element: <PolicyPage /> },
  { path: "about", element: <AboutUsPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
