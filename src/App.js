import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import { makeStyles } from "@material-ui/core/styles";

import Routes from "./routes";
import NavBar from "./components/organisms/NavBar";

//const useStyles = makeStyles((theme) => {});

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <NavBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
