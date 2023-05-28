import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Background,
  BackgroundVariant,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  SelectionMode
} from "reactflow";

import Box from "@mui/material/Box";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "A",
    type: "group",
    position: { x: 0, y: 0 },
    style: {
      width: 170,
      height: 140
    }
  },
  {
    id: "A-1",
    type: "input",
    data: { label: "RESCUE Import" },
    position: { x: 10, y: 10 },
    parentNode: "A",
    extent: "parent"
  },
  {
    id: "A-2",
    data: { label: "C.R.A.S.P." },
    position: { x: 10, y: 90 },
    parentNode: "A",
    extent: "parent"
  },
  {
    id: "B",
    type: "output",
    position: { x: -100, y: 200 },
    data: null,
    style: {
      width: 170,
      height: 170,
      backgroundColor: "rgba(140,240,240,0.5)"
    }
  },
  {
    id: "B-1",
    data: { label: "Fluid A" },
    position: { x: 50, y: 10 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60
    }
  },
  {
    id: "B-2",
    data: { label: "RFD 1" },
    position: { x: 10, y: 90 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60
    }
  },
  {
    id: "B-3",
    data: { label: "RFD 2" },
    position: { x: 100, y: 90 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60
    }
  },
  {
    id: "C",
    type: "output",
    position: { x: 100, y: 200 },
    data: { label: "Wells" }
  }
];

const initialEdges = [
  { id: "a1-a2", source: "A-1", target: "A-2" },
  { id: "a2-b", source: "A-2", target: "B" },
  { id: "a2-c", source: "A-2", target: "C" },
  { id: "b1-b2", source: "B-1", target: "B-2" },
  { id: "b1-b3", source: "B-1", target: "B-3" }
];

const rfStyle = {
  backgroundColor: "#fff0"
};

export default function Builder() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <>
      <h1>Case Building</h1>
      <Box sx={{ width: "100%", height: "80%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          style={rfStyle}
          attributionPosition="top-right"
          panOnScroll
          selectionOnDrag
          selectionMode={SelectionMode.Partial}
        >
          <MiniMap />
          <Background
            id="1"
            gap={10}
            color="#ddd"
            variant={BackgroundVariant.Lines}
          />
          <Background
            id="2"
            gap={100}
            offset={1}
            color="#bbb"
            variant={BackgroundVariant.Lines}
          />
        </ReactFlow>
      </Box>
    </>
  );
}
