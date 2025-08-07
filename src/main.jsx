import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import App from "./App.jsx";
import "./index.css";
import routes from "./routes/routes";
import store from "./slices/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </StrictMode>
);
