import { AuthContext } from "../../../../context/AuthContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navebar() {

  const [state] = useContext(AuthContext)
  console.log(state);
  
  const { isAuthenticated } = state;



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow py-0">
        <div class="container">
          <Link class="navbar-brand text-primary fs-1 fw-bold">
            <FontAwesomeIcon icon={faReact} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5  fw-bold">
              <li class="nav-item mx-2">
                <Link to="/" class="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/about" class="nav-link" aria-current="page">
                  About
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/contact" class="nav-link" aria-current="page">
                  Contact
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link to="/todo" class="nav-link" aria-current="page">
                  Todo
                </Link>
              </li>
            </ul>
5
            <div class="d-flex">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="authentication/login"
                    className="btn btn-primary fw-bold me-2"
                  >
                    Login     
                  </Link>
                  <Link
                    to="authentication/register"
                    className="btn btn-primary fw-bold"
                  >
                    Register <FontAwesomeIcon icon={faUserPlus} />
                  </Link>
                </>
              ) : (
                <>
                  <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <Link to="/your-path" className="fs-2">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>

                    {isDropdownOpen && (
                      <div class="dropdown">
                        {/* <button onclick="myFunction()" class="dropbtn">Dropdown</button> */}
                        <div id="myDropdown" class="dropdown-content">
                          <Link to="/profile" className="text-primary">
                            <FontAwesomeIcon icon={faUser} /> Account
                          </Link>
                          <Link to="/sitting" className="text-primary">
                            <FontAwesomeIcon icon={faGear} /> Setting
                          </Link>
                          <Link to="/logout" className="text-primary">
                            <FontAwesomeIcon icon={faRightToBracket} /> Logout
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
