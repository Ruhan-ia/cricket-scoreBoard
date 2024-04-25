import React from 'react';

const MatchResultDetails = ({Rs}) => {

    const {team1, team2, over1, over2, run1, run2, won, image1, image2, venue, date} = Rs
    return (
        <div>
        <div className="bg-white shadow-xl p-10 rounded w-80  ">
  
        <div className='font-bold text-sm text-center'>
              <p>{date}</p>
              
          </div>
          <div>
              <p className="font-thin text-gray-500">{venue}</p>
          </div>
          <div className="flex gap-3 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={image1} />
            </div>
          </div>
  
          
          <h1>{team1} <span  className='font-semibold'>{run1}</span></h1>
          <p>ov.<span className='font-semibold'>{over1}</span></p>
  
        
         </div>
        
        
          <div className="flex gap-3 py-3 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={image2} />
            </div>
          </div>
          <h1>{team2} <span  className='font-semibold'>{run2}</span></h1>
          <p>ov.<span className='font-semibold'>{over2}</span></p>
        
          </div>
  
         
          
          <p className='font-semibold '>{won}</p>
          
        </div>
      </div>
    );
};

export default MatchResultDetails;