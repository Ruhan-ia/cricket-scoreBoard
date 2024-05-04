import Lottie from 'react-lottie-player';
import MatchDetails from './MatchDetails';
import { useQuery } from '@tanstack/react-query';
import animationData from '../assets/images/c-2.json'

const Matches = () => {

    const { data: match = []} = useQuery({
        queryKey:[ 'match' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/score')
            return res.json()
        }

    })

   
    return (
        <div className='mt-20'>
            <h1 className='font-bold text-xl text-center pb-5'>Upcoming Matches</h1>
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
                match.map(mt => (<MatchDetails key={mt.id} Mt={mt}></MatchDetails>))
            }
            </div>
        </div>
       
    );


   
};

export default Matches;