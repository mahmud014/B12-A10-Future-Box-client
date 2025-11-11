import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <p>error page</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allreviews",
        element: <AllReviews></AllReviews>,
      },
    ],
  },
]);
