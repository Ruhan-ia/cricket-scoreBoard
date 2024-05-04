import Lottie from 'react-lottie-player';
import MatchResultDetails from './MatchResultDetails';
import { useQuery } from '@tanstack/react-query';
import animationData from  '../assets/images/c-1.json'

const MatchResult = () => {

    const { data: result = []} = useQuery({
        queryKey:[ 'result' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/result')
            return res.json()
        }

    })

  
    return (
        <div className='mt-20'>
                        <h1 className='font-bold text-xl text-center pb-5'> Match Results</h1>
                        <div className='flex justify-center'>
          <Lottie
            play
            animationData={animationData}
            loop
            style={{height:150, width:200,}}
            >

            </Lottie>
          </div>

            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center w-auto'>

            
            {
                result.map(rs=> <MatchResultDetails key={rs.id} Rs={rs}></MatchResultDetails>)
            }
           </div>
        </div>
    );
};

export default MatchResult;