import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SideMenu from './components/sideMenu';
import Button from './components/button';
import Ideation from './pages/ideation/index';
import Product from './pages/product/index';
import Marketing from './pages/marketing/index';
import Finance from './pages/finance/index';
import Logistics from './pages/logistics/index';
import Launch from './pages/launch/index';
import Bplan from './pages/bplan/index';
import ProgressBar from './components/progressbar/index';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = oldProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
            setLoading(false);
          }
          return newProgress;
        });
      }, 100); // Increment progress every 100 milliseconds
    }
  }, [loading]);

  const handleGenerateClick = () => {
    setLoading(true);
    setProgress(0); // Reset progress to 0 when button is clicked
  };

  return (
    <Router>
      <div className="app">
        <SideMenu />
        <div className="formBox">
          <div className="formBody">
            <div className="leftInput">
              <Routes>
                <Route path="/ideation" element={<Ideation />} />
                <Route path="/product" element={<Product />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/logistics" element={<Logistics />} />
                <Route path="/launch" element={<Launch />} />
                <Route path="/bplan" element={<Bplan />} />
                <Route path="/" element={<Navigate to="/ideation" />} />
              </Routes>
            </div>
            <div className="rightInput">
              Have some other things in your mind? Let us know!
              <div className="inputBox">
                {/* Additional Inputs or Elements */}
              </div>
            </div>
          </div>
          <div className="formFooter">
            <Button variant='ghost'>Previous</Button>
            <Button variant='primary' onClick={handleGenerateClick}>Generate</Button>
          </div>
        </div>
        {loading && (
          <div className="loading-overlay">
            <ProgressBar progress={progress} />
            
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
