import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

export default function CustomizedTreeView({ selected, onSelect }) {
  const [expanded, setExpanded] = React.useState([]);
  // const [ selected, setSelected ] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    onSelect(nodeIds);
    console.log("handleSelect", nodeIds);
  };

  return (
    <TreeView
      aria-label="controlled"
      defaultExpanded={["production-plot", "3d"]}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="plots" label="Plot Library">
        <TreeItem
          nodeId="production-plot"
          label="Production"
          component={Link}
          to="production"
        />
        <TreeItem
          nodeId="pressure-plot"
          label="Pressure"
          component={Link}
          to="pressure"
        />
      </TreeItem>
      <TreeItem nodeId="3d" label="Spatial Analysis">
        <TreeItem nodeId="3d-view" label="3D" />
        <TreeItem nodeId="ij-view" label="Aerial" />
        <TreeItem nodeId="ik-view" label="I-K" />
        <TreeItem nodeId="jk-view" label="J-K" />
      </TreeItem>
    </TreeView>
  );
}
