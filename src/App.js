import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import External Page
import Home from "./components/Home";
import Youtube from "./components/RedirectExternal/Youtube";
import Discord from "./components/RedirectExternal/Discord";
import BMC from "./components/RedirectExternal/BMC";
import Tos from "./components/Tos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/buymeacoffee" element={<BMC />} />
        <Route path="/tos" element={<Tos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
