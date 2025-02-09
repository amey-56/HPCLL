import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BarChart3, FileText, DollarSign, Lightbulb, Home, AlertTriangle, Fuel } from 'lucide-react';
import Introduction from './pages/Introduction';
import Graphs from './pages/Graphs';
import Reports from './pages/Reports';
import Financials from './pages/Financials';
import Ideations from './pages/Ideations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-lg flex items-center justify-center">
                <Fuel size={32} className="text-blue-900" />
              </div>
              <div className="border-l-2 border-blue-400 pl-3">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  CCUS AI Dashboard
                </span>
              </div>
            </div>
            <div className="flex space-x-8">
              <Link to="/" className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                <Home size={20} />
                <span className="font-medium">Introduction</span>
              </Link>
              <Link to="/graphs" className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                <BarChart3 size={20} />
                <span className="font-medium">Graphs</span>
              </Link>
              <Link to="/reports" className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                <FileText size={20} />
                <span className="font-medium">Reports</span>
              </Link>
              <Link to="/financials" className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                <DollarSign size={20} />
                <span className="font-medium">Financials</span>
              </Link>
              <Link to="/ideations" className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                <Lightbulb size={20} />
                <span className="font-medium">Ideations</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/ideations" element={<Ideations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;