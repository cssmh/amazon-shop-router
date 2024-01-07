import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="px-10 py-6 shadow-lg flex justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Amazon</h1>
        </Link>
        <div className="items-center space-x-4 text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </div>
      </div>
      <div className="min-h-[75vh] max-w-[1330px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
