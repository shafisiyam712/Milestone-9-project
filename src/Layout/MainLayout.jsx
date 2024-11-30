import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import DynamicTitle from "../Components/DynamicTitle";
// bg-[#CEE3E7]

const MainLayout = () => {
    return (
        <div className="">
           <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;