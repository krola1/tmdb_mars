import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TrendingPage from "../pages/TrendingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
      },
    ],
  },
]);
