import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GraphPage from "./Pages/GraphPage";
import TablesPage from "./Pages/TablesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphs" element={<GraphPage />} />
        <Route path="/tables" element={<TablesPage />} />
      </Routes>
    </div>
  );
}

export default App;
