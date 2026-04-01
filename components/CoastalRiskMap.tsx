"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading interactive map...</div>,
});

export default function CoastalRiskMap() {
  return <LeafletMap />;
}
