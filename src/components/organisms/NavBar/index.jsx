import * as React from "react";
import { NavLink } from "react-router-dom";
import classesNames from "classnames";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import UserIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import Menu from "@material-ui/icons/MenuSharp";
import CartIcon from "@material-ui/icons/ShoppingCartSharp";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftSharp";
import ChevronRightIcon from "@material-ui/icons/ChevronRightSharp";

const drawerWidth = "250px";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
}));

function NavBar({ open, setOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        position="fixed"
        className={classesNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classesNames(
              classes.menuButton,
              open ? classes.hide : null
            )}
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" noWrap>
            E-pic
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classesNames(classes.drawer, !open ? classes.hide : null)}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <NavLink to="/">
            <ListItemText primary="E-pics" />
          </NavLink>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classesNames(classes.drawer, classes.content)}>
          <NavLink to="/cart">
            <ListItem>
              <ListItemIcon>
                <CartIcon />
              </ListItemIcon>
              <ListItemText primary={"Cart"} />
            </ListItem>
          </NavLink>
          <NavLink to="/profile">
            <ListItem>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
