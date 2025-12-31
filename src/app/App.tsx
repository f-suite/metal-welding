import { BrowserRouter, Routes, Route } from "react-router-dom";
import СваркаМеталла from "../imports/СваркаМеталла-6-292";
import ProizvodstvoMetallokonstrukcij from "./pages/ProizvodstvoMetallokonstrukcij";
import LazernayaRezka from "./pages/LazernayaRezka";
import GibkaMetalla from "./pages/GibkaMetalla";
import "../styles/slider.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full">
        <Routes>
          <Route path="/" element={<СваркаМеталла />} />
          <Route path="/proizvodstvo-metallokonstrukcij" element={<ProizvodstvoMetallokonstrukcij />} />
          <Route path="/lazernaya-rezka" element={<LazernayaRezka />} />
          <Route path="/gibka-metalla" element={<GibkaMetalla />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}