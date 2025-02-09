import React, { useEffect } from 'react';
import { AlertDialog } from '../components/AlertDialog';

function Financials() {
  useEffect(() => {
    const dialog = document.getElementById('alert-dialog') as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }, []);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Financial Analytics
        </h1>
        <p className="text-gray-600 text-lg">Track and analyze financial metrics</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Coming Soon</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our financial analytics dashboard is currently under development.
            Check back soon for detailed financial insights and reports.
          </p>
        </div>
      </div>

      <AlertDialog />
    </div>
  );
}

export default Financials