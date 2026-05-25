import App from "@/App";
import PublicLayout from "@/layout/public-layout";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [
      { index: true, Component: App },
    ],
  },
]);
