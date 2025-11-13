import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import { Suspense } from "react";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "../Components/ErrorPage";
import About from "../Pages/About";
import ReservationSection from "../Components/ReservationSection";
import Contact from "../Pages/Contact";
import Jobs from "../Pages/Job";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ReviewsDetails from "../Pages/ReviewsDetails";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import EditReview from "../Components/EditReview";

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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/reservation",
        element: <ReservationSection></ReservationSection>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/reviewsdetails/:id",
        element: (
          <PrivateRoute>
            <ReviewsDetails></ReviewsDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/editreview/:id",
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
    ],
  },
]);
