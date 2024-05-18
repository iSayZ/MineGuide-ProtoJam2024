import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Biome from "./pages/Biome";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/equipe",
            element: <Team />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "/biome/:id",
        element: <Biome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);