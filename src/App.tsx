import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { CampaignDetail } from "./pages/CampaignDetail";
import { AllImages } from "./pages/AllImages";
import { BrandDna } from "./pages/BrandDna";
import { NewCampaign } from "./pages/NewCampaign";
import { NewCampaignStep1 } from "./pages/NewCampaignStep1";
import { NewCampaignStep2 } from "./pages/NewCampaignStep2";
import { NewCampaignStep3 } from "./pages/NewCampaignStep3";
import { NewCampaignAnalyzing } from "./pages/NewCampaignAnalyzing";
import { CampaignResults } from "./pages/CampaignResults";
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
        <Route path="/new-campaign" element={<NewCampaign />} />
        <Route path="/new-campaign/step-1" element={<NewCampaignStep1 />} />
        <Route path="/new-campaign/step-2" element={<NewCampaignStep2 />} />
        <Route path="/new-campaign/step-3" element={<NewCampaignStep3 />} />
        <Route path="/new-campaign/analyzing" element={<NewCampaignAnalyzing />} />
        <Route path="/new-campaign/results" element={<CampaignResults />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
