import React, { useState } from 'react';
import { FileText } from 'lucide-react';

function Reports() {
  const [showReport, setShowReport] = useState(false);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          CCUS Reports
        </h1>
        <p className="text-gray-600 text-lg">Comprehensive analysis and insights</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Generate Report</h2>
              <p className="text-blue-100">Click the button to generate the latest CCUS analysis report</p>
            </div>
            <button
              onClick={() => setShowReport(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-blue-50 transition-colors shadow-lg"
            >
              <FileText size={24} />
              <span className="font-bold">Generate Report</span>
            </button>
          </div>
        </div>

        {showReport && (
          <div className="p-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-600 italic text-lg">
                Report content will be displayed here when provided...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports