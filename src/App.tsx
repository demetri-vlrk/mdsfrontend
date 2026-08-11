import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CampaignDetail } from "./pages/CampaignDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/campaigns/op-1" element={<CampaignDetail />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
