import AllCards from '@/components/AllCards';
import React from 'react';

const AllCoursesPage = async () => {

    const res = await fetch('https://skillsphere-online-learning-platfor-topaz.vercel.app/data.json');
    const datas = await res.json();

    return (
        <div className='max-w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center mt-15 text-fuchsia-900'>All Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-13'>
                {
                    datas.map(data => <AllCards key={data.id} data={data}></AllCards>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;