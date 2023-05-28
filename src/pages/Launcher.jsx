import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "projectName",
    headerName: "Project name",
    width: 150,
    editable: true
  },
  {
    field: "jobName",
    headerName: "Job name",
    width: 150,
    editable: true
  },
  {
    field: "priority",
    headerName: "priority",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 160
  }
];

const rows = [
  {
    id: 1,
    projectName: "Snow",
    jobName: "Jon",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 2,
    projectName: "Lannister",
    jobName: "Cersei",
    priority: "High",
    status: "Running"
  },
  {
    id: 3,
    projectName: "Lannister",
    jobName: "Jaime",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 4,
    projectName: "Stark",
    jobName: "Arya",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 5,
    projectName: "Targaryen",
    jobName: "Daenerys",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 6,
    projectName: "Melisandre",
    jobName: null,
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 7,
    projectName: "Clifford",
    jobName: "Ferrara",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 8,
    projectName: "Frances",
    jobName: "Rossini",
    priority: "Normal",
    status: "Completed"
  },
  {
    id: 9,
    projectName: "Roxie",
    jobName: "Harvey",
    priority: "Normal",
    status: "Completed"
  }
];

export default function Launcher() {
  return (
    <>
      <h1>Job list</h1>
      <ButtonGroup
        orientation="horizontal"
        aria-label="horzontal contained button group"
        variant="text"
      >
        <Button>Run immediately</Button>
        <Button>Schedule</Button>
        <Button>Stop</Button>
      </ButtonGroup>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          size="small"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
