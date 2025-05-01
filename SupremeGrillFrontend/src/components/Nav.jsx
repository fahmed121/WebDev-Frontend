import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul
        className="nav justify-content-end nav-justified nav-underline navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="collapse navbar-collapse" id="navbarNav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/basket">
              Basket
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/staff">
              Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/login">
              Log In
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
