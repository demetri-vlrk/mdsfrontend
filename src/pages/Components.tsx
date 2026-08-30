import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

const CATEGORIES = [
  { label: "Buttons", path: "/components/buttons" },
  { label: "Inputs", path: "/components/inputs" },
  { label: "Icons", path: "/components/icons" },
  { label: "Avatars", path: "/components/avatars" },
  { label: "Top Nav", path: "/components/top-nav" },
  { label: "Dialog", path: "/components/dialog" },
  { label: "Logo", path: "/components/logo" },
  { label: "Badge", path: "/components/badge" },
  { label: "Checkbox", path: "/components/checkbox" },
  { label: "Carousel", path: "/components/carousel" },
  { label: "Alert", path: "/components/alert" },
  { label: "Container", path: "/components/container" },
  { label: "Card", path: "/components/card" },
  { label: "Sidebar", path: "/components/sidebar" },
  { label: "Header", path: "/components/header" },
  { label: "Table", path: "/components/table" },
  { label: "Switch", path: "/components/switch" },
  { label: "Tooltip", path: "/components/tooltip" },
  { label: "Slider", path: "/components/slider" },
  { label: "Progress", path: "/components/progress" },
  { label: "Pagination", path: "/components/pagination" },
  { label: "Radio", path: "/components/radio" },
];

export function Components() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">
          Components
        </h1>
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map((category) => (
            <Button
              key={category.path}
              variant="primary"
              size="lg"
              onClick={() => navigate(category.path)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
