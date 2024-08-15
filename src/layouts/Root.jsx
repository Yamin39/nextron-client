import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto font-kanit">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;