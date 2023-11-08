import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="duration-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;