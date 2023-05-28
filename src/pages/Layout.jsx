import "../styles.css";

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Appbar from "../components/Appbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

const defaultTheme = createTheme();

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Appbar />
          <Navbar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              padding: "1em"
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
