import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

export const NavBar: React.FC = () => {
  return (
    <nav className="nav__container">
      <Link className="nav__link" to="/">
        HOME
      </Link>
      <Link className="nav__link" to="/create">
        CREATE
      </Link>
    </nav>
  );
};
