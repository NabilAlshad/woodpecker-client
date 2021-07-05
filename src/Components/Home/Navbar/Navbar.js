import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../images/WOODPECKER LOGO bgs.jpg";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser);
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home">
            <img
              style={{ width: "200px", height: "80px" }}
              src={logo}
              alt="logo"
            ></img>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              {loggedInUser.IsSignedIn ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setLoggedInUser({})}
                >
                  <Link path="/home" className="nav-link">
                    logout
                  </Link>
                </button>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {loggedInUser.IsSignedIn && (
                <li className="nav-item ">
                  <Link className="nav-link text-info" to="/">
                    <span>
                      <i className="fas fa-user  p-1"></i>
                    </span>
                    {loggedInUser.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
