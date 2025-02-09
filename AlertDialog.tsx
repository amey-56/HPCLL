import React from 'react';
import { AlertTriangle, Check } from 'lucide-react';

export function AlertDialog() {
  return (
    <dialog
      id="alert-dialog"
      className="rounded-2xl shadow-2xl p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="w-[500px] max-w-full">
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white flex items-center space-x-3">
          <AlertTriangle className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Plant Alert</h3>
        </div>
        
        <div className="p-8 bg-white">
          <p className="text-gray-700 text-lg mb-6">
            We've detected an issue in the plant operation. Here are the viable solutions:
          </p>
          
          <div className="space-y-4">
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-lg mb-2">Solution 1</h4>
              <p className="text-gray-600">Adjust carbon capture rate by 15%</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
              <div className="flex items-center space-x-3 mb-2">
                <Check className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-lg">Solution 2 (Recommended)</h4>
              </div>
              <p className="text-gray-600">
                Optimize absorption column parameters and increase solvent flow
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors">
              <h4 className="font-bold text-lg mb-2">Solution 3</h4>
              <p className="text-gray-600">Initiate emergency shutdown protocol</p>
            </div>
          </div>

          <div className="h-32 flex items-center justify-center border-t border-gray-100 mt-8">
            <p className="text-gray-500">Space reserved for mascot</p>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              onClick={() => {
                const dialog = document.getElementById('alert-dialog') as HTMLDialogElement;
                dialog.close();
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}