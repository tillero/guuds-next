"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 46.947714,
  lng: 7.448031,
};

const containerStyle = {
  width: "100%",
  height: "800px",
};

const Map = ({ children }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={{
        mapId: process.env.NEXT_PUBLIC_MAPS_MAP_ID,
        disableDefaultUI: true,
      }}
    >
      {children}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
