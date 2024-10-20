import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <>
      {<Outlet/>}
      </>
    </>
  );
};

export default MainLayout;
