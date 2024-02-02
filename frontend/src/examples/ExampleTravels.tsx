import { PhotoData } from "../model/PhotoData";
import { PrivacyData } from "../model/PrivacyData";
import { TravelData } from "../model/TravelData";
import { StageData } from "../model/StageData";
import homeImage2 from "../images/homeImage2.jpg";
import homeImage1 from "../images/homeImage1.jpg";
import homeImage3 from "../images/homeImage3.jpg";

const LudingtonPhotos: PhotoData[] = [
  {
    id: 0,
    stageId: 1,
    description: "Beach",
    date: new Date(),
    photoData: homeImage2,
    imageSource: homeImage2,
    privacy: PrivacyData.Public,
    likes: ["test1"],
    location: "West side",
    lat: 10.433118,
    lng: -75.534791,
  },
  {
    id: 1,
    stageId: 1,
    description: "Amazing sun",
    date: new Date(),
    photoData: homeImage1,
    imageSource: homeImage1,
    privacy: PrivacyData.Public,
    likes: ["test1", "test2"],
    location: "Amazing beach",
    lat: 10.433118,
    lng: -75.534791,
  },
];
const CartagenaPhotos: PhotoData[] = [
  {
    id: 3,
    stageId: 0,
    description: "Sunny",
    date: new Date(),
    photoData: homeImage3,
    imageSource: homeImage3,
    privacy: PrivacyData.Public,
    likes: ["test1"],
    location: "London eye?",
    lat: 10.433118,
    lng: -75.534791,
  },
];

const CartagenaStages: StageData[] = [
  {
    id: 0,
    description: "Arrival",
    travelID: 0,
    photos: CartagenaPhotos,
    location: "Beach",
    lat: 10.433118,
    lng: -75.534791,
    date: new Date(),
  },
];
const LudingtonStages: StageData[] = [
  {
    id: 1,
    description: "First trip",
    travelID: 1,
    photos: LudingtonPhotos,
    location: "West side",
    lat: 43.966713,
    lng: -86.461251,
    date: new Date(),
  },
];

const ExampleTravels: TravelData[] = [
  {
    id: 0,
    location: "Cartagena, Colombia",
    lat: 10.433118,
    lng: -75.534791,
    description: "Summer holiday 2023!",
    date: new Date(),
    stages: CartagenaStages,
  },
  {
    id: 1,
    location: "Ludington, USA",
    lat: 43.966713,
    lng: -86.461251,
    description: "Breathtaking view.",
    date: new Date(),
    stages: LudingtonStages,
  },
];

export default ExampleTravels;
