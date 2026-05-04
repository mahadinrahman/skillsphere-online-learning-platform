import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://skillsphere-online-learning-platfor-topaz.vercel.app/data.json');
    const datas = await res.json();

    const details = datas.find(data => data.id == id);

    return (
        <div >
            <div className='shadow-[0_0_20px_rgba(0,0,0,0.15)] py-9 px-5 rounded-xl relative h-full'>
                <img src={details.image} alt={details.title} width={350} height={400} className='rounded-xl w-full h-70 object-cover' />
                <h3 className='pt-3 font-medium pb-1'>{details.title}</h3>
                <p className='bg-indigo-100 text-indigo-600 px-2 rounded-full absolute right-11 top-11'>⭐{details.rating}</p>
                <p className='text-lg font-bold mt-3'>Instructor: {details.instructor}</p>

                <p className='mt-3'>{details.description}</p>
                <div>
                    <p className='mt-3 font-semibold'>Duration: {details.duration}</p>
                    <p className='mt-1  font-semibold'>Level: {details.level}</p>
                    <p className='mt-1 font-semibold'>Category: {details.category}</p>
                    
                </div>
               
            </div>
        </div>
    );
};

export default DetailsPage;