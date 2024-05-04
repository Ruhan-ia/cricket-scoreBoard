import React from 'react';
import flag1 from '../assets/images/bng.jpg';
import flag2 from '../assets/images/india.png';
import Matches from '../Match/Matches';
import MatchResult from '../MatchResult/MatchResult';
import Lottie from 'react-lottie-player';
import animationData from '../assets/images/Animation - 1714583935237.json'
const CricketScoreBoard = () => {
    return (
        <div className=' bg-slate-300'>
            <div className='bg-green-800 text-center rounded-full p-10 '>
            <h1 className='font-bold text-6xl text center text-white '>Bangladesh <span className='text-red-500 font-thin'>vs</span> India</h1>
            
            <p className='font-semibold text-white p-4'>24 April, 2024</p>
            <p className='font-semibold text-white '>Bangladesh Won By 3 wickets(with 20 balls remaining)</p>

            
            </div>

            <div className='bg-slate-300 mt-5 '>
                <div className='flex items-center  justify-around  '>
                <div>
                        <img className='w-44' src={flag2} alt="flag" />
                        <p className='font-bold text-center pt-3  text-2xl'>265/6</p>
                    </div>
                            <Lottie
                             animationData={animationData}
                             loop
                             play
                             style={{ width: 150, height: 150 }}>

                            </Lottie>
                        <div className='mt-10'>
                        <img  className='w-44' src={flag1} alt="flag" />
                        <p className='font-bold text-center pt-3  text-2xl'>269/7</p><br />
                        <span className='text-xl text-slate-700 font-semibold'>(47.5/50 ov. T:266)</span>
                    </div>
                   
                </div>
            </div>
            <Matches></Matches>
            <MatchResult></MatchResult>
        </div>
    );
};

export default CricketScoreBoard;