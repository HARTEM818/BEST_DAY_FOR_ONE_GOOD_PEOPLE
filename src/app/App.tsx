import "./App.css";
import Layout from "../layout/Layout";

import { Route, Routes } from "react-router-dom";
import Game1 from "../pages/game1/Game1";
import Home from "../pages/Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/game1" element={<Game1 />} />
        </Route>
      </Routes>
    </>
  );
}
