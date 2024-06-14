import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Records from "./feature/records/Records";
import RecordDeatils from "./components/RecordDeatils";
import DayOfWeek from "./components/DayOfWeek";

// year month day;

function App() {
  return (
    <div className="App">
      <Router>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Record Management</h1>
          <Routes>
            <Route path="/" element={<Records />} />
            <Route path="/details/:id" element={<RecordDeatils />} />
          </Routes>
        </div>
      </Router>
      {/* <DayOfWeek year={2022} month={12} day={1}/> */}
    </div>
  );
}

export default App;
