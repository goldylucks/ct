import React, { useState } from "react";
import { Router, Link } from "@reach/router";

import Home from "./pages/Home";
import Phase1 from "./pages/Phase1";

function App() {
  return (
    <div className="container">
      <Router>
        <Home path="/" />
        <Phase1 path="/phase1" />
      </Router>
    </div>
  );
}

export default App;
