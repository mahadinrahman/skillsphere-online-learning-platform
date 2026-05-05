
import { Button } from '@heroui/react';
import Link from 'next/link';

const AllCards = ({ data}) => {
    return (
        <div>
            <div className='shadow-[0_0_20px_rgba(0,0,0,0.15)] py-9 px-5 rounded-xl relative h-full'>
                <img src={data.image} alt={data.title} width={350} height={400} className='rounded-xl w-full h-60 object-cover' />

                <h3 className='pt-3 font-medium pb-1'>{data.title}</h3>

                <p className='bg-indigo-100 text-indigo-600 px-2 rounded-full absolute right-11 top-11'>⭐{data.rating}</p>
                <p className='text-lg font-bold mt-3'>{data.instructor}</p>
                <Link href={`/courses/${data.id}`} passHref>
                    <Button variant="outline" className="w-full mt-3">
                        Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default AllCards;