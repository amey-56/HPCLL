import React, { useState } from 'react';
import { LineChart, Activity, TrendingUp, BarChart, PieChart } from 'lucide-react';

function Graphs() {
  const [selectedGraph, setSelectedGraph] = useState<number | null>(null);

  const graphs = [
    {
      title: "Daily CCU Efficiency",
      icon: <LineChart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Carbon Capture Trends",
      icon: <Activity className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Monthly Performance",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Utilization Statistics",
      icon: <BarChart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Resource Distribution",
      icon: <PieChart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          CCU Performance Graphs
        </h1>
        <p className="text-gray-600 text-lg">Real-time monitoring and analysis</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {graphs.map((graph, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => setSelectedGraph(index)}
          >
            <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
              <div className="flex items-center space-x-3">
                {graph.icon}
                <h3 className="text-xl font-bold">{graph.title}</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src={graph.image}
                alt={graph.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-medium">Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGraph !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{graphs[selectedGraph].title}</h3>
              <button
                onClick={() => setSelectedGraph(null)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <img
                src={graphs[selectedGraph].image}
                alt={graphs[selectedGraph].title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Graphs