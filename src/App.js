import "./App.css";
import CertificateGenerator from "./components/CertificateGenerator";
import Authentication from "./components/Authentication";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <CertificateGenerator /> */}
      {/* <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/certificate" element={<CertificateGenerator />} />
          </Routes>
        </div>
      </Router> */}
      <CertificateGenerator />
    </div>
  );
}

export default App;
