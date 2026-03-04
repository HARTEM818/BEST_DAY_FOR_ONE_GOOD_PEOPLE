import "./App.css";


import { Route, Routes } from "react-router-dom";
import Game1 from "../pages/Game1";
import Home from "../pages/Home";
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/game1" element={<Game1/>}/>

    </Routes>
      
    
    </>
  );
}
