import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "../components/Loader";
import ErrorPage from "../pages/error";
import RootLayout from "../pages/rootLayout";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/auth/login"));

const withSuspense = (Comp) => (
  <Suspense fallback={<Loader />}>
    <Comp />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(RootLayout),
    errorElement: withSuspense(ErrorPage),
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "login", element: withSuspense(Login) },
    ],
  },
]);

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
