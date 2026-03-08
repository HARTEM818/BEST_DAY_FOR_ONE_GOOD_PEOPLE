import "./App.css";
import Layout from "../layout/Layout";

import { Route, Routes } from "react-router-dom";
import Game1 from "../pages/game1/Game1";
import Game2 from "../pages/game2/Game2";
import Game3 from "../pages/game3/Game3";
import Home from "../pages/Home";
import RequairGames from "../hoc/RequairGames";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
          <Route
            path="/game3"
            element={
              <RequairGames>
                <Game3 />
              </RequairGames>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
