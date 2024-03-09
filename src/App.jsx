import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Notes";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import "./index.css";
import DateCalendarValue from "./components/DateCalendarValue"; 
import FixedButton from "./components/FixedButton"; 
import TextEntryBox from "./components/TextEntryBox";


const App = () => {
  return (
    <div>
      <Header />
      <DateCalendarValue />
      <TextEntryBox />
      <BottomNav />
      <FixedButton />
    </div>
  );
};

export default App;
