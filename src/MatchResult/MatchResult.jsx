import MatchResultDetails from './MatchResultDetails';
import { useQuery } from '@tanstack/react-query';

const MatchResult = () => {

    const { data: result = []} = useQuery({
        queryKey:[ 'result' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/result')
            return res.json()
        }

    })

  
    return (
        <div className='mt-10'>
                        <h1 className='font-bold text-xl text-center pb-20'> Match Results</h1>

            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center w-auto'>

            
            {
                result.map(rs=> <MatchResultDetails key={rs.id} Rs={rs}></MatchResultDetails>)
            }
           </div>
        </div>
    );
};

export default MatchResult;