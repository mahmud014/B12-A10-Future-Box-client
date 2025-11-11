import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import { Suspense } from "react";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/allreviews",
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <AllReviews></AllReviews>
          </Suspense>
        ),
      },
    ],
  },
]);
