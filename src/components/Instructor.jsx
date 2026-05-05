import React from 'react';

const Instructor = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12 px-4 ">
        <h2 className="text-4xl font-bold text-gray-800">
          Top Instructors
        </h2>
        <p className="text-gray-500 mt-3">
          Learn from expert mentors around the world
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 ">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group animate-animated animate-in">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="w-full h-40 object-cover group-hover:scale-105 transition"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Web Development Expert</p>
            <p className="mt-2 text-indigo-600 font-semibold">⭐ 4.9</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group ">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            className="w-full h-40 object-cover group-hover:scale-105 transition"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">Sarah Khan</h3>
            <p className="text-sm text-gray-500">JavaScript Specialist</p>
            <p className="mt-2 text-indigo-600 font-semibold">⭐ 4.6</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group ">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            className="w-full h-40 object-cover group-hover:scale-105 transition"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">Emily Watson</h3>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="mt-2 text-indigo-600 font-semibold">⭐ 4.7</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group ">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            className="w-full h-40 object-cover group-hover:scale-105 transition"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">Michael Lee</h3>
            <p className="text-sm text-gray-500">Data Science Mentor</p>
            <p className="mt-2 text-indigo-600 font-semibold">⭐ 4.8</p>
          </div>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Instructor;