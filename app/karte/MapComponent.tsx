"use client";

import Map from "./Map";
import { Marker } from "@react-google-maps/api";

interface Store {
  name: string;
  location: string;
  description?: string;
  color?: string;
  category?: string[];
  address?: { street: string; city: string; "post-code": string };
}

const MapComponent = ({ stores }: { stores: Array<Store> }) => {
  return (
    <Map>
      {stores &&
        stores.map((store, i) => {
          const coordinates = JSON.parse(store.location).coordinates;
          return (
            <Marker
              key={i}
              title={store.name}
              position={{ lat: coordinates[1], lng: coordinates[0] }}
              icon="/icons/marker_yellow.svg"
            />
          );
        })}
    </Map>
  );
};

export default MapComponent;
