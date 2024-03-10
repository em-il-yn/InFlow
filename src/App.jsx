import React, { useState } from "react";
import Header from "./components/Header";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";
import MedicationTwoToneIcon from "@mui/icons-material/MedicationTwoTone";
import CalendarPage from "./pages/CalendarPage"; 
import DataPage from "./pages/DataPage";
import MedicationsPage from "./pages/MedicationsPage";
import AddEntryPage from "./pages/AddEntryPage"
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { customTheme } from './theme.js'; 
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./index.css"; 

const App = () => {
  const [value, setValue] = useState(0); 

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/addentry" element={<AddEntryPage />} />
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
            <div className="fixed-button-container">
              <IconButton aria-label="add" size="medium" component={Link} to="/addentry">
                <AddCircleTwoToneIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
