import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer/Footer";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const navigationForSpinner = useNavigation();
  return (
    <div>
      <div className="px-10 py-6 shadow-lg flex justify-between">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Amazon</h1>
        </Link>
        <div className="items-center space-x-1 md:space-x-4 text-lg">
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "bg-green-500 text-white px-2 py-[3px] rounded-md" : "")}>Home</NavLink>
          <NavLink to={"/products"} className={({ isActive }) => (isActive ? "bg-green-500 text-white px-2 py-[3px] rounded-md" : "")}>Products</NavLink>
          <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "bg-green-500 text-white px-2 py-[3px] rounded-md" : "")}>Dashboard</NavLink>
        </div>
      </div>
      {navigationForSpinner.state === "loading" ? (
        <p className="flex justify-center my-4 min-h-[70vh]">
          <ColorRing
            visible={true}
            height="110"
            width="110"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </p>
      ) : (
        <div className="min-h-[75vh] max-w-[1330px] mx-auto my-6">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
