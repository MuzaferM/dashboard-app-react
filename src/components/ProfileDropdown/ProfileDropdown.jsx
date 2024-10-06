import React, { useState, useEffect, useRef } from "react";
import { USER_INFO, PROFILE_OPTIONS } from "../../constants/constants";
import "./ProfileDropdown.scss";

const ProfileDropdown = ({ displayIconOnly = false }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="profile" onClick={toggleDropdown}>
        {!displayIconOnly ? (
          <div className="user-info">
            <ion-icon name={USER_INFO.avatar} size="large"></ion-icon>
            <div className="user-details">
              <p className="user-name">{USER_INFO.name}</p>
              <p className="user-email">{USER_INFO.email}</p>
            </div>
            <i className={`arrow ${open ? "up" : "down"}`}></i>
          </div>
        ) : (
          <ion-icon name={USER_INFO.avatar} size="large"></ion-icon>
        )}
      </div>

      {open && (
        <div
          className={displayIconOnly ? "dropdown-menu dropdown-menu-mobile" : "dropdown-menu"}
        >
          <ul>
            {PROFILE_OPTIONS.map((item, index) => (
              <div className="dropdown-sidebar-options" key={index}>
                <ion-icon name={item.iconName}></ion-icon>
                <li>{item.label}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
