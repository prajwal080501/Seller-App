import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Page2 from "./pages/Page2";
import Pagination from "./components/Pagination";
import Page3 from "./pages/Page3";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page4 from "./pages/Page4";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
        <Route path="/7" element={<Page7 />} />
        <Route path="/8" element={<Page8 />} />
        <Route path="/9" element={<Page9 />} />
        <Route path="/10" element={<Page10 />} />
      </Routes>
      <Pagination />
    </Router>
  )
}

export default App
