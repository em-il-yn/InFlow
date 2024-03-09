import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Notes";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import "./index.css";
import DateCalendarValue from "./components/DateCalendarValue"; // Import the calendar component


const App = () => {
  return (
    <div>
      <Header />
      <DateCalendarValue />
      <BottomNav />
    </div>
  );
};

export default App;
