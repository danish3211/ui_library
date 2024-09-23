import React from "react";
import TabSwitcher from "../components/TabSwitcher";
import dynamic from "next/dynamic";
const DynamicLeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});
const ExampleComponent = () => {
  return (
    <div>
      <DynamicLeafletMap />
    </div>
  );
};

const codeExample = `"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import axios from "axios";
import L from "leaflet";

const locationIcon = L.icon({
  iconUrl: "/location-pin.png", 
  iconSize: [40, 40], 
  iconAnchor: [22, 38],
  popupAnchor: [0, -40],
});

interface SearchBoxProps {
  onSearch: (coords: [number, number]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  
   const handleSearch = async () => {
    if (!query) return;

      try {
      const response = await axios.get(
        https://nominatim.openstreetmap.org/search?q=(dollarsign){query}&format=json&limit=1 //add a backtik around 
      );

      
      if (response.data.length > 0) {
        const location = response.data[0];
        const lat = parseFloat(location.lat);
        const lon = parseFloat(location.lon);
        onSearch([lat, lon]);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location", error);
      alert("There was an error with the search. Please try again.");
    }
  };

   return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search location"
        className="p-2 border text-black"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white"
      >
        Search
      </button>
    </div>
  );
};

const ChangeMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  map.setView(coords, 12);
  return null;
};

const LeafletMap = () => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([51.505, -0.09]); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
        },
        (error) => {
          console.error("Error retrieving location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearch = (coords: [number, number]) => {
    setMapCenter(coords);
  };

  const SetMapView = ({ coords }: { coords: [number, number] }) => {
    const map = useMap();
    map.setView(coords, 13);
    return null;
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />

      <MapContainer center={mapCenter} zoom={13} style={{ height: "74vh", width: "100%" }}>
        <SetMapView coords={mapCenter} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter} icon={locationIcon}>
          <Popup>Your location</Popup>
        </Marker>

        <ChangeMapView coords={mapCenter} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

  `;
const Map = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6">
          Custom Tab Switcher with Preview and Code
        </h1>
        <TabSwitcher
          language="typescript"
          codeString={codeExample}
          previewComponent={<ExampleComponent />}
        />
      </div>
    </div>
  );
};

export default Map;
