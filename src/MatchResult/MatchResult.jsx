import MatchResultDetails from './MatchResultDetails';
import { useQuery } from '@tanstack/react-query';

const MatchResult = () => {

    const {refetch, data: result = []} = useQuery({
        queryKey:[ 'result' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/result')
            return res.json()
        }

    })

  
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