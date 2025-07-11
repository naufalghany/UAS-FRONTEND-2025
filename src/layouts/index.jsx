import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

/**
 * @typedef {Object} ChildProps
 * @property {JSX.Element|JSX.Element[]} children
 */

/**
 * @param {ChildProps} props
 */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
