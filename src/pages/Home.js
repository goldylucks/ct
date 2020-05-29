import React from "react";

import { Link } from "@reach/router";

const Home = () => (
  <div>
    <h1>Welcome to Core Transformation's bot!</h1>
    <p>some text about CT's greatness here</p>
    <p>some text about the bot here</p>
    <Link to="/phase1">Let's start!</Link>
  </div>
);

export default Home;
