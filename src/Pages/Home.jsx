import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Destination from "../Components/Destination";
import Blogs from "../Components/Blogs";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <Header></Header>
           <Outlet></Outlet>
           <Destination></Destination>
          <Blogs></Blogs>
        </div>
    );
};

export default Home;