import React from "react";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { USER_INFO } from "../../constants/constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Good afternoon, {USER_INFO.name}</h1>
      <div className="profile-section-top">
        <ProfileDropdown displayIconOnly={true} />
      </div>
    </div>
  );
};

export default Header;
