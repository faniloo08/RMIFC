// components/GoogleMap.tsx
import React , { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle: React.CSSProperties = {
  width: '500px',
  height: '300px',
};

const center = {
    lat: -18.8792,
    lng: 47.5079,
};

const markerPosition = {
    lat: -18.8792,
    lng: 47.5079,
};

const GoogleMapComponent: React.FC = () => {
    
  return (
    <LoadScript googleMapsApiKey="AIzaSyDfKeCxW-YlqnoCM6S1mkCCak9pdMjJZAc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Ajoutez ici des composants enfants, comme des marqueurs */}
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
