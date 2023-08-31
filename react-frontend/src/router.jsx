import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardSummary from "./pages/Dashboard/DashboardSummary/DashboardSummary";
import MemberAdd from "./pages/Dashboard/DashboardSummary/Members/MemberAdd";
import MemberView from "./pages/Dashboard/DashboardSummary/Members/MemberView";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashboardSummary />,
          },
          {
            path: "member-add",
            element: <MemberAdd />,
          },
          {
            path: "member-view",
            element: <MemberView />,
          },
        ],
      },
    ],
  },
]);

export default router;
