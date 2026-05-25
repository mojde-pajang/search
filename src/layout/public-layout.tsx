import { Outlet } from "react-router";
import PublicNavigation from "./bublic-navigation";
const PublicLayout = () => {
  return (
    <div>
      <PublicNavigation />
      <div className="pt-2 pb-1 sm:pt-3 sm:pb-2 lg:pb-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
