import MatchDetails from './MatchDetails';
import { useQuery } from '@tanstack/react-query';

const Matches = () => {

    const {refetch, data: match = []} = useQuery({
        queryKey:[ 'match' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/score')
            return res.json()
        }

    })

   
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