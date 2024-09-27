import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DetailPage from "./Components/DetailPage/DetailPage";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
