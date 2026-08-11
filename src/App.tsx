import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CampaignDetail } from "./pages/CampaignDetail";
import { AllImages } from "./pages/AllImages";
import { BrandDna } from "./pages/BrandDna";
import { IconGradientDefs } from "./components/campaign/IconGradientDefs";

function App() {
  return (
    <>
      <IconGradientDefs />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/campaigns/op-1" element={<CampaignDetail />} />
        <Route path="/campaigns/op-1/images" element={<AllImages />} />
        <Route path="/campaigns/op-1/brand-dna" element={<BrandDna />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
