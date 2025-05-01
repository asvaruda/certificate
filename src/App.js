import "./App.css";
import CertificateGenerator from "./components/CertificateGenerator";
// import Authentication from "./components/Authentication";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HallTicket from "./components/HallTicket";
function App() {
  return (
    <div className="App">
      {/* <CertificateGenerator /> */}
      <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<CertificateGenerator />} />
          <Route path="/certificate" element={<CertificateGenerator />} />
          <Route path="/hallticket" element={<HallTicket />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
