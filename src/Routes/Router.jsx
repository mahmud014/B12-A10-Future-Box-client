import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <p>error page</p>,
    children: [
      {
        index: true,
        element: <h1>Hello home</h1>,
      },
    ],
  },
]);
