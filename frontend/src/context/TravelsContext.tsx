import React, { ReactNode, createContext, useContext, useState } from "react";
import { TravelData } from "../model/TravelData";
import ExampleTravels from "../examples/ExampleTravels";

interface TravelsContextProviderProps {
  children: ReactNode;
}
interface TravelsContextProps {
  travels: TravelData[];
  GetTravelByStageID: (stageID: number | undefined) => TravelData | undefined;
  AddTravel: (data: TravelData) => void;
}
const TravelsContext = createContext({} as TravelsContextProps);

export function useTravelsContext() {
  return useContext(TravelsContext);
}

export function TravelsContextProvider({
  children,
}: TravelsContextProviderProps) {
  const [travels, setTravels] = useState<TravelData[]>(ExampleTravels);
  const GetTravelByStageID = (stageID: number | undefined) => {
    if (stageID === undefined) return undefined;
    for (const travel of travels) {
      const foundStage = travel.stages.find((stage) => stage.id === stageID);
      if (foundStage) {
        return travel;
      }
    }
    return undefined;
  };
  const AddTravel = (data: TravelData) => {
    setTravels((prev) => [...prev, data]);
  };
  return (
    <TravelsContext.Provider value={{ travels, GetTravelByStageID, AddTravel }}>
      {children}
    </TravelsContext.Provider>
  );
}