import { Container } from "postcss";
import React from "react";

const MatchDetails = ({ Mt }) => {
  const { id, team1, team2, image1, image2, time, venue, date } = Mt;
  console.log(Mt);
  return (
    <div>
      <div className="bg-white shadow-xl p-10 rounded-xl w-80 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">

        <p className="font-bold text-xl text-center">{date}</p>
        <div className=" p-3 flex items-center justify-between font-semibold text-gray-500">
        <div>
            <p>{venue}</p>
        </div>
        <div>
          <p>{time}</p>
        </div>

        </div>
       
        <div className="flex gap-3 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={image1} />
          </div>
        </div>

        
        <h1>{team1}</h1>

       
       </div>
      
      
        <div className="flex gap-3 py-3 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={image2} />
          </div>
        </div>
        <h1>{team2}</h1>

        
        </div>

       
        
       
        
      </div>
    </div>
  );
};

export default MatchDetails;
