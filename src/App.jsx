import React, { useState } from "react";
import Header from "./components/Header";
import FixedButton from "./components/FixedButton"; 
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";
import MedicationTwoToneIcon from "@mui/icons-material/MedicationTwoTone";
import CalendarPage from "./pages/CalendarPage"; 
import DataPage from "./pages/DataPage";
import MedicationsPage from "./pages/MedicationsPage";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./index.css"; 

const App = () => {
  const [value, setValue] = useState(0); // State to manage the selected value in bottom navigation

  return (
    <Router>

      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/medications" element={<MedicationsPage />} />
      </Routes>

      <div>
        <Header />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottom-nav"
        >
          <BottomNavigationAction label="Calendar" icon={<CalendarMonthTwoToneIcon />} component={Link} to="/calendar" />
          <BottomNavigationAction label="Data" icon={<AutoGraphTwoToneIcon />} component={Link} to="/data" />
          <BottomNavigationAction label="Medications" icon={<MedicationTwoToneIcon />} component={Link} to="/medications" />
        </BottomNavigation>
        <FixedButton />
      </div>
    </Router>
  );
};

export default App;
