import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens
import Home from "./views/Home";
import Council from "./views/Council";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/council/:id" element={<Council />} />
      </Routes>
    </Router>
  );
}

export default App;
