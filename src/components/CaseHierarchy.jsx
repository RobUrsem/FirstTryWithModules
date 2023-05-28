import Plot from "react-plotly.js";

const data = [
  {
    type: "sunburst",
    labels: [
      "Base Case",
      "FinalHM_PadA",
      "Rev1",
      "Rev1a",
      "Rev1b",
      "Forecast_BD",
      "Scenario1",
      "Scenario1a",
      "Scenario2",
      "Forecast_SBPRD",
      "1",
      "2",
      "2a",
      "2a_temp",
      "Forecast_SQ",
      "Forecast_SQ - Copy"
    ],
    parents: [
      "",
      "Base Case",
      "FinalHM_PadA",
      "Rev1",
      "Rev1",
      "Base Case",
      "Forecast_BD",
      "Scenario1",
      "Forecast_BD",
      "Base Case",
      "Forecast_SBPRD",
      "Forecast_SBPRD",
      "Forecast_SBPRD",
      "2a",
      "Base Case",
      "Forecast_SQ"
    ],
    hovertext: [
      "None",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine"
    ],
    values: [8, 2, 2, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
    leaf: { opacity: 0.4 },
    marker: { line: { width: 2 } },
    branchvalues: "total"
  }
];

const layout = {
  margin: { l: 0, r: 0, b: 0, t: 0 },
  paper_bgcolor: "#f5f5f5"
};

const config = {
  modeBarButtonsToRemove: ["toImage"],
  displaylogo: false
};

function CaseHierarchy() {
  return (
    <>
      <Plot data={data} layout={layout} config={config} />
    </>
  );
}

export default CaseHierarchy;
