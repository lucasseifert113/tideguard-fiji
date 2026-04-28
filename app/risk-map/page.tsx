import type { Metadata } from "next";
import RiskMapContent from "./RiskMapContent";

export const metadata: Metadata = {
  title: "Coastal Risk Map",
  description:
    "Interactive map of Fiji's coastal communities and climate risk zones. Explore sea-level rise, flooding, and erosion concerns across different regions.",
};

export default function RiskMapPage() {
  return <RiskMapContent />;
}
