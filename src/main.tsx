import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserSignupForm } from "./UserSignupForm/UserSignupForm.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserSignupForm />
  </StrictMode>
);
