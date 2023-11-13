import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Login from "./Components/logIn/LogIn";
import Dashboard from "./Components/dashboard/Dashboard";
import Protected from "./Components/security/protected/Protected";
import PageNotFound from "./Components/security/pageNotFound/PageNotFound";
import { ThemeContext } from "./Components/services/themeContext/theme.context";
import { useContext } from "react";
import {
  APIContext,
  APIContextProvider,
} from "./Components/services/apiContext/API.Context";
import { Spinner } from "react-bootstrap";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div
      className={`App ${theme === "oscuro" && "dark-theme"} ${
        isLoading && "opacity-80"
      }`}
    >
      {isLoading && <Spinner />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
