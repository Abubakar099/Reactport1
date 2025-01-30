
import  {Navbar} from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
// import SkillRow from "./Rating";

export const Layout = () => {
  
  return (
    <>
    
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


