import { Outlet } from "react-router";
import fuelstation from "../assets/fuels.jpg";

const AuthLayout = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fuelstation})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
