import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />,
      <Route path="/about" element={<About />} />,
      <Route path="/contact" element={<Contact />} />,
      
     
    </Routes>
  </BrowserRouter>
);
