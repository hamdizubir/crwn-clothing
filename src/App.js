import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
    <Link to="/">Homepage</Link>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/hats" component={HatsPage}/>
      </Switch>

    </div>
  );
}

export default App;
