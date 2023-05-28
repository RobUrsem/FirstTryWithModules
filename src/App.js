import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProjectTimeline from "./pages/Timeline";
import Builder from "./pages/Builder";
import Results from "./pages/Results";
import Launcher from "./pages/Launcher";
import DataSources from "./pages/Datasources";
import Map from "./pages/Map";
import NoPage from "./pages/NoPage";
import "./styles.css";

export const UserContext = React.createContext(null);

export default function App() {
  const [open, setOpen] = React.useState(null);

  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
      />
      <UserContext.Provider value={{ open: open, setOpen: setOpen }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="map" element={<Map />} />
            <Route path="datasources" element={<DataSources />} />
            <Route path="timeline" element={<ProjectTimeline />} />
            <Route path="builder" element={<Builder />} />
            <Route path="results" element={<Results />} />
            <Route path="launcher" element={<Launcher />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
