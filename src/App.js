import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
