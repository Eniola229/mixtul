import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from "../componenets/Firstpage";
import Shop from "./Shop"

export default function Routespages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}