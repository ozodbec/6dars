import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "antd/es/layout/layout";

function MainLayout() {
  return ( 
    <>
    <Navbar />
    <main>
        <Outlet />
    </main>
    {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
