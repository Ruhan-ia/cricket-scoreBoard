import { Container } from "postcss";
import React from "react";

const MatchDetails = ({ Mt }) => {
  const { id, team1, team2, image1, image2, time, venue, date } = Mt;
  console.log(Mt);
  return (
    <div>
      <div className="bg-white shadow-xl p-10 rounded w-80  ">

       
        <div className="flex gap-3 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={image1} />
          </div>
        </div>

        
        <h1>{team1}</h1>

        <div>
            <p className="font-thin text-gray-500">{venue}</p>
        </div>
       </div>
      
      
        <div className="flex gap-3 py-3 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={image2} />
          </div>
        </div>
        <h1>{team2}</h1>

        <div>
            <p>{date}</p>
            <p>{time}</p>
        </div>
        </div>

       
        
       
        
      </div>
    </div>
  );
};

export default MatchDetails;
