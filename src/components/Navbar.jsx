import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/History";
import BuilderIcon from "@mui/icons-material/Hardware";
import ResultsIcon from "@mui/icons-material/MultilineChart";
import LauncherIcon from "@mui/icons-material/RocketLaunch";
import DataSourcesIcon from "@mui/icons-material/Storage";
import MapIcon from "@mui/icons-material/Map";
import Logo from "../assets/peacock-logo.png";
import CMGLogo from "../components/CMGLogo";
import { UserContext } from "../App";

export const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

function Navbar() {
  const { open, setOpen } = React.useContext(UserContext);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "lightgrey",
            color: "black"
          }
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/map">
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItemButton>
          <ListItemButton component={Link} to="/datasources">
            <ListItemIcon>
              <DataSourcesIcon />
            </ListItemIcon>
            <ListItemText primary="DataSources" />
          </ListItemButton>
          <ListItemButton component={Link} to="/timeline">
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Timeline" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListItemButton component={Link} to="/builder">
            <ListItemIcon>
              <BuilderIcon />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </ListItemButton>
          <ListItemButton component={Link} to="/results">
            <ListItemIcon>
              <ResultsIcon />
            </ListItemIcon>
            <ListItemText primary="Analyze" />
          </ListItemButton>
          <ListItemButton component={Link} to="/launcher">
            <ListItemIcon>
              <LauncherIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </List>
        <CMGLogo />
      </Drawer>
    </>
  );
}

export default Navbar;
