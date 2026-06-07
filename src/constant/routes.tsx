import App from "@/App";
import PublicLayout from "@/layout/public-layout";
import NotFound from "@/pages/not-found";
import Products from "@/pages/products";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: App },
      { path: "products", Component: Products },
      {path:"*", Component: NotFound}
    ],
  },
]);
