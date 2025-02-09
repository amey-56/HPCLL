import React from 'react';

function Introduction() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Welcome to HPCL's CCUS AI Dashboard
        </h1>
        <p className="text-gray-600 text-lg">Transforming Carbon Capture Through Artificial Intelligence</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">About HPCL</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hindustan Petroleum Corporation Limited (HPCL) is a leading Indian state-owned oil and natural 
          gas company headquartered in Mumbai, Maharashtra. With a commitment to sustainability and 
          innovation, HPCL is at the forefront of implementing cutting-edge technologies to reduce 
          carbon emissions and promote environmental stewardship.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">AI-Powered CCUS Technology</h2>
        <p className="text-blue-100 text-lg leading-relaxed mb-6">
          Our AI dashboard represents a revolutionary approach to Carbon Capture, Utilization, and 
          Storage (CCUS) technology. By leveraging artificial intelligence and machine learning, we can:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Monitor and optimize carbon capture efficiency in real-time",
            "Predict maintenance needs and prevent system failures",
            "Analyze and optimize energy consumption",
            "Track carbon credits and environmental impact",
            "Generate detailed reports and insights for decision-making"
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
              <p className="text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduction