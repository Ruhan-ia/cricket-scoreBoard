import React from "react";

const NewsCard = ({ Ns }) => {
  const { imageUrl,  description, date, title } = Ns;
  return (
    <div>
      <div className="flex items-center w-[80%] mx-auto gap-5">
     <div>
     <div className="avatar">
        <div className="w-24 lg:w-60 mask mask-squircle">
          <img src={imageUrl} />
        </div>
      </div> 
     </div>
      
     <div className="py-10">
     <p className="font-semibold text-lg lg:font-bold lg:text-2xl ">{title}</p>
     <p className="text-sm  lg:font-semibold lg:text-lg">{date}</p>
     
     <p>{description}</p>
     </div>
      </div>
    </div>
  );
};

export default NewsCard;
