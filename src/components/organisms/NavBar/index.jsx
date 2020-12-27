import * as React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import UserIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import Menu from "@material-ui/icons/MenuSharp";
import CartIcon from "@material-ui/icons/ShoppingCartSharp";

import css from "./style.module.css";

const drawerState = {
  opened: "OPENED",
  hided: "HIDED",
};

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
  },
}));

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (open) => (e) => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift"))
      return;
    setOpen((prevState) => !prevState);
  };

  return (
    <Drawer
      style={{ width: "220px" }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
      onOpen={toggleDrawer(false)}
      onClose={toggleDrawer(true)}
    >
      <List>
        <ListItem>
          <NavLink
            to="/"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ListItemText primary="E-pics" />
            <Menu onClick={toggleDrawer(open)} />
          </NavLink>
        </ListItem>
        <NavLink to="/cart">
          <ListItem>
            <ListItemIcon>
              <CartIcon />
            </ListItemIcon>
            <ListItemText primary={"Cart"} />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

export default NavBar;
