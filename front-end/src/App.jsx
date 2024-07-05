import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
              <Switch>
                <Route path="/ideation" component={Ideation} />
                <Route path="/product" component={Product} />
                <Route path="/marketing" component={Marketing} />
                <Route path="/finance" component={Finance} />
                <Route path="/logistics" component={Logistics} />
                <Route path="/launch" component={Launch} />
                <Route path="/bplan" component={Bplan} />
                <Redirect from="/" to="/ideation" />
              </Switch>
            </div>
            <div className="rightInput">
              Have some other things in your mind? Let us know!
            </div>
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
