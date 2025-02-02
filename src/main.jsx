
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= <div>Home</div> />,
      <Route path="/about" element= <div>I am form about page </div> />,
      <Route path="/contact" element= <div>Call me right now </div> />,
    </Routes>
  </BrowserRouter>
);
