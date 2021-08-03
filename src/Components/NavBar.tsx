import Banner from "./Banner";

import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <>
      <header>
        <Link to="/">
          <div className="nav-bar-name">Brianna Cerkiewicz</div>
        </Link>
      </header>
      <Banner />
    </>
  );
};
export default NavBar;
