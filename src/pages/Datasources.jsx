import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true
  },
  {
    field: "location",
    headerName: "Location",
    width: 350,
    editable: true
  }
];

const rows = [
  {
    id: 1,
    name: "Geology",
    location: "https://someurl.com/model/geology/Model-A",
    type: "OSDU - RESQML",
    status: "Active"
  },
  {
    id: 2,
    name: "run1.fhf",
    location: "c:\\users\\me\\downloads\\run1.fhf",
    type: "Field History",
    status: "Active"
  },
  {
    id: 3,
    name: "fluid 1.wpr",
    location: "c:\\users\\me\\downloads\\fluid 1.wpr",
    type: "WinProp File",
    status: "Missing"
  },
  {
    id: 4,
    name: "Bakken",
    type: "Database",
    location: "odbc://bakken-wells",
    status: "Connected"
  },
  {
    id: 5,
    selected: true,
    name: "Daenerys.xlsx",
    type: "Excel File",
    location: "e:\\projects\\bakken\\Daenerys\\Daenerys.xlsx",
    status: "Active"
  }
];

export default function DataSources() {
  return (
    <>
      <h1>Data Sources</h1>
      <p>
        Add data sources to your project through the provided buttons or by
        dropping files or folders on this window.
      </p>
      <ButtonGroup
        orientation="horizontal"
        aria-label="horzontal contained button group"
        variant="text"
      >
        <Button>Add folder</Button>
        <Button>Add file</Button>
        <Button>Connect database</Button>
        <Button>Open URL</Button>
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
      <br />
      <FormControl fullWidth>
        <Typography>Add selected data source to</Typography>
        <Select>
          <MenuItem value="Case A">Case A</MenuItem>
          <MenuItem value="Case B">Case B</MenuItem>
          <MenuItem value="Case C">Case C</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
