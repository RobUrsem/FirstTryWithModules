import React from "react";
import CaseHierarchy from "../components/CaseHierarchy";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";

function Home() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Item>
            <h2>Case structure</h2>
            <CaseHierarchy />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <h2>Actions</h2>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              <Button>New</Button>
              <Button>Import</Button>
              <Button>Branch</Button>
              <Button>Delete</Button>
              <Button>Compare</Button>
            </ButtonGroup>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
