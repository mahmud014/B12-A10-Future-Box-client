import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoadingPage from "./Components/LoadingPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        hydrateFallback={<LoadingPage></LoadingPage>}
      />
      ,
    </AuthProvider>
  </StrictMode>
);
