import Banner from "./Banner";
import Bar from "./Bar";

import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <>
      <header>
        <Link className="interior-nav-bar" to="/">
          <div className="nav-bar-name">Brianna Cerkiewicz</div>
        </Link>
        <Bar />
      </header>
    </>
  );
};
export default NavBar;
