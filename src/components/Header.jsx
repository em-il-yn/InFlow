import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  let pageTitle;
  switch (pathname) {
    case "calendar":
      pageTitle = "Calendar";
      break;
    case "data":
      pageTitle = "Data";
      break;
    case "medications":
      pageTitle = "Medications";
      break;
    case "addentry":
      pageTitle = "Add Entry";
      break;
    default:
      pageTitle = "Unknown";
      break;
  }

  return (
    <div className="header-container">
      <h1 className="header-title">{pageTitle}</h1>
    </div>
  );
};

export default Header;
