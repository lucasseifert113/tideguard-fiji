"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { coastalRiskLocations, riskColor } from "../lib/coastal-risk-data";

export default function LeafletMap() {
  return (
    <div>
      <div className="map-wrap">
        <MapContainer
          center={[-17.8, 178.1]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "560px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coastalRiskLocations.map((location) => (
            <CircleMarker
              key={location.name}
              center={[location.lat, location.lng]}
              radius={11}
              pathOptions={{
                color: "#ffffff",
                weight: 1,
                fillColor: riskColor(location.level),
                fillOpacity: 0.9,
              }}
            >
              <Popup>
                <div style={{ minWidth: 220 }}>
                  <strong>{location.name}</strong>
                  <div style={{ marginTop: 8 }}>
                    <strong>Risk level:</strong> {location.level}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <strong>Main issue:</strong> {location.issue}
                  </div>
                  <div style={{ marginTop: 8 }}>{location.detail}</div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="legend">
        <div className="legend-chip">
          <span className="legend-dot legend-dot--high" />
          High concern
        </div>
        <div className="legend-chip">
          <span className="legend-dot legend-dot--medium" />
          Medium concern
        </div>
        <div className="legend-chip">
          <span className="legend-dot legend-dot--watch" />
          Watch zone
        </div>
      </div>
    </div>
  );
}
