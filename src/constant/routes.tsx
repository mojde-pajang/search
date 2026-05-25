import App from "@/App";
import PublicLayout from "@/layout/public-layout";
import Products from "@/pages/products";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [
      { index: true, Component: App },
      { path: "products", Component: Products },
    ],
  },
]);
