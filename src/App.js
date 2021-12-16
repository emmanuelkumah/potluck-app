import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import MainApp from "./Components/MainApp/MainApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
