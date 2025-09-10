import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "../components/Loader";
import ErrorPage from "../pages/error";

const Login = lazy(() => import("../pages/auth/login"));
const ForgetPassord = lazy(() => import("../pages/auth/forgetPassord"));
const ResetPassord = lazy(() => import("../pages/auth/resetPassord"));
const ResetSuccess = lazy(() => import("../pages/auth/resetSuccess"));

const RootLayout = lazy(() => import("../pages/rootLayout"));
const Home = lazy(() => import("../pages/home"));

const AdminPanel = lazy(() => import("../pages/adminPanel"));

// Dahsboard
const Dahsboard = lazy(() => import("../pages/adminPanel/dahsboard"));

// Network
const Network = lazy(() => import("../pages/adminPanel/services/network"));
const Storage = lazy(() => import("../pages/adminPanel/services/sorage"));
const Image = lazy(() => import("../pages/adminPanel/services/image"));
const CreateImage = lazy(() =>
  import("../pages/adminPanel/services/image/create")
);

// Machines
const VirtualMachines = lazy(() =>
  import("../pages/adminPanel/machines/virtualMachines")
);
const Maps = lazy(() => import("../pages/adminPanel/machines/maps"));
const CreateMachine = lazy(() =>
  import("../pages/adminPanel/machines/maps/create")
);
const CreateVirtualMachine = lazy(() =>
  import("../pages/adminPanel/machines/virtualMachines/create")
);

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
      { path: "forget-password", element: withSuspense(ForgetPassord) },
      { path: "reset-password", element: withSuspense(ResetPassord) },
      { path: "reset-success", element: withSuspense(ResetSuccess) },
      {
        path: "admin-panel",
        element: withSuspense(AdminPanel),
        children: [
          {
            index: true,
            element: withSuspense(Dahsboard),
          },
          {
            path: "services/network",
            element: withSuspense(Network),
          },
          {
            path: "machines/virtual-machines",
            element: withSuspense(VirtualMachines),
          },
          {
            path: "machines/maps",
            element: withSuspense(Maps),
          },
          {
            path: "machines/maps/create",
            element: withSuspense(CreateMachine),
          },
          {
            path: "machines/virtual-machines/create",
            element: withSuspense(CreateVirtualMachine),
          },
          {
            path: "services/storage",
            element: withSuspense(Storage),
          },
          {
            path: "services/image",
            element: withSuspense(Image),
          },
          {
            path: "services/image/create",
            element: withSuspense(CreateImage),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
