import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Routes from "./routes";
import NavBar from "./components/organisms/NavBar";
import classesNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    padding: theme.spacing(10, 0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classesNames(classes.root)}>
      <Router>
        <div style={{ display: "flex" }}>
          <NavBar open={open} setOpen={setOpen} />
          <main className={classesNames(classes.content, classes.contentShift)}>
            <div
              className={classesNames(
                classes.drawerHeader,
                classes.contentShift
              )}
            >
              <Routes />
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
