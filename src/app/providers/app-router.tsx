import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Weather } from "../../pages/weather/weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Weather/>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />
}