import React, { useState } from "react";
import { PhotoData } from "../../model/PhotoData";
import homeImage1 from "../../images/homeImage1.jpg";
import homeImage2 from "../../images/homeImage2.jpg";
import ExampleTravels from "../../examples/ExampleTravels";
import { TiLocation } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { motion } from "framer-motion";
import { useUserContext } from "../../context/UserContext";
interface MemoryCardProps {
  data: PhotoData;
}
function MemoryCard({ data }: MemoryCardProps) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { isLoggedIn } = useUserContext();
  return (
    <motion.button className="max-w-[20rem] p-4 h-fit shadow-md bg-background-50 flex flex-col"
    whileHover={{scale:1.008}}
    transition={{type:"spring", duration: 0.2}}>
      <img
        src={data.id === 0 ? homeImage1 : homeImage2}
        alt={"beach"}
        className="object-cover aspect-square w-full"
      />
      <div className="flex items-center text-4xl">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.01 }}
          onClick={() => {
            if (!isLoggedIn) return;
            if (liked) {
              setLikes((prev) => prev - 1);
              setLiked(false);
            } else {
              setLikes((prev) => prev + 1);
              setLiked(true);
            }
          }}
        >
          {liked ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </motion.button>
        <p>{likes}</p>
      </div>

      <div className="flex items-center text-center text-lg font-bold truncate">
        <TiLocation />
        <h1>
          {data.id === 0
            ? ExampleTravels[0].location
            : ExampleTravels[1].location}
        </h1>
      </div>
    </motion.button>
  );
}

export default MemoryCard;