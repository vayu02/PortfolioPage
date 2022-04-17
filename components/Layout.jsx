import Footer from "./commons/Footer";
import Navbar from "./commons/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
