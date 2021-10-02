import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/home';
import Input from './components/pages/input';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/input">
            <Input />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
