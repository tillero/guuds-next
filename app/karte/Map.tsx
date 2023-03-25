"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 46.947714,
  lng: 7.448031,
};

const containerStyle = {
  width: "100%",
  height: "650px",
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
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
      <Marker
        position={{ lat: 46.947714, lng: 7.448031 }}
        icon="/icons/marker_yellow.svg"
      />
      <Marker
        position={{ lat: 46.949714, lng: 7.454031 }}
        icon="/icons/marker_blue.svg"
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
