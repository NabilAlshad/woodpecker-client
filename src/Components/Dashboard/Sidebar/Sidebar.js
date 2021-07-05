import React, { useState, useEffect, useContext } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [isAdmin]);
  return (
    <div class="sidebar col-md-2">
      <ul class="nav flex-column">
        <li class="nav-item  mt-2">
          <Link className="nav-link bg-warning text-white" to="/customerOrders">
            <span>
              <i class="fab fa-first-order text-secondary"></i>
            </span>{" "}
            Your orders
          </Link>
        </li>
        <li class="nav-item  mt-2">
          <Link className="nav-link bg-warning text-white" to="/addReview">
            <span>
              <i class="fas fa-plus text-secondary"></i>
            </span>{" "}
            AddReview
          </Link>
        </li>

        {isAdmin && (
          <div>
            <li class="nav-item mt-2">
              <Link className="nav-link bg-warning text-white" to="/orders">
                <span>
                  <i class="fab fa-first-order text-black-50"></i>
                </span>{" "}
                Orders
              </Link>
            </li>

            <li class="nav-item  mt-2">
              <Link class="nav-link bg-warning text-white" to="/addServices">
                <span>
                  <i class="fab fa-servicestack"></i>
                </span>{" "}
                AddServices
              </Link>
            </li>
            <li class="nav-item  mt-2">
              <Link class="nav-link bg-warning text-white" to="/addAdmin">
                <span>
                  <i class="fas fa-user"></i>
                </span>{" "}
                Make Admin
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
