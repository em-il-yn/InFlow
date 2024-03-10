import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg"; // Import the logo
import addEntryHeader from "../assets/addentry-header.svg";
import calendarHeader from "../assets/calendar-header.svg";
import dataHeader from "../assets/data-header.svg";
import medicationsHeader from "../assets/medications-header.svg";
import reactLogo from "../assets/react.svg";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  let headerImage;
  switch (pathname) {
    case "calendar":
      headerImage = calendarHeader;
      break;
    case "data":
      headerImage = dataHeader;
      break;
    case "medications":
      headerImage = medicationsHeader;
      break;
    case "addentry":
      headerImage = addEntryHeader;
      break;
    default:
      headerImage = reactLogo; // Use default logo if no specific header is found
      break;
  }

  return (
    <div className="header-container">
      <img src={logo} alt="Logo" className="header-logo" />
      <img src={headerImage} alt="Page Header" className="header-image" />
    </div>
  );
};

export default Header;
