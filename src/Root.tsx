import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Homepage from "./components/Homepage";

function RootLayout() {
  return (
    <>
        <MainNavigation />
        <Homepage />
        <Outlet />
    </>
  );
}

export default RootLayout;