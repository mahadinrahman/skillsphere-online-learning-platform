'use client'
import AllCards from '@/components/AllCards';
import { use, useState } from 'react';
import {Button, Label, SearchField} from "@heroui/react";

    const dataPromise =  fetch('https://skillsphere-online-learning-platfor-topaz.vercel.app/data.json').then(res=> res.json());

const AllCoursesPage = () => {

   const datas=use(dataPromise);

      const [filteredCourses, setFilteredCourses] = useState(datas);
      const [search,setSearch]=useState('');
  
      const handleSearch=()=>{
    const result=datas.filter(data=>data.title.toLowerCase().includes(search.toLowerCase())
   )
   setFilteredCourses(result);

  }

    return (
        <div className='max-w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center mt-15 text-fuchsia-900'>All Courses</h2>
             <SearchField name="search" className="w-90 mx-auto my-5">
                <Label>Search Courses</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className=" " placeholder="Search..." type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

                    <SearchField.ClearButton />
                    <Button variant="outline" onClick={handleSearch}>
                        Search
                    </Button>
                </SearchField.Group>
            </SearchField>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 mt-13'>


                {
                    filteredCourses.map(data => <AllCards key={data.id} data={data} ></AllCards>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;