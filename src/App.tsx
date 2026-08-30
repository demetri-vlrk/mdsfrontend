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
import { NewCampaignStepLayout } from "./components/newcampaign/NewCampaignStepLayout";
import { NewCampaignAnalyzing } from "./pages/NewCampaignAnalyzing";
import { CampaignResults } from "./pages/CampaignResults";
import { SiteMap } from "./pages/SiteMap";
import { Components } from "./pages/Components";
import { ComponentsButtons } from "./pages/ComponentsButtons";
import { ComponentsInputs } from "./pages/ComponentsInputs";
import { ComponentsIcons } from "./pages/ComponentsIcons";
import { ComponentsAvatars } from "./pages/ComponentsAvatars";
import { ComponentsTopNav } from "./pages/ComponentsTopNav";
import { ComponentsDialog } from "./pages/ComponentsDialog";
import { ComponentsLogo } from "./pages/ComponentsLogo";
import { ComponentsBadge } from "./pages/ComponentsBadge";
import { ComponentsCheckbox } from "./pages/ComponentsCheckbox";
import { ComponentsCarousel } from "./pages/ComponentsCarousel";
import { ComponentsAlert } from "./pages/ComponentsAlert";
import { ComponentsContainer } from "./pages/ComponentsContainer";
import { ComponentsCard } from "./pages/ComponentsCard";
import { ComponentsSidebar } from "./pages/ComponentsSidebar";
import { ComponentsHeader } from "./pages/ComponentsHeader";
import { ComponentsTable } from "./pages/ComponentsTable";
import { ComponentsSwitch } from "./pages/ComponentsSwitch";
import { ComponentsTooltip } from "./pages/ComponentsTooltip";
import { ComponentsSlider } from "./pages/ComponentsSlider";
import { ComponentsProgress } from "./pages/ComponentsProgress";
import { ComponentsPagination } from "./pages/ComponentsPagination";
import { ComponentsRadio } from "./pages/ComponentsRadio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/campaigns/op-1" element={<CampaignDetail />} />
        <Route path="/campaigns/op-1/images" element={<AllImages />} />
        <Route path="/campaigns/op-1/brand-dna" element={<BrandDna />} />
        <Route path="/new-campaign" element={<NewCampaign />} />
        <Route element={<NewCampaignStepLayout />}>
          <Route path="/new-campaign/step-1" element={<NewCampaignStep1 />} />
          <Route path="/new-campaign/step-2" element={<NewCampaignStep2 />} />
          <Route path="/new-campaign/step-3" element={<NewCampaignStep3 />} />
        </Route>
        <Route path="/new-campaign/analyzing" element={<NewCampaignAnalyzing />} />
        <Route path="/new-campaign/results" element={<CampaignResults />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/site-map" element={<SiteMap />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/buttons" element={<ComponentsButtons />} />
        <Route path="/components/inputs" element={<ComponentsInputs />} />
        <Route path="/components/icons" element={<ComponentsIcons />} />
        <Route path="/components/avatars" element={<ComponentsAvatars />} />
        <Route path="/components/top-nav" element={<ComponentsTopNav />} />
        <Route path="/components/dialog" element={<ComponentsDialog />} />
        <Route path="/components/logo" element={<ComponentsLogo />} />
        <Route path="/components/badge" element={<ComponentsBadge />} />
        <Route path="/components/checkbox" element={<ComponentsCheckbox />} />
        <Route path="/components/carousel" element={<ComponentsCarousel />} />
        <Route path="/components/alert" element={<ComponentsAlert />} />
        <Route path="/components/container" element={<ComponentsContainer />} />
        <Route path="/components/card" element={<ComponentsCard />} />
        <Route path="/components/sidebar" element={<ComponentsSidebar />} />
        <Route path="/components/header" element={<ComponentsHeader />} />
        <Route path="/components/table" element={<ComponentsTable />} />
        <Route path="/components/switch" element={<ComponentsSwitch />} />
        <Route path="/components/tooltip" element={<ComponentsTooltip />} />
        <Route path="/components/slider" element={<ComponentsSlider />} />
        <Route path="/components/progress" element={<ComponentsProgress />} />
        <Route path="/components/pagination" element={<ComponentsPagination />} />
        <Route path="/components/radio" element={<ComponentsRadio />} />
      </Routes>
    </>
  );
}

export default App;
