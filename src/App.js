import React, { useState } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase2";

function App() {
  const [chain, setChain] = useState([]);
  const [responseToBeChanged, setResponseToBeChanged] = useState("");
  return (
    <div className="container">
      <Router>
        <Home path="/" />
        <Phase1
          path="/phase1"
          chain={chain}
          setChain={setChain}
          responseToBeChanged={responseToBeChanged}
          setResponseToBeChanged={setResponseToBeChanged}
        />
        <Phase2
          path="/phase2"
          chain={chain}
          setChain={setChain}
          responseToBeChanged={responseToBeChanged}
        />
      </Router>
    </div>
  );
}

export default App;
