import logo from './logo.svg';
import './App.css';
import Card from './Component/CardFile/Card';
import CardFile from './Component/CardFile/CardFile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DetailScreen from './Component/CardFile/DetailScreen';


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={CardFile} />
          <Route exact path="/details/:id" component={DetailScreen} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
