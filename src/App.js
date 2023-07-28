import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GraphPage from "./Pages/GraphPage";
import TablesPage from "./Pages/TablesPage";
import NavigatorBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavigatorBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphs" element={<GraphPage />} />
        <Route path="/tables" element={<TablesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
