import React from "react";
import AnalysisNavbar from "../components/AnalysisBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import { Skeleton } from "@mui/material";
import Plot from "react-plotly.js";
import { cumGas } from "../assets/cumGas.js";

var data = [cumGas];

function Results() {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "-1em"
        }}
      >
        <AnalysisNavbar selected={selected} onSelect={setSelected} />
        <Box
          component="nav"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            flexGrow: 1,
            width: "100%%",
            height: "100vh",
            overflow: "auto",
            padding: "1em"
          }}
        >
          <h1>Analyze a case</h1>
          <p>Selected plot: {selected}</p>
          <Grid container spacing={2}>
            <Item>
              <Plot
                data={data}
                layout={{
                  width: 618,
                  height: 200,
                  title: "A Fancy Plot",
                  margin: {
                    b: 20,
                    t: 30,
                    l: 50,
                    r: 10
                  }
                }}
              />
            </Item>
            <Item>
              <Skeleton variant="rounded" width="300px" height="200px" />
            </Item>
            <Item>
              <Skeleton variant="rounded" width="300px" height="200px" />
            </Item>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Results;
