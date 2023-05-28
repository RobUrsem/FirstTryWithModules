import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import CustomizedTreeView from "../components/PlotLibrary";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    width: "12em",
    whiteSpace: "nowrap",
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

function AnalysisNavbar({ selected, onSelect }) {
  return (
    <>
      <Drawer
        variant="permanent"
        open={true}
        PaperProps={{
          sx: {
            backgroundColor: "lightgrey",
            color: "black"
          }
        }}
      >
        <CustomizedTreeView selected={selected} onSelect={onSelect} />
      </Drawer>
    </>
  );
}

export default AnalysisNavbar;
