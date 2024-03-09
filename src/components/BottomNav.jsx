import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MedicationTwoToneIcon from '@mui/icons-material/MedicationTwoTone';
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

const BottomNav = () => {
  const [value, setValue] = useState(0); // State variable for managing the selected value

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="bottom-nav"
    >
      <BottomNavigationAction label="Calendar" icon={<CalendarMonthTwoToneIcon />} />
      <BottomNavigationAction label="Data" icon={<AutoGraphTwoToneIcon />} />
      <BottomNavigationAction label="My Medications" icon={<MedicationTwoToneIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
