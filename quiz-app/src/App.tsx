import * as React from "react";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container mx-auto px-4 App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

