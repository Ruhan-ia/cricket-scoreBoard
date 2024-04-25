import React, { useEffect, useState } from 'react';
import MatchDetails from './MatchDetails';

const Matches = () => {

    const [match, setMatch] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/score')
        .then(res =>res.json())
        .then(data =>{
            setMatch(data)
        })
    }, [])
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-xl text-center pb-20'>Upcoming Matches</h1>
             <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center w-auto'>
            {
                match.map(mt => (<MatchDetails key={mt.id} Mt={mt}></MatchDetails>))
            }
            </div>
        </div>
       
    );
};

export default Matches;