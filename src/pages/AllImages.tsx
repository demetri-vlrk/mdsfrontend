import { Link } from "react-router-dom";
import { ChevronLeft, ListFilter, MessageSquareText, Plus } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { GalleryImageCard } from "../components/gallery/GalleryImageCard";
import { AddImagesCard } from "../components/gallery/AddImagesCard";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";
import gallery5 from "../assets/gallery-5.png";
import gallery6 from "../assets/gallery-6.png";
import gallery7 from "../assets/gallery-7.png";
import gallery8 from "../assets/gallery-8.png";
import gallery9 from "../assets/gallery-9.png";

const FILTERS = ["Hero image", "Scale reference", "Ingredients", "Tagged"];

export function AllImages() {
  return (
    <div className="min-h-svh bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-start">
          <div className="flex w-full items-start gap-6 px-8 py-10">
            <div className="flex flex-1 flex-col items-start gap-6">
              <Link
                to="/campaigns/op-1"
                className="flex min-h-9 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
                Back to campaign
              </Link>
              <h1 className="text-7xl leading-none font-semibold tracking-[-1.5px] text-foreground">
                All Images
              </h1>
              <div className="flex w-full items-center gap-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="flex min-h-9 items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                  >
                    {filter}
                  </button>
                ))}
                <button
                  type="button"
                  className="flex min-h-9 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <ListFilter className="size-4" />
                  Filter
                </button>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <button
                type="button"
                className="flex min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <MessageSquareText className="size-4" />
                Open Chat
              </button>
              <button
                type="button"
                className="flex min-h-9 items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
              >
                <Plus className="size-4" />
                Upload Image
              </button>
            </div>
          </div>

          <div className="flex w-full items-start">
            <div className="flex flex-1 flex-col items-stretch">
              <GalleryImageCard image={gallery1} label="Hero Image" isHero className="h-[410px]" />
              <GalleryImageCard image={gallery2} label="Hero Image" isHero className="h-[415px]" />
              <GalleryImageCard image={gallery3} label="Hero image" isHero className="h-[550px]" />
            </div>
            <div className="flex flex-1 flex-col items-stretch">
              <GalleryImageCard image={gallery4} label="Scale Reference" className="h-[515px]" />
              <GalleryImageCard image={gallery5} label="Hero image" isHero className="h-[555px]" />
              <GalleryImageCard image={gallery6} label="Hero image" isHero className="h-[555px]" />
              <AddImagesCard className="h-[338px]" />
            </div>
            <div className="flex flex-1 flex-col items-stretch">
              <GalleryImageCard image={gallery7} label="Ingredient" className="h-[559px]" />
              <GalleryImageCard image={gallery8} label="Ingredient" className="h-[559px]" />
              <GalleryImageCard image={gallery9} label="Ingredient" className="h-[559px]" />
            </div>
          </div>
        </main>
        <UtilityRail />
      </div>
    </div>
  );
}
