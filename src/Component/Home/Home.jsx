import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="px-10 py-6 shadow-lg flex justify-between">
            <Link to={"/"}><h1 className="text-2xl font-semibold">Amazon</h1></Link>
            <div className="items-center space-x-4 text-lg">
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Home;