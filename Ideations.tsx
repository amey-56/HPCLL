import React from 'react';
import { Lightbulb } from 'lucide-react';

function Ideations() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Innovation Hub
        </h1>
        <p className="text-gray-600 text-lg">Exploring the future of CCUS technology</p>
      </div>
      
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <div className="bg-blue-800/50 backdrop-blur-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Lightbulb size={48} className="mx-auto mb-4" />
              <p className="text-xl">Image placeholder - Add your image here</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Future Innovations</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            This space is reserved for innovative ideas and future developments in CCUS technology.
            Add your content here to showcase upcoming features and technological advancements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ideations