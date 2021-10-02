import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/home';
import Input from './components/pages/input';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/input">
          <Input />
        </Route>
        <Route path="/dashboard">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
