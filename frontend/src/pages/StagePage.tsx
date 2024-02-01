import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTravelsContext } from "../context/TravelsContext";
import { TravelData } from "../model/TravelData";
import { FormatDate } from "../helpers/helpers";
import StagesDisplay from "../components/travels-page/StagesDisplay";
import { StageData } from "../model/StageData";
import { motion } from "framer-motion";
import TravelMap from "../components/travels-page/TravelMap";
import BackButton from "../components/general-purpose/BackButton";
import CustomButton from "../components/general-purpose/CustomButton";
import NewTravelPage from "./NewTravelPage";
import StagePhotosDisplay from "../components/travels-page/StagePhotosDisplay";
import { PhotoData } from "../model/PhotoData";

function StagePage() {
  const { id } = useParams();
  const { GetTravelByStageID } = useTravelsContext();
  const navigate = useNavigate();
  const [stageData, setStageData] = useState<StageData | undefined>();
  const [parentTravel, setParentTravel] = useState<TravelData | undefined>();

  const [deleteWindow, setDeleteWindow] = useState(false);
  const [editWindow, setEditWindow] = useState(false);

  useEffect(() => {
    const travel = GetTravelByStageID(Number(id));
    if (travel === undefined) {
      navigate("/travels");
    } else {
      const stage = travel.stages.find((stage) => stage.id === Number(id));
      if (stage === undefined) {
        navigate("/travels");
      } else {
        setStageData(stage);
        setParentTravel(travel);
      }
    }
  }, [id, navigate]);

  const editStageData = (newData: StageData) => {
    //setTravelData(newData);
    setEditWindow(false);
  };

  if (stageData === undefined || parentTravel === undefined) {
    return <p>Stage data is not available</p>;
  }
  return (
    <>
      {!editWindow ? (
        <div className="relative mt-20 flex flex-col items-center bg-background-50 w-[90%] mx-auto p-2 gap-8">
          <h1 className="text-3xl text-background-300">
            Stage of travel: <b>{parentTravel.location}</b>
          </h1>
          <BackButton navigateTo={`/travel/${parentTravel.id}`} />
          <div className="absolute top-5 right-5 flex flex-col items-end gap-1">
            <CustomButton
              variant={"edit"}
              onClick={() => {
                setEditWindow(true);
              }}
            ></CustomButton>
            <CustomButton
              variant={"delete"}
              onClick={() => {
                setDeleteWindow(true);
              }}
            ></CustomButton>
          </div>
          {deleteWindow && (
            <div className="fixed z-10 inset-0 flex items-center justify-center">
              <div
                className="fixed inset-0 z-50 bg-black/50"
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteWindow(false);
                }}
              ></div>
              <div className="bg-primary-50 py-10 px-10 text-4xl flex flex-col items-center justify-center rounded-md z-50">
                <p>Do you want to delete this travel?</p>
                <p className="text-base">(This action cannot be reversed)</p>
                <div className="mt-2 flex w-full items-center justify-around">
                  <CustomButton
                    className="bg-red-400 hover:bg-red-500 w-60"
                    onClick={() => {
                      //DeleteTravel(travelData.id as number);
                      navigate("/travels");
                    }}
                  >
                    Yes
                  </CustomButton>
                  <CustomButton
                    variant={"actionDark"}
                    className="w-60"
                    onClick={() => {
                      setDeleteWindow(false);
                    }}
                  >
                    No
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center w-fit mx-auto gap-8">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl">{stageData?.location}</h1>
              <h2 className="text-4xl font-thin">
                {FormatDate(stageData?.date)}
              </h2>
              <p className="text-2xl ">{stageData?.description}</p>
            </div>
            {stageData !== undefined && (
              <TravelMap
                lat={stageData?.lat as number}
                lng={stageData?.lng as number}
              />
            )}
          </div>
          {
            <div className="flex flex-col items-center bg-background-100 rounded-lg pt-3 text-background-600 font-bold w-5/6 mx-auto">
              <div className="text-3xl uppercase">photos:</div>
              <StagePhotosDisplay photos={stageData?.photos as PhotoData[]} />
            </div>
          }
        </div>
      ) : (
        <NewTravelPage
          editPage={{
            travelData: parentTravel,
            setTravelData: setParentTravel,
            cancelEditing: () => {
              setEditWindow(false);
            },
          }}
        />
      )}
    </>
  );
}

export default StagePage;
