import Navbar from "../../Shared/Navbar/Navbar";
import FooterNew from "../../Shared/FooterNew/index.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("postnewjob");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <FooterNew></FooterNew>}
    </div>
  );
};
export default MainLayout;
