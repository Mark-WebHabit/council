import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens
import Home from "./views/Home";
import Council from "./views/Council";
import Auth from "./views/Auth";
import Posts from "./views/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/council/:id" element={<Council />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
