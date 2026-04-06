import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // ✅ Improved Logout Function
  const handleLogout = () => {
    // Clear all auth related data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("authToken"); // agar koi aur naam se save kiya ho

    // Dropdown close
    setIsProfileDropdownOpen(false);

    // Force redirect to login (better way)
    navigate("/login", { replace: true });
  };

  return (
    <div className="menu-container">
      <img src="/src/components/Screenshot 2025-09-08 174800.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/home"
              end
              onClick={() => handleMenuClick(0)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
          </li>
          {/* Baaki sab NavLink same rahega... */}
          <li>
            <NavLink
              to="/home/orders"
              onClick={() => handleMenuClick(1)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/holdings"
              onClick={() => handleMenuClick(2)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/positions"
              onClick={() => handleMenuClick(3)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/funds"
              onClick={() => handleMenuClick(4)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/apps"
              onClick={() => handleMenuClick(5)}
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Apps
            </NavLink>
          </li>
        </ul>

        <hr />

        {/* Profile Section */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {isProfileDropdownOpen && (
            <div className="dropdown">
              <p onClick={(e) => e.stopPropagation()}>Settings</p>
              <p
                onClick={handleLogout}
                style={{ color: "red", cursor: "pointer" }}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;