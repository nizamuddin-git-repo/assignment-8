import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.jsx/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
          <Outlet></Outlet>
        <div className="max-w-7xl mx-auto mt-10">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
