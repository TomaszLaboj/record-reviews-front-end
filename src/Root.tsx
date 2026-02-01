import { Outlet } from "react-router-dom";
import Homepage from "./components/Homepage";

function RootLayout() {
  return (
    <>
        <Homepage />
        <Outlet />
    </>
  );
}

export default RootLayout;