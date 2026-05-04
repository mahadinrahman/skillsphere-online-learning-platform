import React from 'react';

const StudyTechnique = () => {
    return (
        <div>

    <section className="py-16 bg-white">
      
    
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Learning Tips
        </h2>
        <p className="text-gray-500 mt-3">
          Smart techniques to boost your learning efficiency 🚀
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 px-4">

        {/* Study Techniques */}
        <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            📚 Study Techniques
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>• Pomodoro Technique (25 min focus + break)</li>
            <li>• Active Recall (test yourself instead of reading)</li>
            <li>• Spaced Repetition (revise over time)</li>
            <li>• Feynman Technique (teach to learn)</li>
          </ul>
        </div>

      
        <div className="bg-gradient-to-br from-fuchsia-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-fuchsia-600 mb-4">
            ⏳ Time Management Tips
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>• Plan your day with to-do list</li>
            <li>• Use 80/20 rule (focus on important topics)</li>
            <li>• Avoid multitasking</li>
            <li>• Set fixed study hours daily</li>
          </ul>
        </div>

      </div>
    </section>

        </div>
    );
};

export default StudyTechnique;