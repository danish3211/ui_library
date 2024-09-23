"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import axios from "axios";

interface SearchBoxProps {
  onSearch: (coords: [number, number]) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
      );

      if (response.data.length > 0) {
        const location = response.data[0];
        const lat = parseFloat(location.lat);
        const lon = parseFloat(location.lon);
        onSearch([lat, lon]); // Pass coordinates back to the parent component
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
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
};

// Custom hook to update the map view
const ChangeMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap(); // Access the map instance
  map.setView(coords, 12); // Update the map center and zoom level
  return null;
};

const LeafletMap = () => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([51.505, -0.09]);

  const handleSearch = (coords: [number, number]) => {
    setMapCenter(coords); // Set the new map center when a location is searched
  };

  return (
    <div>
      {/* Search Input */}
      <SearchBox onSearch={handleSearch} />

      {/* Map Section */}
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter}>
          <Popup>Location found!</Popup>
        </Marker>

        {/* Change the map view when a search happens */}
        <ChangeMapView coords={mapCenter} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
