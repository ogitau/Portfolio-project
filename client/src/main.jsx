import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <RecordList /> },

    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      { index: true, element: <Record /> },
      {path: "/create", element:<Record />}
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      { index: true, element: <Record /> },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
