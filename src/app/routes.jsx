import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";
import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
// import materialRoutes from "app/views/material-kit/MaterialRoutes";
import AppTable from "./views/material-kit/tables/AppTable";
import AppForm from "./views/material-kit/forms/AppForm";

// session pages
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
// const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
// const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
// const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// // echart page
// const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// // dashboard page
// const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/view",
        element: <AppTable />,
        auth: authRoles.admin,
      },
      {
        path: "/uploadFile",
        element: <AppForm />,
        auth: authRoles.editor,
      },
    ],
  },
  { path: "/", element: <Navigate to="/view" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
