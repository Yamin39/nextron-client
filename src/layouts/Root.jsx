import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;