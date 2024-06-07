import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const UpdateMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 13);
  return null;
};

export const InteractiveMap = ({ location }) => {
  const [coords, setCoords] = useState([51.505, -0.09]);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
        const data = await response.json();
        if (data.length > 0) {
          setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };
    fetchCoords();
  }, [location]);

  return (
    <div className="mt-4 h-96">
      <MapContainer center={coords} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coords}>
          <Popup>{location}</Popup>
        </Marker>
        <UpdateMapView coords={coords} />
      </MapContainer>
    </div>
  );
};
