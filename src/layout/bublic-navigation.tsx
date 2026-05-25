import { NavLink } from "react-router";
import Logo from "@/assets/vite.svg?react";

const PublicNavigation = () => {
  return (
    <header className="py-5 bg-white  drop-shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <NavLink aria-label="Home" to={"/"}>
              <Logo />
            </NavLink>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                to={"/products"}
              >
                Products
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PublicNavigation;
