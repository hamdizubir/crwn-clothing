import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
    <Link to="/">Homepage</Link>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        {/* <Route  path="/signin" component={SignInAndSignUpPage}/> */}
      </Switch>

    </div>
  );
}

export default App;
