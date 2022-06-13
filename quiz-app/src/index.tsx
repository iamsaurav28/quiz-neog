import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./Styles.css";
import "./Color/tailwind.css";
import App from "./App";

const rootElement = document.getElementById("root");
render( 
  
    <Router>
      <App />
    </Router>,
   
  rootElement
);
