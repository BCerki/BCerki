import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavBar: React.FC = () => {
  const location = useLocation();
  const linkClass =
    location.pathname === "/" ? "main-nav-bar" : "interior-nav-bar";
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link className={linkClass} to="/about+contact">
            About + Contact
          </Link>
        </li>
        <li>
          <Link className={linkClass} to="/books">
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
