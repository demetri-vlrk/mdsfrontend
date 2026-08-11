import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CampaignDetail } from "./pages/CampaignDetail";
import { AllImages } from "./pages/AllImages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/campaigns/op-1" element={<CampaignDetail />} />
      <Route path="/campaigns/op-1/images" element={<AllImages />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
