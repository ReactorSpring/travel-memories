import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (lat: number, lng: number, location: string) => void;
}

function LocationPicker({ setVisible, onSelect }: Props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  const [selectedLocation, setSelectedLocation] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | null
  >();
  const [locationAdress, setLocationAdress] = useState("");

  const [autocomplete, setAutocomplete] = useState<
    google.maps.places.Autocomplete | undefined
  >();
  const [map, setMap] = useState<google.maps.Map>();

  if (!isLoaded) {
    return (
      <div className="z-10 h-[100vh] w-[100vw] fixed left-[50%] translate-x-[-50%] bottom-0 text-5xl text-center">
        Map not available
      </div>
    );
  }

  return (
    <div className="z-10 h-[100vh] w-[100vw] fixed left-[50%] translate-x-[-50%] bottom-0 flex items-center flex-col justify-center">
      <div
        className="fixed inset-0 bg-black/50 -z-10"
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
      ></div>
      <div className="bg-background-50 w-fit p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center justify-center gap-2 w-[30vw]">
              <Autocomplete
                className="w-full"
                onLoad={(e) => {
                  setAutocomplete(e);
                }}
              >
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-gray-300 p-2 rounded-md"
                  id="location"
                  placeholder="Search location"
                  required
                  type="text"
                />
              </Autocomplete>

              <motion.button
                className="text-xl rounded-full bg-background-100 p-2"
                whileHover={{ scale: 1.1 }}
                type="button"
                onClick={() => {
                  if (
                    autocomplete === undefined ||
                    autocomplete.getPlace() === undefined ||
                    autocomplete.getPlace().formatted_address === undefined ||
                    autocomplete.getPlace().geometry === undefined
                  ) {
                    return;
                  }
                  setSelectedLocation(
                    autocomplete.getPlace().geometry?.location as
                      | google.maps.LatLng
                      | google.maps.LatLngLiteral
                  );
                  setLocationAdress(
                    autocomplete.getPlace().formatted_address === undefined
                      ? ""
                      : (autocomplete.getPlace().formatted_address as string)
                  );
                }}
              >
                <IoIosSearch />
              </motion.button>
            </div>
            <div className="flex items-center w-full text-base mt-2 justify-between">
              <p className="overflow-hidden flex-1 whitespace-pre-wrap max-w-lg">
                Selected: <b>{locationAdress}</b>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                className="bg-secondary-300 hover:bg-secondary-400 transition-colors disabled:bg-primary-700 text-lg px-2 rounded-md shadow-mds"
                disabled={selectedLocation === null}
                onClick={() => {
                  if (
                    selectedLocation === null ||
                    selectedLocation === undefined ||
                    locationAdress === ""
                  ) {
                    return;
                  }
                  onSelect(
                    (selectedLocation as google.maps.LatLngLiteral).lat,
                    (selectedLocation as google.maps.LatLngLiteral).lng,
                    locationAdress
                  );
                  setVisible(false);
                }}
              >
                Select
              </motion.button>
            </div>
            {/* Select button panel */}
          </div>
          {/* Map */}
          <div className="w-40 aspect-square shadow-lg border border-primary-900/30">
            <GoogleMap
              center={
                selectedLocation === null || selectedLocation === undefined
                  ? { lat: 50.2888847, lng: 18.677663 }
                  : selectedLocation
              }
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(e) => {
                setMap(e);
              }}
              onUnmount={() => {
                setMap(undefined);
              }}
            >
              {selectedLocation !== null && (
                <MarkerF
                  position={
                    selectedLocation as
                      | google.maps.LatLng
                      | google.maps.LatLngLiteral
                  }
                />
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPicker;
