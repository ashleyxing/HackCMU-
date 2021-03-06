import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Input from "./components/pages/input";
import Carousel from "./components/pages/carousel";
import { DataProvider } from "./components/DataProvider";
import SubstituteView from "./components/widgets/substituteView";


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
          {/* <Route path='/carbon'>
            <CarbonView />
          </Route>
          <Route path='/water'>
            <WaterView />
          </Route> */}
          <Route path='/substitute'>
            <SubstituteView />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
