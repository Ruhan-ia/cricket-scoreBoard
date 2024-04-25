import React, { useEffect, useState } from 'react';
import MatchResultDetails from './MatchResultDetails';

const MatchResult = () => {

    const[result, setResult] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/result')
        .then(res=> res.json())
        .then(data=>{
            setResult(data)
        })
    }, [])
    return (
        <div className='mt-10'>
                        <h1 className='font-bold text-xl text-center pb-20'> Match Results</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto justify-items-center gap-20'>

            
            {
                result.map(rs=> <MatchResultDetails key={rs.id} Rs={rs}></MatchResultDetails>)
            }
           </div>
        </div>
    );
};

export default MatchResult;