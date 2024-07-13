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

function App() {
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
            {/* <div className="rightInput">
              Have some other things in your mind? Let us know!
              <div className="inputBox">
                {/* Additional Inputs or Elements
              </div>
            </div> */}
          </div>
          <div className="formFooter">
            <Button variant='ghost'>Previous</Button>
            <Button variant='primary'>Generate</Button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
