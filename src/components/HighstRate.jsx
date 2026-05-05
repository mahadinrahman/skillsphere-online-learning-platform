import React from 'react';
import HeighstCard from './HeighstCard';

const HighstRate = async() => {
     const res=await fetch('https://skillsphere-online-learning-platfor-topaz.vercel.app/data.json');
     const allData=await res.json();
     const datas=allData.sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <div className='max-w-11/12 mx-auto'>

                <h2 className='text-3xl font-bold text-center mt-15 text-fuchsia-900'>Top Rated Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 mt-13'>
                {
                    datas.map(data=><HeighstCard key={data.id} data={data}></HeighstCard>)
                }
            </div>
        </div>
    );
};

export default HighstRate;