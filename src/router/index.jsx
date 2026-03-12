import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TrendingPage from "../pages/TrendingPage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
      },
      { path: "search", element: <SearchPage /> },
      { path: "movies/:movieID", element: <DetailsPage /> },
    ],
  },
]);
