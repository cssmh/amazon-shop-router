import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col w-1/5 bg-red-200 pl-2">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/dashboard/profile"}>Profile</NavLink>
        <NavLink to={"/dashboard/edit-profile"}>Edit Profile</NavLink>
      </div>
      <div className="w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
