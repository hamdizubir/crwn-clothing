import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

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
        <Route  path="/shop" component={ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
