import { PhotoData } from "../model/PhotoData";
import { PrivacyData } from "../model/PrivacyData";
import { TravelData } from "../model/TravelData";
import { TravelStageData } from "../model/TravelStageData";
import homeImage2 from "../images/homeImage2.jpg";
const ExamplePhotos: PhotoData[] = [
  {
    id: 0,
    stageId: 0,
    desription: "Beach",
    date: new Date(),
    photoData: homeImage2,
    privacy: PrivacyData.Private,
  },
];

const ExampleStages: TravelStageData[] = [
  {
    id: 0,
    description: "Arrival",
    travelID: 0,
    photos: ExamplePhotos,
  },
];

const ExampleTravels: TravelData[] = [
  {
    id: 0,
    location: "Cartagena, Colombia",
    description: "Summer holiday 2023",
    date: new Date(),
    stages: ExampleStages,
  },
];

export default ExampleTravels;