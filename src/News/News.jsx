import { useQuery } from '@tanstack/react-query';
import React from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const { data: news = []} = useQuery({
        queryKey:[ 'news' ],
        queryFn:async () =>{
            const res = await fetch('https://cricket-score-board-server.vercel.app/news')
            return res.json()
        }

    })
    return (
        <div className='mt-20'>
            {
                news.map(ns=> <NewsCard key={ns._id} Ns={ns}></NewsCard>)
            }
        </div>
    );
};

export default News;