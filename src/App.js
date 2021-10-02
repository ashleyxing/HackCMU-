import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Input from "./components/pages/input";
import Carousel from "./components/pages/carousel";
import CarbonView from "./components/widgets/carbonView";
import WaterView from "./components/widgets/waterView";
import { DataProvider } from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/input'>
            <Input />
          </Route>
          <Route path='/results'>
            <Carousel />
          </Route>
          <Route path='/carbon'>
            <CarbonView />
          </Route>
          <Route path='/water'>
            <WaterView />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
