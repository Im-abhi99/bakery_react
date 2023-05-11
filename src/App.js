
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
  <>
  <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
   </Routes>
 
  </>
  );
}

export default App;
