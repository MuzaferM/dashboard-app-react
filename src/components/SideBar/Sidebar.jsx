import React, { useState } from "react";
import "./Sidebar.scss";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import {
  NAV_LINKS,
  UPCOMING_EVENTS,
  SUPPORT_OPTIONS,
} from "../../constants/constants";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <ion-icon
          name={isOpen ? "close" : "menu-sharp"}
          size="large"
        ></ion-icon>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="header-logo">
            <ion-icon name="infinite" size="medium"></ion-icon>
          </span>
          Neo UI
        </div>
        <nav>
          <ul>
            {NAV_LINKS.map((link, index) => (
              <div className="sidebar-options" key={index}>
                <ion-icon name={link.iconName}></ion-icon>
                <li>{link.label}</li>
              </div>
            ))}
          </ul>
        </nav>
        <div className="upcoming-events">
          <p>Upcoming Events</p>
          <nav>
            <ul>
              {UPCOMING_EVENTS.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </nav>
        </div>

        <nav>
          <ul>
            {SUPPORT_OPTIONS.map((link, index) => (
              <div className="sidebar-options" key={index}>
                <ion-icon name={link.iconName}></ion-icon>
                <li>{link.label}</li>
              </div>
            ))}
          </ul>
        </nav>

        <div className="profile-section">
          <ProfileDropdown />
        </div>
      </div>

    </>
  );
};

export default Sidebar;
