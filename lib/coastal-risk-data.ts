export type RiskLevel = "High" | "Medium" | "Watch";

export type CoastalLocation = {
  name: string;
  lat: number;
  lng: number;
  level: RiskLevel;
  issue: string;
  detail: string;
};

export const coastalRiskLocations: CoastalLocation[] = [
  {
    name: "Vunidogoloa",
    lat: -16.816,
    lng: 179.721,
    level: "High",
    issue: "Relocation after repeated flooding and saltwater intrusion",
    detail:
      "Used as a high-risk case study because it is frequently referenced in Fiji climate relocation research.",
  },
  {
    name: "Narikoso",
    lat: -19.101,
    lng: 178.12,
    level: "High",
    issue: "Coastal erosion and adaptation pressure",
    detail:
      "Represents villages facing hard tradeoffs between staying in place and retreating inland.",
  },
  {
    name: "Denimanu",
    lat: -16.894,
    lng: 178.972,
    level: "Medium",
    issue: "Exposure to coastal hazards and resilience needs",
    detail:
      "Included as a community associated with relocation and adaptation planning discussions.",
  },
  {
    name: "Suva–Nausori Corridor",
    lat: -18.141,
    lng: 178.441,
    level: "Watch",
    issue: "Flood exposure and infrastructure sensitivity",
    detail:
      "Shown as a broader urban watch zone rather than a single-village case.",
  },
  {
    name: "Lautoka Coast",
    lat: -17.606,
    lng: 177.447,
    level: "Watch",
    issue: "Coastal exposure and resilience planning needs",
    detail:
      "Represents western coastal population and infrastructure risk in a simplified educational view.",
  },
  {
    name: "Kadavu Coastal Belt",
    lat: -19.054,
    lng: 178.157,
    level: "Medium",
    issue: "Village-level erosion, isolation, and adaptation stress",
    detail:
      "Shown as a broader island cluster because the site is a public-facing prototype, not an official hazard model.",
  },
];

export function riskColor(level: RiskLevel): string {
  if (level === "High") return "#ff8e79";
  if (level === "Medium") return "#ffd27b";
  return "#83e3ea";
}
